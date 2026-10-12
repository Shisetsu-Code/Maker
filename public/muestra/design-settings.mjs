export const FONT_OPTIONS = Object.freeze({ original:'', system:'system-ui, sans-serif', barlow:'Barlow, sans-serif', archivo:'Archivo, sans-serif', oswald:'Oswald, sans-serif', editorial:'Georgia, serif' });
export const DEFAULT_SETTINGS = Object.freeze({font:'original',scale:100,weight:'original',radius:'original',image:'',imageEnabled:true,shade:55,position:'center',fit:'cover'});
const number=(value,min,max,fallback)=>value==null||value===''?fallback:Number.isFinite(Number(value))?Math.min(max,Math.max(min,Number(value))):fallback;
export function normalizeSettings(value={}) {
  if(!value||typeof value!=='object'||Array.isArray(value))value={};
  const image=typeof value.image==='string'&&value.image.length<=1600000&&/^data:image\/(?:jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(value.image)?value.image:'';
  return {font:Object.hasOwn(FONT_OPTIONS,value.font)?value.font:'original',scale:number(value.scale,85,120,100),weight:['original','400','600','700'].includes(value.weight)?value.weight:'original',radius:value.radius==null||value.radius==='original'?'original':number(value.radius,0,30,16),image,imageEnabled:value.imageEnabled!==false,shade:number(value.shade,0,90,55),position:['center','top','bottom'].includes(value.position)?value.position:'center',fit:['cover','contain'].includes(value.fit)?value.fit:'cover'};
}
export function designCSS(settings){
  const s=normalizeSettings(settings);
  let css=`:root{--design-text-scale:${s.scale/100}}`;
  if(s.font!=='original')css+=`body,body :is(div,span,p,h1,h2,h3,h4,a,button,input,select,textarea,label,th,td,small,strong){font-family:${FONT_OPTIONS[s.font]} !important}`;
  if(s.weight!=='original')css+=`body :is(h1,h2,h3,h4,button,strong){font-weight:${s.weight} !important}`;
  if(s.scale!==100)css+=`.design-scaled-text{font-size:calc(var(--design-base-size) * var(--design-text-scale)) !important}`;
  if(s.radius!=='original')css+=`:is(.lb-promo,.lb-art,.lb-hero-panel,.game-image,.hero,.spotlight,.lounge,.search){border-radius:${s.radius}px !important}`;
  if(s.image&&s.imageEnabled)css+=`html{background-color:#101010 !important;background-image:linear-gradient(rgba(0,0,0,${s.shade/100}),rgba(0,0,0,${s.shade/100})),url("${s.image}") !important;background-size:${s.fit} !important;background-position:center ${s.position} !important;background-repeat:no-repeat !important;background-attachment:fixed !important}body,#root,#root>div,.lb,.mb-app,main{background:transparent !important}body.resort-view main{background:rgba(245,243,237,.96) !important;border-radius:18px;width:calc(100% - 24px);margin-top:14px;margin-bottom:14px}body.resort-view header{background:rgba(245,243,237,.97) !important}`;
  return css;
}
