import {readdir,readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
export function privacyIssues(name,body=''){
 const issues=[];
 if(/(?:\.har|\.env(?:\..*)?|\.pem|\.key|\.map)$/i.test(name))issues.push('private-or-source-artifact');
 for(const [category,pattern]of [
  ['private-key',/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/],
  ['github-token',/\bgh[pousr]_[A-Za-z0-9]{30,}\b/],
  ['aws-access-key',/\bAKIA[0-9A-Z]{16}\b/],
  ['bearer-token',/Bearer\s+[A-Za-z0-9._-]{24,}/],
  ['jwt',/\beyJ[A-Za-z0-9_-]{15,}\.[A-Za-z0-9_-]{15,}\.[A-Za-z0-9_-]{15,}/],
  ['private-local-path',/[A-Z]:[\\/]+Users[\\/]+[^\\/"<>]+[\\/]+(?:Desktop|Documents|AppData)[\\/]/i],
 ])if(pattern.test(body))issues.push(category);
 try{if(/\.json$/i.test(name)){const value=JSON.parse(body);if(Array.isArray(value?.log?.entries))issues.push('raw-har-body');}}catch{}
 return issues;
}
async function main(){const root=path.resolve('public'),issues=[];let files=0;
 async function visit(dir){for(const entry of await readdir(dir,{withFileTypes:true})){const file=path.join(dir,entry.name);if(entry.isDirectory())await visit(file);else{files++;const name=path.relative(root,file).replaceAll('\\','/'),body=/\.(?:js|mjs|css|html|json|txt|svg|xml|pem|key)$/i.test(name)?await readFile(file,'utf8'):'';for(const category of privacyIssues(name,body))issues.push({path:name,category});}}}
 await visit(root);console.log(JSON.stringify({files,issues}));if(issues.length)process.exitCode=1;
}
if(process.argv[1]&&fileURLToPath(import.meta.url)===path.resolve(process.argv[1]))await main();
