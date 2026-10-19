/* Quality Stoner · Walk the Store (Street-View stations). Self-contained: injects scoped CSS + markup into
   <div id="qs-store"></div> (or [data-qs-store]); images load from ./img/ next to this file.
   Source: site-build/store/qs-store.src.js, built by site-build/store/build.py (data from live JSON-LD scrape). */
(function () {
  if (window.__qssLoaded) return; window.__qssLoaded = 1;
  var me = document.currentScript, SRC = me && me.src ? me.src : '';
  var IMG = SRC.replace(/[^\/?#]*([?#].*)?$/, '') + 'img/';
  var D = {"damask-crew-burgundy":{"s":"dn","n":"Damask Crew","c":"Burgundy","p":"54.95","z":["2XS","XS","S","M","L","XL","2XL","3XL","4XL","5XL","6XL"],"g":["damask-crew-burgundy_0.webp","damask-crew-burgundy_1.webp","damask-crew-burgundy_2.webp"],"hi":true},"damask-crossbody-burgundy":{"s":"dn","n":"Damask Crossbody","c":"Burgundy","p":"55","z":["One size"],"g":["damask-crossbody-burgundy_0.webp","damask-crossbody-burgundy_1.webp"],"hi":false},"embroidered-qs-crew-black":{"s":"dn","n":"Embroidered QS Crew","c":"Black","p":"54.95","z":["S","M","L","XL","2XL","3XL"],"g":["embroidered-qs-crew-black_0.webp","embroidered-qs-crew-black_1.webp","embroidered-qs-crew-black_2.webp"],"hi":true},"signet-hoodie-burgundy":{"s":"dn","n":"Signet Hoodie","c":"Burgundy","p":"62","z":["2XS","XS","S","M","L","XL","2XL","3XL","4XL","5XL","6XL"],"g":["signet-hoodie-burgundy_0.webp","signet-hoodie-burgundy_1.webp","signet-hoodie-burgundy_2.webp"],"hi":true},"signet-joggers-burgundy":{"s":"dn","n":"Signet Joggers","c":"Burgundy","p":"49","z":["XS","S","M","L","XL","2XL","3XL"],"g":["signet-joggers-burgundy_0.webp","signet-joggers-burgundy_1.webp"],"hi":true},"signet-tee-burgundy":{"s":"dn","n":"Signet Tee","c":"Burgundy","p":"34.99","z":["XS","S","M","L","XL","2XL"],"g":["signet-tee-burgundy_0.webp","signet-tee-burgundy_1.webp"],"hi":true},"lockup-back-tee-off-white":{"s":"lp","n":"Lockup Back Tee","c":"Off-White","p":"34","z":["S","M","L","XL","2XL","3XL"],"g":["lockup-back-tee-off-white_0.webp","lockup-back-tee-off-white_1.webp","lockup-back-tee-off-white_2.webp"],"hi":true},"lockup-hoodie-black":{"s":"lp","n":"Lockup Hoodie","c":"Black","p":"68","z":["S","M","L","XL","2XL","3XL"],"g":["lockup-hoodie-black_1.webp","lockup-hoodie-black_0.webp","lockup-hoodie-black_2.webp"],"hi":true},"maison-monogram-backpack-black":{"s":"dn","n":"Maison Monogram Backpack","c":"Black","p":"54","z":["One size"],"g":["maison-monogram-backpack-black_0.webp","maison-monogram-backpack-black_1.webp","maison-monogram-backpack-black_2.webp"],"hi":false},"maison-monogram-tee-black":{"s":"dn","n":"Maison Monogram Tee","c":"Black","p":"45","z":["XS","S","M","L","XL","2XL"],"g":["maison-monogram-tee-black_0.webp","maison-monogram-tee-black_1.webp"],"hi":true},"maison-monogram-tee-white":{"s":"dn","n":"Maison Monogram Tee","c":"White","p":"45","z":["XS","S","M","L","XL","2XL"],"g":["maison-monogram-tee-white_0.webp","maison-monogram-tee-white_1.webp"],"hi":true},"qs-cuff-beanie-burgundy":{"s":"dn","n":"QS Cuff Beanie","c":"Burgundy","p":"29.95","z":["One size"],"g":["qs-cuff-beanie-burgundy_0.webp","qs-cuff-beanie-burgundy_1.webp"],"hi":false},"qs-lp-bp04-backpack-black":{"s":"lp","n":"Backpack","c":"Black","p":"54","z":["One size"],"g":["qs-lp-bp04-backpack-black_0.webp","qs-lp-bp04-backpack-black_1.webp"],"hi":false},"qs-lp-bp05-backpack-white":{"s":"lp","n":"Backpack","c":"White","p":"54","z":["One size"],"g":["qs-lp-bp05-backpack-white_0.webp","qs-lp-bp05-backpack-white_1.webp","qs-lp-bp05-backpack-white_2.webp"],"hi":false},"qs-snapback-black":{"s":"dn","n":"QS Snapback","c":"Black","p":"34.95","z":["One size"],"g":["qs-snapback-black_0.webp"],"hi":false},"qs-snapback-burgundy":{"s":"dn","n":"QS Snapback","c":"Burgundy","p":"34.95","z":["One size"],"g":["qs-snapback-burgundy_0.webp"],"hi":false},"scattered-monogram-backpack-white":{"s":"dn","n":"Scattered Monogram Backpack","c":"White","p":"54","z":["One size"],"g":["scattered-monogram-backpack-white_0.webp","scattered-monogram-backpack-white_1.webp","scattered-monogram-backpack-white_2.webp"],"hi":false},"scattered-monogram-hoodie-white":{"s":"dn","n":"Scattered Monogram Hoodie","c":"White","p":"68","z":["2XS","XS","S","M","L","XL","2XL","3XL","4XL","5XL","6XL"],"g":["scattered-monogram-hoodie-white_0.webp","scattered-monogram-hoodie-white_1.webp","scattered-monogram-hoodie-white_2.webp"],"hi":true},"seal-crew-burgundy":{"s":"lp","n":"Seal Crew","c":"Burgundy","p":"54.95","z":["S","M","L","XL","2XL"],"g":["seal-crew-burgundy_0.webp","seal-crew-burgundy_1.webp","seal-crew-burgundy_2.webp"],"hi":true},"wordmark-crew-white":{"s":"lp","n":"Wordmark Crew","c":"White","p":"54.95","z":["S","M","L","XL","2XL","3XL"],"g":["wordmark-crew-white_0.webp","wordmark-crew-white_1.webp","wordmark-crew-white_2.webp"],"hi":true},"wordmark-cuff-beanie-black":{"s":"lp","n":"Wordmark Cuff Beanie","c":"Black","p":"27.95","z":["One size"],"g":["wordmark-cuff-beanie-black_0.webp","wordmark-cuff-beanie-black_1.webp","wordmark-cuff-beanie-black_2.webp"],"hi":false},"wordmark-cuff-beanie-white":{"s":"lp","n":"Wordmark Cuff Beanie","c":"White","p":"27.95","z":["One size"],"g":["wordmark-cuff-beanie-white_0.webp","wordmark-cuff-beanie-white_1.webp","wordmark-cuff-beanie-white_2.webp"],"hi":false},"wordmark-hoodie-white":{"s":"lp","n":"Wordmark Hoodie","c":"White","p":"68","z":["S","M","L","XL","2XL","3XL"],"g":["wordmark-hoodie-white_0.webp","wordmark-hoodie-white_1.webp","wordmark-hoodie-white_2.webp"],"hi":true},"wordmark-lattice-crossbody-white":{"s":"lp","n":"Wordmark Lattice Crossbody","c":"White","p":"55","z":["One size"],"g":["wordmark-lattice-crossbody-white_0.webp","wordmark-lattice-crossbody-white_1.webp"],"hi":false},"wordmark-leg-joggers-black":{"s":"lp","n":"Wordmark Leg Joggers","c":"Black","p":"45","z":["XS","S","M","L","XL","2XL"],"g":["wordmark-leg-joggers-black_0.webp","wordmark-leg-joggers-black_1.webp"],"hi":true},"wordmark-snapback-black":{"s":"lp","n":"Wordmark Snapback","c":"Black","p":"34.95","z":["One size"],"g":["wordmark-snapback-black_0.webp"],"hi":false}};
  var SHOP = 'https://qualitystoner.com/products/';
  var LOGO = { word: IMG + 'word-white.webp', mk: IMG + 'qs-mono-white.webp', mkK: IMG + 'qs-mono-black.webp' };

  var CSS = ".qss-host{display:block;position:relative;max-width:none!important;padding:0!important;overflow:visible}.qss,.qss-cu{--qb:#6E0B22;--qow:#F4F3F0;--qg:#a3203f;--qr:#e7a9b6;font-family:inherit;-webkit-font-smoothing:antialiased;line-height:1.2;text-align:left;letter-spacing:normal;text-transform:none}.qss *,.qss-cu *{box-sizing:border-box;margin:0;padding:0;font-family:inherit}.qss a,.qss-cu a{color:inherit;text-decoration:none!important;-webkit-tap-highlight-color:transparent}.qss button,.qss-cu button{font:inherit;color:inherit;background:none;border:0;cursor:pointer;-webkit-tap-highlight-color:transparent;-webkit-appearance:none;appearance:none;min-height:0;min-width:0;box-shadow:none;text-transform:none;letter-spacing:normal;line-height:1.2;border-radius:0}.qss img,.qss-cu img{display:block;max-width:none;height:auto;-webkit-user-drag:none;user-select:none;-webkit-user-select:none;border:0}.qss b,.qss-cu b,.qss strong,.qss-cu strong{color:inherit!important;font-weight:600}.qss i,.qss-cu i{color:inherit}.qss h2,.qss-cu h2{font-family:inherit;color:inherit;letter-spacing:normal;text-transform:none}.qss{position:relative;width:100%;height:760px;overflow:hidden;background:#050507;color:#fff;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none}.qss-view{position:absolute;inset:0;overflow:hidden;background:#050507;touch-action:pan-y;cursor:grab}.qss-view:active{cursor:grabbing}.qss-st{position:absolute;inset:0;opacity:0;pointer-events:none;transition:opacity .55s ease;visibility:hidden}.qss-st.qss-on,.qss-st.qss-out{visibility:visible}.qss-st.qss-on{opacity:1;pointer-events:auto}.qss-pz{position:absolute;transform-origin:50% 50%;transition:transform .6s cubic-bezier(.3,.7,.2,1)}.qss .qss-pz>.qss-paint{position:absolute;inset:0;width:100%;height:100%;max-width:none;object-fit:cover}.qss-st.qss-out .qss-pz{transform:scale(1.32)!important}.qss-st.qss-inn .qss-pz{transform:scale(.94)}.qss-it:hover{z-index:5}.qss-it{position:absolute;display:block;padding:0;aspect-ratio:1/1;transform-origin:50% 0;cursor:pointer}.qss .qss-it img{width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 10px 12px rgba(0,0,0,.55))}.qss .qss-it.qss-dn img{filter:drop-shadow(0 8px 10px rgba(0,0,0,.25))}.qss-it.qss-bot{transform-origin:50% 100%}.qss-hook{position:absolute;width:1.5px;background:rgba(255,255,255,.4)}.qss-hot{position:absolute;right:2%;top:2%;width:20px;height:20px;border-radius:50%;background:rgba(255,255,255,.95);box-shadow:0 0 0 4px rgba(255,255,255,.28),0 2px 8px rgba(0,0,0,.5);display:grid;place-items:center;pointer-events:none}.qss-hot::after{content:\"\";width:8px;height:8px;border-radius:50%;background:var(--qb)}.qss-hot::before{content:\"\";position:absolute;inset:-4px;border-radius:50%;border:2px solid rgba(255,255,255,.7);animation:qssping 1.8s ease-out infinite}@keyframes qssping{from{transform:scale(.8);opacity:1}to{transform:scale(2);opacity:0}}.qss-tag{position:absolute;left:50%;top:calc(100% + 6px);transform:translateX(-50%);white-space:nowrap;font-size:10.5px;font-weight:600;letter-spacing:0;padding:4px 8px;border-radius:99px;pointer-events:none;line-height:1.2}.qss-tag.qss-lp{background:rgba(10,6,7,.88);color:#fff;border:1px solid rgba(194,70,95,.7)}.qss-tag.qss-dn{background:#fff;color:#111;border:1px solid #d5d4d0}.qss-tag i{font-style:normal;opacity:.7;margin-left:6px}.qss-scr{position:absolute;background:#121012;box-shadow:inset 0 0 0 2px #0a0909}.qss .qss-scr img{position:absolute;inset:0;margin:auto;width:72%;height:auto;filter:drop-shadow(0 0 2px #fff) drop-shadow(0 0 10px #a3203f) drop-shadow(0 0 22px #a3203f)}.qss .qss-scr.qss-k img{width:auto;height:60%;filter:drop-shadow(0 0 8px rgba(255,255,255,.35))}.qss-front{position:absolute}.qss .qss-front img{position:absolute;inset:0;margin:auto;width:66%;height:auto}.qss .qss-front.qss-k img{width:auto;height:62%}.qss-locked{position:absolute;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;text-align:center;border:1.5px dashed rgba(255,255,255,.35);border-radius:10px;color:#fff;background:rgba(10,8,9,.9);overflow:hidden}.qss-locked .qss-lk{width:22px;height:22px;border-radius:50%;display:grid;place-items:center;border:1.5px solid currentColor;font-size:10px}.qss-locked b{font-size:10px;letter-spacing:.2em;text-transform:uppercase;font-weight:600}.qss-locked span{font-size:10px;opacity:.75}.qss-arr{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:8px;z-index:4}.qss .qss-chev{width:86px;height:86px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.16);border:2px solid rgba(255,255,255,.9);box-shadow:0 0 24px rgba(163,32,63,.8),inset 0 0 18px rgba(255,255,255,.25);transform:perspective(300px) rotateX(58deg);font-size:44px;font-weight:600;color:#fff;line-height:1}.qss-chev i{font-style:normal;display:block}.qss .qss-al{font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;white-space:nowrap;padding:7px 12px;border-radius:99px;background:rgba(8,6,7,.85);color:#fff;border:1px solid rgba(255,255,255,.25);line-height:1.2}.qss .qss-arr.qss-nl .qss-al{display:none}.qss-arr.qss-lt .qss-chev{background:rgba(17,17,17,.12);border-color:#111;color:#111;box-shadow:0 0 18px rgba(0,0,0,.25)}.qss-arr.qss-lt .qss-al{background:#fff;color:#111;border-color:#cfcdc8}.qss-where{position:absolute;left:32px;top:24px;z-index:20;display:flex;flex-direction:column;gap:6px;padding:12px 16px;border-radius:14px;background:rgba(8,6,7,.82);border:1px solid rgba(255,255,255,.14);pointer-events:none}.qss .qss-where h2{font-size:26px;font-weight:600;line-height:1.1;margin:0}.qss-where small{font-size:11px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;opacity:.8}.qss-where.qss-dark{color:#111;background:rgba(255,255,255,.92);border-color:#d6d4cf}.qss-map{position:absolute;right:28px;top:24px;z-index:20;width:168px;padding:12px;border-radius:16px;background:rgba(8,6,7,.84);border:1px solid rgba(255,255,255,.16)}.qss-mk{font-size:10px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;opacity:.7;margin-bottom:8px}.qss-plan{position:relative;height:124px;border-radius:8px;overflow:hidden;background:linear-gradient(90deg,#2a0c14 50%,#e9e7e2 50%)}.qss .qss-plan button{position:absolute;transform:translate(-50%,-50%);width:16px;height:16px;border-radius:50%;background:#777;border:2px solid #fff;padding:0}.qss .qss-plan button::after{content:\"\";position:absolute;inset:-10px}.qss .qss-plan button.qss-on{background:var(--qb);box-shadow:0 0 0 4px rgba(163,32,63,.45)}.qss-plan i{position:absolute;font-style:normal;font-size:9px;font-weight:600;letter-spacing:.1em;text-transform:uppercase}.qss-plan i.qss-dr{left:50%;bottom:4px;transform:translateX(-50%);color:#fff;mix-blend-mode:difference}.qss-steps{position:absolute;left:50%;bottom:24px;transform:translateX(-50%);z-index:20;display:flex;gap:8px;padding:6px;border-radius:99px;background:rgba(8,6,7,.84);border:1px solid rgba(255,255,255,.16)}.qss .qss-steps button{height:44px;padding:0 16px;border-radius:99px;font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;white-space:nowrap;border:1px solid rgba(255,255,255,.25);color:#fff}.qss .qss-steps button.qss-f{background:#fff;color:#111}.qss-strip,.qss-pan{display:none}@media(max-width:749px){.qss{display:flex;flex-direction:column;background:#0b0909}.qss-view{position:relative;inset:auto;flex:0 0 auto;height:54%}.qss-where{left:12px;top:10px;padding:8px 12px;gap:4px}.qss .qss-where h2{font-size:17px}.qss-where small{font-size:9.5px;letter-spacing:.18em}.qss-strip{display:flex;flex:1 1 auto;min-height:0;flex-direction:column;justify-content:center;padding:12px 0 0;background:#0b0909;border-top:1px solid rgba(255,255,255,.1)}.qss.qss-light .qss-strip{background:var(--qow);color:#111;border-top-color:#dddbd6}.qss.qss-light{background:var(--qow)}.qss-sk{font-size:10px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;opacity:.7;padding:0 16px 8px}.qss-row{display:flex;gap:10px;overflow-x:auto;padding:0 16px 10px;scrollbar-width:none;-webkit-overflow-scrolling:touch;touch-action:pan-x pan-y}.qss-row::-webkit-scrollbar{display:none}.qss-c{flex:0 0 118px;border-radius:14px;padding:8px;display:flex;flex-direction:column;gap:4px;text-align:left}.qss-c.qss-lp{background:#160c0f;border:1px solid rgba(163,32,63,.55);color:#fff}.qss-c.qss-dn{background:#fff;border:1px solid #dddbd6;color:#111}.qss .qss-c img{width:100%;height:auto;aspect-ratio:1/1;object-fit:contain}.qss-c b{font-size:11.5px;line-height:1.2;font-weight:600;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.qss-c em{font-style:normal;font-size:11.5px;font-weight:600}.qss-c.qss-lp em{color:var(--qr)}.qss-c.qss-dn em{color:var(--qb)}.qss-map{right:12px;top:8px;width:112px;padding:8px}.qss-plan{height:84px}.qss-mk{display:none}.qss-plan i{display:none}.qss .qss-plan button{width:13px;height:13px}.qss .qss-chev{width:64px;height:64px;font-size:32px}.qss .qss-al{display:none}.qss-steps{position:relative;left:auto;bottom:auto;transform:none;flex:0 0 auto;margin:6px 10px 12px;justify-content:space-between;border-radius:22px}.qss.qss-light .qss-steps{background:#111}.qss .qss-steps button{flex:1;padding:0 6px;font-size:10px;letter-spacing:.06em;height:50px;white-space:normal;line-height:1.15}.qss-pan{display:block;position:absolute;left:50%;top:calc(54% - 40px);transform:translateX(-50%);z-index:20;font-size:10.5px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;padding:7px 12px;border-radius:99px;background:rgba(8,6,7,.8);color:#fff;white-space:nowrap;pointer-events:none}.qss .qss-tag{display:none}.qss .qss-hot{width:18px;height:18px}}html.qss-lock,html.qss-lock body{overflow:hidden!important}.qss-cu{position:fixed;inset:0;z-index:2147483000;display:none;align-items:center;justify-content:center;background:rgba(3,2,3,.62);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);color:#fff}.qss-cu.qss-on{display:flex}.qss-box{position:relative;width:min(980px,calc(100vw - 80px));max-height:calc(100vh - 40px);display:grid;grid-template-columns:1.12fr 1fr;border-radius:22px;overflow:hidden;box-shadow:0 40px 90px rgba(0,0,0,.6);overscroll-behavior:contain}.qss-box.qss-lp{background:#0e0809;border:1px solid rgba(163,32,63,.7);color:#fff;box-shadow:0 0 70px rgba(110,11,34,.55),0 40px 90px rgba(0,0,0,.6)}.qss-box.qss-dn{background:var(--qow);color:#111;border:1px solid #fff}.qss-stage{position:relative;background:var(--qow);aspect-ratio:1/1;max-height:calc(100vh - 40px);overflow:hidden}.qss-pic{position:absolute;inset:0}.qss-cu .qss-pic>img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}.qss-thumbs{position:absolute;left:14px;bottom:14px;display:flex;gap:8px}.qss-cu .qss-thumbs button{width:58px;height:58px;border-radius:10px;overflow:hidden;border:2px solid transparent;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.15);padding:0}.qss-cu .qss-thumbs button.qss-on{border-color:var(--qb)}.qss-cu .qss-thumbs img{width:100%;height:100%;object-fit:cover}.qss-info{padding:34px 34px 30px;display:flex;flex-direction:column;overflow:auto}.qss-chip{display:inline-flex;align-self:flex-start;align-items:center;gap:8px;border-radius:99px;padding:7px 12px;font-size:10.5px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;white-space:nowrap}.qss-chip.qss-lp{background:var(--qb);color:#fff}.qss-chip.qss-dn{background:var(--qow);color:#111;border:1px solid #cfcdc8}.qss-cu .qss-chip img{height:12px;width:auto}.qss-cu h2{font-size:32px;line-height:1.08;font-weight:600;margin-top:18px}.qss-col{font-size:14px;opacity:.7;margin-top:6px}.qss-pr{font-size:22px;font-weight:600;margin-top:14px}.qss-pr small{display:block;font-size:12px;font-weight:400;opacity:.65;margin-top:4px}.qss-box.qss-lp .qss-pr{color:var(--qr)}.qss-box.qss-dn .qss-pr{color:var(--qb)}.qss-lbl{font-size:11px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;opacity:.7;margin-top:24px}.qss-sz{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}.qss-cu .qss-sz button{min-width:48px;height:44px;padding:0 12px;border-radius:10px;font-size:13px;font-weight:600}.qss-cu .qss-box.qss-lp .qss-sz button{border:1px solid rgba(255,255,255,.3)}.qss-cu .qss-box.qss-dn .qss-sz button{border:1px solid #c9c7c2;background:#fff}.qss-cu .qss-box.qss-lp .qss-sz button.qss-on{background:#fff;color:#111;border-color:#fff}.qss-cu .qss-box.qss-dn .qss-sz button.qss-on{background:#111;color:#fff;border-color:#111}.qss-cu .qss-sz button.qss-oos{opacity:.4;text-decoration:line-through}.qss-go{margin-top:auto;padding-top:24px;display:flex;flex-direction:column;gap:10px}.qss-cu .qss-go a{display:flex;align-items:center;justify-content:center;height:52px;border-radius:99px;font-size:12.5px;font-weight:600;letter-spacing:.18em;text-transform:uppercase}.qss-cu .qss-box.qss-lp .qss-go a{background:var(--qb);color:#fff;box-shadow:0 0 22px rgba(163,32,63,.6)}.qss-cu .qss-box.qss-dn .qss-go a{background:#111;color:#fff}.qss-go small{font-size:12px;opacity:.6;text-align:center}.qss-cu .qss-x{position:absolute;top:14px;right:14px;z-index:3;width:42px;height:42px;border-radius:50%;display:grid;place-items:center;font-size:20px;background:rgba(0,0,0,.55);color:#fff}.qss-cu .qss-box.qss-dn .qss-x{background:#fff;color:#111;border:1px solid #d4d2cd}.qss-cu .qss-nav{position:absolute;top:50%;transform:translateY(-50%);width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.9);color:#111;display:grid;place-items:center;font-size:18px;box-shadow:0 2px 8px rgba(0,0,0,.2)}.qss-cu .qss-pv{left:12px}.qss-cu .qss-nx{right:12px}@media(max-width:749px){.qss-cu{align-items:flex-end}.qss-box{width:100vw;grid-template-columns:1fr;border-radius:22px 22px 0 0;max-height:92vh;overflow:auto;-webkit-overflow-scrolling:touch}.qss-stage{aspect-ratio:1/.86;max-height:none;flex:0 0 auto}.qss-cu .qss-thumbs button{width:48px;height:48px}.qss-info{padding:18px 18px 22px;overflow:visible}.qss-cu h2{font-size:24px;margin-top:12px}.qss-pr{font-size:19px;margin-top:8px}.qss-lbl{margin-top:14px}.qss-cu .qss-sz button{height:42px;min-width:46px}.qss-go{padding-top:16px;padding-bottom:env(safe-area-inset-bottom)}.qss-cu .qss-go a{height:50px}}";

  /* each station = one painting (1376x768); items in painting %: x = centre, y = top (or bottom with b:1), w = width, ry = turn toward the aisle */
  var S = {
    door: { img: 'int-twowalls', n: 'The doorway', k: 'Both sides', z: 1, fx: .5, fy: .55, map: [50, 80],
      items: [
        { id: 'lockup-hoodie-black', x: 21.5, y: 60.5, w: 8.5, ry: 32, hook: 1 }, { id: 'wordmark-snapback-black', x: 21.5, y: 42, w: 5, b: 1, ry: 30 },
        { id: 'seal-crew-burgundy', x: 37.6, y: 60.5, w: 7, hook: 1 }, { id: 'wordmark-cuff-beanie-white', x: 28.3, y: 46.6, w: 3.6, b: 1, ry: 26 },
        { id: 'signet-hoodie-burgundy', x: 62.3, y: 60.5, w: 7, hook: 1 }, { id: 'qs-snapback-burgundy', x: 71.6, y: 46.7, w: 4.6, b: 1, ry: -24 },
        { id: 'scattered-monogram-hoodie-white', x: 80, y: 62.5, w: 8.5, hook: 1, ry: -16 }, { id: 'maison-monogram-tee-black', x: 77.5, y: 44.6, w: 6, hook: 1, ry: -26, tag: 0 }],
      deco: function (p) { p.appendChild(el('qss-lk2 qss-locked', { left: '46.7%', top: '42.8%', width: '6.6%', height: '12%' }, '<span class="qss-lk">&#128274;</span><b>Next drop</b><span>Nov 15</span>')); },
      arrows: [{ to: 'lp', x: 30, y: 82, g: '&#8598;', l: 'Loud &amp; Proud aisle' }, { to: 'dn', x: 70, y: 82, g: '&#8599;', l: 'Discreet &amp; Neat aisle', lt: 1 }] },
    lp: { img: 'int-aisle', n: 'Loud & Proud aisle', k: 'Full QUALITY \u2022 STONER wordmark', z: 1, fx: .5, fy: .5, map: [25, 50],
      items: [
        { id: 'lockup-hoodie-black', x: 20, y: 34, w: 11, ry: 40, hook: 1 }, { id: 'wordmark-leg-joggers-black', x: 20, y: 59, w: 10, ry: 40, hook: 1 },
        { id: 'wordmark-hoodie-white', x: 33, y: 41.5, w: 6.4, ry: 42, hook: 1 }, { id: 'wordmark-crew-white', x: 80, y: 35, w: 11, ry: -40, hook: 1 },
        { id: 'lockup-back-tee-off-white', x: 80, y: 59, w: 10, ry: -40, hook: 1 }, { id: 'seal-crew-burgundy', x: 67, y: 41.5, w: 6.4, ry: -42, hook: 1 }],
      deco: function (p) { p.appendChild(el('qss-scr', { left: '45%', top: '40.4%', width: '10%', height: '12%' }, '<img data-src="' + LOGO.word + '" alt="QUALITY \u2022 STONER">')); },
      arrows: [{ to: 'lpbar', x: 50, y: 68, g: '&#8593;', l: 'LP hat &amp; bag bar' }, { to: 'dn', x: 63, y: 80, g: '&#8594;', l: 'Cross to Discreet &amp; Neat' }, { to: 'door', x: 37, y: 80, g: '&#8595;', l: 'Back to the door' }] },
    dn: { img: 'int-aisle_dn', n: 'Discreet & Neat aisle', k: 'QS mark only', z: 1, fx: .5, fy: .5, map: [75, 50], light: 1,
      items: [
        { id: 'signet-hoodie-burgundy', x: 20, y: 34, w: 11, ry: 40, hook: 1 }, { id: 'signet-joggers-burgundy', x: 20, y: 59, w: 10, ry: 40, hook: 1 },
        { id: 'maison-monogram-tee-white', x: 33, y: 41.5, w: 6.4, ry: 42, hook: 1 }, { id: 'damask-crew-burgundy', x: 38.4, y: 43.4, w: 3.8, ry: 44, hook: 1, tag: 0 },
        { id: 'scattered-monogram-hoodie-white', x: 80, y: 35, w: 11, ry: -40, hook: 1 }, { id: 'signet-tee-burgundy', x: 80, y: 59, w: 10, ry: -40, hook: 1 },
        { id: 'embroidered-qs-crew-black', x: 67, y: 41.5, w: 6.4, ry: -42, hook: 1 }, { id: 'maison-monogram-tee-black', x: 61.6, y: 43.4, w: 3.8, ry: -44, hook: 1, tag: 0 }],
      deco: function (p) { p.appendChild(el('qss-scr qss-k', { left: '45%', top: '40.4%', width: '10%', height: '12%' }, '<img data-src="' + LOGO.mk + '" alt="QS">')); },
      arrows: [{ to: 'dnbar', x: 50, y: 68, g: '&#8593;', l: 'DN hat &amp; bag bar', lt: 1 }, { to: 'lp', x: 37, y: 80, g: '&#8592;', l: 'Cross to Loud &amp; Proud', lt: 1 }, { to: 'door', x: 63, y: 80, g: '&#8595;', l: 'Back to the door', lt: 1 }] },
    lpbar: { img: 'int-counter_lp', n: 'LP hat & bag bar', k: 'Loud & Proud', z: 1.3, fx: .5, fy: .58, map: [25, 14],
      items: [
        { id: 'wordmark-snapback-black', x: 41, y: 63.6, w: 6.6, b: 1 }, { id: 'wordmark-cuff-beanie-black', x: 50, y: 63.6, w: 5.6, b: 1 }, { id: 'wordmark-cuff-beanie-white', x: 59, y: 63.6, w: 5.6, b: 1 },
        { id: 'qs-lp-bp04-backpack-black', x: 33, y: 35, w: 7, hook: 1 }, { id: 'qs-lp-bp05-backpack-white', x: 43, y: 35, w: 7, hook: 1 }, { id: 'wordmark-lattice-crossbody-white', x: 55, y: 36, w: 8, hook: 1 }],
      deco: function (p) { p.appendChild(el('qss-front', { left: '36.5%', top: '66%', width: '27%', height: '16%' }, '<img data-src="' + LOGO.word + '" alt="QUALITY \u2022 STONER" style="filter:drop-shadow(0 0 8px #a3203f)">')); },
      arrows: [{ to: 'lp', x: 50, y: 88, g: '&#8595;', l: 'Back to the LP aisle' }, { to: 'dnbar', x: 76, y: 82, g: '&#8594;', l: 'DN bar next door' }] },
    dnbar: { img: 'int-counter_dn', n: 'DN hat & bag bar', k: 'Discreet & Neat', z: 1.3, fx: .5, fy: .58, map: [75, 14], light: 1,
      items: [
        { id: 'qs-snapback-black', x: 41, y: 63.6, w: 6.6, b: 1 }, { id: 'qs-snapback-burgundy', x: 50, y: 63.6, w: 6.6, b: 1 }, { id: 'qs-cuff-beanie-burgundy', x: 59, y: 63.6, w: 5.6, b: 1 },
        { id: 'maison-monogram-backpack-black', x: 32.2, y: 35, w: 7, hook: 1 }, { id: 'scattered-monogram-backpack-white', x: 44.8, y: 35, w: 7, hook: 1 }, { id: 'damask-crossbody-burgundy', x: 55, y: 36, w: 8, hook: 1 }],
      deco: function (p) { p.appendChild(el('qss-front qss-k', { left: '36.5%', top: '66%', width: '27%', height: '16%' }, '<img data-src="' + LOGO.mkK + '" alt="QS">')); },
      arrows: [{ to: 'dn', x: 50, y: 88, g: '&#8595;', l: 'Back to the DN aisle', lt: 1 }, { to: 'lpbar', x: 24, y: 82, g: '&#8592;', l: 'LP bar next door', lt: 1 }] }
  };
  var ORDER = ['door', 'lp', 'dn', 'lpbar', 'dnbar'];
  var NEXT = { door: ['lp', 'dn'], lp: ['lpbar', 'dn'], dn: ['dnbar', 'lp'], lpbar: ['dnbar', 'lp'], dnbar: ['lpbar', 'dn'] };

  function el(cls, css, html, tag) { var d = document.createElement(tag || 'div'); d.className = cls; for (var k in css) d.style[k] = css[k]; if (html) d.innerHTML = html; return d; }
  function P(id) { return D[id]; }
  function cut(id) { return IMG + 'p/' + id + '.webp'; }
  function url(id) { return SHOP + id; }
  function money(id) { return '$' + P(id).p; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function mob() { return root.clientWidth < 750; }
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
  function q(sel, ctx) { return (ctx || root).querySelector(sel); }
  function qa(sel, ctx) { return [].slice.call((ctx || root).querySelectorAll(sel)); }

  var host, root, view, cur = null, pan = {}, moved = false;

  function mount() {
    if (!document.getElementById('qss-css')) { var st = document.createElement('style'); st.id = 'qss-css'; st.textContent = CSS; document.head.appendChild(st); }
    host = document.getElementById('qs-store') || document.querySelector('[data-qs-store]');
    if (!host) { host = document.createElement('div'); host.id = 'qs-store'; if (me && me.parentNode) me.parentNode.insertBefore(host, me); else document.body.appendChild(host); }
    host.classList.add('qss-host');
    root = el('qss', {}, '<div class="qss-view" id="qss-view"></div>' +
      '<div class="qss-where"><small></small><h2></h2></div>' +
      '<div class="qss-map"><div class="qss-mk">You are here</div><div class="qss-plan"></div></div>' +
      '<div class="qss-pan">&#8249; swipe to look around &#8250;</div>' +
      '<div class="qss-strip"><div class="qss-sk">At this spot &middot; tap to look closer</div><div class="qss-row"></div></div>' +
      '<div class="qss-steps"></div>');
    host.innerHTML = ''; host.appendChild(root);
    view = q('.qss-view');
    ORDER.forEach(build);
    fit();
    dragPan();
    var lw = innerWidth;
    addEventListener('resize', function () { if (innerWidth !== lw) { lw = innerWidth; fit(); } else bleed(); layout(cur); });
    addEventListener('orientationchange', function () { setTimeout(function () { fit(); layout(cur); }, 300); });
    go('door');
    var pre = function () { setTimeout(function () { NEXT.door.forEach(load); }, 1200); };
    if (document.readyState === 'complete') pre(); else addEventListener('load', pre);
  }

  /* full-bleed block, one viewport tall under the site header (header/footer stay in normal flow) */
  function bleed() {
    var vw = document.documentElement.clientWidth; host.style.marginLeft = ''; host.style.width = '';
    var r = host.getBoundingClientRect(); host.style.width = vw + 'px'; host.style.marginLeft = (-r.left) + 'px';
  }
  function fit() {
    bleed();
    var hd = 0, h = document.querySelector('header'); if (h) { var b = h.getBoundingClientRect(); if (b.height < 200) hd = b.height; }
    var vh = innerHeight, top = host.getBoundingClientRect().top + scrollY, room = (top > hd && top < vh * .4) ? vh - top : vh - hd, H;
    if (vw() < 750) H = Math.max(620, Math.min(900, room)); else H = Math.max(560, Math.min(980, room));
    root.style.height = H + 'px';
  }
  function vw() { return document.documentElement.clientWidth; }

  function build(k) {
    var s = S[k], st = el('qss-st', {}), pz = el('qss-pz', {});
    pz.innerHTML = '<img class="qss-paint" data-src="' + IMG + s.img + '.webp" alt="' + esc(s.n) + '">';
    s.items.forEach(function (o) {
      var p = P(o.id); if (!p) return;
      var a = el('qss-it qss-' + p.s + (o.b ? ' qss-bot' : ''), { left: o.x + '%', top: o.y + '%', width: o.w + '%' },
        '<img data-src="' + cut(o.id) + '" alt="">' + '<i class="qss-hot"></i>' +
        (o.tag === 0 ? '' : '<span class="qss-tag qss-' + p.s + '">' + esc(p.n) + '<i>' + money(o.id) + '</i></span>'), 'a');
      a.href = url(o.id); a.setAttribute('aria-label', p.n + ' ' + p.c + ', ' + money(o.id));
      a.style.transform = 'translateX(-50%)' + (o.b ? ' translateY(-100%)' : '') + (o.ry ? ' perspective(700px) rotateY(' + o.ry + 'deg)' : '');
      a.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); if (moved) return; open(o.id); });
      if (o.hook) pz.appendChild(el('qss-hook', { left: o.x + '%', top: (o.y - 1.6) + '%', height: '1.8%' }));
      pz.appendChild(a);
    });
    if (s.deco) s.deco(pz);
    s.arrows.forEach(function (a) {
      var b = el('qss-arr' + (a.lt ? ' qss-lt' : ''), { left: a.x + '%', top: a.y + '%' }, '<span class="qss-chev"><i>' + a.g + '</i></span><span class="qss-al">' + a.l + '</span>', 'button');
      b.type = 'button'; b.setAttribute('aria-label', a.l.replace(/&amp;/g, '&'));
      b.addEventListener('click', function (e) { e.preventDefault(); if (!moved) go(a.to, a); });
      a.elm = b; pz.appendChild(b);
    });
    st.appendChild(pz); view.appendChild(st); s.st = st; s.pz = pz; pan[k] = 0;
  }
  function load(k) { var s = S[k]; if (s.loaded) return; s.loaded = 1; qa('img[data-src]', s.st).forEach(function (i) { i.src = i.getAttribute('data-src'); i.removeAttribute('data-src'); }); }

  /* fit a painting to cover the view, zoomed by s.z around (fx, fy); can be panned sideways where it is wider than the view */
  function layout(k) {
    if (!k) return;
    var s = S[k], w0 = view.clientWidth, h0 = view.clientHeight, ar = 1376 / 768, w = w0 * s.z, h = w / ar;
    if (h < h0 * s.z) { h = h0 * s.z; w = h * ar; }
    var c = w0 / 2 - s.fx * w, l = clamp(c + pan[k], w0 - w, 0), t = clamp(h0 / 2 - s.fy * h, h0 - h, 0);
    pan[k] = l - c;
    /* keep floor arrows clear of the step bar when the view is wide and short */
    var m = mob(), lim = h0 - t - (m ? 44 : 132), lab = h0 - t - 170;
    s.arrows.forEach(function (a) { var y0 = a.y / 100 * h, y = Math.min(y0, lim); a.elm.style.top = (y / h * 100) + '%'; a.elm.classList.toggle('qss-nl', !m && y0 > lab); });
    var pz = s.pz; pz.style.width = w + 'px'; pz.style.height = h + 'px'; pz.style.left = l + 'px'; pz.style.top = t + 'px';
  }
  function go(k, via) {
    if (cur === k) return;
    var prev = cur && S[cur]; cur = k; var s = S[k];
    load(k);
    if (prev) { prev.pz.style.transformOrigin = via ? via.x + '% ' + via.y + '%' : '50% 50%'; prev.st.classList.add('qss-out'); prev.st.classList.remove('qss-on'); setTimeout(function () { prev.st.classList.remove('qss-out'); }, 650); }
    s.st.classList.add('qss-inn'); layout(k); s.st.classList.add('qss-on');
    requestAnimationFrame(function () { requestAnimationFrame(function () { s.st.classList.remove('qss-inn'); }); });
    var w = q('.qss-where'); q('small', w).textContent = s.k; q('h2', w).textContent = s.n; w.classList.toggle('qss-dark', !!s.light);
    root.classList.toggle('qss-light', !!s.light);
    plan(); steps(); strip();
    setTimeout(function () { (NEXT[k] || []).forEach(load); }, 700);
  }
  function strip() {
    var s = S[cur], seen = {}, row = q('.qss-row');
    row.innerHTML = s.items.filter(function (o) { if (seen[o.id] || !P(o.id)) return false; return (seen[o.id] = 1); }).map(function (o) {
      var p = P(o.id); return '<a class="qss-c qss-' + p.s + '" href="' + url(o.id) + '" data-id="' + o.id + '"><img src="' + cut(o.id) + '" alt="" loading="lazy"><b>' + esc(p.n) + '</b><em>' + money(o.id) + '</em></a>';
    }).join('');
    row.scrollLeft = 0;
    qa('.qss-c', row).forEach(function (b) { b.addEventListener('click', function (e) { e.preventDefault(); open(b.getAttribute('data-id')); }); });
  }
  function plan() {
    var p = q('.qss-plan');
    p.innerHTML = '<i style="left:8px;top:6px;color:#e7a9b6">LP</i><i style="right:8px;top:6px;color:#6E0B22">DN</i><i class="qss-dr">Door</i>' +
      ORDER.map(function (k) { return '<button type="button" data-k="' + k + '" class="' + (k === cur ? 'qss-on' : '') + '" style="left:' + S[k].map[0] + '%;top:' + S[k].map[1] + '%" aria-label="' + esc(S[k].n) + '"></button>'; }).join('');
    qa('button', p).forEach(function (b) { b.addEventListener('click', function () { go(b.getAttribute('data-k')); }); });
  }
  function steps() {
    var s = S[cur], st = q('.qss-steps');
    st.innerHTML = s.arrows.map(function (a, i) { return '<button type="button" class="' + (i === 0 ? 'qss-f' : '') + '">' + a.g + ' ' + a.l + '</button>'; }).join('');
    qa('button', st).forEach(function (b, i) { b.addEventListener('click', function () { go(s.arrows[i].to, s.arrows[i]); }); });
  }
  /* horizontal drag / swipe pans the painting; vertical swipes still scroll the page (touch-action: pan-y) */
  function dragPan() {
    var on = false, x0, y0, lx, id = null;
    view.addEventListener('pointerdown', function (e) { if (e.button && e.button !== 0) return; on = true; id = e.pointerId; moved = false; x0 = lx = e.clientX; y0 = e.clientY; });
    addEventListener('pointermove', function (e) {
      if (!on || e.pointerId !== id) return; var dx = e.clientX - lx; lx = e.clientX;
      if (Math.abs(e.clientX - x0) + Math.abs(e.clientY - y0) > 8) moved = true;
      if (cur) { pan[cur] += dx; layout(cur); }
    });
    function end() { on = false; setTimeout(function () { moved = false; }, 30); }
    addEventListener('pointerup', end); addEventListener('pointercancel', end);
    view.addEventListener('dragstart', function (e) { e.preventDefault(); });
  }

  /* ===== close-up sheet (appended to body; fixed modal) ===== */
  var cu, cid, gi, lockY;
  function buildCu() {
    cu = el('qss-cu', {}, '<div class="qss-box" role="dialog" aria-modal="true"><button type="button" class="qss-x" aria-label="Close">&#10005;</button>' +
      '<div class="qss-stage"><div class="qss-pic"></div><button type="button" class="qss-nav qss-pv" aria-label="Previous image">&#8249;</button><button type="button" class="qss-nav qss-nx" aria-label="Next image">&#8250;</button><div class="qss-thumbs"></div></div>' +
      '<div class="qss-info"><span class="qss-chip"></span><h2></h2><div class="qss-col"></div><div class="qss-pr"></div><div class="qss-lbl"></div><div class="qss-sz"></div>' +
      '<div class="qss-go"><a class="qss-pri">View product &#8594;</a><small>Opens the product page to add to cart</small></div></div></div>');
    document.body.appendChild(cu);
    cu.addEventListener('click', function (e) { if (e.target === cu) close(); });
    q('.qss-x', cu).addEventListener('click', close);
    q('.qss-pv', cu).addEventListener('click', function () { show(gi - 1); });
    q('.qss-nx', cu).addEventListener('click', function () { show(gi + 1); });
    var sx = null; var stg = q('.qss-stage', cu);
    stg.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
    stg.addEventListener('touchend', function (e) { if (sx == null) return; var dx = e.changedTouches[0].clientX - sx; sx = null; if (Math.abs(dx) > 40) show(gi + (dx < 0 ? 1 : -1)); }, { passive: true });
    addEventListener('keydown', function (e) { if (!cu.classList.contains('qss-on')) return; if (e.key === 'Escape') close(); if (e.key === 'ArrowRight') show(gi + 1); if (e.key === 'ArrowLeft') show(gi - 1); });
  }
  function show(i) {
    var g = P(cid).g; gi = (i + g.length) % g.length;
    q('.qss-pic', cu).innerHTML = '<img src="' + IMG + 'g/' + g[gi] + '" alt="' + esc(P(cid).n + ' ' + P(cid).c) + '">';
    qa('.qss-thumbs button', cu).forEach(function (b, k) { b.classList.toggle('qss-on', k === gi); });
  }
  function open(id) {
    if (!cu) buildCu(); cid = id; var p = P(id);
    q('.qss-box', cu).className = 'qss-box qss-' + p.s;
    var chip = q('.qss-chip', cu); chip.className = 'qss-chip qss-' + p.s;
    chip.innerHTML = p.s === 'lp' ? '<img src="' + LOGO.mk + '" alt="">Loud &amp; Proud' : '<img src="' + LOGO.mkK + '" alt="">Discreet &amp; Neat';
    q('h2', cu).textContent = p.n;
    q('.qss-col', cu).textContent = p.c + (p.s === 'lp' ? ' \u00b7 full QUALITY \u2022 STONER wordmark' : ' \u00b7 QS mark only');
    q('.qss-pr', cu).innerHTML = money(id) + (p.hi ? '<small>Bigger sizes cost a little more</small>' : '');
    var one = p.z.length === 1, x = p.x || [];
    q('.qss-lbl', cu).textContent = one ? 'Size' : 'Sizes';
    q('.qss-sz', cu).innerHTML = p.z.map(function (s) { return '<button type="button" class="' + ((one || s === 'M') ? 'qss-on' : '') + (x.indexOf(s) > -1 ? ' qss-oos' : '') + '">' + esc(s) + '</button>'; }).join('');
    qa('.qss-sz button', cu).forEach(function (b) { b.addEventListener('click', function () { qa('.qss-sz button', cu).forEach(function (y) { y.classList.remove('qss-on'); }); b.classList.add('qss-on'); }); });
    q('.qss-pri', cu).href = url(id);
    q('.qss-thumbs', cu).innerHTML = p.g.length < 2 ? '' : p.g.map(function (f, k) { return '<button type="button" aria-label="Image ' + (k + 1) + '"><img src="' + IMG + 'g/' + f + '" alt=""></button>'; }).join('');
    qa('.qss-thumbs button', cu).forEach(function (b, k) { b.addEventListener('click', function () { show(k); }); });
    q('.qss-pv', cu).style.display = q('.qss-nx', cu).style.display = p.g.length < 2 ? 'none' : '';
    show(0);
    if (!cu.classList.contains('qss-on')) { lockY = scrollY; document.documentElement.classList.add('qss-lock'); }
    cu.classList.add('qss-on'); q('.qss-box', cu).scrollTop = 0;
  }
  function close() { if (!cu || !cu.classList.contains('qss-on')) return; cu.classList.remove('qss-on'); document.documentElement.classList.remove('qss-lock'); }

  window.QSStore = { go: function (k) { go(k); }, open: open, close: close };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount); else mount();
})();
