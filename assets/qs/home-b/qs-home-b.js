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
/* Oct 19 2026 ~22:00 (Justin picked hero concept 4 "Two Fields, No Walls", site-build/concepts/hero-redo-oct19/parts/c4.html):
   the hanger split hero AND the small "NEW / Shop Now" block are replaced by two flat colour fields (.qsa-h4): left black with the
   QUALITY•STONER wordmark + LOUD & PROUD + Cipher Tee — White + SHOP LOUD (/collections/loud-proud); right #6E0B22 with the white QS mark +
   DISCREET & NEAT + Signet Crew — Black + SHOP DISCREET (/collections/discreet-neat). Product images link to their product pages.
   Phone: the two fields stacked. Height: hero = viewport - its own top (header) - ticker, so header + hero + ticker are all on screen at
   first load (Justin, Oct 19 22:04); sizes inside the fields scale with --qh / --fh. Ticker stays directly under the hero; everything from
   the Winter band down is unchanged. Images img/c4/ (logos scaled from the /workspace/work/qsmock/orig-* masters via the concept assets).
   Previous version (hanger hero): blk/qs-home-b.src.8b50b.js.
   Quality Stoner home — concept A "the front wall" (Fourthwall Custom HTML section 246a3a20), Oct 17 2026 (Justin picked A).
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
/* hero fields (concept 4): [slug, full name, fallback base price, image, w, h, collection link, link text, side line] */
var HL=['maison-monogram-tee-white','Cipher Tee — White','34.99','cipher-tee-white.webp',1500,1298,'/collections/loud-proud','Shop Loud','Loud &amp; Proud'],
    HR=['embroidered-qs-crew-black','Signet Crew — Black','49','signet-crew-black.webp',678,641,'/collections/discreet-neat','Shop Discreet','Discreet &amp; Neat'];
