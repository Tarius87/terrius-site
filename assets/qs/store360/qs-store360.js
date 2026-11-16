/* QS promo ticker (Oct 19 2026, Justin approved). Prepended to every one of our section scripts (home-b, store360, pdp, collections);
   the first one to run inserts it, the rest see #qs-tk and skip. Thin burgundy bar where the theme's announcement bar sits (top of the page,
   above the sticky header; scrolls away with the page like the theme bar did), white spaced caps, scrolls right-to-left at ~60 px/s (one pass
   across a 1440 px screen ~24 s), pauses on hover/focus, static under prefers-reduced-motion. Links to /collections/all. The theme's static
   announcement bar is hidden only on pages that carry this ticker (html.qs-tk-on). Plain 2D element, outside the 360 scene; no backdrop-filter.
   Oct 19 2026 16:20 (Justin): z-index 12 -> 10 so the theme drawers (aside.drawer, fixed, z 11: mobile menu) sit ABOVE the ticker
   (it was covering the menu's close X). Home: the ticker sits directly under the hero instead of at the top. When the home section
   (246a3a20) is on the page the ticker is NOT inserted at the top; it is left in window.__qsTkEl and qs-home-b.js places it right after
   .qsa-wrap (fallback: top of the page if that never happens). Theme announcement bar still hidden there (one promo bar only).
   Nov 15 2026 (Justin): old code promo gone everywhere; text = 'Winter Atelier is live · Free US shipping over $75', links to the store's Winter zone.
   Source: site-build/ticker/qs-ticker.js */
