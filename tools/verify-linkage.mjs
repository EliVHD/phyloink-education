import {readFile,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {resolve,dirname} from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import assert from 'node:assert/strict';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..'),folder=resolve(root,'labs/linkage'),sha=bytes=>createHash('sha256').update(bytes).digest('hex');
const manifest=JSON.parse(await readFile(resolve(folder,'manifest.json'),'utf8')),record=JSON.parse(await readFile(resolve(folder,'verification.json'),'utf8')),activity=JSON.parse(await readFile(resolve(folder,'activity.json'),'utf8'));
assert.equal(manifest.format,'phyloink-linkage-walkthrough-inventory');assert.equal(manifest.version,1);
const expected=['LICENSE','README.md','SOURCES.md','activity.json','context.json','parents.svg','student-handout.html','student-handout.pdf','student-handout.txt','teacher-notes.md','verification.json'];
assert.deepEqual(manifest.files.map(file=>file.path).sort(),expected);assert.deepEqual((await readdir(folder)).sort(),[...expected,'manifest.json'].sort());
for(const entry of manifest.files){const bytes=await readFile(resolve(folder,entry.path));assert.equal(sha(bytes),entry.sha256,entry.path);assert.equal(bytes.length,entry.bytes);}
assert.equal(activity.format,'phyloink-linkage-walkthrough');assert.equal(activity.version,1);assert.equal(activity.model,'linked-two-locus-v1');assert.deepEqual(activity.setup,{parent1:'AB/ab',parent2:'ab/ab',recombinationPercent:10});assert.deepEqual(activity.sample,{count:100,seed:1});assert.equal(activity.prompts.length,3);assert.ok(record.handout.everyPageVisuallyInspected);
const index=process.argv.indexOf('--app');
if(index>=0){const app=resolve(process.argv[index+1]),build=JSON.parse(await readFile(resolve(app,'dist/build-info.json'),'utf8'));assert.equal(build.buildId,record.application.buildId);const model=await import(pathToFileURL(resolve(app,'src/learn/linkage.ts')).href),api=await import(pathToFileURL(resolve(app,'src/learn/worksheet.ts')).href);
const cross=model.createLinkageCross(activity.setup),sample=model.sampleLinkedOffspring(activity.setup,activity.sample.count,activity.sample.seed);assert.deepEqual(cross.gametes1.map(row=>row.ways/row.denominator),[.45,.05,.05,.45]);assert.deepEqual(sample.gametes1.map(row=>row.count),[52,2,7,39]);
const options={title:activity.title,instructions:activity.instructions,teacherNotes:'',paper:'A4',answerLines:3,tipCodes:true,includeData:true,prompts:activity.prompts},capture={kind:'linkage',setup:activity.setup,count:activity.sample.count,seed:activity.sample.seed},sheet=await api.prepareWorksheet(capture,options,build),student=await api.worksheetPackage(sheet,'student');
for(const[target,source]of[['student-handout.html','student.html'],['student-handout.txt','student.txt'],['parents.svg','figures/linkage-parents.svg'],['context.json','context.json']])assert.equal(await readFile(resolve(folder,target),'utf8'),student.files[source],target);
const teacherSheet=await api.prepareWorksheet(capture,{...options,teacherNotes:'PRIVATE_VERIFICATION_NOTE'},build),teacher=await api.worksheetPackage(teacherSheet,'teacher');assert.ok(!JSON.stringify(student.files).includes('PRIVATE_VERIFICATION_NOTE'));assert.ok(!student.files['authoring.json']&&teacher.files['authoring.json']);assert.match(teacher.files['teacher.html'],/PRIVATE_VERIFICATION_NOTE/);
}
console.log('One linkage test cross: exact files/hashes'+(index>=0?', pinned app build, probabilities, seeded counts, regenerated worksheet and audience separation':'')+' verified. Print review is a separately recorded check.');
