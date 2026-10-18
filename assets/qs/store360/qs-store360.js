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
  var CNT = {"tees": 5, "hoodies-crews": 9, "joggers": 4, "hats": 5, "bags-more": 7, "loud-proud": 13, "discreet-neat": 17};
  /* Oct 18 2026: trimmed garment box per tile [x0,y0,x1,y1 as fractions, image w/h] (build time) -> pieces are sized by the garment */
  var TRIM = {"damask-crew-burgundy":[0.0037,0.003,0.9963,0.997,0.814],"damask-crossbody-burgundy":[0.004,0.0067,0.997,0.9933,1.6779],"embroidered-qs-crew-black":[0.004,0.0042,0.996,0.9958,1.0582],"embroidered-qs-hoodie-burgundy":[0.0033,0.003,0.9956,0.996,0.911],"embroidered-qs-joggers-burgundy":[0.0058,0.003,0.9942,0.997,0.516],"embroidered-qs-tee-burgundy":[0.0042,0.003,0.9958,0.997,0.948],"lockup-hoodie-black":[0.004,0.0041,0.996,0.9959,1.0225],"maison-monogram-backpack-black":[0.0038,0.003,0.9962,0.996,0.786],"maison-monogram-tee-black":[0.003,0.0035,0.997,0.9965,1.1547],"maison-monogram-tee-white":[0.003,0.0035,0.997,0.9965,1.1547],"qs-cuff-beanie-burgundy":[0.0049,0.005,0.9939,0.996,0.824],"qs-lp-bp04-backpack-black":[0.0036,0.003,0.9964,0.996,0.826],"qs-lp-bp05-backpack-white":[0.0037,0.003,0.9963,0.996,0.819],"qs-snapback-black":[0.005,0.0056,0.995,0.9944,1.1148],"qs-snapback-burgundy":[0.005,0.0056,0.995,0.9944,1.1148],"scattered-monogram-hoodie-white":[0.0039,0.003,0.9961,0.997,0.774],"seal-crew-burgundy":[0.0037,0.003,0.9963,0.997,0.814],"wordmark-cuff-beanie-black":[0.0044,0.003,0.9956,0.997,0.677],"wordmark-hoodie-white":[0.0041,0.004,0.9959,0.996,0.98],"wordmark-leg-joggers-black":[0.0058,0.003,0.9942,0.997,0.516],"wordmark-snapback-black":[0.005,0.0056,0.995,0.9944,1.1148],"qs-lp-ts01-classic-tee-white":[0.004,0.004,0.996,0.996,0.999],"letterpress-crew-white":[0.0038,0.004,0.9962,0.997,0.798],"hem-band-joggers-off-white":[0.0138,0.005,0.9862,0.995,0.363],"maison-monogram-joggers-black":[0.0138,0.005,0.9862,0.995,0.363],"heavyweight-tee-black":[0.0044,0.003,0.9956,0.997,0.906],"damask-lined-hoodie-black":[0.0039,0.003,0.9961,0.997,0.774],"wordmark-lattice-backpack-white":[0.0037,0.003,0.9963,0.996,0.819],"qs-cuff-beanie-white":[0.0036,0.0036,0.9964,0.9964,0.9911],"embroidered-qs-sherpa-black":[0.003,0.0036,0.997,0.9964,1.1962],"engraved-crest-blanket-white":[0.004,0.0036,0.997,0.9964,1.2063]};
  var SHOP = 'https://qualitystoner.com/products/';
  var LOGO = { word: IMG + 'word-white.webp', mk: IMG + 'qs-mono-white.webp', mkK: IMG + 'qs-mono-black.webp' };
  var CSS = ".q3-host{display:block;position:relative;z-index:0;isolation:isolate;max-width:none!important;padding:0!important;overflow:visible}html.q3-dr .q3-tools,html.q3-dr .q3-hint,html.q3-dr .q3-zones,body:has(aside.drawer.visible) .q3-tools,body:has(aside.drawer.visible) .q3-hint,body:has(aside.drawer.visible) .q3-zones{visibility:hidden!important}.q3,.q3-cu{--qb:#6E0B22;--qow:#F4F3F0;--qg:#a3203f;--qr:#e7a9b6;font-family:inherit;-webkit-font-smoothing:antialiased;line-height:1.2;text-align:left;letter-spacing:normal;text-transform:none}.q3 *,.q3-cu *{box-sizing:border-box;margin:0;padding:0;font-family:inherit}.q3 a,.q3-cu a{color:inherit;text-decoration:none!important;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}.q3 button,.q3-cu button{font:inherit;color:inherit;background:none;border:0;cursor:pointer;-webkit-tap-highlight-color:transparent;-webkit-appearance:none;appearance:none;min-height:0;min-width:0;box-shadow:none;text-transform:none;letter-spacing:normal;line-height:1.2;border-radius:0}.q3 img,.q3-cu img{display:block;max-width:none;height:auto;-webkit-user-drag:none;user-select:none;-webkit-user-select:none;border:0}.q3 b,.q3-cu b,.q3 strong,.q3-cu strong{color:inherit!important;font-weight:600}.q3 i,.q3-cu i,.q3 small,.q3 span{color:inherit}.q3 h2,.q3-cu h2,.q3 p{font-family:inherit;color:inherit;letter-spacing:normal;text-transform:none}.q3{position:relative;width:100%;height:760px;overflow:hidden;background:#060506;color:#fff;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none}.q3-view{position:absolute;inset:0;overflow:hidden;background:#060506;touch-action:pan-y;cursor:grab;outline:none}.q3-view:active{cursor:grabbing}.q3-cam{position:absolute;left:50%;top:50%;width:0;height:0;perspective-origin:0 0}.q3-wall{position:absolute}.q3-face{position:absolute;inset:0;overflow:hidden}.q3-flo,.q3-cei{position:absolute;clip-path:polygon(0 0,100% 0,70% 100%,30% 100%);-webkit-clip-path:polygon(0 0,100% 0,70% 100%,30% 100%)}.q3-cei{clip-path:polygon(30% 0,70% 0,100% 100%,0 100%);-webkit-clip-path:polygon(30% 0,70% 0,100% 100%,0 100%);background:linear-gradient(0deg,#151213,#0a0909)}.q3-cei::after{content:\"\";position:absolute;left:47%;width:6%;top:0;bottom:0;background:repeating-linear-gradient(0deg,transparent 0 60px,rgba(255,240,240,.55) 60px 66px,transparent 66px 120px)}.q3-lp .q3-face{background:linear-gradient(180deg,#1a0d11 0,#0d0809 55%,#090607 100%);box-shadow:inset 0 3px 0 #a3203f,inset 0 40px 60px -30px rgba(163,32,63,.75)}.q3-lp .q3-face::before,.q3-dn .q3-face::before{content:\"\";position:absolute;inset:0;background:repeating-linear-gradient(90deg,rgba(255,255,255,.035) 0 1px,transparent 1px 150px);pointer-events:none}.q3-flo.q3-lp{background:linear-gradient(#2a0c14,#120709 70%,#0b0708)}.q3-dn .q3-face{background:linear-gradient(180deg,#fbfaf8,#F4F3F0 60%,#e8e6e1);box-shadow:inset 0 -50px 70px -40px rgba(0,0,0,.18)}.q3-dn .q3-face::before{background:repeating-linear-gradient(90deg,rgba(0,0,0,.04) 0 1px,transparent 1px 150px)}.q3-flo.q3-dn{background:linear-gradient(#d9d6d0,#bdb9b2 70%,#a9a59e)}.q3-mx .q3-face{background:#0b0a0a}.q3-flo.q3-mx{background:linear-gradient(#24201f,#121011)}.q3-sign{position:absolute;display:flex;flex-direction:column;align-items:center;gap:12px;transform:translateX(-50%);pointer-events:none}.q3 .q3-sign img{width:auto}.q3-sign small{font-size:13px;font-weight:600;letter-spacing:.3em;text-transform:uppercase;opacity:.8;white-space:nowrap}.q3 .q3-lp .q3-sign img,.q3 .q3-mx .q3-sign img.q3-w{filter:drop-shadow(0 0 2px #fff) drop-shadow(0 0 10px #a3203f) drop-shadow(0 0 26px #a3203f)}.q3-dn .q3-sign small{color:#111}.q3-rail{position:absolute;height:6px;border-radius:3px}.q3-lp .q3-rail{background:linear-gradient(#6b6b6b,#2b2b2b);box-shadow:0 0 12px rgba(163,32,63,.6)}.q3-dn .q3-rail{background:#141414}.q3-shelf{position:absolute;height:12px;border-radius:2px}.q3-lp .q3-shelf{background:linear-gradient(#3a0b16,#1c0509);box-shadow:0 8px 18px rgba(0,0,0,.6),0 -1px 0 #a3203f}.q3-dn .q3-shelf{background:linear-gradient(#e2d9cb,#c9bda9);box-shadow:0 10px 16px rgba(0,0,0,.15)}.q3-hang{position:absolute;width:1.5px}.q3-lp .q3-hang{background:rgba(255,255,255,.35)}.q3-dn .q3-hang{background:rgba(0,0,0,.45)}.q3-cub{position:absolute;border-radius:6px}.q3-lp .q3-cub{background:linear-gradient(#050304,#1a0b0f);box-shadow:inset 0 0 0 2px #3a0b16,inset 0 18px 30px rgba(163,32,63,.35)}.q3-dn .q3-cub{background:linear-gradient(#e9e7e2,#fff);box-shadow:inset 0 0 0 2px #d8d5cf,inset 0 14px 22px rgba(0,0,0,.08)}.q3-hl{position:absolute;font-size:12px;font-weight:600;letter-spacing:.3em;text-transform:uppercase;transform:translateX(-50%);white-space:nowrap;pointer-events:none}.q3-half{position:absolute;top:0;bottom:0;width:50%}.q3-half.q3-l{left:0;background:linear-gradient(180deg,#1a0d11,#0a0708);box-shadow:inset 0 3px 0 #a3203f,inset 0 40px 60px -30px rgba(163,32,63,.75)}.q3-half.q3-r{right:0;background:linear-gradient(180deg,#fbfaf8,#ebe9e4)}.q3-counter{position:absolute;left:0;right:0;bottom:0}.q3-counter .q3-l,.q3-counter .q3-r{position:absolute;top:0;bottom:0;width:50%}.q3-counter .q3-l{left:0;background:linear-gradient(#5a0a1c,#3b0612 18%,#20040a);border-top:6px solid #120a0c}.q3-counter .q3-r{right:0;background:linear-gradient(#ffffff,#e4e1db);border-top:6px solid #cfcac2}.q3-win{position:absolute;background:#141112 50% 60%/cover;border:14px solid #141112;box-shadow:inset 0 0 60px rgba(0,0,0,.6)}.q3-door{position:absolute;border:12px solid #141112;background:#141112 70% 60%/cover}.q3-door::before{content:\"\";position:absolute;inset:0;background:linear-gradient(160deg,rgba(80,90,130,.35),rgba(10,10,20,.8))}.q3-door::after{content:\"\";position:absolute;right:16px;top:48%;width:8px;height:80px;border-radius:4px;background:#888}.q3-exit{position:absolute;transform:translateX(-50%);font-size:12px;font-weight:600;letter-spacing:.3em;color:#e7a9b6;text-transform:uppercase;white-space:nowrap;pointer-events:none}.q3-locked{position:absolute;right:30px;bottom:26px;width:230px;height:200px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center;border:1.5px dashed rgba(255,255,255,.35);border-radius:14px;background:rgba(8,6,7,.86);color:#fff}.q3-locked .q3-lk{width:30px;height:30px;border-radius:50%;display:grid;place-items:center;border:1.5px solid currentColor;font-size:14px}.q3-locked b{font-size:11px;letter-spacing:.24em;text-transform:uppercase}.q3-locked span{font-size:12px;opacity:.75}.q3 .q3-all{position:absolute;transform:translateX(-50%);display:inline-flex;align-items:center;border-radius:99px;padding:12px 18px;font-size:11px;font-weight:600;letter-spacing:.2em;text-transform:uppercase;white-space:nowrap}.q3 .q3-all.q3-lp{background:var(--qb);color:#fff}.q3 .q3-all.q3-dn{background:#111;color:#fff}.q3-it{position:absolute;display:block;cursor:pointer}.q3 .q3-it img{width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 16px 18px rgba(0,0,0,.45))}.q3 .q3-it.q3-dn img{filter:drop-shadow(0 14px 14px rgba(0,0,0,.2))}.q3-tag{position:absolute;left:50%;top:calc(100% + 8px);transform:translateX(-50%);white-space:nowrap;font-size:11px;font-weight:600;letter-spacing:.02em;padding:5px 9px;border-radius:99px;pointer-events:none;line-height:1.2}.q3-tag.q3-lp{background:rgba(10,6,7,.88);color:#fff;border:1px solid rgba(194,70,95,.7)}.q3-tag.q3-dn{background:#fff;color:#111;border:1px solid #d5d4d0}.q3-tag i{font-style:normal;opacity:.7;margin-left:6px}.q3-tag.q3-two{white-space:normal;width:max-content;max-width:150px;text-align:center;border-radius:10px;line-height:1.3}.q3-tag.q3-two i{display:block;margin:0}.q3-hint{position:absolute;z-index:20;left:50%;bottom:92px;transform:translateX(-50%);width:640px;max-width:calc(100% - 28px);display:grid;grid-template-columns:1fr auto;column-gap:18px;align-items:end;padding:14px 18px;border-radius:16px;background:rgba(0,0,0,.82);border:1px solid rgba(255,255,255,.1);border-top:2px solid var(--qb);transition:opacity .4s;pointer-events:none}.q3-hint .q3-k{font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:#c9a5ae}.q3 .q3-hint h2{font-size:24px;line-height:1.1;font-weight:600;margin-top:6px}.q3 .q3-hint p{font-size:13.5px;line-height:1.45;color:#d9d3d5;margin-top:4px}.q3-how{grid-column:2;grid-row:1/4;display:flex;flex-direction:column;gap:8px}.q3-how span{font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;padding:7px 10px;border-radius:99px;border:1px solid rgba(255,255,255,.35);white-space:nowrap}.q3-hint.q3-gone{opacity:0}.q3-zones{position:absolute;left:50%;bottom:22px;transform:translateX(-50%);z-index:30;display:flex;align-items:center;gap:10px}.q3 .q3-ctl{width:48px;height:48px;border-radius:50%;display:grid;place-items:center;background:rgba(10,8,9,.78);border:1px solid rgba(255,255,255,.22);font-size:22px;font-weight:600;color:#fff}.q3-zbar{display:flex;gap:4px;padding:5px;border-radius:99px;background:rgba(8,6,7,.82);border:1px solid rgba(255,255,255,.16)}.q3 .q3-zbar button{height:38px;padding:0 14px;border-radius:99px;font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;opacity:.7;white-space:nowrap;color:#fff}.q3 .q3-zbar button.q3-on{opacity:1;background:#fff;color:#111}.q3 .q3-zbar button.q3-on.q3-l{background:var(--qb);color:#fff}.q3-mz{display:none}@media(max-width:1100px) and (min-width:750px){.q3 .q3-zbar button{padding:0 10px;letter-spacing:.08em}}@media(max-width:749px){.q3-zbar{display:none}.q3-mz{display:flex;flex-direction:column;align-items:center;gap:6px;min-width:150px;padding:8px 14px;border-radius:18px;background:rgba(8,6,7,.84);border:1px solid rgba(255,255,255,.16)}.q3-mz b{white-space:nowrap;font-size:11px;font-weight:600;letter-spacing:.16em;text-transform:uppercase}.q3-mz span{display:flex;gap:6px}.q3-mz i{width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.35)}.q3-mz i.q3-on{background:#fff}.q3-zones{bottom:18px;gap:14px}.q3 .q3-ctl{width:54px;height:54px}.q3-tag{font-size:18px;padding:7px 12px}.q3-tag.q3-two{border-radius:14px}.q3-sign small{font-size:20px}.q3-hl{font-size:20px}.q3 .q3-all{font-size:17px;padding:14px 22px}.q3-hint{left:12px;right:12px;bottom:92px;width:auto;max-width:none;transform:none;display:block;padding:12px 14px}.q3-how{display:none}.q3 .q3-hint h2{font-size:20px}.q3 .q3-hint p{font-size:13px}}.q3 .q3-fitw{background:radial-gradient(ellipse at 50% 0,#2a1a1c 0,#120c0d 55%,#0a0708 100%)}.q3-curt{position:absolute;top:0;bottom:0;background:repeating-linear-gradient(90deg,#4a0716 0 18px,#6E0B22 18px 30px,#3a0512 30px 44px);box-shadow:inset 0 0 40px rgba(0,0,0,.6)}.q3-curt.q3-l{border-radius:0 0 60px 0}.q3-curt.q3-r{border-radius:0 0 0 60px}.q3-mir{position:absolute;border-radius:200px 200px 18px 18px;background:linear-gradient(180deg,#efebe5,#d6d0c7 70%,#c7c0b6);border:10px solid #F4F3F0;box-shadow:0 0 0 2px #6E0B22,0 0 40px rgba(244,243,240,.18),inset 0 0 60px rgba(0,0,0,.18)}.q3-fs{position:absolute;display:block;cursor:pointer}.q3 .q3-fs img{width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 12px 14px rgba(0,0,0,.28))}.q3 .q3-fs img.q3-out{opacity:0}.q3 .q3-sw{position:absolute;width:56px;height:56px;border-radius:50%;display:grid;place-items:center;background:#111;color:#fff;font-size:30px;line-height:1;border:2px solid #F4F3F0;box-shadow:0 6px 16px rgba(0,0,0,.35);z-index:2}.q3 .q3-sw:hover{background:#6E0B22}.q3-fhd{position:absolute;display:flex;flex-direction:column;gap:8px;color:#fff;pointer-events:none}.q3-fhd .q3-k{font-size:12px;font-weight:600;letter-spacing:.3em;text-transform:uppercase;color:#e7a9b6}.q3 .q3-fhd b{font-size:40px;line-height:1.05;font-weight:600}.q3 .q3-fhd p{font-size:15px;line-height:1.45;color:#d9d3d5}.q3-fc{position:absolute;display:flex;flex-direction:column;gap:4px;padding:14px 16px;border-radius:14px;background:rgba(244,243,240,.96);color:#111;box-shadow:0 10px 24px rgba(0,0,0,.35)}.q3-fc .q3-fl{font-size:11px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:#6E0B22}.q3 .q3-fc .q3-fn{font-size:18px;font-weight:600;line-height:1.2;color:#111}.q3-fc .q3-fp{font-size:14px;color:#444}.q3 .q3-fc .q3-fv{align-self:flex-start;margin-top:6px;padding:8px 14px;border-radius:99px;background:#111;color:#fff;font-size:11px;font-weight:600;letter-spacing:.16em;text-transform:uppercase}.q3 .q3-fc.q3-ftot{flex-direction:row;justify-content:space-between;align-items:center;background:#6E0B22;color:#fff}.q3 .q3-ftot .q3-fl{color:#fff}.q3 .q3-ftot b{font-size:26px}@media(max-width:749px){.q3-fhd{transform:translateX(-50%);align-items:center;text-align:center;gap:6px}.q3-fhd .q3-k{font-size:19px}.q3 .q3-fhd b{font-size:46px}.q3-fhd .q3-tot{font-size:22px;font-weight:600;color:#fff;background:#6E0B22;padding:6px 16px;border-radius:99px;margin-top:4px}.q3 .q3-sw{width:76px;height:76px;font-size:42px}.q3-fc{padding:16px 18px;gap:6px;border-radius:18px}.q3-fc .q3-fl{font-size:16px}.q3 .q3-fc .q3-fn{font-size:23px}.q3-fc .q3-fp{font-size:19px}.q3 .q3-fc .q3-fv{font-size:16px;padding:10px 18px}}.q3-wall img:not(.q3-ok){opacity:0}@media(prefers-reduced-motion:reduce){.q3-wall img{transition:none!important}}.q3-drag .q3-view{cursor:grabbing}.q3 .q3-card img{filter:drop-shadow(0 14px 18px rgba(0,0,0,.4))}.q3-reg{position:absolute}.q3-reg.q3-lp{background:linear-gradient(180deg,#1a0d11,#0a0708);box-shadow:inset 0 3px 0 #a3203f,inset 0 40px 60px -30px rgba(163,32,63,.75)}.q3-reg.q3-dn{background:linear-gradient(180deg,#fbfaf8,#ebe9e4)}.q3-rlab{position:absolute;display:flex;flex-direction:column;align-items:center;gap:8px;transform:translateX(-50%);pointer-events:none}.q3 .q3-rlab img{width:auto}.q3-rlab small{font-size:12px;font-weight:600;letter-spacing:.3em;text-transform:uppercase;white-space:nowrap}.q3-rlab.q3-lp small{color:#fff;opacity:.85}.q3-rlab.q3-dn small{color:#111;opacity:.8}.q3 .q3-rlab.q3-lp img{filter:drop-shadow(0 0 2px #fff) drop-shadow(0 0 8px #a3203f)}.q3-ctt{position:absolute;transform:translateX(-50%);display:flex;align-items:baseline;gap:10px;padding:9px 18px;border-radius:99px;background:#6E0B22;color:#fff;box-shadow:0 0 0 2px #F4F3F0,0 8px 24px rgba(0,0,0,.4);white-space:nowrap;pointer-events:none;z-index:2}.q3 .q3-ctt b{font-size:18px;font-weight:600;letter-spacing:.2em;text-transform:uppercase}.q3-ctt span{font-size:11px;letter-spacing:.12em;text-transform:uppercase;opacity:.8}a.q3-ctt{pointer-events:auto;cursor:pointer;color:#fff!important;text-decoration:none!important}.q3-ctt em{font-style:normal;font-size:14px;opacity:.85;margin-left:-2px}a.q3-ctt:hover{background:#7d1029}.q3 a.q3-lcl{color:inherit;text-decoration:none}.q3-off{display:none;position:absolute;inset:0;flex-direction:column;align-items:center;justify-content:center;gap:12px;z-index:3;text-align:center}.q3-off span{font-size:12px;font-weight:600;letter-spacing:.24em;text-transform:uppercase;opacity:.75}.q3-reg.q3-dn .q3-off span{color:#111}.q3 .q3-off button{padding:10px 16px;border-radius:99px;background:#111;color:#fff;font-size:11px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;border:1px solid rgba(255,255,255,.3)}.q3-f-lp .q3-reg[data-s=dn]>:not(.q3-off),.q3-f-dn .q3-reg[data-s=lp]>:not(.q3-off){opacity:.1;pointer-events:none}.q3-f-lp .q3-reg[data-s=dn]>.q3-off,.q3-f-dn .q3-reg[data-s=lp]>.q3-off{display:flex}.q3-tools{position:absolute;z-index:31;top:14px;right:16px;display:flex;gap:8px;align-items:center}.q3-seg{display:flex;gap:2px;padding:4px;border-radius:99px;background:rgba(8,6,7,.84);border:1px solid rgba(255,255,255,.16)}.q3 .q3-seg button,.q3 .q3-lv{height:34px;padding:0 13px;border-radius:99px;font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#fff;white-space:nowrap;display:inline-flex;align-items:center;gap:8px}.q3 .q3-seg button{opacity:.75}.q3 .q3-seg button.q3-on{opacity:1;background:#fff;color:#111}.q3 .q3-seg button.q3-on[data-f=lp]{background:var(--qb);color:#fff}.q3 .q3-lv{height:44px;padding:0 16px;background:rgba(8,6,7,.84);border:1px solid rgba(255,255,255,.22)}.q3 .q3-lv[aria-pressed=true]{background:#fff;color:#111}.q3-g{width:12px;height:12px;background:linear-gradient(currentColor,currentColor) 0 0/5px 5px no-repeat,linear-gradient(currentColor,currentColor) 7px 0/5px 5px no-repeat,linear-gradient(currentColor,currentColor) 0 7px/5px 5px no-repeat,linear-gradient(currentColor,currentColor) 7px 7px/5px 5px no-repeat}.q3 em,.q3 u{font-style:normal;text-decoration:none}.q3-seg u{display:none}@media(max-width:1100px) and (min-width:750px){.q3 .q3-zbar button{padding:0 8px;letter-spacing:.04em;font-size:10px}.q3-seg em{display:none}.q3-seg u{display:inline}}@media(max-width:749px){.q3-tools{left:10px;right:10px;top:10px;justify-content:space-between}.q3-seg em{display:none}.q3-seg u{display:inline}.q3 .q3-seg button{height:36px;padding:0 14px}.q3 .q3-lv{height:44px}.q3-rlab small{font-size:17px}.q3 .q3-ctt b{font-size:30px}.q3-ctt span{font-size:16px}.q3-ctt{padding:12px 26px;gap:14px}.q3-off span{font-size:18px}.q3 .q3-off button{font-size:17px;padding:14px 22px}}.q3 [hidden]{display:none!important}.q3.q3-listing{height:auto!important;min-height:560px;overflow:visible}.q3-listing .q3-view,.q3-listing .q3-zones,.q3-listing .q3-hint{display:none}.q3-list{position:relative;padding:78px 28px 56px;max-width:1240px;margin:0 auto;color:#fff}.q3-lhd{display:flex;justify-content:space-between;align-items:flex-end;gap:16px;flex-wrap:wrap}.q3-lhd .q3-k{font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:#c9a5ae}.q3 .q3-lhd h2{font-size:32px;line-height:1.1;font-weight:600;margin-top:6px}.q3 .q3-back{padding:12px 18px;border-radius:99px;background:#fff;color:#111;font-size:11px;font-weight:600;letter-spacing:.16em;text-transform:uppercase}.q3-lsec{margin-top:36px}.q3 .q3-lsec h3{font-size:13px;font-weight:600;letter-spacing:.24em;text-transform:uppercase;color:#e7a9b6;padding-bottom:10px;border-bottom:1px solid rgba(255,255,255,.12)}.q3-lsec h3 small{margin-left:8px;color:#fff;opacity:.55;letter-spacing:.12em;font-size:11px}.q3-lgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:18px;margin-top:16px}.q3 .q3-lc{display:flex;flex-direction:column;gap:3px;color:#fff;min-width:0}.q3-lim{display:block;position:relative;width:100%;aspect-ratio:1/1;overflow:hidden;border-radius:14px;background:#F4F3F0;margin-bottom:8px;transition:box-shadow .2s}.q3 .q3-lim img{position:absolute;left:9%;top:9%;width:82%;height:82%;object-fit:contain}.q3-lc:hover .q3-lim,.q3-lc:focus-visible .q3-lim{box-shadow:0 0 0 3px var(--qb)}.q3-lsd{font-size:10px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#e7a9b6}.q3-lc.q3-dn .q3-lsd{color:#cfcac2}.q3 .q3-lc b{font-size:15px;line-height:1.25}.q3-lco{font-size:13px;opacity:.7}.q3-lpr{font-size:15px;font-weight:600}@media(max-width:749px){.q3-list{padding:70px 14px 40px}.q3 .q3-lhd h2{font-size:24px}.q3-lgrid{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.q3 .q3-lc b{font-size:14px}}.q3 .q3-lc.q3-card .q3-lim img{left:0;top:0;width:100%;height:100%;object-fit:cover}.q3-half.q3-r,.q3-reg.q3-dn{background:radial-gradient(ellipse 80% 70% at 50% 42%,#EEECE8 0,#E4E2DD 60%,#D9D6CF 100%)}.q3 .q3-it.q3-dn img,.q3 .q3-reg.q3-dn .q3-it img{filter:drop-shadow(0 0 1px rgba(0,0,0,.28)) drop-shadow(0 12px 14px rgba(0,0,0,.26))}.q3 .q3-it.q3-lp img{filter:drop-shadow(0 0 1px rgba(0,0,0,.35)) drop-shadow(0 16px 18px rgba(0,0,0,.45))}.q3-mir{background:radial-gradient(ellipse 80% 70% at 50% 40%,#E9E6E0 0,#DCD8D0 60%,#C9C3B9 100%)}.q3 .q3-fs img{filter:drop-shadow(0 0 1px rgba(0,0,0,.3)) drop-shadow(0 12px 14px rgba(0,0,0,.3))}.q3-lim{background:radial-gradient(ellipse 75% 70% at 50% 45%,#ECEAE6 0,#E4E2DD 60%,#D7D4CD 100%)}.q3 .q3-lim img{filter:drop-shadow(0 0 1px rgba(0,0,0,.25)) drop-shadow(0 8px 12px rgba(0,0,0,.22))}.q3 .q3-lc.q3-card .q3-lim img{filter:none;mix-blend-mode:multiply}.q3 .q3-lim{background:radial-gradient(120% 90% at 50% 38%,#4a4446 0%,#2c2729 48%,#1a1718 100%)}.q3 .q3-lim img{filter:drop-shadow(0 0 1px rgba(255,255,255,.22)) drop-shadow(0 10px 14px rgba(0,0,0,.55))}.q3,.q3-view{background:#24211f}.q3-mx .q3-face{background:#2c2927}.q3-flo.q3-mx{background:linear-gradient(#37332f,#282523)}.q3-cei{background:linear-gradient(0deg,#302d2b,#272422)}.q3-cei::after{background:repeating-linear-gradient(0deg,transparent 0 60px,rgba(255,250,245,.35) 60px 66px,transparent 66px 120px)}.q3-lp .q3-face,.q3-half.q3-l,.q3-reg.q3-lp{background:linear-gradient(180deg,#3d3936 0,#35312f 55%,#2f2c2a 100%);box-shadow:inset 0 3px 0 #a3203f}.q3-flo.q3-lp{background:linear-gradient(#3b3734,#2d2a28 70%,#272422)}.q3 .q3-lp .q3-sign img,.q3 .q3-mx .q3-sign img,.q3 .q3-mx .q3-sign img.q3-w,.q3 .q3-rlab.q3-lp img{filter:none}.q3-lp .q3-rail{background:linear-gradient(#8d8985,#5e5a57);box-shadow:none}.q3-lp .q3-shelf{background:linear-gradient(#4d4946,#3a3634);box-shadow:0 8px 14px rgba(0,0,0,.3)}.q3-lp .q3-cub{background:linear-gradient(#2a2725,#363230);box-shadow:inset 0 0 0 2px #45413e}.q3-counter .q3-l{background:linear-gradient(#45403d,#34302e 18%,#2a2725);border-top:6px solid #262321}.q3-tag.q3-lp{background:rgba(30,28,27,.9);border:1px solid rgba(244,243,240,.22)}.q3 .q3-it.q3-lp img{filter:drop-shadow(0 0 1px rgba(0,0,0,.3)) drop-shadow(0 14px 16px rgba(0,0,0,.35))}.q3-ctt{box-shadow:0 0 0 2px #F4F3F0}.q3 .q3-all.q3-lp{background:#6E0B22}.q3-hint{background:rgba(36,33,31,.92)!important;border-color:rgba(244,243,240,.18)!important}.q3-hint .q3-k{color:rgba(244,243,240,.7)}.q3 .q3-hint p{color:rgba(244,243,240,.8)}.q3 .q3-ctl,.q3-zbar,.q3-mz{background:rgba(36,33,31,.9)}.q3-allw{background:linear-gradient(180deg,#3d3936 0,#35312f 55%,#2f2c2a 100%)!important;box-shadow:inset 0 3px 0 #a3203f}.q3-sign img{display:block}.q3 a.q3-shopall{position:absolute;transform:translateX(-50%);white-space:nowrap;color:#F4F3F0!important;font-size:13px;font-weight:400;letter-spacing:.32em;text-transform:uppercase;padding:10px 4px 8px;border-bottom:1px solid rgba(244,243,240,.55);cursor:pointer}.q3 a.q3-shopall:hover{border-bottom-color:#F4F3F0}@media(max-width:749px){.q3 a.q3-shopall{font-size:21px}}.q3-tag{font-size:14px;padding:6px 11px}.q3-tag i{font-size:13px;opacity:.8}.q3-ctt span{font-size:14px;opacity:.92}.q3-rlab small{font-size:14px}.q3-rlab.q3-lp small,.q3-rlab.q3-dn small{opacity:.92}.q3-sign small{font-size:14px;opacity:.9}@media(max-width:749px){.q3-tag{font-size:30px;padding:10px 16px}.q3-tag i{font-size:28px}.q3-tag.q3-two{border-radius:22px}.q3-ctt span{font-size:30px}.q3 .q3-ctt b{font-size:34px}.q3-rlab small{font-size:28px}.q3-sign small{font-size:28px}}.q3 .q3-wint{background:linear-gradient(180deg,#e1e8f2 0,#D6DFEC 58%,#ccd6e5 100%)!important;box-shadow:none}.q3 .q3-wint::before{background:none}.q3-wcd{position:absolute;pointer-events:none;border:1px solid rgba(27,34,54,.14);box-sizing:border-box}.q3-wcd-f{background:rgba(179,193,216,.75)}.q3-wcd-s{background:rgba(244,243,240,.62)}.q3-wwm,.q3-wfk{position:absolute;display:block;pointer-events:none;max-width:none}.q3-whd{position:absolute;background:#1B2236;color:#E6ECF5;pointer-events:none;white-space:nowrap;box-sizing:border-box}.q3-whd>*{position:absolute}.q3-whd .q3-wpl{background:#F4F3F0;display:flex;align-items:center;justify-content:center}.q3-whd img{display:block;width:auto}.q3-whd small{font-size:13px;letter-spacing:.34em;text-transform:uppercase;font-weight:500;opacity:.78;line-height:1.2}.q3-whd b{font-size:40px;letter-spacing:.3em;text-transform:uppercase;font-weight:500;line-height:1.15}.q3-whd .q3-wrule{display:block;width:44px;height:1px;background:#E6ECF5;opacity:.5}.q3-whd em{font-style:normal;font-size:14px;letter-spacing:.3em;text-transform:uppercase;font-weight:600;line-height:1.2}.q3-pv{position:absolute;display:block;cursor:default}.q3-pv img{width:100%;height:100%;object-fit:contain;object-position:50% 100%;filter:drop-shadow(0 0 1px rgba(27,34,54,.25)) drop-shadow(0 12px 14px rgba(27,34,54,.22))}.q3-tag.q3-wt{background:#F4F3F0;color:#1B2236;border:1px solid rgba(27,34,54,.24);border-radius:2px!important;letter-spacing:.02em}.q3-tag.q3-wt i{opacity:.82;letter-spacing:.08em}.q3 .q3-wint a.q3-shopall{color:#E6ECF5!important;border-bottom-color:rgba(230,236,245,.55);letter-spacing:.3em}.q3 .q3-wint a.q3-shopall:hover{border-bottom-color:#E6ECF5}@media(max-width:749px){.q3-whd small{font-size:28px;letter-spacing:.26em}.q3-whd b{font-size:46px;letter-spacing:.2em;line-height:1.08}.q3-whd .q3-wrule{width:70px;height:2px}.q3-whd em{font-size:30px;letter-spacing:.22em}.q3-pv img{filter:drop-shadow(0 0 1px rgba(27,34,54,.25)) drop-shadow(0 8px 10px rgba(27,34,54,.22))}.q3 .q3-wint a.q3-shopall{font-size:28px;letter-spacing:.24em}}.q3,.q3-view{background:#141414}.q3-cei{background:#141414}.q3-cei::after{display:none}.q3-flo.q3-mx{background:#0e0e0e}.q3 .q3-mx .q3-face{background:#D9D8D5}.q3-frame{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:5;opacity:0;transition:none;display:block}.q3-rest .q3-frame{opacity:1;transition:opacity .25s}.q3-rm .q3-frame{transition:none!important}.q3 .q3-band{position:absolute;display:flex;align-items:center;gap:28px;padding:0 36px;background:#111;color:#F4F3F0!important;white-space:nowrap;box-sizing:border-box;border-radius:0;box-shadow:none;transform:none;pointer-events:auto;cursor:pointer;z-index:1}.q3 .q3-band:hover{background:#111}.q3 .q3-band img.q3-bmk{width:auto;flex:none}.q3 .q3-band div.q3-btx{flex:1;min-width:0;display:flex;flex-direction:column}.q3 .q3-band small{font-size:13.5px;letter-spacing:.3em;text-transform:uppercase;color:#C9C7C2;line-height:1.2;font-weight:400;opacity:1}.q3 .q3-band b{font-size:26px;letter-spacing:.24em;text-transform:uppercase;font-weight:400!important;line-height:1.25;margin-top:6px;color:#F4F3F0!important}.q3 .q3-band div.q3-bri{display:flex;align-items:center;gap:40px;font-size:13.5px;letter-spacing:.28em;text-transform:uppercase}.q3 .q3-band span.q3-bc{color:#C9C7C2;opacity:1;font-size:inherit;letter-spacing:inherit;text-transform:uppercase}.q3 .q3-band em{font-style:normal;font-size:inherit;opacity:1;margin:0;border-bottom:1px solid #F4F3F0;padding-bottom:3px;color:#F4F3F0}.q3 a.q3-cd{display:flex;flex-direction:column;box-sizing:border-box;padding:14px;overflow:hidden;color:#111}.q3-cd-o{background:#F4F3F0}.q3 a.q3-cd-k{background:#161616;color:#F4F3F0}.q3 a.q3-cd-f{background:#6E0B22;color:#F4F3F0}.q3 a.q3-cd.q3-cd-ft{padding:28px 26px}.q3-cd .q3-pb{flex:1 1 0;min-height:0;position:relative;display:block}.q3 .q3-cd .q3-pb img{position:absolute;left:0;top:0;width:100%;height:100%;object-fit:contain;object-position:50% 50%;filter:drop-shadow(0 5px 7px rgba(0,0,0,.18))}.q3 .q3-cd-k .q3-pb img,.q3 .q3-cd-f .q3-pb img{filter:drop-shadow(0 5px 7px rgba(0,0,0,.5))}.q3 .q3-cd small.q3-kk{display:block;margin-top:14px;font-size:13px;letter-spacing:.26em;text-transform:uppercase;color:#C9C7C2;line-height:1.2;font-weight:400}.q3 .q3-cd .q3-tag{position:static;left:auto;top:auto;transform:none;display:flex;flex-direction:column;justify-content:flex-end;width:auto;max-width:none;margin-top:12px;padding:0;background:none;border:0;border-radius:0;text-align:left;white-space:normal;font-size:14px;font-weight:400;letter-spacing:0;line-height:1.2;color:inherit;pointer-events:none;flex:none;box-sizing:border-box}.q3 .q3-cd small.q3-kk+.q3-tag{margin-top:8px}.q3-cd .q3-nm{display:block;overflow-wrap:normal;word-break:normal;hyphens:manual}.q3 .q3-cd .q3-tag i{display:block;font-style:normal;margin:0;opacity:1;color:#555}.q3 .q3-cd-k .q3-tag i,.q3 .q3-cd-f .q3-tag i{color:#C9C7C2}.q3 .q3-glab{position:absolute;display:flex;align-items:center;justify-content:space-between;font-size:13.5px;letter-spacing:.28em;text-transform:uppercase;color:#111;white-space:nowrap}.q3 .q3-glab a{color:#111!important;border-bottom:1px solid #111;padding-bottom:2px;cursor:pointer}.q3 .q3-zones{position:absolute;z-index:30;display:flex;align-items:center;justify-content:center;gap:0;padding:0 16px;box-sizing:border-box;background:#0b0b0b;border-top:2px solid #6E0B22;color:#F4F3F0}.q3 .q3-ctl{width:48px;height:100%;flex:none;border-radius:0;background:none!important;border:0;font-size:26px;font-weight:400;line-height:1;color:#F4F3F0;display:flex;align-items:center;justify-content:center}.q3 .q3-zbar{display:flex;align-items:center;gap:clamp(12px,2.3vw,34px);padding:0 12px;background:none!important;border:0;border-radius:0}.q3 .q3-zbar button{height:auto;padding:4px 0 6px;border-radius:0;font-size:12px;font-weight:400;letter-spacing:.26em;opacity:1;color:rgba(244,243,240,.62);border-bottom:1px solid transparent;background:none}.q3 .q3-zbar button.q3-on,.q3 .q3-zbar button.q3-on.q3-l{background:none;color:#F4F3F0;border-bottom-color:#F4F3F0}.q3 .q3-zbar button:hover{color:#F4F3F0}@media(max-width:1180px) and (min-width:750px){.q3 .q3-zbar button{letter-spacing:.16em;padding:4px 0 6px;font-size:12px}.q3 .q3-zbar{gap:clamp(8px,1.6vw,20px)}}@media(max-width:960px) and (min-width:750px){.q3 .q3-zbar button{letter-spacing:.08em}.q3 .q3-zbar{gap:8px;padding:0 4px}.q3 .q3-ctl{width:32px}.q3 .q3-zones{padding:0 4px}}.q3 .q3-hint{border-radius:0;background:rgba(11,11,11,.94)!important;border:0!important;border-top:2px solid #6E0B22!important;display:block;width:560px}.q3 .q3-hint .q3-k{font-size:12px;color:rgba(244,243,240,.7)}.q3-how{display:none}@media(max-width:749px){.q3 .q3-band{gap:25px;padding:0 29px}.q3 .q3-band b{font-size:27px;letter-spacing:.24em;margin-top:0;line-height:1.25}.q3 .q3-band div.q3-brow{display:flex;justify-content:space-between;align-items:center;margin-top:16px;font-size:26px;letter-spacing:.2em;text-transform:uppercase;line-height:1.2}.q3 a.q3-cd,.q3 a.q3-cd.q3-cd-ft{padding:12px 12px 15px}.q3 .q3-cd .q3-tag{margin-top:8px;font-size:27px}.q3 .q3-glab{font-size:26px;letter-spacing:.2em;padding:0 2px}.q3 .q3-glab a{padding-bottom:3px;border-bottom-width:2px}.q3 .q3-zbar{display:none}.q3 .q3-zones{padding:0 6px}.q3 .q3-ctl{width:52px;font-size:32px}.q3-mz{display:flex;flex:1;flex-direction:column;align-items:center;gap:9px;min-width:0;padding:0;border-radius:0;background:none!important;border:0!important}.q3 .q3-mz b{font-size:13px;letter-spacing:.3em;font-weight:400;white-space:nowrap;text-transform:uppercase}.q3-mz span{display:flex;align-items:flex-end;gap:5px;height:3px}.q3 .q3-mz i{width:16px;height:1px;border-radius:0;background:rgba(244,243,240,.3)}.q3 .q3-mz i.q3-on{height:2px;background:#F4F3F0}.q3 .q3-hint{left:12px;right:12px;width:auto}}";
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
  /* Oct 18 2026 (Justin): a Shop all opens its category collection ONLY when that collection has more public products (CNT, build time) than the
     wall/group shows; otherwise it opens all products. Unknown count -> the collection, as before. */
  var ALL = 'https://qualitystoner.com/collections/all?from=360';
  function shopAll(h, shown, href) { return typeof CNT[h] === 'number' && CNT[h] <= shown ? ALL : href; }
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
  /* Front wall pieces per side (unchanged since Oct 17 2026): one shirt + one hat + one bag each. (Oct 18 2026: the old rail/shelf wall builders
     put/sign/allPill/half/frontHalf/grid/region/catWall were replaced by the lookbook cards below; old source: qs-store360.src.bb551.js) */
  var FRONT = { lp: ['qs-lp-ts01-classic-tee-white', 'wordmark-snapback-black', 'qs-lp-bp04-backpack-black'], dn: ['embroidered-qs-tee-burgundy', 'qs-snapback-burgundy', 'maison-monogram-backpack-black'] };
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
      var p = o.t.parentNode.parentNode, it = o.t.parentNode, top = WT ? (it.getAttribute('data-g') || '0') : Math.round(parseFloat(it.style.top) + parseFloat(it.style.height)), r = null;   /* winter: tag groups by data-g (crew alone, the four small cards even) */   /* row = same parent + same item bottom (shelf line) */
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
  function refit() { if (cam) qa('.q3-face', cam).forEach(function (f) { if (f.classList.contains('q3-wint')) fitTags(f); else fitCards(f); }); }

  /* ===== Oct 18 2026 (Justin 01:08 "A is the winner"): store polish Hybrid A on every wall except Winter.
     Dark store room frame + stone #D9D8D5 wall; inside, the lookbook grid: full-width black title band (white QS mark with its burgundy ember,
     collection name, piece count, Shop all ->), one burgundy feature card (a white/light piece), small cards (off-white for dark/burgundy pieces,
     black for white pieces); tags = name + price only, every card links to its product page (goPdp). Approved mockup:
     site-build/concepts/store-polish/hybrid/html/A-{m,d}.html. Phone face is 766x1080 (renders ~366x516 = the mockup), desktop 1200x780.
     Phone coordinates are written in the mockup's rendered px (u) and multiplied by KU = W/366. Flat content only (no nested 3D, no animation). ===== */
  var FEAT = { tees: 'qs-lp-ts01-classic-tee-white', tops: 'wordmark-hoodie-white', joggers: 'hem-band-joggers-off-white', hats: 'wordmark-snapback-black', bags: 'qs-lp-bp05-backpack-white' };
  var KU = 1;
  function isLight(id) { return /white/i.test(P(id).c || ''); }
  function ru(r) { return M ? r.map(function (v) { return v * KU; }) : r; }
  function card(f, id, r, o) {
    o = o || {}; var p = P(id); if (!p) return null;
    var bg = o.bg || (o.feat ? 'f' : isLight(id) ? 'k' : 'o');
    var a = div('q3-it q3-cd q3-cd-' + bg + (o.feat ? ' q3-cd-ft' : ''), { left: r[0], top: r[1], width: r[2], height: r[3] },
      '<span class="q3-pb"><img data-src="' + cut(id) + '" alt="" decoding="async"></span>' + (o.kick ? '<small class="q3-kk">' + o.kick + '</small>' : '') +
      '<span class="q3-tag q3-two"><span class="q3-nm">' + esc(p.n) + '</span><i>' + money(id) + '</i></span>', 'a');
    a.href = url(id); a.setAttribute('aria-label', p.n + ' ' + p.c + ', ' + money(id)); a.setAttribute('data-id', id); a.draggable = false;
    a.setAttribute('data-row', o.row || (Math.round(r[1]) + ':' + Math.round(r[3])));
    a.addEventListener('click', function (e) { e.stopPropagation(); goPdp(e, a); });
    f.appendChild(a); return a;
  }
  /* title band: on category walls it is .q3-ctt (b = name, first span = count; nav/counts.py reads them) and the whole band opens the collection, as before */
  function band(f, o) {
    var r = M ? ru([8, 8, 350, 56]) : [40, 40, 1120, 100];
    var cnt = o.cnt != null ? '<span class="q3-bc">' + o.cnt + '</span>' : '<span class="q3-bc">' + (o.sub || '') + '</span>';
    var hd = div('q3-band' + (o.ctt ? ' q3-ctt' : ''), { left: r[0], top: r[1], width: r[2], height: r[3] },
      '<img class="q3-bmk" data-src="' + OWN + 'a/qs-mark-w.webp" alt="QS" style="height:' + (M ? Math.round(34 * KU) : 56) + 'px">' +
      '<div class="q3-btx">' + (M ? '' : '<small>' + o.kick + '</small>') + '<b>' + esc(o.title) + '</b>' +
      (M ? '<div class="q3-brow">' + cnt + '<em>Shop all &#8594;</em></div>' : '') + '</div>' +
      (M ? '' : '<div class="q3-bri">' + cnt + '<em>Shop all &#8594;</em></div>'), o.href ? 'a' : 'div');
    if (o.href) { hd.href = o.href; hd.draggable = false; hd.setAttribute('aria-label', o.aria || 'Shop all');
      hd.addEventListener('click', function (e) { e.stopPropagation(); goPdp(e, hd); }); }
    f.appendChild(hd); return hd;
  }
  /* grid cells (face px): first cell = feature */
  function cells(n) {
    var out = [], g, x0, y0, aw, ah, gap;
    function grid(C, Rr, spans, X, Y, AW, AH, G) {   /* spans: [[col,row,cs,rs],...] for the first cells; the rest fill free cells in reading order */
      var cw = (AW - (C - 1) * G) / C, rh = (AH - (Rr - 1) * G) / Rr, used = {}, res = [];
      function rect(c, r, cs, rs) { for (var i = c; i < c + cs; i++) for (var j = r; j < r + rs; j++) used[i + ',' + j] = 1; return [X + c * (cw + G), Y + r * (rh + G), cs * cw + (cs - 1) * G, rs * rh + (rs - 1) * G]; }
      (spans || []).forEach(function (s) { res.push(rect(s[0], s[1], s[2], s[3])); });
      for (var j = 0; j < Rr; j++) for (var i = 0; i < C; i++) if (!used[i + ',' + j]) res.push(rect(i, j, 1, 1));
      return res;
    }
    if (M) {
      var X = 8 * KU, Y = 70 * KU, AW = 350 * KU, AH = 438 * KU, G = 6 * KU;
      if (n >= 8) return grid(3, 3, null, X, Y, AW, AH, G);
      if (n === 7) return grid(3, 3, [[0, 0, 3, 1]], X, Y, AW, AH, G);   /* feature = full-width top row, then 2 rows of 3 */
      if (n === 6) return grid(3, 3, [[0, 0, 2, 2]], X, Y, AW, AH, G);
      if (n === 5) return grid(2, 3, [[0, 0, 1, 2]], X, Y, AW, AH, G);
      return grid(2, 2, null, X, Y, AW, AH, G);
    }
    var rest = n - 1, C = rest >= 7 ? 4 : rest === 4 ? 2 : 3, Rr = Math.ceil(rest / C);
    return [[40, 154, 320, H - 194]].concat(grid(C, Rr, null, 374, 154, W - 414, H - 194, 14));
  }
  function lookWall(f, c, zi) {
    f.classList.add('q3-look');
    var feat = FEAT[c.k] && c.ids.indexOf(FEAT[c.k]) > -1 ? FEAT[c.k] : c.ids[0];
    var ids = [feat].concat(c.ids.filter(function (id) { return id !== feat; }));
    var nAll = typeof CNT[c.u] === 'number' ? CNT[c.u] : ids.length;   /* public products in the category collection (build time), as before */
    band(f, { ctt: 1, kick: 'The store &middot; 0' + (zi + 1), title: c.n, cnt: nAll + (nAll === 1 ? ' piece' : ' pieces'),
      href: shopAll(c.u, ids.length, 'https://qualitystoner.com/collections/' + c.u + '?from=360'),
      aria: shopAll(c.u, ids.length, '') === ALL ? 'Shop all products' : 'Shop all ' + c.n });
    var cs = cells(ids.length);
    ids.forEach(function (id, i) {
      var p = P(id);
      card(f, id, cs[i], i === 0 ? { feat: 1, kick: M ? '' : (p.s === 'lp' ? 'Loud &amp; Proud' : 'Discreet &amp; Neat') } : {});
    });
  }
  /* Front wall: title band + the two sides as groups (label row with the side's Shop all link, then tee + hat + bag) */
  function frontWall(f) {
    f.classList.add('q3-look');
    band(f, { kick: 'The store &middot; 01', title: 'Take a look around', sub: M ? 'The front' : '', href: 'https://qualitystoner.com/collections/all?from=360', aria: 'Shop all' });
    ['lp', 'dn'].forEach(function (s, gi) {
      var ids = FRONT[s].filter(function (id) { return P(id); }), lab, cr;
      if (M) {
        var y = gi ? 293 : 70;
        lab = ru([8, y, 350, 22]);
        var cw = (350 - 12) / 3; cr = [0, 1, 2].map(function (i) { return ru([8 + i * (cw + 6), y + 24, cw, 191]); });
      } else {
        var x = gi ? 610 : 40, gw = 550, ch = H - 40 - 192, sw = gw - 272 - 14;
        lab = [x, 154, gw, 32];
        cr = [[x, 192, 272, ch], [x + 286, 192, sw, (ch - 14) / 2], [x + 286, 192 + (ch - 14) / 2 + 14, sw, (ch - 14) / 2]];
      }
      var l = div('q3-glab', { left: lab[0], top: lab[1], width: lab[2], height: lab[3] }, '<span>' + (s === 'lp' ? 'Loud &amp; Proud' : 'Discreet &amp; Neat') + '</span>');
      var a = div('', {}, 'Shop all &#8594;', 'a'); var gh = s === 'lp' ? 'loud-proud' : 'discreet-neat';
      a.href = shopAll(gh, ids.length, 'https://qualitystoner.com/collections/' + gh); a.draggable = false;
      a.setAttribute('aria-label', a.href === ALL ? 'Shop all products' : s === 'lp' ? 'Shop all Loud & Proud' : 'Shop all Discreet & Neat');
      a.addEventListener('click', function (e) { if (moved) e.preventDefault(); e.stopPropagation(); });
      l.appendChild(a); f.appendChild(l);
      /* LP lead = burgundy feature card (white tee); DN lead (burgundy tee) stays off-white: burgundy never on burgundy */
      ids.forEach(function (id, i) { card(f, id, cr[i], { feat: s === 'lp' && i === 0 && isLight(id), bg: s === 'dn' && i === 0 && !isLight(id) ? 'o' : null, row: M ? 'g' + gi : null }); });
    });
  }
  /* names fit inside their card: one font size per wall (largest from F0 down to FMIN where no word is wider than the card and no name needs
     more than 2 lines), then every card in one grid row gets the same text-block height so pieces and prices line up */
  function fitCards(face) {
    var cds = qa('.q3-cd', face); if (!cds.length || !root.offsetWidth) return;
    var F0 = M ? 27 : 14, FMIN = M ? 25.5 : 13, LH = 1.2;
    var info = cds.map(function (a) { return { a: a, t: a.querySelector('.q3-tag'), nm: a.querySelector('.q3-nm'), pr: a.querySelector('i'), ft: !M && a.classList.contains('q3-cd-ft') }; });
    function set(f) { info.forEach(function (o) { var fs = o.ft ? f + 2 : f; px(o.t, { height: 'auto', fontSize: fs, lineHeight: String(LH) }); px(o.pr, { fontSize: o.ft ? fs - 1 : fs }); }); }
    function fits() { return info.every(function (o) { var fs = parseFloat(o.t.style.fontSize); return o.nm.scrollWidth <= o.nm.clientWidth + .5 && o.t.scrollWidth <= o.t.clientWidth + .5 && Math.round(o.nm.offsetHeight / (fs * LH)) <= 2; }); }
    /* largest size that fits with the FEWEST wrapped lines (so e.g. "Masthead Hoodie" stays on one line on phone if a half size step allows it) */
    function lines() { return info.reduce(function (n, o) { return n + Math.round(o.nm.offsetHeight / (parseFloat(o.t.style.fontSize) * LH)); }, 0); }
    var best = null;
    for (var f = F0; f >= FMIN - .01; f -= .5) { set(f); if (fits()) { var L = lines(); if (!best || L < best.L) best = { f: f, L: L }; } }
    set(best ? best.f : FMIN);
    var rows = {};
    info.forEach(function (o) { var k = o.a.getAttribute('data-row'); (rows[k] = rows[k] || []).push(o); });
    Object.keys(rows).forEach(function (k) { var h = 0; rows[k].forEach(function (o) { h = Math.max(h, o.t.offsetHeight); }); rows[k].forEach(function (o) { px(o.t, { height: Math.ceil(h) }); }); });
    sizePieces(face);
  }
  /* Oct 18 2026 (Justin 01:40: "try to keep the sizes of the items similar"): within a wall, pieces of one kind (tees / hoodies + crews / joggers / hats /
     backpacks / crossbody / blankets) get ONE garment height on the small cards: the largest at which every small card's garment (trimmed box, not the image
     box) still fits with a 6% margin. The feature card uses the same ratio on its bigger box (capped to fit). Garments are
     centred in the picture box (no rails, no hangers). */
  function kind(id) { var n = (id + ' ' + (P(id).n || '')).toLowerCase();
    return /tee/.test(n) ? 'tee' : /hoodie|crew/.test(n) ? 'top' : /jogger/.test(n) ? 'jog' : /snapback|beanie/.test(n) ? 'hat' : /crossbody/.test(n) ? 'xb' : /blanket|sherpa/.test(n) ? 'bl' : /backpack/.test(n) ? 'bp' : 'x'; }
  function sizePieces(face) {
    var FILL = .94, G = {};
    qa('.q3-cd', face).forEach(function (a) {
      var id = a.getAttribute('data-id'), t = TRIM[id] || [0, 0, 1, 1, 1], pb = a.querySelector('.q3-pb'), im = pb.querySelector('img');
      var o = { a: a, id: id, t: t, im: im, w: pb.offsetWidth, h: pb.offsetHeight, ga: (t[2] - t[0]) * t[4] / (t[3] - t[1]), ft: a.classList.contains('q3-cd-ft') };
      o.mx = Math.min(o.h, o.w / o.ga) * FILL / o.h;   /* largest garment-height / box-height that fits */
      (G[kind(id)] = G[kind(id)] || []).push(o);
    });
    Object.keys(G).forEach(function (k) {
      /* small cards: one absolute garment height (the smallest that fits all of them); feature: the same fill ratio on its own taller box, capped to fit */
      var amin = Math.min.apply(null, G[k].map(function (o) { return o.w * o.h; }));
      G[k].forEach(function (o) { if (o.ft && o.w * o.h < 1.3 * amin) o.ft = false; });   /* a feature card the same size as its neighbours (phone 3x3) is sized like them */
      var sm = G[k].filter(function (o) { return !o.ft; }); if (!sm.length) sm = G[k];
      var hs = Math.min.apply(null, sm.map(function (o) { return o.mx * o.h; })), hb = sm.reduce(function (n, o) { return n + o.h; }, 0) / sm.length;
      G[k].forEach(function (o) {
        var gh = Math.min(o.ft ? hs * o.h / hb : hs, o.mx * o.h), gw = gh * o.ga, iw = gw / (o.t[2] - o.t[0]), ih = gh / (o.t[3] - o.t[1]);
        px(o.im, { position: 'absolute', width: iw, height: ih, left: (o.w - gw) / 2 - o.t[0] * iw, top: (o.h - gh) / 2 - o.t[1] * ih, objectFit: 'fill', maxWidth: 'none' });
        o.a.setAttribute('data-gh', gh.toFixed(1)); o.a.setAttribute('data-k', k);
      });
    });
  }
  var BUILD = {
    front: function (f) { frontWall(f); },
    tees: function (f) { lookWall(f, cat('tees'), 1); }, tops: function (f) { lookWall(f, cat('tops'), 2); }, joggers: function (f) { lookWall(f, cat('joggers'), 3); },
    hats: function (f) { lookWall(f, cat('hats'), 6); }, bags: function (f) { lookWall(f, cat('bags'), 5); },
    all: function (f) { winterWall(f); }
  };

  /* ===== back wall (Oct 17 2026 ~17:00, Justin approved): Winter Atelier / Collection 002 preview. Oct 18 2026 (Justin, Oct 17 ~23:52: "A is perfect.
     Make the crewneck the focus"): rebuilt to the approved mockup site-build/concepts/winter-wall-layouts/23-mix-a-crew-focus.html — ice wall, sparse navy
     flakes (16% alpha baked into the webp), huge faint blue-S watermark (7% alpha baked), navy text card with the blue-S mark on an OFF-WHITE plate (the S
     #0F347C vanishes on navy, so the mark never sits on navy), big deeper-ice feature card = Winter Crest Crew, four small off-white cards 2x2.
     Desktop face = the mockup's coordinates 1:1. Phone face (720x1080, renders ~0.44x): navy band on top, crew card, then the four small cards 2x2;
     on phone every card is piece-left / tag-right so tags keep >= 28 css px. Tags "<name> / Nov 15", NOT links, class q3-pv (counts stay 30). ===== */
  var WFL_D = [[22,30,26],[420,26,18],[770,30,22],[1150,28,24],[14,330,18],[1160,360,20],[24,640,22],[1150,690,18],[415,728,16],[770,735,20],[600,22,14],[980,736,14],
    [470,110,22],[700,160,16],[520,330,14],[740,420,20],[820,100,14],[1090,200,16],[930,430,18],[1100,480,14],[480,620,16],[720,640,14],[830,330,12]];
  var WFL_M = [[6,2,22],[330,2,18],[694,4,20],[2,420,20],[698,560,18],[2,780,18],[700,930,18],[200,1058,18],[520,1060,16],
    [420,336,30],[640,350,24],[470,652,26],[662,630,20],[300,664,20],[356,712,14],[352,888,16],[150,760,18],[560,866,18],[250,1030,16],[640,1032,18]];
  function winterWall(f) {
    f.classList.add('q3-wint');
    /* Oct 18 2026: the phone face grew to 766 wide (store polish); the approved 720x1080 winter layout sits centred on it, unchanged (flat child, no transform) */
    if (M) { var fo = div('q3-wofs', { position: 'absolute', left: (W - 720) / 2, top: 0, width: 720, height: 1080 }); f.appendChild(fo); f = fo; }
    function img(src, css, cls) { var i = document.createElement('img'); i.setAttribute('data-src', OWN + 'w/' + src); i.alt = ''; i.className = cls; i.decoding = 'async'; return px(i, css); }
    /* cards (backgrounds only; rgba fills, no opacity layers) */
    var CD = M ? { f: [24, 316, 672, 388], s: [[24, 720, 328, 160], [368, 720, 328, 160], [24, 896, 328, 160], [368, 896, 328, 160]] }
               : { f: [430, 70, 340, 640], s: [[790, 70, 165, 310], [975, 70, 155, 310], [790, 400, 165, 310], [975, 400, 155, 310]] };
    function card(r, cls) { f.appendChild(div('q3-wcd ' + cls, { left: r[0], top: r[1], width: r[2], height: r[3] })); }
    card(CD.f, 'q3-wcd-f'); CD.s.forEach(function (r) { card(r, 'q3-wcd-s'); });
    /* navy text card: blue-S mark on an off-white plate, COLLECTION 002 / WINTER ATELIER / rule / DROPS NOV 15 (classes kept for nav/winter.py) */
    var N = M ? { box: [24, 24, 672, 276], pl: [32, 32, 136], mk: 92, k: [196, 32], t: [194, 72], r: [32, 194], d: [32, 212] }
              : { box: [70, 70, 340, 640], pl: [40, 40, 96], mk: 64, k: [40, 170], t: [38, 202], r: [40, 320], d: [40, 344] };
    var hd = div('q3-whd', { left: N.box[0], top: N.box[1], width: N.box[2], height: N.box[3] },
      '<span class="q3-wpl" style="left:' + N.pl[0] + 'px;top:' + N.pl[1] + 'px;width:' + N.pl[2] + 'px;height:' + N.pl[2] + 'px"><img data-src="' + OWN + 'w/qs-bluemark-k.webp" style="height:' + N.mk + 'px" alt="QS"></span>' +
      '<small style="left:' + N.k[0] + 'px;top:' + N.k[1] + 'px">Collection 002</small><b style="left:' + N.t[0] + 'px;top:' + N.t[1] + 'px">Winter<br>Atelier</b>' +
      '<span class="q3-wrule" style="left:' + N.r[0] + 'px;top:' + N.r[1] + 'px"></span><em style="left:' + N.d[0] + 'px;top:' + N.d[1] + 'px">Drops Nov 15</em>');
    f.appendChild(hd);
    /* watermark (centred behind the pieces) + flakes */
    f.appendChild(M ? img('qs-watermark-07.webp', { left: 360 - 342, top: 340, height: 640, width: 683 }, 'q3-wwm') : img('qs-watermark-07.webp', { left: 600 - 320, top: 90, height: 600, width: 640 }, 'q3-wwm'));
    (M ? WFL_M : WFL_D).forEach(function (t) { f.appendChild(img('flake-navy-16.webp', { left: t[0], top: t[1], width: t[2], height: Math.round(t[2] * 140 / 128) }, 'q3-wfk')); });
    /* pieces: [left, top, w, h] box (object-fit contain, bottom-centred) + tag position in face px. g = tag group (crew alone; the four small even). */
    var PL = M ? {
      'winter-crest-crew-off-white': [44, 334, 340, 350, 540, 509, 296, 1],
      'winter-crest-back-tee-black': [36, 759, 84, 82, 236, 800, 222, 0], 'frost-lined-hood-black': [380, 754, 84, 93, 580, 800, 222, 0],
      'maison-winter-joggers-black': [54, 908, 49, 136, 236, 976, 222, 0], 'wordmark-cuff-beanie-navy': [391, 940, 63, 72, 580, 976, 222, 0] } : {
      'winter-crest-crew-off-white': [444, 240, 311, 320, 600, 600, 300, 1],
      'winter-crest-back-tee-black': [812, 165, 119, 115, 872, 300, 150, 0], 'frost-lined-hood-black': [998, 162, 107, 118, 1052, 300, 140, 0],
      'maison-winter-joggers-black': [840, 445, 64, 175, 872, 636, 150, 0], 'wordmark-cuff-beanie-navy': [1019, 525, 66, 75, 1052, 636, 140, 0] };
    var reg = div('q3-reg q3-wreg', { left: 0, top: 0, width: M ? 720 : W, height: H }); f.appendChild(reg);
    WINTER.forEach(function (p) {
      var b = PL[p.id]; if (!b) return;
      var tl = b[4] - b[0], tt = b[5] - b[1], tf = M ? 'translate(-50%,-50%)' : 'translateX(-50%)';
      var e = div('q3-pv', { left: b[0], top: b[1], width: b[2], height: b[3] },
        '<img data-src="' + OWN + 'w/' + p.id + '.webp" alt="' + esc(p.n) + '" decoding="async">' +
        '<span class="q3-tag q3-wt q3-two" style="left:' + tl + 'px;top:' + tt + 'px;transform:' + tf + ';max-width:' + b[6] + 'px"><span class="q3-nm">' + esc(p.n) + '</span><i>Nov 15</i></span>');
      e.setAttribute('data-wid', p.id); e.setAttribute('data-g', b[7]); e.setAttribute('aria-label', p.n + ', drops November 15'); reg.appendChild(e);
    });
    var a = div('q3-shopall q3-wsa', M ? { left: 24 + 640, top: 24 + 200, transform: 'translateX(-100%)' } : { left: 110, top: 630, transform: 'none' }, 'Shop all &nbsp;&#8594;', 'a');
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
      '<svg class="q3-frame" aria-hidden="true"></svg>' +
      '<div class="q3-hint"><div class="q3-k">Quality Stoner &middot; Inside</div><h2>Look around the shop.</h2><p>Every wall is one collection. Swipe or use the arrows to turn, tap any piece to open it.</p></div>' +
      '<div class="q3-zones"><button type="button" class="q3-ctl q3-prev" aria-label="Turn left">&#8249;</button><div class="q3-zbar"></div><div class="q3-mz" aria-live="polite"><b></b><span></span></div><button type="button" class="q3-ctl q3-next" aria-label="Turn right">&#8250;</button></div>' +
      '');
    host.innerHTML = ''; host.appendChild(root);
    view = q('.q3-view'); cam = q('.q3-cam');
    q('.q3-zbar').innerHTML = BAR.map(function (z) { return '<button type="button" data-k="' + z.k + '">' + esc(z.n) + '</button>'; }).join('');
    q('.q3-mz span').innerHTML = BAR.map(function (z) { return '<i data-k="' + z.k + '"></i>'; }).join('');
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
    if (document.documentElement.clientWidth < 750) Hh = Math.max(560, Math.min(900, room)); else Hh = Math.max(560, Math.min(980, room));
    BH = Hh; root.style.height = Hh + 'px';
  }
  /* field of view follows the block size: walls fill the height on desktop, a wider lens on phones */
  /* Oct 18 2026 store polish: the wall at rest fills the block like mockup A (phone: 12 px side edges, 8 px under the site header; desktop: ~9% side
     walls), the nav strip sits right under it, and a flat 2D frame (ceiling, two plain dark side walls, floor) is drawn around the resting wall so the
     neighbours' cut-off slivers never show at rest; the frame drops the instant the room moves (q3-rest) and fades back in when it stops. */
  var GEO = {};
  function persp() {
    var bw = root.clientWidth, bh = root.clientHeight;
    var G = M ? { t: 8, n: 60, g: 8, b: 8, sx: 12 } : { t: 14, n: 52, g: 10, b: 12, sx: Math.max(60, Math.round(bw * .09)) };
    var s = Math.min((bw - 2 * G.sx) / W, (bh - G.t - G.g - G.n - G.b) / H); if (!M) s = Math.min(s, 1.15);
    var pmin = bw / 2 / Math.tan((CULL - STEP / 2 - 2) * Math.PI / 180);
    PERS = Math.round(Math.max(s * R, pmin)); s = PERS / R;
    cam.style.perspective = PERS + 'px';
    var ww = W * s, wh = H * s, x0 = (bw - ww) / 2, y0 = G.t, x1 = x0 + ww, y1 = y0 + wh;
    cam.style.top = (y0 + wh / 2) + 'px';
    var zn = q('.q3-zones'), ny = y1 + G.g;
    px(zn, M ? { left: 0, width: bw, top: ny, height: G.n, bottom: 'auto', transform: 'none' } : { left: x0, width: ww, top: ny, height: G.n, bottom: 'auto', transform: 'none' });
    var hn = q('.q3-hint'); if (hn) px(hn, { bottom: (bh - y1 + 12) });
    var e = .6, P2 = function (a) { return a.map(function (v) { return v.toFixed(1); }).join(' '); };
    q('.q3-frame').setAttribute('viewBox', '0 0 ' + bw + ' ' + bh);
    q('.q3-frame').innerHTML = '<polygon fill="#141414" points="' + P2([0, 0, bw, 0, x1 - e, y0 + e, x0 + e, y0 + e]) + '"/>' +
      '<polygon fill="#202020" points="' + P2([0, 0, x0 + e, y0 + e, x0 + e, y1 - e, 0, bh]) + '"/>' +
      '<polygon fill="#202020" points="' + P2([bw, 0, x1 - e, y0 + e, x1 - e, y1 - e, bw, bh]) + '"/>' +
      '<polygon fill="#0e0e0e" points="' + P2([0, bh, x0 + e, y1 - e, x1 - e, y1 - e, bw, bh]) + '"/>';
    GEO = { s: s, wall: [x0, y0, ww, wh], nav: [M ? 0 : x0, ny, M ? bw : ww, G.n] };
    apply(1);
  }
  function zone(k) { for (var i = 0; i < ZONES.length; i++) if (ZONES[i].k === k) return ZONES[i]; }
  function build() {
    var m = root.clientWidth < 750;
    if (built && m === M) { persp(); return; }
    M = m; built = true; W = M ? 766 : 1200; KU = M ? W / 366 : 1; H = M ? 1080 : 780; R = W / 2 / Math.tan(Math.PI / NZ) - 1;  /* -1 px: walls overlap a hair, no seams */
    cam.innerHTML = ''; walls = {};
    /* Flat 3D chain (Oct 16 2026 iOS fix): NO transform-style:preserve-3d anywhere. Every wall, floor and ceiling is a direct
       child of .q3-cam (which carries the perspective) with its own full camera*wall transform, written per frame. iOS Safari
       mis-sorts / drops layers inside nested preserve-3d scenes (blank halves, missing items, sheared walls); siblings under
       one perspective parent are projected independently, and the room is convex so visible pieces never overlap. */
    var FD = .6, ox = W / 2 + 'px ', fh = Math.round(R * FD);
    ZONES.forEach(function (z) {
      var w = div('q3-wall q3-' + z.s, { left: -W / 2, top: -H / 2, width: W, height: H });
      w.style.transformOrigin = ox + H / 2 + 'px';
      var face = div('q3-face'); w.appendChild(face); BUILD[z.k](face); if (z.k === 'all') fitTags(face); else fitCards(face);
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
    var rest = !anim && !dragging && Math.abs(norm(yaw - near().a)) < .05;
    if (rest !== root.classList.contains('q3-rest')) root.classList.toggle('q3-rest', rest);
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
    yaw: function () { return yaw; }, geo: function () { return GEO; }, trim: function (id) { return TRIM[id]; }, busy: function () { return !!anim || dragging; },
    count: function () { var s = {}; qa('.q3-it').forEach(function (a) { s[a.getAttribute('data-id')] = 1; }); return Object.keys(s).length; } };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount); else mount();
})();
