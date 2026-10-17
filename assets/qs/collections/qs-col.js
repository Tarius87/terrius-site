/* Quality Stoner collection pages (qs-col.js)
   - dark brand cards for the product grid (#0b0a0a page, charcoal stage, off-white #F4F3F0 text, burgundy #6E0B22 accents); no cream
   - product photos shown as transparent cutouts on the dark stage: pre-made smooth cutouts (./cut/, mapped by product
     slug + photo fingerprint) for every current white-studio photo; otherwise a live cutout with a smoothed contour.
     White/light garments never sit on a white card; only a dark garment whose live cut fails the edge check gets a card
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

  /* ---------- pre-made cutouts (smooth, checked by eye at 3x) ----------
     slug -> [photo fingerprint (last path segment of the Fourthwall image url), file in ./cut/, tone].
     Used when the served photo is opaque (Fourthwall's own transparent file always wins when the browser gets one),
     and only while the tile still shows that exact photo; a new photo falls through to the live cut. */
  var CUT = {"heavyweight-tee-black":["7kgkxampQrY.jpg","heavyweight-tee-black.webp","dark"],"qs-cuff-beanie-white":["ne9-nbnonys.jpg","qs-cuff-beanie-white.webp","light"],"wordmark-crew-white":["W3soqbI4REY.jpg","wordmark-crew-white.webp","light"],"qs-lp-ts01-classic-tee-white":["ZsHIKw.jpg","qs-lp-ts01-classic-tee-white.webp","light"],"wordmark-leg-joggers-black":["1_xao6hV3Qg.jpg","wordmark-leg-joggers-black.webp","dark"],"qs-cuff-beanie-burgundy":["G9rMxmqPVfE.jpg","qs-cuff-beanie-burgundy.webp","dark"],"lockup-back-tee-off-white":["AaLsqEvzfqk.jpg","lockup-back-tee-off-white.webp","light"],"seal-crew-burgundy":["ae7PpHKZOAY.jpg","seal-crew-burgundy.webp","dark"],"letterpress-crew-grey":["Jhoc1o64QFg.jpg","letterpress-crew-grey.webp","light"],"embroidered-qs-crew-black":["bBWFmOWwEd0.jpg","embroidered-qs-crew-black.webp","dark"],"embroidered-qs-joggers-burgundy":["UegfTH7mWhw.jpg","embroidered-qs-joggers-burgundy.webp","dark"],"wordmark-hoodie-white":["FUGmRtM2gaY.jpg","wordmark-hoodie-white.webp","light"],"embroidered-qs-hoodie-burgundy":["joruaWIlVRU.jpg","embroidered-qs-hoodie-burgundy.webp","mid"],"embroidered-qs-tee-burgundy":["YOZlrF4MgfU.jpg","embroidered-qs-tee-burgundy.webp","mid"],"qs-snapback-black":["8orogpQVDQs.jpg","qs-snapback-black.webp","dark"],"qs-snapback-burgundy":["jos61NomFms.jpg","qs-snapback-burgundy.webp","dark"],"wordmark-snapback-black":["uswplVDnUEU.jpg","wordmark-snapback-black.webp","dark"],"wordmark-cuff-beanie-white":["bhYtA9X-Gvs.jpg","wordmark-cuff-beanie-white.webp","light"],"wordmark-cuff-beanie-black":["Y9Pye7Yld2E.jpg","wordmark-cuff-beanie-black.webp","dark"],"lockup-hoodie-black":["5G8h6PUrby8.jpg","lockup-hoodie-black.webp","dark"]};
  var BASE = (function () {
    var s = document.currentScript && document.currentScript.src;
    if (!s) { var ss = document.querySelectorAll('script[src*="qs-col.js"]'); s = ss.length ? ss[ss.length - 1].src : ''; }
    return s ? s.replace(/qs-col\.js.*$/, 'cut/') : '';
  })();
  function premade(img, url) {
    if (!BASE || img.classList.contains('tile__item--2')) return null;
    var a = img.closest && img.closest('a[href*="/products/"]');
    var m = a && /\/products\/([^/?#]+)/.exec(a.getAttribute('href') || '');
    var e = m && CUT[m[1]];
    if (!e) return null;
    var fp = url.split('?')[0].split('/').pop();
    return fp === e[0] ? { src: BASE + e[1], cls: e[2] } : null;
  }

  /* ---------- live cutout (only for photos without a pre-made cutout) ----------
     uniform white / off-white studio backdrop only (off-white is white-balanced first, so nothing is ever cream-tinted);
     background = flood fill of near-white from the border; contour gaussian-smoothed so the edge can never be ragged;
     edge colours are taken from the solid garment just inside (no white halo). Dark garments additionally have to pass
     an edge-quality check, else they get a clean rounded card. Light garments are always cut (never a white card). */
  var cache = {};
  var MAXD = 900;
  function analyse(url, probe) {
    var key = (probe ? 'p|' : '') + url;
    if (cache[key]) return cache[key];
    cache[key] = new Promise(function (res) {
      var im = new Image(); im.crossOrigin = 'anonymous'; im.decoding = 'async';
      im.onload = function () { try { res(process(im, probe)); } catch (e) { res(null); } };
      im.onerror = function () { res(null); };
      im.src = url;
    });
    return cache[key];
  }
  function blur(src, w, h, r) { // box blur (separable), returns new Float32Array
    var tmp = new Float32Array(w * h), out = new Float32Array(w * h), x, y, s, row, k = 2 * r + 1;
    for (y = 0; y < h; y++) { row = y * w; s = 0;
      for (x = -r; x <= r; x++) s += src[row + Math.min(w - 1, Math.max(0, x))];
      for (x = 0; x < w; x++) { tmp[row + x] = s / k; s += src[row + Math.min(w - 1, x + r + 1)] - src[row + Math.max(0, x - r)]; } }
    for (x = 0; x < w; x++) { s = 0;
      for (y = -r; y <= r; y++) s += tmp[Math.min(h - 1, Math.max(0, y)) * w + x];
      for (y = 0; y < h; y++) { out[y * w + x] = s / k; s += tmp[Math.min(h - 1, y + r + 1) * w + x] - tmp[Math.max(0, y - r) * w + x]; } }
    return out;
  }
  function dist(inside, w, h, cap) { // city-block distance from each inside pixel to the nearest outside pixel, capped
    var n = w * h, D = new Uint8Array(n), j, v;
    for (j = 0; j < n; j++) D[j] = inside[j] ? cap : 0;
    for (j = 0; j < n; j++) { if (!D[j]) continue; v = D[j];
      if (j % w > 0 && D[j - 1] + 1 < v) v = D[j - 1] + 1; if (j >= w && D[j - w] + 1 < v) v = D[j - w] + 1; D[j] = v; }
    for (j = n - 1; j >= 0; j--) { if (!D[j]) continue; v = D[j];
      if (j % w < w - 1 && D[j + 1] + 1 < v) v = D[j + 1] + 1; if (j < n - w && D[j + w] + 1 < v) v = D[j + w] + 1; D[j] = v; }
    return D;
  }
  function blobOf(c) {
    return new Promise(function (res) { c.toBlob(function (b) { c.width = c.height = 1; res(b ? URL.createObjectURL(b) : null); }, 'image/png'); });
  }
  function process(im, probe) { // probe: only report whether the served file is already transparent
    var w = im.naturalWidth, h = im.naturalHeight, s = Math.min(1, MAXD / Math.max(w, h));
    w = Math.round(w * s); h = Math.round(h * s);
    var c = document.createElement('canvas'); c.width = w; c.height = h;
    var x = c.getContext('2d', { willReadFrequently: true }); x.drawImage(im, 0, 0, w, h);
    var d = x.getImageData(0, 0, w, h), p = d.data, n = w * h, i, j, k;
    // already transparent -> keep the file, just classify
    var tr = 0;
    for (i = 3; i < p.length; i += 4 * 97) if (p[i] < 250) tr++;
    if (tr > (n / 97) * 0.05) { c.width = c.height = 1; return { src: null, cls: tone(p, n) }; }
    if (probe) { c.width = c.height = 1; return { opaque: 1 }; }
    // the border must be one uniform light studio colour
    var rs = [], gs = [], bs = [];
    function pushB(o) { rs.push(p[o]); gs.push(p[o + 1]); bs.push(p[o + 2]); }
    for (k = 0; k < w; k += 3) { pushB(k * 4); pushB(((h - 1) * w + k) * 4); }
    for (k = 0; k < h; k += 3) { pushB(k * w * 4); pushB((k * w + w - 1) * 4); }
    function med(a) { a = a.slice().sort(function (u, v) { return u - v; }); return a[a.length >> 1]; }
    var mr = med(rs), mg = med(gs), mb = med(bs), near = 0;
    for (k = 0; k < rs.length; k++) if (Math.abs(rs[k] - mr) <= 8 && Math.abs(gs[k] - mg) <= 8 && Math.abs(bs[k] - mb) <= 8) near++;
    if (near / rs.length < 0.95 || Math.min(mr, mg, mb) < 200) { c.width = c.height = 1; return { src: null, cls: 'card' }; }
    // white-balance an off-white backdrop to pure white
    var bal = Math.min(mr, mg, mb) < 252;
    if (bal) {
      var fr = 255 / Math.max(1, mr - 2), fg = 255 / Math.max(1, mg - 2), fb = 255 / Math.max(1, mb - 2);
      for (i = 0; i < p.length; i += 4) {
        var vr = p[i] * fr, vg = p[i + 1] * fg, vb = p[i + 2] * fb;
        p[i] = vr > 255 ? 255 : vr; p[i + 1] = vg > 255 ? 255 : vg; p[i + 2] = vb > 255 ? 255 : vb;
      }
    }
    var L = new Uint8Array(n);
    for (j = 0; j < n; j++) { var o0 = j * 4; L[j] = Math.min(p[o0], p[o0 + 1], p[o0 + 2]); }
    function card() { // clean rounded card of the (white-balanced) photo
      if (!bal) { c.width = c.height = 1; return { src: null, cls: 'card' }; }
      x.putImageData(d, 0, 0);
      return blobOf(c).then(function (u) { return { src: u, cls: 'card' }; });
    }
    // background: near-white connected to the border
    var TH = 246, B = new Uint8Array(n), q = new Int32Array(n), qh = 0, qt = 0;
    function seed(j) { if (!B[j] && L[j] >= TH) { B[j] = 1; q[qt++] = j; } }
    for (k = 0; k < w; k++) { seed(k); seed((h - 1) * w + k); }
    for (k = 0; k < h; k++) { seed(k * w); seed(k * w + w - 1); }
    while (qh < qt) { j = q[qh++]; var xx = j % w;
      if (xx > 0) seed(j - 1); if (xx < w - 1) seed(j + 1); if (j >= w) seed(j - w); if (j < n - w) seed(j + w); }
    var frac = qt / n;
    if (frac < 0.1 || frac > 0.92) return card();
    var G = new Uint8Array(n), fs = 0, fc = 0;
    for (j = 0; j < n; j++) if (!B[j]) { G[j] = 1; if (j % 7 === 0) { fs += L[j]; fc++; } }
    var light = fc && fs / fc > 170;
    var bgpix = new Uint8Array(n);
    if (!light) {
      // enclosed studio-white gaps (armpits) that come within 4px of the background: background too. Logos sit far inside.
      var D0 = dist(G, w, h, 9), lab = new Int32Array(n), id = 0;
      for (j = 0; j < n; j++) {
        if (!G[j] || L[j] < TH || lab[j]) continue;
        id++; qh = qt = 0; q[qt++] = j; lab[j] = id; var touch = 0, st = 0;
        while (qh < qt) { var u = q[qh++], ux = u % w; if (D0[u] <= 4) touch = 1;
          var nb = [ux > 0 ? u - 1 : -1, ux < w - 1 ? u + 1 : -1, u >= w ? u - w : -1, u < n - w ? u + w : -1];
          for (var t = 0; t < 4; t++) { var v2 = nb[t]; if (v2 >= 0 && G[v2] && !lab[v2] && L[v2] >= TH) { lab[v2] = id; q[qt++] = v2; } } }
        if (touch) for (st = 0; st < qt; st++) { G[q[st]] = 0; bgpix[q[st]] = 1; }
      }
    }
    // smooth contour: gaussian (3 box passes) of the mask, threshold at 0.5
    var F = new Float32Array(n); for (j = 0; j < n; j++) F[j] = G[j];
    F = blur(blur(blur(F, w, h, 2), w, h, 2), w, h, 2);
    var M = new Uint8Array(n), area = 0, diff = 0;
    for (j = 0; j < n; j++) { if (F[j] > 0.5) { M[j] = 1; area++; } if (M[j] !== G[j]) diff++; }
    // keep only the largest piece (drops specks)
    var lab2 = new Int32Array(n), best = 0, bestId = 0, id2 = 0;
    for (j = 0; j < n; j++) {
      if (!M[j] || lab2[j]) continue;
      id2++; qh = qt = 0; q[qt++] = j; lab2[j] = id2;
      while (qh < qt) { var u2 = q[qh++], u2x = u2 % w;
        if (u2x > 0 && M[u2 - 1] && !lab2[u2 - 1]) { lab2[u2 - 1] = id2; q[qt++] = u2 - 1; }
        if (u2x < w - 1 && M[u2 + 1] && !lab2[u2 + 1]) { lab2[u2 + 1] = id2; q[qt++] = u2 + 1; }
        if (u2 >= w && M[u2 - w] && !lab2[u2 - w]) { lab2[u2 - w] = id2; q[qt++] = u2 - w; }
        if (u2 < n - w && M[u2 + w] && !lab2[u2 + w]) { lab2[u2 + w] = id2; q[qt++] = u2 + w; } }
      if (qt > best) { best = qt; bestId = id2; }
    }
    var per = 0;
    for (j = 0; j < n; j++) if (M[j] && lab2[j] !== bestId) M[j] = 0;
    for (j = 0; j < n; j++) if (M[j]) { var jx = j % w;
      if ((jx > 0 && !M[j - 1]) || (jx < w - 1 && !M[j + 1]) || (j >= w && !M[j - w]) || (j < n - w && !M[j + w])) per++; }
    // edge-quality check: how far (px, on average along the contour) the raw edge strays from the smooth one
    var rag = per ? diff / per : 99;
    if (!light && (rag > 1.6 || best < n * 0.06)) return card();
    if (light && best < n * 0.06) return card();
    var DM = dist(M, w, h, 16), gmed = fc ? fs / fc : 128;
    if (light) {
      // a mock-up's soft drop shadow can be caught inside the outline: pull the edge in (<=10px) until its 3px ring is garment-light
      var ringS = new Float64Array(17), ringC = new Float64Array(17), sh = 0;
      for (j = 0; j < n; j++) if (M[j] && DM[j] <= 15) { ringS[DM[j]] += L[j]; ringC[DM[j]]++; }
      for (sh = 0; sh <= 10; sh++) {
        var rs2 = 0, rc2 = 0; for (k = sh + 1; k <= sh + 3; k++) { rs2 += ringS[k]; rc2 += ringC[k]; }
        if (!rc2 || rs2 / rc2 >= gmed - 22) break;
      }
      if (sh > 10) sh = 0; // never a white card for a light garment: keep the smooth outline
      if (sh) { for (j = 0; j < n; j++) if (M[j] && DM[j] <= sh) M[j] = 0; DM = dist(M, w, h, 16); }
    }
    // alpha: light anti-alias of the smooth mask
    var A = new Float32Array(n); for (j = 0; j < n; j++) A[j] = M[j];
    A = blur(A, w, h, 1);
    // edge colours: borrow from solid garment >=3px inside (and never from light fringe on a dark garment)
    var solid = new Uint8Array(n);
    for (j = 0; j < n; j++) solid[j] = DM[j] >= 3 && !bgpix[j] && (light || DM[j] > 6 || L[j] <= gmed + 50) ? 1 : 0;
    for (var pass = 0; pass < 10; pass++) {
      var add = [];
      for (j = 0; j < n; j++) {
        if (solid[j] || A[j] <= 0) continue;
        var jx2 = j % w, sr = 0, sg = 0, sb = 0, sc = 0, nbs = [jx2 > 0 ? j - 1 : -1, jx2 < w - 1 ? j + 1 : -1, j >= w ? j - w : -1, j < n - w ? j + w : -1];
        for (var t2 = 0; t2 < 4; t2++) { var v3 = nbs[t2]; if (v3 >= 0 && solid[v3]) { sr += p[v3 * 4]; sg += p[v3 * 4 + 1]; sb += p[v3 * 4 + 2]; sc++; } }
        if (sc) add.push(j, sr / sc, sg / sc, sb / sc);
      }
      if (!add.length) break;
      for (k = 0; k < add.length; k += 4) { var o1 = add[k] * 4; p[o1] = add[k + 1]; p[o1 + 1] = add[k + 2]; p[o1 + 2] = add[k + 3]; solid[add[k]] = 1; }
    }
    for (j = 0; j < n; j++) { var al = A[j]; p[j * 4 + 3] = al < 0.03 ? 0 : Math.round(al * 255); }
    x.putImageData(d, 0, 0);
    var cls = tone(p, n);
    return blobOf(c).then(function (u) { return u ? { src: u, cls: cls } : { src: null, cls: 'card' }; });
  }
  function tone(p, n) { // mean luminance of the garment pixels
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
    var pm = premade(img, url);
    var job = !pm ? analyse(url) : analyse(url, 1).then(function (r0) {
      if (r0 && !r0.opaque) return r0; // already transparent (or unreadable -> card)
      return new Promise(function (res) { // preload the pre-made cutout; if it can't load, cut live instead
        var t2 = new Image(); t2.onload = function () { res(pm); }; t2.onerror = function () { res(analyse(url)); }; t2.src = pm.src;
      });
    });
    return Promise.resolve(job).then(function (r) {
      clearTimeout(t);
      if (img.dataset.qscUrl !== url) return;
      if (!r || r.cls === 'card') {
        if (r && r.src) { img.removeAttribute('srcset'); img.dataset.qscOrig = url; img.dataset.qscUrl = r.src; img.src = r.src; }
        img.dataset.qsc = 'card'; return;
      }
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
