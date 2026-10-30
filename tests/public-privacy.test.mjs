import {test} from 'node:test';
import assert from 'node:assert/strict';
import {privacyIssues} from '../scripts/check-public-privacy.mjs';
test('public privacy gate detects credentials and capture bodies without echoing values',()=>{
 for(const [name,text]of [['trace.har','{}'],['leak.js','const x="ghp_'+ 'a'.repeat(36)+'"'],['capture.json','{"log":{"entries":[],"creator":{}}}'],['key.pem','-----BEGIN PRIVATE KEY-----']])assert.ok(privacyIssues(name,text).length,name);
 assert.deepEqual(privacyIssues('catalog.json','{"games":[{"name":"Fortune Tiger"}]}'),[]);
});
