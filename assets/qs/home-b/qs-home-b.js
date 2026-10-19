/* QS promo ticker (Oct 19 2026, Justin approved). Prepended to every one of our section scripts (home-b, store360, pdp, collections);
   the first one to run inserts it, the rest see #qs-tk and skip. Thin burgundy bar where the theme's announcement bar sits (top of the page,
   above the sticky header; scrolls away with the page like the theme bar did), white spaced caps, scrolls right-to-left at ~60 px/s (one pass
   across a 1440 px screen ~24 s), pauses on hover/focus, static under prefers-reduced-motion. Links to /collections/all. The theme's static
   announcement bar is hidden only on pages that carry this ticker (html.qs-tk-on). Plain 2D element, outside the 360 scene; no backdrop-filter.
   Oct 19 2026 16:20 (Justin): z-index 12 -> 10 so the theme drawers (aside.drawer, fixed, z 11: mobile menu) sit ABOVE the ticker
   (it was covering the menu's close X). Home: the ticker sits directly under the hero instead of at the top. When the home section
   (246a3a20) is on the page the ticker is NOT inserted at the top; it is left in window.__qsTkEl and qs-home-b.js places it right after
   .qsa-wrap (fallback: top of the page if that never happens). Theme announcement bar still hidden there (one promo bar only).
   Source: site-build/ticker/qs-ticker.js */
(function () {
  try {
    if (window.__qsTk || document.getElementById('qs-tk')) return; window.__qsTk = 1;
    var TXT = 'Free US shipping over $75 \u00a0\u00b7\u00a0 or 15% off with code FIRSTDROP';
    var css = 'html.qs-tk-on [id^="fw-section-announcement-bar"],html.qs-tk-on section.announcement-bar{display:none!important}' +
      '#qs-tk{display:block;position:relative;z-index:10;width:100%;height:34px;overflow:hidden;background:#6E0B22;color:#fff!important;text-decoration:none!important;' +
      'font-family:inherit;font-size:11.5px;font-weight:600;line-height:34px;letter-spacing:.22em;text-transform:uppercase;white-space:nowrap;-webkit-font-smoothing:antialiased;border:0;margin:0;padding:0;box-shadow:none}' +
      '#qs-tk .qs-tk-r{display:inline-flex;will-change:transform;animation:qs-tk-m var(--qs-tk-d,40s) linear infinite}' +
      '#qs-tk .qs-tk-h{display:inline-flex}#qs-tk .qs-tk-i{display:inline-block;padding:0 3.2em 0 0;color:#fff}' +
      '#qs-tk:hover .qs-tk-r,#qs-tk:focus-visible .qs-tk-r{animation-play-state:paused}#qs-tk:focus-visible{outline:2px solid #fff;outline-offset:-4px}' +
      '@keyframes qs-tk-m{from{transform:translate3d(0,0,0)}to{transform:translate3d(-50%,0,0)}}' +
      '@media (min-width:900px){#qs-tk{font-size:12px;height:36px;line-height:36px}}' +
      '@media (prefers-reduced-motion:reduce){#qs-tk{text-align:center}#qs-tk .qs-tk-r{animation:none;display:block}#qs-tk .qs-tk-h+.qs-tk-h,#qs-tk .qs-tk-i+.qs-tk-i{display:none}#qs-tk .qs-tk-i{padding:0}}';
    var st = document.createElement('style'); st.id = 'qs-tk-css'; st.textContent = css; (document.head || document.documentElement).appendChild(st);
    var a = document.createElement('a'); a.id = 'qs-tk'; a.href = '/collections/all';
    a.setAttribute('aria-label', 'Free US shipping over $75, or 15% off with code FIRSTDROP. Shop all');
    var one = '<span class="qs-tk-i" aria-hidden="true">' + TXT + '</span>', half = '<span class="qs-tk-h">' + one + one + one + one + '</span>';
    a.innerHTML = '<span class="qs-tk-r">' + half + half + '</span>';
    var top = function () {
      if (a.isConnected) return;
      var ab = document.querySelector('[id^="fw-section-announcement-bar"]');
      if (ab && ab.parentNode) ab.parentNode.insertBefore(a, ab);
      else { var hd = document.getElementById('fw-section-header'); if (hd && hd.parentNode) hd.parentNode.insertBefore(a, hd); else { var pg = document.querySelector('.page') || document.body; pg.insertBefore(a, pg.firstChild); } }
    };
    window.__qsTkEl = a;
    if (document.querySelector('[class*="custom-html-246a3a20"]')) {
      /* home: qs-home-b.js moves it under the hero; safety net if it never does */
      var late = function () { if (!a.isConnected) top(); };
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(late, 0); }); else setTimeout(late, 0);
    } else top();
    document.documentElement.classList.add('qs-tk-on');
    /* constant speed whatever the text width: duration = half-track width / 60 px per s */
    var sp = function () { var h = a.querySelector('.qs-tk-h'); if (h && h.offsetWidth) a.style.setProperty('--qs-tk-d', Math.max(20, h.offsetWidth / 60).toFixed(1) + 's'); };
    sp(); setTimeout(sp, 50); if (document.fonts && document.fonts.ready) document.fonts.ready.then(sp);
  } catch (e) {}
})();
/* Quality Stoner home — concept A "the front wall" (Fourthwall Custom HTML section 246a3a20), Oct 17 2026 (Justin picked A).
   Section HTML is one line: <script src="https://cdn.jsdelivr.net/gh/Tarius87/terrius-site@<commit>/assets/qs/home-b/qs-home-b.js"></script>
   Light page (#F4F3F0) that mirrors the 360 store's Front wall: hero = LP | DN wall halves rebuilt in CSS (dark half with the
   burgundy Wax Seal Crew (Loud & Proud), light half with the white Cipher Tee — White (Discreet & Neat); swapped Oct 17 2026 12:44; 13:01 panel backgrounds swapped too: crew on the light panel (left), tee on the dark panel (right); sign marks recoloured to stay legible: word-black.png / qs-mono-white.png), rails, 360 name-tag pills, floor strip
   -> NEW / CIPHER TEE · WAX SEAL CREW, burgundy rule, outline Shop Now -> "The pieces" grid on the 360 stages (white pieces on the
   dark wall material, dark pieces on the DN neutral stage) with name-tag pills -> 360 two-walls painting -> "Look around" link.
   The theme's own (light) header, newsletter section acebb3b4 and footer are left exactly as the theme draws them.
   Still hides the floating #qs-sw pill and the retired 863702ee section. Prices refresh from each product page's JSON-LD.
   Images: assets/qs/home-b/img/a/ (real Fourthwall cutouts, scaled/cropped only). Source of the hero pair:
   site-build/concepts/home360/makedn.py. iOS safety: no preserve-3d, no backdrop-filter, no 3D transforms, no animations. */
