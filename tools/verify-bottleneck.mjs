import {readFile,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {resolve,dirname} from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import assert from 'node:assert/strict';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..'),folder=resolve(root,'labs/bottleneck'),sha=bytes=>createHash('sha256').update(bytes).digest('hex');
const manifest=JSON.parse(await readFile(resolve(folder,'manifest.json'),'utf8')),record=JSON.parse(await readFile(resolve(folder,'verification.json'),'utf8')),activity=JSON.parse(await readFile(resolve(folder,'activity.json'),'utf8'));
assert.equal(manifest.format,'phyloink-bottleneck-walkthrough-inventory');assert.equal(manifest.version,1);
const expected=['LICENSE','README.md','SOURCES.md','activity.json','bottleneck-counts.csv','context.json','paths.svg','student-handout.html','student-handout.pdf','student-handout.txt','teacher-notes.md','verification.json'];
assert.deepEqual(manifest.files.map(file=>file.path).sort(),expected);assert.deepEqual((await readdir(folder)).sort(),[...expected,'manifest.json'].sort());
for(const entry of manifest.files){const bytes=await readFile(resolve(folder,entry.path));assert.equal(sha(bytes),entry.sha256,entry.path);assert.equal(bytes.length,entry.bytes);}
for(const entry of record.olderResources){assert.match(entry.path,/^(?:scenarios|worksheet-export|labs\/(?:inheritance|population|linkage))\/[A-Za-z0-9][A-Za-z0-9.-]*$/);const bytes=await readFile(resolve(root,entry.path));assert.equal(sha(bytes),entry.sha256,entry.path);assert.equal(bytes.length,entry.bytes);}
assert.equal(activity.format,'phyloink-bottleneck-walkthrough');assert.equal(activity.version,1);assert.equal(activity.model,'neutral-bottleneck-recovery-v1');assert.deepEqual(activity.setup,{initialSize:100,aCopies:100,bottleneckSize:5,bottleneckStart:10,bottleneckDuration:10,generations:40,replicates:4,seed:1});assert.equal(activity.prompts.length,3);assert.ok(record.handout.everyPageVisuallyInspected);
const index=process.argv.indexOf('--app');
if(index>=0){const app=resolve(process.argv[index+1]),build=JSON.parse(await readFile(resolve(app,'dist/build-info.json'),'utf8'));assert.equal(build.buildId,record.application.buildId);const model=await import(pathToFileURL(resolve(app,'src/learn/bottleneck.ts')).href),api=await import(pathToFileURL(resolve(app,'src/learn/worksheet.ts')).href),result=model.simulateBottleneck(activity.setup);
assert.deepEqual(result.conditions[0].trials.map(t=>t.counts[40]),[186,200,0,93]);assert.deepEqual(result.conditions[1].trials.map(t=>t.counts[40]),[128,155,175,94]);assert.deepEqual(result.conditions[0].trials[1].boundary,{generation:18,kind:'A fixed'});assert.deepEqual(result.conditions[0].trials[2].boundary,{generation:14,kind:'A lost'});
const options={title:activity.title,instructions:activity.instructions,teacherNotes:'',paper:'A4',answerLines:3,tipCodes:true,includeData:true,prompts:activity.prompts},capture={kind:'bottleneck',setup:activity.setup},sheet=await api.prepareWorksheet(capture,options,build),student=await api.worksheetPackage(sheet,'student');
for(const[target,source]of[['student-handout.html','student.html'],['student-handout.txt','student.txt'],['paths.svg','figures/bottleneck-student.svg'],['context.json','context.json'],['bottleneck-counts.csv','bottleneck-counts.csv']])assert.equal(await readFile(resolve(folder,target),'utf8'),student.files[source],target);
assert.equal(student.files['bottleneck-counts.csv'].trim().split('\r\n').length,329);assert.doesNotMatch(student.files['figures/bottleneck-student.svg'],/data-bottleneck-reference|data-bottleneck-cursor/);
const teacherSheet=await api.prepareWorksheet(capture,{...options,teacherNotes:'PRIVATE_VERIFICATION_NOTE'},build),teacher=await api.worksheetPackage(teacherSheet,'teacher');assert.ok(!JSON.stringify(student.files).includes('PRIVATE_VERIFICATION_NOTE'));assert.ok(!student.files['authoring.json']&&teacher.files['authoring.json']);assert.match(teacher.files['teacher.html'],/PRIVATE_VERIFICATION_NOTE/);assert.ok(!student.files['figures/bottleneck-teacher.svg']&&!teacher.files['figures/bottleneck-student.svg']);
}
console.log('One bottleneck/recovery example: exact files/hashes'+(index>=0?', pinned build, seeded counts, worksheet regeneration and role separation':'')+' verified. Print review is a separately recorded check.');
