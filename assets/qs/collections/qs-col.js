/* Quality Stoner collection pages (qs-col.js)
   - dark brand cards for the product grid (#0b0a0a page, charcoal stage, off-white #F4F3F0 text, burgundy #6E0B22 accents); no cream
   - white-studio product photos: background flood-filled to transparent at runtime (same method as qs-pdp.js),
     anything else is shown as a clean rounded white card on the dark stage
   - hides the floating Loud & Proud | Discreet & Neat pill (#qs-sw, footer code) on collection pages only
   Loaded from a one-line Custom HTML section on the collection page template; source: site-build/col/ (build.py) */
(function () {
  if (window.__qsCol) return; window.__qsCol = 1;
  if (!/\/collections\//.test(location.pathname)) return;
  var css = [
    'html.qsc-on .page__main{background:#0b0a0a}',
    'html.qsc-on .collection-template__header h1{color:#F4F3F0}',
    'html.qsc-on .collection-template__header h1:after{content:"";display:block;width:38px;height:3px;border-radius:3px;background:#6E0B22;margin-top:12px}',
    'html.qsc-on .collection-template .empty,html.qsc-on .collection-template p{color:rgba(244,243,240,.75)}',
    'html.qsc-on .product-tile .tile{display:block;background:#151313!important;border:1px solid rgba(244,243,240,.08);border-radius:18px;padding:8px;overflow:hidden;transition:border-color .2s ease}',
    'html.qsc-on .product-tile .tile:hover{border-color:rgba(160,24,56,.85)}',
    'html.qsc-on .product-tile .tile__image{border-radius:12px;overflow:hidden;position:relative;background:radial-gradient(120% 90% at 50% 40%,#2b2627 0%,#1a1818 55%,#0e0d0d 100%)!important}',
    'html.qsc-on .product-tile .tile__image:before{content:"";position:absolute;left:50%;top:46%;width:80%;height:64%;transform:translate(-50%,-50%);background:radial-gradient(closest-side,rgba(110,11,34,.34),rgba(110,11,34,0));pointer-events:none;z-index:0}',
    'html.qsc-on .product-tile .tile__image .image,html.qsc-on .product-tile .image__object{background:transparent!important;border-radius:0}',
    'html.qsc-on .product-tile .image__object{z-index:1}',
    'html.qsc-on .product-tile .image__badges{z-index:2}',
    'html.qsc-on .product-tile .image__badges>*{background:#6E0B22!important;color:#F4F3F0!important;border-radius:99px!important}',
    'html.qsc-on .product-tile img.tile__item{mix-blend-mode:normal!important;width:90%;height:90%}',
    'html.qsc-on .product-tile img[data-qsc="wait"]{visibility:hidden}',
    'html.qsc-on .product-tile img[data-qsc="card"]{width:86%;height:86%;object-fit:cover;background:#fff;border-radius:10px;box-shadow:0 0 0 1px rgba(255,255,255,.08),0 10px 26px rgba(0,0,0,.5)}',
    'html.qsc-on .product-tile img.qsp-dark{filter:drop-shadow(0 0 1.2px rgba(255,255,255,.3)) drop-shadow(0 0 18px rgba(150,20,48,.5))}',
    'html.qsc-on .product-tile img.qsp-light,html.qsc-on .product-tile img.qsp-mid{filter:drop-shadow(0 10px 18px rgba(0,0,0,.55))}',
    'html.qsc-on .product-tile .tile__description{padding:10px 6px 6px!important}',
    'html.qsc-on .product-tile .tile__heading,html.qsc-on .product-tile .tile:hover .tile__heading{color:#F4F3F0!important}',
    'html.qsc-on .product-tile .tile__prices{opacity:1!important}',
    'html.qsc-on .product-tile .tile__price{color:rgba(244,243,240,.72)!important}',
    'html.qsc-on .product-tile .tile__price--offer{color:rgba(244,243,240,.45)!important}',
    'html.qsc-on .pagination a,html.qsc-on .pagination span{color:#F4F3F0}',
    'html.qsc-on #qs-sw{display:none!important}',
    '@media (max-width:749px){html.qsc-on .footer{padding-bottom:16px!important}html.qsc-on .product-tile .tile{border-radius:16px;padding:6px}html.qsc-on .product-tile .tile__description{padding:8px 4px 4px!important}}'
  ].join('\n');
  var st = document.createElement('style'); st.id = 'qs-col-css'; st.textContent = css;
  (document.head || document.documentElement).appendChild(st);
  document.documentElement.classList.add('qsc-on');

  /* ---------- background removal ---------- */
  var cache = {}; // url -> Promise<{src, cls} | null>
  var MAXD = 900; // tile images are served at 720px
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
    // off-white / light-grey studio backdrop (e.g. cream): if the border is one uniform light colour,
    // white-balance the photo so that backdrop becomes pure white, then cut it out like a white studio shot
    var bal = 0;
    if (bw / bt < 0.97) {
      var rs0 = [], gs0 = [], bs0 = [];
      function pushB(o) { rs0.push(p[o]); gs0.push(p[o + 1]); bs0.push(p[o + 2]); }
      for (k = 0; k < w; k += 3) { pushB(k * 4); pushB(((h - 1) * w + k) * 4); }
      for (k = 0; k < h; k += 3) { pushB(k * w * 4); pushB((k * w + w - 1) * 4); }
      function med(a) { a = a.slice().sort(function (u, v) { return u - v; }); return a[a.length >> 1]; }
      var mr = med(rs0), mg = med(gs0), mb = med(bs0), near = 0;
      for (k = 0; k < rs0.length; k++) if (Math.abs(rs0[k] - mr) <= 7 && Math.abs(gs0[k] - mg) <= 7 && Math.abs(bs0[k] - mb) <= 7) near++;
      if (near / rs0.length >= 0.97 && Math.min(mr, mg, mb) >= 205) {
        var fr = 255 / Math.max(1, mr - 2), fg = 255 / Math.max(1, mg - 2), fb = 255 / Math.max(1, mb - 2);
        for (i = 0; i < p.length; i += 4) {
          var vr = p[i] * fr, vg = p[i + 1] * fg, vb = p[i + 2] * fb;
          p[i] = vr > 255 ? 255 : vr; p[i + 1] = vg > 255 ? 255 : vg; p[i + 2] = vb > 255 ? 255 : vb;
        }
        bw = bt; bal = 1;
      }
    }
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
  /* ---------- tiles ---------- */
  var active = 0, queue = [];
  function pump() {
    while (active < 3 && queue.length) {
      var img = queue.shift(); active++;
      run(img).then(function () { active--; pump(); }, function () { active--; pump(); });
    }
  }
  function run(img) {
    var url = img.dataset.qscUrl;
    var t = setTimeout(function () { if (img.dataset.qsc === 'wait') img.dataset.qsc = 'card'; }, 7000);
    return Promise.resolve(analyse(url)).then(function (r) {
      clearTimeout(t);
      if (img.dataset.qscUrl !== url) return;
      if (!r || r.cls === 'card') { img.dataset.qsc = 'card'; return; }
      img.classList.remove('qsp-dark', 'qsp-light', 'qsp-mid'); img.classList.add('qsp-' + r.cls);
      if (r.src) { img.removeAttribute('srcset'); img.dataset.qscOrig = url; img.dataset.qscUrl = r.src; img.src = r.src; }
      img.dataset.qsc = 'cut';
    });
  }
  var HOVER = window.matchMedia && window.matchMedia('(hover:hover)').matches;
  function scan() {
    var imgs = document.querySelectorAll('.product-tile img.tile__item'), second = [];
    for (var i = 0; i < imgs.length; i++) {
      var im = imgs[i], url = im.getAttribute('src');
      if (!url) continue;
      if (im.dataset.qscUrl && url === im.dataset.qscUrl) continue; // done or in progress
      im.dataset.qscUrl = url; im.dataset.qsc = 'wait';
      if (im.classList.contains('tile__item--2')) {
        if (HOVER) second.push(im); else im.dataset.qsc = 'card'; // phones never show the hover image
      } else watch(im);
    }
    for (i = 0; i < second.length; i++) watch(second[i]);
  }
  // process tiles as they come near the screen (first screenful first)
  var io = window.IntersectionObserver ? new IntersectionObserver(function (es) {
    for (var i = 0; i < es.length; i++) if (es[i].isIntersecting) { io.unobserve(es[i].target); queue.push(es[i].target); }
    pump();
  }, { rootMargin: '900px 0px' }) : null;
  function watch(im) {
    if (io) io.observe(im);
    else { queue.push(im); pump(); }
  }
  var pend = 0;
  function soon() { if (pend) return; pend = 1; (window.requestAnimationFrame || setTimeout)(function () { pend = 0; scan(); }); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scan); else scan();
  window.addEventListener('load', scan);
  new MutationObserver(soon).observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['src'] });
})();