(function(){
var me=document.currentScript,CB=me&&me.src?me.src.replace(/[^\/]*$/,''):'https://cdn.jsdelivr.net/gh/Tarius87/terrius-site@main/assets/qs/home-b/';
var I=CB+'img/a/',P=I+'p/';
var S863='.custom-html--fw-section-custom-html-863702ee-37d1-48a0-8c17-b9a8c0e04dea',S246='.custom-html--fw-section-custom-html-246a3a20-ff62-43a2-bd4a-0c06afca2c46';
/* hero pair: [slug, short name, fallback price, full name, from?] */
var TEE=['maison-monogram-tee-white','Cipher Tee','34.99','Cipher Tee — White',1],
    CREW=['seal-crew-burgundy','Wax Seal Crew','49','Wax Seal Crew — Burgundy',1];
/* grid: [slug, short name, fallback price, full name, from?, image, tone w=white piece on dark stage / d=dark piece on DN stage] */
var GRID=[
 ['wordmark-hoodie-white','Masthead Hoodie','58','Masthead Hoodie — White',0,'wordmark-hoodie-white','w'],
 ['embroidered-qs-crew-black','Signet Crew','49','Signet Crew — Black',0,'embroidered-qs-crew-black','d'],
 ['maison-monogram-tee-black','Cipher Tee','34.99','Cipher Tee — Black',0,'maison-monogram-tee-black','d'],
 ['qs-lp-ts01-classic-tee-white','Calling Card Tee','29','Calling Card Tee — White',0,'qs-lp-ts01-classic-tee-white','w'],
 ['lockup-hoodie-black','Postscript Hoodie','58','Postscript Hoodie — Black',0,'lockup-hoodie-black','d'],
 ['wordmark-snapback-black','Masthead Snapback','34.95','Masthead Snapback — Black',0,'wordmark-snapback-black','d'],
 ['scattered-monogram-hoodie-white','Pressed Flower Hoodie','58','Pressed Flower Hoodie — White',0,'scattered-monogram-hoodie-white','w'],
 ['wordmark-leg-joggers-black','Bookmark Joggers','45','Bookmark Joggers — Black',0,'wordmark-leg-joggers-black','d']];
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;')}
function money(v){v=+v;return '$'+(v%1?v.toFixed(2):''+v)}
function pm(v,f){return (f?'from ':'')+money(v)}
var F='QSJ,Jost,"Helvetica Neue",Helvetica,Arial,sans-serif';
var CSS=[
'@font-face{font-family:QSJ;src:url('+I+'f/jost_n4.woff2) format("woff2");font-weight:400;font-display:swap}',
'@font-face{font-family:QSJ;src:url('+I+'f/jost_n7.woff2) format("woff2");font-weight:700;font-display:swap}',
S863+'{display:none!important}',
S246+','+S246+' .container{padding:0!important;margin:0!important;max-width:none!important}',
'#qs-sw{display:none!important}',
'.qsa{background:#F4F3F0;color:#141414;font-family:'+F+';-webkit-font-smoothing:antialiased;isolation:isolate;overflow:hidden}',
'.qsa *{box-sizing:border-box;margin:0;padding:0}',
'.qsa a{color:inherit;text-decoration:none!important}',
'.qsa img{display:block;max-width:100%;border:0}',
'.qsa p,.qsa span{color:inherit}',
/* the front wall */
'.qsa-wall{display:grid;grid-template-columns:1fr 1fr}',
'.qsa-half{position:relative;display:flex;flex-direction:column;align-items:center;padding:34px 10px 0;min-width:0}',
'.qsa-half:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}',
'.qsa-half>*{position:relative}',
'.qsa-lp{background:linear-gradient(180deg,#1a0d11 0,#0d0809 55%,#090607 100%);box-shadow:inset 0 3px 0 #a3203f;color:#fff}',
'.qsa-lp:before{background:repeating-linear-gradient(90deg,rgba(255,255,255,.035) 0 1px,transparent 1px 150px)}',
'.qsa-dn{background:linear-gradient(180deg,#fbfaf8,#F4F3F0 60%,#e8e6e1);box-shadow:inset 0 -50px 70px -40px rgba(0,0,0,.18);color:#111}',
'.qsa-dn:before{background:repeating-linear-gradient(90deg,rgba(0,0,0,.04) 0 1px,transparent 1px 150px)}',
'.qsa-sign{display:flex;flex-direction:column;align-items:center;gap:10px;height:62px;justify-content:flex-end;text-align:center}',
'.qsa-sign img.w{height:11px;width:auto}.qsa-sign img.m{height:40px;width:auto}',
'.qsa-sign small{display:block;font-size:10px;font-weight:700;letter-spacing:.3em;text-transform:uppercase;opacity:.85;line-height:1.2;padding-left:.3em}',
'.qsa-rail{width:74%;height:5px;border-radius:3px;margin-top:26px}.qsa-lp .qsa-rail{background:linear-gradient(#6b6b6b,#2b2b2b)}.qsa-dn .qsa-rail{background:#141414}',
'.qsa-g{display:block;width:96%;margin-top:-4px}',
'.qsa-g img{width:100%;height:auto}',
'.qsa-half .qsa-tag{margin:12px 0 30px}',
'.qsa-floor{display:grid;grid-template-columns:1fr 1fr}.qsa-flo{height:26px}',
'.qsa-flo.l{background:linear-gradient(#2a0c14,#120709 70%,#0b0708)}.qsa-flo.r{background:linear-gradient(#d9d6d0,#bdb9b2 70%,#a9a59e)}',
/* 360 name tags */
'.qsa-tag{display:inline-block;white-space:nowrap;font-size:11px;font-weight:700;letter-spacing:.02em;padding:5px 10px;border-radius:99px;line-height:1.2;max-width:100%;overflow:hidden;text-overflow:ellipsis}',
'.qsa-tag i{font-style:normal;opacity:.7;margin-left:6px;font-weight:400}',
'.qsa-tag.lp{background:rgba(10,6,7,.88);color:#fff;border:1px solid rgba(194,70,95,.7)}',
'.qsa-tag.dn{background:#fff;color:#111;border:1px solid #d5d4d0}',
/* copy */
'.qsa-copy{text-align:center;padding:56px 22px 8px}',
'.qsa-new{font-size:12px;letter-spacing:.36em;text-transform:uppercase;padding-left:.36em}',
'.qsa-col{margin-top:12px;font-size:11px;letter-spacing:.26em;line-height:1.9;text-transform:uppercase;color:#4a4a4a!important}',
'.qsa-rule{width:28px;height:1px;background:#6E0B22;margin:18px auto 0}',
'.qsa-btn{display:inline-block;margin-top:26px;border:1px solid #141414;font-size:13px;letter-spacing:.04em;line-height:1;padding:12px 20px;border-radius:4px;color:#141414!important}',
'.qsa-btn:hover{background:#141414;color:#F4F3F0!important}',
/* Winter Atelier promo band (Oct 17 2026, Justin 17:08: right under the hero pair, above the grid). Ice band, navy spaced caps,
   blue-S QS mark (img/w/qs-bluemark-k.webp = the 360 winter wall's mark, built from collections/winter-atelier/assets/bqs.png + bqs-dot.png),
   the five preview pieces of the 360 winter wall (not links; products hidden until Nov 15), one link -> /pages/walk-the-store#w=all.
   AFTER NOV 15 LAUNCH: change copy/link to shop the collection. */
'.qsa-wa{margin-top:48px;background:linear-gradient(180deg,#e1e8f2 0,#D6DFEC 55%,#ccd6e5 100%);box-shadow:inset 0 1px 0 #1B2236;color:#1B2236;text-align:center;padding:34px 18px 32px}',
'.qsa-wa-in{max-width:1180px;margin:0 auto}',
'.qsa-wa-t{display:flex;flex-direction:column;align-items:center}',
'.qsa-wa-m{width:auto;height:52px}',
'.qsa-wa-k{margin-top:16px;font-size:12px;font-weight:700;letter-spacing:.34em;text-transform:uppercase;padding-left:.34em;color:#1B2236!important}',
'.qsa-wa-h{margin-top:10px;font-size:23px;font-weight:400;letter-spacing:.26em;text-transform:uppercase;padding-left:.26em;line-height:1.25;color:#1B2236!important}',
'.qsa-wa-r{width:28px;height:1px;background:#1B2236;margin:14px auto 0}',
'.qsa-wa-d{margin-top:14px;font-size:13px;font-weight:700;letter-spacing:.3em;text-transform:uppercase;padding-left:.3em;color:#1B2236!important}',
'.qsa-wa-p{display:flex;justify-content:center;align-items:flex-end;gap:8px;margin:26px auto 0;max-width:560px;border-bottom:1px solid rgba(27,34,54,.28);padding-bottom:10px}',
'.qsa-wa-p>span{position:relative;display:block;flex:0 1 auto;min-width:0}',
'.qsa-wa-p img{position:absolute;left:0;top:0;width:100%;height:100%;object-fit:contain;object-position:50% 100%;filter:drop-shadow(0 0 1px rgba(27,34,54,.25)) drop-shadow(0 8px 9px rgba(27,34,54,.22))}',
'.qsa-wa-l{display:inline-block;margin-top:26px;font-size:12px;font-weight:700;letter-spacing:.26em;text-transform:uppercase;padding:0 0 6px .26em;border-bottom:1px solid #1B2236;color:#1B2236!important}',
'.qsa-wa-l:hover{opacity:.75}',
/* grid */
'.qsa-sec{padding:76px 18px 0;max-width:1240px;margin:0 auto}',
'.qsa-sh{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:24px}',
'.qsa-k{font-size:10.5px;letter-spacing:.32em;text-transform:uppercase}',
'.qsa-sh a{font-size:10.5px;letter-spacing:.26em;text-transform:uppercase;color:#7a7a7a!important}',
'.qsa-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px 12px}',
'.qsa-pc{display:block;min-width:0}',
'.qsa-pc .ph{position:relative;aspect-ratio:4/5;overflow:hidden}',
'.qsa-pc .ph img{position:absolute;left:13%;top:12%;width:74%;height:72%;object-fit:contain}',
'.qsa-pc .lb{display:block;margin-top:12px}',
'.qsa-st-w{background:linear-gradient(180deg,#1a0d11 0,#0d0809 60%,#090607 100%)}',
'.qsa-st-w img{filter:drop-shadow(0 0 1px rgba(0,0,0,.35)) drop-shadow(0 16px 18px rgba(0,0,0,.45))}',
'.qsa-st-d{background:radial-gradient(ellipse 80% 70% at 50% 42%,#EEECE8 0,#E4E2DD 60%,#D9D6CF 100%)}',
'.qsa-st-d img{filter:drop-shadow(0 0 1px rgba(0,0,0,.28)) drop-shadow(0 12px 14px rgba(0,0,0,.26))}',
/* 360 band */
/* the one doorway into the 360 (Oct 17 2026: replaces the empty interior painting): a small split wall with two real pieces, no names */
/* Oct 19 2026 (Justin): the two bag pictures at the bottom were replaced by one plain text link to the store */
'.qsa-visit{display:block;text-align:center;margin:84px auto 0;padding:0 18px 76px}',
'.qsa-visit a{display:inline-block;font-size:12px;font-weight:400;letter-spacing:.32em;text-transform:uppercase;padding:0 0 7px .32em;border-bottom:1px solid #141414;color:#141414!important;text-decoration:none!important}',
'.qsa-visit a:hover{opacity:.7}',
/* Oct 19 2026 16:20 (Justin): promo ticker sits flush under the hero on home (moved here from the top of the page); copy below tightened */
'.qsa>#qs-tk{margin:0;flex:none}',
'.qsa #qs-tk+.qsa-copy{padding-top:40px}',
'@media (min-width:900px){',
' .qsa-wrap{max-width:1240px;margin:0 auto;padding:48px 48px 0}',
' .qsa-half{padding:48px 20px 0}.qsa-sign{height:96px}.qsa-sign img.w{height:17px}.qsa-sign img.m{height:66px}.qsa-sign small{font-size:12px}',
' .qsa-rail{width:52%;margin-top:34px}.qsa-g{width:min(80%,470px)}.qsa-half .qsa-tag{margin:16px 0 44px;font-size:13px;padding:7px 13px}',
' .qsa-flo{height:40px}',
' .qsa-wa{margin-top:64px;padding:56px 48px}.qsa-wa-in{display:grid;grid-template-columns:minmax(300px,380px) 1fr;grid-template-rows:auto auto;column-gap:40px;row-gap:0}.qsa-wa-t{grid-column:1;grid-row:1;align-self:end}.qsa-wa-c{grid-column:1;grid-row:2;align-self:start}.qsa-wa-p{grid-column:2;grid-row:1/3;align-self:center}',
' .qsa-wa-m{height:72px}.qsa-wa-k{font-size:12.5px}.qsa-wa-h{font-size:30px}.qsa-wa-d{font-size:14px}.qsa-wa-l{font-size:12.5px}',
' .qsa-wa-p{margin:0;max-width:800px;gap:20px;padding-bottom:14px;justify-self:center;width:100%}',
' .qsa-sec{padding:120px 48px 0}.qsa-grid{grid-template-columns:repeat(4,1fr);gap:52px 26px}',
' .qsa-visit{margin-top:120px;padding-bottom:96px}.qsa-visit a{font-size:12.5px}.qsa-copy{padding:64px 22px 8px}',
' .qsa #qs-tk+.qsa-copy{padding-top:48px}',
'}'
].join('\n');
function tag(g,tone){return '<span class="qsa-tag '+tone+'" data-s="'+g[0]+'">'+esc(g[1])+'<i>'+pm(g[2],g[4])+'</i></span>'}
function half(g,cls,sign,img,tone,side){
 return '<div class="qsa-half '+cls+'"><div class="qsa-sign">'+sign+'<small>'+side+'</small></div><div class="qsa-rail"></div>'+
  '<a class="qsa-g" href="/products/'+g[0]+'"><img src="'+I+img+'" alt="'+esc(g[3])+'" width="1028" height="937"></a>'+
  '<a href="/products/'+g[0]+'">'+tag(g,tone)+'</a></div>'}
function card(g){return '<a class="qsa-pc" href="/products/'+g[0]+'"><div class="ph qsa-st-'+g[6]+'"><img src="'+P+g[5]+'.webp" alt="'+esc(g[3])+'" loading="lazy"></div><span class="lb">'+tag(g,g[6]==='w'?'lp':'dn')+'</span></a>'}
/* Winter Atelier (Collection 002) preview: same five pieces as the 360 winter wall */
/* Oct 19 2026 (Justin): row tightened (each piece's box = its own aspect, so no wide empty cells around the joggers/beanie) and the beanie made bigger.
   [slug, name, image w/h (img/w files are 520 px tall), height vs the tops] */
var WINTER=[['winter-crest-back-tee-black','Winter Crest Back Tee — Black',599/520,1],['winter-crest-crew-off-white','Winter Crest Crew — Off-White',423/520,1],['frost-lined-hood-black','Frost-Lined Hood — Black',403/520,1],['maison-winter-joggers-black','Maison Winter Joggers',189/520,1.12],['wordmark-cuff-beanie-navy','Wordmark Cuff Beanie — Navy',458/520,.92]];
var W=I.replace(/a\/$/,'w/');
function winter(){return '<section class="qsa-wa" id="winter-atelier" aria-label="Winter Atelier, Collection 002, drops November 15"><div class="qsa-wa-in">'+
 '<div class="qsa-wa-t"><img class="qsa-wa-m" src="'+W+'qs-bluemark-k.webp" alt="QS" width="342" height="320"><p class="qsa-wa-k">Collection 002</p><p class="qsa-wa-h">Winter Atelier</p><div class="qsa-wa-r"></div><p class="qsa-wa-d">Drops Nov 15</p></div>'+
 '<div class="qsa-wa-p">'+WINTER.map(function(w){var f=(w[2]*w[3]).toFixed(4);return '<span style="flex:'+f+' 1 0;aspect-ratio:'+f+'/'+w[3]+'"><img src="'+W+w[0]+'.webp" alt="'+esc(w[1])+'" loading="lazy"></span>'}).join('')+'</div>'+
 '<div class="qsa-wa-c"><a class="qsa-wa-l" href="/pages/walk-the-store#w=all">Preview in the store &rarr;</a></div></div></section>'}
var HTML='<div class="qsa" id="qs-home">'+
 '<div class="qsa-wrap"><div class="qsa-wall">'+
  half(CREW,'qsa-dn','<img class="w" src="'+I+'word-black.png" alt="Quality Stoner">','crew-seal-hang-dn.webp','lp','Loud &amp; Proud')+
  half(TEE,'qsa-lp','<img class="m" src="'+I+'qs-mono-white.png" alt="QS">','tee-dn-hang.webp','dn','Discreet &amp; Neat')+
 '</div><div class="qsa-floor"><div class="qsa-flo r"></div><div class="qsa-flo l"></div></div></div>'+
 '<div class="qsa-copy"><p class="qsa-new">New</p><div class="qsa-rule"></div>'+
  '<a class="qsa-btn" href="/collections/all">Shop Now</a></div>'+winter()+
 '<section class="qsa-sec"><div class="qsa-sh"><span class="qsa-k">The pieces</span><a href="/collections/all">View all</a></div><div class="qsa-grid">'+GRID.map(card).join('')+'</div></section>'+
 '<p class="qsa-visit"><a href="/pages/walk-the-store">Visit the store &nbsp;&rarr;</a></p>'+
 '</div>';
document.documentElement.classList.add('qsa-on');
var st=document.createElement('style');st.id='qs-home-css';st.textContent=CSS;(document.head||document.documentElement).appendChild(st);
if(me&&me.parentNode){var w=document.createElement('div');w.innerHTML=HTML;while(w.firstChild)me.parentNode.insertBefore(w.firstChild,me)}
/* promo ticker: directly under the hero (the shared ticker block above leaves it unplaced on home) */
(function(){var tk=window.__qsTkEl||document.getElementById('qs-tk'),wr=document.querySelector('#qs-home .qsa-wrap');if(tk&&wr&&wr.parentNode)wr.parentNode.insertBefore(tk,wr.nextSibling)})();
/* retired side-choice gate (lived in 863702ee): never let it lock the page */
function nogate(){var g=document.getElementById('qsg');if(g){g.classList.remove('on');g.style.display='none'}var r=document.documentElement;if(r.style.overflow==='hidden')r.style.overflow='';if(document.body&&document.body.style.overflow==='hidden')document.body.style.overflow=''}
nogate();setTimeout(nogate,600);
/* live prices from each product page's JSON-LD ("from" when sizes differ in price); a 404 product drops its grid card */
[TEE,CREW].concat(GRID).forEach(function(g){fetch('/products/'+g[0],{credentials:'same-origin'}).then(function(r){if(r.status===404){var c=document.querySelector('.qsa-grid [data-s="'+g[0]+'"]');c=c&&c.closest('.qsa-pc');if(c)c.style.display='none';throw 0}if(!r.ok)throw 0;return r.text()}).then(function(h){var j=h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/),d=null;try{d=j&&JSON.parse(j[1])}catch(e){}if(!d)return;var o=d.offers;o=o&&(o.offers||o);o=[].concat(o||[]);var ps=o.map(function(x){return +x.price}).filter(function(v){return v>0});if(!ps.length)return;var lo=Math.min.apply(null,ps),hi=Math.max.apply(null,ps);[].forEach.call(document.querySelectorAll('.qsa [data-s="'+g[0]+'"] i'),function(i){i.textContent=pm(lo,hi>lo)})}).catch(function(){})});
})();