var C4=I.replace(/a\/$/,'c4/');
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
/* hero concept 4: two flat fields, no walls (Oct 19 2026). --qh = hero height (set by fit()), --fh = one phone field */
'.qsa-h4{display:grid;grid-template-columns:1fr 1fr;height:var(--qh,calc(100vh - 124px));border-bottom:2px solid #F4F3F0;background:#0b0b0b}',
'.qsa-f{position:relative;overflow:hidden;min-width:0;color:#fff}',
'.qsa-f.l{background:#0b0b0b}.qsa-f.r{background:#6E0B22}',
'.qsa-mk{position:absolute;z-index:2;top:calc(var(--qh,776px)*.057);left:50%;transform:translateX(-50%);text-align:center;white-space:nowrap}',
'.qsa-f.l .qsa-mk img{width:min(300px,34vw);height:auto;margin:0 auto}',
'.qsa-f.r .qsa-mk img{height:min(56px,calc(var(--qh,776px)*.072));width:auto;margin:0 auto}',
'.qsa-s{display:block;margin-top:16px;font-size:12px;font-weight:400;letter-spacing:.5em;padding-left:.5em;line-height:1.2;text-transform:uppercase;color:#fff!important}',
'.qsa-f.r .qsa-s{margin-top:12px}',
'.qsa-p{position:absolute;z-index:1;left:50%;top:47%;display:block;transform:translate(-50%,-50%) rotate(-3deg);width:min(66%,520px,calc(var(--qh,776px)*.61))}',
'.qsa-f.r .qsa-p{transform:translate(-50%,-50%) rotate(3deg);width:min(58%,440px,calc(var(--qh,776px)*.54))}',
'.qsa-p img{width:100%;height:auto;filter:drop-shadow(0 30px 30px rgba(0,0,0,.42))}',
'.qsa-base{position:absolute;z-index:2;left:0;right:0;bottom:calc(var(--qh,776px)*.049);display:flex;flex-direction:column;align-items:center;gap:20px}',
'.qsa-np{font-size:13px;font-weight:400;letter-spacing:.24em;line-height:1.2;text-transform:uppercase;color:#fff!important;text-align:center}',
'.qsa-np b{font-weight:400;opacity:.62;margin-left:14px;color:#fff!important}',
'.qsa-lk{display:inline-block;font-size:13px;font-weight:400;letter-spacing:.26em;line-height:1;padding:0 0 6px;border-bottom:1px solid rgba(255,255,255,.9);text-transform:uppercase;color:#fff!important}',
'.qsa-lk:hover{opacity:.75}',
'@media (max-width:600px){',
' .qsa-h4{grid-template-columns:1fr;grid-template-rows:1fr 1fr}',
' .qsa-mk{left:24px;top:clamp(14px,calc(var(--fh,373px)*.09),34px);transform:none;text-align:left}',
' .qsa-f.l .qsa-mk img{width:150px;margin:0}',
' .qsa-f.r .qsa-mk img{height:clamp(26px,calc(var(--fh,373px)*.107),40px);margin:0}',
' .qsa-s{font-size:9.5px;letter-spacing:.4em;padding-left:0;margin-top:clamp(7px,calc(var(--fh,373px)*.032),12px)}',
' .qsa-f.r .qsa-s{margin-top:clamp(7px,calc(var(--fh,373px)*.032),12px)}',
' .qsa-p{left:auto;right:-4%;top:50%;transform:translateY(-50%) rotate(-3deg);width:min(62%,calc(var(--fh,373px)*.72))}',
' .qsa-f.r .qsa-p{right:-7%;top:46%;transform:translateY(-50%) rotate(3deg);width:min(54%,calc(var(--fh,373px)*.68))}',
' .qsa-base{left:24px;right:auto;bottom:clamp(12px,calc(var(--fh,373px)*.08),30px);align-items:flex-start;gap:clamp(8px,calc(var(--fh,373px)*.043),16px)}',
' .qsa-np{font-size:11.5px;letter-spacing:.16em;display:flex;flex-direction:column;gap:6px;text-align:left}',
' .qsa-np b{margin-left:0}',
' .qsa-lk{font-size:12px;letter-spacing:.24em}',
'}',
/* 360 name tags */
'.qsa-tag{display:inline-block;white-space:nowrap;font-size:11px;font-weight:700;letter-spacing:.02em;padding:5px 10px;border-radius:99px;line-height:1.2;max-width:100%;overflow:hidden;text-overflow:ellipsis}',
'.qsa-tag i{font-style:normal;opacity:.7;margin-left:6px;font-weight:400}',
'.qsa-tag.lp{background:rgba(10,6,7,.88);color:#fff;border:1px solid rgba(194,70,95,.7)}',
'.qsa-tag.dn{background:#fff;color:#111;border:1px solid #d5d4d0}',
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
'@media (min-width:900px){',
' .qsa-wa{margin-top:64px;padding:56px 48px}.qsa-wa-in{display:grid;grid-template-columns:minmax(300px,380px) 1fr;grid-template-rows:auto auto;column-gap:40px;row-gap:0}.qsa-wa-t{grid-column:1;grid-row:1;align-self:end}.qsa-wa-c{grid-column:1;grid-row:2;align-self:start}.qsa-wa-p{grid-column:2;grid-row:1/3;align-self:center}',
' .qsa-wa-m{height:72px}.qsa-wa-k{font-size:12.5px}.qsa-wa-h{font-size:30px}.qsa-wa-d{font-size:14px}.qsa-wa-l{font-size:12.5px}',
' .qsa-wa-p{margin:0;max-width:800px;gap:20px;padding-bottom:14px;justify-self:center;width:100%}',
' .qsa-sec{padding:120px 48px 0}.qsa-grid{grid-template-columns:repeat(4,1fr);gap:52px 26px}',
' .qsa-visit{margin-top:120px;padding-bottom:96px}.qsa-visit a{font-size:12.5px}',
'}'
].join('\n');
function tag(g,tone){return '<span class="qsa-tag '+tone+'" data-s="'+g[0]+'">'+esc(g[1])+'<i>'+pm(g[2],g[4])+'</i></span>'}
function field(g,cls,mark){return '<div class="qsa-f '+cls+'"><div class="qsa-mk">'+mark+'<span class="qsa-s">'+g[8]+'</span></div>'+
 '<a class="qsa-p" href="/products/'+g[0]+'"><img src="'+C4+g[3]+'" alt="'+esc(g[1])+'" width="'+g[4]+'" height="'+g[5]+'"></a>'+
 '<div class="qsa-base"><span class="qsa-np" data-h="'+g[0]+'">'+esc(g[1])+'<b>'+money(g[2])+'</b></span><a class="qsa-lk" href="'+g[6]+'">'+g[7]+'</a></div></div>'}
