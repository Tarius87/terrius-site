/* Quality Stoner product page stage (qs-pdp.js)
   - Oct 17 2026: light page; gallery on one flat wall panel by garment tone (charcoal / burgundy / light grey); Pairs well with row
   - opaque white-background product photos: background flood-filled to transparent at runtime
     (canvas, imgproxy sends CORS *), so white garments sit on the dark stage; anything that is not a
     clean white-studio photo (lifestyle, off-white card, failed load) is shown as a framed card instead
   - dark garments get a soft light rim + burgundy glow so black-on-dark still reads
   - side-switch pill (#qs-sw, injected by the footer code) is moved into the page flow under Add to Cart
   Loaded on product pages from a one-line Custom HTML section; source of truth: site-build/pdp/qs-pdp.js */
(function () {
  if (window.__qsPdp) return; window.__qsPdp = 1;
  if (!/^\/products\//.test(location.pathname)) return;
  /* Oct 17 2026 cohesive flow: light page like the home (concept A). The gallery sits on ONE flat wall panel chosen by the
     garment: white / light / grey -> charcoal (a few -> burgundy #6E0B22), dark + burgundy -> light grey. White never on white.
     Spaced-caps Jost title + price; no glows, no pills (#qs-sw hidden here), theme "You may also like" replaced by "Pairs well with". */
  var SRC0 = (document.currentScript && document.currentScript.src) || ((document.querySelector('script[src*="qs-pdp.js"]') || {}).src) || '';
  var QB = /\/pdp\/qs-pdp\.js/.test(SRC0) ? SRC0.replace(/pdp\/qs-pdp\.js.*$/, '') : '';
  var F = 'QSJ,Jost,"Helvetica Neue",Helvetica,Arial,sans-serif';
  var css = [
    QB ? '@font-face{font-family:QSJ;src:url(' + QB + 'home-b/img/a/f/jost_n4.woff2) format("woff2");font-weight:400;font-display:swap}' : '',
    QB ? '@font-face{font-family:QSJ;src:url(' + QB + 'home-b/img/a/f/jost_n7.woff2) format("woff2");font-weight:700;font-display:swap}' : '',
    'html.qsp-on .page__main{background:#F4F3F0}',
    '.product__gallery{position:relative}',
    '.product__gallery .gallery--product{background:#E7E5E1;border-radius:0;padding:14px;position:relative;overflow:hidden;box-shadow:none}',
    '.product__gallery .gallery--product.qsp-pk{background:linear-gradient(180deg,#3d3936 0,#35312f 60%,#2f2c2a 100%)}',
    '.product__gallery .gallery--product.qsp-pb{background:linear-gradient(180deg,#7a1129 0,#6E0B22 60%,#600a1e 100%)}',
    '.product__gallery .gallery--product.qsp-pl{background:radial-gradient(ellipse 80% 70% at 50% 42%,#EEECE8 0,#E4E2DD 60%,#D9D6CF 100%)}',
    '.product__gallery .gallery__main,.product__gallery .gallery__thumbs{position:relative;z-index:1}',
    '.product__gallery .gallery__image-container,.product__gallery .gallery-thumbs__image-container,.product__gallery .gallery__image-container--background-color,.product__gallery .gallery-thumbs__image-container--background-color{background:transparent!important}',
    '.product__gallery .gallery__image-object,.product__gallery .gallery-thumbs__image-object{transition:opacity .25s ease}',
    'html.qsp-on .product__gallery img[data-qsp="wait"]{opacity:0}',
    '.product__gallery img[data-qsp="card"]{border-radius:0}',
    '.product__gallery img.qsp-dark,.product__gallery img.qsp-mid,.product__gallery img.qsp-light{filter:drop-shadow(0 0 1px rgba(0,0,0,.25)) drop-shadow(0 14px 18px rgba(0,0,0,.26))}',
    '.product__gallery .qsp-pk img.qsp-light,.product__gallery .qsp-pk img.qsp-mid,.product__gallery .qsp-pb img.qsp-light,.product__gallery .qsp-pb img.qsp-mid{filter:drop-shadow(0 0 1px rgba(0,0,0,.35)) drop-shadow(0 16px 20px rgba(0,0,0,.4))}',
    '.product__gallery .gallery-thumbs__image-container{border-radius:0!important;background:transparent!important}',
    '.product__gallery .gallery-thumbs__image-container::before{box-shadow:inset 0 0 0 1px rgba(20,20,20,.7);border-radius:0}',
    '.product__gallery .qsp-pk .gallery-thumbs__image-container::before,.product__gallery .qsp-pb .gallery-thumbs__image-container::before{box-shadow:inset 0 0 0 1px rgba(244,243,240,.85)}',
    '.product__gallery .gallery-thumbs__item img{filter:none!important}',
    '.product__gallery .gallery__nav-item,.product__gallery .gallery-thumbs__nav-item{background:rgba(244,243,240,.94)!important;color:#141414!important;border-radius:0}',
    'html.qsp-on .product-info__title{font-family:' + F + '!important;font-size:16px!important;font-weight:400!important;letter-spacing:.22em!important;text-transform:uppercase!important;line-height:1.5!important;color:#141414!important}',
    'html.qsp-on .product-info__prices,html.qsp-on .product-info__price{font-family:' + F + '!important;font-size:13px!important;font-weight:400!important;letter-spacing:.14em!important;color:#4a4a4a!important}',
    'html.qsp-on .product-info .badge,html.qsp-on .product-info [class*="badge"],html.qsp-on .product__gallery [class*="badge"]{display:none!important}',
    'html.qsp-on #qs-sw{display:none!important}',
    'html.qsp-on .product-recommendations{display:none!important}',
    /* Pairs well with */
    '.qsp-pairs{background:#F4F3F0;font-family:' + F + ';color:#141414;padding:8px 0 64px}',
    '.qsp-pairs h2{font-family:' + F + '!important;font-size:11px!important;font-weight:400!important;letter-spacing:.32em!important;text-transform:uppercase!important;margin:0 0 20px!important;color:#141414!important;line-height:1.4!important}',
    '.qsp-pg{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}',
    '.qsp-pc{display:block;min-width:0;color:#141414!important;text-decoration:none!important}',
    '.qsp-pc .ph{position:relative;aspect-ratio:4/5;overflow:hidden;background:#E7E5E1}',
    '.qsp-pc .ph.qsp-pk{background:linear-gradient(180deg,#3d3936 0,#35312f 60%,#2f2c2a 100%)}.qsp-pc .ph.qsp-pb{background:linear-gradient(180deg,#7a1129 0,#6E0B22 60%,#600a1e 100%)}',
    '.qsp-pc .ph.qsp-pl{background:radial-gradient(ellipse 80% 70% at 50% 42%,#EEECE8 0,#E4E2DD 60%,#D9D6CF 100%)}',
    '.qsp-pc .ph img{position:absolute;left:13%;top:12%;width:74%;height:72%;object-fit:contain;filter:drop-shadow(0 0 1px rgba(0,0,0,.28)) drop-shadow(0 10px 12px rgba(0,0,0,.26))}',
    '.qsp-pc .nm{display:block;margin-top:10px;font-size:9.5px;letter-spacing:.18em;text-transform:uppercase;line-height:1.5}',
    '.qsp-pc .pr{display:block;margin-top:2px;font-size:9.5px;letter-spacing:.12em;color:#6a6a6a}',
    '@media (min-width:640px){.qsp-pairs{padding:24px 0 96px}.qsp-pg{gap:24px;max-width:900px}.qsp-pc .nm{font-size:11px;letter-spacing:.22em;margin-top:14px}.qsp-pc .pr{font-size:11px;letter-spacing:.14em}}',
    '@media (max-width:639px){.product__gallery .gallery--product{margin-left:-16px;margin-right:-16px;padding:10px 12px 12px}}',
    /* Oct 17 2026: quiet back link when the visitor came from the 360 room */
    '.qsp-b360{display:inline-block;padding:14px 0 12px;font-family:' + F + ';font-size:11px;font-weight:400;letter-spacing:.26em;text-transform:uppercase;color:#6a6a6a!important;text-decoration:none!important;line-height:1.4}',
    '.qsp-b360:hover{color:#141414!important}',
    '@media (min-width:640px){.qsp-b360{padding:0 0 18px;margin-top:-8px}}',
    /* Oct 17 2026 15:20 (Justin: show the whole garment): the main picture always fits the screen (object-fit:contain inside a box no taller
       than the viewport minus the header), and the theme's desktop hover-zoom (holder background = 1920px photo, which showed only the
       waist/thigh of e.g. Ribbon Joggers) is switched off, so the gallery never shows a zoomed crop. Thumbs unchanged. */
    '.product__gallery .gallery__image-holder{background-image:none!important;cursor:default!important}',
    '.product__gallery .gallery__image-object{width:100%!important;max-height:max(420px,calc(100vh - 200px));object-fit:contain!important;object-position:50% 50%!important;transform:none!important}',
    '.product__gallery .gallery__image-holder .gallery__image-object:not([data-qsp="wait"]){opacity:1!important;visibility:visible!important}',
    '@media (max-width:639px){.product__gallery .gallery__image-object{max-height:calc(100vh - 220px)}}'
  ].join('\n');
  /* hover-zoom off: stop the pointer events before the theme's holder handlers see them (capture on document runs first) */
  ['mouseenter', 'mouseover', 'mousemove'].forEach(function (t) {
    document.addEventListener(t, function (e) { var h = e.target && e.target.closest && e.target.closest('.product__gallery .gallery__image-holder'); if (h) { e.stopPropagation(); if (h.style.backgroundImage) h.style.backgroundImage = ''; } }, true);
  });
  var st = document.createElement('style'); st.id = 'qs-pdp-css'; st.textContent = css;
  (document.head || document.documentElement).appendChild(st);
  document.documentElement.classList.add('qsp-on');

  /* ---------- background removal ---------- */
  var cache = {}; // url -> Promise<{src, cls} | null>
  var MAXD = (window.innerWidth || 0) >= 1024 ? 2048 : 1400; // desktop keeps full res for hover-zoom
  function analyse(url) {
    if (cache[url]) return cache[url];
    cache[url] = new Promise(function (res) {
      var im = new Image(); im.crossOrigin = 'anonymous'; im.decoding = 'async';
      im.onload = function () {
        try { res(process(im)); } catch (e) { res(null); }
      };
      im.onerror = function () { res(null); };
      im.src = url;
    });
    return cache[url];
  }
  function process(im) {
    var w = im.naturalWidth, h = im.naturalHeight, s = Math.min(1, MAXD / Math.max(w, h));
    w = Math.round(w * s); h = Math.round(h * s);
    var c = document.createElement('canvas'); c.width = w; c.height = h;
    var x = c.getContext('2d', { willReadFrequently: true }); x.drawImage(im, 0, 0, w, h);
    var d = x.getImageData(0, 0, w, h), p = d.data, n = w * h, i, k;
    // already transparent?  -> keep the file, just classify
    var tr = 0;
    for (i = 3; i < p.length; i += 4 * 97) if (p[i] < 250) tr++;
    if (tr > (n / 97) * 0.05) { c.width = c.height = 1; return { src: null, cls: tone(p, n, true) }; }
    // border must be a clean white studio background
    var bw = 0, bt = 0;
    function white(o) { return p[o] >= 248 && p[o + 1] >= 248 && p[o + 2] >= 248; }
    for (k = 0; k < w; k += 3) { bt += 2; if (white(k * 4)) bw++; if (white(((h - 1) * w + k) * 4)) bw++; }
    for (k = 0; k < h; k += 3) { bt += 2; if (white(k * w * 4)) bw++; if (white((k * w + w - 1) * 4)) bw++; }
    if (bw / bt < 0.97) { c.width = c.height = 1; return { src: null, cls: 'card' }; }
    // flood fill near-white from the borders
    var TH = 252, m = new Uint8Array(n), q = new Int32Array(n), qh = 0, qt = 0;
    function seed(j) { var o = j * 4; if (!m[j] && p[o] >= TH && p[o + 1] >= TH && p[o + 2] >= TH) { m[j] = 1; q[qt++] = j; } }
    for (k = 0; k < w; k++) { seed(k); seed((h - 1) * w + k); }
    for (k = 0; k < h; k++) { seed(k * w); seed(k * w + w - 1); }
    while (qh < qt) {
      var j = q[qh++], xx = j % w;
      if (xx > 0) seed(j - 1); if (xx < w - 1) seed(j + 1);
      if (j >= w) seed(j - w); if (j < n - w) seed(j + w);
    }
    var frac = qt / n;
    if (frac < 0.12 || frac > 0.93) { c.width = c.height = 1; return { src: null, cls: 'card' }; }
    // garment tone (sampled foreground)
    var fs = 0, fc = 0;
    for (j = 0; j < n; j += 29) if (!m[j]) { var oq = j * 4; fs += Math.min(p[oq], p[oq + 1], p[oq + 2]); fc++; }
    var lightG = fc && fs / fc > 170;
    if (lightG) {
      // light garment: no outline to cut against, so soften the mask (5x5 box blur) instead of un-blending
      var R = 2, tmp = new Float32Array(n), bf = new Float32Array(n), rs, xq, yq, cntq;
      for (yq = 0; yq < h; yq++) { rs = 0; var row = yq * w;
        for (xq = -R; xq <= R; xq++) rs += m[row + Math.min(w - 1, Math.max(0, xq))];
        for (xq = 0; xq < w; xq++) { tmp[row + xq] = rs / (2 * R + 1);
          rs += m[row + Math.min(w - 1, xq + R + 1)] - m[row + Math.max(0, xq - R)]; } }
      for (xq = 0; xq < w; xq++) { rs = 0;
        for (yq = -R; yq <= R; yq++) rs += tmp[Math.min(h - 1, Math.max(0, yq)) * w + xq];
        for (yq = 0; yq < h; yq++) { bf[yq * w + xq] = rs / (2 * R + 1);
          rs += tmp[Math.min(h - 1, yq + R + 1) * w + xq] - tmp[Math.max(0, yq - R) * w + xq]; } }
      for (j = 0; j < n; j++) { var al = 1 - bf[j]; if (m[j]) al *= 0.6; p[j * 4 + 3] = al <= 0.02 ? 0 : Math.round(Math.pow(al, 1.3) * 255); }
    } else {
      // alpha: background 0; edge band (<=2px from background) un-blended from white
      var band = new Uint8Array(n), L = new Uint8Array(n), D = new Uint8Array(n);
      for (j = 0; j < n; j++) { var o0 = j * 4; L[j] = Math.min(p[o0], p[o0 + 1], p[o0 + 2]); D[j] = m[j] ? 0 : 9; }
      // city-block distance to background, capped at 9 (two passes)
      for (j = 0; j < n; j++) { if (!D[j]) continue; var xd = j % w, dv = D[j];
        if (xd > 0 && D[j - 1] + 1 < dv) dv = D[j - 1] + 1; if (j >= w && D[j - w] + 1 < dv) dv = D[j - w] + 1; D[j] = dv; }
      for (j = n - 1; j >= 0; j--) { if (!D[j]) continue; var xe = j % w, dw = D[j];
        if (xe < w - 1 && D[j + 1] + 1 < dw) dw = D[j + 1] + 1; if (j < n - w && D[j + w] + 1 < dw) dw = D[j + w] + 1; D[j] = dw; }
      // edge band: within 2px, or a light stray pixel (JPEG fringe / white gaps) within 7px of the background
      for (j = 0; j < n; j++) if (D[j] && (D[j] <= 2 || (D[j] <= 7 && L[j] > 200))) band[j] = 1;
      for (j = 0; j < n; j++) {
        var o = j * 4;
        if (m[j]) { p[o + 3] = 0; continue; }
        if (!band[j]) continue;
        var xa = j % w, ya = (j / w) | 0, sum = 0, cnt = 0, mn = 255;
        for (var ey = -4; ey <= 4; ey++) { var yb = ya + ey; if (yb < 0 || yb >= h) continue;
          for (var ex = -4; ex <= 4; ex++) { var xb = xa + ex; if (xb < 0 || xb >= w) continue; var jj = yb * w + xb;
            if (m[jj]) continue; if (!band[jj]) { sum += L[jj]; cnt++; } if (L[jj] < mn) mn = L[jj]; } }
        // no solid garment nearby (stray speck in the background): judge it against the garment's mean tone
        var Lf = cnt >= 6 ? sum / cnt : (fc ? fs / fc : mn);
        if (Lf > 250) Lf = 250;
        var a = (255 - L[j]) / (255 - Lf); if (a > 1) a = 1; if (a < 0) a = 0;
        if (a < 0.04) { p[o + 3] = 0; continue; }
        // remove the white the edge pixel was blended with
        for (var ch = 0; ch < 3; ch++) { var v = (p[o + ch] - (1 - a) * 255) / a; p[o + ch] = v < 0 ? 0 : v > 255 ? 255 : v; }
        p[o + 3] = Math.round(a * 255);
      }

    }
    x.putImageData(d, 0, 0);
    var cls = tone(p, n, false);
    return new Promise(function (res) {
      c.toBlob(function (b) { c.width = c.height = 1; res(b ? { src: URL.createObjectURL(b), cls: cls } : { src: null, cls: 'card' }); }, 'image/png');
    });
  }
  function tone(p, n, alphaOnly) { // mean luminance of the garment pixels
    var sum = 0, cnt = 0, sr = 0, sg = 0;
    for (var i = 0; i < p.length; i += 4 * 53) {
      if (p[i + 3] < 200) continue;
      sum += 0.2126 * p[i] + 0.7152 * p[i + 1] + 0.0722 * p[i + 2]; sr += p[i]; sg += p[i + 1]; cnt++;
    }
    if (!cnt) return 'light';
    var v = sum / cnt; if (v < 165 && sr > 1.5 * sg) return 'dark'; /* burgundy -> light panel */
    return v < 62 ? 'dark' : v < 165 ? 'mid' : 'light';
  }
  /* pre-made smooth cutouts for photos that are served opaque and can't be cut cleanly at runtime (e.g. the cream-backdrop
     Calling Card Tee - White hero), keyed by the photo fingerprint (last path segment of the Fourthwall url). Files live
     next to the collection-page cutouts in the same repo commit: assets/qs/collections/cut/. White garments never sit on a white card. */
  var PRE = { 'ZsHIKw.jpg': 'qs-lp-ts01-classic-tee-white.webp' };
  var PBASE = (function () {
    var s = document.currentScript && document.currentScript.src;
    if (!s) { var ss = document.querySelectorAll('script[src*="qs-pdp.js"]'); s = ss.length ? ss[ss.length - 1].src : ''; }
    return s && /\/pdp\/qs-pdp\.js/.test(s) ? s.replace(/pdp\/qs-pdp\.js.*$/, 'collections/cut/') : '';
  })();
  function premade(url, r) {
    var f = PBASE && PRE[url.split('?')[0].split('/').pop()];
    if (!f || (r && !r.src && r.cls !== 'card')) return r; // no cutout on file, or Fourthwall already sent a transparent file
    // fetched into a blob url, exactly like a runtime cut-out (the gallery keeps blob srcs as they are)
    return fetch(PBASE + f, { mode: 'cors' }).then(function (x) { if (!x.ok) throw 0; return x.blob(); })
      .then(function (b) { return { src: URL.createObjectURL(b), cls: 'light' }; }, function () { return r; });
  }
  function apply(img) {
    if (img.dataset.qsp && img.dataset.qsp !== 'wait') return;
    var url = img.currentSrc || img.getAttribute('src'); if (!url) return;
    if (img.dataset.qspUrl === url) return;
    img.dataset.qspUrl = url; img.dataset.qsp = 'wait';
    var t = setTimeout(function () { if (img.dataset.qsp === 'wait') img.dataset.qsp = 'card'; }, 6000);
    Promise.resolve(analyse(url)).then(function (r) { return premade(url, r); }).then(function (r) {
      clearTimeout(t);
      if (img.dataset.qspUrl !== url) return;
      if (!r || r.cls === 'card') { img.dataset.qsp = 'card'; return; }
      img.classList.remove('qsp-dark', 'qsp-light', 'qsp-mid'); img.classList.add('qsp-' + r.cls);
      if (r.src) {
        img.removeAttribute('srcset'); img.dataset.qspOrig = url; img.dataset.qspUrl = r.src; img.src = r.src;
        // desktop hover-zoom paints data-zoom-image as the holder background: point it at the cut-out too
        var hold = img.closest('.gallery__image-holder');
        if (hold) { hold.setAttribute('data-zoom-image', r.src); hold.dataset.qspZoom = r.src; fixZoom(hold); }
      }
      img.dataset.qsp = 'cut';
      if (!STAGE && img.classList.contains('gallery__image-object')) stage(r.cls);
    });
  }
  /* ---------- one wall panel for the whole gallery ---------- */
  var CAT = {"qs-lp-ts01-classic-tee-white":["Calling Card Tee","White","tees","lp","store360/img/p/qs-lp-ts01-classic-tee-white.webp","l"],"heavyweight-tee-black":["Calling Card Tee","Black","tees","lp","store360/img/p/heavyweight-tee-black.webp","d"],"signet-tee-burgundy":["Signet Tee","Burgundy","tees","dn","store/img/p/signet-tee-burgundy.webp","d"],"maison-monogram-tee-black":["Cipher Tee","Black","tees","dn","store/img/p/maison-monogram-tee-black.webp","d"],"maison-monogram-tee-white":["Cipher Tee","White","tees","dn","store/img/p/maison-monogram-tee-white.webp","l"],"lockup-hoodie-black":["Postscript Hoodie","Black","tops","lp","store/img/p/lockup-hoodie-black.webp","d"],"wordmark-hoodie-white":["Masthead Hoodie","White","tops","lp","store/img/p/wordmark-hoodie-white.webp","l"],"seal-crew-burgundy":["Wax Seal Crew","Burgundy","tops","lp","store/img/p/seal-crew-burgundy.webp","d"],"letterpress-crew-grey":["First Edition Crew","White","tops","lp","store360/img/p/letterpress-crew-white.webp","l"],"damask-lined-hoodie-black":["Locket Hoodie","Black","tops","dn","store360/img/p/damask-lined-hoodie-black.webp","d"],"signet-hoodie-burgundy":["Signet Hoodie","Burgundy","tops","dn","store/img/p/signet-hoodie-burgundy.webp","d"],"scattered-monogram-hoodie-white":["Pressed Flower Hoodie","White","tops","dn","store/img/p/scattered-monogram-hoodie-white.webp","l"],"embroidered-qs-crew-black":["Signet Crew","Black","tops","dn","store/img/p/embroidered-qs-crew-black.webp","d"],"damask-crew-burgundy":["Decanter Crew","Burgundy","tops","dn","store/img/p/damask-crew-burgundy.webp","d"],"wordmark-leg-joggers-black":["Bookmark Joggers","Black","joggers","lp","store/img/p/wordmark-leg-joggers-black.webp","d"],"hem-band-joggers-off-white":["Ribbon Joggers","Off-White","joggers","lp","store360/img/p/hem-band-joggers-off-white.webp","l"],"signet-joggers-burgundy":["Signet Joggers","Burgundy","joggers","dn","store/img/p/signet-joggers-burgundy.webp","d"],"maison-monogram-joggers-black":["Cipher Joggers","Black","joggers","dn","store360/img/p/maison-monogram-joggers-black.webp","d"],"wordmark-snapback-black":["Masthead Snapback","Black","hats","lp","store/img/p/wordmark-snapback-black.webp","d"],"wordmark-cuff-beanie-black":["Masthead Beanie","Black","hats","lp","store/img/p/wordmark-cuff-beanie-black.webp","d"],"qs-snapback-black":["Signet Snapback","Black","hats","dn","store/img/p/qs-snapback-black.webp","d"],"qs-snapback-burgundy":["Signet Snapback","Burgundy","hats","dn","store/img/p/qs-snapback-burgundy.webp","d"],"qs-cuff-beanie-burgundy":["Signet Beanie","Burgundy","hats","dn","store/img/p/qs-cuff-beanie-burgundy.webp","d"],"qs-lp-bp04-backpack-black":["Calling Card Backpack","Black","bags","lp","store/img/p/qs-lp-bp04-backpack-black.webp","d"],"qs-lp-bp05-backpack-white":["Calling Card Backpack","White","bags","lp","store/img/p/qs-lp-bp05-backpack-white.webp","l"],"wordmark-lattice-backpack-white":["Filigree Backpack","White","bags","lp","store360/img/p/wordmark-lattice-backpack-white.webp","l"],"maison-monogram-backpack-black":["Cipher Backpack","Black","bags","dn","store/img/p/maison-monogram-backpack-black.webp","d"],"damask-crossbody-burgundy":["Decanter Crossbody","Burgundy","bags","dn","store/img/p/damask-crossbody-burgundy.webp","d"],"embroidered-qs-sherpa-black":["Signet Sherpa Blanket","Black","bags","dn","store360/img/p/embroidered-qs-sherpa-black.webp","d"]};   /* slug -> [name, colour, category, side, image path under assets/qs/, tone l|d]  (built from the 360 data, pdp/build.py) */
  var BURG = ['scattered-monogram-hoodie-white', 'wordmark-lattice-backpack-white']; /* same list as qs-col.js */
  var SLUG = (location.pathname.match(/^\/products\/([^\/?#]+)/) || [])[1] || '';
  var STAGE = '';
  function pcls(slug, light) { return light ? (BURG.indexOf(slug) > -1 ? 'qsp-pb' : 'qsp-pk') : 'qsp-pl'; }
  function stage(cls) {
    var g = document.querySelector('.product__gallery .gallery--product'); if (!g) return;
    var light = cls === 'light' || cls === 'mid';
    STAGE = pcls(SLUG, light); g.classList.remove('qsp-pk', 'qsp-pb', 'qsp-pl'); g.classList.add(STAGE);
  }
  function stageEarly() {
    if (STAGE) { var g0 = document.querySelector('.product__gallery .gallery--product'); if (g0 && !g0.classList.contains(STAGE)) g0.classList.add(STAGE); return; }
    var c = CAT[SLUG]; if (c) return stage(c[5] === 'l' ? 'light' : 'dark');
    var t = document.querySelector('.product-info__title'); if (!t) return;
    var col = (t.textContent.split(/\s[\u2014-]\s/)[1] || '').toLowerCase(); if (!col) return;
    if (/white|cream|ivory|natural|grey|gray|ash|heather|sand|bone/.test(col)) stage('light');
    else if (/black|burgundy|maroon|charcoal|navy|wine|red|green|brown/.test(col)) stage('dark');
  }
  /* ---------- "Pairs well with" (Oct 17 2026): 3 quiet cards, same side (Loud & Proud / Discreet & Neat) in complementary
     categories, live prices from each product page's JSON-LD; a product that 404s is skipped. Replaces the theme's "You may also like". */
  var NEXT = { tees: ['joggers', 'hats', 'bags', 'tops'], tops: ['joggers', 'hats', 'tees', 'bags'], joggers: ['tops', 'tees', 'hats', 'bags'], hats: ['tees', 'joggers', 'tops', 'bags'], bags: ['tees', 'hats', 'tops', 'joggers'] };
  function money(v) { v = +v; return '$' + (v % 1 ? v.toFixed(2) : '' + v); }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function hsh(s) { var h = 0; for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h; }
  function candidates() {
    var me = CAT[SLUG]; var keys = Object.keys(CAT);
    var cat = me ? me[2] : 'tees', side = me ? me[3] : null, order = NEXT[cat] || NEXT.tees, out = [], k = hsh(SLUG);
    order.forEach(function (c, ci) {
      var pool = keys.filter(function (s) { return s !== SLUG && CAT[s][2] === c && (!side || CAT[s][3] === side); });
      if (!pool.length) pool = keys.filter(function (s) { return s !== SLUG && CAT[s][2] === c; });
      for (var i = 0; i < pool.length; i++) { var s = pool[(k + ci + i) % pool.length]; if (out.indexOf(s) < 0) { out.push(s); if (out.length >= 6) return; } }
    });
    return out;
  }
  function price(slug) {
    return fetch('/products/' + slug, { credentials: 'same-origin' }).then(function (r) { if (!r.ok) throw 0; return r.text(); }).then(function (h) {
      var j = h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/), d = null; try { d = j && JSON.parse(j[1]); } catch (e) {}
      if (!d) throw 0; var o = d.offers; o = o && (o.offers || o); o = [].concat(o || []);
      var ps = o.map(function (x) { return +x.price; }).filter(function (v) { return v > 0; }); if (!ps.length) throw 0;
      var lo = Math.min.apply(null, ps), hi = Math.max.apply(null, ps); return (hi > lo ? 'from ' : '') + money(lo);
    });
  }
  var PAIRS = 0;
  function pairs() {
    if (PAIRS || !QB || !Object.keys(CAT).length) return;
    var pm = document.querySelector('.product__main'), sec = pm && (pm.closest('.fw-section') || pm.closest('section')); if (!sec) return;
    PAIRS = 1;
    var keep = /[?&]from=360(&|$)/.test(location.search) ? (location.search.match(/[?&](from|w)=[^&]*/g) || []).map(function (x) { return x.slice(1); }).join('&') : '';
    var list = candidates(), box = document.createElement('section'); box.className = 'qsp-pairs'; box.id = 'qsp-pairs';
    box.innerHTML = '<div class="wrapper container"><h2>Pairs well with</h2><div class="qsp-pg"></div></div>'; box.style.display = 'none';
    sec.parentNode.insertBefore(box, sec.nextSibling);
    Promise.all(list.map(function (s) { return price(s).then(function (p) { return [s, p]; }, function () { return null; }); })).then(function (rs) {
      var all = rs.filter(Boolean), ok = [], bur = function (r) { return /burgundy/i.test(CAT[r[0]][1]); };
      /* no two burgundy pieces side by side (shades differ between blanks) */
      all.forEach(function (r) { if (ok.length < 3 && !(ok.length && bur(r) && bur(ok[ok.length - 1]))) ok.push(r); });
      all.forEach(function (r) { if (ok.length < 3 && ok.indexOf(r) < 0) ok.push(r); });
      if (ok.length < 3) { box.parentNode.removeChild(box); return; }
      box.querySelector('.qsp-pg').innerHTML = ok.map(function (r) {
        var s = r[0], c = CAT[s];
        return '<a class="qsp-pc" href="/products/' + s + (keep ? '?' + keep : '') + '"><div class="ph ' + pcls(s, c[5] === 'l') + '"><img src="' + QB + c[4] + '" alt="' + esc(c[0] + ' \u2014 ' + c[1]) + '" loading="lazy"></div>' +
          '<span class="nm">' + esc(c[0]) + ' &mdash; ' + esc(c[1]) + '</span><span class="pr">' + r[1] + '</span></a>';
      }).join('');
      box.style.display = '';
    });
  }
  /* ---------- "Back to the 360 room" (Oct 17 2026): shown when the page was opened from the 360 (?from=360, or the
     referrer is /pages/walk-the-store). The link returns to the wall the visitor left (the 360 saves it in sessionStorage q3-ret). */
  function back360() {
    if (document.getElementById('qsp-b360')) return;
    var fromQ = /[?&]from=360(&|$)/.test(location.search), fromR = /\/pages\/walk-the-store/.test(document.referrer || '');
    if (!fromQ && !fromR) return;
    var main = document.querySelector('.product .product__main'); if (!main) return;
    var h = '';
    var m = {}; (location.search.replace(/^\?/, '') || '').split('&').forEach(function (kv) { var q = kv.split('='); if (q[0]) m[q[0]] = decodeURIComponent(q[1] || ''); });
    var st = /^[a-z]+$/.test(m.w || '') ? m : null; if (!st) try { st = JSON.parse(sessionStorage.getItem('q3-ret') || 'null'); } catch (e) {}
    if (st && /^[a-z]+$/.test(st.w || '')) {
      h = '#w=' + (st.w === 'fit' ? 'all' : st.w);
    }
    var a = document.createElement('a'); a.id = 'qsp-b360'; a.className = 'qsp-b360'; a.href = '/pages/walk-the-store' + h;
    a.innerHTML = '&#8592;&nbsp; Back to the 360 room';
    main.parentNode.insertBefore(a, main);
  }
  function scan() {
    back360(); stageEarly(); pairs();
    var imgs = document.querySelectorAll('.product__gallery .gallery__image-object, .product__gallery .gallery-thumbs__image-object');
    for (var i = 0; i < imgs.length; i++) {
      var im = imgs[i];
      // the theme may swap src (variant change) -> re-run
      if (im.dataset.qspUrl && im.getAttribute('src') !== im.dataset.qspUrl) { delete im.dataset.qsp; delete im.dataset.qspUrl; im.classList.remove('qsp-dark', 'qsp-light', 'qsp-mid'); }
      apply(im);
    }
  }
  function fixZoom(h) {
    var z = h.dataset.qspZoom; if (!z) return;
    var bg = h.style.backgroundImage;
    if (bg && bg !== 'none' && bg.indexOf(z) < 0) h.style.backgroundImage = 'url("' + z + '")';
  }
  /* ---------- side-switch pill into the flow ---------- */
  function movePill() {
    var sw = document.getElementById('qs-sw'); if (!sw || sw.classList.contains('qsp-inline')) return;
    var cta = document.querySelector('.product-info__cta');
    if (!cta) return;
    cta.parentNode.insertBefore(sw, cta.nextSibling); sw.classList.add('qsp-inline');
  }
  var pend = 0;
  function soon(muts) {
    var need = !muts;
    if (muts) for (var i = 0; i < muts.length; i++) {
      var mu = muts[i];
      if (mu.attributeName === 'style') { if (mu.target.dataset && mu.target.dataset.qspZoom) fixZoom(mu.target); }
      else need = true;
    }
    if (!need || pend) return; pend = 1; (window.requestAnimationFrame || setTimeout)(function () { pend = 0; scan(); }); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scan); else scan();
  window.addEventListener('load', scan);
  new MutationObserver(soon).observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['src', 'style'] });
})();
