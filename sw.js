const CACHE='2027eu-app-v67';
const scope=self.registration.scope;
const page=new URL('index.html',scope).href;
const data=new URL('trip-data.js',scope).href;
const assets=['manifest.webmanifest','icon.svg'];
const absolute=p=>new URL(p,scope).href;
async function fresh(url){const r=await fetch(url,{cache:'no-store',signal:AbortSignal.timeout?AbortSignal.timeout(9000):undefined});if(!r.ok)throw Error('HTTP '+r.status);return r}
let syncing;
async function sync(){
 if(syncing)return syncing;
 syncing=(async()=>{
  const c=await caches.open(CACHE);
  const [oldPage,oldData,newPage,newData]=await Promise.all([c.match(page),c.match(data),fresh(page),fresh(data)]);
  const [a,b,x,y]=await Promise.all([oldPage?.text(),oldData?.text(),newPage.clone().text(),newData.clone().text()]);
  if(!x.includes('TRIP_DATA')||!y.includes('TRIP_DATA'))throw Error('invalid shell');
  await Promise.all([c.put(page,newPage),c.put(data,newData)]);
  return {ok:true,changed:!!oldPage&&!!oldData&&(a!==x||b!==y)};
 })().finally(()=>{syncing=null});
 return syncing;
}
self.addEventListener('install',e=>e.waitUntil((async()=>{await sync();const c=await caches.open(CACHE);await c.addAll(assets.map(absolute));await self.skipWaiting()})()));
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const k of await caches.keys())if(k.startsWith('2027eu-app-')&&k!==CACHE)await caches.delete(k);await self.clients.claim()})()));
self.addEventListener('message',e=>{if(e.data?.type==='CHECK_TRIP_UPDATE'&&e.ports[0])e.waitUntil(sync().then(r=>e.ports[0].postMessage(r)).catch(()=>e.ports[0].postMessage({ok:false,changed:false})))});
self.addEventListener('fetch',e=>{
 const req=e.request,u=new URL(req.url);
 if(req.method!=='GET'||u.origin!==self.location.origin||!u.href.startsWith(scope))return;
 if(req.mode==='navigate'&&(u.pathname===new URL(scope).pathname||u.pathname===new URL(page).pathname)){
  e.respondWith((async()=>{try{await sync()}catch{}return await (await caches.open(CACHE)).match(page)||Response.error()})());return;
 }
 if(u.pathname===new URL(data).pathname){
  e.respondWith((async()=>{const c=await caches.open(CACHE);return await c.match(data)||await fresh(data)})());return;
 }
 if(assets.some(a=>u.pathname===new URL(a,scope).pathname)){
  e.respondWith((async()=>{const c=await caches.open(CACHE);try{const r=await fresh(req.url);await c.put(req,r.clone());return r}catch{return await c.match(req)||Response.error()}})());
 }
});
