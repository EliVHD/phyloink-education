import {readFile,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {resolve,dirname} from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import assert from 'node:assert/strict';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..'),folder=resolve(root,'labs/inheritance');
const manifest=JSON.parse(await readFile(resolve(folder,'manifest.json'),'utf8'));
assert.equal(manifest.format,'phyloink-inheritance-walkthrough-inventory');assert.equal(manifest.version,1);
const expected=['LICENSE','README.md','SOURCES.md','activity.json','student-handout.html','student-handout.pdf','teacher-notes.md','verification.json'];
assert.deepEqual(manifest.files.map(file=>file.path).sort(),expected);assert.deepEqual((await readdir(folder)).sort(),[...expected,'manifest.json'].sort());
for(const entry of manifest.files){const bytes=await readFile(resolve(folder,entry.path));assert.equal(bytes.length,entry.bytes);assert.equal(createHash('sha256').update(bytes).digest('hex'),entry.sha256);}
const activity=JSON.parse(await readFile(resolve(folder,'activity.json'),'utf8')),record=JSON.parse(await readFile(resolve(folder,'verification.json'),'utf8'));
assert.equal(activity.walkthroughs.length,2);assert.equal(record.handout.pages,2);assert.equal(record.handout.visuallyInspected,true);assert.equal(record.browser.externalRequests,0);
const index=process.argv.indexOf('--app');
if(index>=0){const app=resolve(process.argv[index+1]),model=await import(pathToFileURL(resolve(app,'src/learn/inheritance.ts')).href);
const info=JSON.parse(await readFile(resolve(app,'dist/build-info.json'),'utf8'));assert.equal(info.buildId,record.application.buildId);
for(const item of activity.walkthroughs){const cross=model.createMendelianCross(item.setup),weights=cross.phenotypes.map(row=>row.ways);assert.deepEqual(weights,item.setup.loci===1?[3,1]:[9,3,3,1]);const sample=model.sampleOffspring(item.setup,item.sample.size,item.sample.seed);assert.equal(sample.offspring.length,item.sample.size);assert.deepEqual(model.sampleOffspring(item.setup,item.sample.size,item.sample.seed),sample);}}
console.log('Two inheritance walkthroughs: exact inventory/hashes, bounded setup parameters'+(index>=0?', recorded application identity and model probabilities':'')+' verified.');
