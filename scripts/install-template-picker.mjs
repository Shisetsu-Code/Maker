import {readFile,writeFile} from 'node:fs/promises';
export function installTemplatePickerHtml(html){if(!html.includes('href="template-picker.css"'))html=html.replace('</head>','<link rel="stylesheet" href="template-picker.css">\n</head>');if(!html.includes('src="template-picker.js"'))html=html.replace('</body>','<script type="module" src="template-picker.js"></script>\n</body>');return html;}
export async function installTemplatePicker(){const path='public/muestra/socio.html';await writeFile(path,installTemplatePickerHtml(await readFile(path,'utf8')));}
if(process.argv[1]?.endsWith('install-template-picker.mjs'))await installTemplatePicker();
