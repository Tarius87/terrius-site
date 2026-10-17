/* Quality Stoner · Walk the Store · the 360 room (round-2 concept 01, productionised Oct 16 2026; v2 same evening:
   no tilt, split front wall, dressing room; v3 Oct 16 night: 7 walls by category (Tees, Hoodies & Crews, Joggers, Hats,
   Bags & More) each split LP | DN, LP/DN/All filter, name + price on every item, List view, rAF + inertia motion).
   Self-contained: injects scoped CSS + markup into <div id="qs-store"></div> (or [data-qs-store]).
   Product cutouts / close-up gallery / logos load from ../store/img/ (same repo commit); products flagged o:1 load from ./img/.
   Products flagged k:1 would be shown as a rounded product-photo card (none since Oct 16 2026 22:00). u = product URL slug when it differs from the id.
   (Dressing room + fit bag removed Oct 17 2026.)
   Oct 17 2026 'cohesive flow': dressing room, quick view, list view and the LP/DN/All filter REMOVED; the back wall is a plain
   'Shop all' wall; walls are warm charcoal (LP) / off-white (DN) with no neon glow. Tap a piece -> product page; wall header -> collection.
   Source: site-build/store360/qs-store360.src.js, built by site-build/store360/build.py. */
(function () {
  if (window.__q3Loaded) return; window.__q3Loaded = 1;
  var me = document.currentScript, SRC = me && me.src ? me.src : '';
  var BASE = SRC.replace(/[^\/?#]*([?#].*)?$/, ''), IMG = BASE + '../store/img/', OWN = BASE + 'img/';
  var D = {"damask-crew-burgundy":{"s":"dn","n":"Decanter Crew","c":"Burgundy","p":"49","z":["2XS","XS","S","M","L","XL","2XL","3XL","4XL","5XL","6XL"],"g":["damask-crew-burgundy_0.webp","damask-crew-burgundy_1.webp","damask-crew-burgundy_2.webp"],"hi":true,"x":[],"v":[["6666bd79-e70a-4236-9d86-6735f9abb251","All-Over Print","2XS",4900,1],["5fe934c6-40b7-46d8-934b-cef61e3ac2a2","All-Over Print","XS",4900,1],["14a2f8f9-7bfb-4efa-9b06-ce7e90db5a50","All-Over Print","S",4900,1],["fcf1357e-30d9-4c1c-9e43-3ce514bb4abe","All-Over Print","M",4900,1],["9e36c8bf-808c-4031-acb0-231b97a78eeb","All-Over Print","L",4900,1],["faad94a5-bb70-4253-8e57-7102c78195b0","All-Over Print","XL",4900,1],["cf0a6328-4b37-4abd-86ba-2e4b0e2d0152","All-Over Print","2XL",5100,1],["d59e4443-27e9-4dbf-b337-9b2cad4d9a89","All-Over Print","3XL",5300,1],["e47873e0-4a6a-4354-a056-60f99fbe2353","All-Over Print","4XL",5500,1],["6d1cb46a-07dd-4652-8fba-cc6c00512014","All-Over Print","5XL",5700,1],["a168f729-6168-4701-9f77-255c7b996809","All-Over Print","6XL",5900,1]]},"damask-crossbody-burgundy":{"s":"dn","n":"Decanter Crossbody","c":"Burgundy","p":"55","z":["One size"],"g":["damask-crossbody-burgundy_0.webp","damask-crossbody-burgundy_1.webp"],"hi":false,"x":[],"v":[["897d15ac-1f77-4461-9054-940d37b36401","Black","One size",5500,1]]},"embroidered-qs-crew-black":{"s":"dn","n":"Signet Crew","c":"Black","p":"49","z":["S","M","L","XL","2XL","3XL"],"g":["embroidered-qs-crew-black_0.webp","embroidered-qs-crew-black_1.webp","embroidered-qs-crew-black_2.webp"],"hi":true,"x":[],"v":[["c8a5f73c-61ae-4d2d-bc81-a098dbcdb331","Black","S",4900,1],["ab12108a-d295-4ff5-b240-806469f35bbb","Black","M",4900,1],["71861c8f-a80d-471a-9e56-b46a12f39342","Black","L",4900,1],["45815892-11c7-4b31-9933-a66549b63cb7","Black","XL",4900,1],["a702b4b0-2483-4e58-91d1-00843d54ccfc","Black","2XL",5100,1],["035411c6-9064-4fc8-93ee-ed63b8cd26a7","Black","3XL",5300,1]]},"embroidered-qs-hoodie-burgundy":{"s":"dn","n":"Signet Hoodie","c":"Burgundy","p":"62","z":["S","M","L","XL","2XL"],"g":["embroidered-qs-hoodie-burgundy_0.webp","embroidered-qs-hoodie-burgundy_1.webp","embroidered-qs-hoodie-burgundy_2.webp"],"hi":true,"x":[],"v":[["4282fde2-ffc5-48aa-ae8f-d01f9bb6aae0","Maroon","S",6200,1],["25b665ea-b164-4e45-b354-cff3c757f469","Maroon","M",6200,1],["13c14402-3bcd-4456-a540-be9ea019ced6","Maroon","L",6200,1],["a365a187-073c-48f9-8ac2-7bf3ea84c55e","Maroon","XL",6200,1],["0c8b2421-ea4e-45a5-b445-efa0c99217ed","Maroon","2XL",6400,1]]},"embroidered-qs-joggers-burgundy":{"s":"dn","n":"Signet Joggers","c":"Burgundy","p":"45","z":["XS","S","M","L","XL","2XL"],"g":["embroidered-qs-joggers-burgundy_0.webp","embroidered-qs-joggers-burgundy_1.webp"],"hi":true,"x":[],"v":[["610baada-75f4-4867-b46d-a3804689e6de","Maroon","XS",4500,1],["4aea4a3b-8e31-4761-8954-ed04f449e751","Maroon","S",4500,1],["279008ba-2835-4c83-879f-a523371ed27e","Maroon","M",4500,1],["51e0219a-914f-48a9-bf61-f43f23b87794","Maroon","L",4500,1],["fef93684-8cd6-4fe1-b497-3ce7bd009677","Maroon","XL",4500,1],["bfc923a3-54fc-417e-bfec-80ad8886b20d","Maroon","2XL",4700,1]]},"embroidered-qs-tee-burgundy":{"s":"dn","n":"Signet Tee","c":"Burgundy","p":"29","z":["S","M","L","XL","2XL"],"g":["embroidered-qs-tee-burgundy_0.webp","embroidered-qs-tee-burgundy_1.webp","embroidered-qs-tee-burgundy_2.webp"],"hi":true,"x":[],"v":[["62eb95d0-0ac2-4457-bd83-d171e649ef7e","Burgundy","S",2900,1],["b3de23b8-fbb7-4777-96d8-11d411e19f57","Burgundy","M",2900,1],["af7e2e77-c3de-4d23-869d-c007b3f673f4","Burgundy","L",2900,1],["52d448a8-5f13-47b4-be42-3f5919b62e0f","Burgundy","XL",2900,1],["f6a74721-2746-405b-8a38-e3e5b00f6694","Burgundy","2XL",3045,1]]},"lockup-hoodie-black":{"s":"lp","n":"Postscript Hoodie","c":"Black","p":"58","z":["S","M","L","XL","2XL","3XL"],"g":["lockup-hoodie-black_1.webp","lockup-hoodie-black_0.webp","lockup-hoodie-black_2.webp"],"hi":true,"x":[],"v":[["905d47bd-58c9-46e8-a297-464725e50941","Black","S",5800,1],["e0798d56-951f-4732-849f-31c88666a765","Black","M",5800,1],["d335156e-3b6f-4e41-877d-1f2a86242bea","Black","L",5800,1],["5d17f014-221e-4496-ac2e-90fa9b7a8e66","Black","XL",5800,1],["32e05325-d888-463c-bd50-54c7bb12cb41","Black","2XL",6000,1],["21b870cb-db6e-4e08-b21b-c8621d59b72f","Black","3XL",6200,1]]},"maison-monogram-backpack-black":{"s":"dn","n":"Cipher Backpack","c":"Black","p":"48","z":["One size"],"g":["maison-monogram-backpack-black_0.webp","maison-monogram-backpack-black_1.webp","maison-monogram-backpack-black_2.webp"],"hi":false,"x":[],"v":[["30eaa151-6e5c-41f3-9d82-f7cd4b301bd9","All-Over Print","One size",4800,1]]},"maison-monogram-tee-black":{"s":"dn","n":"Cipher Tee","c":"Black","p":"34.99","z":["XS","S","M","L","XL","2XL"],"g":["maison-monogram-tee-black_0.webp","maison-monogram-tee-black_1.webp"],"hi":true,"x":[],"v":[["24594d9e-f506-488c-a567-0648ab4a79f3","White ","XS",3499,1],["aea687f7-053d-4302-b25c-1e1f08c94a69","White ","S",3499,1],["466f070d-7e0e-4e55-b6f8-5761b7adb437","White ","M",3499,1],["b7e31a74-5061-4b93-9423-0c18787d7e8b","White ","L",3499,1],["40dba4c9-eebb-499b-a2e2-7d519b7a4751","White ","XL",3499,1],["a0991cd3-710b-41c1-be47-eae9f3fbd8cb","White ","2XL",3699,1]]},"maison-monogram-tee-white":{"s":"dn","n":"Cipher Tee","c":"White","p":"34.99","z":["XS","S","M","L","XL","2XL"],"g":["maison-monogram-tee-white_0.webp","maison-monogram-tee-white_1.webp"],"hi":true,"x":[],"v":[["28a7b6c1-3c09-455d-8454-2b7f00897877","White ","XS",3499,1],["908cfa4a-390d-4f22-9773-9fce40276e46","White ","S",3499,1],["0cbea435-ff6c-4ccf-bde0-339086d9d4a7","White ","M",3499,1],["c6ec66d4-878a-4d0b-b7d0-afe72403ba7b","White ","L",3499,1],["73e27ddf-e83e-48bd-a9ac-da30a65af739","White ","XL",3499,1],["dbbbe2ef-1c97-49ee-ba3c-7edd9d3ff717","White ","2XL",3699,1]]},"qs-cuff-beanie-burgundy":{"s":"dn","n":"Signet Beanie","c":"Burgundy","p":"29.95","z":["One size"],"g":["qs-cuff-beanie-burgundy_0.webp","qs-cuff-beanie-burgundy_1.webp"],"hi":false,"x":[],"v":[["f8142910-526a-4c64-9ead-a5dd2567ac32","Burgundy","One size",2995,1]]},"qs-lp-bp04-backpack-black":{"s":"lp","n":"Calling Card Backpack","c":"Black","p":"48","z":["One size"],"g":["qs-lp-bp04-backpack-black_0.webp","qs-lp-bp04-backpack-black_1.webp"],"hi":false,"x":[],"v":[["0beeec6b-4ecf-4950-b72b-7ce4eb9f337e","All-Over Print","One size",4800,1]]},"qs-lp-bp05-backpack-white":{"s":"lp","n":"Calling Card Backpack","c":"White","p":"48","z":["One size"],"g":["qs-lp-bp05-backpack-white_0.webp","qs-lp-bp05-backpack-white_1.webp","qs-lp-bp05-backpack-white_2.webp"],"hi":false,"x":[],"v":[["83211f6d-f5d6-4deb-be4d-409811deab5b","All-Over Print","One size",4800,1]]},"qs-snapback-black":{"s":"dn","n":"Signet Snapback","c":"Black","p":"34.95","z":["One size"],"g":["qs-snapback-black_0.webp"],"hi":false,"x":[],"v":[["7e9d3892-b1f9-4393-bfc8-9a6080c60c83","Black","One size",3495,1]]},"qs-snapback-burgundy":{"s":"dn","n":"Signet Snapback","c":"Burgundy","p":"34.95","z":["One size"],"g":["qs-snapback-burgundy_0.webp"],"hi":false,"x":[],"v":[["88790266-e6e1-4eaa-8fb6-95f2a7c21f6a","Maroon","One size",3495,1]]},"scattered-monogram-hoodie-white":{"s":"dn","n":"Pressed Flower Hoodie","c":"White","p":"58","z":["2XS","XS","S","M","L","XL","2XL","3XL","4XL","5XL","6XL"],"g":["scattered-monogram-hoodie-white_0.webp","scattered-monogram-hoodie-white_1.webp","scattered-monogram-hoodie-white_2.webp"],"hi":true,"x":[],"v":[["7ad34e11-b11a-41b3-b149-2817f54c0186","White","2XS",5800,1],["3eb7b4e2-c6bb-4aac-8d88-917733ce903d","White","XS",5800,1],["f1e0582d-fc5e-4262-ac37-8e557f863f7a","White","S",5800,1],["6c761e15-99c4-44ef-a9b9-2707b799eacf","White","M",5800,1],["411f8af0-0dea-4e10-9f3e-4d52bf59ead9","White","L",5800,1],["d77edffc-63cb-4063-adeb-bc041e373a24","White","XL",5800,1],["f5b13ec3-80de-44eb-8f6e-206452d42a95","White","2XL",6000,1],["164893bb-b831-4f3f-8055-05d52b50fbc5","White","3XL",6200,1],["c0e409c7-79a3-4e1d-98b2-3ccb79b73ef5","White","4XL",6400,1],["ac97755c-1f41-48ed-a789-ccac1af78f1e","White","5XL",6600,1],["74126e0f-e1ab-46bb-9e71-1e734edcf1cb","White","6XL",6800,1]]},"seal-crew-burgundy":{"s":"lp","n":"Wax Seal Crew","c":"Burgundy","p":"49","z":["2XS","XS","S","M","L","XL","2XL","3XL","4XL","5XL","6XL"],"g":["seal-crew-burgundy_0.webp","seal-crew-burgundy_1.webp","seal-crew-burgundy_2.webp"],"hi":true,"x":[],"v":[["75374516-1469-4fad-a412-d6c3d4feade5","All-Over Print","2XS",4900,1],["e2e0fc8a-e5f0-4e0e-b1a8-18bdfbcff755","All-Over Print","XS",4900,1],["10eaecd6-52fd-493f-a520-9ba500bb27b1","All-Over Print","S",4900,1],["6250d58a-331c-444a-8bdd-8f9cd13d3ca2","All-Over Print","M",4900,1],["3b41e45b-e3c5-4a36-8072-a6a7a864de82","All-Over Print","L",4900,1],["4d873e9f-691c-422f-a0d9-ec6b2cae857b","All-Over Print","XL",4900,1],["a014df0c-eb11-4dee-84e1-17c10fb15f2c","All-Over Print","2XL",5100,1],["b38ac698-b073-4b75-96f4-dfe735b030bb","All-Over Print","3XL",5300,1],["f9855394-de9c-4014-a900-96238f7dd8ed","All-Over Print","4XL",5500,1],["2990917b-fd2e-4ddb-a655-3a449a49544d","All-Over Print","5XL",5700,1],["72606ab8-74da-4061-be7f-c095ac8837b0","All-Over Print","6XL",5900,1]]},"wordmark-cuff-beanie-black":{"s":"lp","n":"Masthead Beanie","c":"Black","p":"27.95","z":["One size"],"g":["wordmark-cuff-beanie-black_0.webp","wordmark-cuff-beanie-black_1.webp","wordmark-cuff-beanie-black_2.webp"],"hi":false,"x":[],"v":[["59e9e33d-8d7a-4507-9ee9-f491ed026c4c","Black","One size",2795,1]]},"wordmark-hoodie-white":{"s":"lp","n":"Masthead Hoodie","c":"White","p":"58","z":["S","M","L","XL","2XL","3XL"],"g":["wordmark-hoodie-white_0.webp","wordmark-hoodie-white_1.webp","wordmark-hoodie-white_2.webp"],"hi":true,"x":[],"v":[["fa655027-d83e-442f-a6f2-75b091c69622","White","S",5800,1],["3d85dee4-3e20-4f1d-952c-ba345484bc80","White","M",5800,1],["87d291df-4b23-4b5e-a1c5-610276a0d47d","White","L",5800,1],["d4166d62-b1a4-4272-8822-5427ba707c3a","White","XL",5800,1],["3466434d-0518-4306-9221-b51dabbd1b9e","White","2XL",6000,1],["36cfb492-4fa0-4f1e-b9ea-74d980f54b94","White","3XL",6200,1]]},"wordmark-leg-joggers-black":{"s":"lp","n":"Bookmark Joggers","c":"Black","p":"45","z":["XS","S","M","L","XL","2XL"],"g":["wordmark-leg-joggers-black_0.webp","wordmark-leg-joggers-black_1.webp"],"hi":true,"x":[],"v":[["62ad7358-c868-4d1a-ac8e-af0e6add618f","Black","XS",4500,1],["1cad7278-4576-4f02-8a06-37f41ef3c85d","Black","S",4500,1],["3f8d45ba-a2e6-40ed-84da-0354b5139101","Black","M",4500,1],["1756df83-7daa-4d5d-944e-cb03b0f11386","Black","L",4500,1],["0300ca52-fb37-4b61-bd9b-e8709afcc711","Black","XL",4500,1],["a2b16e53-9e07-402d-b324-a3f5d47539bb","Black","2XL",4700,1]]},"wordmark-snapback-black":{"s":"lp","n":"Masthead Snapback","c":"Black","p":"34.95","z":["One size"],"g":["wordmark-snapback-black_0.webp"],"hi":false,"x":[],"v":[["d3c5f2b4-4d24-42e0-98e0-b6fcdc787087","Black","One size",3495,1]]},"qs-lp-ts01-classic-tee-white":{"s":"lp","n":"Calling Card Tee","c":"White","p":"29","z":["S","M","L","XL","2XL","3XL","4XL"],"hi":false,"g":["qs-lp-ts01-classic-tee-white_1.webp","qs-lp-ts01-classic-tee-white_2.webp"],"o":1,"x":[],"v":[["8a656384-2701-4abc-a671-c69340e907cb","White","S",2900,1],["b8a2b967-075b-4e7f-a1db-dee02f344c2f","White","M",2900,1],["90bc4ba4-1c0d-4df9-b787-0bd75f353b81","White","L",2900,1],["0980ea42-8585-4e69-a30c-c3876058bff9","White","XL",2900,1],["580e8fe7-ad20-45bf-aa90-38ca7f1270a4","White","2XL",2900,1],["f5bb9633-7189-403c-b5d4-d386809dc4a6","White","3XL",2900,1],["6c0239eb-5b7b-4d2c-a46b-c3f75b05afd1","White","4XL",2900,1]]},"letterpress-crew-white":{"s":"lp","n":"First Edition Crew","c":"White","p":"49","z":["S","M","L","XL","2XL","3XL"],"hi":true,"g":["letterpress-crew-white_0.webp","letterpress-crew-white_1.webp","letterpress-crew-white_2.webp"],"o":1,"u":"letterpress-crew-grey","v":[["060b119d-a49e-43d4-bd08-887baa421b07","White","S",4900,1],["e80df36f-79f9-4237-8440-e58d1fee4f92","White","M",4900,1],["3fae5945-a239-4ad0-9f0e-5a8622516ba3","White","L",4900,1],["b7a5470d-bbbf-45a4-b55d-b0b759f754ae","White","XL",4900,1],["c5f06f73-e188-4a10-aace-f6fcfaa876da","White","2XL",5100,1],["2fda36d2-7ada-45fb-8bc8-31204021821b","White","3XL",5300,1]],"x":[]},"hem-band-joggers-off-white":{"s":"lp","n":"Ribbon Joggers","c":"Off-White","p":"60","z":["XS","S","M","L","XL","2XL","3XL"],"hi":true,"g":["hem-band-joggers-off-white_0.webp","hem-band-joggers-off-white_1.webp"],"o":1,"x":[],"v":[["cd0d2d3a-0fed-4589-a148-181a2595597c","All-Over Print","XS",6000,1],["dd31609f-d98a-464f-8504-f3c953c77228","All-Over Print","S",6000,1],["10f57038-beef-4ca1-9884-17605bfe7433","All-Over Print","M",6000,1],["691e27b7-e84d-4c8e-aa98-01d695c3a9a6","All-Over Print","L",6000,1],["7afb42aa-37c4-49c2-8887-bc6668cad1ba","All-Over Print","XL",6000,1],["7d419b44-5012-4c90-9610-e3f890387a2e","All-Over Print","2XL",6200,1],["8cc8531a-0b5d-46c3-9f25-3810645cf545","All-Over Print","3XL",6400,1]]},"maison-monogram-joggers-black":{"s":"dn","n":"Cipher Joggers","c":"Black","p":"60","z":["XS","S","M","L","XL","2XL","3XL"],"hi":true,"g":["maison-monogram-joggers-black_0.webp","maison-monogram-joggers-black_1.webp"],"o":1,"x":[],"v":[["b06bcb1d-d689-436b-8581-b8273bc4a9ca","All-Over Print","XS",6000,1],["88ef2561-cf5d-4460-95dc-1da150fdc680","All-Over Print","S",6000,1],["0deb82b6-1d26-4be7-ba8e-adc084985342","All-Over Print","M",6000,1],["03fe980d-1c30-4dad-8d25-84531331ec9a","All-Over Print","L",6000,1],["6a523d93-c86c-456f-9450-d8f424367154","All-Over Print","XL",6000,1],["7235454a-aff1-494a-93f2-447df257534f","All-Over Print","2XL",6200,1],["f91738f4-d612-4656-b6e4-5cf3f25f6f9f","All-Over Print","3XL",6400,1]]},"heavyweight-tee-black":{"s":"lp","n":"Calling Card Tee","c":"Black","p":"29","z":["S","M","L","XL","2XL","3XL","4XL"],"hi":true,"g":["heavyweight-tee-black_0.webp","heavyweight-tee-black_1.webp","heavyweight-tee-black_2.webp"],"o":1,"x":[],"v":[["0a672f2a-122a-47ed-8abc-d9c15d9a89ea","Black","S",2900,1],["e69d555a-c85e-429e-afb5-affd4314e1d0","Black","M",2900,1],["d5f6dab9-a5eb-4b25-a70d-bdd22a355103","Black","L",2900,1],["c707f186-8183-4af5-a4a0-e77dbb74c775","Black","XL",2900,1],["36cbecc4-01ad-4c9c-b503-5c774242dda8","Black","2XL",3100,1],["251a6d76-a111-4dcc-8406-7dc748a7596d","Black","3XL",3300,1],["718c68f0-3627-40ca-ab02-66799619e90f","Black","4XL",3500,1]]},"damask-lined-hoodie-black":{"s":"dn","n":"Locket Hoodie","c":"Black","p":"58","z":["2XS","XS","S","M","L","XL","2XL","3XL","4XL","5XL","6XL"],"hi":true,"g":["damask-lined-hoodie-black_0.webp","damask-lined-hoodie-black_1.webp","damask-lined-hoodie-black_2.webp"],"o":1,"x":[],"v":[["317d4af7-8815-4d24-b5dd-5822bd601cd6","White","2XS",5800,1],["b103a8f4-be53-49bb-bc86-321dc5c0bf4f","White","XS",5800,1],["1ee7332a-0bd2-4888-8788-e67744f19ab0","White","S",5800,1],["6ee7159f-9d2f-4204-ae61-da90777581fd","White","M",5800,1],["f8089e52-cf08-4f77-a2df-4d9ecabd7209","White","L",5800,1],["3f73a978-afab-4e62-aebe-b18f7a2fe94f","White","XL",5800,1],["43dca2fa-5ce0-43d0-8421-cb0730faf884","White","2XL",6000,1],["aef80c63-6705-492e-8005-0b585e0d26b7","White","3XL",6200,1],["e2da0964-1546-4be8-9a38-b6c895586e77","White","4XL",6400,1],["7eb9a34a-6a70-4988-9d8e-fedf41ee9c3b","White","5XL",6600,1],["46f9758a-cc85-4476-97c9-21ce784cca21","White","6XL",6800,1]]},"wordmark-lattice-backpack-white":{"s":"lp","n":"Filigree Backpack","c":"White","p":"48","z":["One size"],"hi":false,"g":["wordmark-lattice-backpack-white_0.webp","wordmark-lattice-backpack-white_1.webp","wordmark-lattice-backpack-white_2.webp"],"o":1,"x":[],"v":[["6930aed7-4566-44df-887e-52459c526a02","All-Over Print","One size",4800,1]]},"qs-cuff-beanie-white":{"s":"dn","n":"Signet Beanie","c":"White","p":"27.95","z":["One size"],"hi":false,"g":["qs-cuff-beanie-white_0.webp","qs-cuff-beanie-white_1.webp","qs-cuff-beanie-white_2.webp"],"o":1,"v":[["975322f1-52ae-4e9f-99c0-5c76ab849ad8","White","One size",2795,1]],"x":[]},"embroidered-qs-sherpa-black":{"s":"dn","n":"Signet Sherpa Blanket","c":"Black","p":"59","z":["50\" x 60\""],"hi":false,"g":["embroidered-qs-sherpa-black_0.webp","embroidered-qs-sherpa-black_1.webp","embroidered-qs-sherpa-black_2.webp"],"o":1,"x":[],"v":[["4dc33384-431e-407f-9b93-dbb072fb1768","Black","50\" x 60\"",5900,1]]},"engraved-crest-blanket-white":{"s":"dn","n":"Heirloom Blanket","c":"White","p":"45","z":["50\" x 60\""],"hi":false,"g":["engraved-crest-blanket-white.webp"],"o":1,"v":[["efb5614d-7187-4ab6-8e5b-821aad1cbb12","All-Over Print","50\" x 60\"",4500,1]],"x":[]}};
  /* Oct 17 2026 ~16:10: public products per category collection on Fourthwall (build-time, cats_count.py) -> wall header counts */
  var CNT = {"tees": 5, "hoodies-crews": 9, "joggers": 4, "hats": 5, "bags-more": 7};
  var SHOP = 'https://qualitystoner.com/products/';
  var LOGO = { word: IMG + 'word-white.webp', mk: IMG + 'qs-mono-white.webp', mkK: IMG + 'qs-mono-black.webp' };
  var CSS = ".q3-host{display:block;position:relative;z-index:0;isolation:isolate;max-width:none!important;padding:0!important;overflow:visible}html.q3-dr .q3-tools,html.q3-dr .q3-hint,html.q3-dr .q3-zones,body:has(aside.drawer.visible) .q3-tools,body:has(aside.drawer.visible) .q3-hint,body:has(aside.drawer.visible) .q3-zones{visibility:hidden!important}.q3,.q3-cu{--qb:#6E0B22;--qow:#F4F3F0;--qg:#a3203f;--qr:#e7a9b6;font-family:inherit;-webkit-font-smoothing:antialiased;line-height:1.2;text-align:left;letter-spacing:normal;text-transform:none}.q3 *,.q3-cu *{box-sizing:border-box;margin:0;padding:0;font-family:inherit}.q3 a,.q3-cu a{color:inherit;text-decoration:none!important;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}.q3 button,.q3-cu button{font:inherit;color:inherit;background:none;border:0;cursor:pointer;-webkit-tap-highlight-color:transparent;-webkit-appearance:none;appearance:none;min-height:0;min-width:0;box-shadow:none;text-transform:none;letter-spacing:normal;line-height:1.2;border-radius:0}.q3 img,.q3-cu img{display:block;max-width:none;height:auto;-webkit-user-drag:none;user-select:none;-webkit-user-select:none;border:0}.q3 b,.q3-cu b,.q3 strong,.q3-cu strong{color:inherit!important;font-weight:600}.q3 i,.q3-cu i,.q3 small,.q3 span{color:inherit}.q3 h2,.q3-cu h2,.q3 p{font-family:inherit;color:inherit;letter-spacing:normal;text-transform:none}.q3{position:relative;width:100%;height:760px;overflow:hidden;background:#060506;color:#fff;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none}.q3-view{position:absolute;inset:0;overflow:hidden;background:#060506;touch-action:pan-y;cursor:grab;outline:none}.q3-view:active{cursor:grabbing}.q3-cam{position:absolute;left:50%;top:50%;width:0;height:0;perspective-origin:0 0}.q3-wall{position:absolute}.q3-face{position:absolute;inset:0;overflow:hidden}.q3-flo,.q3-cei{position:absolute;clip-path:polygon(0 0,100% 0,70% 100%,30% 100%);-webkit-clip-path:polygon(0 0,100% 0,70% 100%,30% 100%)}.q3-cei{clip-path:polygon(30% 0,70% 0,100% 100%,0 100%);-webkit-clip-path:polygon(30% 0,70% 0,100% 100%,0 100%);background:linear-gradient(0deg,#151213,#0a0909)}.q3-cei::after{content:\"\";position:absolute;left:47%;width:6%;top:0;bottom:0;background:repeating-linear-gradient(0deg,transparent 0 60px,rgba(255,240,240,.55) 60px 66px,transparent 66px 120px)}.q3-lp .q3-face{background:linear-gradient(180deg,#1a0d11 0,#0d0809 55%,#090607 100%);box-shadow:inset 0 3px 0 #a3203f,inset 0 40px 60px -30px rgba(163,32,63,.75)}.q3-lp .q3-face::before,.q3-dn .q3-face::before{content:\"\";position:absolute;inset:0;background:repeating-linear-gradient(90deg,rgba(255,255,255,.035) 0 1px,transparent 1px 150px);pointer-events:none}.q3-flo.q3-lp{background:linear-gradient(#2a0c14,#120709 70%,#0b0708)}.q3-dn .q3-face{background:linear-gradient(180deg,#fbfaf8,#F4F3F0 60%,#e8e6e1);box-shadow:inset 0 -50px 70px -40px rgba(0,0,0,.18)}.q3-dn .q3-face::before{background:repeating-linear-gradient(90deg,rgba(0,0,0,.04) 0 1px,transparent 1px 150px)}.q3-flo.q3-dn{background:linear-gradient(#d9d6d0,#bdb9b2 70%,#a9a59e)}.q3-mx .q3-face{background:#0b0a0a}.q3-flo.q3-mx{background:linear-gradient(#24201f,#121011)}.q3-sign{position:absolute;display:flex;flex-direction:column;align-items:center;gap:12px;transform:translateX(-50%);pointer-events:none}.q3 .q3-sign img{width:auto}.q3-sign small{font-size:13px;font-weight:600;letter-spacing:.3em;text-transform:uppercase;opacity:.8;white-space:nowrap}.q3 .q3-lp .q3-sign img,.q3 .q3-mx .q3-sign img.q3-w{filter:drop-shadow(0 0 2px #fff) drop-shadow(0 0 10px #a3203f) drop-shadow(0 0 26px #a3203f)}.q3-dn .q3-sign small{color:#111}.q3-rail{position:absolute;height:6px;border-radius:3px}.q3-lp .q3-rail{background:linear-gradient(#6b6b6b,#2b2b2b);box-shadow:0 0 12px rgba(163,32,63,.6)}.q3-dn .q3-rail{background:#141414}.q3-shelf{position:absolute;height:12px;border-radius:2px}.q3-lp .q3-shelf{background:linear-gradient(#3a0b16,#1c0509);box-shadow:0 8px 18px rgba(0,0,0,.6),0 -1px 0 #a3203f}.q3-dn .q3-shelf{background:linear-gradient(#e2d9cb,#c9bda9);box-shadow:0 10px 16px rgba(0,0,0,.15)}.q3-hang{position:absolute;width:1.5px}.q3-lp .q3-hang{background:rgba(255,255,255,.35)}.q3-dn .q3-hang{background:rgba(0,0,0,.45)}.q3-cub{position:absolute;border-radius:6px}.q3-lp .q3-cub{background:linear-gradient(#050304,#1a0b0f);box-shadow:inset 0 0 0 2px #3a0b16,inset 0 18px 30px rgba(163,32,63,.35)}.q3-dn .q3-cub{background:linear-gradient(#e9e7e2,#fff);box-shadow:inset 0 0 0 2px #d8d5cf,inset 0 14px 22px rgba(0,0,0,.08)}.q3-hl{position:absolute;font-size:12px;font-weight:600;letter-spacing:.3em;text-transform:uppercase;transform:translateX(-50%);white-space:nowrap;pointer-events:none}.q3-half{position:absolute;top:0;bottom:0;width:50%}.q3-half.q3-l{left:0;background:linear-gradient(180deg,#1a0d11,#0a0708);box-shadow:inset 0 3px 0 #a3203f,inset 0 40px 60px -30px rgba(163,32,63,.75)}.q3-half.q3-r{right:0;background:linear-gradient(180deg,#fbfaf8,#ebe9e4)}.q3-counter{position:absolute;left:0;right:0;bottom:0}.q3-counter .q3-l,.q3-counter .q3-r{position:absolute;top:0;bottom:0;width:50%}.q3-counter .q3-l{left:0;background:linear-gradient(#5a0a1c,#3b0612 18%,#20040a);border-top:6px solid #120a0c}.q3-counter .q3-r{right:0;background:linear-gradient(#ffffff,#e4e1db);border-top:6px solid #cfcac2}.q3-win{position:absolute;background:#141112 50% 60%/cover;border:14px solid #141112;box-shadow:inset 0 0 60px rgba(0,0,0,.6)}.q3-door{position:absolute;border:12px solid #141112;background:#141112 70% 60%/cover}.q3-door::before{content:\"\";position:absolute;inset:0;background:linear-gradient(160deg,rgba(80,90,130,.35),rgba(10,10,20,.8))}.q3-door::after{content:\"\";position:absolute;right:16px;top:48%;width:8px;height:80px;border-radius:4px;background:#888}.q3-exit{position:absolute;transform:translateX(-50%);font-size:12px;font-weight:600;letter-spacing:.3em;color:#e7a9b6;text-transform:uppercase;white-space:nowrap;pointer-events:none}.q3-locked{position:absolute;right:30px;bottom:26px;width:230px;height:200px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;border:1.5px dashed rgba(255,255,255,.35);border-radius:14px;background:rgba(8,6,7,.86);color:#fff}.q3-locked .q3-lk{width:30px;height:30px;border-radius:50%;display:grid;place-items:center;border:1.5px solid currentColor;font-size:14px}.q3-locked b{font-size:11px;letter-spacing:.24em;text-transform:uppercase}.q3-locked span{font-size:12px;opacity:.75}.q3 .q3-all{position:absolute;transform:translateX(-50%);display:inline-flex;align-items:center;border-radius:99px;padding:12px 18px;font-size:11px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;white-space:nowrap}.q3 .q3-all.q3-lp{background:var(--qb);color:#fff}.q3 .q3-all.q3-dn{background:#111;color:#fff}.q3-it{position:absolute;display:block;cursor:pointer}.q3 .q3-it img{width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 16px 18px rgba(0,0,0,.45))}.q3 .q3-it.q3-dn img{filter:drop-shadow(0 14px 14px rgba(0,0,0,.2))}.q3-tag{position:absolute;left:50%;top:calc(100% + 8px);transform:translateX(-50%);white-space:nowrap;font-size:11px;font-weight:600;letter-spacing:.02em;padding:5px 9px;border-radius:99px;pointer-events:none;line-height:1.2}.q3-tag.q3-lp{background:rgba(10,6,7,.88);color:#fff;border:1px solid rgba(194,70,95,.7)}.q3-tag.q3-dn{background:#fff;color:#111;border:1px solid #d5d4d0}.q3-tag i{font-style:normal;opacity:.7;margin-left:6px}.q3-tag.q3-two{white-space:normal;width:max-content;max-width:150px;text-align:center;border-radius:10px;line-height:1.3}.q3-tag.q3-two i{display:block;margin:0}.q3-hint{position:absolute;z-index:20;left:50%;bottom:92px;transform:translateX(-50%);width:640px;max-width:calc(100% - 28px);display:grid;grid-template-columns:1fr auto;column-gap:18px;align-items:end;padding:14px 18px;border-radius:16px;background:rgba(0,0,0,.82);border:1px solid rgba(255,255,255,.1);border-top:2px solid var(--qb);transition:opacity .4s;pointer-events:none}.q3-hint .q3-k{font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:#c9a5ae}.q3 .q3-hint h2{font-size:24px;line-height:1.1;font-weight:600;margin-top:6px}.q3 .q3-hint p{font-size:13.5px;line-height:1.45;color:#d9d3d5;margin-top:4px}.q3-how{grid-column:2;grid-row:1/4;display:flex;flex-direction:column;gap:8px}.q3-how span{font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;padding:7px 10px;border-radius:99px;border:1px solid rgba(255,255,255,.35);white-space:nowrap}.q3-hint.q3-gone{opacity:0}.q3-zones{position:absolute;left:50%;bottom:22px;transform:translateX(-50%);z-index:30;display:flex;align-items:center;gap:10px}.q3 .q3-ctl{width:48px;height:48px;border-radius:50%;display:grid;place-items:center;background:rgba(10,8,9,.78);border:1px solid rgba(255,255,255,.22);font-size:22px;font-weight:600;color:#fff}.q3-zbar{display:flex;gap:4px;padding:5px;border-radius:99px;background:rgba(8,6,7,.82);border:1px solid rgba(255,255,255,.16)}.q3 .q3-zbar button{height:38px;padding:0 14px;border-radius:99px;font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;opacity:.7;white-space:nowrap;color:#fff}.q3 .q3-zbar button.q3-on{opacity:1;background:#fff;color:#111}.q3 .q3-zbar button.q3-on.q3-l{background:var(--qb);color:#fff}.q3-mz{display:none}@media(max-width:1100px) and (min-width:750px){.q3 .q3-zbar button{padding:0 10px;letter-spacing:.08em}}@media(max-width:749px){.q3-zbar{display:none}.q3-mz{display:flex;flex-direction:column;align-items:center;gap:6px;min-width:150px;padding:8px 14px;border-radius:18px;background:rgba(8,6,7,.84);border:1px solid rgba(255,255,255,.16)}.q3-mz b{white-space:nowrap;font-size:11px;font-weight:600;letter-spacing:.16em;text-transform:uppercase}.q3-mz span{display:flex;gap:6px}.q3-mz i{width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.35)}.q3-mz i.q3-on{background:#fff}.q3-zones{bottom:18px;gap:14px}.q3 .q3-ctl{width:54px;height:54px}.q3-tag{font-size:18px;padding:7px 12px}.q3-tag.q3-two{border-radius:14px}.q3-sign small{font-size:20px}.q3-hl{font-size:20px}.q3 .q3-all{font-size:17px;padding:14px 22px}.q3-hint{left:12px;right:12px;bottom:92px;width:auto;max-width:none;transform:none;display:block;padding:12px 14px}.q3-how{display:none}.q3 .q3-hint h2{font-size:20px}.q3 .q3-hint p{font-size:13px}}.q3 .q3-fitw{background:radial-gradient(ellipse at 50% 0,#2a1a1c 0,#120c0d 55%,#0a0708 100%)}.q3-curt{position:absolute;top:0;bottom:0;background:repeating-linear-gradient(90deg,#4a0716 0 18px,#6E0B22 18px 30px,#3a0512 30px 44px);box-shadow:inset 0 0 40px rgba(0,0,0,.6)}.q3-curt.q3-l{border-radius:0 0 60px 0}.q3-curt.q3-r{border-radius:0 0 0 60px}.q3-mir{position:absolute;border-radius:200px 200px 18px 18px;background:linear-gradient(180deg,#efebe5,#d6d0c7 70%,#c7c0b6);border:10px solid #F4F3F0;box-shadow:0 0 0 2px #6E0B22,0 0 40px rgba(244,243,240,.18),inset 0 0 60px rgba(0,0,0,.18)}.q3-fs{position:absolute;display:block;cursor:pointer}.q3 .q3-fs img{width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 12px 14px rgba(0,0,0,.28))}.q3 .q3-fs img.q3-out{opacity:0}.q3 .q3-sw{position:absolute;width:56px;height:56px;border-radius:50%;display:grid;place-items:center;background:#111;color:#fff;font-size:30px;line-height:1;border:2px solid #F4F3F0;box-shadow:0 6px 16px rgba(0,0,0,.35);z-index:2}.q3 .q3-sw:hover{background:#6E0B22}.q3-fhd{position:absolute;display:flex;flex-direction:column;gap:8px;color:#fff;pointer-events:none}.q3-fhd .q3-k{font-size:12px;font-weight:600;letter-spacing:.3em;text-transform:uppercase;color:#e7a9b6}.q3 .q3-fhd b{font-size:40px;line-height:1.05;font-weight:600}.q3 .q3-fhd p{font-size:15px;line-height:1.45;color:#d9d3d5}.q3-fc{position:absolute;display:flex;flex-direction:column;gap:4px;padding:14px 16px;border-radius:14px;background:rgba(244,243,240,.96);color:#111;box-shadow:0 10px 24px rgba(0,0,0,.35)}.q3-fc .q3-fl{font-size:11px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:#6E0B22}.q3 .q3-fc .q3-fn{font-size:18px;font-weight:600;line-height:1.2;color:#111}.q3-fc .q3-fp{font-size:14px;color:#444}.q3 .q3-fc .q3-fv{align-self:flex-start;margin-top:6px;padding:8px 14px;border-radius:99px;background:#111;color:#fff;font-size:11px;font-weight:600;letter-spacing:.16em;text-transform:uppercase}.q3 .q3-fc.q3-ftot{flex-direction:row;justify-content:space-between;align-items:center;background:#6E0B22;color:#fff}.q3 .q3-ftot .q3-fl{color:#fff}.q3 .q3-ftot b{font-size:26px}@media(max-width:749px){.q3-fhd{transform:translateX(-50%);align-items:center;text-align:center;gap:6px}.q3-fhd .q3-k{font-size:19px}.q3 .q3-fhd b{font-size:46px}.q3-fhd .q3-tot{font-size:22px;font-weight:600;color:#fff;background:#6E0B22;padding:6px 16px;border-radius:99px;margin-top:4px}.q3 .q3-sw{width:76px;height:76px;font-size:42px}.q3-fc{padding:16px 18px;gap:6px;border-radius:18px}.q3-fc .q3-fl{font-size:16px}.q3 .q3-fc .q3-fn{font-size:23px}.q3-fc .q3-fp{font-size:19px}.q3 .q3-fc .q3-fv{font-size:16px;padding:10px 18px}}.q3-wall img:not(.q3-ok){opacity:0}@media(prefers-reduced-motion:reduce){.q3-wall img{transition:none!important}}.q3-drag .q3-view{cursor:grabbing}.q3 .q3-card img{filter:drop-shadow(0 14px 18px rgba(0,0,0,.4))}.q3-reg{position:absolute}.q3-reg.q3-lp{background:linear-gradient(180deg,#1a0d11,#0a0708);box-shadow:inset 0 3px 0 #a3203f,inset 0 40px 60px -30px rgba(163,32,63,.75)}.q3-reg.q3-dn{background:linear-gradient(180deg,#fbfaf8,#ebe9e4)}.q3-rlab{position:absolute;display:flex;flex-direction:column;align-items:center;gap:8px;transform:translateX(-50%);pointer-events:none}.q3 .q3-rlab img{width:auto}.q3-rlab small{font-size:12px;font-weight:600;letter-spacing:.3em;text-transform:uppercase;white-space:nowrap}.q3-rlab.q3-lp small{color:#fff;opacity:.85}.q3-rlab.q3-dn small{color:#111;opacity:.8}.q3 .q3-rlab.q3-lp img{filter:drop-shadow(0 0 2px #fff) drop-shadow(0 0 8px #a3203f)}.q3-ctt{position:absolute;transform:translateX(-50%);display:flex;align-items:baseline;gap:10px;padding:9px 18px;border-radius:99px;background:#6E0B22;color:#fff;box-shadow:0 0 0 2px #F4F3F0,0 8px 24px rgba(0,0,0,.4);white-space:nowrap;pointer-events:none;z-index:2}.q3 .q3-ctt b{font-size:18px;font-weight:600;letter-spacing:.2em;text-transform:uppercase}.q3-ctt span{font-size:11px;letter-spacing:.12em;text-transform:uppercase;opacity:.8}a.q3-ctt{pointer-events:auto;cursor:pointer;color:#fff!important;text-decoration:none!important}.q3-ctt em{font-style:normal;font-size:14px;opacity:.85;margin-left:-2px}a.q3-ctt:hover{background:#7d1029}.q3 a.q3-lcl{color:inherit;text-decoration:none}.q3-off{display:none;position:absolute;inset:0;flex-direction:column;align-items:center;justify-content:center;gap:12px;z-index:3;text-align:center}.q3-off span{font-size:12px;font-weight:600;letter-spacing:.24em;text-transform:uppercase;opacity:.75}.q3-reg.q3-dn .q3-off span{color:#111}.q3 .q3-off button{padding:10px 16px;border-radius:99px;background:#111;color:#fff;font-size:11px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;border:1px solid rgba(255,255,255,.3)}.q3-f-lp .q3-reg[data-s=dn]>:not(.q3-off),.q3-f-dn .q3-reg[data-s=lp]>:not(.q3-off){opacity:.1;pointer-events:none}.q3-f-lp .q3-reg[data-s=dn]>.q3-off,.q3-f-dn .q3-reg[data-s=lp]>.q3-off{display:flex}.q3-tools{position:absolute;z-index:31;top:14px;right:16px;display:flex;gap:8px;align-items:center}.q3-seg{display:flex;gap:2px;padding:4px;border-radius:99px;background:rgba(8,6,7,.84);border:1px solid rgba(255,255,255,.16)}.q3 .q3-seg button,.q3 .q3-lv{height:34px;padding:0 13px;border-radius:99px;font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#fff;white-space:nowrap;display:inline-flex;align-items:center;gap:8px}.q3 .q3-seg button{opacity:.75}.q3 .q3-seg button.q3-on{opacity:1;background:#fff;color:#111}.q3 .q3-seg button.q3-on[data-f=lp]{background:var(--qb);color:#fff}.q3 .q3-lv{height:44px;padding:0 16px;background:rgba(8,6,7,.84);border:1px solid rgba(255,255,255,.22)}.q3 .q3-lv[aria-pressed=true]{background:#fff;color:#111}.q3-g{width:12px;height:12px;background:linear-gradient(currentColor,currentColor) 0 0/5px 5px no-repeat,linear-gradient(currentColor,currentColor) 7px 0/5px 5px no-repeat,linear-gradient(currentColor,currentColor) 0 7px/5px 5px no-repeat,linear-gradient(currentColor,currentColor) 7px 7px/5px 5px no-repeat}.q3 em,.q3 u{font-style:normal;text-decoration:none}.q3-seg u{display:none}@media(max-width:1100px) and (min-width:750px){.q3 .q3-zbar button{padding:0 8px;letter-spacing:.04em;font-size:10px}.q3-seg em{display:none}.q3-seg u{display:inline}}@media(max-width:749px){.q3-tools{left:10px;right:10px;top:10px;justify-content:space-between}.q3-seg em{display:none}.q3-seg u{display:inline}.q3 .q3-seg button{height:36px;padding:0 14px}.q3 .q3-lv{height:44px}.q3-rlab small{font-size:17px}.q3 .q3-ctt b{font-size:30px}.q3-ctt span{font-size:16px}.q3-ctt{padding:12px 26px;gap:14px}.q3-off span{font-size:18px}.q3 .q3-off button{font-size:17px;padding:14px 22px}}.q3 [hidden]{display:none!important}.q3.q3-listing{height:auto!important;min-height:560px;overflow:visible}.q3-listing .q3-view,.q3-listing .q3-zones,.q3-listing .q3-hint{display:none}.q3-list{position:relative;padding:78px 28px 56px;max-width:1240px;margin:0 auto;color:#fff}.q3-lhd{display:flex;justify-content:space-between;align-items:flex-end;gap:16px;flex-wrap:wrap}.q3-lhd .q3-k{font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:#c9a5ae}.q3 .q3-lhd h2{font-size:32px;line-height:1.1;font-weight:600;margin-top:6px}.q3 .q3-back{padding:12px 18px;border-radius:99px;background:#fff;color:#111;font-size:11px;font-weight:600;letter-spacing:.16em;text-transform:uppercase}.q3-lsec{margin-top:36px}.q3 .q3-lsec h3{font-size:13px;font-weight:600;letter-spacing:.24em;text-transform:uppercase;color:#e7a9b6;padding-bottom:10px;border-bottom:1px solid rgba(255,255,255,.12)}.q3-lsec h3 small{margin-left:8px;color:#fff;opacity:.55;letter-spacing:.12em;font-size:11px}.q3-lgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:18px;margin-top:16px}.q3 .q3-lc{display:flex;flex-direction:column;gap:3px;color:#fff;min-width:0}.q3-lim{display:block;position:relative;width:100%;aspect-ratio:1/1;overflow:hidden;border-radius:14px;background:#F4F3F0;margin-bottom:8px;transition:box-shadow .2s}.q3 .q3-lim img{position:absolute;left:9%;top:9%;width:82%;height:82%;object-fit:contain}.q3-lc:hover .q3-lim,.q3-lc:focus-visible .q3-lim{box-shadow:0 0 0 3px var(--qb)}.q3-lsd{font-size:10px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#e7a9b6}.q3-lc.q3-dn .q3-lsd{color:#cfcac2}.q3 .q3-lc b{font-size:15px;line-height:1.25}.q3-lco{font-size:13px;opacity:.7}.q3-lpr{font-size:15px;font-weight:600}@media(max-width:749px){.q3-list{padding:70px 14px 40px}.q3 .q3-lhd h2{font-size:24px}.q3-lgrid{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.q3 .q3-lc b{font-size:14px}}.q3 .q3-lc.q3-card .q3-lim img{left:0;top:0;width:100%;height:100%;object-fit:cover}.q3-half.q3-r,.q3-reg.q3-dn{background:radial-gradient(ellipse 80% 70% at 50% 42%,#EEECE8 0,#E4E2DD 60%,#D9D6CF 100%)}.q3 .q3-it.q3-dn img,.q3 .q3-reg.q3-dn .q3-it img{filter:drop-shadow(0 0 1px rgba(0,0,0,.28)) drop-shadow(0 12px 14px rgba(0,0,0,.26))}.q3 .q3-it.q3-lp img{filter:drop-shadow(0 0 1px rgba(0,0,0,.35)) drop-shadow(0 16px 18px rgba(0,0,0,.45))}.q3-mir{background:radial-gradient(ellipse 80% 70% at 50% 40%,#E9E6E0 0,#DCD8D0 60%,#C9C3B9 100%)}.q3 .q3-fs img{filter:drop-shadow(0 0 1px rgba(0,0,0,.3)) drop-shadow(0 12px 14px rgba(0,0,0,.3))}.q3-lim{background:radial-gradient(ellipse 75% 70% at 50% 45%,#ECEAE6 0,#E4E2DD 60%,#D7D4CD 100%)}.q3 .q3-lim img{filter:drop-shadow(0 0 1px rgba(0,0,0,.25)) drop-shadow(0 8px 12px rgba(0,0,0,.22))}.q3 .q3-lc.q3-card .q3-lim img{filter:none;mix-blend-mode:multiply}.q3 .q3-lim{background:radial-gradient(120% 90% at 50% 38%,#4a4446 0%,#2c2729 48%,#1a1718 100%)}.q3 .q3-lim img{filter:drop-shadow(0 0 1px rgba(255,255,255,.22)) drop-shadow(0 10px 14px rgba(0,0,0,.55))}.q3,.q3-view{background:#24211f}.q3-mx .q3-face{background:#2c2927}.q3-flo.q3-mx{background:linear-gradient(#37332f,#282523)}.q3-cei{background:linear-gradient(0deg,#302d2b,#272422)}.q3-cei::after{background:repeating-linear-gradient(0deg,transparent 0 60px,rgba(255,250,245,.35) 60px 66px,transparent 66px 120px)}.q3-lp .q3-face,.q3-half.q3-l,.q3-reg.q3-lp{background:linear-gradient(180deg,#3d3936 0,#35312f 55%,#2f2c2a 100%);box-shadow:inset 0 3px 0 #a3203f}.q3-flo.q3-lp{background:linear-gradient(#3b3734,#2d2a28 70%,#272422)}.q3 .q3-lp .q3-sign img,.q3 .q3-mx .q3-sign img,.q3 .q3-mx .q3-sign img.q3-w,.q3 .q3-rlab.q3-lp img{filter:none}.q3-lp .q3-rail{background:linear-gradient(#8d8985,#5e5a57);box-shadow:none}.q3-lp .q3-shelf{background:linear-gradient(#4d4946,#3a3634);box-shadow:0 8px 14px rgba(0,0,0,.3)}.q3-lp .q3-cub{background:linear-gradient(#2a2725,#363230);box-shadow:inset 0 0 0 2px #45413e}.q3-counter .q3-l{background:linear-gradient(#45403d,#34302e 18%,#2a2725);border-top:6px solid #262321}.q3-tag.q3-lp{background:rgba(30,28,27,.9);border:1px solid rgba(244,243,240,.22)}.q3 .q3-it.q3-lp img{filter:drop-shadow(0 0 1px rgba(0,0,0,.3)) drop-shadow(0 14px 16px rgba(0,0,0,.35))}.q3-ctt{box-shadow:0 0 0 2px #F4F3F0}.q3 .q3-all.q3-lp{background:#6E0B22}.q3-hint{background:rgba(36,33,31,.92)!important;border-color:rgba(244,243,240,.18)!important}.q3-hint .q3-k{color:rgba(244,243,240,.7)}.q3 .q3-hint p{color:rgba(244,243,240,.8)}.q3 .q3-ctl,.q3-zbar,.q3-mz{background:rgba(36,33,31,.9)}.q3-allw{background:linear-gradient(180deg,#3d3936 0,#35312f 55%,#2f2c2a 100%)!important;box-shadow:inset 0 3px 0 #a3203f}.q3-sign img{display:block}.q3 a.q3-shopall{position:absolute;transform:translateX(-50%);white-space:nowrap;color:#F4F3F0!important;font-size:13px;font-weight:400;letter-spacing:.32em;text-transform:uppercase;padding:10px 4px 8px;border-bottom:1px solid rgba(244,243,240,.55);cursor:pointer}.q3 a.q3-shopall:hover{border-bottom-color:#F4F3F0}@media(max-width:749px){.q3 a.q3-shopall{font-size:21px}}.q3-tag{font-size:14px;padding:6px 11px}.q3-tag i{font-size:13px;opacity:.8}.q3-ctt span{font-size:14px;opacity:.92}.q3-rlab small{font-size:14px}.q3-rlab.q3-lp small,.q3-rlab.q3-dn small{opacity:.92}.q3-sign small{font-size:14px;opacity:.9}@media(max-width:749px){.q3-tag{font-size:30px;padding:10px 16px}.q3-tag i{font-size:28px}.q3-tag.q3-two{border-radius:22px}.q3-ctt span{font-size:30px}.q3 .q3-ctt b{font-size:34px}.q3-rlab small{font-size:28px}.q3-sign small{font-size:28px}}.q3 .q3-wint{background:linear-gradient(180deg,#e1e8f2 0,#D6DFEC 58%,#ccd6e5 100%)!important;box-shadow:inset 0 3px 0 #1B2236}.q3 .q3-wint::before{background:none}.q3-whd{position:absolute;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;color:#1B2236;pointer-events:none;text-align:center;white-space:nowrap}.q3-whd img{display:block;width:auto;margin-bottom:22px}.q3-whd small{font-size:13px;letter-spacing:.34em;text-transform:uppercase;font-weight:500;opacity:.78;margin-right:-.34em}.q3-whd b{font-size:28px;letter-spacing:.3em;text-transform:uppercase;font-weight:500;margin:10px -.3em 0 0;line-height:1.2}.q3-whd .q3-wrule{display:block;width:44px;height:1px;background:#1B2236;opacity:.45;margin:16px 0 14px}.q3-whd em{font-style:normal;font-size:14px;letter-spacing:.3em;text-transform:uppercase;font-weight:600;margin-right:-.3em}.q3-wfl{position:absolute;height:1px;background:rgba(27,34,54,.28)}.q3-pv{position:absolute;display:block;cursor:default}.q3-pv img{width:100%;height:100%;object-fit:contain;object-position:50% 100%;filter:drop-shadow(0 0 1px rgba(27,34,54,.25)) drop-shadow(0 12px 14px rgba(27,34,54,.22))}.q3-tag.q3-wt{background:#F4F3F0;color:#1B2236;border:1px solid rgba(27,34,54,.24);border-radius:2px!important;letter-spacing:.02em}.q3-tag.q3-wt i{opacity:.82;letter-spacing:.08em}.q3 .q3-wint a.q3-shopall{color:#1B2236!important;border-bottom-color:rgba(27,34,54,.5)}.q3 .q3-wint a.q3-shopall:hover{border-bottom-color:#1B2236}@media(max-width:749px){.q3-whd img{margin-bottom:18px}.q3-whd small{font-size:28px;letter-spacing:.26em;margin-right:-.26em}.q3-whd b{font-size:46px;letter-spacing:.2em;margin:10px -.2em 0 0}.q3-whd .q3-wrule{width:70px;height:2px;margin:14px 0 12px}.q3-whd em{font-size:30px;letter-spacing:.22em;margin-right:-.22em}.q3-wfl{height:2px}.q3 .q3-wint a.q3-shopall{font-size:28px;letter-spacing:.24em}}";
  var RM = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);

  /* categories (each gets its own wall, LP half | DN half); ids not in D (not public) are skipped */
  var CATS = [
    { k: 'tees', n: 'Tees', u: 'tees', ar: 1.05, fx: 'rail', ids: ['qs-lp-ts01-classic-tee-white', 'heavyweight-tee-black', 'embroidered-qs-tee-burgundy', 'maison-monogram-tee-black', 'maison-monogram-tee-white'] },
    { k: 'tops', n: 'Hoodies & Crews', u: 'hoodies-crews', ar: 1, fx: 'rail', ids: ['lockup-hoodie-black', 'wordmark-hoodie-white', 'seal-crew-burgundy', 'letterpress-crew-white', 'damask-lined-hoodie-black', 'embroidered-qs-hoodie-burgundy', 'scattered-monogram-hoodie-white', 'embroidered-qs-crew-black', 'damask-crew-burgundy'] },
    { k: 'joggers', n: 'Joggers', u: 'joggers', ar: 1.9, fx: 'rail', ids: ['wordmark-leg-joggers-black', 'hem-band-joggers-off-white', 'embroidered-qs-joggers-burgundy', 'maison-monogram-joggers-black'] },
    { k: 'hats', n: 'Hats', u: 'hats', ar: .9, fx: 'shelf', ids: ['wordmark-snapback-black', 'wordmark-cuff-beanie-black', 'qs-snapback-black', 'qs-snapback-burgundy', 'qs-cuff-beanie-burgundy'] },
    { k: 'bags', n: 'Bags & More', u: 'bags-more', ar: 1.05, fx: 'shelf', ids: ['qs-lp-bp04-backpack-black', 'qs-lp-bp05-backpack-white', 'wordmark-lattice-backpack-white', 'maison-monogram-backpack-black', 'damask-crossbody-burgundy', 'embroidered-qs-sherpa-black', 'engraved-crest-blanket-white'] }];
  /* Oct 17 2026: 11 products hidden in Fourthwall by Justin (off-white Postscript Tee, First Edition Crew, Masthead Crew, Cipher + Ribbon Joggers, white beanies,
     white Calling Card Backpack, Pressed Flower Backpack, Filigree Crossbody, Signet Sherpa) were removed from these lists. */
  CATS.forEach(function (c) { c.ids = c.ids.filter(function (id) { return D[id]; }); });
  function cat(k) { for (var i = 0; i < CATS.length; i++) if (CATS[i].k === k) return CATS[i]; }
  /* Oct 17 2026 ~17:00: back wall = Winter Atelier (Collection 002) preview. Pieces are HIDDEN in Fourthwall until launch, so they are
     NOT links and carry 'Nov 15' instead of a price; class q3-pv (not q3-it) keeps them out of QSStore360.count() and every wall count.
     REMINDER: after the Sun Nov 15 2026 launch swap the 'Nov 15' tags to prices + product links (or move the pieces onto category walls). */
  /* Oct 17 2026 ~17:10 (Justin: "Show these items", lookbook screenshots): 5 pieces. Tops/beanie = CONCEPT MOCKUPS (engine re-render of
     collections/winter-atelier/mock/<id>.jpg with its own alpha, no detail circle; work/winterwall/mockcut.py), NOT built Fourthwall products;
     joggers = the real hidden Fourthwall product (waistband-fixed cut). ar = tile w/h, k = height vs the tops (joggers longer, beanie smaller). */
  var WINTER = [{ id: 'winter-crest-back-tee-black', n: 'Winter Crest Back Tee', ar: 1000 / 970, k: 1 }, { id: 'winter-crest-crew-off-white', n: 'Winter Crest Crew', ar: 973 / 1000, k: 1 },
    { id: 'frost-lined-hood-black', n: 'Frost-Lined Hood', ar: 905 / 1000, k: 1 }, { id: 'maison-winter-joggers-black', n: 'Maison Winter Joggers', ar: 363 / 1000, k: 1.2 },
    { id: 'wordmark-cuff-beanie-navy', n: 'Wordmark Cuff Beanie', ar: 880 / 1000, k: .5 }];
  /* 7 walls, clockwise (positive = turn right): Front, Tees, Hoodies & Crews, Joggers, Shop all (plain back wall), Bags & More, Hats */
  var ORDER = [{ k: 'front', n: 'Front', s: 'mx' }, { k: 'tees', n: 'Tees', s: 'mx' }, { k: 'tops', n: 'Hoodies & Crews', s: 'mx' }, { k: 'joggers', n: 'Joggers', s: 'mx' },
    { k: 'all', n: 'Winter', s: 'mx' }, { k: 'bags', n: 'Bags & More', s: 'mx' }, { k: 'hats', n: 'Hats', s: 'mx' }];
  var NZ = ORDER.length, STEP = 360 / NZ, CULL = 90 - STEP / 2 - 2;
  var ZONES = ORDER.map(function (z, i) { z.a = ((i * STEP + 180) % 360) - 180; z.i = i; return z; });
  var BAR = ZONES.slice().sort(function (a, b) { return a.a - b.a; });   /* tab bar left -> right by angle */
  function P(id) { return D[id]; }
  function cut(id) { return (P(id).o ? OWN : IMG) + 'p/' + id + '.webp'; }
  function url(id) { return SHOP + (P(id).u || id) + '?from=360'; }   /* Oct 17 2026: every piece opens its product page; ?from=360 shows the PDP's back link */
  function money(id) { return '$' + P(id).p; }
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
      '<img data-src="' + cut(id) + '" alt="" decoding="async">' +
      '<span class="q3-tag q3-' + p.s + ' q3-two" style="max-width:' + Math.round(o.tw || Math.max(w + 30, M ? 170 : 130)) + 'px">' + '<span class="q3-nm">' + esc(p.n) + '</span><i>' + money(id) + '</i></span>', 'a');
    a.href = url(id); a.setAttribute('aria-label', p.n + ' ' + p.c + ', ' + money(id)); a.setAttribute('data-id', id); a.draggable = false;
    a.addEventListener('click', function (e) { e.stopPropagation(); goPdp(e, a); });
    face.appendChild(a); return a;
  }
  function sign(face, s, x, y, scale, short) {
    face.appendChild(div('q3-sign', { left: x, top: y }, s === 'lp'
      ? '<img data-src="' + LOGO.word + '" style="height:' + (M ? 20 : 26) * (scale || 1) + 'px" alt="QUALITY \u2022 STONER"><small>Loud &amp; Proud' + '</small>'
      : '<img data-src="' + LOGO.mkK + '" style="height:' + (M ? 74 : 92) * (scale || 1) + 'px" alt="QS"><small>Discreet &amp; Neat' + '</small>'));
  }
  function allPill(face, s, x, y, short) {
    var a = div('q3-all q3-' + s, { left: x, top: y }, short ? 'Shop all &#8594;' : s === 'lp' ? 'Shop all Loud &amp; Proud &#8594;' : 'Shop all Discreet &amp; Neat &#8594;', 'a');
    a.href = 'https://qualitystoner.com/collections/' + (s === 'lp' ? 'loud-proud' : 'discreet-neat'); a.draggable = false;
    a.addEventListener('click', function (e) { if (moved) e.preventDefault(); });
    face.appendChild(a);
  }
  /* one half of a split wall: LP (black/burgundy) on the left, DN (off-white) on the right; children use half-local x */
  function half(f, s) { var h = div('q3-half q3-reg ' + (s === 'lp' ? 'q3-l q3-lp' : 'q3-r q3-dn')); h.setAttribute('data-s', s); f.appendChild(h); return h; }
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
    reg.appendChild(lab);
    if (!ids.length) return 0;
    var top = M ? 92 : 176, ah = rc.h - top - (M ? 14 : 96), aw = rc.w - (M ? 30 : 50);
    var tag = M ? 150 : 68, g = grid(ids.length, aw, ah, c.ar, M ? 230 : 200, tag + (c.fx === 'rail' ? 34 : 6)), w = g.w, h = w * c.ar;
    for (var row = 0; row < g.r; row++) {
      var rowIds = ids.slice(row * g.c, row * g.c + g.c), k = rowIds.length;
      var x0 = (rc.w - k * g.cw) / 2, cellTop = top + row * g.ch, iy = cellTop + (c.fx === 'rail' ? 26 : 0) + Math.max(0, (g.ch - tag - (c.fx === 'rail' ? 34 : 6) - h) / 2);
      var xs = rowIds.map(function (id, i) { return x0 + (i + .5) * g.cw; });
      if (c.fx === 'rail') {
        bar(reg, 'q3-rail', xs[0] - w / 2 - 12, xs[k - 1] + w / 2 + 12, iy - 22);
        xs.forEach(function (x) { reg.appendChild(div('q3-hang', { left: x, top: iy - 16, height: 16 })); });
      } else bar(reg, 'q3-shelf', xs[0] - w / 2 - 22, xs[k - 1] + w / 2 + 22, iy + h);
      rowIds.forEach(function (id, i) { put(reg, id, xs[i], iy, w, h, { tw: g.cw - (M ? 6 : 10) }); });   /* phone: 6 css px gap between neighbouring tags */
    }
    return reg.querySelectorAll('.q3-it').length;
  }
  function catWall(f, c) {
    var rs = M ? [{ x: 0, y: 128, w: W, h: 468 }, { x: 0, y: 604, w: W, h: 468 }] : [{ x: 0, y: 0, w: W / 2, h: H }, { x: W / 2, y: 0, w: W / 2, h: H }];
    var nShown = region(f, c, 'lp', rs[0]) + region(f, c, 'dn', rs[1]);
    /* Oct 17 2026 ~16:10 (Justin): the count is the category's TOTAL public products on Fourthwall (CNT, from the collection at build
       time), not the pieces hanging here; falls back to the placed count only if the build had no number for this collection */
    var nAll = typeof CNT[c.u] === 'number' ? CNT[c.u] : nShown;
    /* Oct 17 2026: the wall header opens the category's collection page (all five return 200) */
    var hd = div('q3-ctt', { left: W / 2, top: M ? 46 : 22 }, '<b>' + esc(c.n) + '</b><span>' + nAll + (nAll === 1 ? ' piece' : ' pieces') + '</span>' + (c.u ? '<em>&#8594;</em>' : ''), c.u ? 'a' : 'div');
    if (c.u) { hd.href = 'https://qualitystoner.com/collections/' + c.u + '?from=360'; hd.draggable = false; hd.setAttribute('aria-label', 'Shop all ' + c.n);
      hd.addEventListener('click', function (e) { e.stopPropagation(); goPdp(e, hd); }); }
    f.appendChild(hd);
  }
  /* Oct 17 2026 ~16:10 (Justin, iPhone): names must fit INSIDE their tag. Measured in the DOM (walls culled with visibility:hidden still
     lay out): one font size per wall = the largest from F0 down to FMIN at which no name has a word wider than its tag (break only
     at spaces) and no name needs more than 2 lines; then every tag on one rail/shelf row gets the same width + height, so they line up.
     FMIN: phone 26.5 css px (~11.7 px rendered at the phone wall scale ~0.44), desktop 13. Re-run when web fonts finish loading. */
  function fitTags(face) {
    var tags = qa('.q3-tag.q3-two', face); if (!tags.length || !root.offsetWidth) return;
    var WT = face.classList.contains('q3-wint');   /* winter preview wall: phone floor 28 css px (~12.3 px rendered) */
    var F0 = M ? 30 : 14, FMIN = M ? (WT ? 28 : 26.5) : 13, PR = M ? 28 / 30 : 13 / 14, LH = 1.3, SLK = M ? 0 : 4;
    var info = tags.map(function (t) { return { t: t, nm: t.querySelector('.q3-nm'), pr: t.querySelector('i'), mx: parseFloat(t.getAttribute('data-mx')) || parseFloat(t.style.maxWidth) || 150 }; });
    function set(f) {
      info.forEach(function (o) {
        o.t.setAttribute('data-mx', o.mx);
        px(o.t, { fontSize: f, width: 'max-content', maxWidth: o.mx - SLK, height: 'auto', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', whiteSpace: 'normal', letterSpacing: M ? '0' : '', paddingLeft: M ? '8px' : '', paddingRight: M ? '8px' : '', overflowWrap: 'normal', wordBreak: 'normal', hyphens: 'manual', lineHeight: String(LH) });
        if (o.nm) px(o.nm, { display: 'block', maxWidth: '100%' });
        if (o.pr) px(o.pr, { fontSize: Math.max(FMIN, +(f * PR).toFixed(1)), lineHeight: String(LH) });   /* price never below the name minimum */
      });
    }
    function fits(f) {
      return info.every(function (o) { if (!o.nm) return true; return o.nm.scrollWidth <= o.nm.clientWidth + .5 && o.t.scrollWidth <= o.t.clientWidth + .5 && Math.round(o.nm.offsetHeight / (f * LH)) <= 2; });
    }
    var f = F0; for (; f > FMIN; f -= .5) { set(f); if (fits(f)) break; }
    if (f <= FMIN) { f = FMIN; set(f); }
    var rows = [];
    info.forEach(function (o) {
      var p = o.t.parentNode.parentNode, it = o.t.parentNode, top = WT ? 0 : Math.round(parseFloat(it.style.top) + parseFloat(it.style.height)), r = null;   /* winter: one group, all tags even */   /* row = same parent + same item bottom (shelf line) */
      for (var i = 0; i < rows.length; i++) if (rows[i].p === p && rows[i].top === top) r = rows[i];
      if (!r) rows.push(r = { p: p, top: top, l: [] }); r.l.push(o);
    });
    rows.forEach(function (r) {
      var w = 0, h = 0, mx = 1e9;
      r.l.forEach(function (o) { w = Math.max(w, o.t.offsetWidth); h = Math.max(h, o.t.offsetHeight); mx = Math.min(mx, o.mx - SLK); });
      w = Math.min(mx, Math.ceil(w) + 2);
      r.l.forEach(function (o) { px(o.t, { width: w, height: Math.ceil(h) }); });
    });
  }
  function refit() { if (cam) qa('.q3-face', cam).forEach(fitTags); }
  var BUILD = {
    front: function (f) { frontHalf(f, 'lp'); frontHalf(f, 'dn'); },
    tees: function (f) { catWall(f, cat('tees')); }, tops: function (f) { catWall(f, cat('tops')); }, joggers: function (f) { catWall(f, cat('joggers')); },
    hats: function (f) { catWall(f, cat('hats')); }, bags: function (f) { catWall(f, cat('bags')); },
    all: function (f) { winterWall(f); }
  };

  /* ===== back wall (Oct 17 2026 ~17:00, Justin approved): Winter Atelier / Collection 002 preview. Ice wall, blue-S QS mark (master cut,
     black Q + #0F347C S/dot), five preview pieces (Oct 17 ~17:10: 4 concept mockups + the joggers) with 'Nov 15' tags (no links), one quiet 'Shop all' link. No count. ===== */
  function winterWall(f) {
    f.classList.add('q3-wint');
    var c = W / 2;
    f.appendChild(div('q3-whd', { left: c, top: M ? 34 : 44 },
      '<img data-src="' + OWN + 'w/qs-bluemark-k.webp" style="height:' + (M ? 70 : 56) + 'px" alt="QS">' +
      '<small>Collection 002</small><b>Winter Atelier</b><span class="q3-wrule"></span><em>Drops Nov 15</em>'));
    /* desktop: one row of 5 on one floor line; phone: tops (3) on row 1, joggers + beanie on row 2. Bottoms aligned per row (tags line up). */
    var rows = M ? [[0, 1, 2], [3, 4]] : [[0, 1, 2, 3, 4]], cw = M ? 236 : 230, hT = M ? 178 : 218, floors = M ? [482, 852] : [550];
    var reg = div('q3-reg q3-wreg', { left: 0, top: 0, width: W, height: H }); f.appendChild(reg);
    rows.forEach(function (row, r) {
      var x0 = c - cw * row.length / 2, fl = floors[r];
      reg.appendChild(div('q3-wfl', { left: x0 + 8, top: fl, width: cw * row.length - 16 }));
      row.forEach(function (n, i) {
        var p = WINTER[n], x = x0 + (i + .5) * cw, h = Math.round(hT * p.k), w = Math.round(h * p.ar);
        var e = div('q3-pv', { left: x - w / 2, top: fl - h, width: w, height: h },
          '<img data-src="' + OWN + 'w/' + p.id + '.webp" alt="' + esc(p.n) + '" decoding="async">' +
          '<span class="q3-tag q3-wt q3-two" style="max-width:' + (cw - (M ? 6 : 10)) + 'px"><span class="q3-nm">' + esc(p.n) + '</span><i>Nov 15</i></span>');
        e.setAttribute('data-wid', p.id); e.setAttribute('aria-label', p.n + ', drops November 15'); reg.appendChild(e);
      });
    });
    var a = div('q3-shopall', { left: c, top: M ? 1012 : 676 }, 'Shop all &nbsp;&#8594;', 'a');
    a.href = 'https://qualitystoner.com/collections/all?from=360'; a.draggable = false; a.setAttribute('aria-label', 'Shop all');
    a.addEventListener('click', function (e) { e.stopPropagation(); goPdp(e, a); });
    f.appendChild(a);
  }

  /* ===== mount ===== */
  function mount() {
    if (!document.getElementById('q3-css')) { var st = document.createElement('style'); st.id = 'q3-css'; st.textContent = CSS; document.head.appendChild(st); }
    host = document.getElementById('qs-store') || document.querySelector('[data-qs-store]');
    if (!host) { host = document.createElement('div'); host.id = 'qs-store'; if (me && me.parentNode) me.parentNode.insertBefore(host, me); else document.body.appendChild(host); }
    host.classList.add('q3-host');
    /* Oct 17 2026: hide the 360 overlays while a theme drawer (mobile menu / cart) is open; the host is also z-index 0 below the header (10) and drawers (11) */
    (function () { try {
      var dr = function () { var on = !!document.querySelector('aside.drawer.visible'); document.documentElement.classList.toggle('q3-dr', on); };
      var mo = new MutationObserver(dr); document.querySelectorAll('aside.drawer').forEach(function (d) { mo.observe(d, { attributes: true, attributeFilter: ['class'] }); });
      dr();
    } catch (e) {} })();
    var ds = host.getAttribute('data-ds');
    root = div('q3' + (RM ? ' q3-rm' : '') + (ds ? ' q3-ds q3-ds-' + ds : ''), {}, '<div class="q3-view" tabindex="0" aria-label="The Quality Stoner shop. Drag or swipe to look around."><div class="q3-cam"></div></div>' +
      '<div class="q3-hint"><div class="q3-k">Quality Stoner &middot; Inside</div><h2>Look around the shop.</h2><p>Every wall is one category: tees, hoodies &amp; crews, joggers, hats, bags. Loud &amp; Proud on one side, Discreet &amp; Neat on the other. Tap any piece to open it.</p><div class="q3-how"><span>Drag / swipe to look</span><span>Tap a piece</span></div></div>' +
      '<div class="q3-zones"><button type="button" class="q3-ctl q3-prev" aria-label="Turn left">&#8249;</button><div class="q3-zbar"></div><div class="q3-mz" aria-live="polite"><b></b><span></span></div><button type="button" class="q3-ctl q3-next" aria-label="Turn right">&#8250;</button></div>' +
      '');
    host.innerHTML = ''; host.appendChild(root);
    view = q('.q3-view'); cam = q('.q3-cam');
    q('.q3-zbar').innerHTML = BAR.map(function (z) { return '<button type="button" data-k="' + z.k + '">' + esc(z.n) + '</button>'; }).join('');
    q('.q3-mz span').innerHTML = ZONES.map(function (z) { return '<i data-k="' + z.k + '"></i>'; }).join('');
    qa('.q3-zbar button').forEach(function (b) { b.addEventListener('click', function () { goK(b.getAttribute('data-k')); }); });
    q('.q3-prev').addEventListener('click', function () { goTo(near().a - STEP); });
    q('.q3-next').addEventListener('click', function () { goTo(near().a + STEP); });
    view.addEventListener('keydown', function (e) { if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(near().a - STEP); } if (e.key === 'ArrowRight') { e.preventDefault(); goTo(near().a + STEP); } });
    drag();
    fit(); build();
    var lw = innerWidth;
    addEventListener('resize', function () { if (innerWidth !== lw) { lw = innerWidth; fit(); build(); } else { bleed(); persp(); } });
    addEventListener('orientationchange', function () { setTimeout(function () { fit(); build(); }, 300); });
    setTimeout(hint, 7000);
    restore();
    /* back/forward cache: a restored page keeps its own state; nothing to do */
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
    BH = Hh; root.style.height = Hh + 'px';
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
      var face = div('q3-face'); w.appendChild(face); BUILD[z.k](face); fitTags(face);
      var fl = div('q3-flo q3-' + z.s, { left: -W / 2, top: H / 2, width: W, height: fh }); fl.style.transformOrigin = ox + (-H / 2) + 'px';
      var ce = div('q3-cei q3-' + z.s, { left: -W / 2, top: -H / 2 - fh, width: W, height: fh }); ce.style.transformOrigin = ox + (H / 2 + fh) + 'px';
      cam.appendChild(fl); cam.appendChild(ce); cam.appendChild(w);
      walls[z.k] = { el: w, fl: fl, ce: ce, loaded: false, z: z, vis: true };
    });
    lastZ = null; persp();
    /* re-fit once the page's web font has loaded (canvas measured the fallback before) */
    if (document.fonts) { if (document.fonts.ready) document.fonts.ready.then(refit); if (document.fonts.addEventListener) document.fonts.addEventListener('loadingdone', refit); }
    setTimeout(refit, 1500); setTimeout(refit, 4000);
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

  /* ===== Oct 17 2026: tapping a piece goes straight to its product page (no quick view). The wall is remembered (sessionStorage q3-ret + this page's URL hash, replaceState) so the PDP's
     "Back to the 360 room" link and the browser Back button land on the same wall. ===== */
  function retState() {
    return { w: near().k };
  }
  function retHash(st) { return '#w=' + st.w; }
  function remember(href) {
    try { var st = retState(); st.at = Date.now(); if (href) st.p = href.replace(/^https?:\/\/[^\/]+/, '').split('?')[0];
      sessionStorage.setItem('q3-ret', JSON.stringify(st)); history.replaceState(history.state, '', location.pathname + location.search + retHash(st)); } catch (e) {}
  }
  function goPdp(e, a) {
    if (moved) { e.preventDefault(); return; }
    var href = a.getAttribute('href'); if (!href) return; remember(href);
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;   /* new tab / window: let the browser do it */
    /* the wall also rides in the URL (w) so the back link works even where sessionStorage does not carry over */
    e.preventDefault(); location.href = href + (href.indexOf('?') > -1 ? '&' : '?') + retHash(retState()).slice(1);
  }
  function restore() {
    var m = {}, h = location.hash.replace(/^#/, '');
    h.split('&').forEach(function (kv) { var p = kv.split('='); if (p[0]) m[p[0]] = decodeURIComponent(p[1] || ''); });
    if (!m.w) { try { var st = JSON.parse(sessionStorage.getItem('q3-ret') || 'null'); if (st && st.w && /\/products\//.test(document.referrer)) m = st; } catch (e) {} }
    if (m.w === 'fit') m.w = 'all';   /* old links into the retired dressing room land on the back wall */
    var z = m.w && zone(m.w); if (!z) return;
    anim = null; yaw = z.a; apply(1); hint();
  }
  window.QSStore360 = { turn: function (a) { anim = null; yaw = a; apply(1); }, go: goK, hint: hint, zones: function () { return ZONES.map(function (z) { return [z.k, z.a]; }); },
    yaw: function () { return yaw; }, busy: function () { return !!anim || dragging; },
    count: function () { var s = {}; qa('.q3-it').forEach(function (a) { s[a.getAttribute('data-id')] = 1; }); return Object.keys(s).length; } };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount); else mount();
})();
