/** The only contract accepted from templates, imports, links and local storage. No executable fields. */
export const MAX_TEMPLATE_BYTES = 32768;
export const MAX_PROJECT_BYTES = 600000;
export const MAX_CATALOG_BYTES = 1000000;
export const SECTIONS = ['hero', 'categories', 'catalog', 'features', 'faq'];
export const MATERIALS = ['flat', 'glass', 'metal'];
export const SECTION_NAMES = { hero: 'Portada', categories: 'Categorías', catalog: 'Catálogo', features: 'Destacados', faq: 'Preguntas frecuentes' };
export const MATERIAL_NAMES = { flat: 'Plano', glass: 'Glass', metal: 'Metal' };
const clone = value => structuredClone(value);
const bytes = value => new TextEncoder().encode(value).length;
function fail(path, message) { throw new Error(`${path}: ${message}`); }
function object(value, keys, path) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) fail(path, 'se esperaba un objeto');
  for (const key of Object.keys(value)) if (!keys.includes(key)) fail(path, `campo no permitido: ${key}`);
  for (const key of keys) if (!Object.hasOwn(value, key)) fail(path, `falta ${key}`);
  return value;
}
function text(value, min, max, path) {
  if (typeof value !== 'string' || value.length < min || value.length > max || /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/u.test(value)) fail(path, `texto de ${min} a ${max} caracteres`);
  return value;
}
function pick(value, options, path) { if (!options.includes(value)) fail(path, `opción admitida: ${options.join(', ')}`); return value; }
function number(value, min, max, path) { if (!Number.isInteger(value) || value < min || value > max) fail(path, `entero entre ${min} y ${max}`); return value; }
function color(value, path) { if (typeof value !== 'string' || !/^#[0-9a-f]{6}$/i.test(value)) fail(path, 'color hexadecimal #rrggbb'); return value; }
function list(value, options, min, max, path) {
  if (!Array.isArray(value) || value.length < min || value.length > max || new Set(value).size !== value.length) fail(path, 'lista inválida o repetida');
  value.forEach(item => pick(item, options, path)); return value;
}
function decode(value, limit, path) {
  const raw = typeof value === 'string' ? value : JSON.stringify(value);
  if (typeof raw !== 'string' || bytes(raw) > limit) fail(path, 'archivo demasiado grande');
  try { return JSON.parse(raw); } catch { fail(path, 'JSON inválido'); }
}
export function image(value, path = 'imagen') {
  if (value === '') return value;
  if (typeof value !== 'string' || value.length > 280000 || !/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/]+={0,2}$/.test(value)) fail(path, 'sólo imágenes raster locales PNG, JPEG o WebP (máximo 210 KB)');
  let raw; try { raw = atob(value.split(',')[1]); } catch { fail(path, 'base64 inválido'); }
  const valid = value.startsWith('data:image/png;') ? raw.startsWith('\x89PNG\r\n\x1a\n') : value.startsWith('data:image/jpeg;') ? raw.startsWith('\xff\xd8\xff') : raw.startsWith('RIFF') && raw.slice(8,12) === 'WEBP';
  if (!valid) fail(path, 'el contenido no coincide con el formato');
  return value;
}
export function parseTemplate(input) {
  const t = object(decode(input, MAX_TEMPLATE_BYTES, 'Plantilla'), ['format','id','version','name','description','layout','hero','columns','sections','materials'], 'Plantilla');
  pick(t.format, ['maker-template-1'], 'Formato');
  if (!/^[a-z][a-z0-9-]{1,47}$/.test(text(t.id,2,48,'ID'))) fail('ID','usá letras minúsculas, números y guiones');
  if (!/^(0|[1-9]\d{0,3})\.(0|[1-9]\d{0,3})\.(0|[1-9]\d{0,3})$/.test(text(t.version,5,14,'Versión'))) fail('Versión','usá 1.0.0');
  text(t.name,1,60,'Nombre'); text(t.description,1,180,'Descripción');
  pick(t.layout,['classic','sidebar','editorial','compact'],'Distribución'); pick(t.hero,['split','banner'],'Portada');
  number(t.columns,2,6,'Columnas'); list(t.sections,SECTIONS,1,5,'Secciones'); list(t.materials,MATERIALS,1,3,'Materiales');
  if (!t.sections.includes('hero')) fail('Secciones','la portada es obligatoria');
  return t;
}
export function parseCatalog(input) {
  const c=object(decode(input,MAX_CATALOG_BYTES,'Catálogo'),['format','templates'],'Catálogo');
  pick(c.format,['maker-catalog-1'],'Formato');
  if (!Array.isArray(c.templates) || c.templates.length<1 || c.templates.length>40) fail('Catálogo','entre 1 y 40 plantillas');
  const templates=c.templates.map(parseTemplate);
  if (new Set(templates.map(templateKey)).size!==templates.length) fail('Catálogo','ID y versión repetidos');
  return templates;
}
export function parseProject(input) {
  const p=object(decode(input,MAX_PROJECT_BYTES,'Proyecto'),['format','template','site','theme','hidden','order'],'Proyecto');
  pick(p.format,['maker-project-1'],'Formato'); p.template=parseTemplate(p.template);
  const s=object(p.site,['name','tagline','title','description','cta','sectionTitles','logo','heroImage'],'Contenido');
  text(s.name,1,40,'Marca'); text(s.tagline,0,70,'Antetítulo'); text(s.title,1,120,'Título'); text(s.description,0,300,'Descripción'); text(s.cta,1,32,'Botón');
  const titles=object(s.sectionTitles,SECTIONS,'Títulos'); SECTIONS.forEach(k=>text(titles[k],1,70,`Título ${k}`));
  image(s.logo,'Logo'); image(s.heroImage,'Imagen de portada');
  const th=object(p.theme,['material','accent','background','radius','blur','opacity','font'],'Estilo');
  pick(th.material,p.template.materials,'Material');color(th.accent,'Color principal');color(th.background,'Fondo');
  number(th.radius,0,32,'Redondeado');number(th.blur,0,24,'Desenfoque');number(th.opacity,40,95,'Opacidad');pick(th.font,['sans','geometric','serif'],'Tipografía');
  list(p.hidden,SECTIONS.filter(s=>s!=='hero'),0,4,'Secciones ocultas'); list(p.order,SECTIONS,0,5,'Orden');
  return p;
}
export function newProject(template) {
  return parseProject({format:'maker-project-1',template:parseTemplate(template),site:{name:'NOVA CLUB',tagline:'UN UNIVERSO HECHO PARA VOS',title:'Tu próximo\ngran momento.',description:'Una experiencia con tu identidad. Explorá este diseño de muestra y hacelo completamente tuyo.',cta:'Explorar catálogo',sectionTitles:{hero:'Inicio',categories:'Elegí tu universo',catalog:'Una selección para vos',features:'Todo, a tu manera',faq:'Antes de empezar'},logo:'',heroImage:''},theme:{material:template.materials[0],accent:'#ff6b35',background:'#101014',radius:20,blur:16,opacity:76,font:'sans'},hidden:[],order:[]});
}
export function swapTemplate(project, template) {
  const p=parseProject(project); p.template=parseTemplate(template);
  if(!p.template.materials.includes(p.theme.material)) p.theme.material=p.template.materials[0];
  return parseProject(p);
}
export const templateKey = t => `${t.id}@${t.version}`;
export function addTemplate(catalog, template) {
  const t=parseTemplate(template), same=catalog.find(c=>templateKey(c)===templateKey(t));
  if(same) { const prior=parseTemplate(same); if(Object.keys(t).some(key=>JSON.stringify(prior[key])!==JSON.stringify(t[key]))) fail('Versión','ya existe con otro contenido; aumentá la versión o duplicá la plantilla'); return clone(catalog); }
  if(catalog.length>=40) fail('Catálogo','máximo 40 plantillas');
  return [...clone(catalog),t];
}
export function encodeShare(project) {
  const p=parseProject(project); p.site.logo='';p.site.heroImage='';
  const data=new TextEncoder().encode(JSON.stringify(p));
  const base64=btoa(Array.from(data,b=>String.fromCharCode(b)).join('')).replaceAll('+','-').replaceAll('/','_').replaceAll('=','');
  if(base64.length>12000) fail('Enlace','diseño demasiado largo; descargá el proyecto');
  return `#project=${base64}`;
}
export function decodeShare(hash) {
  if(typeof hash!=='string' || hash.length>12009 || !/^#project=[A-Za-z0-9_-]+$/.test(hash)) fail('Enlace','código inválido');
  try { const raw=atob(hash.slice(9).replaceAll('-','+').replaceAll('_','/'));return parseProject(new TextDecoder('utf-8',{fatal:true}).decode(Uint8Array.from(raw,c=>c.charCodeAt(0)))); } catch { fail('Enlace','el proyecto no es válido o está incompleto'); }
}
export function createHistory(initial,limit=40) {
  let past=[], current=clone(initial), future=[];
  return {get current(){return clone(current)},get canUndo(){return past.length>0},get canRedo(){return future.length>0},
    push(value){ if(JSON.stringify(value)===JSON.stringify(current))return;past.push(current);if(past.length>limit)past.shift();current=clone(value);future=[];},
    undo(){if(past.length){future.push(current);current=past.pop();}return clone(current)},
    redo(){if(future.length){past.push(current);current=future.pop();}return clone(current)} };
}
export function luminance(hex) { const rgb=hex.slice(1).match(/../g).map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722; }
export function contrast(a,b) { const x=luminance(a),y=luminance(b);return(Math.max(x,y)+.05)/(Math.min(x,y)+.05); }
export function ink(hex) { return contrast(hex,'#ffffff')>contrast(hex,'#101014')?'#ffffff':'#101014'; }
export function slug(name) {return name.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,40)||'mi-sitio';}
