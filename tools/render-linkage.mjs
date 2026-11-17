import {readFile,writeFile} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..'),folder=resolve(root,'labs/linkage');
const arg=name=>{const index=process.argv.indexOf(name);return index<0?null:process.argv[index+1];};
const appArg=arg('--app');if(!appArg)throw new Error('Use --app /path/to/the/reviewed/phyloink checkout.');
const app=resolve(appArg),activity=JSON.parse(await readFile(resolve(folder,'activity.json'),'utf8')),build=JSON.parse(await readFile(resolve(app,'dist/build-info.json'),'utf8'));
if(activity.format!=='phyloink-linkage-walkthrough'||activity.version!==1||activity.model!=='linked-two-locus-v1')throw new Error('Unsupported linkage authoring configuration/model.');
const api=await import(pathToFileURL(resolve(app,'src/learn/worksheet.ts')).href);
const capture={kind:'linkage',setup:activity.setup,count:activity.sample.count,seed:activity.sample.seed},options={title:activity.title,instructions:activity.instructions,teacherNotes:'',paper:'A4',answerLines:3,tipCodes:true,includeData:true,prompts:activity.prompts};
const sheet=await api.prepareWorksheet(capture,options,build),output=await api.worksheetPackage(sheet,'student');
for(const [target,source] of [['student-handout.html','student.html'],['student-handout.txt','student.txt'],['parents.svg','figures/linkage-parents.svg'],['context.json','context.json']])await writeFile(resolve(folder,target),output.files[source]);
const moduleArg=arg('--playwright-module');
if(moduleArg){
  const {chromium}=await import(pathToFileURL(resolve(moduleArg)).href),browser=await chromium.launch({channel:arg('--browser-channel')??'msedge',headless:true});
  try{const page=await browser.newPage(),requests=[],errors=[];page.on('request',r=>requests.push(r.url()));page.on('pageerror',e=>errors.push(e.message));const url=pathToFileURL(resolve(folder,'student-handout.html')).href;await page.goto(url);await page.emulateMedia({media:'print'});await page.pdf({path:resolve(folder,'student-handout.pdf'),preferCSSPageSize:true,printBackground:true});if(errors.length||requests.some(request=>request!==url))throw new Error('Unexpected handout errors or requests.');}finally{await browser.close();}
}
console.log('Linkage student artifacts regenerated from educator setup and app build '+build.buildId+'. Review print pages and refresh verification/inventory before distribution.');
