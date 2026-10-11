import { readFile, writeFile } from 'node:fs/promises';
const source = 'public/muestra/socio.js';
let text = await readFile(source,'utf8');
text = text.replaceAll('https://rushyclub.com/api/demo/evento','/api/demo/evento');
await writeFile(source,text);
const html = 'public/muestra/socio.html';
text = await readFile(html,'utf8');
text = text.replace("connect-src 'self' https://rushyclub.com", "connect-src 'self'");
await writeFile(html,text);
const lobby = 'public/muestra/socio-lobby.js';
text = await readFile(lobby,'utf8');
// Allow the same response contract on the local HTTP development server.
text = text.replace('/^https:\\/\\//i.test(n.url)', '/^https?:\\/\\//i.test(n.url)');
await writeFile(lobby,text);
console.log('Local demo endpoints adapted');
