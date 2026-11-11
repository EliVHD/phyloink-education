// Create editable HTML and print-resolution figure PNGs. Requires Playwright and Edge.
import {readFile,writeFile,mkdir,readdir} from 'node:fs/promises';
import {resolve,join,dirname} from 'node:path';
import {pathToFileURL,fileURLToPath} from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const i=process.argv.indexOf('--playwright-module');
const {chromium}=i<0?await import('playwright'):await import(pathToFileURL(resolve(process.argv[i+1])).href);
const browser=await chromium.launch({channel:'msedge',headless:true});
const page=await browser.newPage({deviceScaleFactor:300/96});
await mkdir(join(root,'tmp/figures'),{recursive:true});
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const css='body{font:16px/1.5 Arial,sans-serif;color:#20362e;max-width:180mm;margin:20px auto;padding:0 15px}h1{font-size:27px;line-height:1.2}figure{margin:16px 0}img{display:block;max-width:100%;height:auto}figcaption,.source{font-size:12px}li{margin:12px 0 24px}.answer{height:15px;border-bottom:1px solid #bcc9bf}section{margin-bottom:30px}.description{font-size:13px}a{color:#285e47}@media print{@page{size:A4;margin:15mm}body{padding:0;margin:0;font-size:10pt}section{break-after:page;margin:0}section:last-child{break-after:auto}header{display:none}h1{font-size:18pt}li{break-inside:avoid}img{width:180mm}.source{font-size:7pt}}';
try{
 for(const folder of (await readdir(join(root,'examples'))).sort()){
  const dir=join(root,'examples',folder),activity=JSON.parse(await readFile(join(dir,'activity.json'),'utf8'));
  const sections=[];
  for(const [index,sheet]of activity.pages.entries()){
   const svg=(await readFile(join(dir,sheet.figure),'utf8')).replace(/<\?xml[^>]*\?>/,'');
   await page.setViewportSize({width:740,height:Math.ceil(sheet.figureHeightMm*96/25.4)+20});
   await page.setContent('<html><body style="margin:0;background:white">'+svg+'</body></html>');
   await page.evaluate(()=>document.fonts.ready);
   await page.locator('svg').screenshot({path:join(root,'tmp/figures',`${folder}-${index+1}.png`)});
   sections.push(`<section><h1>${esc(activity.title)}${index?' — continued':''}</h1>${index?'':`<p>${esc(activity.purpose)}</p><p>${esc(activity.instructions)}</p><p>Name: ______________________ Date: ______________</p>`}<figure><img src="${esc(sheet.figure)}" alt="${esc(activity.relationshipDescription)}"><figcaption>${esc(sheet.caption)}</figcaption></figure><ol>${sheet.questions.map(q=>`<li>${esc(q)}<div class="answer"></div></li>`).join('')}</ol><p class="description"><strong>Text description:</strong> ${esc(activity.relationshipDescription)}</p><p class="source">${esc(activity.sourceLine)}</p></section>`);
  }
  await writeFile(join(dir,'student-handout.html'),'<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+esc(activity.title)+' — PhyloInk education</title><style>'+css+'</style></head><body><header><a href="README.md">Activity notes</a> · <a href="SOURCES.md">Sources</a></header><main>'+sections.join('')+'</main></body></html>\n');
 }
}finally{await browser.close();}
console.log('Editable HTML and 300 dpi figure PNGs created.');