function card(g){return '<a class="qsa-pc" href="/products/'+g[0]+'"><div class="ph qsa-st-'+g[6]+'"><img src="'+P+g[5]+'.webp" alt="'+esc(g[3])+'" loading="lazy"></div><span class="lb">'+tag(g,g[6]==='w'?'lp':'dn')+'</span></a>'}
/* Winter Atelier (Collection 002) preview: same five pieces as the 360 winter wall */
/* Oct 19 2026 (Justin): row tightened (each piece's box = its own aspect, so no wide empty cells around the joggers/beanie) and the beanie made bigger.
   [slug, name, image w/h (img/w files are 520 px tall), height vs the tops] */
/* Oct 19 2026 ~17:30 (Justin: side-by-side pieces must match in real-world scale): k = box height vs the crew at ONE scale (tee/crew/hood same torso width; joggers 1.2x crew height; beanie 0.5x torso width), from work/tee3back/layout.py. Was tee 1, hood 1, joggers 1.12, beanie .92 (qs-home-b.src.2f761.js). */
/* Oct 19 2026 ~18:00 (Justin: "That hat looks really small and goofy"): beanie k .332 -> .565 (0.5 T -> 0.85 T wide, 1.7x); tee/crew/hood/joggers k unchanged. Previous: blk/qs-home-b.src.0cca5.js. */
var WINTER=[['winter-crest-back-tee-black','Winter Crest Back Tee — Black',599/520,.905],['winter-crest-crew-off-white','Winter Crest Crew — Off-White',423/520,1],['frost-lined-hood-black','Frost-Lined Hood — Black',403/520,1.095],['maison-winter-joggers-black','Maison Winter Joggers',189/520,1.2],['wordmark-cuff-beanie-navy','Wordmark Cuff Beanie — Navy',458/520,.565]];
var W=I.replace(/a\/$/,'w/');
function winter(){return '<section class="qsa-wa" id="winter-atelier" aria-label="Winter Atelier, Collection 002, drops November 15"><div class="qsa-wa-in">'+
 '<div class="qsa-wa-t"><img class="qsa-wa-m" src="'+W+'qs-bluemark-k.webp" alt="QS" width="342" height="320"><p class="qsa-wa-k">Collection 002</p><p class="qsa-wa-h">Winter Atelier</p><div class="qsa-wa-r"></div><p class="qsa-wa-d">Drops Nov 15</p></div>'+
 '<div class="qsa-wa-p">'+WINTER.map(function(w){var f=(w[2]*w[3]).toFixed(4);return '<span style="flex:'+f+' 1 0;aspect-ratio:'+f+'/'+w[3]+'"><img src="'+W+w[0]+'.webp" alt="'+esc(w[1])+'" loading="lazy"></span>'}).join('')+'</div>'+
 '<div class="qsa-wa-c"><a class="qsa-wa-l" href="/pages/walk-the-store#w=all">Preview in the store &rarr;</a></div></div></section>'}
var HTML='<div class="qsa" id="qs-home">'+
 '<section class="qsa-h4" aria-label="Loud &amp; Proud or Discreet &amp; Neat">'+
  field(HL,'l','<img src="'+C4+'word-white.png" alt="Quality Stoner" width="1200" height="62">')+
  field(HR,'r','<img src="'+C4+'qs-mark-white.png" alt="QS" width="342" height="320">')+
 '</section>'+winter()+
 '<section class="qsa-sec"><div class="qsa-sh"><span class="qsa-k">The pieces</span><a href="/collections/all">View all</a></div><div class="qsa-grid">'+GRID.map(card).join('')+'</div></section>'+
 '<p class="qsa-visit"><a href="/pages/walk-the-store">Visit the store &nbsp;&rarr;</a></p>'+
 '</div>';
