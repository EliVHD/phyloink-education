import {readFile,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {resolve,dirname} from 'node:path';
import assert from 'node:assert/strict';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const record=JSON.parse(await readFile(resolve(root,'scenarios/verification.json'),'utf8'));
const sha=bytes=>createHash('sha256').update(bytes).digest('hex');
assert.deepEqual((await readdir(resolve(root,'scenarios'))).sort(),['README.md','verification.json',...record.files.map(file=>file.path)].sort());
const index=process.argv.indexOf('--app');
const prepare=index>=0?(await import(pathToFileURL(resolve(process.argv[index+1],'src/learn/scenario.ts')).href)).prepareScenario:null;
for(const entry of record.files){
  assert.ok(/^[a-z0-9-]+\.phyloink-activity\.json$/.test(entry.path));
  const bytes=await readFile(resolve(root,'scenarios',entry.path));assert.equal(sha(bytes),entry.sha256);
  const scenario=JSON.parse(bytes.toString('utf8'));
  assert.equal(scenario.format,'phyloink-learning-scenario');assert.equal(scenario.version,1);
  assert.equal(sha(Buffer.from(scenario.source.newick,'utf8')),scenario.source.sha256);assert.equal(scenario.source.sha256,entry.sourceSha256);
  assert.equal(scenario.activities.length,entry.questions);assert.equal(scenario.tipIds.length,entry.sampleTips);
  assert.ok(!Object.hasOwn(scenario,'answers')&&!Object.hasOwn(scenario,'progress'));
  if(prepare)await prepare(bytes.toString('utf8'));
  console.log(`${entry.path}: inventory/source hashes${prepare?' and strict application validation':''} passed`);
}
for(const entry of record.originalPackages){
  assert.ok(/^(downloads\/[a-z0-9-]+\.zip|examples\/[a-z0-9-]+\/student-handout\.pdf)$/.test(entry.path));
  assert.equal(sha(await readFile(resolve(root,entry.path))),entry.sha256,`Existing pack/handout changed: ${entry.path}`);
}
console.log('Original three ZIP packs and three PDFs remain byte-identical.');