(function () {
  try {
    if (window.__qsTk || document.getElementById('qs-tk')) return; window.__qsTk = 1;
    var TXT = 'Winter Atelier is live \u00a0\u00b7\u00a0 Free US shipping over $75';
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
    var a = document.createElement('a'); a.id = 'qs-tk'; a.href = '/pages/walk-the-store#w=all';
    a.setAttribute('aria-label', 'Winter Atelier is live. Free US shipping over $75. Walk the store');
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
/* Quality Stoner · Walk the Store · TURNTABLE RING (Oct 23 2026, Justin approved concept 3 "Turntable ring"; replaces the 7-wall 3D room).
   The whole store stands on one ring that turns toward you: the front piece is big and sharp, side pieces shrink, lift and fade, the back half
   is culled. Name / colour · price in small spaced caps under the front piece only. Nav = thin text line of category names, burgundy hairline
   under the active one. Winter = its own ice wash + navy text, blue-S mark on ice (never on navy), pieces unlinked, "Nov 15", no price.
   iPhone rules: 2D projection in JS, one transform per element (translate + scale), opacity for the fade, no preserve-3d / backdrop-filter /
   filter animation; hidden items are display:none; images load lazily as they come round. Every product piece links to its product page
   (SHOP + slug + '?from=360', same hrefs as the wall room). Old wall-room source: qs-store360.src.85e4c.js.
   Source: site-build/store360/qs-store360.src.js + ring.css, built by site-build/store360/build.py.
   Nov 15 2026: since the Winter-live edit the LIVE file is the source (src.js is stale); the VIEW ALL grid is added by work/grid/assemble.py.
   Nov 15 2026 later (Justin): '<- Shop' removed (collection pages now redirect here); LOUD & PROUD / DISCREET & NEAT toggle filters ring + grid;
   grid swipes on iPhone (touch events); #w=<zone> / #all&side=lp|dn routing. Patch: site-build/lpdn-1115/patch_store.py.
   Nov 15 2026 evening (Justin approved the store revamp): Winter is the FIRST category and holds all 18 Winter Atelier pieces (WINTER_ON until
   Jan 1 2027 CT; after that each Winter piece falls into its own category and the Winter tab goes); 'Bags & More' -> 'Bags & Blankets';
   QS Dad Hat in Hats; every public piece has a side (SX: pieces showing the words QUALITY STONER -> LP, QS / Blue-S marks only -> DN,
   merged under the live LP/DN collection lists); side switch = ALL · LOUD & PROUD · DISCREET & NEAT, All on by default, burgundy underline
   on the active one; a plain grid (cutout, name, colour · price) of the front piece's category sits under the ring; First Edition Crew = Grey.
   Nov 15 2026 night (Justin): tapping a piece (ring, category grid or VIEW ALL grid) opens a quick-view card over the store (photos, size,
   Add to Cart through the real product page loaded hidden) instead of leaving the store; 'Full details' still opens the product page. */
(function () {
  if (window.__q3Loaded) return; window.__q3Loaded = 1;
  var me = document.currentScript, SRC = me && me.src ? me.src : '';
  var BASE = SRC.replace(/[^\/?#]*([?#].*)?$/, ''), IMG = BASE + '../store/img/', OWN = BASE + 'img/';
  var D = {"sticker-fall-crew-black":{"s":"lp","n":"Sticker Fall Crew","c":"Black","p":"49","z":["2XS","XS","S","M","L","XL","2XL","3XL","4XL","5XL","6XL"],"hi":true,"g":["sticker-fall-crew-black.webp"],"o":1,"v":[["da97788e-5873-4ef3-ae5a-268619f105a1","All-Over Print","2XS",4900,1],["1ab7d20b-0227-451f-b089-cb94aaab8927","All-Over Print","XS",4900,1],["76a2f527-cfa4-4e8f-8abe-6af08d089ad9","All-Over Print","S",4900,1],["5826daed-de52-4810-8bea-a5a09d08a059","All-Over Print","M",4900,1],["56c52b55-c8ac-438b-89b6-b3466a8639e5","All-Over Print","L",4900,1],["1e7d02cf-b81a-41c7-8cc5-96b8e2d7a53d","All-Over Print","XL",4900,1],["feb86acf-5dbd-41dd-bc50-3aa85c397d1a","All-Over Print","2XL",5100,1],["1ec82091-119c-49f2-a1ef-61bc24ce652a","All-Over Print","3XL",5300,1],["7c1a6e8d-c2e0-42d5-bb6c-fbaa8fecb6c9","All-Over Print","4XL",5500,1],["f6dd4348-53ba-42f2-9e96-4981a60927d6","All-Over Print","5XL",5700,1],["aa6d2d79-377a-4065-88ea-916f3b3a24cb","All-Over Print","6XL",5900,1]],"x":[]},"damask-crew-burgundy":{"s":"dn","n":"Decanter Crew","c":"Burgundy","p":"49","z":["2XS","XS","S","M","L","XL","2XL","3XL","4XL","5XL","6XL"],"g":["damask-crew-burgundy_0.webp","damask-crew-burgundy_1.webp","damask-crew-burgundy_2.webp"],"hi":true,"x":[],"v":[["6666bd79-e70a-4236-9d86-6735f9abb251","All-Over Print","2XS",4900,1],["5fe934c6-40b7-46d8-934b-cef61e3ac2a2","All-Over Print","XS",4900,1],["14a2f8f9-7bfb-4efa-9b06-ce7e90db5a50","All-Over Print","S",4900,1],["fcf1357e-30d9-4c1c-9e43-3ce514bb4abe","All-Over Print","M",4900,1],["9e36c8bf-808c-4031-acb0-231b97a78eeb","All-Over Print","L",4900,1],["faad94a5-bb70-4253-8e57-7102c78195b0","All-Over Print","XL",4900,1],["cf0a6328-4b37-4abd-86ba-2e4b0e2d0152","All-Over Print","2XL",5100,1],["d59e4443-27e9-4dbf-b337-9b2cad4d9a89","All-Over Print","3XL",5300,1],["e47873e0-4a6a-4354-a056-60f99fbe2353","All-Over Print","4XL",5500,1],["6d1cb46a-07dd-4652-8fba-cc6c00512014","All-Over Print","5XL",5700,1],["a168f729-6168-4701-9f77-255c7b996809","All-Over Print","6XL",5900,1]]},"damask-crossbody-burgundy":{"s":"dn","n":"Decanter Crossbody","c":"Burgundy","p":"55","z":["One size"],"g":["damask-crossbody-burgundy_0.webp","damask-crossbody-burgundy_1.webp"],"hi":false,"x":[],"v":[["897d15ac-1f77-4461-9054-940d37b36401","Black","One size",5500,1]]},"embroidered-qs-crew-black":{"s":"dn","n":"Signet Crew","c":"Black","p":"49","z":["S","M","L","XL","2XL","3XL"],"g":["embroidered-qs-crew-black_0.webp","embroidered-qs-crew-black_1.webp","embroidered-qs-crew-black_2.webp"],"hi":true,"x":[],"v":[["c8a5f73c-61ae-4d2d-bc81-a098dbcdb331","Black","S",4900,1],["ab12108a-d295-4ff5-b240-806469f35bbb","Black","M",4900,1],["71861c8f-a80d-471a-9e56-b46a12f39342","Black","L",4900,1],["45815892-11c7-4b31-9933-a66549b63cb7","Black","XL",4900,1],["a702b4b0-2483-4e58-91d1-00843d54ccfc","Black","2XL",5100,1],["035411c6-9064-4fc8-93ee-ed63b8cd26a7","Black","3XL",5300,1]]},"signet-hoodie-burgundy":{"s":"dn","n":"Signet Hoodie","c":"Burgundy","p":"62","z":["2XS","XS","S","M","L","XL","2XL","3XL","4XL","5XL","6XL"],"g":["signet-hoodie-burgundy_0.webp","signet-hoodie-burgundy_1.webp","signet-hoodie-burgundy_2.webp"],"hi":true,"x":[],"v":[["b860ec60-5490-4533-a194-edad34e76936","White","2XS",6200,1],["981915fb-705c-4b4a-9ff9-b60fc88343aa","White","XS",6200,1],["13e62ab1-c460-4b4e-a5dd-b568d816404b","White","S",6200,1],["c2e3d368-d755-4e30-a7d5-1213d84ef088","White","M",6200,1],["33257513-3361-4d89-9175-144818bcab3a","White","L",6200,1],["f5638b7d-0bbc-4cdf-8757-7db71ec5d4e7","White","XL",6200,1],["a7a509ca-96cf-4cd4-9ff4-34968e8d254e","White","2XL",6400,1],["f2947b7c-bbd0-4310-9741-03bf876c2dda","White","3XL",6400,1],["9dbf1b17-0eab-4cc2-8f26-81909ba7d282","White","4XL",6400,1],["e2a74e3d-c2cf-4dd9-96db-2595059e9eeb","White","5XL",6400,1],["ae5d9e07-a935-442e-8f43-07916ab7013c","White","6XL",6600,1]]},"signet-joggers-burgundy":{"s":"dn","n":"Signet Joggers","c":"Burgundy","p":"49","z":["XS","S","M","L","XL","2XL","3XL"],"g":["signet-joggers-burgundy_0.webp","signet-joggers-burgundy_1.webp"],"hi":true,"x":[],"v":[["95876b05-5090-4075-b139-67d24b378189","All-Over Print","XS",4900,1],["adaa1b7c-e1ce-4705-b7d1-77fc69458c66","All-Over Print","S",4900,1],["65d14f2a-49df-449c-9ce2-fa9154b782ac","All-Over Print","M",4900,1],["8d035895-72e2-44c1-9953-1a2678b18119","All-Over Print","L",4900,1],["4e156637-3a87-4a1f-9ccb-eacac02fd765","All-Over Print","XL",4900,1],["c0dadd91-b889-4f85-826d-9d301a470725","All-Over Print","2XL",5100,1],["c7395c7e-703b-4832-8728-66e08f39f1b6","All-Over Print","3XL",5271,1]]},"signet-tee-burgundy":{"s":"dn","n":"Signet Tee","c":"Burgundy","p":"34.99","z":["XS","S","M","L","XL","2XL"],"g":["signet-tee-burgundy_0.webp","signet-tee-burgundy_1.webp"],"hi":true,"x":[],"v":[["000ae91a-5f32-4643-bce0-9830fed42769","White ","XS",3499,1],["442b0b85-2dbb-44ae-8d94-3e3799abd853","White ","S",3499,1],["f1b02132-ec17-46e1-930b-5cf704761f65","White ","M",3499,1],["c57734f0-ed7a-47c1-8689-9bd164afb933","White ","L",3499,1],["60d7b35d-c55f-43a3-8752-dd8b55358389","White ","XL",3499,1],["d02d9c47-c09e-458c-97ac-a9bdd3647b49","White ","2XL",3699,1]]},"lockup-hoodie-black":{"s":"lp","n":"Postscript Hoodie","c":"Black","p":"58","z":["S","M","L","XL","2XL","3XL"],"g":["lockup-hoodie-black_1.webp","lockup-hoodie-black_0.webp","lockup-hoodie-black_2.webp"],"hi":true,"x":[],"v":[["905d47bd-58c9-46e8-a297-464725e50941","Black","S",5800,1],["e0798d56-951f-4732-849f-31c88666a765","Black","M",5800,1],["d335156e-3b6f-4e41-877d-1f2a86242bea","Black","L",5800,1],["5d17f014-221e-4496-ac2e-90fa9b7a8e66","Black","XL",5800,1],["32e05325-d888-463c-bd50-54c7bb12cb41","Black","2XL",6000,1],["21b870cb-db6e-4e08-b21b-c8621d59b72f","Black","3XL",6200,1]]},"maison-monogram-backpack-black":{"s":"dn","n":"Cipher Backpack","c":"Black","p":"48","z":["One size"],"g":["maison-monogram-backpack-black_0.webp","maison-monogram-backpack-black_1.webp","maison-monogram-backpack-black_2.webp"],"hi":false,"x":[],"v":[["30eaa151-6e5c-41f3-9d82-f7cd4b301bd9","All-Over Print","One size",4800,1]]},"maison-monogram-tee-black":{"s":"dn","n":"Cipher Tee","c":"Black","p":"34.99","z":["XS","S","M","L","XL","2XL"],"g":["maison-monogram-tee-black_0.webp","maison-monogram-tee-black_1.webp"],"hi":true,"x":[],"v":[["24594d9e-f506-488c-a567-0648ab4a79f3","White ","XS",3499,1],["aea687f7-053d-4302-b25c-1e1f08c94a69","White ","S",3499,1],["466f070d-7e0e-4e55-b6f8-5761b7adb437","White ","M",3499,1],["b7e31a74-5061-4b93-9423-0c18787d7e8b","White ","L",3499,1],["40dba4c9-eebb-499b-a2e2-7d519b7a4751","White ","XL",3499,1],["a0991cd3-710b-41c1-be47-eae9f3fbd8cb","White ","2XL",3699,1]]},"maison-monogram-tee-white":{"s":"dn","n":"Cipher Tee","c":"White","p":"34.99","z":["XS","S","M","L","XL","2XL"],"g":["maison-monogram-tee-white_0.webp","maison-monogram-tee-white_1.webp"],"hi":true,"x":[],"v":[["28a7b6c1-3c09-455d-8454-2b7f00897877","White ","XS",3499,1],["908cfa4a-390d-4f22-9773-9fce40276e46","White ","S",3499,1],["0cbea435-ff6c-4ccf-bde0-339086d9d4a7","White ","M",3499,1],["c6ec66d4-878a-4d0b-b7d0-afe72403ba7b","White ","L",3499,1],["73e27ddf-e83e-48bd-a9ac-da30a65af739","White ","XL",3499,1],["dbbbe2ef-1c97-49ee-ba3c-7edd9d3ff717","White ","2XL",3699,1]]},"qs-cuff-beanie-burgundy":{"s":"dn","n":"Signet Beanie","c":"Burgundy","p":"29.95","z":["One size"],"g":["qs-cuff-beanie-burgundy_0.webp","qs-cuff-beanie-burgundy_1.webp"],"hi":false,"x":[],"v":[["f8142910-526a-4c64-9ead-a5dd2567ac32","Burgundy","One size",2995,1]]},"qs-lp-bp04-backpack-black":{"s":"lp","n":"Calling Card Backpack","c":"Black","p":"48","z":["One size"],"g":["qs-lp-bp04-backpack-black_0.webp","qs-lp-bp04-backpack-black_1.webp"],"hi":false,"x":[],"v":[["0beeec6b-4ecf-4950-b72b-7ce4eb9f337e","All-Over Print","One size",4800,1]]},"qs-lp-bp05-backpack-white":{"s":"lp","n":"Calling Card Backpack","c":"White","p":"48","z":["One size"],"g":["qs-lp-bp05-backpack-white_0.webp","qs-lp-bp05-backpack-white_1.webp","qs-lp-bp05-backpack-white_2.webp"],"hi":false,"x":[],"v":[["83211f6d-f5d6-4deb-be4d-409811deab5b","All-Over Print","One size",4800,1]]},"qs-snapback-black":{"s":"dn","n":"Signet Snapback","c":"Black","p":"34.95","z":["One size"],"g":["qs-snapback-black_0.webp"],"hi":false,"x":[],"v":[["7e9d3892-b1f9-4393-bfc8-9a6080c60c83","Black","One size",3495,1]]},"qs-snapback-burgundy":{"s":"dn","n":"Signet Snapback","c":"Burgundy","p":"34.95","z":["One size"],"g":["qs-snapback-burgundy_0.webp"],"hi":false,"x":[],"v":[["88790266-e6e1-4eaa-8fb6-95f2a7c21f6a","Maroon","One size",3495,1]]},"scattered-monogram-hoodie-white":{"s":"dn","n":"Pressed Flower Hoodie","c":"White","p":"58","z":["2XS","XS","S","M","L","XL","2XL","3XL","4XL","5XL","6XL"],"g":["scattered-monogram-hoodie-white_0.webp","scattered-monogram-hoodie-white_1.webp","scattered-monogram-hoodie-white_2.webp"],"hi":true,"x":[],"v":[["7ad34e11-b11a-41b3-b149-2817f54c0186","White","2XS",5800,1],["3eb7b4e2-c6bb-4aac-8d88-917733ce903d","White","XS",5800,1],["f1e0582d-fc5e-4262-ac37-8e557f863f7a","White","S",5800,1],["6c761e15-99c4-44ef-a9b9-2707b799eacf","White","M",5800,1],["411f8af0-0dea-4e10-9f3e-4d52bf59ead9","White","L",5800,1],["d77edffc-63cb-4063-adeb-bc041e373a24","White","XL",5800,1],["f5b13ec3-80de-44eb-8f6e-206452d42a95","White","2XL",6000,1],["164893bb-b831-4f3f-8055-05d52b50fbc5","White","3XL",6200,1],["c0e409c7-79a3-4e1d-98b2-3ccb79b73ef5","White","4XL",6400,1],["ac97755c-1f41-48ed-a789-ccac1af78f1e","White","5XL",6600,1],["74126e0f-e1ab-46bb-9e71-1e734edcf1cb","White","6XL",6800,1]]},"seal-crew-burgundy":{"s":"lp","n":"Wax Seal Crew","c":"Burgundy","p":"49","z":["2XS","XS","S","M","L","XL","2XL","3XL","4XL","5XL","6XL"],"g":["seal-crew-burgundy_0.webp","seal-crew-burgundy_1.webp","seal-crew-burgundy_2.webp"],"hi":true,"x":[],"v":[["75374516-1469-4fad-a412-d6c3d4feade5","All-Over Print","2XS",4900,1],["e2e0fc8a-e5f0-4e0e-b1a8-18bdfbcff755","All-Over Print","XS",4900,1],["10eaecd6-52fd-493f-a520-9ba500bb27b1","All-Over Print","S",4900,1],["6250d58a-331c-444a-8bdd-8f9cd13d3ca2","All-Over Print","M",4900,1],["3b41e45b-e3c5-4a36-8072-a6a7a864de82","All-Over Print","L",4900,1],["4d873e9f-691c-422f-a0d9-ec6b2cae857b","All-Over Print","XL",4900,1],["a014df0c-eb11-4dee-84e1-17c10fb15f2c","All-Over Print","2XL",5100,1],["b38ac698-b073-4b75-96f4-dfe735b030bb","All-Over Print","3XL",5300,1],["f9855394-de9c-4014-a900-96238f7dd8ed","All-Over Print","4XL",5500,1],["2990917b-fd2e-4ddb-a655-3a449a49544d","All-Over Print","5XL",5700,1],["72606ab8-74da-4061-be7f-c095ac8837b0","All-Over Print","6XL",5900,1]]},"wordmark-cuff-beanie-black":{"s":"lp","n":"Masthead Beanie","c":"Black","p":"27.95","z":["One size"],"g":["wordmark-cuff-beanie-black_0.webp","wordmark-cuff-beanie-black_1.webp","wordmark-cuff-beanie-black_2.webp"],"hi":false,"x":[],"v":[["59e9e33d-8d7a-4507-9ee9-f491ed026c4c","Black","One size",2795,1]]},"wordmark-hoodie-white":{"s":"lp","n":"Masthead Hoodie","c":"White","p":"58","z":["S","M","L","XL","2XL","3XL"],"g":["wordmark-hoodie-white_0.webp","wordmark-hoodie-white_1.webp","wordmark-hoodie-white_2.webp"],"hi":true,"x":[],"v":[["fa655027-d83e-442f-a6f2-75b091c69622","White","S",5800,1],["3d85dee4-3e20-4f1d-952c-ba345484bc80","White","M",5800,1],["87d291df-4b23-4b5e-a1c5-610276a0d47d","White","L",5800,1],["d4166d62-b1a4-4272-8822-5427ba707c3a","White","XL",5800,1],["3466434d-0518-4306-9221-b51dabbd1b9e","White","2XL",6000,1],["36cfb492-4fa0-4f1e-b9ea-74d980f54b94","White","3XL",6200,1]]},"wordmark-leg-joggers-black":{"s":"lp","n":"Bookmark Joggers","c":"Black","p":"45","z":["XS","S","M","L","XL","2XL"],"g":["wordmark-leg-joggers-black_0.webp","wordmark-leg-joggers-black_1.webp"],"hi":true,"x":[],"v":[["62ad7358-c868-4d1a-ac8e-af0e6add618f","Black","XS",4500,1],["1cad7278-4576-4f02-8a06-37f41ef3c85d","Black","S",4500,1],["3f8d45ba-a2e6-40ed-84da-0354b5139101","Black","M",4500,1],["1756df83-7daa-4d5d-944e-cb03b0f11386","Black","L",4500,1],["0300ca52-fb37-4b61-bd9b-e8709afcc711","Black","XL",4500,1],["a2b16e53-9e07-402d-b324-a3f5d47539bb","Black","2XL",4700,1]]},"wordmark-snapback-black":{"s":"lp","n":"Masthead Snapback","c":"Black","p":"34.95","z":["One size"],"g":["wordmark-snapback-black_0.webp"],"hi":false,"x":[],"v":[["d3c5f2b4-4d24-42e0-98e0-b6fcdc787087","Black","One size",3495,1]]},"qs-lp-ts01-classic-tee-white":{"s":"lp","n":"Calling Card Tee","c":"White","p":"29","z":["S","M","L","XL","2XL","3XL","4XL"],"hi":false,"g":["qs-lp-ts01-classic-tee-white_1.webp","qs-lp-ts01-classic-tee-white_2.webp"],"o":1,"x":[],"v":[["8a656384-2701-4abc-a671-c69340e907cb","White","S",2900,1],["b8a2b967-075b-4e7f-a1db-dee02f344c2f","White","M",2900,1],["90bc4ba4-1c0d-4df9-b787-0bd75f353b81","White","L",2900,1],["0980ea42-8585-4e69-a30c-c3876058bff9","White","XL",2900,1],["580e8fe7-ad20-45bf-aa90-38ca7f1270a4","White","2XL",2900,1],["f5bb9633-7189-403c-b5d4-d386809dc4a6","White","3XL",2900,1],["6c0239eb-5b7b-4d2c-a46b-c3f75b05afd1","White","4XL",2900,1]]},"letterpress-crew-white":{"s":"lp","n":"First Edition Crew","c":"Grey","p":"49","z":["S","M","L","XL","2XL","3XL"],"hi":true,"g":["letterpress-crew-white_0.webp","letterpress-crew-white_1.webp","letterpress-crew-white_2.webp"],"o":1,"u":"letterpress-crew-grey","v":[["060b119d-a49e-43d4-bd08-887baa421b07","White","S",4900,1],["e80df36f-79f9-4237-8440-e58d1fee4f92","White","M",4900,1],["3fae5945-a239-4ad0-9f0e-5a8622516ba3","White","L",4900,1],["b7a5470d-bbbf-45a4-b55d-b0b759f754ae","White","XL",4900,1],["c5f06f73-e188-4a10-aace-f6fcfaa876da","White","2XL",5100,1],["2fda36d2-7ada-45fb-8bc8-31204021821b","White","3XL",5300,1]],"x":[]},"hem-band-joggers-off-white":{"s":"lp","n":"Ribbon Joggers","c":"Off-White","p":"60","z":["XS","S","M","L","XL","2XL","3XL"],"hi":true,"g":["hem-band-joggers-off-white_0.webp","hem-band-joggers-off-white_1.webp"],"o":1,"x":[],"v":[["cd0d2d3a-0fed-4589-a148-181a2595597c","All-Over Print","XS",6000,1],["dd31609f-d98a-464f-8504-f3c953c77228","All-Over Print","S",6000,1],["10f57038-beef-4ca1-9884-17605bfe7433","All-Over Print","M",6000,1],["691e27b7-e84d-4c8e-aa98-01d695c3a9a6","All-Over Print","L",6000,1],["7afb42aa-37c4-49c2-8887-bc6668cad1ba","All-Over Print","XL",6000,1],["7d419b44-5012-4c90-9610-e3f890387a2e","All-Over Print","2XL",6200,1],["8cc8531a-0b5d-46c3-9f25-3810645cf545","All-Over Print","3XL",6400,1]]},"maison-monogram-joggers-black":{"s":"dn","n":"Cipher Joggers","c":"Black","p":"60","z":["XS","S","M","L","XL","2XL","3XL"],"hi":true,"g":["maison-monogram-joggers-black_0.webp","maison-monogram-joggers-black_1.webp"],"o":1,"x":[],"v":[["b06bcb1d-d689-436b-8581-b8273bc4a9ca","All-Over Print","XS",6000,1],["88ef2561-cf5d-4460-95dc-1da150fdc680","All-Over Print","S",6000,1],["0deb82b6-1d26-4be7-ba8e-adc084985342","All-Over Print","M",6000,1],["03fe980d-1c30-4dad-8d25-84531331ec9a","All-Over Print","L",6000,1],["6a523d93-c86c-456f-9450-d8f424367154","All-Over Print","XL",6000,1],["7235454a-aff1-494a-93f2-447df257534f","All-Over Print","2XL",6200,1],["f91738f4-d612-4656-b6e4-5cf3f25f6f9f","All-Over Print","3XL",6400,1]]},"heavyweight-tee-black":{"s":"lp","n":"Calling Card Tee","c":"Black","p":"29","z":["S","M","L","XL","2XL","3XL","4XL"],"hi":true,"g":["heavyweight-tee-black_0.webp","heavyweight-tee-black_1.webp","heavyweight-tee-black_2.webp"],"o":1,"x":[],"v":[["0a672f2a-122a-47ed-8abc-d9c15d9a89ea","Black","S",2900,1],["e69d555a-c85e-429e-afb5-affd4314e1d0","Black","M",2900,1],["d5f6dab9-a5eb-4b25-a70d-bdd22a355103","Black","L",2900,1],["c707f186-8183-4af5-a4a0-e77dbb74c775","Black","XL",2900,1],["36cbecc4-01ad-4c9c-b503-5c774242dda8","Black","2XL",3100,1],["251a6d76-a111-4dcc-8406-7dc748a7596d","Black","3XL",3300,1],["718c68f0-3627-40ca-ab02-66799619e90f","Black","4XL",3500,1]]},"damask-lined-hoodie-black":{"s":"dn","n":"Locket Hoodie","c":"Black","p":"58","z":["2XS","XS","S","M","L","XL","2XL","3XL","4XL","5XL","6XL"],"hi":true,"g":["damask-lined-hoodie-black_0.webp","damask-lined-hoodie-black_1.webp","damask-lined-hoodie-black_2.webp"],"o":1,"x":[],"v":[["317d4af7-8815-4d24-b5dd-5822bd601cd6","White","2XS",5800,1],["b103a8f4-be53-49bb-bc86-321dc5c0bf4f","White","XS",5800,1],["1ee7332a-0bd2-4888-8788-e67744f19ab0","White","S",5800,1],["6ee7159f-9d2f-4204-ae61-da90777581fd","White","M",5800,1],["f8089e52-cf08-4f77-a2df-4d9ecabd7209","White","L",5800,1],["3f73a978-afab-4e62-aebe-b18f7a2fe94f","White","XL",5800,1],["43dca2fa-5ce0-43d0-8421-cb0730faf884","White","2XL",6000,1],["aef80c63-6705-492e-8005-0b585e0d26b7","White","3XL",6200,1],["e2da0964-1546-4be8-9a38-b6c895586e77","White","4XL",6400,1],["7eb9a34a-6a70-4988-9d8e-fedf41ee9c3b","White","5XL",6600,1],["46f9758a-cc85-4476-97c9-21ce784cca21","White","6XL",6800,1]]},"wordmark-lattice-backpack-white":{"s":"lp","n":"Filigree Backpack","c":"White","p":"48","z":["One size"],"hi":false,"g":["wordmark-lattice-backpack-white_0.webp","wordmark-lattice-backpack-white_1.webp","wordmark-lattice-backpack-white_2.webp"],"o":1,"x":[],"v":[["6930aed7-4566-44df-887e-52459c526a02","All-Over Print","One size",4800,1]]},"qs-cuff-beanie-white":{"s":"dn","n":"Signet Beanie","c":"White","p":"27.95","z":["One size"],"hi":false,"g":["qs-cuff-beanie-white_0.webp","qs-cuff-beanie-white_1.webp","qs-cuff-beanie-white_2.webp"],"o":1,"v":[["975322f1-52ae-4e9f-99c0-5c76ab849ad8","White","One size",2795,1]],"x":[]},"embroidered-qs-sherpa-black":{"s":"dn","n":"Signet Sherpa Blanket","c":"Black","p":"59","z":["50\" x 60\""],"hi":false,"g":["embroidered-qs-sherpa-black_0.webp","embroidered-qs-sherpa-black_1.webp","embroidered-qs-sherpa-black_2.webp"],"o":1,"x":[],"v":[["4dc33384-431e-407f-9b93-dbb072fb1768","Black","50\" x 60\"",5900,1]]},"engraved-crest-blanket-white":{"s":"dn","n":"Heirloom Blanket","c":"White","p":"45","z":["50\" x 60\""],"hi":false,"g":["engraved-crest-blanket-white.webp"],"o":1,"x":[],"v":[["efb5614d-7187-4ab6-8e5b-821aad1cbb12","All-Over Print","50\" x 60\"",4500,1]]}};
  var CNT = {"tees": 5, "hoodies-crews": 11, "joggers": 5, "hats": 8, "bags-more": 7, "loud-proud": 17, "discreet-neat": 19};   /* build-time public counts per category collection (kept for reference / future "shop all" links) */
  var TRIM = {"sticker-fall-crew-black":[0.0012,0.001,0.9988,0.999,0.813],"damask-crew-burgundy":[0.0037,0.003,0.9963,0.997,0.814],"damask-crossbody-burgundy":[0.004,0.0067,0.997,0.9933,1.6779],"embroidered-qs-crew-black":[0.004,0.0042,0.996,0.9958,1.0582],"signet-hoodie-burgundy":[0.0039,0.003,0.9961,0.997,0.774],"signet-joggers-burgundy":[0.0114,0.037,0.9886,0.996,0.351],"signet-tee-burgundy":[0.003,0.0035,0.997,0.9965,1.1547],"lockup-hoodie-black":[0.004,0.0041,0.996,0.9959,1.0225],"maison-monogram-backpack-black":[0.0038,0.003,0.9962,0.996,0.786],"maison-monogram-tee-black":[0.003,0.0035,0.997,0.9965,1.1547],"maison-monogram-tee-white":[0.003,0.0035,0.997,0.9965,1.1547],"qs-cuff-beanie-burgundy":[0.0049,0.005,0.9939,0.996,0.824],"qs-lp-bp04-backpack-black":[0.0036,0.003,0.9964,0.996,0.826],"qs-lp-bp05-backpack-white":[0.0037,0.003,0.9963,0.996,0.819],"qs-snapback-black":[0.005,0.0056,0.995,0.9944,1.1148],"qs-snapback-burgundy":[0.005,0.0056,0.995,0.9944,1.1148],"scattered-monogram-hoodie-white":[0.0039,0.003,0.9961,0.997,0.774],"seal-crew-burgundy":[0.0037,0.003,0.9963,0.997,0.814],"wordmark-cuff-beanie-black":[0.0044,0.003,0.9956,0.997,0.677],"wordmark-hoodie-white":[0.0041,0.004,0.9959,0.996,0.98],"wordmark-leg-joggers-black":[0.0058,0.003,0.9942,0.997,0.516],"wordmark-snapback-black":[0.005,0.0056,0.995,0.9944,1.1148],"qs-lp-ts01-classic-tee-white":[0.004,0.004,0.996,0.996,0.999],"letterpress-crew-white":[0.0038,0.004,0.9962,0.997,0.798],"hem-band-joggers-off-white":[0.0138,0.005,0.9862,0.995,0.363],"maison-monogram-joggers-black":[0.0138,0.005,0.9862,0.995,0.363],"heavyweight-tee-black":[0.0044,0.003,0.9956,0.997,0.906],"damask-lined-hoodie-black":[0.0039,0.003,0.9961,0.997,0.774],"wordmark-lattice-backpack-white":[0.0037,0.003,0.9963,0.996,0.819],"qs-cuff-beanie-white":[0.0036,0.0036,0.9964,0.9964,0.9911],"embroidered-qs-sherpa-black":[0.003,0.0036,0.997,0.9964,1.1962],"engraved-crest-blanket-white":[0.004,0.0036,0.997,0.9964,1.2063],"winter-crest-back-tee-black":[0.003,0.0035,0.997,0.9965,1.1521],"winter-crest-crew-off-white":[0.0037,0.003,0.9963,0.997,0.814],"frost-lined-hood-black":[0.0039,0.003,0.9961,0.997,0.774],"maison-winter-joggers-black":[0.0138,0.005,0.9862,0.995,0.363],"wordmark-cuff-beanie-navy":[0.0125,0.009,0.9875,0.991,0.88]};    /* trimmed garment box per tile [x0,y0,x1,y1 fractions, image w/h] (build time) */
  var SHOP = 'https://qualitystoner.com/products/';
  var CSS = ".q3-host{display:block;position:relative;z-index:0;isolation:isolate;max-width:none!important;padding:0!important;overflow:visible}html.q3-dr .q3-nav,html.q3-dr .q3-top,html.q3-dr .q3-ctl,body:has(aside.drawer.visible) .q3-nav,body:has(aside.drawer.visible) .q3-top,body:has(aside.drawer.visible) .q3-ctl{visibility:hidden!important}.q3{--ink:#0b0b0b;--mut:rgba(11,11,11,.5);--acc:#6E0B22;position:relative;overflow:hidden;width:100%;background:#F4F3F0;color:var(--ink);font-family:inherit;-webkit-font-smoothing:antialiased;line-height:1.2;text-align:left;letter-spacing:normal;text-transform:none;-webkit-user-select:none;user-select:none;transition:color .35s}.q3 *{box-sizing:border-box;margin:0;padding:0;font-family:inherit}.q3 a{color:inherit;text-decoration:none!important;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}.q3 button{font:inherit;color:inherit;background:none;border:0;cursor:pointer;-webkit-tap-highlight-color:transparent;-webkit-appearance:none;appearance:none;min-height:0;min-width:0;box-shadow:none;text-transform:none;letter-spacing:normal;line-height:1.2;border-radius:0}.q3 img{display:block;max-width:none;height:auto;-webkit-user-drag:none;user-select:none;border:0}.q3.q3-w{--ink:#1B2236;--mut:rgba(27,34,54,.58);--acc:#1B2236}.q3-bg,.q3-ice{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none}.q3-bg{background:linear-gradient(180deg,#F4F3F0 0%,#F2F1ED 55%,#ECEAE5 100%)}.q3-ice{background:linear-gradient(180deg,#e1e8f2 0%,#D6DFEC 60%,#ccd6e5 100%);opacity:0}.q3-disc{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;overflow:visible}.q3-view{position:absolute;left:0;top:0;width:100%;height:100%;touch-action:pan-y;cursor:grab;outline:none}.q3-drag .q3-view{cursor:grabbing}.q3-it,.q3-pv{position:absolute;left:0;top:0;display:none;transform-origin:0 0;will-change:transform,opacity;outline:none}.q3-it img,.q3-pv img{width:100%;height:100%;object-fit:contain;object-position:50% 100%;pointer-events:none;opacity:0;transition:opacity .25s}.q3-it img.q3-ok,.q3-pv img.q3-ok{opacity:1}.q3-it:focus-visible{outline:1px solid var(--acc);outline-offset:6px}.q3-sh{position:absolute;left:0;top:0;width:100px;height:20px;display:none;transform-origin:0 0;pointer-events:none;border-radius:50%;background:radial-gradient(closest-side,rgba(20,16,12,.22),rgba(20,16,12,.08) 55%,rgba(20,16,12,0))}.q3-top{position:absolute;left:0;top:0;width:100%;display:flex;justify-content:space-between;align-items:center;font-size:11px;letter-spacing:.3em;text-transform:uppercase;z-index:3000}.q3-top a,.q3-top span{display:block;padding:14px 0;line-height:1;white-space:nowrap}.q3-top span{color:var(--mut)}.q3-nav{position:absolute;left:0;width:100%;height:36px;z-index:3000;font-size:11px;letter-spacing:.3em;text-transform:uppercase}.q3-nav button{position:absolute;left:0;top:0;height:36px;padding:0 2px;white-space:nowrap;color:var(--ink);letter-spacing:.3em;text-transform:uppercase;font-size:inherit;line-height:36px;will-change:transform,opacity}.q3-nav button:focus-visible{outline:1px solid var(--acc);outline-offset:2px}.q3-nav .q3-hl{position:absolute;left:0;top:31px;width:1px;height:1px;background:var(--acc);transform-origin:0 0;transition:background-color .35s}.q3-tag{position:absolute;left:0;top:0;z-index:3000;text-align:center;white-space:nowrap;text-transform:uppercase;letter-spacing:.24em;line-height:1.6;font-size:11px;transform-origin:50% 0}.q3-tag b{display:block;font-weight:400;color:var(--ink)}.q3-tag span{display:block;color:var(--mut)}.q3-tag:focus-visible{outline:1px solid var(--acc);outline-offset:4px}.q3-ctl{position:absolute;top:0;width:44px;height:44px;z-index:3000;font-size:18px!important;line-height:44px!important;text-align:center;color:var(--ink)!important}.q3-ctl:focus-visible{outline:1px solid var(--acc);outline-offset:-6px}.q3-wm{position:absolute;left:0;top:0;z-index:2999;text-align:center;pointer-events:none;opacity:0;color:#1B2236;text-transform:uppercase;letter-spacing:.3em;font-size:10px;line-height:1.5}.q3-wm img{margin:0 auto 8px;width:auto}.q3-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}.q3-nav .q3-hl{width:4px;height:4px;border-radius:50%}@media (max-width:749px){.q3-nav{height:50px}.q3-nav button{font-size:12px;letter-spacing:.22em;height:24px;line-height:24px}.q3-nav .q3-hl{top:20px}}@media (min-width:750px){.q3-nav .q3-hl{top:30px}}@media (min-width:750px){.q3-top{font-size:12px}.q3-nav{font-size:12px}.q3-tag{font-size:12px}.q3-wm{font-size:11px}}@media (prefers-reduced-motion:reduce){.q3,.q3 *{transition:none!important}}";
  var RM = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);

  /* categories in ring order; ids not in D (not public) are skipped */
  /* Nov 15 2026 14:50 (Justin): Sticker Fall Crew — Black (37cfebfb, LP, $49) added to Hoodies & Crews at the end of the LP group; CNT refreshed from cats_count.py. */
  var CATS = [
    { k: 'tees', n: 'Tees', u: 'tees', ar: 1.05, ids: ['qs-lp-ts01-classic-tee-white', 'heavyweight-tee-black', 'signet-tee-burgundy', 'maison-monogram-tee-black', 'maison-monogram-tee-white'] },
    { k: 'tops', n: 'Hoodies & Crews', u: 'hoodies-crews', ar: 1, ids: ['lockup-hoodie-black', 'wordmark-hoodie-white', 'seal-crew-burgundy', 'letterpress-crew-white', 'sticker-fall-crew-black', 'damask-lined-hoodie-black', 'signet-hoodie-burgundy', 'scattered-monogram-hoodie-white', 'embroidered-qs-crew-black', 'damask-crew-burgundy'] },
    { k: 'joggers', n: 'Joggers', u: 'joggers', ar: 1.9, ids: ['wordmark-leg-joggers-black', 'hem-band-joggers-off-white', 'signet-joggers-burgundy', 'maison-monogram-joggers-black'] },
    { k: 'hats', n: 'Hats', u: 'hats', ar: .9, ids: ['wordmark-snapback-black', 'wordmark-cuff-beanie-black', 'qs-snapback-black', 'qs-snapback-burgundy', 'qs-cuff-beanie-burgundy'] },
    { k: 'bags', n: 'Bags & Blankets', u: 'bags-more', ar: 1.05, ids: ['qs-lp-bp04-backpack-black', 'qs-lp-bp05-backpack-white', 'wordmark-lattice-backpack-white', 'maison-monogram-backpack-black', 'damask-crossbody-burgundy', 'embroidered-qs-sherpa-black', 'engraved-crest-blanket-white'] }];
  CATS.forEach(function (c) { c.ids = c.ids.filter(function (id) { return D[id]; }); });
  /* Winter Atelier (Collection 002) preview: pieces are HIDDEN in Fourthwall until launch -> NOT links, "Nov 15" instead of a price, class q3-pv
     (not q3-it) keeps them out of QSStore360.count(). REMINDER: after the Sun Nov 15 2026 launch swap "Nov 15" for prices + product links. */
  /* Nov 15 2026 08:55 (Justin): Winter is LIVE -> pieces are links with prices (q3-it); win:1 keeps the ice wash logic. */
  /* Nov 15 2026 evening (Justin): the Winter zone holds every live Winter Atelier piece, grouped by kind. k = the category each one
     joins once the drop ends (WINTER_ON false); f = image folder (w = the 360's own Winter tiles, v = the VIEW ALL cutouts, aspect ar). */
  var WINTER_ON = Date.now() < Date.UTC(2027, 0, 1, 6);   /* Winter runs through Dec 31 2026 (midnight CT = 06:00 UTC) */
  var WINTER = [
    { id: 'winter-crest-back-tee-black', k: 'tees', n: 'Winter Crest Back Tee', c: 'Black', p: '$45', h: .84 },
    { id: 'night-frost-tee-black', k: 'tees', f: 'v', ar: 1.1543, n: 'Night Frost Tee', c: 'Black', p: '$45', h: .84 },
    { id: 'blue-s-monogram-tee-white', k: 'tees', f: 'v', ar: .9986, n: 'Blue-S Monogram Tee', c: 'White', p: '$29', h: .84 },
    { id: 'winter-crest-crew-off-white', k: 'tops', n: 'Winter Crest Crew', c: 'Off-White', p: '$54.95', h: 1 },
    { id: 'winter-wordmark-hoodie-navy', k: 'tops', f: 'v', ar: .98, n: 'Winter Wordmark Hoodie', c: 'Navy', p: '$68', h: 1 },
    { id: 'frost-lined-hood-black', k: 'tops', n: 'Frost-Lined Hood', c: 'Black', p: '$58', h: 1 },
    { id: 'blue-s-lockup-back-hoodie-black', k: 'tops', f: 'v', ar: .9886, n: 'Blue-S Lockup Back Hoodie', c: 'Black', p: '$58', h: 1 },
    { id: 'blue-s-monogram-hoodie-white', k: 'tops', f: 'v', ar: .98, n: 'Blue-S Monogram Hoodie', c: 'White', p: '$58', h: 1 },
    { id: 'scattered-snow-crew-white', k: 'tops', f: 'v', ar: .8143, n: 'Scattered Snow Crew', c: 'White', p: '$49', h: 1 },
    { id: 'maison-winter-joggers-black', k: 'joggers', n: 'Maison Winter Joggers', c: 'Black', p: '$60', h: 1.38 },
    { id: 'winter-wordmark-joggers-black', k: 'joggers', f: 'v', ar: .5129, n: 'Winter Wordmark Joggers', c: 'Black', p: '$45', h: 1.38 },
    { id: 'wordmark-cuff-beanie-navy', u: 'wordmark-cuff-beanie', k: 'hats', n: 'Wordmark Cuff Beanie', c: 'Navy', p: '$32', h: .5 },
    { id: 'blue-s-cuff-beanie-black', k: 'hats', f: 'v', ar: .6771, n: 'Blue-S Cuff Beanie', c: 'Black', p: '$27.95', h: .5 },
    { id: 'winter-wordmark-dad-hat-black', k: 'hats', f: 'v', ar: 1.0686, n: 'Winter Wordmark Dad Hat', c: 'Black', p: '$34.95', h: .44 },
    { id: 'blue-s-snapback-black', k: 'hats', f: 'v', ar: 1.0243, n: 'Blue-S Snapback', c: 'Black', p: '$34.95', h: .44 },
    { id: 'winter-side-band-backpack-white', k: 'bags', f: 'v', ar: .7857, n: 'Winter Side-Band Backpack', c: 'White', p: '$48', h: .8 },
    { id: 'maison-winter-backpack-black', k: 'bags', f: 'v', ar: .7857, n: 'Maison Winter Backpack', c: 'Black', p: '$48', h: .8 },
    { id: 'winter-crest-blanket-off-white', k: 'bags', f: 'v', ar: 1.2057, n: 'Winter Crest Blanket', c: 'Off-White', p: '$50', h: .78 }];
  /* public pieces outside D and outside Winter: placed at the end of their category */
  var EXTRA = [{ id: 'qs-dad-hat-black', k: 'hats', f: 'v', ar: 1.07, n: 'QS Dad Hat', c: 'Black', p: '$34.95', h: .44 }];
  /* real-world piece heights (world unit = a hoodie) so neighbours keep true scale; the front piece is then enlarged to fill its box */
  var HC = { tees: .84, tops: 1, joggers: 1.38, hats: .5, bags: .8 };
  var HID = { 'damask-crossbody-burgundy': .46, 'engraved-crest-blanket-white': .78, 'embroidered-qs-sherpa-black': .78, 'wordmark-snapback-black': .44, 'qs-snapback-black': .44, 'qs-snapback-burgundy': .44 };
  var ORDER = WINTER_ON ? ['all', 'tees', 'tops', 'joggers', 'hats', 'bags'] : ['tees', 'tops', 'joggers', 'hats', 'bags'];   /* Winter leads while the drop runs */
  var DEG = Math.PI / 180, GAP = .3, ZG = .6;

  function P(id) { return D[id]; }
  function cat(k) { for (var i = 0; i < CATS.length; i++) if (CATS[i].k === k) return CATS[i]; }
  function url(id) { return SHOP + (P(id).u || id) + '?from=360'; }   /* every piece opens its product page; ?from=360 shows the PDP's back link */
  function money(id) { return '$' + P(id).p; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function norm(a) { return ((a % 360) + 540) % 360 - 180; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }

  /* ===== the ring: every piece placed along the circumference by its real width ===== */
  /* Nov 15 2026 (Justin): LOUD & PROUD / DISCREET & NEAT side toggle is back (calm text, no pill). SIDE '' = everything (default);
     'lp' / 'dn' = only that side's pieces, in the ring (a category with none on that side is skipped) and in the VIEW ALL grid.
     Membership = the live /collections/loud-proud and /collections/discreet-neat lists (MS = build-time copy; refreshed by fetch at load,
     fetch runs no page scripts, so the collection-page redirect never fires). Pieces on neither side (Winter, Blue-S) show only with no side. */
  var MS = {"sticker-fall-crew-black":"lp","seal-crew-burgundy":"lp","qs-lp-ts01-classic-tee-white":"lp","heavyweight-tee-black":"lp","wordmark-hoodie-white":"lp","lockup-hoodie-black":"lp","letterpress-crew-grey":"lp","wordmark-leg-joggers-black":"lp","hem-band-joggers-off-white":"lp","wordmark-snapback-black":"lp","wordmark-cuff-beanie-black":"lp","qs-lp-bp04-backpack-black":"lp","qs-lp-bp05-backpack-white":"lp","wordmark-lattice-backpack-white":"lp","winter-wordmark-dad-hat-black":"lp","winter-wordmark-hoodie-navy":"lp","winter-wordmark-joggers-black":"lp","signet-tee-burgundy":"dn","signet-hoodie-burgundy":"dn","signet-joggers-burgundy":"dn","maison-monogram-tee-black":"dn","maison-monogram-tee-white":"dn","damask-lined-hoodie-black":"dn","scattered-monogram-hoodie-white":"dn","embroidered-qs-crew-black":"dn","damask-crew-burgundy":"dn","maison-monogram-joggers-black":"dn","qs-snapback-burgundy":"dn","qs-snapback-black":"dn","qs-cuff-beanie-burgundy":"dn","maison-monogram-backpack-black":"dn","damask-crossbody-burgundy":"dn","engraved-crest-blanket-white":"dn","embroidered-qs-sherpa-black":"dn","qs-dad-hat-black":"dn","blue-s-snapback-black":"dn"};
  /* Nov 15 2026 evening (Justin): pieces in neither live collection get a side here (words QUALITY STONER on the piece -> LP; QS / Blue-S
     marks only -> DN), so picking a side never empties Winter. The live collection lists win wherever they name a piece. */
  var SX = {"winter-crest-back-tee-black":"lp","winter-crest-crew-off-white":"lp","wordmark-cuff-beanie":"lp","blue-s-lockup-back-hoodie-black":"lp","winter-crest-blanket-off-white":"lp",
    "winter-wordmark-hoodie-navy":"lp","winter-wordmark-joggers-black":"lp","winter-wordmark-dad-hat-black":"lp",
    "night-frost-tee-black":"dn","blue-s-monogram-tee-white":"dn","frost-lined-hood-black":"dn","blue-s-monogram-hoodie-white":"dn","scattered-snow-crew-white":"dn",
    "maison-winter-joggers-black":"dn","blue-s-cuff-beanie-black":"dn","blue-s-snapback-black":"dn","winter-side-band-backpack-white":"dn","maison-winter-backpack-black":"dn","qs-dad-hat-black":"dn"};
  function sxMerge(m) { Object.keys(SX).forEach(function (k) { if (!m[k]) m[k] = SX[k]; }); return m; }
  sxMerge(MS);
  var SIDE = '', SIDEN = { lp: 'Loud & Proud', dn: 'Discreet & Neat' };
  function keep(slug) { return !SIDE || MS[slug] === SIDE; }
  var ZONES = [], ITEMS = [], LT = 0, R = 1, STEP = 1;
  function buildRing() {
    ZONES = []; ITEMS = [];
    ORDER.forEach(function (k) {
      var z = k === 'all' ? { k: 'all', n: 'Winter' } : { k: k, n: cat(k).n };
      var wp = function (w, win) { return { id: w.id, sl: w.u || w.id, pv: 0, win: win, n: w.n, c: w.c, p: w.p, h: w.h, ar: w.ar, href: SHOP + (w.u || w.id) + '?from=360', src: OWN + (w.f || 'w') + '/' + w.id + '.webp' }; };
      var inK = function (w) { return w.k === k; };
      var list = k === 'all' ? WINTER.map(function (w) { return wp(w, 1); })
        : cat(k).ids.map(function (id) { var p = P(id); return { id: id, sl: p.u || id, pv: 0, n: p.n, c: p.c, p: money(id), h: HID[id] || HC[k], href: url(id), src: (p.o ? OWN : IMG) + 'p/' + id + '.webp' }; })
          .concat(EXTRA.filter(inK).map(function (w) { return wp(w, 0); }), WINTER_ON ? [] : WINTER.filter(inK).map(function (w) { return wp(w, 0); }));
      list = list.filter(function (it) { return keep(it.sl); });
      if (!list.length) return;   /* nothing on this side here: the category is skipped (nav too) */
      z.i = ZONES.length; z.items = []; ZONES.push(z);
      list.forEach(function (it) {
        var t = TRIM[it.id] || [0, 0, 1, 1, it.ar || 1];
        it.tr = t; it.Hi = it.h / Math.max(.2, t[3] - t[1]); it.Wi = it.Hi * t[4]; it.cx = (t[0] + t[2]) / 2; it.tw = (t[2] - t[0]) * it.Wi;
        it.z = z; it.k = ITEMS.length; z.items.push(it); ITEMS.push(it);
      });
    });
    if (!ITEMS.length && SIDE) { SIDE = ''; return buildRing(); }   /* safety: never an empty ring */
    LT = 0;
    ZONES.forEach(function (z) { z.items.forEach(function (it, i) { if (i) LT += GAP; it.L = LT + it.tw / 2; LT += it.tw; }); LT += ZG; });
    R = LT / (2 * Math.PI);
    ITEMS.forEach(function (it) { it.a = norm(it.L / LT * 360 - ITEMS[0].L / LT * 360); });
    STEP = 360 * (LT / ITEMS.length) / LT;   /* mean angle per piece */
  }
  buildRing();
  function zone(k) { for (var i = 0; i < ZONES.length; i++) if (ZONES[i].k === k) return ZONES[i]; }

  var host, root, view, bg, ice, disc, nav, hl, tag, wm, prv, nxt, sr;
  var OPMIN = .12, XC = null, RV = R, VK = 1, M, Wv, Hb, CX, F, HY, E, KD, Dc, z0, hF, DW, CUT, FA, KPX, NAVX = [], navW = [], navGap = 0;
  var yaw = 0, anim = null, dragging = false, moved = false, raf = 0, front = null, lastZone = null, built = false, tagItem = null, srItem = null;

  /* ===== mount ===== */
  function mount() {
    if (!document.getElementById('q3-css')) { var st = document.createElement('style'); st.id = 'q3-css'; st.textContent = CSS; document.head.appendChild(st); }
    host = document.getElementById('qs-store') || document.querySelector('[data-qs-store]');
    if (!host) { host = document.createElement('div'); host.id = 'qs-store'; if (me && me.parentNode) me.parentNode.insertBefore(host, me); else document.body.appendChild(host); }
    host.classList.add('q3-host');
    (function () { try {   /* hide our overlays while a theme drawer (mobile menu / cart) is open */
      var dr = function () { var on = !!document.querySelector('aside.drawer.visible'); document.documentElement.classList.toggle('q3-dr', on); };
      var mo = new MutationObserver(dr); document.querySelectorAll('aside.drawer').forEach(function (d) { mo.observe(d, { attributes: true, attributeFilter: ['class'] }); });
      dr();
    } catch (e) {} })();
    root = document.createElement('div'); root.className = 'q3' + (RM ? ' q3-rm' : '');
    root.innerHTML = '<div class="q3-bg"></div><div class="q3-ice"></div><svg class="q3-disc" aria-hidden="true"></svg>' +
      '<div class="q3-view" tabindex="0" role="region" aria-roledescription="carousel" aria-label="The Quality Stoner store. Drag, swipe or use the arrow keys to turn the ring."></div>' +
      '<div class="q3-top"><span class="q3-tl"></span><button type="button" class="q3-gb" aria-label="Back to the store">&#8592;&nbsp; The store</button><button type="button" class="q3-va" aria-expanded="false">View all</button><span class="q3-gc" hidden></span></div>' +
      '<div class="q3-sd" role="group" aria-label="Side"><button type="button" data-s="all" aria-pressed="true" class="q3-on">All</button><i aria-hidden="true">&middot;</i><button type="button" data-s="lp" aria-pressed="false">Loud &amp; Proud</button><i aria-hidden="true">&middot;</i><button type="button" data-s="dn" aria-pressed="false">Discreet &amp; Neat</button></div>' +
      '<div class="q3-nav" role="tablist" aria-label="Categories"></div>' +
      '<div class="q3-wm" aria-hidden="true"><img alt="" decoding="async" data-src="' + OWN + 'w/qs-bluemark-k.webp"><div>Winter Atelier &middot; Collection 002</div></div>' +
      '<a class="q3-tag" draggable="false"><b></b><span></span></a>' +
      '<button type="button" class="q3-ctl q3-prev" aria-label="Previous piece">&#8592;</button><button type="button" class="q3-ctl q3-next" aria-label="Next piece">&#8594;</button>' +
      '<div class="q3-sr" aria-live="polite"></div>';
    host.innerHTML = ''; host.appendChild(root);
    cg = document.createElement('section'); cg.className = 'q3-cg'; cg.setAttribute('aria-label', 'Pieces in this category'); host.appendChild(cg);
    var Q = function (s) { return root.querySelector(s); };
    view = Q('.q3-view'); bg = Q('.q3-bg'); ice = Q('.q3-ice'); disc = Q('.q3-disc'); nav = Q('.q3-nav'); tag = Q('.q3-tag'); wm = Q('.q3-wm'); prv = Q('.q3-prev'); nxt = Q('.q3-next'); sr = Q('.q3-sr');
    sdEl = Q('.q3-sd');
    [].forEach.call(sdEl.querySelectorAll('button'), function (b) { b.addEventListener('click', function () { var v = b.getAttribute('data-s'); setSide(v === 'all' ? '' : v, 1); }); });
    mkNav(); mkPieces();
    tag.addEventListener('click', function (ev) { if (!tag.getAttribute('href')) { ev.preventDefault(); return; } goPdp(ev, tag); });
    prv.addEventListener('click', function () { if (GR.on) gStep(-1); else step(-1); });
    nxt.addEventListener('click', function () { if (GR.on) gStep(1); else step(1); });
    view.addEventListener('keydown', function (e) { if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); } if (e.key === 'ArrowRight') { e.preventDefault(); step(1); } });
    drag();
    (function () { var m = {}; location.hash.replace(/^#/, '').split('&').forEach(function (kv) { var p = kv.split('='); if (p[0]) m[p[0]] = decodeURIComponent(p[1] || ''); });
      var v = m.side; if (v == null && /\/products\//.test(document.referrer || '')) try { v = sessionStorage.getItem('q3-side'); } catch (e) {}
      if (v === 'lp' || v === 'dn') { SIDE = v; buildRing(); mkNav(); mkPieces(); } sideUI(); })();
    fit(); layout(); built = true;
    var lw = innerWidth;
    addEventListener('resize', function () { if (innerWidth !== lw) { lw = innerWidth; fit(); layout(); } });
    addEventListener('orientationchange', function () { setTimeout(function () { fit(); layout(); }, 300); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { measureNav(); render(1); });
    restore();
    gInit();
    setTimeout(sideLive, 600);
    /* preload the rest of the ring once the page is idle so nothing pops in mid-turn */
    var rest = function () { var ric = window.requestIdleCallback || function (f) { return setTimeout(f, 200); }; ric(function () { ITEMS.forEach(load); }, { timeout: 1500 }); };
    if (document.readyState === 'complete') setTimeout(rest, 400); else addEventListener('load', function () { setTimeout(rest, 400); });
  }
  function mkNav() {
    nav.innerHTML = ZONES.map(function (z) { return '<button type="button" role="tab" data-k="' + z.k + '">' + esc(z.n) + '</button>'; }).join('') + '<i class="q3-hl"></i>';
    hl = nav.querySelector('.q3-hl');
    [].forEach.call(nav.querySelectorAll('button'), function (b) { b.addEventListener('click', function () { if (!moved) goK(b.getAttribute('data-k')); }); });
  }
  function mkPieces() {
    [].slice.call(view.querySelectorAll('.q3-it,.q3-pv,.q3-sh')).forEach(function (e) { e.parentNode.removeChild(e); });
    /* pieces: product pieces are links (q3-it), Winter previews are not (q3-pv) */
    ITEMS.forEach(function (it) {
      var e = document.createElement(it.pv ? 'div' : 'a');
      e.className = it.pv ? 'q3-pv' : 'q3-it';
      if (it.pv) { e.setAttribute('data-wid', it.id); e.setAttribute('aria-label', it.n + ', drops November 15'); }
      else { e.href = it.href; e.setAttribute('data-id', it.id); e.setAttribute('aria-label', it.n + ' ' + it.c + ', ' + it.p); e.draggable = false;
        e.addEventListener('click', function (ev) { goPdp(ev, e); });
        e.addEventListener('focus', function () { if (front !== it && !dragging) goTo(it.a); }); }
      e.innerHTML = '<img alt="' + esc(it.n + (it.c ? ' ' + it.c : '')) + '" decoding="async" draggable="false">';
      var sh = document.createElement('div'); sh.className = 'q3-sh';
      view.appendChild(sh); view.appendChild(e); it.el = e; it.sh = sh; it.img = e.firstChild; it.shown = false;
    });
  }
  /* side toggle: tapping a side shows only it; tapping the active side again shows everything. Kept across ring <-> grid, in the
     hash (&side=lp|dn) and in sessionStorage (q3-side, used when coming back from a product page). */
  var sdEl = null;
  /* ===== category grid under the ring (Nov 15 2026 evening, Justin): the front piece's category as a plain grid, prices shown ===== */
  var cg = null, cgZ = null;
  var CGCSS = '.q3-cg{display:block;background:#F4F3F0;color:#0b0b0b;padding:30px 20px 52px;font-family:inherit;-webkit-font-smoothing:antialiased}' +
    '.q3-cg h2{margin:0 0 24px!important;padding:0!important;text-align:center;font-family:inherit!important;font-weight:400!important;font-size:10.5px!important;line-height:1.4!important;letter-spacing:.26em!important;text-transform:uppercase!important;color:#0b0b0b!important}' +
    '.q3-cg h2 span{color:rgba(11,11,11,.5)}' +
    '.q3-cg ul{list-style:none!important;margin:0 auto!important;padding:0!important;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:30px 14px;max-width:1240px}' +
    '.q3-cg li{margin:0!important;padding:0!important}.q3-cg li:before{display:none!important}' +
    '.q3-cg a{display:block;text-decoration:none!important;color:inherit!important;text-align:center}' +
    '.q3-cg .q3-ci{display:flex;align-items:flex-end;justify-content:center;aspect-ratio:1/1;margin:0 0 12px}' +
    '.q3-cg img{display:block;width:auto!important;height:auto;max-width:86%!important;object-fit:contain}' +
    '.q3-cg b{display:block;font-weight:400!important;font-size:10.5px!important;line-height:1.5!important;letter-spacing:.18em!important;text-transform:uppercase!important}' +
    '.q3-cg em{display:block;font-style:normal!important;font-size:10.5px!important;line-height:1.5!important;letter-spacing:.14em!important;text-transform:uppercase!important;color:rgba(11,11,11,.55);margin-top:2px}' +
    '.q3-cg a:focus-visible{outline:1px solid #6E0B22;outline-offset:4px}@media (hover:hover){.q3-cg a:hover b{text-decoration:underline}}' +
    '@media (min-width:750px){.q3-cg{padding:44px 44px 80px}.q3-cg h2{font-size:11.5px!important;margin-bottom:34px!important}.q3-cg ul{grid-template-columns:repeat(4,minmax(0,1fr));gap:44px 28px}.q3-cg b,.q3-cg em{font-size:11px!important}}';
  function cgFill(z) {
    if (!cg) return; cgZ = z;
    if (!document.getElementById('q3-cgcss')) { var st = document.createElement('style'); st.id = 'q3-cgcss'; st.textContent = CGCSS; document.head.appendChild(st); }
    var n = z.items.length;
    cg.innerHTML = '<h2>' + esc(z.n) + ' <span>&nbsp;&middot;&nbsp; ' + n + (n === 1 ? ' piece' : ' pieces') + (SIDE ? ' &nbsp;&middot;&nbsp; ' + esc(SIDEN[SIDE]) : '') + '</span></h2><ul>' +
      z.items.map(function (it) { var mh = Math.round(clamp(it.h / 1.38, .4, 1) * 92);
        return '<li><a href="' + esc(it.href) + '" data-id="' + esc(it.id) + '"><span class="q3-ci"><img loading="lazy" decoding="async" alt="' + esc(it.n + (it.c ? ' ' + it.c : '')) + '" src="' + esc(it.src) + '" style="max-height:' + mh + '%"></span>' +
          '<b>' + esc(it.n) + '</b><em>' + esc((it.c ? it.c + ' \u00a0\u00b7\u00a0 ' : '') + it.p) + '</em></a></li>'; }).join('') + '</ul>';
    [].forEach.call(cg.querySelectorAll('a'), function (a) { a.addEventListener('click', function (e) { remember(a.getAttribute('href'));
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return; e.preventDefault();
      var id = a.getAttribute('data-id'), it = null; (cgZ ? cgZ.items : ITEMS).forEach(function (x) { if (x.id === id) it = x; }); qvOpen(a.getAttribute('href'), it); }); });
  }
  function sideUI() {
    if (!sdEl) return; root.classList.toggle('q3-s-on', !!SIDE);
    [].forEach.call(sdEl.querySelectorAll('button'), function (b) { var on = b.getAttribute('data-s') === (SIDE || 'all'); b.classList.toggle('q3-on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); });
  }
  function sideHash() { return SIDE ? '&side=' + SIDE : ''; }
  function setSide(v, user) {
    v = v === 'lp' || v === 'dn' ? v : '';
    try { sessionStorage.setItem('q3-side', v); } catch (e) {}
    if (v === SIDE && built) { sideUI(); return; }
    var zk = front && front.z && front.z.k;
    SIDE = v; buildRing(); sideUI();
    if (!built) return;
    mkNav(); mkPieces(); tagItem = null; srItem = null; anim = null; dragging = false;
    var z = zk && zone(zk); yaw = (z ? z.items[0] : ITEMS[0]).a;
    layout();
    if (GR.list) gApply();
    if (user) {
      try { var h = GR.on ? '#all' + sideHash() : (SIDE ? '#side=' + SIDE : ''); history.replaceState(history.state, '', location.pathname + location.search + h); } catch (e) {}
      if (sr) sr.textContent = SIDE ? 'Showing ' + SIDEN[SIDE] + ' only' : 'Showing both sides';
    }
  }
  function sideLive() {   /* refresh the side lists from the live collection pages (no page scripts run inside fetch) */
    try {
      var get = function (h) { return fetch('/collections/' + h, { credentials: 'same-origin' }).then(function (r) { if (!r.ok) throw 0; return r.text(); }).then(function (t) {
        var doc = new DOMParser().parseFromString(t, 'text/html'), L = [];
        [].forEach.call(doc.querySelectorAll('.product-tile a[href*="/products/"]'), function (a) { var m = (a.getAttribute('href') || '').match(/\/products\/([a-z0-9-]+)/); if (m && L.indexOf(m[1]) < 0) L.push(m[1]); });
        if (!L.length) throw 0; return L; }); };
      Promise.all([get('loud-proud'), get('discreet-neat')]).then(function (r) { window.__q3SideLive = 1;
        var nm = {}; r[0].forEach(function (x) { nm[x] = 'lp'; }); r[1].forEach(function (x) { nm[x] = 'dn'; }); sxMerge(nm);
        if (JSON.stringify(nm) === JSON.stringify(MS)) return;
        MS = nm; if (SIDE) { var v = SIDE; SIDE = '#'; setSide(v); }
      }).catch(function () {});
    } catch (e) {}
  }
  function load(it) {
    if (it.ld) return; it.ld = 1; var i = it.img;
    i.onload = function () { i.classList.add('q3-ok'); }; i.src = it.src; if (i.complete && i.naturalWidth) i.classList.add('q3-ok');
  }
  /* full-bleed block, one visible viewport tall under the site header + ticker (header/footer stay in normal flow) */
  function bleed() {
    var vw = document.documentElement.clientWidth; host.style.marginLeft = ''; host.style.width = '';
    var r = host.getBoundingClientRect(); host.style.width = vw + 'px'; host.style.marginLeft = (-r.left) + 'px';
  }
  var SVH = null;
  function vis() {   /* the SMALLEST visible viewport (100svh probe / innerHeight / visualViewport) so iOS toolbars never hide the bottom */
    var v = innerHeight;
    try { if (!SVH) { SVH = document.createElement('div'); SVH.style.cssText = 'position:fixed;left:0;top:0;width:1px;height:100vh;height:100svh;visibility:hidden;pointer-events:none'; document.body.appendChild(SVH); }
      var sv = SVH.offsetHeight; if (sv > 200) v = Math.min(v, sv); } catch (e) {}
    if (window.visualViewport && visualViewport.height > 200 && visualViewport.scale <= 1.01) v = Math.min(v, Math.round(visualViewport.height));
    return v;
  }
  function fit() {
    bleed();
    var hd = 0, h = document.querySelector('header'); if (h) { var b = h.getBoundingClientRect(); if (b.height < 200) hd = b.bottom + scrollY; }
    var vh = vis(), top = host.getBoundingClientRect().top + scrollY, room = (top >= 0 && top < vh * .5) ? vh - top : vh - hd;
    var mob = document.documentElement.clientWidth < 750;
    root.style.height = (mob ? clamp(room, 460, 900) : clamp(room, 520, 980)) + 'px';
  }

  /* ===== camera + layout (per size) ===== */
  var G = {}, NRH = 24;   /* phone nav row height (nav C) */
  function layout() {
    Wv = root.clientWidth; Hb = root.clientHeight; M = Wv < 750; CX = Wv / 2;
    var pad = M ? 20 : 44, topH = M ? 40 : 50, SDH = M ? 32 : 0, navY = topH + SDH, navH = M ? 2 * NRH + 2 : 36;   /* Oct 23 2026 nav C: phone = two centred rows */
    var stageTop = navY + navH + (M ? 6 : 14);
    var tagH = M ? 36 : 40, bot = M ? 14 : 26, tagY = Hb - bot - tagH;
    var yF = tagY - (M ? 16 : 22);              /* floor line under the front piece */
    var stageH = yF - stageTop;
    var PP = window.__Q3P || {};                  /* (test hook: tuning overrides) */
    KD = PP.kd || 1.3;               /* camera distance from the ring centre / ring radius */
    E = PP.e || (M ? 3.5 : 2.9);                  /* camera height (hoodie heights) */
    RV = PP.rv || (M ? 2.6 : R); VK = (LT / 360) / RV / DEG;   /* visual ring radius (world units): the half of the ring in view holds ~7 (phone) / ~11 (desktop) pieces */
    CUT = PP.cut || (M ? 96 : 92);
    /* true-scale front size of a hoodie: the ring's widest point (in view) reaches just past the screen edge on phones, ~40 px short of it on desktop */
    var mf = 0; for (var dd = 0; dd <= CUT; dd += 2) { var r2 = dd * DEG; mf = Math.max(mf, (KD - 1) * RV * Math.sin(r2) / (KD - Math.cos(r2))); }
    hF = M ? Math.min(stageH * .42, (Wv / 2 + (PP.x1 != null ? PP.x1 : -36)) / mf) : Math.min(stageH * (PP.hh || .36), Wv * .19);
    Dc = KD * RV; z0 = Dc - RV; F = hF * z0; HY = yF - F * E / z0;
    var Wmax = M ? Wv * (PP.wm || .84) : Math.min(Wv * .3, stageH * 1.0), Hmax = stageH * (PP.hm || .72);
    ITEMS.forEach(function (it) {
      it.B = clamp(Math.min(Hmax / (it.h * hF), Wmax / (it.tw * hF)), .55, M ? 3.2 : 3.4);
      var s0 = hF * it.B; it.bw = Math.round(it.Wi * s0); it.bh = Math.round(it.Hi * s0); it.s0 = s0;
      it.el.style.width = it.bw + 'px'; it.el.style.height = it.bh + 'px';
      it.img.width = it.bw; it.img.height = it.bh;
    });
    XC = null;
    if ((M && !PP.noxc) || PP.xc) { var fw = 0; ITEMS.forEach(function (it) { fw = Math.max(fw, it.tw * hF * it.B); }); XC = [Math.min(fw / 2, Wv * .36) * (PP.x0 || 1), Wv / 2 + (PP.x1 != null ? PP.x1 : 10)]; }
    DW = STEP * (PP.dw || 1.0); FA = PP.fa || (M ? 20 : 22); OPMIN = PP.opm != null ? PP.opm : (M ? .3 : .15);
    var v1 = STEP * VK * DEG; KPX = STEP / Math.max(60, F * RV * Math.sin(v1) / (Dc - RV * Math.cos(v1)) * 1.1);   /* drag: one piece per neighbour distance */
    G = { pad: pad, topH: topH, SDH: SDH, navY: navY, stageTop: stageTop, tagY: tagY, yF: yF, stageH: stageH };
    /* chrome */
    var tp = root.querySelector('.q3-top'); tp.style.padding = '0 ' + pad + 'px'; tp.style.height = topH + 'px';
    nav.style.top = navY + 'px';
    if (sdEl) { sdEl.style.top = (M ? topH - 4 : 0) + 'px'; sdEl.style.height = (M ? SDH : topH) + 'px'; sdEl.style.lineHeight = (M ? SDH : topH) + 'px'; }
    var cy = tagY + tagH / 2 - 22;
    prv.style.left = (pad - 12) + 'px'; prv.style.top = cy + 'px'; nxt.style.left = (Wv - pad - 32) + 'px'; nxt.style.top = cy + 'px';
    /* Winter mark: top of the stage, only as big as the free space above the front piece allows */
    var free = (yF - Hmax) - stageTop, mh = Math.round(clamp(free - 30, 0, M ? 44 : 60));
    wm.style.display = mh >= 24 ? '' : 'none'; wm.style.width = Wv + 'px'; wm.style.transform = 'translate(0,' + Math.round(stageTop + 4) + 'px)';
    var mi = wm.querySelector('img'); mi.style.height = mh + 'px'; G.wm = mh;
    disc.style.display = M ? 'none' : ''; if (!M) drawDisc(); measureNav(); render(1);
  }
  /* turntable floor: the ring's disc projected once (rotationally symmetric, so it never moves) */
  function proj(xw, zw, yw) { var z = Dc - zw; return [CX + F * xw / z, HY + F * (E - (yw || 0)) / z]; }
  function drawDisc() {   /* only the far half of the ring's rim: one hairline horizon behind the pieces */
    var r = RV * 1.06, pts = [];
    for (var t = 62; t <= 298; t += 2) { var p = proj(r * Math.sin(t * DEG), r * Math.cos(t * DEG)); pts.push(p[0].toFixed(1) + ',' + p[1].toFixed(1)); }
    disc.setAttribute('viewBox', '0 0 ' + Wv + ' ' + Hb); disc.setAttribute('width', Wv); disc.setAttribute('height', Hb);
    disc.innerHTML = '<defs><linearGradient id="q3-rim" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#0b0b0b" stop-opacity="0"/><stop offset=".3" stop-color="#0b0b0b" stop-opacity=".13"/>' +
      '<stop offset=".7" stop-color="#0b0b0b" stop-opacity=".13"/><stop offset="1" stop-color="#0b0b0b" stop-opacity="0"/></linearGradient></defs>' +
      '<polyline points="' + pts.join(' ') + '" fill="none" stroke="url(#q3-rim)" stroke-width="1"/>';
  }
  function measureNav() {
    var bs = nav.querySelectorAll('button'); navW = [];
    [].forEach.call(bs, function (b) { navW.push(b.offsetWidth || 60); });
    var tot = navW.reduce(function (a, b) { return a + b; }, 0);
    /* desktop: all six names in one centred row; phone: a sliding line with the active name centred */
    var nn = Math.max(1, navW.length - 1);
    if (!M) { navGap = Math.max(28, Math.min(56, (Wv - 2 * G.pad - tot) / nn)); var x = CX - (tot + nn * navGap) / 2; NAVX = navW.map(function (w) { var c = x + w / 2; x += w + navGap; return c; }); }
    else navGap = 34;
  }

  /* ===== render: one transform + opacity per visible piece ===== */
  function render(force) {
    if (!Wv) return;
    var best = null, bd = 999, maxW = 0, ext = 0;
    ITEMS.forEach(function (it) { it.d = norm(it.a - yaw); var ad = Math.abs(it.d); if (ad < bd) { bd = ad; best = it; }
      it.w = ad < DW ? .5 + .5 * Math.cos(Math.PI * ad / DW) : 0; it.m = 1 + (it.B - 1) * it.w; });
    /* push the neighbours out by the front piece's enlargement so pieces never overlap */
    /* the enlarged piece(s) push the rest outward so pieces never overlap: each piece's extra width (2e) is spread over its own slot
       [d - h, d + h]; a piece's shift = the extra width lying between the centre line and its own centre (continuous while turning) */
    var EN = [], h = STEP / 2;
    ITEMS.forEach(function (it) { if (it.w > 0) { var z = Dc - RV * Math.cos(it.d * VK * DEG), e = (it.m - 1) * it.tw * F / z / 2 + (M ? 8 : 12) * it.w; EN.push([it.d, e]); } });
    function shift(d) { var lo = Math.min(0, d), hi = Math.max(0, d), t = 0;
      for (var i = 0; i < EN.length; i++) { var a0 = Math.max(lo, EN[i][0] - h), a1 = Math.min(hi, EN[i][0] + h); if (a1 > a0) t += 2 * EN[i][1] * (a1 - a0) / (2 * h); }
      return d < 0 ? -t : t; }
    ITEMS.forEach(function (it) {
      var ad = Math.abs(it.d * VK);   /* visual angle */
      if (ad > CUT) { hide(it); return; }
      var rd = it.d * VK * DEG, x = RV * Math.sin(rd), z = Dc - RV * Math.cos(rd), sc = F / z, s = sc * it.m;
      var ox = F * x / z + shift(it.d);
      if (XC) { var u = Math.abs(ox); if (u > XC[0]) u = XC[0] + (XC[1] - XC[0]) * Math.tanh((u - XC[0]) / (XC[1] - XC[0])); ox = ox < 0 ? -u : u; }   /* phone: the ring's sides fold in to the screen edges */
      var sx = CX + ox;
      var fy = HY + F * E / z, bw = it.Wi * s, bh = it.Hi * s, left = sx - it.cx * bw, top = fy - it.tr[3] * bh;
      if (left + bw < -20 || left > Wv + 20 || top + bh < 0) { hide(it); return; }
      var op = ad <= FA ? 1 : Math.max(0, 1 - (ad - FA) / (CUT - FA)); op = op * op * (3 - 2 * op); op = Math.max(op, ad < CUT - 4 ? OPMIN : 0) * (ad < CUT - 4 ? 1 : (CUT - ad) / 4);
      var lim = G.stageTop - 6; if (top < lim + 24) op *= clamp((top - lim) / 24, 0, 1);   /* pieces rising into the nav line fade out before they reach it */
      if (op < .02) { hide(it); return; }
      if (!it.shown) { it.shown = true; it.el.style.display = 'block'; it.sh.style.display = 'block'; load(it); }
      var k = s / it.s0, zi = String(Math.round(2000 - z / (Dc + RV) * 1000));
      it.el.style.transform = 'translate(' + left.toFixed(2) + 'px,' + top.toFixed(2) + 'px) scale(' + k.toFixed(4) + ')';
      it.el.style.opacity = op.toFixed(3); it.el.style.zIndex = zi;
      var sw = it.tw * s * .95, shh = Math.max(4, sw * .13);
      it.sh.style.transform = 'translate(' + (sx - sw / 2).toFixed(1) + 'px,' + (fy - shh * .45).toFixed(1) + 'px) scale(' + (sw / 100).toFixed(4) + ',' + (shh / 20).toFixed(4) + ')';
      it.sh.style.opacity = (op * .9).toFixed(3); it.sh.style.zIndex = String(+zi - 1);
      it.el.tabIndex = ad < STEP * VK * .5 ? 0 : -1;
    });
    front = best;
    if (best.z !== cgZ) cgFill(best.z);
    /* tag under the front piece only; fades out between pieces */
    if (tagItem !== best || force) {
      tagItem = best; tag.querySelector('b').textContent = best.n;
      tag.querySelector('span').textContent = best.pv ? 'Nov 15' : best.c + ' \u00a0\u00b7\u00a0 ' + best.p;
      if (best.pv) { tag.removeAttribute('href'); tag.setAttribute('aria-label', best.n + ', drops November 15'); tag.tabIndex = -1; }
      else { tag.href = best.href; tag.setAttribute('aria-label', best.n + ' ' + best.c + ', ' + best.p); tag.tabIndex = 0; }
    }
    if (!anim && !dragging && srItem !== best) { srItem = best; sr.textContent = best.n + (best.pv ? ', drops November 15' : ', ' + best.c + ', ' + best.p); }   /* announce only at rest */
    var tw = tag.offsetWidth || 200;
    tag.style.transform = 'translate(' + (CX - tw / 2).toFixed(1) + 'px,' + G.tagY + 'px)';
    tag.style.opacity = clamp(1 - (bd / (STEP * .5)) * 1.25, 0, 1).toFixed(3);
    /* winter-ness: ice wash + navy ink while the Winter zone is in front */
    var wz = 0; ITEMS.forEach(function (it) { if (it.win) wz = Math.max(wz, it.w); });
    var wa = zone('all'), wv = 0;
    if (wa) { var wf = wa.items[0], wl = wa.items[wa.items.length - 1];
      var inW = norm(yaw - wf.a) >= -STEP * .5 && norm(yaw - wl.a) <= STEP * .5;
      wv = inW ? 1 : clamp(1 - (Math.min(Math.abs(norm(yaw - wf.a)), Math.abs(norm(yaw - wl.a))) - STEP * .5) / (STEP * .4), 0, 1); }
    ice.style.opacity = wv.toFixed(3); wm.style.opacity = wv.toFixed(3);
    if (wv > .5 && !wm.dataset.l) { wm.dataset.l = 1; var mi = wm.querySelector('img'); mi.src = mi.getAttribute('data-src'); }
    root.classList.toggle('q3-w', wv > .5);
    /* nav */
    var z = best.z, zp = zpos();
    if (!M) {
      ZONES.forEach(function (zz, i) { var b = nav.children[i]; b.style.transform = 'translate(' + (NAVX[i] - navW[i] / 2).toFixed(1) + 'px,0)'; b.style.opacity = zz === z ? '1' : '.42'; b.setAttribute('aria-selected', zz === z ? 'true' : 'false'); });
      var nz = ZONES.length, i0 = Math.floor(zp) % nz, i1 = (i0 + 1) % nz, f = zp - Math.floor(zp), xa = NAVX[i0], xb = NAVX[i1];
      if (i1 === 0) xb = NAVX[0];   /* wrap: jump instead of sliding across the whole row */
      var hc = i1 === 0 ? (f < .5 ? xa : xb) : xa + (xb - xa) * f, hw = i1 === 0 ? (f < .5 ? navW[i0] : navW[0]) : navW[i0] + (navW[i1] - navW[i0]) * f;
      hl.style.transform = 'translate(' + (hc - 2).toFixed(1) + 'px,0)'; hl.style.opacity = '1';   /* nav C (Oct 23 2026): a small dot instead of the hairline */
    } else {
      /* nav C (Oct 23 2026): all six names at once in two centred rows (Tees · Hoodies & Crews · Joggers / Hats · Bags & More · Winter),
         inactive faded, small dot under the active one. Order never wraps: Tees first, Winter last. */
      var n = ZONES.length, h1 = n <= 3 ? n : Math.ceil(n / 2), rows = [[], []], P = [];
      for (var ri0 = 0; ri0 < n; ri0++) rows[ri0 < h1 ? 0 : 1].push(ri0); if (!rows[1].length) rows.pop();
      var rw = function (r) { return r.reduce(function (s2, i) { return s2 + navW[i]; }, 0); }, wmax = Math.max.apply(null, rows.map(rw)), gmax = Math.max.apply(null, rows.map(function (r) { return r.length - 1; })) || 1;
      var g = Math.max(14, Math.min(30, (Wv - 2 * G.pad - wmax) / gmax));
      rows.forEach(function (r, ri) { var tot = r.reduce(function (s2, i) { return s2 + navW[i]; }, 0) + g * (r.length - 1), x = CX - tot / 2;
        r.forEach(function (i) { P[i] = [x + navW[i] / 2, ri * NRH]; x += navW[i] + g; }); });
      ZONES.forEach(function (zz, i) { var b = nav.children[i];
        b.style.transform = 'translate(' + (P[i][0] - navW[i] / 2).toFixed(1) + 'px,' + P[i][1] + 'px)'; b.style.opacity = zz === z ? '1' : '.45';
        b.style.visibility = 'visible'; b.setAttribute('aria-selected', zz === z ? 'true' : 'false'); });
      var i0 = Math.floor(zp) % n, i1 = Math.min(i0 + 1, n - 1), f = zp - Math.floor(zp); if (zp > n - 1) { i1 = i0; f = 0; }
      var tt = f * f * (3 - 2 * f), p0 = P[i0], p1 = P[i1], same = p0[1] === p1[1];
      var dx = same ? p0[0] + (p1[0] - p0[0]) * tt : (tt < .5 ? p0[0] : p1[0]), dy = same ? p0[1] : (tt < .5 ? p0[1] : p1[1]);
      hl.style.transform = 'translate(' + (dx - 2).toFixed(1) + 'px,' + dy + 'px)'; hl.style.opacity = (same ? 1 : Math.abs(1 - tt * 2)).toFixed(3);
    }
  }
  /* phone nav: x offset of name i from the centre, laid out by real name widths around the fractional position */
  function slideX(i, off) {
    var n = ZONES.length, fl = Math.floor(off), fr = off - fl, x = 0, j, k;
    /* distance from centre of name at integer offset m: sum of half widths + gaps between consecutive names */
    function at(m) { var s = 0, c = i - m; var t; if (m > 0) { for (t = 0; t < m; t++) { var a = ((c + t) % n + n) % n, b = ((c + t + 1) % n + n) % n; s += navW[a] / 2 + navGap + navW[b] / 2; } } else if (m < 0) { for (t = 0; t < -m; t++) { var a2 = ((c - t) % n + n) % n, b2 = ((c - t - 1) % n + n) % n; s -= navW[a2] / 2 + navGap + navW[b2] / 2; } } return s; }
    return at(fl) + (at(fl + 1) - at(fl)) * fr;
  }
  /* fractional zone position (0..6) of the current yaw, eased so names settle between pieces */
  function zpos() {
    var n = ZONES.length, cs = ZONES.map(function (z) { var a = z.items[0].a, b = z.items[z.items.length - 1].a; return a + norm(b - a) / 2; });
    for (var i = 0; i < n; i++) { var a = cs[i], b = cs[(i + 1) % n], span = ((b - a) % 360 + 360) % 360, t = ((yaw - a) % 360 + 360) % 360;
      if (t <= span) return edge(i); }
    return 0;
  }
  /* the line follows the zone the front piece belongs to; it slides only while the ring crosses from one zone into the next */
  function edge(i) {
    var n = ZONES.length, z = ZONES[i], zn = ZONES[(i + 1) % n], la = z.items[z.items.length - 1].a, fa = zn.items[0].a;
    var y = yaw, d1 = norm(y - la), d2 = norm(fa - y), span = d1 + d2;
    if (d1 <= 0) return i; if (d2 <= 0) return i + 1;
    var t = d1 / span; t = t * t * (3 - 2 * t); return i + t;
  }
  function hide(it) { if (it.shown) { it.shown = false; it.el.style.display = 'none'; it.sh.style.display = 'none'; it.el.tabIndex = -1; } }

  /* ===== motion ===== */
  function easeIO(t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
  function nearest(y) { var best = ITEMS[0], bd = 999; ITEMS.forEach(function (it) { var d = Math.abs(norm(it.a - y)); if (d < bd) { bd = d; best = it; } }); return best; }
  function step(dir) { var it = nearest(anim ? anim.t : yaw); goTo(ITEMS[(it.k + dir + ITEMS.length) % ITEMS.length].a); }
  function goK(k) { var z = zone(k); if (z) goTo(z.items[0].a); }
  function goTo(a, dur, ez) {
    var to = yaw + norm(a - yaw);
    if (RM || Math.abs(to - yaw) < .01) { anim = null; yaw = norm(to); kick(); return; }
    var dist = Math.abs(to - yaw);
    anim = { f: yaw, t: to, s: 0, d: dur || clamp(320 + Math.sqrt(dist / STEP) * 170, 380, 1100), e: ez || easeIO }; kick();
  }
  function kick() { if (!raf) raf = requestAnimationFrame(tick); }
  function tick(now) {
    raf = 0;
    if (anim && !dragging) {
      if (!anim.s) anim.s = now;
      var t = Math.min(1, (now - anim.s) / anim.d); yaw = anim.f + (anim.t - anim.f) * anim.e(t);
      if (t >= 1) { yaw = norm(anim.t); anim = null; }
    }
    render(); if (anim && !dragging) kick();
  }
  /* drag / swipe: pointer events, 6 px dead zone, capture only once a horizontal drag is recognised (taps still reach the links),
     release velocity -> projected stop -> eased snap to the nearest piece. touch-action: pan-y lets vertical swipes scroll the page. */
  function drag() {
    var on = false, x0, y0, lx, pid = null, horiz = null, samples = [];
    view.addEventListener('pointerdown', function (e) {
      if (e.button && e.button !== 0) return;
      on = true; pid = e.pointerId; moved = false; horiz = null; x0 = lx = e.clientX; y0 = e.clientY; samples = [];
    });
    view.addEventListener('pointermove', function (e) {
      if (!on || e.pointerId !== pid) return;
      var tx = Math.abs(e.clientX - x0), ty = Math.abs(e.clientY - y0);
      if (horiz === null) {
        if (tx < 6 && ty < 6) return;
        horiz = tx > ty; moved = true;
        if (!horiz) { on = false; return; }
        try { view.setPointerCapture(pid); } catch (er) { }
        dragging = true; anim = null; lx = e.clientX; root.classList.add('q3-drag');
      }
      var dx = e.clientX - lx; lx = e.clientX;
      yaw -= dx * KPX;
      var t = e.timeStamp || performance.now(); samples.push([t, yaw]); while (samples.length > 2 && t - samples[0][0] > 90) samples.shift();
      kick();
    });
    function end(e) {
      if (!on || (e && e.pointerId !== pid)) return; on = false;
      try { view.releasePointerCapture(pid); } catch (er) { }
      if (!dragging) { setTimeout(function () { moved = false; }, 30); return; }
      dragging = false; root.classList.remove('q3-drag');
      var v = 0, now = (e && e.timeStamp) || performance.now();
      if (samples.length > 1 && now - samples[samples.length - 1][0] < 60) { var a = samples[0], b = samples[samples.length - 1]; if (b[0] > a[0]) v = (b[1] - a[1]) / (b[0] - a[0]); }
      if (e && e.type === 'pointercancel') v = 0;
      var proj = yaw + clamp(v * 260, -4 * STEP, 4 * STEP), to = nearest(proj).a, d = norm(to - yaw);
      var dur = Math.abs(v) > .004 && d * v > 0 ? clamp(3 * Math.abs(d) / Math.abs(v), 280, 900) : clamp(220 + Math.abs(d) / STEP * 160, 240, 520);
      goTo(to, dur, easeOut);
      setTimeout(function () { moved = false; }, 30);
    }
    view.addEventListener('pointerup', end); view.addEventListener('pointercancel', end);
    view.addEventListener('lostpointercapture', function (e) { if (on && dragging && e.target === view) end(e); });
    view.addEventListener('dragstart', function (e) { e.preventDefault(); });
  }

  /* ===== product page round trip: the zone + piece ride in this page's URL hash and sessionStorage (q3-ret), so the PDP's back link
     and the browser Back button land on the same piece. Old #w= keys still work (front -> Tees, fit/all -> Winter). ===== */
  function retState() { var it = front || ITEMS[0]; return { w: it.z.k, i: it.id }; }
  function retHash(st) { return '#w=' + st.w + '&i=' + st.i + sideHash(); }
  function remember(href) {
    try { var st = retState(); st.at = Date.now(); if (href) st.p = href.replace(/^https?:\/\/[^\/]+/, '').split('?')[0];
      sessionStorage.setItem('q3-ret', JSON.stringify(st)); history.replaceState(history.state, '', location.pathname + location.search + retHash(st)); } catch (e) {}
  }
  function goPdp(e, a) {
    if (moved) { e.preventDefault(); return; }
    var href = a.getAttribute('href'); if (!href) return; remember(href);
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
    e.preventDefault();
    var id = a.getAttribute('data-id'), it = null; ITEMS.forEach(function (x) { if (x.id === id) it = x; }); if (!it && a === tag) it = front;
    qvOpen(href, it);   /* Nov 15 2026 (Justin): the piece opens over the store instead of leaving it */
  }
  function restore() {
    var m = {}, h = location.hash.replace(/^#/, '');
    h.split('&').forEach(function (kv) { var p = kv.split('='); if (p[0]) m[p[0]] = decodeURIComponent(p[1] || ''); });
    if (!m.w) { try { var st = JSON.parse(sessionStorage.getItem('q3-ret') || 'null'); if (st && st.w && /\/products\//.test(document.referrer)) m = st; } catch (e) {} }
    if (m.w === 'fit') m.w = 'all'; if (m.w === 'front') m.w = 'tees';
    var it = null; if (m.i) ITEMS.forEach(function (x) { if (x.id === m.i) it = x; });
    var z = m.w && zone(m.w); if (!it && z) it = z.items[0]; if (!it) return;
    anim = null; yaw = it.a; render(1);
  }
  /* ===== VIEW ALL: floating two-row grid (Nov 15 2026, Justin) =====
     Every PUBLIC product (read live from /collections/all at open, so new products appear on their own; LIST0 = build-time fallback),
     cutouts floating on the light field, no cards / borders / pills / shadows. Exactly two rows, each ONE flat track moved with
     translateX; the rows wrap around endlessly (track = the row repeated, offset taken modulo the row length) with momentum
     drag / swipe, wheel (horizontal) and the arrows. Pieces ease a little smaller / fainter toward the screen edges (flat 2D scale +
     opacity on the piece, never preserve-3d / backdrop-filter). No auto-spin. First tap shows name, colour, price and "Shop it ->";
     tapping the shown piece (or the link) opens its PDP. A short settle (opacity + 2D transform) when the grid opens; none under
     prefers-reduced-motion (no inertia either). Opens from the "View all" control, or straight away with #all / ?view=all
     (home "View all" links here). Cutouts: the 360's own tiles (D / WINTER / TRIM) + img/v/<slug>.webp for pieces without one
     (work/grid/cut.py); a product with no cutout yet shows its Fourthwall photo, multiplied onto the field. */
  var GV = {"blue-s-cuff-beanie-black":0.6771,"blue-s-lockup-back-hoodie-black":0.9886,"blue-s-monogram-hoodie-white":0.98,"blue-s-monogram-tee-white":0.9986,"blue-s-snapback-black":1.0243,"maison-winter-backpack-black":0.7857,"night-frost-tee-black":1.1543,"qs-dad-hat-black":1.07,"scattered-snow-crew-white":0.8143,"winter-crest-blanket-off-white":1.2057,"winter-side-band-backpack-white":0.7857,"winter-wordmark-dad-hat-black":1.0686,"winter-wordmark-hoodie-navy":0.98,"winter-wordmark-joggers-black":0.5129};      /* slug -> aspect of img/v/<slug>.webp (build time) */
  var LIST0 = [["sticker-fall-crew-black","Sticker Fall Crew — Black","49"],["wordmark-cuff-beanie","Wordmark Cuff Beanie","32"],["night-frost-tee-black","Night Frost Tee — Black","45"],["winter-wordmark-joggers-black","Winter Wordmark Joggers — Black","45"],["winter-wordmark-hoodie-navy","Winter Wordmark Hoodie — Navy","68"],["blue-s-snapback-black","Blue-S Snapback — Black","34.95"],["winter-wordmark-dad-hat-black","Winter Wordmark Dad Hat — Black","34.95"],["qs-dad-hat-black","QS Dad Hat — Black","34.95"],["signet-joggers-burgundy","Signet Joggers — Burgundy","49"],["signet-hoodie-burgundy","Signet Hoodie — Burgundy","62"],["signet-tee-burgundy","Signet Tee — Burgundy","34.99"],["frost-lined-hood-black","Frost-Lined Hood - Black","58"],["winter-crest-back-tee-black","Winter Crest Back Tee - Black","45"],["seal-crew-burgundy","Wax Seal Crew — Burgundy","49"],["embroidered-qs-sherpa-black","Signet Sherpa Blanket — Black","59"],["heavyweight-tee-black","Calling Card Tee — Black","29"],["damask-lined-hoodie-black","Locket Hoodie — Black","58"],["wordmark-lattice-backpack-white","Filigree Backpack — White","48"],["qs-lp-ts01-classic-tee-white","Calling Card Tee — White","29"],["winter-side-band-backpack-white","Winter Side-Band Backpack — White","48"],["winter-crest-blanket-off-white","Winter Crest Blanket — Off-White","50"],["maison-winter-backpack-black","Maison Winter Backpack — Black","48"],["engraved-crest-blanket-white","Heirloom Blanket — White","45"],["winter-crest-crew-off-white","Winter Crest Crew — Off-White","54.95"],["maison-monogram-joggers-black","Cipher Joggers — Black","60"],["maison-monogram-tee-black","Cipher Tee — Black","34.99"],["scattered-snow-crew-white","Scattered Snow Crew — White","49"],["damask-crossbody-burgundy","Decanter Crossbody — Burgundy","55"],["maison-winter-joggers-black","Maison Winter Joggers — Black","60"],["scattered-monogram-hoodie-white","Pressed Flower Hoodie — White","58"],["maison-monogram-backpack-black","Cipher Backpack — Black","48"],["maison-monogram-tee-white","Cipher Tee — White","34.99"],["hem-band-joggers-off-white","Ribbon Joggers — Off-White","60"],["damask-crew-burgundy","Decanter Crew — Burgundy","49"],["wordmark-leg-joggers-black","Bookmark Joggers — Black","45"],["qs-cuff-beanie-burgundy","Signet Beanie — Burgundy","29.95"],["letterpress-crew-grey","First Edition Crew — Grey","49"],["embroidered-qs-crew-black","Signet Crew — Black","49"],["wordmark-hoodie-white","Masthead Hoodie — White","58"],["qs-snapback-black","Signet Snapback — Black","34.95"],["qs-snapback-burgundy","Signet Snapback — Burgundy","34.95"],["wordmark-snapback-black","Masthead Snapback — Black","34.95"],["wordmark-cuff-beanie-black","Masthead Beanie — Black","27.95"],["lockup-hoodie-black","Postscript Hoodie — Black","58"],["blue-s-cuff-beanie-black","Blue-S Cuff Beanie — Black","27.95"],["blue-s-monogram-hoodie-white","Blue-S Monogram Hoodie — White","58"],["blue-s-lockup-back-hoodie-black","Blue-S Lockup Back Hoodie — Black","58"],["blue-s-monogram-tee-white","Blue-S Monogram Tee — White","29"]];   /* [slug, live title, price] of every public product at build time (fallback if the live list can't load) */
  var GR = { on: 0, rows: [[], []], off: 0, v: 0, n: 0, list: null, sel: null, raf: 0, anim: null };
  var GCSS = '.q3.q3-g{--ink:#0b0b0b;--mut:rgba(11,11,11,.5);--acc:#6E0B22}' +
    '.q3.q3-g .q3-view,.q3.q3-g .q3-disc,.q3.q3-g .q3-nav,.q3.q3-g .q3-tag,.q3.q3-g .q3-wm,.q3.q3-g .q3-ice{display:none!important}' +
    '.q3 .q3-va{display:block;padding:14px 0 14px .3em;line-height:1;white-space:nowrap;color:var(--ink);font-size:inherit!important;letter-spacing:.3em!important;text-transform:uppercase!important}' +
    '.q3 .q3-va:focus-visible,.q3 .q3-gb:focus-visible{outline:1px solid var(--acc);outline-offset:2px}' +
    '.q3 .q3-gb{display:none;padding:14px 0;line-height:1;white-space:nowrap;color:var(--ink);font-size:inherit!important;letter-spacing:.3em!important;text-transform:uppercase!important}' +
    '.q3.q3-g .q3-tl,.q3.q3-g .q3-va,.q3 .q3-gc{display:none!important}.q3.q3-g .q3-gb,.q3.q3-g .q3-gc{display:block!important}' +
    '.q3-gd{position:absolute;left:0;width:100%;overflow:hidden;display:none;touch-action:pan-y;cursor:grab;outline:0}.q3.q3-g .q3-gd{display:block}' +
    '.q3-gd.q3-gdr{cursor:grabbing}' +
    '.q3-gr{position:absolute;left:0;top:0;height:1px;will-change:transform}' +
    '.q3-gi{position:absolute;top:0;display:block;transform-origin:50% 40%}' +
    '.q3-gp{position:absolute;left:0;top:0;width:100%;transition:opacity .55s ease,transform .7s cubic-bezier(.2,.7,.2,1)}' +
    '.q3-gd.q3-pre .q3-gp{opacity:0;transform:translate(0,14px) scale(.96)}' +
    '.q3-gp img{width:100%;height:100%;opacity:0;transition:opacity .35s}.q3-gp img.q3-ok{opacity:1}.q3-gp img.q3-mx{mix-blend-mode:multiply}' +
    '.q3-gl{position:absolute;left:50%;top:0;width:220px;margin-left:-110px;text-align:center;text-transform:uppercase;letter-spacing:.24em;line-height:1.6;font-size:10.5px;opacity:0;transition:opacity .25s;pointer-events:none}' +
    '.q3-gl b{display:block;font-weight:400;color:var(--ink);white-space:normal}.q3-gl span{display:block;color:var(--mut);white-space:nowrap}' +
    '.q3-gl i{display:inline-block;font-style:normal;margin-top:5px;padding:0 0 3px .24em;border-bottom:1px solid var(--ink);color:var(--ink);white-space:nowrap}' +
    '.q3-gi.q3-gon .q3-gl{opacity:1}' +
    '.q3-gi:focus-visible{outline:0}.q3-gi:focus-visible .q3-gl b{text-decoration:underline}' +
    '@media (min-width:750px){.q3-gl{font-size:11px;width:260px;margin-left:-130px}}' +
    '.q3 .q3-sd{position:absolute;left:0;top:0;width:100%;display:flex;justify-content:center;align-items:center;gap:0;z-index:3001;pointer-events:none;font-size:10.5px;letter-spacing:.2em;text-transform:uppercase;white-space:nowrap}.q3 .q3-sd button{position:relative;pointer-events:auto;padding:0 .2em 0 .4em;margin:0;line-height:inherit;height:100%;color:var(--ink);opacity:.62;font-size:inherit!important;letter-spacing:inherit!important;text-transform:uppercase!important;white-space:nowrap;background:none;border:0;border-radius:0;box-shadow:none;transition:opacity .25s}.q3 .q3-sd i{font-style:normal;color:var(--mut);padding:0 .7em;pointer-events:none}.q3 .q3-sd button{opacity:.45}.q3 .q3-sd button.q3-on{opacity:1}.q3 .q3-sd button.q3-on:after{content:"";position:absolute;left:.4em;right:.4em;bottom:6px;height:1.5px;background:#6E0B22}.q3 .q3-sd button:focus-visible{outline:1px solid var(--acc);outline-offset:-3px}@media (hover:hover){.q3 .q3-sd button:hover{opacity:1}}@media (min-width:750px){.q3 .q3-sd{font-size:11.5px;letter-spacing:.26em}.q3 .q3-sd button.q3-on:after{bottom:11px}}.q3 .q3-tl{display:block;width:1px}.q3-gd,.q3-gd .q3-gi,.q3-gd img{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.q3-gd .q3-gi{touch-action:pan-y}' +
    '@media (prefers-reduced-motion:reduce){.q3-gp,.q3-gp img,.q3-gl{transition:none!important}.q3-gd.q3-pre .q3-gp{opacity:1;transform:none}}';
  function gSplit(t) { var m = String(t).split(/\s+[\u2014\u2013-]\s+/); return m.length > 1 ? [m[0], m.slice(1).join(' ')] : [t, '']; }
  function gMoney(p) { p = String(p).replace(/[^0-9.]/g, ''); var v = parseFloat(p); if (isNaN(v)) return ''; return '$' + (v % 1 ? v.toFixed(2) : String(Math.round(v))); }
  function gKind(s) { return /snapback|dad-hat|hat-/.test(s) ? .5 : /beanie/.test(s) ? .56 : /backpack|crossbody/.test(s) ? .76 : /blanket|sherpa/.test(s) ? .8 : /tee/.test(s) ? .86 : 1; }
  /* known cutouts by live slug: the 360's own tiles first, then img/v */
  var GK = {};
  (function () {
    Object.keys(D).forEach(function (id) { var p = D[id], t = TRIM[id]; GK[p.u || id] = { src: (p.o ? OWN : IMG) + 'p/' + id + '.webp', ar: t ? t[4] : .8 }; });
    WINTER.concat(EXTRA).forEach(function (w) { var t = TRIM[w.id]; GK[w.u || w.id] = { src: OWN + (w.f || 'w') + '/' + w.id + '.webp', ar: t ? t[4] : (w.ar || .8) }; });
    Object.keys(GV).forEach(function (s) { if (!GK[s]) GK[s] = { src: OWN + 'v/' + s + '.webp', ar: GV[s] }; });
  })();
  function gFromList(L) { return L.map(function (r) { var nc = gSplit(r[1]); return { s: r[0], n: nc[0], c: nc[1], p: gMoney(r[2]), ph: r[3] || '' }; }); }
  /* the build-time list renders at once; the live list (fetched once per page) replaces it only if anything differs */
  function gLive(cb) {
    try {
      fetch('/collections/all', { credentials: 'same-origin' }).then(function (r) { if (!r.ok) throw 0; return r.text(); }).then(function (h) {
        var doc = new DOMParser().parseFromString(h, 'text/html'), seen = {}, L = [];
        [].forEach.call(doc.querySelectorAll('.product-tile a[href*="/products/"]'), function (a) {
          var m = (a.getAttribute('href') || '').match(/\/products\/([a-z0-9-]+)/); if (!m || seen[m[1]]) return; seen[m[1]] = 1;
          var hd = a.querySelector('.tile__heading,h2,h3'), pr = a.querySelector('.tile__price'), im = a.querySelector('img');
          L.push([m[1], hd ? hd.textContent.trim() : m[1], pr ? pr.textContent.trim() : '', im ? im.getAttribute('src') : '']);
        });
        if (L.length >= 4) cb(gFromList(L));
      }).catch(function () {});
    } catch (e) {}
  }
  function gKey(L) { return L.map(function (p) { return [p.s, p.n, p.c, p.p].join('|'); }).join('~'); }
  var gd, gTr = [], GL = {};   /* grid geometry */
  function gShown() { var L = (GR.list || []).filter(function (p) { return keep(p.s); }); return L.length ? L : (GR.list || []); }
  function gApply() { var s0 = GR.sel && GR.sel.s; gBuild(gShown()); GR.off = gStart(); GR.anim = null; GR.v = 0; gSel(null); gRender(); if (s0) GR.cur.forEach(function (p) { if (p.s === s0) gSel(p); }); }
  function gBuild(L) {
    var M2 = root.clientWidth < 750; GR.cur = L;
    GR.n = L.length; GR.rows = [[], []]; gd.innerHTML = '';
    L.forEach(function (p, i) { var k = GK[p.s]; p.src = k ? k.src : p.ph; p.ar = k ? k.ar : .8; p.cut = !!k; p.k = gKind(p.s); GR.rows[i % 2].push(p); });
    gTr = [0, 1].map(function () { var t = document.createElement('div'); t.className = 'q3-gr'; gd.appendChild(t); return t; });
    root.querySelector('.q3-gc').textContent = L.length + ' pieces';
    gLayout(true);
  }
  function gLayout(rebuild) {
    if (!gd || !GR.n) return;
    var W = root.clientWidth, H = root.clientHeight, M2 = W < 750;
    var top = (M2 ? 40 + 32 : 50) + (M2 ? 8 : 22), bot = H - (M2 ? 66 : 76), gap = M2 ? 6 : 18, labH = M2 ? 62 : 66;
    var rowH = Math.max(150, (bot - top - gap) / 2), imgH = rowH - labH, sp = M2 ? 26 : 52;
    gd.style.top = top + 'px'; gd.style.height = (bot - top) + 'px';
    GL = { W: W, top: top, rowH: rowH, imgH: imgH, gap: gap, sp: sp, M: M2, L: [] };
    GR.rows.forEach(function (row, r) {
      var x = 0;
      row.forEach(function (p) { p.h = Math.round(imgH * (M2 ? .9 : .96) * p.k); p.w = Math.round(p.h * p.ar); p.sw = Math.max(p.w, M2 ? 96 : 120); p.x = x; x += p.sw + sp; });
      GL.L[r] = x; var reps = Math.max(3, Math.ceil(W / Math.max(1, x)) + 2); GL.reps = Math.max(GL.reps || 0, reps);
    });
    GR.rows.forEach(function (row, r) {
      var tr = gTr[r], Lr = GL.L[r], reps = Math.max(3, Math.ceil(W / Math.max(1, Lr)) + 2);
      tr.style.top = (r * (rowH + gap)) + 'px';
      if (rebuild || tr.children.length !== reps * row.length) {
        tr.innerHTML = ''; row.forEach(function (p) { p.els = []; });
        for (var c = 0; c < reps; c++) row.forEach(function (p) {
          var a = document.createElement('a'); a.className = 'q3-gi'; a.href = SHOP + p.s + '?from=360&w=grid';   /* the PDP's back link turns w into #w=grid -> grid */ a.draggable = false;
          a.setAttribute('data-s', p.s);
          if (c === 1) a.setAttribute('aria-label', p.n + (p.c ? ' ' + p.c : '') + (p.p ? ', ' + p.p : '')); else { a.tabIndex = -1; a.setAttribute('aria-hidden', 'true'); }
          a.innerHTML = '<span class="q3-gp"><img alt="" decoding="async" draggable="false"' + (p.cut ? '' : ' class="q3-mx"') + '></span>' +
            '<span class="q3-gl"><b>' + esc(p.n) + '</b><span>' + esc(p.c ? p.c + ' \u00a0\u00b7\u00a0 ' + p.p : p.p) + '</span><i>Shop it &rarr;</i></span>';
          gEvents(a, p); tr.appendChild(a); p.els.push(a); a._p = p; a._c = c;
        });
      }
      [].forEach.call(tr.children, function (a) {
        var p = a._p, gp = a.firstChild, im = gp.firstChild, gl = a.lastChild;
        a.style.left = (a._c * Lr + p.x) + 'px'; a.style.width = p.sw + 'px'; a.style.height = rowH + 'px';
        gp.style.left = ((p.sw - p.w) / 2) + 'px'; gp.style.width = p.w + 'px'; gp.style.height = p.h + 'px'; gp.style.top = Math.round((imgH - p.h) / 2 + (M2 ? 2 : 4)) + 'px';
        gl.style.top = (imgH + (M2 ? 2 : 6)) + 'px';
        var d = Math.min(420, (a._c === 1 ? GR.rows[0].indexOf(p) > -1 ? GR.rows[0].indexOf(p) : GR.rows[1].indexOf(p) : 0) * 22);
        gp.style.transitionDelay = (RM ? 0 : d) + 'ms';
      });
    });
    gRender();
  }
  function gImg(a) { var im = a.firstChild.firstChild; if (im.getAttribute('src')) return; im.onload = function () { im.classList.add('q3-ok'); }; im.src = a._p.src; if (im.complete && im.naturalWidth) im.classList.add('q3-ok'); }
  function gStart() { return -(GL.M ? 20 : 44); }   /* first piece starts at the page margin */
  function gMod(v, m) { return ((v % m) + m) % m; }
  function gRender() {
    if (!GR.on || !GL.W) return;
    var W = GL.W, cx = W / 2;
    gTr.forEach(function (tr, r) {
      var Lr = GL.L[r]; if (!Lr) return;
      var o = gMod(GR.off + (r ? GL.sp * 1.5 + 40 : 0), Lr), tx = -(Lr + o);
      tr.style.transform = 'translate3d(' + tx.toFixed(1) + 'px,0,0)';
      [].forEach.call(tr.children, function (a) {
        var x0 = a._c * Lr + a._p.x + tx, x1 = x0 + a._p.sw;
        if (x1 < -40 || x0 > W + 40) { if (a._v) { a._v = 0; a.style.visibility = 'hidden'; } return; }
        if (!a._v) { a._v = 1; a.style.visibility = ''; gImg(a); }
        var u = Math.abs((x0 + x1) / 2 - cx) / (W / 2), e = u < .7 ? 0 : Math.min(1, (u - .7) / .4); e = e * e * (3 - 2 * e);
        a.style.transform = e ? 'scale(' + (1 - .08 * e).toFixed(3) + ')' : '';
        a.style.opacity = e ? (1 - .45 * e).toFixed(3) : '';
      });
    });
  }
  function gKick() { if (!GR.raf) GR.raf = requestAnimationFrame(gTick); }
  function gTick(now) {
    GR.raf = 0;
    if (GR.anim) { if (!GR.anim.s) GR.anim.s = now; var t = Math.min(1, (now - GR.anim.s) / GR.anim.d), k = easeOut(t); GR.off = GR.anim.f + (GR.anim.t - GR.anim.f) * k; if (t >= 1) GR.anim = null; }
    else if (!GR.drag && Math.abs(GR.v) > .02) { var dt = Math.min(40, now - (GR.lt || now)); GR.off += GR.v * dt; GR.v *= Math.pow(.95, dt / 16.7); }
    else GR.v = 0;
    GR.lt = now; gRender();
    if (GR.anim || (!GR.drag && Math.abs(GR.v) > .02)) gKick();
  }
  function gStep(dir) {
    if (!GL.W) return; var by = dir * Math.max(200, GL.W * (GL.M ? .62 : .5));
    GR.v = 0; var f = GR.anim ? GR.anim.t : GR.off;
    if (RM) { GR.anim = null; GR.off = f + by; gRender(); return; }
    GR.anim = { f: GR.off, t: f + by, s: 0, d: 560 }; gKick();
  }
  function gSel(p) {
    GR.sel = p; [].forEach.call(gd.querySelectorAll('.q3-gi'), function (a) { a.classList.toggle('q3-gon', !!p && a._p === p); });
  }
  var gMoved = false;
  function gEvents(a, p) {
    a.addEventListener('click', function (e) {
      if (gMoved) { e.preventDefault(); return; }
      if (GR.sel !== p) { e.preventDefault(); gSel(p); return; }
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
      gHash(1);   /* if the full product page is opened from the card, Back lands on the grid (#all) */
      try { sessionStorage.setItem('q3-ret', JSON.stringify({ g: 1, at: Date.now() })); } catch (er) {}
      e.preventDefault(); qvOpen(a.href, p);   /* Nov 15 2026 (Justin): quick view over the grid instead of leaving the store */
    });
    a.addEventListener('focus', function () { if (Date.now() - (GR.pt || 0) < 900) return;   /* a tap focuses the link too: only keyboard focus reveals */
      if (a._c === 1 && GR.sel !== p) { gSel(p); gReveal(a); } });
  }
  function gReveal(a) {   /* keyboard focus: bring the piece into view */
    var r = a.getBoundingClientRect(), g = gd.getBoundingClientRect(), mid = (r.left + r.right) / 2 - g.left;
    if (mid < GL.W * .15 || mid > GL.W * .85) { var tr = gTr[GR.rows[0].indexOf(a._p) > -1 ? 0 : 1]; GR.off += mid - GL.W / 2; gRender(); }
  }
  /* Nov 15 2026 (Justin, real iPhone: the rows did not swipe): touch is handled with touch events (touchmove passive:false, preventDefault
     only once the gesture is horizontal, so vertical swipes still scroll the page; touch-action: pan-y on the region and every piece);
     pointer events now serve mouse / pen only. A tap = movement under 8 px (reveals, then the second tap opens the PDP). */
  function gDrag() {
    var on = false, x0, y0, lx, pid = null, horiz = null, S = [];
    function gGo(x, y) { GR.pt = Date.now(); on = true; horiz = null; gMoved = false; x0 = lx = x; y0 = y; S = [];
      if (GR.anim || Math.abs(GR.v) > .02) { GR.anim = null; GR.v = 0; gMoved = true; } }   /* a touch stops the spin (and is not a tap) */
    function gMv(x, y, t) {   /* returns true while the gesture is a horizontal drag */
      var tx = Math.abs(x - x0), ty = Math.abs(y - y0);
      if (horiz === null) { if (tx < 8 && ty < 8) return false; horiz = tx > ty; gMoved = true; if (!horiz) { on = false; return false; }
        GR.drag = true; gd.classList.add('q3-gdr'); lx = x; }
      var dx = x - lx; lx = x; GR.off -= dx;
      S.push([t, GR.off]); while (S.length > 2 && t - S[0][0] > 90) S.shift();
      gRender(); return true;
    }
    function gEnd(now, cancel) {
      on = false;
      if (!GR.drag) { setTimeout(function () { gMoved = false; }, 30); return; }
      GR.drag = false; gd.classList.remove('q3-gdr');
      var v = 0;
      if (S.length > 1 && now - S[S.length - 1][0] < 60) { var a = S[0], b = S[S.length - 1]; if (b[0] > a[0]) v = (b[1] - a[1]) / (b[0] - a[0]); }
      if (cancel || RM) v = 0;
      GR.v = clamp(v, -4, 4); GR.lt = 0; gKick();
      setTimeout(function () { gMoved = false; }, 30);
    }
    var tid = null;
    gd.addEventListener('touchstart', function (e) {
      if (e.touches.length !== 1) { if (on) gEnd(performance.now(), 1); tid = null; return; }
      var t = e.touches[0]; tid = t.identifier; gGo(t.clientX, t.clientY);
    }, { passive: true });
    gd.addEventListener('touchmove', function (e) {
      if (!on || tid === null) return; var t = null;
      for (var i = 0; i < e.changedTouches.length; i++) if (e.changedTouches[i].identifier === tid) t = e.changedTouches[i];
      if (!t) return;
      if (gMv(t.clientX, t.clientY, performance.now()) && e.cancelable) e.preventDefault();
    }, { passive: false });
    var tEnd = function (e) { if (tid === null) return; var hit = false; for (var i = 0; i < e.changedTouches.length; i++) if (e.changedTouches[i].identifier === tid) hit = true;
      if (!hit) return; tid = null; if (on || GR.drag) gEnd(performance.now(), e.type === 'touchcancel'); };
    gd.addEventListener('touchend', tEnd); gd.addEventListener('touchcancel', tEnd);
    gd.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'touch' || (e.button && e.button !== 0)) return;
      pid = e.pointerId; gGo(e.clientX, e.clientY);
    });
    gd.addEventListener('pointermove', function (e) {
      if (e.pointerType === 'touch' || !on || e.pointerId !== pid) return;
      var was = GR.drag;
      if (gMv(e.clientX, e.clientY, e.timeStamp || performance.now()) && !was) { try { gd.setPointerCapture(pid); } catch (er) { } }
    });
    function end(e) {
      if (e && e.pointerType === 'touch') return;
      if (!on || (e && e.pointerId !== pid)) return;
      try { gd.releasePointerCapture(pid); } catch (er) { }
      gEnd((e && e.timeStamp) || performance.now(), e && e.type === 'pointercancel');
    }
    gd.addEventListener('pointerup', end); gd.addEventListener('pointercancel', end);
    gd.addEventListener('lostpointercapture', function (e) { if (e.pointerType !== 'touch' && on && GR.drag) end(e); });
    gd.addEventListener('dragstart', function (e) { e.preventDefault(); });
    gd.addEventListener('click', function (e) { if (!e.target.closest || !e.target.closest('.q3-gi')) gSel(null); });
    gd.addEventListener('wheel', function (e) {
      var dx = e.deltaX || (e.shiftKey ? e.deltaY : 0); if (!dx || Math.abs(dx) < Math.abs(e.deltaY) * (e.shiftKey ? 0 : 1)) return;
      e.preventDefault(); GR.anim = null; GR.v = 0; GR.off += dx * (e.deltaMode === 1 ? 16 : 1); gRender();
    }, { passive: false });
    gd.addEventListener('keydown', function (e) { if (e.key === 'ArrowLeft') { e.preventDefault(); gStep(-1); } if (e.key === 'ArrowRight') { e.preventDefault(); gStep(1); } if (e.key === 'Escape') gClose(); });
  }
  function gHash(on) {
    try { var u = location.pathname + location.search.replace(/([?&])view=all(&|$)/, function (m, a, b) { return b ? a : ''; }).replace(/\?$/, '');
      history.replaceState(history.state, '', u + (on ? '#all' + sideHash() : (SIDE ? '#side=' + SIDE : ''))); } catch (e) {}
  }
  function gOpen(quiet) {
    if (GR.on) return; GR.on = 1; root.classList.add('q3-g'); anim = null; if (cg) cg.style.display = 'none';
    root.querySelector('.q3-va').setAttribute('aria-expanded', 'true');
    prv.setAttribute('aria-label', 'Scroll left'); nxt.setAttribute('aria-label', 'Scroll right');
    gHash(1);
    if (!RM && !quiet) gd.classList.add('q3-pre');
    if (!GR.list) { GR.list = gFromList(LIST0); gBuild(gShown()); GR.off = gStart();
      gLive(function (L) { if (gKey(L) === gKey(GR.list)) return; GR.list = L; var o = GR.off, s = GR.sel && GR.sel.s; gBuild(gShown()); GR.off = o; gRender();
        if (s) GR.cur.forEach(function (p) { if (p.s === s) gSel(p); }); }); }
    else { if (gKey(GR.cur || []) !== gKey(gShown())) gBuild(gShown()); else gLayout(); GR.off = gStart(); }
    gSel(null); gRender();
    if (gd.classList.contains('q3-pre')) requestAnimationFrame(function () { requestAnimationFrame(function () { gd.classList.remove('q3-pre'); }); });
    try { gd.focus({ preventScroll: true }); } catch (e) {}
  }
  function gClose() {
    if (!GR.on) return; GR.on = 0; GR.anim = null; GR.v = 0; root.classList.remove('q3-g'); gSel(null); if (cg) cg.style.display = '';
    root.querySelector('.q3-va').setAttribute('aria-expanded', 'false');
    prv.setAttribute('aria-label', 'Previous piece'); nxt.setAttribute('aria-label', 'Next piece');
    gHash(0); fit(); layout();
    try { root.querySelector('.q3-va').focus({ preventScroll: true }); } catch (e) {}
  }
  function gInit() {
    var st = document.createElement('style'); st.id = 'q3-gcss'; st.textContent = GCSS; document.head.appendChild(st);
    gd = document.createElement('div'); gd.className = 'q3-gd'; gd.tabIndex = 0; gd.setAttribute('role', 'region');
    gd.setAttribute('aria-label', 'All pieces. Swipe, drag or use the arrow keys to browse; tap a piece for its name and price.');
    root.insertBefore(gd, root.querySelector('.q3-top'));
    root.querySelector('.q3-va').addEventListener('click', function () { if (GR.on) gClose(); else gOpen(); });
    root.querySelector('.q3-gb').addEventListener('click', gClose);
    gDrag();
    var lw = innerWidth;
    addEventListener('resize', function () { if (GR.on && innerWidth !== lw) { lw = innerWidth; gLayout(); } else lw = innerWidth; });
    addEventListener('hashchange', function () {
      var m = {}; location.hash.replace(/^#/, '').split('&').forEach(function (kv) { var p = kv.split('='); if (p[0]) m[p[0]] = decodeURIComponent(p[1] || ''); });
      if (m.side === 'lp' || m.side === 'dn') setSide(m.side); else if ('all' in m || 'w' in m) setSide('');
      if ('all' in m || m.w === 'grid') { gOpen(1); return; }
      if (m.w) { if (GR.on) gClose(); var z = zone(m.w === 'fit' ? 'all' : m.w === 'front' ? 'tees' : m.w); if (z) { try { history.replaceState(history.state, '', location.pathname + location.search + '#w=' + z.k + sideHash()); } catch (e) {} goK(z.k); } }
    });
    var rt = null; try { rt = JSON.parse(sessionStorage.getItem('q3-ret') || 'null'); } catch (e) {}
    if (/^#(all|w=grid)(&|$)/.test(location.hash) || /[?&]view=all(&|$)/.test(location.search)) gOpen();
    else if (!location.hash && rt && rt.g && /\/products\//.test(document.referrer || '')) gOpen(1);
  }
  /* ===== quick view (Nov 15 2026, Justin): tapping a piece opens a product card OVER the store instead of leaving it.
     The card renders at once from the store's own data (cutout, name, colour, price, sizes). The real product page loads in a hidden
     same-origin iframe; from it the card takes the live photos, sizes (sold-out ones greyed), the short description and the size chart,
     and Add to Cart drives that page's own size select and Add to Cart button, so the theme's real cart is used (no API, no token).
     Cart count in the header is updated from the iframe's count. If anything fails (iframe blocked, no button, no confirmation in 10 s)
     the card offers the full product page instead. Cmd/Ctrl/Shift-click still opens the product page. Phone: bottom sheet; desktop:
     centred card. Esc, the X, the backdrop and the phone Back button close it. ===== */
  var QVCSS = '.q3-qv{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:flex-end;justify-content:center;font-family:inherit;-webkit-font-smoothing:antialiased;color:#0b0b0b}' +
    '.q3-qv *{box-sizing:border-box}' +
    '.q3-qv-bd{position:absolute;inset:0;background:rgba(11,11,11,.46);opacity:0;transition:opacity .28s ease}' +
    '.q3-qv.q3-in .q3-qv-bd{opacity:1}' +
    '.q3-qv-c{position:relative;width:100%;max-height:92vh;max-height:92svh;overflow-y:auto;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;background:#F4F3F0;border-radius:18px 18px 0 0;transform:translateY(100%);transition:transform .34s cubic-bezier(.2,.8,.2,1);padding:0 0 calc(18px + env(safe-area-inset-bottom))}' +
    '.q3-qv.q3-in .q3-qv-c{transform:none}' +
    '.q3-qv.q3-rmq .q3-qv-c,.q3-qv.q3-rmq .q3-qv-bd{transition:none}' +
    '.q3-qv-grab{display:block;width:38px;height:4px;border-radius:2px;background:rgba(11,11,11,.18);margin:9px auto 0}' +
    '.q3-qv-x{position:absolute;top:8px;right:8px;z-index:3;width:44px;height:44px;display:flex;align-items:center;justify-content:center;border:0!important;background:transparent!important;color:#0b0b0b!important;cursor:pointer;padding:0!important;margin:0!important;border-radius:50%!important;box-shadow:none!important}' +
    '.q3-qv-x svg{width:18px;height:18px}' +
    '.q3-qv-x:focus-visible,.q3-qv button:focus-visible,.q3-qv a:focus-visible{outline:1px solid #6E0B22;outline-offset:3px}' +
    '.q3-qv-g{position:relative;margin:6px 0 0}' +
    '.q3-qv-gs{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;-webkit-overflow-scrolling:touch}' +
    '.q3-qv-gs::-webkit-scrollbar{display:none}' +
    '.q3-qv-gs>div{flex:0 0 100%;scroll-snap-align:center;aspect-ratio:1/1;display:flex;align-items:center;justify-content:center;padding:18px 28px}' +
    '.q3-qv-gs img{display:block;max-width:100%!important;max-height:100%!important;width:auto!important;height:auto!important;object-fit:contain;margin:0!important}' +
    '.q3-qv-dt{display:flex;justify-content:center;gap:2px;height:22px;align-items:center;margin:0}' +
    '.q3-qv-dt button{width:22px;height:22px;padding:0!important;margin:0!important;border:0!important;background:transparent!important;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:none!important}' +
    '.q3-qv-dt button:after{content:"";width:5px;height:5px;border-radius:50%;background:rgba(11,11,11,.22)}' +
    '.q3-qv-dt button.q3-on:after{background:#6E0B22}' +
    '.q3-qv-i{padding:14px 22px 6px}' +
    '.q3-qv-sd{display:block;font-size:10px!important;letter-spacing:.24em!important;text-transform:uppercase!important;color:#6E0B22!important;margin:0 0 8px!important}' +
    '.q3-qv h2{margin:0!important;padding:0!important;font-family:inherit!important;font-weight:400!important;font-size:14px!important;line-height:1.45!important;letter-spacing:.2em!important;text-transform:uppercase!important;color:#0b0b0b!important}' +
    '.q3-qv-cp{margin:5px 0 0!important;font-size:12px!important;letter-spacing:.14em!important;text-transform:uppercase!important;color:rgba(11,11,11,.6)!important}' +
    '.q3-qv-cp b{font-weight:400!important;color:#0b0b0b!important}' +
    '.q3-qv-ds{margin:14px 0 0!important;font-size:14px!important;line-height:1.55!important;color:rgba(11,11,11,.78)!important;letter-spacing:0!important;text-transform:none!important}' +
    '.q3-qv-sz{margin:20px 0 0}' +
    '.q3-qv-sh{display:flex;justify-content:space-between;align-items:baseline;margin:0 0 10px}' +
    '.q3-qv-sh span,.q3-qv-sh a{font-size:10.5px!important;letter-spacing:.22em!important;text-transform:uppercase!important;color:#0b0b0b!important}' +
    '.q3-qv-sh a{color:rgba(11,11,11,.6)!important;text-decoration:underline!important;text-underline-offset:3px}' +
    '.q3-qv-ch{display:flex;flex-wrap:wrap;gap:8px}' +
    '.q3-qv-ch button{min-width:52px;height:44px;padding:0 12px!important;margin:0!important;border:1px solid rgba(11,11,11,.22)!important;border-radius:0!important;background:transparent!important;color:#0b0b0b!important;font-family:inherit!important;font-size:12px!important;letter-spacing:.1em!important;cursor:pointer;box-shadow:none!important;transition:border-color .15s,background .15s,color .15s}' +
    '.q3-qv-ch button.q3-on{border-color:#0b0b0b!important;background:#0b0b0b!important;color:#F4F3F0!important}' +
    '.q3-qv-ch button[disabled]{color:rgba(11,11,11,.3)!important;border-color:rgba(11,11,11,.1)!important;text-decoration:line-through;cursor:default}' +
    '.q3-qv-one{font-size:12px!important;letter-spacing:.14em!important;text-transform:uppercase!important;color:rgba(11,11,11,.6)!important}' +
    '.q3-qv-ld{display:inline-block;width:150px;height:44px;background:linear-gradient(90deg,rgba(11,11,11,.05),rgba(11,11,11,.1),rgba(11,11,11,.05));background-size:200% 100%;animation:q3qvsh 1.2s linear infinite}' +
    '@keyframes q3qvsh{to{background-position:-200% 0}}' +
    '.q3-qv-add{display:flex;align-items:center;justify-content:center;width:100%;height:54px;margin:22px 0 0!important;padding:0 16px!important;border:0!important;border-radius:0!important;background:#0b0b0b!important;color:#F4F3F0!important;font-family:inherit!important;font-size:12px!important;letter-spacing:.24em!important;text-transform:uppercase!important;cursor:pointer;text-decoration:none!important;box-shadow:none!important;transition:background .2s}' +
    '.q3-qv-add[aria-disabled="true"]{background:rgba(11,11,11,.32)!important;cursor:default}' +
    '.q3-qv-add.q3-ok{background:#6E0B22!important}' +
    '.q3-qv-msg{margin:10px 0 0!important;min-height:18px;font-size:12px!important;line-height:1.5!important;color:#6E0B22!important;text-align:center}' +
    '.q3-qv-nx{display:none;gap:10px;margin:12px 0 0}' +
    '.q3-qv-nx.q3-on{display:flex}' +
    '.q3-qv-nx a,.q3-qv-nx button{flex:1;display:flex;align-items:center;justify-content:center;height:48px;margin:0!important;padding:0 10px!important;border:1px solid #0b0b0b!important;border-radius:0!important;background:transparent!important;color:#0b0b0b!important;font-family:inherit!important;font-size:11px!important;letter-spacing:.2em!important;text-transform:uppercase!important;text-decoration:none!important;cursor:pointer;box-shadow:none!important}' +
    '.q3-qv-nx a{background:#0b0b0b!important;color:#F4F3F0!important}' +
    '.q3-qv-fl{display:block;margin:20px 0 4px!important;text-align:center;font-size:10.5px!important;letter-spacing:.22em!important;text-transform:uppercase!important;color:rgba(11,11,11,.6)!important;text-decoration:none!important}' +
    '@media (hover:hover){.q3-qv-fl:hover,.q3-qv-sh a:hover{color:#0b0b0b!important}.q3-qv-ch button:not([disabled]):not(.q3-on):hover{border-color:#0b0b0b!important}}' +
    'html.q3-qv-lock,html.q3-qv-lock body{overflow:hidden!important}' +
    '.q3-qv-f{position:fixed!important;left:-10000px!important;top:0!important;width:420px!important;height:900px!important;opacity:0!important;pointer-events:none!important;border:0!important}' +
    '@media (min-width:750px){.q3-qv{align-items:center;padding:24px}' +
      '.q3-qv-c{max-width:940px;max-height:88vh;border-radius:4px;transform:translateY(14px) scale(.985);opacity:0;transition:transform .3s cubic-bezier(.2,.8,.2,1),opacity .25s ease;display:grid;grid-template-columns:minmax(0,1.08fr) minmax(0,1fr);padding:0}' +
      '.q3-qv.q3-in .q3-qv-c{opacity:1}' +
      '.q3-qv-grab{display:none}' +
      '.q3-qv-g{margin:0;background:#ECEAE6;display:flex;flex-direction:column;justify-content:center}' +
      '.q3-qv-gs>div{aspect-ratio:4/5;padding:32px}' +
      '.q3-qv-dt{position:absolute;left:0;right:0;bottom:12px}' +
      '.q3-qv-i{padding:46px 40px 30px;align-self:center}' +
      '.q3-qv h2{font-size:15px!important}}';
  var QV = null;
  function qvSlug(href) { var m = String(href || '').match(/\/products\/([a-z0-9-]+)/); return m ? m[1] : ''; }
  function qvInfo(slug, it) {   /* what the store already knows about the piece: shown at once, before the product page loads */
    var o = { s: slug, n: '', c: '', p: '', src: '', z: null, side: MS[slug] || '' };
    if (it) { o.n = it.n || ''; o.c = it.c || ''; o.p = it.p || ''; o.src = it.src || ''; }
    Object.keys(D).forEach(function (id) { var d = D[id]; if ((d.u || id) !== slug) return;
      o.n = o.n || d.n; o.c = o.c || d.c; o.p = o.p || ('$' + d.p); if (d.z && d.z.length) o.z = d.z.slice();
      if (d.v) { var sold = {}; d.v.forEach(function (v) { if (!v[4]) sold[v[2]] = 1; }); o.so = sold; } });
    if (!o.src && GK[slug]) o.src = GK[slug].src;
    return o;
  }
  function qvOpen(href, it) {
    var slug = qvSlug(href); if (!slug) { location.href = href; return; }
    if (QV) qvClose(1);
    if (!document.getElementById('q3-qvcss')) { var st = document.createElement('style'); st.id = 'q3-qvcss'; st.textContent = QVCSS; document.head.appendChild(st); }
    var I = qvInfo(slug, it), full = SHOP + slug + '?from=360&w=' + ((front && front.z && front.z.k) || 'all');
    var el = document.createElement('div'); el.className = 'q3-qv' + (RM ? ' q3-rmq' : '');
    el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true'); el.setAttribute('aria-labelledby', 'q3-qv-h');
    el.innerHTML = '<div class="q3-qv-bd"></div><div class="q3-qv-c" tabindex="-1"><span class="q3-qv-grab" aria-hidden="true"></span>' +
      '<button type="button" class="q3-qv-x" aria-label="Close"><svg viewBox="0 0 18 18" aria-hidden="true"><path d="M2 2l14 14M16 2L2 16" stroke="currentColor" stroke-width="1.3" fill="none"/></svg></button>' +
      '<div class="q3-qv-g"><div class="q3-qv-gs">' + (I.src ? '<div><img alt="' + esc(I.n + (I.c ? ' ' + I.c : '')) + '" src="' + esc(I.src) + '"></div>' : '<div></div>') + '</div><div class="q3-qv-dt"></div></div>' +
      '<div class="q3-qv-i">' + (I.side ? '<span class="q3-qv-sd">' + esc(SIDEN[I.side]) + '</span>' : '') +
        '<h2 id="q3-qv-h">' + esc(I.n || slug.replace(/-/g, ' ')) + '</h2>' +
        '<p class="q3-qv-cp">' + (I.c ? esc(I.c) + ' &nbsp;&middot;&nbsp; ' : '') + '<b class="q3-qv-pr">' + esc(I.p) + '</b></p>' +
        '<p class="q3-qv-ds" hidden></p>' +
        '<div class="q3-qv-sz"><div class="q3-qv-sh"><span>Size</span><a class="q3-qv-sc" target="_blank" rel="noopener" hidden>Size chart</a></div><div class="q3-qv-ch"></div></div>' +
        '<button type="button" class="q3-qv-add" aria-disabled="true">Select a size</button>' +
        '<p class="q3-qv-msg" role="status" aria-live="polite"></p>' +
        '<div class="q3-qv-nx"><button type="button" class="q3-qv-ks">Keep shopping</button><a href="/cart">View cart</a></div>' +
        '<a class="q3-qv-fl" href="' + esc(full) + '">Full details &rarr;</a></div></div>';
    document.body.appendChild(el);
    var Q = function (s) { return el.querySelector(s); };
    QV = { el: el, slug: slug, I: I, full: full, size: '', sizes: null, ready: 0, fail: 0, busy: 0, f: null, back: document.activeElement, pushed: 0 };
    document.documentElement.classList.add('q3-qv-lock');
    qvSizes(I.z ? I.z.map(function (z) { return [z, !(I.so && I.so[z])]; }) : null);
    Q('.q3-qv-bd').addEventListener('click', function () { qvClose(); });
    Q('.q3-qv-x').addEventListener('click', function () { qvClose(); });
    Q('.q3-qv-ks').addEventListener('click', function () { qvClose(); });
    Q('.q3-qv-add').addEventListener('click', qvAdd);
    Q('.q3-qv-fl').addEventListener('click', function () { remember(full); });
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { e.preventDefault(); qvClose(); return; }
      if (e.key !== 'Tab') return;   /* keep focus inside the card */
      var fs = [].filter.call(el.querySelectorAll('button:not([disabled]),a[href]'), function (x) { return x.offsetParent !== null; });
      if (!fs.length) return; var a = fs[0], b = fs[fs.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); b.focus(); } else if (!e.shiftKey && document.activeElement === b) { e.preventDefault(); a.focus(); }
    });
    var gs = Q('.q3-qv-gs'); gs.addEventListener('scroll', function () { qvDots(); }, { passive: true });
    try { history.pushState({ q3qv: 1 }, ''); QV.pushed = 1; } catch (e) {}
    requestAnimationFrame(function () { requestAnimationFrame(function () { el.classList.add('q3-in'); try { Q('.q3-qv-x').focus({ preventScroll: true }); } catch (e) {} }); });
    qvFrame();
  }
  function qvClose(silent) {
    if (!QV) return; var q = QV; QV = null;
    document.documentElement.classList.remove('q3-qv-lock');
    if (q.f && q.f.parentNode) q.f.parentNode.removeChild(q.f);
    if (q.pushed && !silent && history.state && history.state.q3qv) { try { history.back(); } catch (e) {} }
    var el = q.el; el.classList.remove('q3-in');
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, RM ? 0 : 340);
    try { if (q.back && q.back.focus) q.back.focus({ preventScroll: true }); } catch (e) {}
  }
  window.addEventListener('popstate', function () { if (QV) qvClose(1); });
  function qvSizes(list) {   /* list: [[label, available], ...] or null while loading */
    if (!QV) return; var box = QV.el.querySelector('.q3-qv-ch'), sz = QV.el.querySelector('.q3-qv-sz');
    if (!list) { box.innerHTML = '<span class="q3-qv-ld" aria-hidden="true"></span>'; return; }
    QV.sizes = list;
    if (list.length <= 1) {   /* one size (hats, bags, blankets): nothing to pick */
      QV.size = list.length ? list[0][0] : '-';
      sz.querySelector('.q3-qv-sh span').textContent = 'Size';
      box.innerHTML = '<span class="q3-qv-one">' + esc(list.length ? list[0][0] : 'One size') + '</span>';
    } else {
      if (QV.size && !list.some(function (s) { return s[0] === QV.size && s[1]; })) QV.size = '';
      box.innerHTML = list.map(function (s) { return '<button type="button" data-z="' + esc(s[0]) + '"' + (s[1] ? '' : ' disabled aria-label="' + esc(s[0]) + ', sold out"') +
        (QV.size === s[0] ? ' class="q3-on" aria-pressed="true"' : ' aria-pressed="false"') + '>' + esc(s[0]) + '</button>'; }).join('');
      [].forEach.call(box.querySelectorAll('button'), function (b) { b.addEventListener('click', function () {
        QV.size = b.getAttribute('data-z');
        [].forEach.call(box.querySelectorAll('button'), function (x) { var on = x === b; x.classList.toggle('q3-on', on); x.setAttribute('aria-pressed', on ? 'true' : 'false'); });
        qvBtn(); }); });
    }
    qvBtn();
  }
  function qvBtn(state) {
    if (!QV) return; var b = QV.el.querySelector('.q3-qv-add'), pr = QV.el.querySelector('.q3-qv-pr').textContent;
    b.classList.remove('q3-ok');
    if (state === 'busy') { b.textContent = 'Adding…'; b.setAttribute('aria-disabled', 'true'); return; }
    if (state === 'ok') { b.textContent = 'Added to cart ✓'; b.classList.add('q3-ok'); b.setAttribute('aria-disabled', 'false'); return; }
    if (QV.fail) { b.textContent = 'Add on the full page'; b.setAttribute('aria-disabled', 'false'); return; }
    if (QV.sizes && !QV.size) { b.textContent = 'Select a size'; b.setAttribute('aria-disabled', 'true'); return; }
    if (!QV.sizes) { b.textContent = 'Add to cart' + (pr ? ' · ' + pr : ''); b.setAttribute('aria-disabled', 'true'); return; }
    b.textContent = 'Add to cart' + (pr ? ' · ' + pr : ''); b.setAttribute('aria-disabled', 'false');
  }
  function qvDots() {
    if (!QV) return; var gs = QV.el.querySelector('.q3-qv-gs'), dt = QV.el.querySelector('.q3-qv-dt'), n = gs.children.length;
    if (n < 2) { dt.innerHTML = ''; return; }
    var i = Math.round(gs.scrollLeft / Math.max(1, gs.clientWidth));
    if (dt.children.length !== n) {
      dt.innerHTML = ''; for (var k = 0; k < n; k++) { var b = document.createElement('button'); b.type = 'button'; b.setAttribute('aria-label', 'Photo ' + (k + 1) + ' of ' + n);
        (function (k) { b.addEventListener('click', function () { gs.scrollTo({ left: k * gs.clientWidth, behavior: RM ? 'auto' : 'smooth' }); }); })(k); dt.appendChild(b); }
    }
    [].forEach.call(dt.children, function (b, k) { b.classList.toggle('q3-on', k === i); });
  }
  /* ---- the hidden product page ---- */
  function qvFrame() {
    var q = QV, f = document.createElement('iframe'); f.className = 'q3-qv-f'; f.setAttribute('aria-hidden', 'true'); f.tabIndex = -1; f.title = '';
    f.src = '/products/' + q.slug + '?qv=1'; q.f = f; document.body.appendChild(f);
    var t0 = Date.now();
    var poll = function () {
      if (QV !== q) return;
      var doc = null; try { doc = f.contentDocument; } catch (e) {}
      if (!doc) return qvFail(q);   /* the page refused to load inside the store */
      var h1 = doc.querySelector('main h1, h1'), btn = qvBtnIn(doc);
      if (h1 && btn) return qvRead(q, doc);
      if (Date.now() - t0 > 12000) return qvFail(q);
      setTimeout(poll, 150);
    };
    f.addEventListener('load', function () { setTimeout(poll, 60); });
    setTimeout(function () { if (QV === q && !q.ready && !q.fail) poll(); }, 2500);
  }
  function qvBtnIn(doc) { var bs = doc.querySelectorAll('button'); for (var i = 0; i < bs.length; i++) if (/^add to cart$/i.test((bs[i].textContent || '').trim())) return bs[i]; return null; }
  function qvSelIn(doc) {
    var ss = doc.querySelectorAll('main select, select');
    for (var i = 0; i < ss.length; i++) { var s = ss[i]; if (s.options.length && /size/i.test((s.options[0].text || '') + ' ' + (s.getAttribute('aria-label') || '') + ' ' + (s.name || ''))) return s; }
    return ss.length === 1 ? ss[0] : null;
  }
  /* some product pages pick the size with buttons (radio inputs) instead of a dropdown */
  function qvRadIn(doc) {
    var main = doc.querySelector('main') || doc.body, h1 = doc.querySelector('main h1, h1'), g = {}, order = [];
    [].forEach.call(main.querySelectorAll('input[type=radio]'), function (r) {
      if (h1 && !(h1.compareDocumentPosition(r) & 4)) return;
      var k = r.name || '_'; if (!g[k]) { g[k] = []; order.push(k); } g[k].push(r);
    });
    var SZ = /^(xxs|xs|s|m|l|xl|xxl|xxxl|[2-6]xl|one size|os|\d{1,2}(\.\d)?)$/i, best = null, bn = -1;
    order.forEach(function (k) { var n = g[k].filter(function (r) { return SZ.test(qvRadLabel(doc, r)); }).length; if (n > bn) { bn = n; best = g[k]; } });
    return best;
  }
  function qvRadLabel(doc, r) {
    var t = r.getAttribute('aria-label') || '';
    if (!t && r.id) { var l = doc.querySelector('label[for="' + r.id.replace(/"/g, '') + '"]'); if (l) t = l.textContent; }
    if (!t) { var c = r.closest('label'); if (c) t = c.textContent; }
    if (!t && r.nextElementSibling) t = r.nextElementSibling.textContent;
    if (!t && r.parentNode) t = r.parentNode.textContent;
    return (t || r.value || '').replace(/\s+/g, ' ').trim();
  }
  function qvCount(doc) { var a = doc.querySelector('a[href="/cart"], a[href$="/cart"]'); var m = a && (a.textContent || '').match(/\((\d+)\)/); return m ? +m[1] : -1; }
  function qvRead(q, doc) {
    q.ready = 1; q.doc = doc;
    var sel = qvSelIn(doc), list = [];
    if (sel) [].forEach.call(sel.options, function (o, i) { var t = (o.text || '').trim(); if (!t || (i === 0 && (o.disabled || !o.value) && /select/i.test(t))) return;
      list.push([t.replace(/\s*[-–—]\s*sold out.*$/i, ''), !o.disabled && !/sold out/i.test(t), o.value]); });
    var rad = sel ? null : qvRadIn(doc);
    if (rad) rad.forEach(function (r) { var t = qvRadLabel(doc, r); if (!t) return; list.push([t.replace(/\s*[-–—]\s*sold out.*$/i, ''), !r.disabled && !/sold out/i.test(t), r]); });
    /* the page shows no size control we understand, but the piece comes in sizes: send them to the full page rather than guess */
    if (!list.length && q.I.z && q.I.z.length > 1) { q.ready = 0; return qvFail(q); }
    q.sel = sel; q.rad = rad; q.opt = {}; list.forEach(function (s) { q.opt[s[0]] = s[2]; });
    qvSizes(list.map(function (s) { return [s[0], s[1]]; }));
    var h1 = doc.querySelector('main h1, h1'), main = doc.querySelector('main') || doc.body;
    /* price: the first $-only line after the title */
    var w = doc.createTreeWalker(main, 4), n, pr = '';
    while ((n = w.nextNode())) { if (h1.compareDocumentPosition(n) & 4) { var tx = n.nodeValue.trim(); if (/^\$\d[\d,.]*$/.test(tx)) { pr = tx.replace(/\.00$/, ''); break; } } }
    if (pr) { q.el.querySelector('.q3-qv-pr').textContent = pr; qvBtn(); }
    /* short description: first real paragraph after the title */
    var ps = main.querySelectorAll('p');
    for (var i = 0; i < ps.length; i++) { var p = ps[i]; if (!(h1.compareDocumentPosition(p) & 4)) continue; var t = (p.textContent || '').trim();
      if (t.length > 30 && !/free shipping|select size|size guide|promotion/i.test(t)) { var d = q.el.querySelector('.q3-qv-ds'); d.textContent = t; d.hidden = false; break; } }
    /* size chart */
    var as = main.querySelectorAll('a[href]');
    for (var j = 0; j < as.length; j++) if (/size chart/i.test(as[j].textContent || '')) { var sc = q.el.querySelector('.q3-qv-sc'); sc.href = as[j].href; sc.hidden = false; break; }
    /* photos: the product carousel's large images (thumbnails are narrower than 200 px inside the 420 px page) */
    var seen = {}, srcs = [];
    [].forEach.call(main.querySelectorAll('img'), function (im) {
      if (!(im.compareDocumentPosition(h1) & 4)) return;   /* only images before the title (the gallery) */
      var r = im.getBoundingClientRect(); if (r.width && r.width < 200) return;
      var s = im.currentSrc || im.getAttribute('src') || im.getAttribute('data-src') || '';
      if (!s && im.srcset) { var c = im.srcset.split(',').pop().trim().split(' ')[0]; s = c; }
      if (!s || /^data:/.test(s)) return; var k = s.split('?')[0]; if (seen[k]) return; seen[k] = 1; srcs.push(s);
    });
    if (srcs.length) {
      var gs = q.el.querySelector('.q3-qv-gs'), alt = esc(q.I.n + (q.I.c ? ' ' + q.I.c : ''));
      gs.innerHTML = (q.I.src ? '<div><img alt="' + alt + '" src="' + esc(q.I.src) + '"></div>' : '') +
        srcs.slice(0, 6).map(function (s, k) { return '<div><img loading="lazy" decoding="async" alt="' + alt + ', photo ' + (k + 1) + '" src="' + esc(s) + '"></div>'; }).join('');
      qvDots();
    }
    if (q.want) qvAdd();
  }
  function qvFail(q, force) { if (QV !== q || (q.ready && !force)) return; q.fail = 1; if (!q.sizes) qvSizes(q.I.z ? q.I.z.map(function (z) { return [z, 1]; }) : []); qvBtn(); }
  function qvAdd() {
    var q = QV; if (!q || q.busy) return;
    var b = q.el.querySelector('.q3-qv-add'), msg = q.el.querySelector('.q3-qv-msg');
    if (q.fail) { remember(q.full); location.href = q.full; return; }
    if (b.classList.contains('q3-ok')) { q.el.querySelector('.q3-qv-nx a').focus(); return; }
    if (q.sizes && !q.size) { msg.textContent = 'Pick a size first.'; return; }
    if (!q.ready) { q.want = 1; qvBtn('busy'); return; }   /* page still loading: add as soon as it is ready */
    q.want = 0; msg.textContent = '';
    var doc = q.doc, win = q.f.contentWindow, btn = qvBtnIn(doc);
    if (!btn) { msg.textContent = 'That didn’t go through here. Add it on the full page.'; return qvFail(q, 1); }
    try {
      if (q.sel && q.sizes && q.sizes.length > 1) {
        var v = q.opt[q.size]; var set = Object.getOwnPropertyDescriptor(win.HTMLSelectElement.prototype, 'value').set; set.call(q.sel, v);
        q.sel.dispatchEvent(new win.Event('input', { bubbles: true })); q.sel.dispatchEvent(new win.Event('change', { bubbles: true }));
      } else if (q.rad && q.sizes && q.sizes.length > 1) {
        var r = q.opt[q.size]; if (!r) { msg.textContent = 'That didn’t go through here. Add it on the full page.'; return qvFail(q, 1); }
        r.click();
        if (!r.checked) { Object.getOwnPropertyDescriptor(win.HTMLInputElement.prototype, 'checked').set.call(r, true);
          r.dispatchEvent(new win.Event('input', { bubbles: true })); r.dispatchEvent(new win.Event('change', { bubbles: true })); }
        if (!r.checked) { msg.textContent = 'That didn’t go through here. Add it on the full page.'; return qvFail(q, 1); }
      }
    } catch (e) { { msg.textContent = 'That didn’t go through here. Add it on the full page.'; return qvFail(q, 1); } }
    q.busy = 1; qvBtn('busy');
    var c0 = qvCount(doc), sub0 = qvSub(doc), t0 = Date.now();
    setTimeout(function () { try { qvBtnIn(doc).click(); } catch (e) {} }, 120);
    var wait = function () {
      if (QV !== q) return;
      var c = qvCount(doc), sub = qvSub(doc);
      if ((c0 > -1 && c > c0) || (sub && sub !== sub0)) {
        q.busy = 0; qvBtn('ok'); msg.textContent = (q.sizes && q.sizes.length > 1 ? 'Size ' + q.size + ' added.' : 'Added.') + (c > 0 ? ' ' + c + (c === 1 ? ' item' : ' items') + ' in your cart.' : '');
        q.el.querySelector('.q3-qv-nx').classList.add('q3-on'); qvHeaderCount(c); return;
      }
      if (Date.now() - t0 > 10000) { q.busy = 0; q.fail = 1; qvBtn(); msg.textContent = 'That didn’t go through here. Add it on the full page.'; return; }
      setTimeout(wait, 150);
    };
    setTimeout(wait, 300);
  }
  function qvSub(doc) { var all = doc.querySelectorAll('*'); for (var i = all.length - 1; i >= 0; i--) { var t = all[i].childElementCount ? '' : (all[i].textContent || ''); if (/^\s*\$\d/.test(t) && all[i].parentNode && /subtotal/i.test(all[i].parentNode.textContent || '')) return t.trim(); } return ''; }
  function qvHeaderCount(c) {
    if (!(c > -1)) return;
    [].forEach.call(document.querySelectorAll('a[href="/cart"], a[href$="/cart"]'), function (a) {
      var w = document.createTreeWalker(a, 4), n; while ((n = w.nextNode())) if (/\(\d+\)/.test(n.nodeValue)) n.nodeValue = n.nodeValue.replace(/\(\d+\)/, '(' + c + ')');
    });
  }
  window.QSStore360 = {
    qv: function (slug) { if (slug) qvOpen(SHOP + slug); return QV ? { slug: QV.slug, ready: !!QV.ready, fail: !!QV.fail, sizes: QV.sizes } : null; }, qvClose: function () { qvClose(); },
    side: function (v) { if (v !== undefined) setSide(v, 1); return SIDE; }, sideLive: function () { return !!window.__q3SideLive; },
    grid: { open: function () { gOpen(); }, close: gClose, on: function () { return !!GR.on; }, off: function () { return GR.off; }, set: function (o) { GR.anim = null; GR.v = 0; GR.off = o; gRender(); }, n: function () { return GR.n; }, sel: function () { return GR.sel && GR.sel.s; } },
    turn: function (a) { anim = null; yaw = norm(a); render(); }, go: goK, step: step, hint: function () {},
    zones: function () { return ZONES.map(function (z) { return [z.k, z.items[0].a]; }); },
    items: function () { return ITEMS.map(function (it) { return [it.id, it.a, it.z.k]; }); },
    yaw: function () { return yaw; }, busy: function () { return !!anim || dragging; }, front: function () { return front && front.id; },
    count: function () { var s = {}; [].forEach.call(root.querySelectorAll('.q3-it'), function (a) { s[a.getAttribute('data-id')] = 1; }); return Object.keys(s).length; } };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount); else mount();
})();