document.documentElement.classList.add('qsa-on');
var st=document.createElement('style');st.id='qs-home-css';st.textContent=CSS;(document.head||document.documentElement).appendChild(st);
if(me&&me.parentNode){var w=document.createElement('div');w.innerHTML=HTML;while(w.firstChild)me.parentNode.insertBefore(w.firstChild,me)}
/* promo ticker: directly under the hero (the shared ticker block above leaves it unplaced on home) */
(function(){var tk=window.__qsTkEl||document.getElementById('qs-tk'),wr=document.querySelector('#qs-home .qsa-h4');if(tk&&wr&&wr.parentNode)wr.parentNode.insertBefore(tk,wr.nextSibling)})();
/* hero height: header + hero + ticker fit the first screen (Justin Oct 19 22:04). Re-fit on width changes only (iOS toolbar show/hide
   changes innerHeight while scrolling; re-fitting then would make the page jump), plus early load events while still at the top. */
(function(){var hero=document.querySelector('#qs-home .qsa-h4');if(!hero)return;var lw=0;
 function fit(force){var w=innerWidth;if(!force&&w===lw)return;lw=w;var tk=document.getElementById('qs-tk');
  var th=(tk&&tk.isConnected&&tk.previousElementSibling===hero)?tk.offsetHeight:(w>=900?36:34);
  var top=hero.getBoundingClientRect().top+(window.pageYOffset||0),ph=w<=600;
  var H=Math.round(Math.max(ph?360:420,Math.min(1100,innerHeight-top-th)));
  hero.style.setProperty('--qh',H+'px');hero.style.setProperty('--fh',((H-2)/2).toFixed(1)+'px')}
 fit(1);var early=function(){if((window.pageYOffset||0)<5)fit(1)};
 document.addEventListener('DOMContentLoaded',early);window.addEventListener('load',early);setTimeout(early,600);
 if(document.fonts&&document.fonts.ready)document.fonts.ready.then(early);
 window.addEventListener('resize',function(){fit(0)});window.addEventListener('orientationchange',function(){setTimeout(function(){fit(1)},250)})})();
/* retired side-choice gate (lived in 863702ee): never let it lock the page */
function nogate(){var g=document.getElementById('qsg');if(g){g.classList.remove('on');g.style.display='none'}var r=document.documentElement;if(r.style.overflow==='hidden')r.style.overflow='';if(document.body&&document.body.style.overflow==='hidden')document.body.style.overflow=''}
nogate();setTimeout(nogate,600);
/* live prices from each product page's JSON-LD ("from" when sizes differ in price); a 404 product drops its grid card */
[HL,HR].concat(GRID).forEach(function(g){fetch('/products/'+g[0],{credentials:'same-origin'}).then(function(r){if(r.status===404){var c=document.querySelector('.qsa-grid [data-s="'+g[0]+'"]');c=c&&c.closest('.qsa-pc');if(c)c.style.display='none';throw 0}if(!r.ok)throw 0;return r.text()}).then(function(h){var j=h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/),d=null;try{d=j&&JSON.parse(j[1])}catch(e){}if(!d)return;var o=d.offers;o=o&&(o.offers||o);o=[].concat(o||[]);var ps=o.map(function(x){return +x.price}).filter(function(v){return v>0});if(!ps.length)return;var lo=Math.min.apply(null,ps),hi=Math.max.apply(null,ps);[].forEach.call(document.querySelectorAll('.qsa [data-s="'+g[0]+'"] i'),function(i){i.textContent=pm(lo,hi>lo)});[].forEach.call(document.querySelectorAll('.qsa [data-h="'+g[0]+'"] b'),function(b){b.textContent=money(lo)})}).catch(function(){})});
})();
