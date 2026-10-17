/* Quality Stoner home — concept B "dark editorial" (Fourthwall Custom HTML section 246a3a20), Oct 17 2026.
   Section HTML is one line: <script src="https://cdn.jsdelivr.net/gh/Tarius87/terrius-site@<commit>/assets/qs/home-b/qs-home-b.js"></script>
   Renders in place of the script tag: hero (spaced wordmark, Signet set on hangers, NEW / THE SIGNET SET, burgundy rule,
   outline Shop Now) + two charcoal studio photos -> calm grid (name + price) -> one 360 text link.
   Restyles on the home page only (html.qsb-on): theme header (black bar, spaced caps, white monogram), newsletter section
   acebb3b4 (minimal underline form; still the theme's own form -> Kit), theme footer (dark). Hides the floating #qs-sw pill
   and the retired 863702ee section. Prices/names refresh from each product page's JSON-LD at runtime.
   iOS safety: no preserve-3d, no backdrop-filter, no 3D transforms, no animations. */
(function(){
var me=document.currentScript,CB=me&&me.src?me.src.replace(/[^\/]*$/,''):'https://cdn.jsdelivr.net/gh/Tarius87/terrius-site@main/assets/qs/home-b/';
var I=CB+'img/',P=I+'p/';
var S863='.custom-html--fw-section-custom-html-863702ee-37d1-48a0-8c17-b9a8c0e04dea',S246='.custom-html--fw-section-custom-html-246a3a20-ff62-43a2-bd4a-0c06afca2c46';
var NL='[data-section-id="fw-section-newsletter-acebb3b4-0bfc-43c5-81bc-5509c22e59a5"]';
/* grid: [slug, short name, fallback price, full name] — order alternates colour on 2-col phone and 4-col desktop */
var GRID=[
 ['embroidered-qs-hoodie-burgundy','Signet Hoodie','58','Signet Hoodie — Burgundy'],
 ['heavyweight-tee-black','Calling Card Tee','29','Calling Card Tee — Black'],
 ['wordmark-leg-joggers-black','Bookmark Joggers','45','Bookmark Joggers — Black'],
 ['wordmark-hoodie-white','Masthead Hoodie','58','Masthead Hoodie — White'],
 ['embroidered-qs-crew-black','Signet Crew','49','Signet Crew — Black'],
 ['embroidered-qs-joggers-burgundy','Signet Joggers','45','Signet Joggers — Burgundy'],
 ['damask-lined-hoodie-black','Locket Hoodie','58','Locket Hoodie — Black'],
 ['wordmark-crew-white','Masthead Crew','49','Masthead Crew — White']];
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;')}
function money(v){v=+v;return '$'+(v%1?v.toFixed(2):''+v)}
var H='html.qsb-on ',X='html.qsb-on #fw-section-header ',F='QSI,-apple-system,"Helvetica Neue",Helvetica,Arial,sans-serif';
var CSS=[
'@font-face{font-family:QSI;src:url('+I+'f/inter-regular.woff2) format("woff2");font-weight:400;font-display:swap}',
'@font-face{font-family:QSI;src:url('+I+'f/inter-semibold.woff2) format("woff2");font-weight:600;font-display:swap}',
S863+'{display:none!important}',
S246+','+S246+' .container{padding:0!important;margin:0!important;max-width:none!important}',
'#qs-sw{display:none!important}',
/* page */
H+'body,'+H+'body.body--background-image,'+H+'.page,'+H+'.page__main,'+H+'.main{background:#0d0d0d!important;background-image:none!important}',
H+'.main__sections{gap:0!important}',
/* header: black bar, spaced caps. The theme's header CSS is nested under #fw-section-header with !important, so every
   override here carries the same id plus html.qsb-on to win on specificity. */
X+'sticky-header,'+X+'header,'+X+'header .wrapper{background:#0d0d0d!important;border:0!important;box-shadow:none!important}',
X+'header,'+X+'header *{font-family:'+F+'!important}',
X+'header{color:#f2f2f2!important}',
X+'header a,'+X+'header button,'+X+'header a[href*="cart"],'+X+'header a[href*="cart"] *{color:#f2f2f2!important;font-size:11px!important;font-weight:400!important;letter-spacing:.26em!important;text-transform:uppercase!important;text-decoration:none!important}',
X+'header a:hover,'+X+'header button:hover{color:#bdbdbd!important}',
X+'header svg{color:#f2f2f2!important}',
X+'header .cart-widget__label{display:inline!important;margin-right:2px!important}',
X+'header .header__dropdown,'+X+'header .header__dropdown-inner{background:#141414!important;border:1px solid #262626!important;box-shadow:none!important}',
X+'header .header__dropdown-link{color:#d9d9d9!important;letter-spacing:.2em!important}',
X+'header .header__dropdown-link:hover{color:#fff!important;background:transparent!important}',
X+'header img.header__logo-image{max-height:30px!important;height:30px!important;width:auto!important;mix-blend-mode:normal!important;filter:none!important}',
/* phone menu drawer (theme): dark on home */
H+'aside[data-drawer="mobile-menu"] .drawer__content{background:#111!important;color:#f2f2f2!important}',
H+'aside[data-drawer="mobile-menu"] .mobile-menu__link,'+H+'aside[data-drawer="mobile-menu"] .mobile-menu__label,'+H+'aside[data-drawer="mobile-menu"] .mobile-menu__close{color:#f2f2f2!important;font-family:'+F+'!important;font-size:12px!important;font-weight:400!important;letter-spacing:.26em!important;text-transform:uppercase!important}',
H+'aside[data-drawer="mobile-menu"] svg{color:#f2f2f2!important}',
H+'aside[data-drawer="mobile-menu"] .drawer__background{background:rgba(0,0,0,.6)!important}',
H+'aside[data-drawer="mobile-menu"] .mobile-menu__section{border-color:#262626!important}',
/* hero */
'.qsb{background:#0d0d0d;color:#f2f2f2;font-family:'+F+';-webkit-font-smoothing:antialiased;isolation:isolate}',
'.qsb *{box-sizing:border-box;margin:0;padding:0}',
'.qsb a{color:inherit!important;text-decoration:none!important}',
'.qsb img{display:block;max-width:100%;border:0}',
'.qsb p,.qsb span{color:inherit}',
'.qsb-hero{display:grid;gap:8px;padding:0 8px}',
'.qsb-pan{background:#151515;display:flex;flex-direction:column;align-items:center;text-align:center;padding:52px 22px 44px}',
'.qsb-wm{width:min(250px,70%);height:auto}',
'.qsb-hl{display:block;width:100%;max-width:440px}',
'.qsb-hang{width:100%;max-width:440px;height:auto;margin:34px 0 26px}',
'.qsb-new{font-size:12px;letter-spacing:.34em;text-transform:uppercase;font-weight:400}',
'.qsb-col{margin-top:12px;font-size:11px;letter-spacing:.24em;line-height:1.9;text-transform:uppercase;color:#cfcfcf!important}',
'.qsb-rule{width:28px;height:1px;background:#6E0B22;box-shadow:0 0 0 .5px #6E0B22;margin:18px auto 0}',
'.qsb-btn{display:inline-block;margin-top:28px;border:1px solid #5a5a5a;color:#f2f2f2!important;font-size:13px;letter-spacing:.02em;line-height:1;padding:12px 18px;border-radius:4px}',
'.qsb-btn:hover{border-color:#bdbdbd}',
'.qsb-ph2{display:grid;grid-template-columns:1fr 1fr;gap:8px}',
'.qsb-ph2 a{display:block;overflow:hidden;background:#2a2a2a}',
'.qsb-ph2 picture{display:block}',
'.qsb-ph2 img{width:100%;height:auto;aspect-ratio:1/1;object-fit:cover}',
/* grid */
'.qsb-sec{padding:72px 22px 0}',
'.qsb-sh{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:26px}',
'.qsb-k{font-size:10.5px;letter-spacing:.32em;text-transform:uppercase}',
'.qsb-sh a{font-size:10.5px;letter-spacing:.26em;text-transform:uppercase;color:#8d8d8d!important}',
'.qsb-grid{display:grid;grid-template-columns:1fr 1fr;gap:34px 14px}',
'.qsb-pc{display:block}',
'.qsb-pc .ph{position:relative;aspect-ratio:4/5;background:radial-gradient(110% 85% at 50% 30%,#4a484a 0%,#2c2c2d 58%,#1d1d1e 100%);overflow:hidden}',
'.qsb-pc .ph img{position:absolute;left:12%;top:13%;width:76%;height:74%;object-fit:contain}',
'.qsb-pc .nm{display:block;margin-top:14px;font-size:12.5px;letter-spacing:.04em;line-height:1.3}',
'.qsb-pc .pr{display:block;margin-top:4px;font-size:12.5px;color:#8d8d8d!important}',
/* 360 link */
'.qsb-walk{display:block;text-align:center;padding:84px 22px 84px}',
'.qsb-walk span{font-size:10.5px;letter-spacing:.32em;text-transform:uppercase;border-bottom:1px solid #3a3a3a;padding-bottom:6px;line-height:2.2}',
/* newsletter (theme section acebb3b4, theme form untouched) */
H+NL+'{background:#0d0d0d!important;color:#f2f2f2!important;border-top:1px solid #2a2a2a!important;padding:40px 22px 44px!important;margin:0!important;font-family:'+F+'}',
H+NL+' .container,'+H+NL+' .wrapper{max-width:520px!important;padding:0!important;margin:0 auto!important;background:transparent!important}',
H+NL+' .newsletter__content,'+H+NL+' .newsletter__body{background:transparent!important;padding:0!important;border:0!important;box-shadow:none!important;text-align:left!important}',
H+NL+' .newsletter__heading{font-family:'+F+'!important;font-size:10.5px!important;font-weight:400!important;letter-spacing:.32em!important;text-transform:uppercase!important;color:#f2f2f2!important;margin:0!important;line-height:1.6!important;text-align:left!important}',
H+NL+' .newsletter__text,'+H+NL+' .newsletter__text *{font-family:'+F+'!important;font-size:12.5px!important;color:#8d8d8d!important;text-align:left!important;margin:8px 0 0!important;line-height:1.5!important}',
H+NL+' .newsletter__form{margin-top:18px!important}',
H+NL+' .newsletter-form__input-button-container{display:flex!important;flex-direction:row!important;flex-wrap:nowrap!important;justify-content:flex-start!important;align-items:stretch!important;gap:0!important;border-bottom:1px solid #3a3a3a!important}',
H+NL+' .newsletter-form__input{flex:1 1 0%!important;max-width:none!important;min-width:0!important;margin:0!important}',
H+NL+' .newsletter-form__button{flex:0 0 auto!important;margin:0!important;width:auto!important}',
H+NL+' .input-field,'+H+NL+' .input-field--base{background:transparent!important;border:0!important;box-shadow:none!important;padding:0!important;margin:0!important;min-height:0!important}',
H+NL+' input.input-field__input{background:transparent!important;border:0!important;border-radius:0!important;box-shadow:none!important;outline:0!important;color:#f2f2f2!important;-webkit-text-fill-color:#f2f2f2;font-family:'+F+'!important;font-size:16px!important;padding:12px 0!important;height:auto!important;min-height:44px!important;width:100%!important}',
H+NL+' input.input-field__input::placeholder{color:#7a7a7a!important;-webkit-text-fill-color:#7a7a7a;opacity:1}',
H+NL+' .newsletter-form__button .button{background:transparent!important;border:0!important;border-radius:0!important;box-shadow:none!important;color:#f2f2f2!important;font-family:'+F+'!important;font-size:10.5px!important;font-weight:400!important;letter-spacing:.3em!important;text-transform:uppercase!important;padding:0 0 0 14px!important;min-height:44px!important;height:100%!important;width:auto!important;min-width:0!important}',
H+NL+' .newsletter-form__button .button:hover{opacity:.7}',
H+NL+' .form__response-container{max-width:none!important;margin:0!important}',
H+NL+' .form__error,'+H+NL+' .alert,'+H+NL+' .alert *{font-family:'+F+'!important;font-size:12px!important}',
H+NL+' .alert{background:transparent!important;border:0!important;padding:10px 0 0!important;color:#cfcfcf!important}',
H+NL+' .alert--error,'+H+NL+' .form__error{color:#e07b8f!important}',
/* footer (theme) */
H+'.page__footer,'+H+'.footer{background:#0d0d0d!important;color:#8d8d8d!important;font-family:'+F+'}',
H+'.footer .footer__separator{background:#2a2a2a!important;border-color:#2a2a2a!important}',
H+'.footer a,'+H+'.footer .footer__menu-link,'+H+'.footer .footer__copy,'+H+'.footer .footer__powered-by{color:#8d8d8d!important;font-family:'+F+'!important;font-size:11px!important;letter-spacing:.12em!important}',
H+'.footer a:hover{color:#f2f2f2!important}',
H+'.footer .footer__dropdown,'+H+'.footer .footer__dropdown-inner{background:#141414!important;border-color:#262626!important}',
H+'.footer svg{color:#8d8d8d!important}',
H+'.footer{padding-top:8px!important}',
'@media (max-width:749px){'+H+'.footer{padding-bottom:24px!important}}',
/* desktop */
'@media (min-width:900px){',
' .qsb-hero{grid-template-columns:1fr 1fr;padding:0 48px;gap:10px;max-width:1440px;margin:0 auto;height:clamp(640px,calc(100vh - 96px),880px)}',
' .qsb-pan{height:100%;min-height:0;padding:44px 40px 40px;justify-content:center}',
' .qsb-wm{width:300px}',
' .qsb-hl{width:min(440px,82%,calc((100vh - 470px) * 1.233));min-width:260px;max-width:none}',
' .qsb-hang{width:100%;max-width:none;height:auto;margin:36px 0 28px}',
' .qsb-ph2{order:-1;grid-template-columns:1fr;grid-template-rows:1fr 1fr;height:100%;min-height:0;gap:10px}',
' .qsb-ph2 a{min-height:0}.qsb-ph2 picture{height:100%}',
' .qsb-ph2 img{aspect-ratio:auto;height:100%}',
' .qsb-sec{padding:120px 48px 0;max-width:1240px;margin:0 auto}',
' .qsb-grid{grid-template-columns:repeat(4,1fr);gap:56px 28px}',
' .qsb-pc .nm,.qsb-pc .pr{font-size:13.5px}',
' .qsb-walk{padding:120px 22px 120px}',
' '+H+NL+'{padding:44px 48px 48px!important}',
' '+H+NL+' .container,'+H+NL+' .wrapper{max-width:560px!important}',
'}'
].join('\n');
function card(g){return '<a class="qsb-pc" data-s="'+g[0]+'" href="/products/'+g[0]+'"><div class="ph"><img src="'+P+g[0]+'.webp" alt="'+esc(g[3])+'" loading="lazy"></div><span class="nm">'+esc(g[1])+'</span><span class="pr">'+money(g[2])+'</span></a>'}
var HTML='<div class="qsb" id="qs-home">'+
 '<section class="qsb-hero">'+
  '<div class="qsb-pan"><img class="qsb-wm" src="'+I+'word-white.png" alt="Quality Stoner" width="1400" height="72">'+
  '<a href="/products/embroidered-qs-hoodie-burgundy" class="qsb-hl"><img class="qsb-hang" src="'+I+'hang.webp" alt="Signet Hoodie and Signet Joggers in burgundy, on wooden hangers" width="1100" height="892"></a>'+
  '<p class="qsb-new">New</p><p class="qsb-col">The Signet Set<br>Hoodie &amp; Joggers</p><div class="qsb-rule"></div>'+
  '<a class="qsb-btn" href="/products/embroidered-qs-hoodie-burgundy">Shop Now</a></div>'+
  '<div class="qsb-ph2">'+
   '<a href="/collections/hoodies-crews" aria-label="Hoodies &amp; Crews"><picture><source media="(min-width:900px)" srcset="'+I+'stack-w.webp"><img src="'+I+'stack.webp" alt="Folded hoodies, Signet Hoodie in burgundy on top" width="1100" height="1000"></picture></a>'+
   '<a href="/products/embroidered-qs-joggers-burgundy" aria-label="Signet Joggers — Burgundy"><picture><source media="(min-width:900px)" srcset="'+I+'lay-w.webp"><img src="'+I+'lay.webp" alt="Signet Joggers in burgundy" width="1100" height="1000"></picture></a>'+
  '</div></section>'+
 '<section class="qsb-sec"><div class="qsb-sh"><span class="qsb-k">The pieces</span><a href="/collections/all">View all</a></div><div class="qsb-grid">'+GRID.map(card).join('')+'</div></section>'+
 '<a class="qsb-walk" href="/pages/walk-the-store"><span>Look around the 360&deg; store &nbsp;&rarr;</span></a>'+
 '</div>';
document.documentElement.classList.add('qsb-on');
var st=document.createElement('style');st.id='qs-home-css';st.textContent=CSS;(document.head||document.documentElement).appendChild(st);
if(me&&me.parentNode){var w=document.createElement('div');w.innerHTML=HTML;while(w.firstChild)me.parentNode.insertBefore(w.firstChild,me)}
/* header logo: white monogram on the black bar (home only; the theme's black lockup would vanish on black) */
function logo(){var im=document.querySelector('.header .header__logo-image');if(!im||im.getAttribute('data-qsb'))return;im.setAttribute('data-qsb','1');im.removeAttribute('srcset');im.src=I+'mono-white.png';im.style.width='auto';im.style.height='30px';im.style.maxHeight='30px'}
logo();document.addEventListener('DOMContentLoaded',logo);
/* newsletter placeholder: the theme's text has stray spaces (" Email address "); text only, the form is untouched */
function ph(){var i=document.querySelector(NL+' input[type=email]');if(i)i.placeholder='Email address'}
ph();document.addEventListener('DOMContentLoaded',ph);
/* retired side-choice gate (lived in 863702ee): never let it lock the page */
function nogate(){var g=document.getElementById('qsg');if(g){g.classList.remove('on');g.style.display='none'}var r=document.documentElement;if(r.style.overflow==='hidden')r.style.overflow='';if(document.body&&document.body.style.overflow==='hidden')document.body.style.overflow=''}
nogate();setTimeout(nogate,600);
/* live prices from each product page's JSON-LD; a product that no longer exists (404) is dropped from the grid */
GRID.forEach(function(g){fetch('/products/'+g[0],{credentials:'same-origin'}).then(function(r){var a=document.querySelector('.qsb-pc[data-s="'+g[0]+'"]');if(r.status===404){if(a)a.style.display='none';throw 0}if(!r.ok)throw 0;return r.text()}).then(function(h){var j=h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/),d=null;try{d=j&&JSON.parse(j[1])}catch(e){}if(!d)return;var a=document.querySelector('.qsb-pc[data-s="'+g[0]+'"]');if(!a)return;if(d.name)a.querySelector('img').alt=d.name;var o=d.offers;o=o&&(o.offers||o);o=[].concat(o||[]);var ps=o.map(function(x){return +x.price}).filter(function(v){return v>0});if(ps.length)a.querySelector('.pr').textContent=money(Math.min.apply(null,ps))}).catch(function(){})});
})();
