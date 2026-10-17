/* Quality Stoner product page stage (qs-pdp.js)
   - dark brand stage behind the product gallery (main + thumbs)
   - opaque white-background product photos: background flood-filled to transparent at runtime
     (canvas, imgproxy sends CORS *), so white garments sit on the dark stage; anything that is not a
     clean white-studio photo (lifestyle, off-white card, failed load) is shown as a framed card instead
   - dark garments get a soft light rim + burgundy glow so black-on-dark still reads
   - side-switch pill (#qs-sw, injected by the footer code) is moved into the page flow under Add to Cart
   Loaded on product pages from a one-line Custom HTML section; source of truth: site-build/pdp/qs-pdp.js */
(function () {
  if (window.__qsPdp) return; window.__qsPdp = 1;
  if (!/^\/products\//.test(location.pathname)) return;
  var css = [
    '.product__gallery{position:relative}',
    '.product__gallery .gallery--product{background:radial-gradient(120% 85% at 50% 42%,#2b2627 0%,#1a1818 48%,#0b0a0a 100%);border-radius:18px;padding:14px;position:relative;overflow:hidden;box-shadow:0 18px 40px rgba(0,0,0,.18)}',
    '.product__gallery .gallery--product:before{content:"";position:absolute;left:50%;top:44%;width:78%;height:62%;transform:translate(-50%,-50%);background:radial-gradient(closest-side,rgba(110,11,34,.42),rgba(110,11,34,0));pointer-events:none;z-index:0}',
    '.product__gallery .gallery__main,.product__gallery .gallery__thumbs{position:relative;z-index:1}',
    '.product__gallery .gallery__image-container,.product__gallery .gallery-thumbs__image-container,.product__gallery .gallery__image-container--background-color,.product__gallery .gallery-thumbs__image-container--background-color{background:transparent!important}',
    '.product__gallery .gallery__image-object,.product__gallery .gallery-thumbs__image-object{transition:opacity .25s ease}',
    'html.qsp-on .product__gallery img[data-qsp="wait"]{opacity:0}',
    '.product__gallery img[data-qsp="card"]{background:#fff;border-radius:12px;box-shadow:0 0 0 1px rgba(255,255,255,.08),0 10px 30px rgba(0,0,0,.45)}',
    '.product__gallery img.qsp-dark{filter:drop-shadow(0 0 1.5px rgba(255,255,255,.28)) drop-shadow(0 0 22px rgba(150,20,48,.55))}',
    '.product__gallery img.qsp-light{filter:drop-shadow(0 12px 22px rgba(0,0,0,.5))}',
    '.product__gallery img.qsp-mid{filter:drop-shadow(0 10px 24px rgba(0,0,0,.55))}',
    '.product__gallery .gallery-thumbs__image-container{border-radius:10px!important;background:rgba(255,255,255,.05)!important}',
    '.product__gallery .gallery-thumbs__image-container::before{box-shadow:inset 0 0 0 2px rgba(255,255,255,.9);border-radius:10px}',
    '.product__gallery .gallery-thumbs__item img.qsp-dark{filter:drop-shadow(0 0 1px rgba(255,255,255,.4))}',
    '.product__gallery .gallery-thumbs__item img.qsp-light,.product__gallery .gallery-thumbs__item img.qsp-mid{filter:none}',
    '.product__gallery .gallery__nav-item,.product__gallery .gallery-thumbs__nav-item{background:rgba(255,255,255,.92)!important;color:#0b0a0a!important;border-radius:99px}',
    '#qs-sw.qsp-inline{position:static!important;left:auto!important;bottom:auto!important;transform:none!important;margin:18px 0 4px;width:max-content;max-width:100%;box-shadow:0 0 0 1px rgba(0,0,0,.12)!important;z-index:auto!important}',
    '@media (max-width:639px){.product__gallery .gallery--product{border-radius:0;box-shadow:none;margin-left:-16px;margin-right:-16px;padding:10px 12px 12px}#qs-sw.qsp-inline{margin:16px auto 4px}}'
  ].join('\n');
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
    var sum = 0, cnt = 0;
    for (var i = 0; i < p.length; i += 4 * 53) {
      if (p[i + 3] < 200) continue;
      sum += 0.2126 * p[i] + 0.7152 * p[i + 1] + 0.0722 * p[i + 2]; cnt++;
    }
    if (!cnt) return 'light';
    var v = sum / cnt; return v < 62 ? 'dark' : v < 165 ? 'mid' : 'light';
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
    });
  }
  function scan() {
    var imgs = document.querySelectorAll('.product__gallery .gallery__image-object, .product__gallery .gallery-thumbs__image-object');
    for (var i = 0; i < imgs.length; i++) {
      var im = imgs[i];
      // the theme may swap src (variant change) -> re-run
      if (im.dataset.qspUrl && im.getAttribute('src') !== im.dataset.qspUrl) { delete im.dataset.qsp; delete im.dataset.qspUrl; im.classList.remove('qsp-dark', 'qsp-light', 'qsp-mid'); }
      apply(im);
    }
    movePill();
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
