const ids=new Set(['pirates','olympus','cyberpunk','steampunk','space','western','candy','dinosaurs','phoenix']);
export function cinematicArt(id){return 'assets/cinematic-hd/'+(ids.has(id)?id:'pirates')+'.avif';}
// Image URLs are identity anchors in saved designs. Keep the original stable
// identity while the browser fetches the higher resolution versioned resource.
export function canonicalCinematicAsset(value){return typeof value==='string'?value.replace(/(\/muestra\/cinematic\/assets\/)cinematic-hd\/(?=(?:pirates|olympus|cyberpunk|steampunk|space|western|candy|dinosaurs|phoenix)\.avif(?:[?#]|$))/,'$1cinematic/'):value;}
