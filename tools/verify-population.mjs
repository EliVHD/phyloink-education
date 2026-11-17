import {readFile,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {resolve,dirname} from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import assert from 'node:assert/strict';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..'),folder=resolve(root,'labs/population');
const manifest=JSON.parse(await readFile(resolve(folder,'manifest.json'),'utf8'));
assert.equal(manifest.format,'phyloink-population-walkthrough-inventory');assert.equal(manifest.version,1);
const expected=['LICENSE','README.md','SOURCES.md','activity.json','student-handout.html','student-handout.pdf','teacher-notes.md','verification.json'];
assert.deepEqual(manifest.files.map(file=>file.path).sort(),expected);assert.deepEqual((await readdir(folder)).sort(),[...expected,'manifest.json'].sort());
for(const entry of manifest.files){const bytes=await readFile(resolve(folder,entry.path));assert.equal(bytes.length,entry.bytes);assert.equal(createHash('sha256').update(bytes).digest('hex'),entry.sha256);}
const activity=JSON.parse(await readFile(resolve(folder,'activity.json'),'utf8')),record=JSON.parse(await readFile(resolve(folder,'verification.json'),'utf8'));
assert.equal(activity.walkthroughs.length,2);assert.equal(record.handout.pages,2);assert.equal(record.handout.visuallyInspected,true);assert.equal(record.browser.externalRequests,0);
const index=process.argv.indexOf('--app');
if(index>=0){const app=resolve(process.argv[index+1]),model=await import(pathToFileURL(resolve(app,'src/learn/population.ts')).href),info=JSON.parse(await readFile(resolve(app,'dist/build-info.json'),'utf8'));assert.equal(info.buildId,record.application.buildId);
const [drift,selection]=activity.walkthroughs.map(item=>model.simulatePopulation(item.setup));assert.equal(drift.model,record.model);assert.deepEqual(drift.trials.map(t=>t.counts[40]),[0,37,21,7]);assert.equal(drift.trials[0].counts[20],25);assert.deepEqual(drift.trials[0].boundary,{generation:36,kind:'A lost'});assert.ok(drift.reference.every(p=>p===.5));assert.ok(Math.abs(selection.reference[1]-23/44)<1e-12);assert.deepEqual(selection.trials.map(t=>t.counts[40]),[192,183,200,200]);
for(const item of activity.walkthroughs){const result=model.simulatePopulation(item.setup);assert.deepEqual(model.simulatePopulation(item.setup),result);for(const trial of result.trials){assert.equal(trial.counts.length,item.setup.generations+1);assert.ok(trial.counts.every(count=>Number.isInteger(count)&&count>=0&&count<=2*item.setup.size));}}}
console.log('Two population walkthroughs: exact inventory/hashes'+(index>=0?', recorded build, fixed default counts, references and repeatability':'')+' verified.');
