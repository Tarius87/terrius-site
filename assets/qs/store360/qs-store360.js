/* Quality Stoner · Walk the Store · the 360 room (round-2 concept 01, productionised Oct 16 2026; v2 same evening:
   no tilt, split front wall, dressing room; v3 Oct 16 night: 7 walls by category (Tees, Hoodies & Crews, Joggers, Hats,
   Bags & More) each split LP | DN, LP/DN/All filter, name + price on every item, List view, rAF + inertia motion).
   Self-contained: injects scoped CSS + markup into <div id="qs-store"></div> (or [data-qs-store]).
   Product cutouts / close-up gallery / logos load from ../store/img/ (same repo commit); products flagged o:1 load from ./img/.
   Products flagged k:1 are shown as a rounded product-photo card (Fourthwall's own photo), never a hand-made cutout.
   Source: site-build/store360/qs-store360.src.js, built by site-build/store360/build.py. */
(function () {
  if (window.__q3Loaded) return; window.__q3Loaded = 1;
  var me = document.currentScript, SRC = me && me.src ? me.src : '';
  var BASE = SRC.replace(/[^\/?#]*([?#].*)?$/, ''), IMG = BASE + '../store/img/', OWN = BASE + 'img/';
  var D = {"damask-crew-burgundy":{"s":"dn","n":"Damask Crew","c":"Burgundy","p":"49","z":["2XS","XS","S","M","L","XL","2XL","3XL","4XL","5XL","6XL"],"g":["damask-crew-burgundy_0.webp","damask-crew-burgundy_1.webp","damask-crew-burgundy_2.webp"],"hi":true,"x":[]},"damask-crossbody-burgundy":{"s":"dn","n":"Damask Crossbody","c":"Burgundy","p":"55","z":["One size"],"g":["damask-crossbody-burgundy_0.webp","damask-crossbody-burgundy_1.webp"],"hi":false,"x":[]},"embroidered-qs-crew-black":{"s":"dn","n":"Embroidered QS Crew","c":"Black","p":"49","z":["S","M","L","XL","2XL","3XL"],"g":["embroidered-qs-crew-black_0.webp","embroidered-qs-crew-black_1.webp","embroidered-qs-crew-black_2.webp"],"hi":true,"x":[]},"embroidered-qs-hoodie-burgundy":{"s":"dn","n":"Embroidered QS Hoodie","c":"Burgundy","p":"58","z":["S","M","L","XL","2XL","3XL"],"g":["embroidered-qs-hoodie-burgundy_0.webp","embroidered-qs-hoodie-burgundy_1.webp","embroidered-qs-hoodie-burgundy_2.webp"],"hi":true,"x":[]},"embroidered-qs-joggers-burgundy":{"s":"dn","n":"Embroidered QS Joggers","c":"Burgundy","p":"45","z":["XS","S","M","L","XL","2XL"],"g":["embroidered-qs-joggers-burgundy_0.webp","embroidered-qs-joggers-burgundy_1.webp"],"hi":true,"x":[]},"embroidered-qs-tee-burgundy":{"s":"dn","n":"Embroidered QS Tee","c":"Burgundy","p":"29","z":["S","M","L","XL","2XL"],"g":["embroidered-qs-tee-burgundy_0.webp","embroidered-qs-tee-burgundy_1.webp","embroidered-qs-tee-burgundy_2.webp"],"hi":true,"x":[]},"lockup-back-tee-off-white":{"s":"lp","n":"Lockup Back Tee","c":"Off-White","p":"29.99","z":["S","M","L","XL","2XL","3XL"],"g":["lockup-back-tee-off-white_0.webp","lockup-back-tee-off-white_1.webp","lockup-back-tee-off-white_2.webp"],"hi":true,"x":[]},"lockup-hoodie-black":{"s":"lp","n":"Lockup Hoodie","c":"Black","p":"58","z":["S","M","L","XL","2XL","3XL"],"g":["lockup-hoodie-black_1.webp","lockup-hoodie-black_0.webp","lockup-hoodie-black_2.webp"],"hi":true,"x":[]},"maison-monogram-backpack-black":{"s":"dn","n":"Maison Monogram Backpack","c":"Black","p":"48","z":["One size"],"g":["maison-monogram-backpack-black_0.webp","maison-monogram-backpack-black_1.webp","maison-monogram-backpack-black_2.webp"],"hi":false,"x":[]},"maison-monogram-tee-black":{"s":"dn","n":"Maison Monogram Tee","c":"Black","p":"34.99","z":["XS","S","M","L","XL","2XL"],"g":["maison-monogram-tee-black_0.webp","maison-monogram-tee-black_1.webp"],"hi":true,"x":[]},"maison-monogram-tee-white":{"s":"dn","n":"Maison Monogram Tee","c":"White","p":"34.99","z":["XS","S","M","L","XL","2XL"],"g":["maison-monogram-tee-white_0.webp","maison-monogram-tee-white_1.webp"],"hi":true,"x":[]},"qs-cuff-beanie-burgundy":{"s":"dn","n":"QS Cuff Beanie","c":"Burgundy","p":"29.95","z":["One size"],"g":["qs-cuff-beanie-burgundy_0.webp","qs-cuff-beanie-burgundy_1.webp"],"hi":false,"x":[]},"qs-lp-bp04-backpack-black":{"s":"lp","n":"Backpack","c":"Black","p":"48","z":["One size"],"g":["qs-lp-bp04-backpack-black_0.webp","qs-lp-bp04-backpack-black_1.webp"],"hi":false,"x":[]},"qs-lp-bp05-backpack-white":{"s":"lp","n":"Backpack","c":"White","p":"48","z":["One size"],"g":["qs-lp-bp05-backpack-white_0.webp","qs-lp-bp05-backpack-white_1.webp","qs-lp-bp05-backpack-white_2.webp"],"hi":false,"x":[]},"qs-snapback-black":{"s":"dn","n":"QS Snapback","c":"Black","p":"34.95","z":["One size"],"g":["qs-snapback-black_0.webp"],"hi":false,"x":[]},"qs-snapback-burgundy":{"s":"dn","n":"QS Snapback","c":"Burgundy","p":"34.95","z":["One size"],"g":["qs-snapback-burgundy_0.webp"],"hi":false,"x":[]},"scattered-monogram-backpack-white":{"s":"dn","n":"Scattered Monogram Backpack","c":"White","p":"48","z":["One size"],"g":["scattered-monogram-backpack-white_0.webp","scattered-monogram-backpack-white_1.webp","scattered-monogram-backpack-white_2.webp"],"hi":false,"x":[]},"scattered-monogram-hoodie-white":{"s":"dn","n":"Scattered Monogram Hoodie","c":"White","p":"58","z":["2XS","XS","S","M","L","XL","2XL","3XL","4XL","5XL","6XL"],"g":["scattered-monogram-hoodie-white_0.webp","scattered-monogram-hoodie-white_1.webp","scattered-monogram-hoodie-white_2.webp"],"hi":true,"x":[]},"seal-crew-burgundy":{"s":"lp","n":"Seal Crew","c":"Burgundy","p":"49","z":["S","M","L","XL","2XL"],"g":["seal-crew-burgundy_0.webp","seal-crew-burgundy_1.webp","seal-crew-burgundy_2.webp"],"hi":true,"x":[]},"wordmark-cuff-beanie-black":{"s":"lp","n":"Wordmark Cuff Beanie","c":"Black","p":"27.95","z":["One size"],"g":["wordmark-cuff-beanie-black_0.webp","wordmark-cuff-beanie-black_1.webp","wordmark-cuff-beanie-black_2.webp"],"hi":false,"x":[]},"wordmark-cuff-beanie-white":{"s":"lp","n":"Wordmark Cuff Beanie","c":"White","p":"27.95","z":["One size"],"g":["wordmark-cuff-beanie-white_0.webp","wordmark-cuff-beanie-white_1.webp","wordmark-cuff-beanie-white_2.webp"],"hi":false,"x":[]},"wordmark-hoodie-white":{"s":"lp","n":"Wordmark Hoodie","c":"White","p":"58","z":["S","M","L","XL","2XL","3XL"],"g":["wordmark-hoodie-white_0.webp","wordmark-hoodie-white_1.webp","wordmark-hoodie-white_2.webp"],"hi":true,"x":[]},"wordmark-lattice-crossbody-white":{"s":"lp","n":"Wordmark Lattice Crossbody","c":"White","p":"55","z":["One size"],"g":["wordmark-lattice-crossbody-white_0.webp","wordmark-lattice-crossbody-white_1.webp"],"hi":false,"x":[]},"wordmark-leg-joggers-black":{"s":"lp","n":"Wordmark Leg Joggers","c":"Black","p":"45","z":["XS","S","M","L","XL","2XL"],"g":["wordmark-leg-joggers-black_0.webp","wordmark-leg-joggers-black_1.webp"],"hi":true,"x":[]},"wordmark-snapback-black":{"s":"lp","n":"Wordmark Snapback","c":"Black","p":"34.95","z":["One size"],"g":["wordmark-snapback-black_0.webp"],"hi":false,"x":[]},"qs-lp-ts01-classic-tee-white":{"s":"lp","n":"Heavyweight Tee","c":"White","p":"29","z":["S","M","L","XL","2XL","3XL","4XL"],"hi":false,"g":["qs-lp-ts01-classic-tee-white_0.webp","qs-lp-ts01-classic-tee-white_1.webp","qs-lp-ts01-classic-tee-white_2.webp"],"o":1,"k":1,"x":[]},"letterpress-crew-white":{"s":"lp","n":"Letterpress Crew","c":"White","p":"49","z":["S","M","L","XL","2XL","3XL"],"hi":true,"g":["letterpress-crew-white_0.webp","letterpress-crew-white_1.webp","letterpress-crew-white_2.webp"],"o":1,"k":1,"x":[]},"hem-band-joggers-off-white":{"s":"lp","n":"Hem-Band Joggers","c":"Off-White","p":"60","z":["XS","S","M","L","XL","2XL","3XL"],"hi":true,"g":["hem-band-joggers-off-white_0.webp","hem-band-joggers-off-white_1.webp"],"o":1,"x":[]},"maison-monogram-joggers-black":{"s":"dn","n":"Maison Monogram Joggers","c":"Black","p":"60","z":["XS","S","M","L","XL","2XL","3XL"],"hi":true,"g":["maison-monogram-joggers-black_0.webp","maison-monogram-joggers-black_1.webp"],"o":1,"x":[]}};
  var SHOP = 'https://qualitystoner.com/products/';
  var LOGO = { word: IMG + 'word-white.webp', mk: IMG + 'qs-mono-white.webp', mkK: IMG + 'qs-mono-black.webp' };
  var CSS = ".q3-host{display:block;position:relative;max-width:none!important;padding:0!important;overflow:visible}.q3,.q3-cu{--qb:#6E0B22;--qow:#F4F3F0;--qg:#a3203f;--qr:#e7a9b6;font-family:inherit;-webkit-font-smoothing:antialiased;line-height:1.2;text-align:left;letter-spacing:normal;text-transform:none}.q3 *,.q3-cu *{box-sizing:border-box;margin:0;padding:0;font-family:inherit}.q3 a,.q3-cu a{color:inherit;text-decoration:none!important;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}.q3 button,.q3-cu button{font:inherit;color:inherit;background:none;border:0;cursor:pointer;-webkit-tap-highlight-color:transparent;-webkit-appearance:none;appearance:none;min-height:0;min-width:0;box-shadow:none;text-transform:none;letter-spacing:normal;line-height:1.2;border-radius:0}.q3 img,.q3-cu img{display:block;max-width:none;height:auto;-webkit-user-drag:none;user-select:none;-webkit-user-select:none;border:0}.q3 b,.q3-cu b,.q3 strong,.q3-cu strong{color:inherit!important;font-weight:600}.q3 i,.q3-cu i,.q3 small,.q3 span{color:inherit}.q3 h2,.q3-cu h2,.q3 p{font-family:inherit;color:inherit;letter-spacing:normal;text-transform:none}.q3{position:relative;width:100%;height:760px;overflow:hidden;background:#060506;color:#fff;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none}.q3-view{position:absolute;inset:0;overflow:hidden;background:#060506;touch-action:pan-y;cursor:grab;outline:none}.q3-view:active{cursor:grabbing}.q3-cam{position:absolute;left:50%;top:50%;width:0;height:0;perspective-origin:0 0}.q3-wall{position:absolute}.q3-face{position:absolute;inset:0;overflow:hidden}.q3-flo,.q3-cei{position:absolute;clip-path:polygon(0 0,100% 0,70% 100%,30% 100%);-webkit-clip-path:polygon(0 0,100% 0,70% 100%,30% 100%)}.q3-cei{clip-path:polygon(30% 0,70% 0,100% 100%,0 100%);-webkit-clip-path:polygon(30% 0,70% 0,100% 100%,0 100%);background:linear-gradient(0deg,#151213,#0a0909)}.q3-cei::after{content:\"\";position:absolute;left:47%;width:6%;top:0;bottom:0;background:repeating-linear-gradient(0deg,transparent 0 60px,rgba(255,240,240,.55) 60px 66px,transparent 66px 120px)}.q3-lp .q3-face{background:linear-gradient(180deg,#1a0d11 0,#0d0809 55%,#090607 100%);box-shadow:inset 0 3px 0 #a3203f,inset 0 40px 60px -30px rgba(163,32,63,.75)}.q3-lp .q3-face::before,.q3-dn .q3-face::before{content:\"\";position:absolute;inset:0;background:repeating-linear-gradient(90deg,rgba(255,255,255,.035) 0 1px,transparent 1px 150px);pointer-events:none}.q3-flo.q3-lp{background:linear-gradient(#2a0c14,#120709 70%,#0b0708)}.q3-dn .q3-face{background:linear-gradient(180deg,#fbfaf8,#F4F3F0 60%,#e8e6e1);box-shadow:inset 0 -50px 70px -40px rgba(0,0,0,.18)}.q3-dn .q3-face::before{background:repeating-linear-gradient(90deg,rgba(0,0,0,.04) 0 1px,transparent 1px 150px)}.q3-flo.q3-dn{background:linear-gradient(#d9d6d0,#bdb9b2 70%,#a9a59e)}.q3-mx .q3-face{background:#0b0a0a}.q3-flo.q3-mx{background:linear-gradient(#24201f,#121011)}.q3-sign{position:absolute;display:flex;flex-direction:column;align-items:center;gap:12px;transform:translateX(-50%);pointer-events:none}.q3 .q3-sign img{width:auto}.q3-sign small{font-size:13px;font-weight:600;letter-spacing:.3em;text-transform:uppercase;opacity:.8;white-space:nowrap}.q3 .q3-lp .q3-sign img,.q3 .q3-mx .q3-sign img.q3-w{filter:drop-shadow(0 0 2px #fff) drop-shadow(0 0 10px #a3203f) drop-shadow(0 0 26px #a3203f)}.q3-dn .q3-sign small{color:#111}.q3-rail{position:absolute;height:6px;border-radius:3px}.q3-lp .q3-rail{background:linear-gradient(#6b6b6b,#2b2b2b);box-shadow:0 0 12px rgba(163,32,63,.6)}.q3-dn .q3-rail{background:#141414}.q3-shelf{position:absolute;height:12px;border-radius:2px}.q3-lp .q3-shelf{background:linear-gradient(#3a0b16,#1c0509);box-shadow:0 8px 18px rgba(0,0,0,.6),0 -1px 0 #a3203f}.q3-dn .q3-shelf{background:linear-gradient(#e2d9cb,#c9bda9);box-shadow:0 10px 16px rgba(0,0,0,.15)}.q3-hang{position:absolute;width:1.5px}.q3-lp .q3-hang{background:rgba(255,255,255,.35)}.q3-dn .q3-hang{background:rgba(0,0,0,.45)}.q3-cub{position:absolute;border-radius:6px}.q3-lp .q3-cub{background:linear-gradient(#050304,#1a0b0f);box-shadow:inset 0 0 0 2px #3a0b16,inset 0 18px 30px rgba(163,32,63,.35)}.q3-dn .q3-cub{background:linear-gradient(#e9e7e2,#fff);box-shadow:inset 0 0 0 2px #d8d5cf,inset 0 14px 22px rgba(0,0,0,.08)}.q3-hl{position:absolute;font-size:12px;font-weight:600;letter-spacing:.3em;text-transform:uppercase;transform:translateX(-50%);white-space:nowrap;pointer-events:none}.q3-half{position:absolute;top:0;bottom:0;width:50%}.q3-half.q3-l{left:0;background:linear-gradient(180deg,#1a0d11,#0a0708);box-shadow:inset 0 3px 0 #a3203f,inset 0 40px 60px -30px rgba(163,32,63,.75)}.q3-half.q3-r{right:0;background:linear-gradient(180deg,#fbfaf8,#ebe9e4)}.q3-counter{position:absolute;left:0;right:0;bottom:0}.q3-counter .q3-l,.q3-counter .q3-r{position:absolute;top:0;bottom:0;width:50%}.q3-counter .q3-l{left:0;background:linear-gradient(#5a0a1c,#3b0612 18%,#20040a);border-top:6px solid #120a0c}.q3-counter .q3-r{right:0;background:linear-gradient(#ffffff,#e4e1db);border-top:6px solid #cfcac2}.q3-win{position:absolute;background:#141112 50% 60%/cover;border:14px solid #141112;box-shadow:inset 0 0 60px rgba(0,0,0,.6)}.q3-door{position:absolute;border:12px solid #141112;background:#141112 70% 60%/cover}.q3-door::before{content:\"\";position:absolute;inset:0;background:linear-gradient(160deg,rgba(80,90,130,.35),rgba(10,10,20,.8))}.q3-door::after{content:\"\";position:absolute;right:16px;top:48%;width:8px;height:80px;border-radius:4px;background:#888}.q3-exit{position:absolute;transform:translateX(-50%);font-size:12px;font-weight:600;letter-spacing:.3em;color:#e7a9b6;text-transform:uppercase;white-space:nowrap;pointer-events:none}.q3-locked{position:absolute;right:30px;bottom:26px;width:230px;height:200px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;border:1.5px dashed rgba(255,255,255,.35);border-radius:14px;background:rgba(8,6,7,.86);color:#fff}.q3-locked .q3-lk{width:30px;height:30px;border-radius:50%;display:grid;place-items:center;border:1.5px solid currentColor;font-size:14px}.q3-locked b{font-size:11px;letter-spacing:.24em;text-transform:uppercase}.q3-locked span{font-size:12px;opacity:.75}.q3 .q3-all{position:absolute;transform:translateX(-50%);display:inline-flex;align-items:center;border-radius:99px;padding:12px 18px;font-size:11px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;white-space:nowrap}.q3 .q3-all.q3-lp{background:var(--qb);color:#fff}.q3 .q3-all.q3-dn{background:#111;color:#fff}.q3-it{position:absolute;display:block;cursor:pointer}.q3 .q3-it img{width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 16px 18px rgba(0,0,0,.45))}.q3 .q3-it.q3-dn img{filter:drop-shadow(0 14px 14px rgba(0,0,0,.2))}.q3-hot{position:absolute;right:8%;top:6%;width:22px;height:22px;border-radius:50%;background:rgba(255,255,255,.95);box-shadow:0 0 0 4px rgba(255,255,255,.28),0 2px 8px rgba(0,0,0,.5);display:grid;place-items:center;pointer-events:none}.q3-hot::after{content:\"\";width:8px;height:8px;border-radius:50%;background:var(--qb)}.q3-hot::before{content:\"\";position:absolute;inset:-4px;border-radius:50%;border:2px solid rgba(255,255,255,.7);animation:q3ping 1.8s ease-out infinite}@keyframes q3ping{from{transform:scale(.8);opacity:1}to{transform:scale(2);opacity:0}}.q3-tag{position:absolute;left:50%;top:calc(100% + 8px);transform:translateX(-50%);white-space:nowrap;font-size:11px;font-weight:600;letter-spacing:.02em;padding:5px 9px;border-radius:99px;pointer-events:none;line-height:1.2}.q3-tag.q3-lp{background:rgba(10,6,7,.88);color:#fff;border:1px solid rgba(194,70,95,.7)}.q3-tag.q3-dn{background:#fff;color:#111;border:1px solid #d5d4d0}.q3-tag i{font-style:normal;opacity:.7;margin-left:6px}.q3-tag.q3-two{white-space:normal;width:max-content;max-width:150px;text-align:center;border-radius:10px;line-height:1.3}.q3-tag.q3-two i{display:block;margin:0}.q3-hint{position:absolute;z-index:20;left:50%;bottom:92px;transform:translateX(-50%);width:640px;max-width:calc(100% - 28px);display:grid;grid-template-columns:1fr auto;column-gap:18px;align-items:end;padding:14px 18px;border-radius:16px;background:rgba(0,0,0,.82);border:1px solid rgba(255,255,255,.1);border-top:2px solid var(--qb);transition:opacity .4s;pointer-events:none}.q3-hint .q3-k{font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:#c9a5ae}.q3 .q3-hint h2{font-size:24px;line-height:1.1;font-weight:600;margin-top:6px}.q3 .q3-hint p{font-size:13.5px;line-height:1.45;color:#d9d3d5;margin-top:4px}.q3-how{grid-column:2;grid-row:1/4;display:flex;flex-direction:column;gap:8px}.q3-how span{font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;padding:7px 10px;border-radius:99px;border:1px solid rgba(255,255,255,.35);white-space:nowrap}.q3-hint.q3-gone{opacity:0}.q3-zones{position:absolute;left:50%;bottom:22px;transform:translateX(-50%);z-index:30;display:flex;align-items:center;gap:10px}.q3 .q3-ctl{width:48px;height:48px;border-radius:50%;display:grid;place-items:center;background:rgba(10,8,9,.78);border:1px solid rgba(255,255,255,.22);font-size:22px;font-weight:600;color:#fff}.q3-zbar{display:flex;gap:4px;padding:5px;border-radius:99px;background:rgba(8,6,7,.82);border:1px solid rgba(255,255,255,.16)}.q3 .q3-zbar button{height:38px;padding:0 14px;border-radius:99px;font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;opacity:.7;white-space:nowrap;color:#fff}.q3 .q3-zbar button.q3-on{opacity:1;background:#fff;color:#111}.q3 .q3-zbar button.q3-on.q3-l{background:var(--qb);color:#fff}.q3-mz{display:none}@media(max-width:1100px) and (min-width:750px){.q3 .q3-zbar button{padding:0 10px;letter-spacing:.08em}}@media(max-width:749px){.q3-zbar{display:none}.q3-mz{display:flex;flex-direction:column;align-items:center;gap:6px;min-width:150px;padding:8px 14px;border-radius:18px;background:rgba(8,6,7,.84);border:1px solid rgba(255,255,255,.16)}.q3-mz b{white-space:nowrap;font-size:11px;font-weight:600;letter-spacing:.16em;text-transform:uppercase}.q3-mz span{display:flex;gap:6px}.q3-mz i{width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.35)}.q3-mz i.q3-on{background:#fff}.q3-zones{bottom:18px;gap:14px}.q3 .q3-ctl{width:54px;height:54px}.q3-tag{font-size:18px;padding:7px 12px}.q3-tag.q3-two{border-radius:14px}.q3-hot{width:36px;height:36px}.q3-hot::after{width:13px;height:13px}.q3-sign small{font-size:20px}.q3-hl{font-size:20px}.q3 .q3-all{font-size:17px;padding:14px 22px}.q3-hint{left:12px;right:12px;bottom:92px;width:auto;max-width:none;transform:none;display:block;padding:12px 14px}.q3-how{display:none}.q3 .q3-hint h2{font-size:20px}.q3 .q3-hint p{font-size:13px}}.q3 .q3-fitw{background:radial-gradient(ellipse at 50% 0,#2a1a1c 0,#120c0d 55%,#0a0708 100%)}.q3-curt{position:absolute;top:0;bottom:0;background:repeating-linear-gradient(90deg,#4a0716 0 18px,#6E0B22 18px 30px,#3a0512 30px 44px);box-shadow:inset 0 0 40px rgba(0,0,0,.6)}.q3-curt.q3-l{border-radius:0 0 60px 0}.q3-curt.q3-r{border-radius:0 0 0 60px}.q3-mir{position:absolute;border-radius:200px 200px 18px 18px;background:linear-gradient(180deg,#efebe5,#d6d0c7 70%,#c7c0b6);border:10px solid #F4F3F0;box-shadow:0 0 0 2px #6E0B22,0 0 40px rgba(244,243,240,.18),inset 0 0 60px rgba(0,0,0,.18)}.q3-fs{position:absolute;display:block;cursor:pointer}.q3 .q3-fs img{width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 12px 14px rgba(0,0,0,.28))}.q3 .q3-fs img.q3-out{opacity:0}.q3 .q3-fs .q3-hot{right:4%;top:4%}.q3 .q3-sw{position:absolute;width:56px;height:56px;border-radius:50%;display:grid;place-items:center;background:#111;color:#fff;font-size:30px;line-height:1;border:2px solid #F4F3F0;box-shadow:0 6px 16px rgba(0,0,0,.35);z-index:2}.q3 .q3-sw:hover{background:#6E0B22}.q3-fhd{position:absolute;display:flex;flex-direction:column;gap:8px;color:#fff;pointer-events:none}.q3-fhd .q3-k{font-size:12px;font-weight:600;letter-spacing:.3em;text-transform:uppercase;color:#e7a9b6}.q3 .q3-fhd b{font-size:40px;line-height:1.05;font-weight:600}.q3 .q3-fhd p{font-size:15px;line-height:1.45;color:#d9d3d5}.q3-fc{position:absolute;display:flex;flex-direction:column;gap:4px;padding:14px 16px;border-radius:14px;background:rgba(244,243,240,.96);color:#111;box-shadow:0 10px 24px rgba(0,0,0,.35)}.q3-fc .q3-fl{font-size:11px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:#6E0B22}.q3 .q3-fc .q3-fn{font-size:18px;font-weight:600;line-height:1.2;color:#111}.q3-fc .q3-fp{font-size:14px;color:#444}.q3 .q3-fc .q3-fv{align-self:flex-start;margin-top:6px;padding:8px 14px;border-radius:99px;background:#111;color:#fff;font-size:11px;font-weight:600;letter-spacing:.16em;text-transform:uppercase}.q3 .q3-fc.q3-ftot{flex-direction:row;justify-content:space-between;align-items:center;background:#6E0B22;color:#fff}.q3 .q3-ftot .q3-fl{color:#fff}.q3 .q3-ftot b{font-size:26px}@media(max-width:749px){.q3-fhd{transform:translateX(-50%);align-items:center;text-align:center;gap:6px}.q3-fhd .q3-k{font-size:19px}.q3 .q3-fhd b{font-size:46px}.q3-fhd .q3-tot{font-size:22px;font-weight:600;color:#fff;background:#6E0B22;padding:6px 16px;border-radius:99px;margin-top:4px}.q3 .q3-sw{width:76px;height:76px;font-size:42px}.q3-fc{padding:16px 18px;gap:6px;border-radius:18px}.q3-fc .q3-fl{font-size:16px}.q3 .q3-fc .q3-fn{font-size:23px}.q3-fc .q3-fp{font-size:19px}.q3 .q3-fc .q3-fv{font-size:16px;padding:10px 18px}.q3 .q3-fs .q3-hot{width:36px;height:36px}}.q3-wall img:not(.q3-ok){opacity:0}.q3-wall .q3-hot::before{animation:none}.q3-drag .q3-hot::before,.q3-rm .q3-hot::before{animation-play-state:paused}.q3-rm .q3-hot::before{animation:none}@media(prefers-reduced-motion:reduce){.q3-hot::before{animation:none}.q3-wall img{transition:none!important}}.q3-drag .q3-view{cursor:grabbing}.q3 .q3-card img{filter:drop-shadow(0 14px 18px rgba(0,0,0,.4))}.q3-reg{position:absolute}.q3-reg.q3-lp{background:linear-gradient(180deg,#1a0d11,#0a0708);box-shadow:inset 0 3px 0 #a3203f,inset 0 40px 60px -30px rgba(163,32,63,.75)}.q3-reg.q3-dn{background:linear-gradient(180deg,#fbfaf8,#ebe9e4)}.q3-rlab{position:absolute;display:flex;flex-direction:column;align-items:center;gap:8px;transform:translateX(-50%);pointer-events:none}.q3 .q3-rlab img{width:auto}.q3-rlab small{font-size:12px;font-weight:600;letter-spacing:.3em;text-transform:uppercase;white-space:nowrap}.q3-rlab.q3-lp small{color:#fff;opacity:.85}.q3-rlab.q3-dn small{color:#111;opacity:.8}.q3 .q3-rlab.q3-lp img{filter:drop-shadow(0 0 2px #fff) drop-shadow(0 0 8px #a3203f)}.q3-ctt{position:absolute;transform:translateX(-50%);display:flex;align-items:baseline;gap:10px;padding:9px 18px;border-radius:99px;background:#6E0B22;color:#fff;box-shadow:0 0 0 2px #F4F3F0,0 8px 24px rgba(0,0,0,.4);white-space:nowrap;pointer-events:none;z-index:2}.q3 .q3-ctt b{font-size:18px;font-weight:600;letter-spacing:.2em;text-transform:uppercase}.q3-ctt span{font-size:11px;letter-spacing:.12em;text-transform:uppercase;opacity:.8}.q3-off{display:none;position:absolute;inset:0;flex-direction:column;align-items:center;justify-content:center;gap:12px;z-index:3;text-align:center}.q3-off span{font-size:12px;font-weight:600;letter-spacing:.24em;text-transform:uppercase;opacity:.75}.q3-reg.q3-dn .q3-off span{color:#111}.q3 .q3-off button{padding:10px 16px;border-radius:99px;background:#111;color:#fff;font-size:11px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;border:1px solid rgba(255,255,255,.3)}.q3-f-lp .q3-reg[data-s=dn]>:not(.q3-off),.q3-f-dn .q3-reg[data-s=lp]>:not(.q3-off){opacity:.1;pointer-events:none}.q3-f-lp .q3-reg[data-s=dn]>.q3-off,.q3-f-dn .q3-reg[data-s=lp]>.q3-off{display:flex}.q3-tools{position:absolute;z-index:31;top:14px;right:16px;display:flex;gap:8px;align-items:center}.q3-seg{display:flex;gap:2px;padding:4px;border-radius:99px;background:rgba(8,6,7,.84);border:1px solid rgba(255,255,255,.16)}.q3 .q3-seg button,.q3 .q3-lv{height:34px;padding:0 13px;border-radius:99px;font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#fff;white-space:nowrap;display:inline-flex;align-items:center;gap:8px}.q3 .q3-seg button{opacity:.75}.q3 .q3-seg button.q3-on{opacity:1;background:#fff;color:#111}.q3 .q3-seg button.q3-on[data-f=lp]{background:var(--qb);color:#fff}.q3 .q3-lv{height:44px;padding:0 16px;background:rgba(8,6,7,.84);border:1px solid rgba(255,255,255,.22)}.q3 .q3-lv[aria-pressed=true]{background:#fff;color:#111}.q3-g{width:12px;height:12px;background:linear-gradient(currentColor,currentColor) 0 0/5px 5px no-repeat,linear-gradient(currentColor,currentColor) 7px 0/5px 5px no-repeat,linear-gradient(currentColor,currentColor) 0 7px/5px 5px no-repeat,linear-gradient(currentColor,currentColor) 7px 7px/5px 5px no-repeat}.q3 em,.q3 u{font-style:normal;text-decoration:none}.q3-seg u{display:none}@media(max-width:1100px) and (min-width:750px){.q3 .q3-zbar button{padding:0 8px;letter-spacing:.04em;font-size:10px}.q3-seg em{display:none}.q3-seg u{display:inline}}@media(max-width:749px){.q3-tools{left:10px;right:10px;top:10px;justify-content:space-between}.q3-seg em{display:none}.q3-seg u{display:inline}.q3 .q3-seg button{height:36px;padding:0 14px}.q3 .q3-lv{height:44px}.q3-rlab small{font-size:17px}.q3 .q3-ctt b{font-size:30px}.q3-ctt span{font-size:16px}.q3-ctt{padding:12px 26px;gap:14px}.q3-off span{font-size:18px}.q3 .q3-off button{font-size:17px;padding:14px 22px}}.q3 [hidden]{display:none!important}.q3.q3-listing{height:auto!important;min-height:560px;overflow:visible}.q3-listing .q3-view,.q3-listing .q3-zones,.q3-listing .q3-hint{display:none}.q3-list{position:relative;padding:78px 28px 56px;max-width:1240px;margin:0 auto;color:#fff}.q3-lhd{display:flex;justify-content:space-between;align-items:flex-end;gap:16px;flex-wrap:wrap}.q3-lhd .q3-k{font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:#c9a5ae}.q3 .q3-lhd h2{font-size:32px;line-height:1.1;font-weight:600;margin-top:6px}.q3 .q3-back{padding:12px 18px;border-radius:99px;background:#fff;color:#111;font-size:11px;font-weight:600;letter-spacing:.16em;text-transform:uppercase}.q3-lsec{margin-top:36px}.q3 .q3-lsec h3{font-size:13px;font-weight:600;letter-spacing:.24em;text-transform:uppercase;color:#e7a9b6;padding-bottom:10px;border-bottom:1px solid rgba(255,255,255,.12)}.q3-lsec h3 small{margin-left:8px;color:#fff;opacity:.55;letter-spacing:.12em;font-size:11px}.q3-lgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:18px;margin-top:16px}.q3 .q3-lc{display:flex;flex-direction:column;gap:3px;color:#fff;min-width:0}.q3-lim{display:block;position:relative;width:100%;aspect-ratio:1/1;overflow:hidden;border-radius:14px;background:#F4F3F0;margin-bottom:8px;transition:box-shadow .2s}.q3 .q3-lim img{position:absolute;left:9%;top:9%;width:82%;height:82%;object-fit:contain}.q3-lc:hover .q3-lim,.q3-lc:focus-visible .q3-lim{box-shadow:0 0 0 3px var(--qb)}.q3-lsd{font-size:10px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#e7a9b6}.q3-lc.q3-dn .q3-lsd{color:#cfcac2}.q3 .q3-lc b{font-size:15px;line-height:1.25}.q3-lco{font-size:13px;opacity:.7}.q3-lpr{font-size:15px;font-weight:600}@media(max-width:749px){.q3-list{padding:70px 14px 40px}.q3 .q3-lhd h2{font-size:24px}.q3-lgrid{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.q3 .q3-lc b{font-size:14px}}.q3 .q3-lc.q3-card .q3-lim img{left:0;top:0;width:100%;height:100%;object-fit:cover}.q3-half.q3-r,.q3-reg.q3-dn{background:radial-gradient(ellipse 80% 70% at 50% 42%,#EEECE8 0,#E4E2DD 60%,#D9D6CF 100%)}.q3 .q3-it.q3-dn img,.q3 .q3-reg.q3-dn .q3-it img{filter:drop-shadow(0 0 1px rgba(0,0,0,.28)) drop-shadow(0 12px 14px rgba(0,0,0,.26))}.q3 .q3-it.q3-lp img{filter:drop-shadow(0 0 1px rgba(0,0,0,.35)) drop-shadow(0 16px 18px rgba(0,0,0,.45))}.q3-mir{background:radial-gradient(ellipse 80% 70% at 50% 40%,#E9E6E0 0,#DCD8D0 60%,#C9C3B9 100%)}.q3 .q3-fs img{filter:drop-shadow(0 0 1px rgba(0,0,0,.3)) drop-shadow(0 12px 14px rgba(0,0,0,.3))}.q3-lim{background:radial-gradient(ellipse 75% 70% at 50% 45%,#ECEAE6 0,#E4E2DD 60%,#D7D4CD 100%)}.q3 .q3-lim img{filter:drop-shadow(0 0 1px rgba(0,0,0,.25)) drop-shadow(0 8px 12px rgba(0,0,0,.22))}.q3 .q3-lc.q3-card .q3-lim img{filter:none;mix-blend-mode:multiply}html.q3-lock,html.q3-lock body{overflow:hidden!important}.q3-cu{position:fixed;inset:0;z-index:2147483000;display:none;align-items:center;justify-content:center;background:rgba(3,2,3,.74);color:#fff}.q3-cu.q3-on{display:flex}.q3-box{position:relative;width:min(980px,calc(100vw - 80px));max-height:calc(100vh - 40px);display:grid;grid-template-columns:1.12fr 1fr;border-radius:22px;overflow:hidden;box-shadow:0 40px 90px rgba(0,0,0,.6);overscroll-behavior:contain}.q3-box.q3-lp{background:#0e0809;border:1px solid rgba(163,32,63,.7);color:#fff;box-shadow:0 0 70px rgba(110,11,34,.55),0 40px 90px rgba(0,0,0,.6)}.q3-box.q3-dn{background:var(--qow);color:#111;border:1px solid #fff}.q3-stage{position:relative;background:var(--qow);aspect-ratio:1/1;max-height:calc(100vh - 40px);overflow:hidden}.q3-pic{position:absolute;inset:0}.q3-cu .q3-pic>img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}.q3-thumbs{position:absolute;left:14px;bottom:14px;display:flex;gap:8px}.q3-cu .q3-thumbs button{width:58px;height:58px;border-radius:10px;overflow:hidden;border:2px solid transparent;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.15);padding:0}.q3-cu .q3-thumbs button.q3-on{border-color:var(--qb)}.q3-cu .q3-thumbs img{width:100%;height:100%;object-fit:cover}.q3-info{padding:34px 34px 30px;display:flex;flex-direction:column;overflow:auto}.q3-chip{display:inline-flex;align-self:flex-start;align-items:center;gap:8px;border-radius:99px;padding:7px 12px;font-size:10.5px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;white-space:nowrap}.q3-chip.q3-lp{background:var(--qb);color:#fff}.q3-chip.q3-dn{background:var(--qow);color:#111;border:1px solid #cfcdc8}.q3-cu .q3-chip img{height:12px;width:auto}.q3-cu h2{font-size:32px;line-height:1.08;font-weight:600;margin-top:18px}.q3-col{font-size:14px;opacity:.7;margin-top:6px}.q3-pr{font-size:22px;font-weight:600;margin-top:14px}.q3-pr small{display:block;font-size:12px;font-weight:400;opacity:.65;margin-top:4px}.q3-box.q3-lp .q3-pr{color:var(--qr)}.q3-box.q3-dn .q3-pr{color:var(--qb)}.q3-lbl{font-size:11px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;opacity:.7;margin-top:24px}.q3-sz{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}.q3-cu .q3-sz button{min-width:48px;height:44px;padding:0 12px;border-radius:10px;font-size:13px;font-weight:600}.q3-cu .q3-box.q3-lp .q3-sz button{border:1px solid rgba(255,255,255,.3)}.q3-cu .q3-box.q3-dn .q3-sz button{border:1px solid #c9c7c2;background:#fff}.q3-cu .q3-box.q3-lp .q3-sz button.q3-on{background:#fff;color:#111;border-color:#fff}.q3-cu .q3-box.q3-dn .q3-sz button.q3-on{background:#111;color:#fff;border-color:#111}.q3-cu .q3-sz button.q3-oos{opacity:.4;text-decoration:line-through}.q3-go{margin-top:auto;padding-top:24px;display:flex;flex-direction:column;gap:10px}.q3-cu .q3-go a{display:flex;align-items:center;justify-content:center;height:52px;border-radius:99px;font-size:12.5px;font-weight:600;letter-spacing:.18em;text-transform:uppercase}.q3-cu .q3-box.q3-lp .q3-go a{background:var(--qb);color:#fff;box-shadow:0 0 22px rgba(163,32,63,.6)}.q3-cu .q3-box.q3-dn .q3-go a{background:#111;color:#fff}.q3-go small{font-size:12px;opacity:.6;text-align:center}.q3-cu .q3-x{position:absolute;top:14px;right:14px;z-index:3;width:42px;height:42px;border-radius:50%;display:grid;place-items:center;font-size:20px;background:rgba(0,0,0,.55);color:#fff}.q3-cu .q3-box.q3-dn .q3-x{background:#fff;color:#111;border:1px solid #d4d2cd}.q3-cu .q3-nav{position:absolute;top:50%;transform:translateY(-50%);width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.9);color:#111;display:grid;place-items:center;font-size:18px;box-shadow:0 2px 8px rgba(0,0,0,.2)}.q3-cu .q3-pv{left:12px}.q3-cu .q3-nx{right:12px}@media(max-width:749px){.q3-cu{align-items:flex-end}.q3-box{width:100vw;grid-template-columns:1fr;border-radius:22px 22px 0 0;max-height:92vh;overflow:auto;-webkit-overflow-scrolling:touch}.q3-stage{aspect-ratio:1/.86;max-height:none;flex:0 0 auto}.q3-cu .q3-thumbs button{width:48px;height:48px}.q3-info{padding:18px 18px 22px;overflow:visible}.q3-cu h2{font-size:24px;margin-top:12px}.q3-pr{font-size:19px;margin-top:8px}.q3-lbl{margin-top:14px}.q3-cu .q3-sz button{height:42px;min-width:46px}.q3-go{padding-top:16px;padding-bottom:env(safe-area-inset-bottom)}.q3-cu .q3-go a{height:50px}}.q3-stage{background:radial-gradient(ellipse 75% 70% at 50% 46%,#ECEAE6 0,#E4E2DD 58%,#D5D2CB 100%)}.q3-cu .q3-pic>img{inset:auto;left:50%;top:50%;width:auto;height:auto;max-width:100%;max-height:100%;transform:translate(-50%,-50%);mix-blend-mode:multiply;-webkit-mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent),linear-gradient(transparent,#000 5%,#000 95%,transparent);-webkit-mask-composite:source-in;mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent),linear-gradient(transparent,#000 5%,#000 95%,transparent);mask-composite:intersect}.q3-cu .q3-thumbs button{background:#E4E2DD}.q3-cu .q3-thumbs img{mix-blend-mode:multiply}";
  var RM = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);

  /* categories (each gets its own wall, LP half | DN half); ids not in D (not public) are skipped */
  var CATS = [
    { k: 'tees', n: 'Tees', ar: 1.05, fx: 'rail', ids: ['qs-lp-ts01-classic-tee-white', 'lockup-back-tee-off-white', 'embroidered-qs-tee-burgundy', 'maison-monogram-tee-black', 'maison-monogram-tee-white'] },
    { k: 'tops', n: 'Hoodies & Crews', ar: 1, fx: 'rail', ids: ['lockup-hoodie-black', 'wordmark-hoodie-white', 'seal-crew-burgundy', 'letterpress-crew-white', 'wordmark-crew-white', 'embroidered-qs-hoodie-burgundy', 'scattered-monogram-hoodie-white', 'embroidered-qs-crew-black', 'damask-crew-burgundy'] },
    { k: 'joggers', n: 'Joggers', ar: 1.9, fx: 'rail', ids: ['wordmark-leg-joggers-black', 'hem-band-joggers-off-white', 'embroidered-qs-joggers-burgundy', 'maison-monogram-joggers-black'] },
    { k: 'hats', n: 'Hats', ar: .9, fx: 'shelf', ids: ['wordmark-snapback-black', 'wordmark-cuff-beanie-black', 'wordmark-cuff-beanie-white', 'qs-snapback-black', 'qs-snapback-burgundy', 'qs-cuff-beanie-burgundy'] },
    { k: 'bags', n: 'Bags & More', ar: 1.05, fx: 'shelf', ids: ['qs-lp-bp04-backpack-black', 'qs-lp-bp05-backpack-white', 'wordmark-lattice-crossbody-white', 'maison-monogram-backpack-black', 'scattered-monogram-backpack-white', 'damask-crossbody-burgundy'] }];
  CATS.forEach(function (c) { c.ids = c.ids.filter(function (id) { return D[id]; }); });
  function cat(k) { for (var i = 0; i < CATS.length; i++) if (CATS[i].k === k) return CATS[i]; }
  /* 7 walls, clockwise (positive = turn right): Front, Tees, Hoodies & Crews, Joggers, Dressing room, Bags & More, Hats */
  var ORDER = [{ k: 'front', n: 'Front', s: 'mx' }, { k: 'tees', n: 'Tees', s: 'mx' }, { k: 'tops', n: 'Hoodies & Crews', s: 'mx' }, { k: 'joggers', n: 'Joggers', s: 'mx' },
    { k: 'fit', n: 'Dressing room', s: 'mx' }, { k: 'bags', n: 'Bags & More', s: 'mx' }, { k: 'hats', n: 'Hats', s: 'mx' }];
  var NZ = ORDER.length, STEP = 360 / NZ, CULL = 90 - STEP / 2 - 2;
  var ZONES = ORDER.map(function (z, i) { z.a = ((i * STEP + 180) % 360) - 180; z.i = i; return z; });
  var BAR = ZONES.slice().sort(function (a, b) { return a.a - b.a; });   /* tab bar left -> right by angle */
  /* dressing room racks (tees + hoodies/crews, all joggers) */
  var TOPS = cat('tees').ids.concat(cat('tops').ids), BOTS = cat('joggers').ids.slice();
  var ti = 0, bi = 0, FIL = 'all';

  function P(id) { return D[id]; }
  function cut(id) { return (P(id).o ? OWN : IMG) + 'p/' + id + '.webp'; }
  function gal(id) { return (P(id).o ? OWN : IMG) + 'g/'; }
  function url(id) { return SHOP + id; }
  function money(id) { return '$' + P(id).p; }
  function okF(id) { return FIL === 'all' || P(id).s === FIL; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function q(sel, ctx) { return (ctx || root).querySelector(sel); }
  function qa(sel, ctx) { return [].slice.call((ctx || root).querySelectorAll(sel)); }
  function px(e, css) { for (var k in css) e.style[k] = typeof css[k] === 'number' ? css[k] + 'px' : css[k]; return e; }
  function div(cls, css, html, tag) { var d = document.createElement(tag || 'div'); d.className = cls; if (html) d.innerHTML = html; return px(d, css || {}); }

  var host, root, view, cam, M, W, H, R, PERS = 600, yaw = 0, moved = false, raf = 0, walls = {}, lastZ = null, built = false, anim = null, dragging = false;

  /* ===== wall contents (face px coordinates; desktop face 1200x780, phone face 720x1080) ===== */
  function put(face, id, x, y, w, h, o) {
    o = o || {}; var p = P(id); if (!p) return null;
    var a = div('q3-it q3-' + p.s + (p.k ? ' q3-card' : ''), { left: x - w / 2, top: y, width: w, height: h },
      '<img data-src="' + cut(id) + '" alt="" decoding="async">' + '<i class="q3-hot"></i>' +
      '<span class="q3-tag q3-' + p.s + ' q3-two" style="max-width:' + Math.round(o.tw || Math.max(w + 30, M ? 170 : 130)) + 'px">' + esc(p.n) + '<i>' + money(id) + '</i></span>', 'a');
    a.href = url(id); a.setAttribute('aria-label', p.n + ' ' + p.c + ', ' + money(id)); a.setAttribute('data-id', id); a.draggable = false;
    a.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); if (moved) return; open(id); });
    face.appendChild(a); return a;
  }
  function sign(face, s, x, y, scale, short) {
    face.appendChild(div('q3-sign', { left: x, top: y }, s === 'lp'
      ? '<img data-src="' + LOGO.word + '" style="height:' + (M ? 20 : 26) * (scale || 1) + 'px" alt="QUALITY \u2022 STONER"><small>Loud &amp; Proud' + (short ? '' : ' &middot; full wordmark') + '</small>'
      : '<img data-src="' + LOGO.mkK + '" style="height:' + (M ? 74 : 92) * (scale || 1) + 'px" alt="QS"><small>Discreet &amp; Neat' + (short ? '' : ' &middot; QS only') + '</small>'));
  }
  function allPill(face, s, x, y, short) {
    var a = div('q3-all q3-' + s, { left: x, top: y }, short ? 'Shop all &#8594;' : s === 'lp' ? 'Shop all Loud &amp; Proud &#8594;' : 'Shop all Discreet &amp; Neat &#8594;', 'a');
    a.href = 'https://qualitystoner.com/collections/' + (s === 'lp' ? 'loud-proud' : 'discreet-neat'); a.draggable = false;
    a.addEventListener('click', function (e) { if (moved) e.preventDefault(); });
    face.appendChild(a);
  }
  /* note shown on a half when the filter hides that side */
  function offNote(reg, s) {
    var other = s === 'lp' ? 'Discreet & Neat' : 'Loud & Proud';
    var b = div('q3-off', {}, '<span>' + esc(s === 'lp' ? 'Loud & Proud' : 'Discreet & Neat') + ' hidden</span><button type="button" data-f="all">Show all</button>', 'div');
    reg.appendChild(b); return other;
  }
  /* one half of a split wall: LP (black/burgundy) on the left, DN (off-white) on the right; children use half-local x */
  function half(f, s) { var h = div('q3-half q3-reg ' + (s === 'lp' ? 'q3-l q3-lp' : 'q3-r q3-dn')); h.setAttribute('data-s', s); f.appendChild(h); offNote(h, s); return h; }
  function bar(h, cls, x0, x1, y) { h.appendChild(div(cls, { left: x0, top: y, width: x1 - x0 })); }
  /* entry view: both sides at a glance, one shirt + one hat + one bag each */
  var FRONT = { lp: ['qs-lp-ts01-classic-tee-white', 'wordmark-snapback-black', 'qs-lp-bp04-backpack-black'], dn: ['embroidered-qs-tee-burgundy', 'qs-snapback-burgundy', 'maison-monogram-backpack-black'] };
  function frontHalf(f, s) {
    var h = half(f, s), c = W / 4, ids = FRONT[s];
    sign(h, s, c, s === 'lp' ? (M ? 70 : 52) : (M ? 44 : 30), M ? .7 : .8, M);
    var ry = M ? 230 : 160, sw = M ? 250 : 230;
    bar(h, 'q3-rail', c - sw / 2 - 10, c + sw / 2 + 10, ry); h.appendChild(div('q3-hang', { left: c, top: ry + 6, height: 16 }));
    put(h, ids[0], c, ry + 20, sw, sw, { tw: M ? 300 : 220 });
    var sy = M ? 880 : 640, hx = M ? 95 : 175, bx = M ? 262 : 420;
    bar(h, 'q3-shelf', M ? 20 : 80, M ? 340 : 520, sy);
    put(h, ids[1], hx, sy - (M ? 100 : 96), M ? 120 : 116, M ? 100 : 96, { tw: M ? 160 : 150 });
    put(h, ids[2], bx, sy - 150, 125, 150, { tw: M ? 160 : 150 });
    if (M) allPill(h, s, c, 650, 1);
  }
  /* best grid for n items of aspect ar (h/w) inside aw x ah; tag = room reserved under each item for its name tag */
  function grid(n, aw, ah, ar, cap, tag) {
    var best = null;
    for (var c = 1; c <= n; c++) { var r = Math.ceil(n / c), cw = aw / c, ch = ah / r, w = Math.min(cw - (M ? 18 : 30), (ch - tag) / ar, cap); if (!best || w > best.w + .5) best = { c: c, r: r, cw: cw, ch: ch, w: w }; }
    return best;
  }
  function region(f, c, s, rc) {
    var ids = c.ids.filter(function (id) { return P(id).s === s; });
    var reg = div('q3-reg q3-' + s, { left: rc.x, top: rc.y, width: rc.w, height: rc.h }); reg.setAttribute('data-s', s); f.appendChild(reg);
    var lab = div('q3-rlab q3-' + s, { left: rc.w / 2, top: M ? 22 : 96 }, s === 'lp'
      ? '<img data-src="' + LOGO.word + '" style="height:' + (M ? 13 : 15) + 'px" alt="QUALITY \u2022 STONER"><small>Loud &amp; Proud</small>'
      : '<img data-src="' + LOGO.mkK + '" style="height:' + (M ? 34 : 40) + 'px" alt="QS"><small>Discreet &amp; Neat</small>');
    reg.appendChild(lab); offNote(reg, s);
    if (!ids.length) return;
    var top = M ? 92 : 176, ah = rc.h - top - (M ? 14 : 96), aw = rc.w - (M ? 30 : 50);
    var tag = M ? 78 : 58, g = grid(ids.length, aw, ah, c.ar, M ? 230 : 200, tag + (c.fx === 'rail' ? 34 : 6)), w = g.w, h = w * c.ar;
    for (var row = 0; row < g.r; row++) {
      var rowIds = ids.slice(row * g.c, row * g.c + g.c), k = rowIds.length;
      var x0 = (rc.w - k * g.cw) / 2, cellTop = top + row * g.ch, iy = cellTop + (c.fx === 'rail' ? 26 : 0) + Math.max(0, (g.ch - tag - (c.fx === 'rail' ? 34 : 6) - h) / 2);
      var xs = rowIds.map(function (id, i) { return x0 + (i + .5) * g.cw; });
      if (c.fx === 'rail') {
        bar(reg, 'q3-rail', xs[0] - w / 2 - 12, xs[k - 1] + w / 2 + 12, iy - 22);
        xs.forEach(function (x) { reg.appendChild(div('q3-hang', { left: x, top: iy - 16, height: 16 })); });
      } else bar(reg, 'q3-shelf', xs[0] - w / 2 - 22, xs[k - 1] + w / 2 + 22, iy + h);
      rowIds.forEach(function (id, i) { put(reg, id, xs[i], iy, w, h, { tw: g.cw - 10 }); });
    }
  }
  function catWall(f, c) {
    var rs = M ? [{ x: 0, y: 128, w: W, h: 468 }, { x: 0, y: 604, w: W, h: 468 }] : [{ x: 0, y: 0, w: W / 2, h: H }, { x: W / 2, y: 0, w: W / 2, h: H }];
    region(f, c, 'lp', rs[0]); region(f, c, 'dn', rs[1]);
    f.appendChild(div('q3-ctt', { left: W / 2, top: M ? 46 : 22 }, '<b>' + esc(c.n) + '</b><span>' + c.ids.length + ' pieces</span>'));
  }
  var BUILD = {
    front: function (f) { frontHalf(f, 'lp'); frontHalf(f, 'dn'); },
    tees: function (f) { catWall(f, cat('tees')); }, tops: function (f) { catWall(f, cat('tops')); }, joggers: function (f) { catWall(f, cat('joggers')); },
    hats: function (f) { catWall(f, cat('hats')); }, bags: function (f) { catWall(f, cat('bags')); },
    fit: function (f) { fitRoom(f); }
  };

  /* ===== dressing room: one top + one pair of joggers, each swappable, both prices + links ===== */
  var FITF = null;
  /* rack lists follow the LP / DN / All filter; if a side has no joggers/tops the other side's are shown */
  function fl(which) { var a = which === 't' ? TOPS : BOTS, b = a.filter(okF); return b.length ? b : a; }
  function fitRoom(f) {
    FITF = f; f.classList.add('q3-fitw');
    f.appendChild(div('q3-curt q3-l', M ? { left: 0, width: 70 } : { left: 0, width: 150 }));
    f.appendChild(div('q3-curt q3-r', M ? { right: 0, width: 70 } : { right: 0, width: 150 }));
    var mx = M ? 360 : 455, mw = M ? 520 : 420, mt = M ? 140 : 50, mh = M ? 700 : 680;
    var mir = div('q3-mir', { left: mx - mw / 2, top: mt, width: mw, height: mh }); f.appendChild(mir);
    function slot(cls, x, y, w, h) {
      var a = div('q3-fs ' + cls, { left: x - w / 2, top: y, width: w, height: h }, '<img data-src="" alt=""><i class="q3-hot"></i>', 'a');
      a.draggable = false; a.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); if (moved) return; open(a.getAttribute('data-id')); });
      f.appendChild(a); return a;
    }
    var ty = mt + 24, th = M ? 300 : 290, by = mt + (M ? 300 : 288), bh = M ? 380 : 370;
    slot('q3-fb', mx, by, M ? 200 : 190, bh); slot('q3-ft', mx, ty, M ? 340 : 300, th);
    function arrow(dir, which, x, y) {
      var b = div('q3-sw', { left: x, top: y }, dir < 0 ? '&#8249;' : '&#8250;', 'button'); b.type = 'button';
      b.setAttribute('aria-label', (dir < 0 ? 'Previous ' : 'Next ') + (which === 't' ? 'top' : 'joggers'));
      b.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); if (moved) return; var n = fl(which).length; if (which === 't') ti = (ti + dir + n) % n; else bi = (bi + dir + n) % n; paintFit(which); });
      f.appendChild(b);
    }
    var aw = M ? 76 : 56, l = mx - mw / 2 + (M ? 8 : 10), r = mx + mw / 2 - aw - (M ? 8 : 10);
    arrow(-1, 't', l, ty + th / 2 - aw / 2); arrow(1, 't', r, ty + th / 2 - aw / 2);
    arrow(-1, 'b', l, by + bh / 2 - aw / 2); arrow(1, 'b', r, by + bh / 2 - aw / 2);
    var head = M ? div('q3-fhd', { left: W / 2, top: 34 }, '<span class="q3-k">Dressing room</span><b>Build a fit.</b><span class="q3-tot"></span>')
      : div('q3-fhd q3-fside', { left: 700, top: 70, width: 340 }, '<span class="q3-k">Dressing room</span><b>Build a fit.</b><p>Pick a top, pick joggers, see them together. Tap a piece to look closer.</p>');
    f.appendChild(head);
    function card(which, css) {
      var c = div('q3-fc q3-fc-' + which, css, '<span class="q3-fl"></span><a class="q3-fn"></a><div class="q3-fp"></div><a class="q3-fv">View &#8594;</a>');
      qa('a', c).forEach(function (a) { a.draggable = false; a.addEventListener('click', function (e) { if (moved) e.preventDefault(); e.stopPropagation(); }); });
      f.appendChild(c); return c;
    }
    if (M) { card('t', { left: 30, top: 858, width: 322 }); card('b', { left: 368, top: 858, width: 322 }); }
    else { card('t', { left: 700, top: 270, width: 340 }); card('b', { left: 700, top: 420, width: 340 }); f.appendChild(div('q3-fc q3-ftot', { left: 700, top: 570, width: 340 }, '<span class="q3-fl">Fit total</span><b class="q3-tot"></b>')); }
    paintFit('t', 1); paintFit('b', 1);
  }
  function paintFit(which, first) {
    var f = FITF; if (!f) return; var w = walls.fit, ld = !!(w && w.loaded);
    var LT = fl('t'), LB = fl('b'); if (ti >= LT.length) ti = 0; if (bi >= LB.length) bi = 0;
    var id = which === 't' ? LT[ti] : LB[bi], p = P(id), sl = q(which === 't' ? '.q3-ft' : '.q3-fb', f), im = q('img', sl);
    sl.href = url(id); sl.setAttribute('data-id', id); sl.setAttribute('aria-label', p.n + ' ' + p.c + ', ' + money(id)); sl.className = 'q3-fs ' + (which === 't' ? 'q3-ft' : 'q3-fb') + ' q3-' + p.s + (p.k ? ' q3-card' : '');
    if (ld) { var src = cut(id); im.classList.add('q3-out'); setTimeout(function () { im.onload = function () { im.classList.remove('q3-out'); }; im.src = src; if (im.complete) im.classList.remove('q3-out'); }, first || RM ? 0 : 160); }
    else im.setAttribute('data-src', cut(id));
    var c = q('.q3-fc-' + which, f);
    q('.q3-fl', c).textContent = (which === 't' ? 'Top' : 'Joggers') + ' \u00b7 ' + ((which === 't' ? ti : bi) + 1) + ' of ' + (which === 't' ? LT.length : LB.length);
    var n = q('.q3-fn', c); n.textContent = p.n + ' \u2014 ' + p.c; n.href = url(id);
    q('.q3-fp', c).textContent = money(id) + (p.s === 'lp' ? ' \u00b7 Loud & Proud' : ' \u00b7 Discreet & Neat');
    q('.q3-fv', c).href = url(id);
    var tot = (+P(LT[ti]).p) + (+P(LB[bi]).p), ts = '$' + (tot % 1 ? tot.toFixed(2) : tot);
    qa('.q3-tot', f).forEach(function (t) { t.textContent = M ? 'Fit total ' + ts : ts; });
  }


  /* ===== mount ===== */
  function mount() {
    if (!document.getElementById('q3-css')) { var st = document.createElement('style'); st.id = 'q3-css'; st.textContent = CSS; document.head.appendChild(st); }
    host = document.getElementById('qs-store') || document.querySelector('[data-qs-store]');
    if (!host) { host = document.createElement('div'); host.id = 'qs-store'; if (me && me.parentNode) me.parentNode.insertBefore(host, me); else document.body.appendChild(host); }
    host.classList.add('q3-host');
    root = div('q3' + (RM ? ' q3-rm' : ''), {}, '<div class="q3-view" tabindex="0" aria-label="The Quality Stoner shop. Drag or swipe to look around."><div class="q3-cam"></div></div>' +
      '<div class="q3-tools"><div class="q3-seg" role="group" aria-label="Show"><button type="button" data-f="all" class="q3-on">All</button><button type="button" data-f="lp"><em>Loud &amp; Proud</em><u>LP</u></button><button type="button" data-f="dn"><em>Discreet &amp; Neat</em><u>DN</u></button></div>' +
      '<button type="button" class="q3-lv" aria-pressed="false"><span class="q3-g"></span><em>List view</em></button></div>' +
      '<div class="q3-hint"><div class="q3-k">Quality Stoner &middot; Inside</div><h2>Look around the shop.</h2><p>Every wall is one category: tees, hoodies &amp; crews, joggers, hats, bags. Loud &amp; Proud on one side, Discreet &amp; Neat on the other; the dressing room is at the back. Tap any piece to look closer, or use List view.</p><div class="q3-how"><span>Drag / swipe to look</span><span>Tap a piece</span></div></div>' +
      '<div class="q3-zones"><button type="button" class="q3-ctl q3-prev" aria-label="Turn left">&#8249;</button><div class="q3-zbar"></div><div class="q3-mz" aria-live="polite"><b></b><span></span></div><button type="button" class="q3-ctl q3-next" aria-label="Turn right">&#8250;</button></div>' +
      '<div class="q3-list" hidden></div>');
    host.innerHTML = ''; host.appendChild(root);
    view = q('.q3-view'); cam = q('.q3-cam');
    q('.q3-zbar').innerHTML = BAR.map(function (z) { return '<button type="button" data-k="' + z.k + '">' + esc(z.n) + '</button>'; }).join('');
    q('.q3-mz span').innerHTML = ZONES.map(function (z) { return '<i data-k="' + z.k + '"></i>'; }).join('');
    qa('.q3-zbar button').forEach(function (b) { b.addEventListener('click', function () { goK(b.getAttribute('data-k')); }); });
    q('.q3-prev').addEventListener('click', function () { goTo(near().a - STEP); });
    q('.q3-next').addEventListener('click', function () { goTo(near().a + STEP); });
    view.addEventListener('keydown', function (e) { if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(near().a - STEP); } if (e.key === 'ArrowRight') { e.preventDefault(); goTo(near().a + STEP); } });
    root.addEventListener('click', function (e) { var b = e.target.closest && e.target.closest('[data-f]'); if (b && root.contains(b)) { e.preventDefault(); e.stopPropagation(); if (!moved) setFilter(b.getAttribute('data-f')); } }, true);
    q('.q3-lv').addEventListener('click', function () { listView(!root.classList.contains('q3-listing')); });
    drag();
    fit(); build();
    var lw = innerWidth;
    addEventListener('resize', function () { if (root.classList.contains('q3-listing')) return; if (innerWidth !== lw) { lw = innerWidth; fit(); build(); } else { bleed(); persp(); } });
    addEventListener('orientationchange', function () { setTimeout(function () { fit(); build(); }, 300); });
    setTimeout(hint, 7000);
    if (/dressing|fit/i.test(location.hash)) { yaw = zone('fit').a; apply(); hint(); }
    /* preload every wall soon after first paint so nothing pops in mid-turn */
    var rest = function () { var ric = window.requestIdleCallback || function (f) { return setTimeout(f, 200); }; ric(function () { ZONES.forEach(function (z) { load(z.k); }); }, { timeout: 1200 }); };
    if (document.readyState === 'complete') setTimeout(rest, 300); else addEventListener('load', function () { setTimeout(rest, 300); });
  }
  /* full-bleed block, one viewport tall under the site header (header/footer stay in normal flow) */
  function bleed() {
    var vw = document.documentElement.clientWidth; host.style.marginLeft = ''; host.style.width = '';
    var r = host.getBoundingClientRect(); host.style.width = vw + 'px'; host.style.marginLeft = (-r.left) + 'px';
  }
  var BH = 0;
  function fit() {
    bleed();
    var hd = 0, h = document.querySelector('header'); if (h) { var b = h.getBoundingClientRect(); if (b.height < 200) hd = b.height; }
    var vh = innerHeight, top = host.getBoundingClientRect().top + scrollY, room = (top > hd && top < vh * .4) ? vh - top : vh - hd, Hh;
    if (document.documentElement.clientWidth < 750) Hh = Math.max(620, Math.min(900, room)); else Hh = Math.max(560, Math.min(980, room));
    BH = Hh; if (!root.classList.contains('q3-listing')) root.style.height = Hh + 'px';
  }
  /* field of view follows the block size: walls fill the height on desktop, a wider lens on phones */
  function persp() {
    var bh = root.clientHeight, bw = root.clientWidth;
    PERS = M ? R * Math.max(.42, Math.min(.7, .56 * bh / 790)) : R * Math.max(.62, Math.min(1.15, Math.min(bh / 830, bw / 1300)));
    PERS = Math.round(Math.max(PERS, bw / 2 / Math.tan((CULL - STEP / 2 - 2) * Math.PI / 180)));
    cam.style.perspective = PERS + 'px';
    cam.style.top = (M ? 47 : 50) + '%';
    apply(1);
  }
  function zone(k) { for (var i = 0; i < ZONES.length; i++) if (ZONES[i].k === k) return ZONES[i]; }
  function build() {
    var m = root.clientWidth < 750;
    if (built && m === M) { persp(); return; }
    M = m; built = true; W = M ? 720 : 1200; H = M ? 1080 : 780; R = W / 2 / Math.tan(Math.PI / NZ) - 1;  /* -1 px: walls overlap a hair, no seams */
    cam.innerHTML = ''; walls = {};
    /* Flat 3D chain (Oct 16 2026 iOS fix): NO transform-style:preserve-3d anywhere. Every wall, floor and ceiling is a direct
       child of .q3-cam (which carries the perspective) with its own full camera*wall transform, written per frame. iOS Safari
       mis-sorts / drops layers inside nested preserve-3d scenes (blank halves, missing items, sheared walls); siblings under
       one perspective parent are projected independently, and the room is convex so visible pieces never overlap. */
    var FD = .6, ox = W / 2 + 'px ', fh = Math.round(R * FD);
    ZONES.forEach(function (z) {
      var w = div('q3-wall q3-' + z.s, { left: -W / 2, top: -H / 2, width: W, height: H });
      w.style.transformOrigin = ox + H / 2 + 'px';
      var face = div('q3-face'); w.appendChild(face); BUILD[z.k](face);
      var fl = div('q3-flo q3-' + z.s, { left: -W / 2, top: H / 2, width: W, height: fh }); fl.style.transformOrigin = ox + (-H / 2) + 'px';
      var ce = div('q3-cei q3-' + z.s, { left: -W / 2, top: -H / 2 - fh, width: W, height: fh }); ce.style.transformOrigin = ox + (H / 2 + fh) + 'px';
      cam.appendChild(fl); cam.appendChild(ce); cam.appendChild(w);
      walls[z.k] = { el: w, fl: fl, ce: ce, loaded: false, z: z, vis: true };
    });
    lastZ = null; persp(); setFilter(FIL, 1);
  }
  function load(k) {
    var w = walls[k]; if (!w || w.loaded) return; w.loaded = true;
    qa('img[data-src]', w.el).forEach(function (i) {
      var src = i.getAttribute('data-src'); i.removeAttribute('data-src'); if (!src) return;
      i.onload = function () { i.classList.add('q3-ok'); }; i.src = src; if (i.complete && i.naturalWidth) i.classList.add('q3-ok');
      if (i.decode) i.decode().then(function () { i.classList.add('q3-ok'); }, function () { });
    });
  }
  function norm(a) { return ((a % 360) + 540) % 360 - 180; }
  function near(y) { var a = norm(y == null ? yaw : y), best = ZONES[0], d = 999; ZONES.forEach(function (z) { var dd = Math.abs(norm(a - z.a)); if (dd < d) { d = dd; best = z; } }); return best; }
  /* the only per-frame work: one GPU transform on the camera; wall bookkeeping only when the nearest wall changes */
  function apply(force) {
    if (!cam) return;
    /* per frame: one transform per visible piece (<= 3 walls + their floor/ceiling). A wall is shown only while its whole
       span stays in front of the eye (|offset| + half a step < 90 deg, with margin): WebKit draws garbage for layers that
       cross the camera plane. */
    var base = 'translate3d(0,0,' + PERS + 'px) rotateY(', tz = 'deg) translate3d(0,0,' + (-R) + 'px)';
    ZONES.forEach(function (x) {
      var w = walls[x.k]; if (!w) return;
      var off = norm(yaw - x.a), vis = Math.abs(off) < CULL;
      if (vis !== w.vis || force) { w.vis = vis; var v = vis ? '' : 'hidden'; w.el.style.visibility = v; w.fl.style.visibility = v; w.ce.style.visibility = v; }
      if (!vis) return;
      var t = base + off.toFixed(3) + tz;
      w.el.style.transform = t;
      w.fl.style.transform = t + ' translate3d(0,' + H / 2 + 'px,0) rotateX(90deg) translate3d(0,' + (-H / 2) + 'px,0)';
      w.ce.style.transform = t + ' translate3d(0,' + (-H / 2) + 'px,0) rotateX(-90deg) translate3d(0,' + H / 2 + 'px,0)';
    });
    var z = near(); if (z === lastZ && !force) return; lastZ = z;
    var i = z.i; [i, (i + 1) % NZ, (i + NZ - 1) % NZ, (i + 2) % NZ, (i + NZ - 2) % NZ].forEach(function (j) { load(ZONES[j].k); });
    qa('.q3-zbar button').forEach(function (b) { b.classList.toggle('q3-on', b.getAttribute('data-k') === z.k); });
    q('.q3-mz b').textContent = z.n; qa('.q3-mz i').forEach(function (d) { d.classList.toggle('q3-on', d.getAttribute('data-k') === z.k); });
  }
  function easeIO(t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
  function goK(k) { var z = zone(k); if (z) goTo(z.a); }
  /* tween yaw to angle a (shortest way): arrows/tabs use ease-in-out 450 ms; flick snaps pass their own duration + ease-out */
  function goTo(a, dur, ez) {
    var to = yaw + norm(a - yaw); hint();
    if (RM || Math.abs(to - yaw) < .01) { anim = null; yaw = to; kick(); return; }
    anim = { f: yaw, t: to, s: 0, d: dur || 450, e: ez || easeIO }; kick();
  }
  function kick() { if (!raf) raf = requestAnimationFrame(tick); }
  function tick(now) {
    raf = 0;
    if (anim && !dragging) {
      if (!anim.s) anim.s = now;
      var t = Math.min(1, (now - anim.s) / anim.d); yaw = anim.f + (anim.t - anim.f) * anim.e(t);
      if (t >= 1) { yaw = anim.t; anim = null; }
    }
    apply(); if (anim && !dragging) kick();
    if (!anim && !dragging) { yaw = norm(yaw); }
  }
  function hint() { var h = q('.q3-hint'); if (h) h.classList.add('q3-gone'); }

  /* drag / swipe: pointer events, 6px dead zone, capture once a horizontal drag is recognised (so taps still reach the
     product links), yaw written on rAF only, release velocity -> projected stop -> eased snap to the nearest wall.
     touch-action: pan-y on the view lets vertical swipes scroll the page natively. */
  function drag() {
    var on = false, x0, y0, lx, pid = null, horiz = null, samples = [];
    var K = function () { return M ? .3 : .15; };   /* degrees per px */
    view.addEventListener('pointerdown', function (e) {
      if (e.button && e.button !== 0) return;
      on = true; pid = e.pointerId; moved = false; horiz = null; x0 = lx = e.clientX; y0 = e.clientY; samples = [];
    });
    view.addEventListener('pointermove', function (e) {
      if (!on || e.pointerId !== pid) return;
      var tx = Math.abs(e.clientX - x0), ty = Math.abs(e.clientY - y0);
      if (horiz === null) {
        if (tx < 6 && ty < 6) return;            /* dead zone: ignore jitter */
        horiz = tx > ty; moved = true;
        if (!horiz) { on = false; return; }      /* vertical: let the page scroll */
        try { view.setPointerCapture(pid); } catch (er) { }
        dragging = true; anim = null; lx = e.clientX; root.classList.add('q3-drag'); hint();
      }
      if (!horiz) return;
      var dx = e.clientX - lx; lx = e.clientX;
      yaw -= dx * K();
      var t = e.timeStamp || performance.now(); samples.push([t, yaw]); while (samples.length > 2 && t - samples[0][0] > 90) samples.shift();
      kick();
    });
    function end(e) {
      if (!on || (e && e.pointerId !== pid)) return; on = false;
      try { view.releasePointerCapture(pid); } catch (er) { }
      if (!dragging) { setTimeout(function () { moved = false; }, 30); return; }
      dragging = false; root.classList.remove('q3-drag');
      var v = 0, now = (e && e.timeStamp) || performance.now();
      if (samples.length > 1 && now - samples[samples.length - 1][0] < 60) { var a = samples[0], b = samples[samples.length - 1]; if (b[0] > a[0]) v = (b[1] - a[1]) / (b[0] - a[0]); } /* deg / ms */
      if (e && e.type === 'pointercancel') v = 0;
      var proj = yaw + Math.max(-1.4 * STEP, Math.min(1.4 * STEP, v * 260));       /* exponential-decay stopping distance */
      var to = near(proj).a, d = norm(to - yaw);
      var dur = Math.abs(v) > .02 && d * v > 0 ? Math.max(280, Math.min(900, 3 * Math.abs(d) / Math.abs(v))) : Math.max(260, Math.min(520, 180 + Math.abs(d) * 9));
      goTo(to, dur, easeOut);
      setTimeout(function () { moved = false; }, 30);
    }
    view.addEventListener('pointerup', end); view.addEventListener('pointercancel', end); view.addEventListener('lostpointercapture', function (e) { if (on && dragging && e.target === view) end(e); });   /* touch pointers start implicitly captured by the touched child; moving capture to the view fires this on the child first */
    view.addEventListener('dragstart', function (e) { e.preventDefault(); });
  }

  /* ===== LP / DN / All filter: one class on the block; CSS fades the other side everywhere (no DOM rebuild) ===== */
  function setFilter(f, quiet) {
    FIL = f === 'lp' || f === 'dn' ? f : 'all';
    root.classList.remove('q3-f-lp', 'q3-f-dn'); if (FIL !== 'all') root.classList.add('q3-f-' + FIL);
    qa('.q3-seg button').forEach(function (b) { var on = b.getAttribute('data-f') === FIL; b.classList.toggle('q3-on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); });
    if (FITF) { ti = 0; bi = 0; paintFit('t', quiet); paintFit('b', quiet); }
    if (LIST) filterList();
  }

  /* ===== List view: everything as a grid grouped by category, each card links to its product page ===== */
  var LIST = null;
  function buildList() {
    LIST = q('.q3-list');
    LIST.innerHTML = '<div class="q3-lhd"><div><span class="q3-k">Quality Stoner &middot; Shop</span><h2>Everything in the store</h2></div><button type="button" class="q3-back">&#8592; Back to the 360 shop</button></div>' +
      CATS.map(function (c) {
        return '<section class="q3-lsec" data-c="' + c.k + '"><h3>' + esc(c.n) + ' <small></small></h3><div class="q3-lgrid">' + c.ids.map(function (id) {
          var p = P(id);
          return '<a class="q3-lc q3-' + p.s + (p.k ? ' q3-card' : '') + '" data-s="' + p.s + '" href="' + url(id) + '"><span class="q3-lim"><img loading="lazy" decoding="async" src="' + cut(id) + '" alt="' + esc(p.n + ' ' + p.c) + '"></span>' +
            '<span class="q3-lsd">' + (p.s === 'lp' ? 'Loud &amp; Proud' : 'Discreet &amp; Neat') + '</span><b>' + esc(p.n) + '</b><span class="q3-lco">' + esc(p.c) + '</span><span class="q3-lpr">' + money(id) + '</span></a>';
        }).join('') + '</div></section>';
      }).join('');
    q('.q3-back', LIST).addEventListener('click', function () { listView(false); });
    filterList();
  }
  function filterList() {
    qa('.q3-lsec', LIST).forEach(function (s) {
      var n = 0; qa('.q3-lc', s).forEach(function (a) { var ok = FIL === 'all' || a.getAttribute('data-s') === FIL; a.style.display = ok ? '' : 'none'; if (ok) n++; });
      s.style.display = n ? '' : 'none'; q('small', s).textContent = n + (n === 1 ? ' piece' : ' pieces');
    });
  }
  function listView(on) {
    if (on && !LIST) buildList();
    root.classList.toggle('q3-listing', !!on); LIST.hidden = !on; hint();
    var b = q('.q3-lv'); b.setAttribute('aria-pressed', on ? 'true' : 'false'); q('em', b).textContent = on ? '360 view' : 'List view';
    if (on) { root.style.height = 'auto'; } else { fit(); persp(); }
    var top = root.getBoundingClientRect().top; if (top < 0 || top > innerHeight * .5) window.scrollTo({ top: top + scrollY - (document.querySelector('header') ? 70 : 0), behavior: RM ? 'auto' : 'smooth' });
  }
  /* ===== close-up sheet (appended to body; fixed modal) ===== */
  var cu, cid, gi;
  function buildCu() {
    cu = div('q3-cu', {}, '<div class="q3-box" role="dialog" aria-modal="true"><button type="button" class="q3-x" aria-label="Close">&#10005;</button>' +
      '<div class="q3-stage"><div class="q3-pic"></div><button type="button" class="q3-nav q3-pv" aria-label="Previous image">&#8249;</button><button type="button" class="q3-nav q3-nx" aria-label="Next image">&#8250;</button><div class="q3-thumbs"></div></div>' +
      '<div class="q3-info"><span class="q3-chip"></span><h2></h2><div class="q3-col"></div><div class="q3-pr"></div><div class="q3-lbl"></div><div class="q3-sz"></div>' +
      '<div class="q3-go"><a class="q3-pri">View product &#8594;</a><small>Opens the product page to add to cart</small></div></div></div>');
    document.body.appendChild(cu);
    cu.addEventListener('click', function (e) { if (e.target === cu) close(); });
    q('.q3-x', cu).addEventListener('click', close);
    q('.q3-pv', cu).addEventListener('click', function () { show(gi - 1); });
    q('.q3-nx', cu).addEventListener('click', function () { show(gi + 1); });
    var sx = null, stg = q('.q3-stage', cu);
    stg.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
    stg.addEventListener('touchend', function (e) { if (sx == null) return; var dx = e.changedTouches[0].clientX - sx; sx = null; if (Math.abs(dx) > 40) show(gi + (dx < 0 ? 1 : -1)); }, { passive: true });
    addEventListener('keydown', function (e) { if (!cu.classList.contains('q3-on')) return; if (e.key === 'Escape') close(); if (e.key === 'ArrowRight') show(gi + 1); if (e.key === 'ArrowLeft') show(gi - 1); });
  }
  function show(i) {
    var g = P(cid).g; gi = (i + g.length) % g.length;
    q('.q3-pic', cu).innerHTML = '<img src="' + gal(cid) + g[gi] + '" alt="' + esc(P(cid).n + ' ' + P(cid).c) + '">';
    qa('.q3-thumbs button', cu).forEach(function (b, k) { b.classList.toggle('q3-on', k === gi); });
  }
  function open(id) {
    if (!P(id)) return; if (!cu) buildCu(); cid = id; var p = P(id);
    q('.q3-box', cu).className = 'q3-box q3-' + p.s;
    var chip = q('.q3-chip', cu); chip.className = 'q3-chip q3-' + p.s;
    chip.innerHTML = p.s === 'lp' ? '<img src="' + LOGO.mk + '" alt="">Loud &amp; Proud' : '<img src="' + LOGO.mkK + '" alt="">Discreet &amp; Neat';
    q('h2', cu).textContent = p.n;
    q('.q3-col', cu).textContent = p.c + (p.s === 'lp' ? ' \u00b7 full QUALITY \u2022 STONER wordmark' : ' \u00b7 QS mark only');
    q('.q3-pr', cu).innerHTML = money(id) + (p.hi ? '<small>Bigger sizes cost a little more</small>' : '');
    var one = p.z.length === 1, x = p.x || [];
    q('.q3-lbl', cu).textContent = one ? 'Size' : 'Sizes';
    q('.q3-sz', cu).innerHTML = p.z.map(function (s) { return '<button type="button" class="' + ((one || s === 'M') ? 'q3-on' : '') + (x.indexOf(s) > -1 ? ' q3-oos' : '') + '">' + esc(s) + '</button>'; }).join('');
    qa('.q3-sz button', cu).forEach(function (b) { b.addEventListener('click', function () { qa('.q3-sz button', cu).forEach(function (y) { y.classList.remove('q3-on'); }); b.classList.add('q3-on'); }); });
    q('.q3-pri', cu).href = url(id);
    q('.q3-thumbs', cu).innerHTML = p.g.length < 2 ? '' : p.g.map(function (f, k) { return '<button type="button" aria-label="Image ' + (k + 1) + '"><img src="' + gal(id) + f + '" alt=""></button>'; }).join('');
    qa('.q3-thumbs button', cu).forEach(function (b, k) { b.addEventListener('click', function () { show(k); }); });
    q('.q3-pv', cu).style.display = q('.q3-nx', cu).style.display = p.g.length < 2 ? 'none' : '';
    show(0);
    document.documentElement.classList.add('q3-lock');
    cu.classList.add('q3-on'); q('.q3-box', cu).scrollTop = 0;
  }
  function close() { if (!cu || !cu.classList.contains('q3-on')) return; cu.classList.remove('q3-on'); document.documentElement.classList.remove('q3-lock'); }


  window.QSStore360 = { fit: function (t, b) { if (t != null) ti = t; if (b != null) bi = b; paintFit('t'); paintFit('b'); }, turn: function (a) { anim = null; yaw = a; apply(1); }, go: goK, open: open, close: close, hint: hint,
    filter: setFilter, list: listView, zones: function () { return ZONES.map(function (z) { return [z.k, z.a]; }); },
    yaw: function () { return yaw; }, busy: function () { return !!anim || dragging; },
    count: function () { var s = {}; qa('.q3-it').forEach(function (a) { s[a.getAttribute('data-id')] = 1; }); return Object.keys(s).length; } };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount); else mount();
})();
