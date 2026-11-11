// Authoring helper. Serve the reviewed app, then run from the education repository:
// node tools/prepare-projects.mjs --app PATH [--url http://127.0.0.1:4173]
// Requires Node >=22.18, Playwright and Edge. Projects are authored in the browser
// so layout replay uses the same geometry and text-measurement engine as the app.
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {resolve,join} from 'node:path';
import {pathToFileURL} from 'node:url';
import {execFileSync} from 'node:child_process';
import assert from 'node:assert/strict';
const arg=name=>{const i=process.argv.indexOf(name);return i<0?null:process.argv[i+1];};
if(!arg('--app'))throw new Error('Supply an explicit application checkout with --app.');
const app=resolve(arg('--app')),url=arg('--url')??'http://127.0.0.1:4173';
const {BUNDLED_DATASETS}=await import(pathToFileURL(join(app,'src/datasets.ts')).href);
const {chromium}=arg('--playwright-module')?await import(pathToFileURL(resolve(arg('--playwright-module'))).href):await import('playwright');
const build=JSON.parse(await readFile(join(app,'dist/build-info.json'),'utf8')),manifest=await readFile(join(app,'dist/build-manifest.json'),'utf8');
const commit=execFileSync('git',['-C',app,'rev-parse','HEAD'],{encoding:'utf8'}).trim(),dirty=!!execFileSync('git',['-C',app,'status','--porcelain'],{encoding:'utf8'}).trim();
const browser=await chromium.launch({channel:'msedge',headless:true}),page=await browser.newPage();
await page.goto(url+'/guide.html');
const servedBuild=await(await page.request.get(url+'/build-info.json')).json();assert.deepEqual(servedBuild,build,'Served app must match the chosen checkout build.');
const mammals=['Homo_sapiens','Pan_troglodytes','Gorilla_gorilla','Mus_musculus','Rattus_norvegicus','Oryctolagus_cuniculus'];
const specs=[
 {folder:'01-common-ancestry',title:'Common ancestry and clades',dataset:'upham-2019',names:mammals,kinds:['rectangular'],question:'Among these six sampled mammals, which groups share a more recent common ancestor?'},
 {folder:'02-one-tree',title:'One tree, different drawings',dataset:'upham-2019',names:mammals,kinds:['rectangular','circular'],question:'Do the relationships among the same six mammals change when the drawing layout changes?'},
 {folder:'03-evidence-based-illustration',title:'Creating an evidence-based illustration',dataset:'kew-4-order',names:['Pinales','Amborellales','Asparagales','Poales','Fabales','Rosales'],kinds:['rectangular'],question:'What relationships among five sampled flowering-plant orders and one represented gymnosperm outgroup can this source support?'}
];
const summary=[];
try{
for(const spec of specs){
 const dataset=BUNDLED_DATASETS.find(d=>d.id===spec.dataset),text=await readFile(join(app,'data',dataset.file),'utf8');
 const result=await page.evaluate(async({spec,text,build})=>{
  const {prepareBundledDataset}=await import('/app/import.js');
  const {acceptCommand,acceptBasisEdit}=await import('/app/commands.js');
  const {projectTree}=await import('/app/structured/projection.js');
  const {DEFAULT_STRUCTURED}=await import('/app/structured/layout.js');
  const {makeStructuredView}=await import('/app/structured/view.js');
  const {serializeProject,loadAnyProject}=await import('/app/project-v2.js');
  const {exportStructuredFiles}=await import('/app/structured/export.js');
  const {project:base,source,rooted}=await prepareBundledDataset(spec.dataset,text,build);
  let project=acceptBasisEdit(base,{...base.authoring.basis,question:spec.question},source,build);
  const ids=spec.names.map(name=>{const found=source.tips.filter(id=>source.nodes[id].rawLabel===name||source.nodes[id].rawLabel.startsWith(name+'_'));if(found.length!==1)throw new Error('Ambiguous selected source label '+name);return found[0];});
  const labels=Object.fromEntries(ids.map((id,i)=>[id,spec.names[i].replaceAll('_',' ')])),proposal=structuredClone(project);proposal.title=spec.title;
  if(spec.dataset==='upham-2019')proposal.corrections=ids.map(id=>({source_node_id:id,raw_label:source.nodes[id].rawLabel,status:'display-only shortening',display_taxonomy:labels[id],evidence_url:project.authoring.basis.provider,review_date:'2026-11-11'}));
  project=acceptCommand(project,proposal,source,{notes:'Teacher preparation: title and display-label shortening only. Original source labels, bytes and relationships retained.'},build);
  const projection={selection:{kind:'explicit-tips',tipIds:ids},collapse:[],expand:[],reveal:[],childOrder:{}},views=[];
  for(const kind of spec.kinds){
   const settings={...DEFAULT_STRUCTURED,kind,widthMm:180,heightMm:kind==='circular'?170:60,marginMm:10,fontSizePt:kind==='circular'?10:11,fontFamily:'sans-serif',labelPlacement:'horizontal',curves:false,innerRadiusMm:5,outerRadiusMm:45};
   const graph=projectTree(source,rooted,projection,project.corrections);await document.fonts.ready;await document.fonts.load(`${settings.fontSizePt}pt ${settings.fontFamily}`);
   const ctx=document.createElement('canvas').getContext('2d');ctx.font=`${settings.fontSizePt*96/72}px ${settings.fontFamily}`;const k=25.4/96,fontMm=settings.fontSizePt*25.4/72;
   const measurements={fontFamily:settings.fontFamily,fontSizePt:settings.fontSizePt,fontStatus:document.fonts.check(`${settings.fontSizePt}pt ${settings.fontFamily}`)?'available':'substituted',metrics:Object.fromEntries(graph.endpoints.map(id=>{const text=graph.nodes[id].label,m=ctx.measureText(text);return[id,{text,widthMm:Math.max(m.width,m.actualBoundingBoxLeft+m.actualBoundingBoxRight)*k,advanceMm:m.width*k,leftMm:-m.actualBoundingBoxLeft*k,rightMm:m.actualBoundingBoxRight*k,ascentMm:Math.max(m.actualBoundingBoxAscent*k,fontMm*.75),descentMm:Math.max(m.actualBoundingBoxDescent*k,fontMm*.2)}];}))};
   const view=makeStructuredView(project,source,projection,settings,measurements,`example-${kind}`,`${spec.title} — ${kind}`);if(view.qa.status!=='checked')throw new Error(JSON.stringify(view.qa));
   const changed=structuredClone(project);changed.authoring.structuredViews[view.id]=view;changed.authoring.activeStructuredViewId=view.id;
   project=acceptCommand(project,changed,source,{methods:['selected-taxon-projection','clade-cluster','compound-validation'],replace:true,parameters:{projection,settings,measuredFontStatus:measurements.fontStatus},notes:'Authored and accepted in the browser with measured labels and current geometry checks. Geometry QA is not biological validation.'},build);views.push(view);
  }
  if(views.length>1){const changed=structuredClone(project);changed.authoring.activeStructuredViewId=views[0].id;project=acceptCommand(project,changed,source,{notes:'Choose rectangular opening view and retain the circular comparison.'},build);}
  const serialized=serializeProject(project,build),loaded=await loadAnyProject(serialized,build);if(loaded.source.text!==text)throw new Error('Source changed on round trip.');
  const artwork=views.map(view=>{const active=structuredClone(project);active.authoring.activeStructuredViewId=view.id;return {kind:view.scene.settings.kind,files:exportStructuredFiles(source,active,build)};});
  const lca=(a,b)=>{const set=new Set();for(let id=a;id;id=rooted.nodes[id].parent)set.add(id);for(let id=b;id;id=rooted.nodes[id].parent)if(set.has(id))return id;throw new Error('No shared ancestor');};
  const pairs=spec.dataset==='upham-2019'?[[0,1],[0,2],[3,4],[0,3]]:[[2,3],[4,5],[1,3]];
  const relations=pairs.map(([a,b])=>{const id=lca(ids[a],ids[b]);return {taxa:[labels[ids[a]],labels[ids[b]]],sourceNodeId:id,representedDescendants:ids.filter(t=>rooted.nodes[id].members.includes(t)).map(t=>labels[t]),fullSourceDescendantTips:rooted.nodes[id].members.length};});
  return {serialized,artwork,root:project.authoring.root,sourceSha256:source.sha256,selectedTips:ids.map(id=>({id,label:labels[id],rawLabel:source.nodes[id].rawLabel})),relations,views:views.map(v=>({id:v.id,kind:v.scene.settings.kind,qa:v.qa.status,measurements:v.scene.measurements.fontStatus,representedTips:v.graph.representedTips.length,omittedTips:v.graph.omittedTips.length}))};
 },{spec,text,build});
 assert.equal(result.sourceSha256,dataset.sha256);
 if(spec.dataset==='upham-2019'){
  assert.deepEqual(result.relations[0].representedDescendants.slice().sort(),['Homo sapiens','Pan troglodytes']);
  assert.deepEqual(result.relations[1].representedDescendants.slice().sort(),['Gorilla gorilla','Homo sapiens','Pan troglodytes']);
  assert.deepEqual(result.relations[2].representedDescendants.slice().sort(),['Mus musculus','Rattus norvegicus']);
 }else{assert.deepEqual(result.relations[0].representedDescendants.slice().sort(),['Asparagales','Poales']);assert.deepEqual(result.relations[1].representedDescendants.slice().sort(),['Fabales','Rosales']);}
 const dir=join('examples',spec.folder);await mkdir(join(dir,'artwork'),{recursive:true});
 await writeFile(join(dir,'project.treeproject.json'),result.serialized);await writeFile(join(dir,'source.nwk'),text);await writeFile(join(dir,'application-build-manifest.json'),manifest);
 for(const art of result.artwork){const sub=join(dir,'artwork',art.kind);await mkdir(sub,{recursive:true});for(const[name,value]of Object.entries(art.files))await writeFile(join(sub,name),value);}
 const verification={checkedAt:'2026-11-11',application:{name:'PhyloInk',version:build.appVersion,commit,workingTreeDirty:dirty,buildId:build.buildId,browser:await browser.version()},sourceSha256:result.sourceSha256,sourceUnchanged:true,selectedTips:result.selectedTips,relations:result.relations,views:result.views,roundTrip:'Browser loadAnyProject passed; exact source preserved',browserOpenSave:'pending',printReview:'pending'};
 await writeFile(join(dir,'verification.json'),JSON.stringify(verification,null,2)+'\n');
 await writeFile(join(dir,'source-record.json'),JSON.stringify({dataset,sourceSha256:result.sourceSha256,selectedTips:result.selectedTips,transformations:['Source copied unchanged.','Selected source tip identities; omitted memberships retained.',...(spec.dataset==='upham-2019'?['Display names shortened to genus and species; original source labels retained.']:[]),'Nonmetric layouts authored in browser; no dating or relationship inference.'],root:result.root},null,2)+'\n');
 const credits=dataset.references.map(r=>`${r.authors.join('; ')} (${r.year}). ${r.title}. ${r.url}`).join('\n\n');
 await writeFile(join(dir,'SOURCES.md'),`# Sources and modifications\n\n${credits}\n\nDataset: ${dataset.release}. Source: ${dataset.sourceUrl}\n\nTerms: ${dataset.license} — ${dataset.licenseUrl}\n\nExact Newick SHA256: ${result.sourceSha256}. Original bytes remain in source.nwk and the project.\n\n${dataset.evidence}\n\nRooting: ${dataset.rootEvidence}\n\nLimitations: ${dataset.limitations}\n\nPreparation: selected source identities displayed as nonmetric cladograms, with omitted memberships and source paths retained. No new inference, dating or arbitrary resolution.${spec.dataset==='upham-2019'?' Display names shortened to genus and species; original labels retained.':''}\n\nNo endorsement by source authors is implied. Original activities and helper code use 0BSD; data retain the terms above.\n`);
 summary.push({folder:spec.folder,source:result.sourceSha256,views:result.views});
}
await writeFile('project-preparation.json',JSON.stringify({preparedAt:'2026-11-11',applicationBuild:build,examples:summary},null,2)+'\n');console.log(JSON.stringify(summary,null,2));
}finally{await browser.close();}
