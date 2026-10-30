// Only pixels cross the import/export boundary. Never fetch remote images here.
export async function sanitizeImageData(value,maxChars=600000){
 if(typeof value!=='string'||!/^data:image\/(?:png|jpeg|webp|svg\+xml);base64,[A-Za-z0-9+/=]+$/.test(value)||value.length>12*1024*1024)throw Error('La imagen no tiene un formato válido.');
 const [header,encoded]=value.split(','),decoded=atob(encoded),bytes=Uint8Array.from(decoded,char=>char.charCodeAt(0));
 const blob=new Blob([bytes],{type:header.slice(5,header.indexOf(';'))});let bitmap,url;
 try{
  if(blob.type==='image/svg+xml'){url=URL.createObjectURL(blob);bitmap=new Image();bitmap.src=url;await bitmap.decode();}
  else bitmap=await createImageBitmap(blob);
  const width=bitmap.width||bitmap.naturalWidth,height=bitmap.height||bitmap.naturalHeight;
  if(!width||!height||width*height>16000000)throw Error('La imagen es demasiado grande. Usá una de hasta 16 megapíxeles.');
  const canvas=document.createElement('canvas'),ratio=Math.min(1,2000/Math.max(width,height));canvas.width=Math.max(1,Math.round(width*ratio));canvas.height=Math.max(1,Math.round(height*ratio));canvas.getContext('2d').drawImage(bitmap,0,0,canvas.width,canvas.height);
  let clean=canvas.toDataURL('image/png');
  for(const quality of [.9,.8,.65]){if(clean.length<=maxChars)break;clean=canvas.toDataURL('image/webp',quality);}
  if(clean.length>maxChars)throw Error('La imagen tiene mucho detalle. Probá una versión más pequeña.');
  return clean;
 }finally{bitmap?.close?.();if(url)URL.revokeObjectURL(url);}
}

export async function sanitizeDesignImages(value){
 const cache=new Map();
 async function walk(item,depth=0,path=[]){
  if(depth>12)throw Error('El archivo tiene una estructura demasiado compleja.');
  if(typeof item==='string'&&item.startsWith('data:image/')){
   const limit=path.at(-1)==='image'?(path.includes('content')?800000:1600000):600000,key=limit+':'+item;
   if(!cache.has(key))cache.set(key,sanitizeImageData(item,limit));
   return cache.get(key);
  }
  if(Array.isArray(item))return Promise.all(item.map((child,index)=>walk(child,depth+1,[...path,index])));
  if(item&&typeof item==='object'){const result={};for(const[key,child]of Object.entries(item)){if(['__proto__','constructor','prototype'].includes(key))continue;result[key]=await walk(child,depth+1,[...path,key]);}return result;}
  return item;
 }
 return walk(value);
}
