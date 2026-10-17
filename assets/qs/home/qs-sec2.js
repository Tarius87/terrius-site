/* Quality Stoner home (Fourthwall Custom HTML section 246a3a20). Option C "Front Door", Oct 16 2026.
   Section HTML is one line: <script src="https://cdn.jsdelivr.net/gh/Tarius87/terrius-site@<commit>/assets/qs/home/qs-sec2.js"></script>
   Renders, in place of the script tag: phone category circles -> 360-store card -> Shop by category -> Pick your side -> New in
   -> "This is just the beginning" -> About. The old bento/story-ring section 863702ee is hidden (CSS here + hidden in Layout).
   Images: assets/qs/home/c/ (same commit). Counts / from-prices / names / prices refresh from the live store at runtime.
   iOS safety: no preserve-3d, no backdrop-filter, only 2D transforms. */
(function(){
var me=document.currentScript,CB=me&&me.src?me.src.replace(/[^\/]*$/,''):'https://cdn.jsdelivr.net/gh/Tarius87/terrius-site@main/assets/qs/home/';
var IMG=CB+'c/',P=IMG+'p/',K=IMG+'k/';
var S863='.custom-html--fw-section-custom-html-863702ee-37d1-48a0-8c17-b9a8c0e04dea',S246='.custom-html--fw-section-custom-html-246a3a20-ff62-43a2-bd4a-0c06afca2c46';
/* ---- catalog fallbacks (live store refreshes these) ---- */
var CATS=[
 {k:'tees',n:'Tees',c:6,f:'29',pics:['heavyweight-tee-black','embroidered-qs-tee-burgundy']},
 {k:'hoodies-crews',n:'Hoodies & Crews',c:10,f:'49',pics:['wordmark-hoodie-white','damask-lined-hoodie-black']},
 {k:'joggers',n:'Joggers',c:4,f:'45',pics:['wordmark-leg-joggers-black','embroidered-qs-joggers-burgundy']},
 {k:'hats',n:'Hats',c:7,f:'27.95',pics:['qs-snapback-burgundy','wordmark-cuff-beanie-white']},
 {k:'bags-more',n:'Bags & More',c:9,f:'45',pics:['qs-lp-bp04-backpack-black','scattered-monogram-backpack-white']}];
var SIDES=[
 {k:'loud-proud',cls:'lp',ey:'Side one',h:'Loud &amp;<br>Proud',p:'The full name, out loud.',c:17,pics:['wordmark-hoodie-white','heavyweight-tee-black','wordmark-snapback-black']},
 {k:'discreet-neat',cls:'dn',ey:'Side two',h:'Discreet &amp;<br>Neat',p:'Just the QS. Quiet.',c:19,pics:['embroidered-qs-hoodie-burgundy','maison-monogram-tee-white','qs-snapback-burgundy']}];
/* New in: [slug, side, image kind ('p' cutout | 'k' original product photo card), fallback name, fallback price] */
var NEW=[
 ['heavyweight-tee-black','lp','p','Calling Card Tee — Black','29'],
 ['damask-lined-hoodie-black','dn','p','Locket Hoodie — Black','58'],
 ['wordmark-crew-white','lp','p','Masthead Crew — White','49'],
 ['qs-cuff-beanie-white','dn','p','Signet Beanie — White','27.95']];
var ALL=36;
/* phone circles: categories + both sides; every circle opens a collection, never a single product */
var RING=[['tees','Tees','embroidered-qs-tee-burgundy'],['hoodies-crews','Hoodies &amp; Crews','wordmark-hoodie-white'],['joggers','Joggers','embroidered-qs-joggers-burgundy'],['hats','Hats','qs-snapback-burgundy'],['bags-more','Bags &amp; More','qs-lp-bp04-backpack-black'],['loud-proud','Loud &amp; Proud','lockup-hoodie-black','lp'],['discreet-neat','Discreet &amp; Neat','embroidered-qs-crew-black','dn']];
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;')}
function money(v){v=+v;return '$'+(v%1?v.toFixed(2):''+v)}
function split(n){var m=String(n).split(/\s+[\u2014\u2013-]\s+/);return m.length>1?[m.slice(0,-1).join(' — '),m[m.length-1]]:[n,'']}
var tile='radial-gradient(120% 90% at 50% 38%,#4a4446 0%,#2c2729 48%,#1a1718 100%)';
var CSS=[
S863+'{display:none!important}',
S246+','+S246+' .container{padding:0!important;margin:0!important;max-width:none!important}',
'#qs-sw{display:none!important}',/* the site-wide floating side pill: home has its own Pick-your-side tiles */
'.qc{isolation:isolate;background:#0b0b0b;color:#fff;font-family:inherit;-webkit-font-smoothing:antialiased}',
'.qc *{box-sizing:border-box;margin:0;padding:0}.qc a{color:inherit!important;text-decoration:none!important}',
'.qc b,.qc h1,.qc h2,.qc h3,.qc span,.qc p{color:inherit}.qc h1,.qc h2,.qc h3{font-family:inherit!important;text-transform:none}',
'.qc-k{display:block;font-size:11px;letter-spacing:.28em;text-transform:uppercase;font-weight:600;opacity:.75}',
/* circles (phone only) */
'.qc-rg{display:none}',
/* store card */
'.qc-hero{padding:34px 28px 8px}',
'.qc-card{display:grid!important;grid-template-columns:1fr 1.32fr;max-width:1240px;margin:0 auto;background:#fff;border:1px solid #d9d4d5;border-radius:26px;overflow:hidden;box-shadow:0 0 0 1px rgba(255,255,255,.06),0 24px 60px rgba(0,0,0,.55)}',
'.qc a.qc-card{color:#0b0a0a!important}.qc-ct .qc-k{color:#0b0a0a;opacity:1}.qc .qc-ci .qc-360{color:#fff}',
'.qc-ct{padding:46px 44px;display:flex;flex-direction:column;justify-content:center;gap:16px;background:#fff}',
'.qc-ct h1{font-size:46px;line-height:1.02;font-weight:600;letter-spacing:-.01em;color:#0b0a0a!important}',
'.qc-ct p{font-size:16px;line-height:1.55;color:#3d3839!important;max-width:400px}',
'.qc-ct .qc-btn.b{background:#6E0B22;color:#fff!important;box-shadow:0 6px 16px rgba(110,11,34,.22)}',
'.qc-bt{display:flex;gap:10px;flex-wrap:wrap;margin-top:6px}',
'.qc-btn{display:inline-block;font-size:12px;line-height:1;font-weight:600;letter-spacing:.18em;text-transform:uppercase;border-radius:99px;padding:16px 24px;white-space:nowrap}',
'.qc-btn.b{background:#6E0B22;color:#fff!important;box-shadow:0 0 24px rgba(163,32,63,.45)}.qc-btn.o{border:1.5px solid rgba(255,255,255,.65);color:#fff!important}',
'.qc-ci{position:relative;display:block!important;aspect-ratio:16/10;background:#141112;overflow:hidden}',
'.qc-ci img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;max-width:none;display:block}',
'.qc-ci:after{content:"";position:absolute;inset:0;box-shadow:inset 0 0 0 1px rgba(255,255,255,.06);background:linear-gradient(90deg,rgba(0,0,0,.35) 0,rgba(0,0,0,0) 18%)}',
'.qc-360{position:absolute;left:16px;bottom:16px;z-index:2;background:rgba(0,0,0,.72);border:1px solid rgba(255,255,255,.28);color:#fff;font-size:10.5px;letter-spacing:.18em;font-weight:600;text-transform:uppercase;padding:7px 11px;border-radius:99px}',
/* sections */
'.qc-sec{max-width:1240px;margin:0 auto;padding:48px 28px 4px}',
'.qc-sh{display:flex;align-items:baseline;justify-content:space-between;margin-bottom:18px;gap:12px}.qc-sh h2{font-size:28px;font-weight:600;color:#fff!important}',
'.qc-sh a{font-size:12px;letter-spacing:.16em;text-transform:uppercase;font-weight:600;border-bottom:1px solid rgba(255,255,255,.4);padding-bottom:3px;white-space:nowrap}',
'.qc-cats{display:grid;grid-template-columns:repeat(5,1fr);gap:14px}',
'.qc-cat{position:relative;display:block!important;border-radius:20px;background:'+tile+';aspect-ratio:3/4;overflow:hidden}',
'.qc-cat .pics{position:absolute;inset:16px 10px 84px}',
'.qc-cat .pics img{position:absolute;height:86%;width:auto;max-width:76%;object-fit:contain;bottom:0;filter:drop-shadow(0 0 1px rgba(255,255,255,.2)) drop-shadow(0 14px 18px rgba(0,0,0,.55))}',
'.qc-cat .pics img:nth-child(1){left:0;z-index:1;transform:rotate(-4deg)}.qc-cat .pics img:nth-child(2){right:0;z-index:2;transform:rotate(3deg)}',
'.qc-cat .lb{position:absolute;left:16px;right:50px;bottom:16px;text-shadow:0 2px 10px rgba(0,0,0,.85)}.qc-cat .lb b{display:block;font-size:19px;font-weight:600;color:#fff!important;line-height:1.15}.qc-cat .lb span{display:block;font-size:12.5px;opacity:.7;margin-top:3px}',
'.qc-ar{position:absolute;right:14px;bottom:18px;width:30px;height:30px;border-radius:50%;background:#fff;color:#000!important;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:600}',
'.qc-sides{display:grid;grid-template-columns:1fr 1fr;gap:14px}',
'.qc-sd{position:relative;display:block!important;border-radius:22px;padding:26px 24px;min-height:300px;overflow:hidden}',
'.qc-sd.lp{background:radial-gradient(120% 100% at 75% 35%,#8e1631 0,#6E0B22 45%,#3d0614 100%)}.qc-sd.dn{background:radial-gradient(120% 100% at 75% 35%,#383334 0,#171415 55%,#050505 100%);border:1px solid #262223}',
'.qc-sd .qc-k,.qc-sd h3,.qc-sd p,.qc-sd .n{position:relative;z-index:2;text-shadow:0 2px 12px rgba(0,0,0,.6)}.qc-sd h3{font-size:32px;line-height:1;font-weight:600;margin:8px 0;color:#fff!important}.qc-sd p{font-size:14px;opacity:.8;max-width:240px}.qc-sd .n{margin-top:14px;font-size:12px;letter-spacing:.16em;text-transform:uppercase;font-weight:600}',
'.qc-sd .pics{position:absolute;right:10px;bottom:6px;height:72%;max-width:60%;display:flex;justify-content:flex-end;align-items:flex-end}.qc-sd .pics img{height:100%;width:auto;margin-left:-38px;filter:drop-shadow(0 16px 20px rgba(0,0,0,.5))}.qc-sd .pics img:nth-child(3){height:46%}',
'.qc-new{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}',
'.qc-pc{display:block!important;position:relative}',
'.qc-pc .ph{position:relative;aspect-ratio:4/5;border-radius:18px;background:'+tile+';overflow:hidden}',
'.qc-pc .ph img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;padding:12% 10% 10%;filter:drop-shadow(0 0 1px rgba(255,255,255,.22)) drop-shadow(0 14px 18px rgba(0,0,0,.55))}',
'.qc-pc .ph.k{padding:10px}.qc-pc .ph.k img{position:relative;padding:0;object-fit:cover;filter:none;border-radius:12px;display:block}',
'.qc-tg{z-index:2;position:absolute;left:10px;top:10px;font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;font-weight:600;padding:5px 8px;border-radius:99px;color:#fff}',
'.qc-tg.lp{background:#6E0B22}.qc-tg.dn{border:1px solid rgba(255,255,255,.55);background:rgba(0,0,0,.55)}.qc-pc .ph.k .qc-tg{left:18px;top:18px}',
'.qc-pc .nm{display:block;margin-top:10px;font-size:14px;font-weight:600;line-height:1.25;color:#fff!important}.qc-pc .cl{display:block;font-size:12.5px;opacity:.6;margin-top:2px}.qc-pc .pr{display:block;font-size:14px;font-weight:600;margin-top:5px}',
'.qc-end{height:52px}',
'@media (max-width:749px){',
' .qc-rg{display:flex;gap:6px;overflow-x:auto;padding:16px 12px 6px;scrollbar-width:none;-webkit-overflow-scrolling:touch}.qc-rg::-webkit-scrollbar{display:none}',
' .qc-rg a{flex:0 0 74px;display:flex!important;flex-direction:column;align-items:center;text-align:center}',
' .qc-rg i{display:block;width:64px;height:64px;border-radius:50%;padding:3px;background:#6E0B22}',
' .qc-rg i b{display:flex;width:100%;height:100%;border-radius:50%;background:'+tile+';border:2px solid #0b0b0b;align-items:center;justify-content:center;overflow:hidden}',
' .qc-rg i img{width:72%;height:72%;object-fit:contain;filter:drop-shadow(0 0 1px rgba(255,255,255,.25))}',
' .qc-rg a.lp i b{background:radial-gradient(circle at 50% 40%,#8e1631,#3d0614)}.qc-rg a.dn i{background:#fff}',
' .qc-rg span{display:block;font-size:11px;line-height:1.2;margin-top:6px;font-weight:600;letter-spacing:.01em;color:#fff}',
' .qc-hero{padding:14px 14px 4px}.qc-card{grid-template-columns:1fr;border-radius:20px}.qc-ci{order:-1}',
' .qc-ct{padding:22px 22px 26px;gap:11px}.qc-ct h1{font-size:30px}.qc-ct p{font-size:14.5px}.qc-btn{padding:15px 20px;font-size:11.5px}',
' .qc-ci:after{background:none}.qc-360{left:12px;bottom:12px}',
' .qc-sec{padding:34px 14px 2px}.qc-sh h2{font-size:22px}',
' .qc-cats{grid-template-columns:1fr 1fr;gap:10px}.qc-cats .qc-cat:first-child{grid-column:1/3;aspect-ratio:16/10}.qc-cats .qc-cat:first-child .pics{inset:12px 60px 70px}',
' .qc-cat .lb b{font-size:16px}.qc-cat .lb{left:13px;bottom:12px;right:44px}.qc-ar{width:26px;height:26px;right:11px;bottom:13px;font-size:13px}.qc-cat .pics{inset:10px 6px 64px}.qc-cat .lb span{font-size:11.5px}',
' .qc-sides{gap:10px}.qc-sd{min-height:250px;padding:16px 14px}.qc-sd h3{font-size:20px}.qc-sd p{display:none}.qc-sd .n{font-size:10px;letter-spacing:.1em}',
' .qc-sd .pics{height:50%;right:4px;max-width:96%}.qc-sd .pics img{margin-left:-30px}',
' .qc-new{grid-template-columns:1fr 1fr;gap:12px}.qc-end{height:36px}',
'}',
/* "This is just the beginning" + About (kept; recoloured: no cream) */
'.qsd{background:#111011;color:#fff;text-align:center;padding:52px 24px;font-family:inherit;border-top:1px solid #1e1b1c}.qsd *{margin:0}.qsd-k{display:inline-block;font-size:11px;font-weight:600;letter-spacing:.3em;text-transform:uppercase;border:1px solid rgba(255,255,255,.4);border-radius:99px;padding:7px 14px}.qsd b,.qsd p,.qsd span{color:#fff!important}.qsd b{display:block;font-size:40px;line-height:1.05;font-weight:600;margin-top:18px}.qsd p{font-size:16px;opacity:.75;margin-top:12px}@media (max-width:749px){.qsd{padding:40px 20px}.qsd b{font-size:28px}.qsd p{font-size:15px}}',
'.qsa{background:#F4F3F0;color:#141213;padding:56px 48px 64px;font-family:inherit}.qsa *{box-sizing:border-box;margin:0}.qsa-in{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1.1fr 1fr;gap:48px;align-items:center}.qsa-k{font-size:12px;font-weight:600;letter-spacing:.3em;text-transform:uppercase;color:#6E0B22}.qsa h2{font-size:44px;line-height:1.02;font-weight:600;margin:12px 0 18px}.qsa p{font-size:16px;line-height:1.6;opacity:.85;margin-bottom:12px}.qsa-row{display:flex;gap:10px;flex-wrap:wrap;margin-top:20px}.qsa-row a{display:inline-block;border-radius:99px;padding:13px 22px;font-size:12px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;text-decoration:none;border:1.5px solid #141213;color:#141213}.qsa-row a.l{background:#6E0B22;border-color:#6E0B22;color:#fff}.qsa-card{background:#6E0B22;color:#fff;border-radius:26px;padding:32px}.qsa-card b,.qsa-card span{color:#fff!important}.qsa-card div{display:flex;justify-content:space-between;padding:14px 0;border-bottom:1px solid rgba(255,255,255,.2);font-size:15px}.qsa-card div:last-child{border:0}.qsa-card b{font-weight:600}@media (max-width:749px){.qsa{padding:36px 18px 44px}.qsa-in{grid-template-columns:1fr;gap:22px}.qsa h2{font-size:30px}.qsa p{font-size:15px}.qsa-card{padding:20px 22px;border-radius:20px}}'
].join('\n');
function catTile(c){return '<a class="qc-cat" data-c="'+c.k+'" href="/collections/'+c.k+'"><div class="pics">'+c.pics.map(function(s){return '<img src="'+P+s+'.webp" alt="" loading="lazy">'}).join('')+'</div><div class="lb"><b>'+esc(c.n)+'</b><span>'+c.c+' pieces · from '+money(c.f)+'</span></div><span class="qc-ar">&rarr;</span></a>'}
function sideTile(s){return '<a class="qc-sd '+s.cls+'" data-c="'+s.k+'" href="/collections/'+s.k+'"><span class="qc-k">'+s.ey+'</span><h3>'+s.h+'</h3><p>'+s.p+'</p><div class="n"><span>'+s.c+'</span> pieces &rarr;</div><div class="pics">'+s.pics.map(function(x){return '<img src="'+P+x+'.webp" alt="" loading="lazy">'}).join('')+'</div></a>'}
function card(n){var nm=split(n[3]);return '<a class="qc-pc" data-s="'+n[0]+'" href="/products/'+n[0]+'"><div class="ph'+(n[2]=='k'?' k':'')+'"><span class="qc-tg '+n[1]+'">'+(n[1]=='lp'?'Loud':'Discreet')+'</span><img loading="lazy" src="'+(n[2]=='k'?K:P)+n[0]+'.webp" alt="'+esc(n[3])+'"></div><span class="nm">'+esc(nm[0])+'</span><span class="cl">'+esc(nm[1])+'</span><span class="pr">'+money(n[4])+'</span></a>'}
var HTML='<div class="qc" id="qs-home">'+
 '<nav class="qc-rg" aria-label="Shop by category">'+RING.map(function(r){return '<a class="'+(r[3]||'')+'" href="/collections/'+r[0]+'"><i><b><img src="'+P+r[2]+'.webp" alt=""></b></i><span>'+r[1]+'</span></a>'}).join('')+'</nav>'+
 '<section class="qc-hero" id="walk-the-store"><a class="qc-card" href="/pages/walk-the-store"><div class="qc-ct"><span class="qc-k">New &middot; 360 store</span><h1>Take a look around the store.</h1><p>Turn around the room, browse both sides and the hat &amp; bag walls, and tap any piece to look closer.</p><div class="qc-bt"><span class="qc-btn b">Look around &rarr;</span></div></div>'+
 '<div class="qc-ci"><span class="qc-360">360&deg; store</span><img src="'+IMG+'room.webp" srcset="'+IMG+'room-960.webp 960w, '+IMG+'room.webp 1600w" sizes="(max-width:749px) 100vw, 700px" alt="Inside the Quality Stoner store: Loud &amp; Proud wall on the left, Discreet &amp; Neat wall on the right"></div></a></section>'+
 '<section class="qc-sec"><div class="qc-sh"><h2>Shop by category</h2><a href="/collections/all">Shop all <span class="qc-all">'+ALL+'</span> &rarr;</a></div><div class="qc-cats">'+CATS.map(catTile).join('')+'</div></section>'+
 '<section class="qc-sec"><div class="qc-sh"><h2>Pick your side</h2></div><div class="qc-sides">'+SIDES.map(sideTile).join('')+'</div></section>'+
 '<section class="qc-sec"><div class="qc-sh"><h2>New in</h2><a href="/collections/all">See all &rarr;</a></div><div class="qc-new">'+NEW.map(card).join('')+'</div></section>'+
 '<div class="qc-end"></div></div>';
var BODY="<div class=\"qsd\"><span class=\"qsd-k\">Collection 001 &middot; The Standard</span><b>This is just the beginning.</b><p>More drops are on the way. New pieces, new colors, same standard. You got here early.</p></div><section class=\"qsa\" id=\"about\">\n <div class=\"qsa-in\">\n  <div>\n   <div class=\"qsa-k\">About Quality Stoner</div>\n   <h2>Casual wear for the quality stoner.</h2>\n   <p>Made in Milwaukee since June 2020. Most stoner gear is loud and clich\u00e9. We went the other way: clean fits, heavyweight blanks, and one mark you can wear anywhere.</p>\n   <p>Go Loud &amp; Proud with the full name, or keep it Discreet &amp; Neat with just the QS. Same quality, your call.</p>\n   <div class=\"qsa-row\"><a class=\"l\" href=\"/collections/loud-proud\">Loud &amp; Proud</a><a href=\"/collections/discreet-neat\">Discreet &amp; Neat</a></div>\n  </div>\n  <div class=\"qsa-card\"><div><span>Est.</span><b>June 2020</b></div><div><span>Home</span><b>Milwaukee, WI</b></div><div><span>Two sides</span><b>Loud or Discreet</b></div><div><span>Built for</span><b>The quality stoner</b></div></div>\n </div>\n</section>";
var st=document.createElement('style');st.id='qs-home-css';st.textContent=CSS;(document.head||document.documentElement).appendChild(st);
if(me&&me.parentNode){var w=document.createElement('div');w.innerHTML=HTML+BODY;while(w.firstChild)me.parentNode.insertBefore(w.firstChild,me)}
/* retired side-choice gate (lived in 863702ee): make sure it never locks the page if that section is still rendered */
function nogate(){var g=document.getElementById('qsg');if(g){g.classList.remove('on');g.style.display='none'}var r=document.documentElement;if(r.style.overflow==='hidden')r.style.overflow='';if(document.body&&document.body.style.overflow==='hidden')document.body.style.overflow=''}
nogate();setTimeout(nogate,600);
/* ---- live refresh: counts + from-prices from collection pages, names + prices from product pages ---- */
function get(u){return fetch(u,{credentials:'same-origin'}).then(function(r){if(!r.ok)throw 0;return r.text()})}
function col(k){return get('/collections/'+k).then(function(h){var s={},n=0,m,re=/href="(?:\/[a-z]{2}-[a-z]{3})?\/products\/([^"?#\/]+)"/g;while((m=re.exec(h))){if(!s[m[1]]){s[m[1]]=1;n++}}var ps=(h.match(/\$\d[\d,]*\.\d\d/g)||[]).map(function(x){return +x.replace(/[$,]/g,'')}).filter(function(v){return v>0});return{n:n,min:ps.length?Math.min.apply(null,ps):null}})}
function q(s){return document.querySelector(s)}
CATS.forEach(function(c){col(c.k).then(function(r){if(!r.n)return;var sp=q('.qc-cat[data-c="'+c.k+'"] .lb span');if(sp)sp.textContent=r.n+(r.n==1?' piece':' pieces')+(r.min?' · from '+money(r.min):'')}).catch(function(){})});
SIDES.forEach(function(s){col(s.k).then(function(r){if(!r.n)return;var e=q('.qc-sd[data-c="'+s.k+'"] .n span');if(e)e.textContent=r.n}).catch(function(){})});
col('all').then(function(r){if(r.n){var e=q('.qc-all');if(e)e.textContent=r.n}}).catch(function(){});
NEW.forEach(function(n){get('/products/'+n[0]).then(function(h){var j=h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/),d=null;try{d=j&&JSON.parse(j[1])}catch(e){}if(!d)return;var a=q('.qc-pc[data-s="'+n[0]+'"]');if(!a)return;if(d.name){var nm=split(d.name);a.querySelector('.nm').textContent=nm[0];a.querySelector('.cl').textContent=nm[1];a.querySelector('img').alt=d.name}var o=d.offers;o=o&&(o.offers||o);o=[].concat(o||[]);var ps=o.map(function(x){return +x.price}).filter(function(v){return v>0});if(ps.length)a.querySelector('.pr').textContent=money(Math.min.apply(null,ps))}).catch(function(){})});
})();
