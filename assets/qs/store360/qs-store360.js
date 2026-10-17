/* Quality Stoner · Walk the Store · the 360 room (round-2 concept 01, productionised Oct 16 2026; v2 same evening:
   no tilt, split front wall, hat wall + bag wall on the sides, dressing room instead of the street door).
   Self-contained: injects scoped CSS + markup into <div id="qs-store"></div> (or [data-qs-store]).
   Product cutouts / close-up gallery / logos load from ../store/img/ (same repo commit); products flagged o:1 load from ./img/.
   Source: site-build/store360/qs-store360.src.js, built by site-build/store360/build.py. */
(function () {
  if (window.__q3Loaded) return; window.__q3Loaded = 1;
  var me = document.currentScript, SRC = me && me.src ? me.src : '';
  var BASE = SRC.replace(/[^\/?#]*([?#].*)?$/, ''), IMG = BASE + '../store/img/', OWN = BASE + 'img/';
  var D = {"damask-crew-burgundy":{"s":"dn","n":"Damask Crew","c":"Burgundy","p":"49","z":["2XS","XS","S","M","L","XL","2XL","3XL","4XL","5XL","6XL"],"g":["damask-crew-burgundy_0.webp","damask-crew-burgundy_1.webp","damask-crew-burgundy_2.webp"],"hi":true,"x":[]},"damask-crossbody-burgundy":{"s":"dn","n":"Damask Crossbody","c":"Burgundy","p":"55","z":["One size"],"g":["damask-crossbody-burgundy_0.webp","damask-crossbody-burgundy_1.webp"],"hi":false,"x":[]},"embroidered-qs-crew-black":{"s":"dn","n":"Embroidered QS Crew","c":"Black","p":"49","z":["S","M","L","XL","2XL","3XL"],"g":["embroidered-qs-crew-black_0.webp","embroidered-qs-crew-black_1.webp","embroidered-qs-crew-black_2.webp"],"hi":true,"x":[]},"embroidered-qs-hoodie-burgundy":{"s":"dn","n":"Embroidered QS Hoodie","c":"Burgundy","p":"58","z":["S","M","L","XL","2XL","3XL"],"g":["embroidered-qs-hoodie-burgundy_0.webp","embroidered-qs-hoodie-burgundy_1.webp","embroidered-qs-hoodie-burgundy_2.webp"],"hi":true,"x":[]},"embroidered-qs-joggers-burgundy":{"s":"dn","n":"Embroidered QS Joggers","c":"Burgundy","p":"45","z":["XS","S","M","L","XL","2XL"],"g":["embroidered-qs-joggers-burgundy_0.webp","embroidered-qs-joggers-burgundy_1.webp"],"hi":true,"x":[]},"embroidered-qs-tee-burgundy":{"s":"dn","n":"Embroidered QS Tee","c":"Burgundy","p":"29","z":["S","M","L","XL","2XL"],"g":["embroidered-qs-tee-burgundy_0.webp","embroidered-qs-tee-burgundy_1.webp","embroidered-qs-tee-burgundy_2.webp"],"hi":true,"x":[]},"lockup-back-tee-off-white":{"s":"lp","n":"Lockup Back Tee","c":"Off-White","p":"29.99","z":["S","M","L","XL","2XL","3XL"],"g":["lockup-back-tee-off-white_0.webp","lockup-back-tee-off-white_1.webp","lockup-back-tee-off-white_2.webp"],"hi":true,"x":[]},"lockup-hoodie-black":{"s":"lp","n":"Lockup Hoodie","c":"Black","p":"58","z":["S","M","L","XL","2XL","3XL"],"g":["lockup-hoodie-black_1.webp","lockup-hoodie-black_0.webp","lockup-hoodie-black_2.webp"],"hi":true,"x":[]},"maison-monogram-backpack-black":{"s":"dn","n":"Maison Monogram Backpack","c":"Black","p":"48","z":["One size"],"g":["maison-monogram-backpack-black_0.webp","maison-monogram-backpack-black_1.webp","maison-monogram-backpack-black_2.webp"],"hi":false,"x":[]},"maison-monogram-tee-black":{"s":"dn","n":"Maison Monogram Tee","c":"Black","p":"34.99","z":["XS","S","M","L","XL","2XL"],"g":["maison-monogram-tee-black_0.webp","maison-monogram-tee-black_1.webp"],"hi":true,"x":[]},"maison-monogram-tee-white":{"s":"dn","n":"Maison Monogram Tee","c":"White","p":"34.99","z":["XS","S","M","L","XL","2XL"],"g":["maison-monogram-tee-white_0.webp","maison-monogram-tee-white_1.webp"],"hi":true,"x":[]},"qs-cuff-beanie-burgundy":{"s":"dn","n":"QS Cuff Beanie","c":"Burgundy","p":"29.95","z":["One size"],"g":["qs-cuff-beanie-burgundy_0.webp","qs-cuff-beanie-burgundy_1.webp"],"hi":false,"x":[]},"qs-lp-bp04-backpack-black":{"s":"lp","n":"Backpack","c":"Black","p":"48","z":["One size"],"g":["qs-lp-bp04-backpack-black_0.webp","qs-lp-bp04-backpack-black_1.webp"],"hi":false,"x":[]},"qs-lp-bp05-backpack-white":{"s":"lp","n":"Backpack","c":"White","p":"48","z":["One size"],"g":["qs-lp-bp05-backpack-white_0.webp","qs-lp-bp05-backpack-white_1.webp","qs-lp-bp05-backpack-white_2.webp"],"hi":false,"x":[]},"qs-snapback-black":{"s":"dn","n":"QS Snapback","c":"Black","p":"34.95","z":["One size"],"g":["qs-snapback-black_0.webp"],"hi":false,"x":[]},"qs-snapback-burgundy":{"s":"dn","n":"QS Snapback","c":"Burgundy","p":"34.95","z":["One size"],"g":["qs-snapback-burgundy_0.webp"],"hi":false,"x":[]},"scattered-monogram-backpack-white":{"s":"dn","n":"Scattered Monogram Backpack","c":"White","p":"48","z":["One size"],"g":["scattered-monogram-backpack-white_0.webp","scattered-monogram-backpack-white_1.webp","scattered-monogram-backpack-white_2.webp"],"hi":false,"x":[]},"scattered-monogram-hoodie-white":{"s":"dn","n":"Scattered Monogram Hoodie","c":"White","p":"58","z":["2XS","XS","S","M","L","XL","2XL","3XL","4XL","5XL","6XL"],"g":["scattered-monogram-hoodie-white_0.webp","scattered-monogram-hoodie-white_1.webp","scattered-monogram-hoodie-white_2.webp"],"hi":true,"x":[]},"seal-crew-burgundy":{"s":"lp","n":"Seal Crew","c":"Burgundy","p":"49","z":["S","M","L","XL","2XL"],"g":["seal-crew-burgundy_0.webp","seal-crew-burgundy_1.webp","seal-crew-burgundy_2.webp"],"hi":true,"x":[]},"wordmark-crew-white":{"s":"lp","n":"Wordmark Crew","c":"White","p":"49","z":["S","M","L","XL","2XL","3XL"],"g":["wordmark-crew-white_0.webp","wordmark-crew-white_1.webp","wordmark-crew-white_2.webp"],"hi":true,"x":[]},"wordmark-cuff-beanie-black":{"s":"lp","n":"Wordmark Cuff Beanie","c":"Black","p":"27.95","z":["One size"],"g":["wordmark-cuff-beanie-black_0.webp","wordmark-cuff-beanie-black_1.webp","wordmark-cuff-beanie-black_2.webp"],"hi":false,"x":[]},"wordmark-cuff-beanie-white":{"s":"lp","n":"Wordmark Cuff Beanie","c":"White","p":"27.95","z":["One size"],"g":["wordmark-cuff-beanie-white_0.webp","wordmark-cuff-beanie-white_1.webp","wordmark-cuff-beanie-white_2.webp"],"hi":false,"x":[]},"wordmark-hoodie-white":{"s":"lp","n":"Wordmark Hoodie","c":"White","p":"58","z":["S","M","L","XL","2XL","3XL"],"g":["wordmark-hoodie-white_0.webp","wordmark-hoodie-white_1.webp","wordmark-hoodie-white_2.webp"],"hi":true,"x":[]},"wordmark-lattice-crossbody-white":{"s":"lp","n":"Wordmark Lattice Crossbody","c":"White","p":"55","z":["One size"],"g":["wordmark-lattice-crossbody-white_0.webp","wordmark-lattice-crossbody-white_1.webp"],"hi":false,"x":[]},"wordmark-leg-joggers-black":{"s":"lp","n":"Wordmark Leg Joggers","c":"Black","p":"45","z":["XS","S","M","L","XL","2XL"],"g":["wordmark-leg-joggers-black_0.webp","wordmark-leg-joggers-black_1.webp"],"hi":true,"x":[]},"wordmark-snapback-black":{"s":"lp","n":"Wordmark Snapback","c":"Black","p":"34.95","z":["One size"],"g":["wordmark-snapback-black_0.webp"],"hi":false,"x":[]},"qs-lp-ts01-classic-tee-white":{"s":"lp","n":"Heavyweight Tee","c":"White","p":"29","z":["S","M","L","XL","2XL","3XL","4XL"],"hi":false,"g":["qs-lp-ts01-classic-tee-white_0.webp","qs-lp-ts01-classic-tee-white_1.webp","qs-lp-ts01-classic-tee-white_2.webp"],"o":1}};
  var SHOP = 'https://qualitystoner.com/products/';
  var LOGO = { word: IMG + 'word-white.webp', mk: IMG + 'qs-mono-white.webp', mkK: IMG + 'qs-mono-black.webp' };
  var CSS = ".q3-host{display:block;position:relative;max-width:none!important;padding:0!important;overflow:visible}.q3,.q3-cu{--qb:#6E0B22;--qow:#F4F3F0;--qg:#a3203f;--qr:#e7a9b6;font-family:inherit;-webkit-font-smoothing:antialiased;line-height:1.2;text-align:left;letter-spacing:normal;text-transform:none}.q3 *,.q3-cu *{box-sizing:border-box;margin:0;padding:0;font-family:inherit}.q3 a,.q3-cu a{color:inherit;text-decoration:none!important;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}.q3 button,.q3-cu button{font:inherit;color:inherit;background:none;border:0;cursor:pointer;-webkit-tap-highlight-color:transparent;-webkit-appearance:none;appearance:none;min-height:0;min-width:0;box-shadow:none;text-transform:none;letter-spacing:normal;line-height:1.2;border-radius:0}.q3 img,.q3-cu img{display:block;max-width:none;height:auto;-webkit-user-drag:none;user-select:none;-webkit-user-select:none;border:0}.q3 b,.q3-cu b,.q3 strong,.q3-cu strong{color:inherit!important;font-weight:600}.q3 i,.q3-cu i,.q3 small,.q3 span{color:inherit}.q3 h2,.q3-cu h2,.q3 p{font-family:inherit;color:inherit;letter-spacing:normal;text-transform:none}.q3{position:relative;width:100%;height:760px;overflow:hidden;background:#060506;color:#fff;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none}.q3-view{position:absolute;inset:0;overflow:hidden;background:#060506;touch-action:pan-y;cursor:grab;outline:none}.q3-view:active{cursor:grabbing}.q3-cam{position:absolute;left:50%;top:50%;width:0;height:0;transform-style:preserve-3d}.q3-wall{position:absolute;transform-style:preserve-3d;-webkit-backface-visibility:hidden;backface-visibility:hidden}.q3-face{position:absolute;inset:0;overflow:hidden}.q3-flo,.q3-cei{position:absolute;left:0;transform-origin:50% 0;clip-path:polygon(0 0,100% 0,53% 94%,47% 94%);-webkit-clip-path:polygon(0 0,100% 0,53% 94%,47% 94%)}.q3-cei{transform-origin:50% 100%;background:linear-gradient(0deg,#151213,#0a0909)}.q3-cei::after{content:\"\";position:absolute;left:47%;width:6%;top:0;bottom:6%;background:repeating-linear-gradient(0deg,transparent 0 60px,rgba(255,240,240,.55) 60px 66px,transparent 66px 120px)}.q3-lp .q3-face{background:linear-gradient(180deg,#1a0d11 0,#0d0809 55%,#090607 100%);box-shadow:inset 0 3px 0 #a3203f,inset 0 40px 60px -30px rgba(163,32,63,.75)}.q3-lp .q3-face::before,.q3-dn .q3-face::before{content:\"\";position:absolute;inset:0;background:repeating-linear-gradient(90deg,rgba(255,255,255,.035) 0 1px,transparent 1px 150px);pointer-events:none}.q3-lp .q3-flo{background:linear-gradient(#2a0c14,#120709 70%,#0b0708)}.q3-dn .q3-face{background:linear-gradient(180deg,#fbfaf8,#F4F3F0 60%,#e8e6e1);box-shadow:inset 0 -50px 70px -40px rgba(0,0,0,.18)}.q3-dn .q3-face::before{background:repeating-linear-gradient(90deg,rgba(0,0,0,.04) 0 1px,transparent 1px 150px)}.q3-dn .q3-flo{background:linear-gradient(#d9d6d0,#bdb9b2 70%,#a9a59e)}.q3-mx .q3-face{background:#0b0a0a}.q3-mx .q3-flo{background:linear-gradient(#24201f,#121011)}.q3-sign{position:absolute;display:flex;flex-direction:column;align-items:center;gap:12px;transform:translateX(-50%);pointer-events:none}.q3 .q3-sign img{width:auto}.q3-sign small{font-size:13px;font-weight:600;letter-spacing:.3em;text-transform:uppercase;opacity:.8;white-space:nowrap}.q3 .q3-lp .q3-sign img,.q3 .q3-mx .q3-sign img.q3-w{filter:drop-shadow(0 0 2px #fff) drop-shadow(0 0 10px #a3203f) drop-shadow(0 0 26px #a3203f)}.q3-dn .q3-sign small{color:#111}.q3-rail{position:absolute;height:6px;border-radius:3px}.q3-lp .q3-rail{background:linear-gradient(#6b6b6b,#2b2b2b);box-shadow:0 0 12px rgba(163,32,63,.6)}.q3-dn .q3-rail{background:#141414}.q3-shelf{position:absolute;height:12px;border-radius:2px}.q3-lp .q3-shelf{background:linear-gradient(#3a0b16,#1c0509);box-shadow:0 8px 18px rgba(0,0,0,.6),0 -1px 0 #a3203f}.q3-dn .q3-shelf{background:linear-gradient(#e2d9cb,#c9bda9);box-shadow:0 10px 16px rgba(0,0,0,.15)}.q3-hang{position:absolute;width:1.5px}.q3-lp .q3-hang{background:rgba(255,255,255,.35)}.q3-dn .q3-hang{background:rgba(0,0,0,.45)}.q3-cub{position:absolute;border-radius:6px}.q3-lp .q3-cub{background:linear-gradient(#050304,#1a0b0f);box-shadow:inset 0 0 0 2px #3a0b16,inset 0 18px 30px rgba(163,32,63,.35)}.q3-dn .q3-cub{background:linear-gradient(#e9e7e2,#fff);box-shadow:inset 0 0 0 2px #d8d5cf,inset 0 14px 22px rgba(0,0,0,.08)}.q3-hl{position:absolute;font-size:12px;font-weight:600;letter-spacing:.3em;text-transform:uppercase;transform:translateX(-50%);white-space:nowrap;pointer-events:none}.q3-half{position:absolute;top:0;bottom:0;width:50%}.q3-half.q3-l{left:0;background:linear-gradient(180deg,#1a0d11,#0a0708);box-shadow:inset 0 3px 0 #a3203f,inset 0 40px 60px -30px rgba(163,32,63,.75)}.q3-half.q3-r{right:0;background:linear-gradient(180deg,#fbfaf8,#ebe9e4)}.q3-counter{position:absolute;left:0;right:0;bottom:0}.q3-counter .q3-l,.q3-counter .q3-r{position:absolute;top:0;bottom:0;width:50%}.q3-counter .q3-l{left:0;background:linear-gradient(#5a0a1c,#3b0612 18%,#20040a);border-top:6px solid #120a0c}.q3-counter .q3-r{right:0;background:linear-gradient(#ffffff,#e4e1db);border-top:6px solid #cfcac2}.q3-win{position:absolute;background:#141112 50% 60%/cover;border:14px solid #141112;box-shadow:inset 0 0 60px rgba(0,0,0,.6)}.q3-door{position:absolute;border:12px solid #141112;background:#141112 70% 60%/cover}.q3-door::before{content:\"\";position:absolute;inset:0;background:linear-gradient(160deg,rgba(80,90,130,.35),rgba(10,10,20,.8))}.q3-door::after{content:\"\";position:absolute;right:16px;top:48%;width:8px;height:80px;border-radius:4px;background:#888}.q3-exit{position:absolute;transform:translateX(-50%);font-size:12px;font-weight:600;letter-spacing:.3em;color:#e7a9b6;text-transform:uppercase;white-space:nowrap;pointer-events:none}.q3-locked{position:absolute;right:30px;bottom:26px;width:230px;height:200px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;border:1.5px dashed rgba(255,255,255,.35);border-radius:14px;background:rgba(8,6,7,.86);color:#fff}.q3-locked .q3-lk{width:30px;height:30px;border-radius:50%;display:grid;place-items:center;border:1.5px solid currentColor;font-size:14px}.q3-locked b{font-size:11px;letter-spacing:.24em;text-transform:uppercase}.q3-locked span{font-size:12px;opacity:.75}.q3 .q3-all{position:absolute;transform:translateX(-50%);display:inline-flex;align-items:center;border-radius:99px;padding:12px 18px;font-size:11px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;white-space:nowrap}.q3 .q3-all.q3-lp{background:var(--qb);color:#fff}.q3 .q3-all.q3-dn{background:#111;color:#fff}.q3-it{position:absolute;display:block;cursor:pointer}.q3 .q3-it img{width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 16px 18px rgba(0,0,0,.45))}.q3 .q3-it.q3-dn img{filter:drop-shadow(0 14px 14px rgba(0,0,0,.2))}.q3-hot{position:absolute;right:8%;top:6%;width:22px;height:22px;border-radius:50%;background:rgba(255,255,255,.95);box-shadow:0 0 0 4px rgba(255,255,255,.28),0 2px 8px rgba(0,0,0,.5);display:grid;place-items:center;pointer-events:none}.q3-hot::after{content:\"\";width:8px;height:8px;border-radius:50%;background:var(--qb)}.q3-hot::before{content:\"\";position:absolute;inset:-4px;border-radius:50%;border:2px solid rgba(255,255,255,.7);animation:q3ping 1.8s ease-out infinite}@keyframes q3ping{from{transform:scale(.8);opacity:1}to{transform:scale(2);opacity:0}}.q3-tag{position:absolute;left:50%;top:calc(100% + 10px);transform:translateX(-50%);white-space:nowrap;font-size:11px;font-weight:600;letter-spacing:.02em;padding:5px 9px;border-radius:99px;pointer-events:none;line-height:1.2}.q3-tag.q3-lp{background:rgba(10,6,7,.88);color:#fff;border:1px solid rgba(194,70,95,.7)}.q3-tag.q3-dn{background:#fff;color:#111;border:1px solid #d5d4d0}.q3-tag i{font-style:normal;opacity:.7;margin-left:6px}.q3-tag.q3-two{white-space:normal;width:max-content;max-width:150px;text-align:center;border-radius:10px;line-height:1.3}.q3-tag.q3-two i{display:block;margin:0}.q3-hint{position:absolute;z-index:20;left:50%;bottom:92px;transform:translateX(-50%);width:640px;max-width:calc(100% - 28px);display:grid;grid-template-columns:1fr auto;column-gap:18px;align-items:end;padding:14px 18px;border-radius:16px;background:rgba(0,0,0,.82);border:1px solid rgba(255,255,255,.1);border-top:2px solid var(--qb);transition:opacity .4s;pointer-events:none}.q3-hint .q3-k{font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:#c9a5ae}.q3 .q3-hint h2{font-size:24px;line-height:1.1;font-weight:600;margin-top:6px}.q3 .q3-hint p{font-size:13.5px;line-height:1.45;color:#d9d3d5;margin-top:4px}.q3-how{grid-column:2;grid-row:1/4;display:flex;flex-direction:column;gap:8px}.q3-how span{font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;padding:7px 10px;border-radius:99px;border:1px solid rgba(255,255,255,.35);white-space:nowrap}.q3-hint.q3-gone{opacity:0}.q3-zones{position:absolute;left:50%;bottom:22px;transform:translateX(-50%);z-index:30;display:flex;align-items:center;gap:10px}.q3 .q3-ctl{width:48px;height:48px;border-radius:50%;display:grid;place-items:center;background:rgba(10,8,9,.78);border:1px solid rgba(255,255,255,.22);font-size:22px;font-weight:600;color:#fff;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}.q3-zbar{display:flex;gap:4px;padding:5px;border-radius:99px;background:rgba(8,6,7,.82);border:1px solid rgba(255,255,255,.16);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}.q3 .q3-zbar button{height:38px;padding:0 14px;border-radius:99px;font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;opacity:.7;white-space:nowrap;color:#fff}.q3 .q3-zbar button.q3-on{opacity:1;background:#fff;color:#111}.q3 .q3-zbar button.q3-on.q3-l{background:var(--qb);color:#fff}.q3-mz{display:none}@media(max-width:1100px) and (min-width:750px){.q3 .q3-zbar button{padding:0 10px;letter-spacing:.08em}}@media(max-width:749px){.q3-zbar{display:none}.q3-mz{display:flex;flex-direction:column;align-items:center;gap:6px;min-width:150px;padding:8px 14px;border-radius:18px;background:rgba(8,6,7,.84);border:1px solid rgba(255,255,255,.16)}.q3-mz b{white-space:nowrap;font-size:11px;font-weight:600;letter-spacing:.16em;text-transform:uppercase}.q3-mz span{display:flex;gap:6px}.q3-mz i{width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.35)}.q3-mz i.q3-on{background:#fff}.q3-zones{bottom:18px;gap:14px}.q3 .q3-ctl{width:54px;height:54px}.q3-tag{font-size:19px;padding:7px 13px}.q3-tag.q3-two{max-width:230px;border-radius:14px}.q3-hot{width:36px;height:36px}.q3-hot::after{width:13px;height:13px}.q3-sign small{font-size:20px}.q3-hl{font-size:20px}.q3 .q3-all{font-size:17px;padding:14px 22px}.q3-hint{left:12px;right:12px;bottom:92px;width:auto;max-width:none;transform:none;display:block;padding:12px 14px}.q3-how{display:none}.q3 .q3-hint h2{font-size:20px}.q3 .q3-hint p{font-size:13px}}.q3 .q3-fitw{background:radial-gradient(ellipse at 50% 0,#2a1a1c 0,#120c0d 55%,#0a0708 100%)}.q3-curt{position:absolute;top:0;bottom:0;background:repeating-linear-gradient(90deg,#4a0716 0 18px,#6E0B22 18px 30px,#3a0512 30px 44px);box-shadow:inset 0 0 40px rgba(0,0,0,.6)}.q3-curt.q3-l{border-radius:0 0 60px 0}.q3-curt.q3-r{border-radius:0 0 0 60px}.q3-mir{position:absolute;border-radius:200px 200px 18px 18px;background:linear-gradient(180deg,#efebe5,#d6d0c7 70%,#c7c0b6);border:10px solid #F4F3F0;box-shadow:0 0 0 2px #6E0B22,0 0 40px rgba(244,243,240,.18),inset 0 0 60px rgba(0,0,0,.18)}.q3-fs{position:absolute;display:block;cursor:pointer}.q3 .q3-fs img{width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 12px 14px rgba(0,0,0,.28));transition:opacity .16s}.q3 .q3-fs img.q3-out{opacity:0}.q3 .q3-fs .q3-hot{right:4%;top:4%}.q3 .q3-sw{position:absolute;width:56px;height:56px;border-radius:50%;display:grid;place-items:center;background:#111;color:#fff;font-size:30px;line-height:1;border:2px solid #F4F3F0;box-shadow:0 6px 16px rgba(0,0,0,.35);z-index:2}.q3 .q3-sw:hover{background:#6E0B22}.q3-fhd{position:absolute;display:flex;flex-direction:column;gap:8px;color:#fff;pointer-events:none}.q3-fhd .q3-k{font-size:12px;font-weight:600;letter-spacing:.3em;text-transform:uppercase;color:#e7a9b6}.q3 .q3-fhd b{font-size:40px;line-height:1.05;font-weight:600}.q3 .q3-fhd p{font-size:15px;line-height:1.45;color:#d9d3d5}.q3-fc{position:absolute;display:flex;flex-direction:column;gap:4px;padding:14px 16px;border-radius:14px;background:rgba(244,243,240,.96);color:#111;box-shadow:0 10px 24px rgba(0,0,0,.35)}.q3-fc .q3-fl{font-size:11px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:#6E0B22}.q3 .q3-fc .q3-fn{font-size:18px;font-weight:600;line-height:1.2;color:#111}.q3-fc .q3-fp{font-size:14px;color:#444}.q3 .q3-fc .q3-fv{align-self:flex-start;margin-top:6px;padding:8px 14px;border-radius:99px;background:#111;color:#fff;font-size:11px;font-weight:600;letter-spacing:.16em;text-transform:uppercase}.q3 .q3-fc.q3-ftot{flex-direction:row;justify-content:space-between;align-items:center;background:#6E0B22;color:#fff}.q3 .q3-ftot .q3-fl{color:#fff}.q3 .q3-ftot b{font-size:26px}@media(max-width:749px){.q3-fhd{transform:translateX(-50%);align-items:center;text-align:center;gap:6px}.q3-fhd .q3-k{font-size:19px}.q3 .q3-fhd b{font-size:46px}.q3-fhd .q3-tot{font-size:22px;font-weight:600;color:#fff;background:#6E0B22;padding:6px 16px;border-radius:99px;margin-top:4px}.q3 .q3-sw{width:76px;height:76px;font-size:42px}.q3-fc{padding:16px 18px;gap:6px;border-radius:18px}.q3-fc .q3-fl{font-size:16px}.q3 .q3-fc .q3-fn{font-size:23px}.q3-fc .q3-fp{font-size:19px}.q3 .q3-fc .q3-fv{font-size:16px;padding:10px 18px}.q3 .q3-fs .q3-hot{width:36px;height:36px}}html.q3-lock,html.q3-lock body{overflow:hidden!important}.q3-cu{position:fixed;inset:0;z-index:2147483000;display:none;align-items:center;justify-content:center;background:rgba(3,2,3,.62);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);color:#fff}.q3-cu.q3-on{display:flex}.q3-box{position:relative;width:min(980px,calc(100vw - 80px));max-height:calc(100vh - 40px);display:grid;grid-template-columns:1.12fr 1fr;border-radius:22px;overflow:hidden;box-shadow:0 40px 90px rgba(0,0,0,.6);overscroll-behavior:contain}.q3-box.q3-lp{background:#0e0809;border:1px solid rgba(163,32,63,.7);color:#fff;box-shadow:0 0 70px rgba(110,11,34,.55),0 40px 90px rgba(0,0,0,.6)}.q3-box.q3-dn{background:var(--qow);color:#111;border:1px solid #fff}.q3-stage{position:relative;background:var(--qow);aspect-ratio:1/1;max-height:calc(100vh - 40px);overflow:hidden}.q3-pic{position:absolute;inset:0}.q3-cu .q3-pic>img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}.q3-thumbs{position:absolute;left:14px;bottom:14px;display:flex;gap:8px}.q3-cu .q3-thumbs button{width:58px;height:58px;border-radius:10px;overflow:hidden;border:2px solid transparent;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.15);padding:0}.q3-cu .q3-thumbs button.q3-on{border-color:var(--qb)}.q3-cu .q3-thumbs img{width:100%;height:100%;object-fit:cover}.q3-info{padding:34px 34px 30px;display:flex;flex-direction:column;overflow:auto}.q3-chip{display:inline-flex;align-self:flex-start;align-items:center;gap:8px;border-radius:99px;padding:7px 12px;font-size:10.5px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;white-space:nowrap}.q3-chip.q3-lp{background:var(--qb);color:#fff}.q3-chip.q3-dn{background:var(--qow);color:#111;border:1px solid #cfcdc8}.q3-cu .q3-chip img{height:12px;width:auto}.q3-cu h2{font-size:32px;line-height:1.08;font-weight:600;margin-top:18px}.q3-col{font-size:14px;opacity:.7;margin-top:6px}.q3-pr{font-size:22px;font-weight:600;margin-top:14px}.q3-pr small{display:block;font-size:12px;font-weight:400;opacity:.65;margin-top:4px}.q3-box.q3-lp .q3-pr{color:var(--qr)}.q3-box.q3-dn .q3-pr{color:var(--qb)}.q3-lbl{font-size:11px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;opacity:.7;margin-top:24px}.q3-sz{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}.q3-cu .q3-sz button{min-width:48px;height:44px;padding:0 12px;border-radius:10px;font-size:13px;font-weight:600}.q3-cu .q3-box.q3-lp .q3-sz button{border:1px solid rgba(255,255,255,.3)}.q3-cu .q3-box.q3-dn .q3-sz button{border:1px solid #c9c7c2;background:#fff}.q3-cu .q3-box.q3-lp .q3-sz button.q3-on{background:#fff;color:#111;border-color:#fff}.q3-cu .q3-box.q3-dn .q3-sz button.q3-on{background:#111;color:#fff;border-color:#111}.q3-cu .q3-sz button.q3-oos{opacity:.4;text-decoration:line-through}.q3-go{margin-top:auto;padding-top:24px;display:flex;flex-direction:column;gap:10px}.q3-cu .q3-go a{display:flex;align-items:center;justify-content:center;height:52px;border-radius:99px;font-size:12.5px;font-weight:600;letter-spacing:.18em;text-transform:uppercase}.q3-cu .q3-box.q3-lp .q3-go a{background:var(--qb);color:#fff;box-shadow:0 0 22px rgba(163,32,63,.6)}.q3-cu .q3-box.q3-dn .q3-go a{background:#111;color:#fff}.q3-go small{font-size:12px;opacity:.6;text-align:center}.q3-cu .q3-x{position:absolute;top:14px;right:14px;z-index:3;width:42px;height:42px;border-radius:50%;display:grid;place-items:center;font-size:20px;background:rgba(0,0,0,.55);color:#fff}.q3-cu .q3-box.q3-dn .q3-x{background:#fff;color:#111;border:1px solid #d4d2cd}.q3-cu .q3-nav{position:absolute;top:50%;transform:translateY(-50%);width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.9);color:#111;display:grid;place-items:center;font-size:18px;box-shadow:0 2px 8px rgba(0,0,0,.2)}.q3-cu .q3-pv{left:12px}.q3-cu .q3-nx{right:12px}@media(max-width:749px){.q3-cu{align-items:flex-end}.q3-box{width:100vw;grid-template-columns:1fr;border-radius:22px 22px 0 0;max-height:92vh;overflow:auto;-webkit-overflow-scrolling:touch}.q3-stage{aspect-ratio:1/.86;max-height:none;flex:0 0 auto}.q3-cu .q3-thumbs button{width:48px;height:48px}.q3-info{padding:18px 18px 22px;overflow:visible}.q3-cu h2{font-size:24px;margin-top:12px}.q3-pr{font-size:19px;margin-top:8px}.q3-lbl{margin-top:14px}.q3-cu .q3-sz button{height:42px;min-width:46px}.q3-go{padding-top:16px;padding-bottom:env(safe-area-inset-bottom)}.q3-cu .q3-go a{height:50px}}";

  var ZONES = [
    { a: -120, k: 'bags', n: 'Bag wall', s: 'mx' }, { a: -60, k: 'lpwall', n: 'Loud & Proud', s: 'lp' }, { a: 0, k: 'front', n: 'Front', s: 'mx' },
    { a: 60, k: 'dnwall', n: 'Discreet & Neat', s: 'dn' }, { a: 120, k: 'hats', n: 'Hat wall', s: 'mx' }, { a: 180, k: 'fit', n: 'Dressing room', s: 'mx' }];
  /* dressing room racks: tops (tees, hoodies, crews from both sides) and joggers (hem-band + maison joggers stay excluded) */
  var TOPS = ['qs-lp-ts01-classic-tee-white', 'lockup-hoodie-black', 'embroidered-qs-tee-burgundy', 'wordmark-hoodie-white', 'embroidered-qs-hoodie-burgundy', 'lockup-back-tee-off-white',
    'scattered-monogram-hoodie-white', 'wordmark-crew-white', 'embroidered-qs-crew-black', 'seal-crew-burgundy', 'damask-crew-burgundy', 'maison-monogram-tee-black', 'maison-monogram-tee-white'];
  var BOTS = ['wordmark-leg-joggers-black', 'embroidered-qs-joggers-burgundy'];
  var ti = 0, bi = 0;

  function P(id) { return D[id]; }
  function cut(id) { return (P(id).o ? OWN : IMG) + 'p/' + id + '.webp'; }
  function gal(id) { return (P(id).o ? OWN : IMG) + 'g/'; }
  function url(id) { return SHOP + id; }
  function money(id) { return '$' + P(id).p; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function q(sel, ctx) { return (ctx || root).querySelector(sel); }
  function qa(sel, ctx) { return [].slice.call((ctx || root).querySelectorAll(sel)); }
  function px(e, css) { for (var k in css) e.style[k] = typeof css[k] === 'number' ? css[k] + 'px' : css[k]; return e; }
  function div(cls, css, html, tag) { var d = document.createElement(tag || 'div'); d.className = cls; if (html) d.innerHTML = html; return px(d, css || {}); }

  var host, root, view, cam, M, W, H, R, PERS = 600, yaw = 0, target = null, vel = 0, moved = false, raf = 0, walls = {}, lastZ = null, built = false;

  /* ===== wall contents (face px coordinates; desktop face 1200x780, phone face 720x1080) ===== */
  function put(face, id, x, y, w, h, o) {
    o = o || {}; var p = P(id); if (!p) return null;
    var a = div('q3-it q3-' + p.s, { left: x - w / 2, top: y, width: w, height: h },
      '<img data-src="' + cut(id) + '" alt="">' + '<i class="q3-hot"></i>' +
      (o.notag ? '' : '<span class="q3-tag q3-' + p.s + (o.two ? ' q3-two' : '') + '">' + (o.sm ? money(id) : esc(p.n) + '<i>' + money(id) + '</i>') + '</span>'), 'a');
    a.href = url(id); a.setAttribute('aria-label', p.n + ' ' + p.c + ', ' + money(id)); a.setAttribute('data-id', id); a.draggable = false;
    a.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); if (moved) return; open(id); });
    face.appendChild(a); return a;
  }
  function spread(ids, i, x0, x1) { return x0 + (x1 - x0) * (ids.length === 1 ? .5 : i / (ids.length - 1)); }
  function rail(face, ids, y, x0, x1, w, h, o) {
    face.appendChild(div('q3-rail', { left: x0 - 30, top: y, width: x1 - x0 + 60 }));
    ids.forEach(function (id, i) { var x = spread(ids, i, x0, x1); face.appendChild(div('q3-hang', { left: x, top: y + 6, height: 16 })); put(face, id, x, y + 20, w, h, o); });
  }
  function shelf(face, ids, y, x0, x1, w, h, o) {
    face.appendChild(div('q3-shelf', { left: x0 - 70, top: y, width: x1 - x0 + 140 }));
    ids.forEach(function (id, i) { put(face, id, spread(ids, i, x0, x1), y - h, w, h, o); });
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
  /* one half of a split wall: LP (black/burgundy) on the left, DN (off-white) on the right; children use half-local x */
  function half(f, s) { var h = div('q3-half ' + (s === 'lp' ? 'q3-l q3-lp' : 'q3-r q3-dn')); f.appendChild(h); return h; }
  function bar(h, cls, x0, x1, y) { h.appendChild(div(cls, { left: x0, top: y, width: x1 - x0 })); }
  /* entry view: both sides at a glance, one shirt + one hat + one bag each (hats kept small; the full hat display is on the hat wall) */
  var FRONT = { lp: ['qs-lp-ts01-classic-tee-white', 'wordmark-snapback-black', 'qs-lp-bp04-backpack-black'], dn: ['embroidered-qs-tee-burgundy', 'qs-snapback-burgundy', 'maison-monogram-backpack-black'] };
  function frontHalf(f, s) {
    var h = half(f, s), c = W / 4, ids = FRONT[s];
    sign(h, s, c, s === 'lp' ? (M ? 70 : 52) : (M ? 44 : 30), M ? .7 : .8, M);
    var ry = M ? 230 : 160, sw = M ? 260 : 240;
    bar(h, 'q3-rail', c - sw / 2 - 10, c + sw / 2 + 10, ry); h.appendChild(div('q3-hang', { left: c, top: ry + 6, height: 16 }));
    put(h, ids[0], c, ry + 20, sw, sw, { two: 1 });
    var sy = M ? 900 : 640, hx = M ? 95 : 175, bx = M ? 262 : 420;
    bar(h, 'q3-shelf', M ? 20 : 80, M ? 340 : 520, sy);
    put(h, ids[1], hx, sy - (M ? 100 : 96), M ? 120 : 116, M ? 100 : 96, { sm: M, two: !M });
    put(h, ids[2], bx, sy - (M ? 150 : 150), M ? 125 : 125, 150, { sm: M, two: !M });
    if (M) allPill(h, s, c, 655, 1);
  }
  function bagHalf(f, s, ids) {
    var h = half(f, s), c = W / 4;
    sign(h, s, c, s === 'lp' ? (M ? 60 : 50) : (M ? 36 : 30), M ? .6 : .75, M);
    var cw = M ? 150 : 165;
    ids.forEach(function (id, i) {
      var x = M ? c : [110, 300, 490][i], y = M ? 200 + i * 225 : 250;
      h.appendChild(div('q3-cub', { left: x - cw / 2, top: y, width: cw, height: cw })); put(h, id, x, y + 18, cw - 36, cw - 36, { sm: M, two: !M });
    });
    allPill(h, s, c, M ? 905 : 560, M);
  }
  var BUILD = {
    front: function (f) { frontHalf(f, 'lp'); frontHalf(f, 'dn'); },
    lpwall: function (f) {
      sign(f, 'lp', W / 2, M ? 70 : 52);
      if (!M) { rail(f, ['lockup-hoodie-black', 'wordmark-hoodie-white', 'wordmark-crew-white', 'seal-crew-burgundy'], 168, 210, 990, 210, 220); shelf(f, ['qs-lp-ts01-classic-tee-white', 'lockup-back-tee-off-white', 'wordmark-leg-joggers-black'], 640, 330, 870, 150, 160); }
      else { rail(f, ['lockup-hoodie-black', 'wordmark-hoodie-white'], 170, 190, 530, 240, 235, { two: 1 }); rail(f, ['wordmark-crew-white', 'seal-crew-burgundy'], 510, 190, 530, 240, 235, { two: 1 }); shelf(f, ['qs-lp-ts01-classic-tee-white', 'lockup-back-tee-off-white', 'wordmark-leg-joggers-black'], 1010, 150, 570, 135, 135, { sm: 1 }); }
    },
    dnwall: function (f) {
      sign(f, 'dn', W / 2, M ? 50 : 34);
      if (!M) { rail(f, ['embroidered-qs-hoodie-burgundy', 'scattered-monogram-hoodie-white', 'embroidered-qs-crew-black', 'damask-crew-burgundy'], 190, 210, 990, 210, 210); shelf(f, ['embroidered-qs-tee-burgundy', 'maison-monogram-tee-black', 'maison-monogram-tee-white', 'embroidered-qs-joggers-burgundy'], 640, 240, 960, 130, 130); }
      else { rail(f, ['embroidered-qs-hoodie-burgundy', 'scattered-monogram-hoodie-white'], 190, 190, 530, 250, 230, { two: 1 }); rail(f, ['embroidered-qs-crew-black', 'damask-crew-burgundy'], 540, 190, 530, 250, 230, { two: 1 }); shelf(f, ['embroidered-qs-tee-burgundy', 'maison-monogram-tee-black', 'maison-monogram-tee-white', 'embroidered-qs-joggers-burgundy'], 995, 115, 605, 120, 120, { sm: 1 }); }
    },
    bags: function (f) {
      bagHalf(f, 'lp', ['qs-lp-bp04-backpack-black', 'qs-lp-bp05-backpack-white', 'wordmark-lattice-crossbody-white']);
      bagHalf(f, 'dn', ['maison-monogram-backpack-black', 'scattered-monogram-backpack-white', 'damask-crossbody-burgundy']);
    },
    hats: function (f) {
      f.appendChild(div('q3-half q3-l')); f.appendChild(div('q3-half q3-r'));
      var ct = M ? 760 : 560; f.appendChild(div('q3-counter', { top: ct }, '<div class="q3-l"></div><div class="q3-r"></div>'));
      f.appendChild(div('q3-sign', { left: W * .25, top: M ? 120 : 110 }, '<img class="q3-w" data-src="' + LOGO.word + '" style="height:' + (M ? 13 : 22) + 'px" alt="QUALITY \u2022 STONER"><small style="color:#fff">LP hats</small>'));
      f.appendChild(div('q3-sign', { left: W * .75, top: M ? 86 : 70 }, '<img data-src="' + LOGO.mkK + '" style="height:' + (M ? 60 : 84) + 'px" alt="QS"><small style="color:#111">DN hats</small>'));
      f.appendChild(div('q3-hl', { left: W / 2, top: ct - (M ? 330 : 300), color: '#fff', background: '#6E0B22', padding: '8px 14px', borderRadius: '99px' }, 'Hat wall'));
      var ids = ['wordmark-snapback-black', 'wordmark-cuff-beanie-black', 'wordmark-cuff-beanie-white', 'qs-snapback-black', 'qs-snapback-burgundy', 'qs-cuff-beanie-burgundy'];
      var hw = M ? 104 : 150, xs = M ? [66, 180, 294, 426, 540, 654] : [120, 300, 480, 720, 900, 1080];
      ids.forEach(function (id, i) { put(f, id, xs[i], ct - hw * .95 - 6, hw, hw * .95, { sm: M, two: !M }); });
    },
    fit: function (f) { fitRoom(f); }
  };

  /* ===== dressing room: one top + one pair of joggers, each swappable, both prices + links ===== */
  var FITF = null;
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
      b.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); if (moved) return; if (which === 't') ti = (ti + dir + TOPS.length) % TOPS.length; else bi = (bi + dir + BOTS.length) % BOTS.length; paintFit(which); });
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
    var id = which === 't' ? TOPS[ti] : BOTS[bi], p = P(id), sl = q(which === 't' ? '.q3-ft' : '.q3-fb', f), im = q('img', sl);
    sl.href = url(id); sl.setAttribute('data-id', id); sl.setAttribute('aria-label', p.n + ' ' + p.c + ', ' + money(id)); sl.className = 'q3-fs ' + (which === 't' ? 'q3-ft' : 'q3-fb') + ' q3-' + p.s;
    if (ld) { im.classList.add('q3-out'); setTimeout(function () { im.src = cut(id); im.onload = function () { im.classList.remove('q3-out'); }; }, first ? 0 : 160); }
    else im.setAttribute('data-src', cut(id));
    var c = q('.q3-fc-' + which, f);
    q('.q3-fl', c).textContent = (which === 't' ? 'Top' : 'Joggers') + ' \u00b7 ' + ((which === 't' ? ti : bi) + 1) + ' of ' + (which === 't' ? TOPS.length : BOTS.length);
    var n = q('.q3-fn', c); n.textContent = p.n + ' \u2014 ' + p.c; n.href = url(id);
    q('.q3-fp', c).textContent = money(id) + (p.s === 'lp' ? ' \u00b7 Loud & Proud' : ' \u00b7 Discreet & Neat');
    q('.q3-fv', c).href = url(id);
    var tot = (+P(TOPS[ti]).p) + (+P(BOTS[bi]).p), ts = '$' + (tot % 1 ? tot.toFixed(2) : tot);
    qa('.q3-tot', f).forEach(function (t) { t.textContent = M ? 'Fit total ' + ts : ts; });
  }

  /* ===== mount ===== */
  function mount() {
    if (!document.getElementById('q3-css')) { var st = document.createElement('style'); st.id = 'q3-css'; st.textContent = CSS; document.head.appendChild(st); }
    host = document.getElementById('qs-store') || document.querySelector('[data-qs-store]');
    if (!host) { host = document.createElement('div'); host.id = 'qs-store'; if (me && me.parentNode) me.parentNode.insertBefore(host, me); else document.body.appendChild(host); }
    host.classList.add('q3-host');
    root = div('q3', {}, '<div class="q3-view" tabindex="0" aria-label="The Quality Stoner shop. Drag or swipe to look around."><div class="q3-cam"></div></div>' +
      '<div class="q3-hint"><div class="q3-k">Quality Stoner &middot; Inside</div><h2>Look around the shop.</h2><p>Loud &amp; Proud on the left, Discreet &amp; Neat on the right. Hats and bags on the side walls, the dressing room behind you. Tap any dot to look closer.</p><div class="q3-how"><span>Drag / swipe to look</span><span>Tap a dot</span></div></div>' +
      '<div class="q3-zones"><button type="button" class="q3-ctl q3-prev" aria-label="Turn left">&#8249;</button><div class="q3-zbar"></div><div class="q3-mz" aria-live="polite"><b></b><span></span></div><button type="button" class="q3-ctl q3-next" aria-label="Turn right">&#8250;</button></div>');
    host.innerHTML = ''; host.appendChild(root);
    view = q('.q3-view'); cam = q('.q3-cam');
    q('.q3-zbar').innerHTML = ZONES.map(function (z) { return '<button type="button" data-a="' + z.a + '" class="' + (z.s === 'lp' ? 'q3-l' : '') + '">' + esc(z.n) + '</button>'; }).join('');
    qa('.q3-zbar button').forEach(function (b) { b.addEventListener('click', function () { goTo(+b.getAttribute('data-a')); }); });
    q('.q3-prev').addEventListener('click', function () { goTo(near().a - 60); });
    q('.q3-next').addEventListener('click', function () { goTo(near().a + 60); });
    view.addEventListener('keydown', function (e) { if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(near().a - 60); } if (e.key === 'ArrowRight') { e.preventDefault(); goTo(near().a + 60); } });
    drag();
    fit(); build();
    var lw = innerWidth;
    addEventListener('resize', function () { if (innerWidth !== lw) { lw = innerWidth; fit(); build(); } else { bleed(); persp(); } });
    addEventListener('orientationchange', function () { setTimeout(function () { fit(); build(); }, 300); });
    setTimeout(hint, 7000);
    if (/dressing|fit/i.test(location.hash)) { yaw = 180; apply(); hint(); }
    var rest = function () { setTimeout(function () { ZONES.forEach(function (z) { load(z.k); }); }, 2500); };
    if (document.readyState === 'complete') rest(); else addEventListener('load', rest);
  }
  /* full-bleed block, one viewport tall under the site header (header/footer stay in normal flow) */
  function bleed() {
    var vw = document.documentElement.clientWidth; host.style.marginLeft = ''; host.style.width = '';
    var r = host.getBoundingClientRect(); host.style.width = vw + 'px'; host.style.marginLeft = (-r.left) + 'px';
  }
  function fit() {
    bleed();
    var hd = 0, h = document.querySelector('header'); if (h) { var b = h.getBoundingClientRect(); if (b.height < 200) hd = b.height; }
    var vh = innerHeight, top = host.getBoundingClientRect().top + scrollY, room = (top > hd && top < vh * .4) ? vh - top : vh - hd, Hh;
    if (document.documentElement.clientWidth < 750) Hh = Math.max(620, Math.min(900, room)); else Hh = Math.max(560, Math.min(980, room));
    root.style.height = Hh + 'px';
  }
  /* field of view follows the block size: walls fill the height on desktop, a wider lens on phones */
  function persp() {
    var bh = root.clientHeight, bw = root.clientWidth;
    PERS = M ? R * Math.max(.42, Math.min(.7, .56 * bh / 790)) : R * Math.max(.62, Math.min(1.15, Math.min(bh / 830, bw / 1300)));
    view.style.perspective = PERS + 'px';
    cam.style.top = (M ? 47 : 50) + '%';
    apply();
  }
  function build() {
    var m = root.clientWidth < 750;
    if (built && m === M) { persp(); return; }
    M = m; built = true; W = M ? 720 : 1200; H = M ? 1080 : 780; R = W * 0.8660254;
    cam.innerHTML = ''; walls = {};
    ZONES.forEach(function (z) {
      var w = div('q3-wall q3-' + z.s, { left: -W / 2, top: -H / 2, width: W, height: H });
      w.style.transform = 'rotateY(' + (-z.a) + 'deg) translateZ(' + (-R) + 'px)';
      var face = div('q3-face'); w.appendChild(face); BUILD[z.k](face);
      var fl = div('q3-flo', { top: H, width: W, height: R }); fl.style.transform = 'rotateX(90deg)'; w.appendChild(fl);
      var ce = div('q3-cei', { top: -R, width: W, height: R }); ce.style.transform = 'rotateX(-90deg)'; w.appendChild(ce);
      cam.appendChild(w); walls[z.k] = { el: w, loaded: false };
    });
    lastZ = null; persp();
  }
  function load(k) {
    var w = walls[k]; if (!w || w.loaded) return; w.loaded = true;
    qa('img[data-src]', w.el).forEach(function (i) { i.src = i.getAttribute('data-src'); i.removeAttribute('data-src'); });
    qa('[data-bg]', w.el).forEach(function (d) { d.style.backgroundImage = d.getAttribute('data-bg'); d.removeAttribute('data-bg'); });
  }
  function norm(a) { return ((a % 360) + 540) % 360 - 180; }
  function near() { var a = norm(yaw), best = ZONES[0], d = 999; ZONES.forEach(function (z) { var dd = Math.abs(norm(a - z.a)); if (dd < d) { d = dd; best = z; } }); return best; }
  function idx(z) { return ZONES.indexOf(z); }
  function apply() {
    if (!cam) return;
    cam.style.transform = 'translateZ(' + PERS + 'px) rotateY(' + yaw + 'deg)';
    var z = near(); if (z === lastZ) return; lastZ = z;
    var i = idx(z); [i, (i + 1) % 6, (i + 5) % 6].forEach(function (j) { load(ZONES[j].k); });
    qa('.q3-zbar button').forEach(function (b) { b.classList.toggle('q3-on', +b.getAttribute('data-a') === z.a); });
    var mz = q('.q3-mz'); q('b', mz).textContent = z.n; q('span', mz).innerHTML = ZONES.map(function (x) { return '<i class="' + (x === z ? 'q3-on' : '') + '"></i>'; }).join('');
  }
  function goTo(a) { target = yaw + norm(a - yaw); vel = 0; hint(); kick(); }
  function kick() { if (!raf) raf = requestAnimationFrame(tick); }
  function tick() {
    raf = 0; var go = false;
    if (target !== null) { yaw += (target - yaw) * .14; if (Math.abs(target - yaw) < .05) { yaw = target; target = null; } else go = true; }
    else if (Math.abs(vel) > .08 && !dragging) { yaw += vel; vel *= .9; go = true; if (Math.abs(vel) <= .08) { vel = 0; goTo(near().a); } }
    apply(); if (go) kick();
  }
  function hint() { var h = q('.q3-hint'); if (h) h.classList.add('q3-gone'); }

  /* horizontal drag / swipe turns the room; vertical swipes still scroll the page (touch-action: pan-y) */
  var dragging = false;
  function drag() {
    var on = false, x0, y0, lx, id = null, horiz = null;
    view.addEventListener('pointerdown', function (e) { if (e.button && e.button !== 0) return; on = true; id = e.pointerId; moved = false; horiz = null; x0 = lx = e.clientX; y0 = e.clientY; vel = 0; });
    addEventListener('pointermove', function (e) {
      if (!on || e.pointerId !== id) return;
      var dx = e.clientX - lx; lx = e.clientX;
      var tx = Math.abs(e.clientX - x0), ty = Math.abs(e.clientY - y0);
      if (horiz === null && tx + ty > 8) horiz = tx >= ty;
      if (tx + ty > 8) moved = true;
      if (!horiz) return;
      dragging = true; target = null; vel = -dx * (M ? .32 : .16); yaw += vel; hint(); apply();
    });
    function end() { if (!on) return; on = false; var was = dragging; dragging = false; if (was) { if (Math.abs(vel) < 1.2) { vel = 0; goTo(near().a); } else kick(); } setTimeout(function () { moved = false; }, 30); }
    addEventListener('pointerup', end); addEventListener('pointercancel', end);
    view.addEventListener('dragstart', function (e) { e.preventDefault(); });
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

  window.QSStore360 = { fit: function (t, b) { if (t != null) ti = t; if (b != null) bi = b; paintFit('t'); paintFit('b'); }, turn: function (a) { target = null; vel = 0; yaw = a; apply(); }, go: function (k) { ZONES.forEach(function (z) { if (z.k === k) goTo(z.a); }); }, open: open, close: close, hint: hint,
    count: function () { var s = {}; qa('.q3-it').forEach(function (a) { s[a.getAttribute('data-id')] = 1; }); return Object.keys(s).length; } };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount); else mount();
})();
