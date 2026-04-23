// ═══════════════════════════════════════════════════════════
// MAIN.JS — Luxury Mall · v4 (auto-generado por Admin)
// ═══════════════════════════════════════════════════════════

const DEFAULT_INVENTORY = [
  { id:6, name:"Victoria's Secret Amber Romance", price:10000, stock:20, store:"divino", type:"fragancias",
    img:"https://es.victoriassecret.com/p/1000x1333/png/zz/25/02/12/00/112592030037_OM_F.jpg", gallery:[{"url":"https://es.victoriassecret.com/p/1000x1333/png/zz/25/02/12/00/112592030037_OM_F.jpg","isMain":true}],
    desc:"Ámbar resinoso y crema de vainilla.", specs:{"Familia":"Oriental","Notas base":"Ámbar, Vainilla","Notas corazón":"Gardenia","Presentación":"Loción 250 ml"} },
  { id:16, name:"Victoria's Secret Romance", price:10000, stock:15, store:"divino", type:"fragancias",
    img:"https://victoriassecretbeautycr.vtexassets.com/arquivos/ids/172845-1200-1600?v=638030941474070000&width=1200&height=1600&aspect=true", gallery:[{"url":"https://victoriassecretbeautycr.vtexassets.com/arquivos/ids/172845-1200-1600?v=638030941474070000&width=1200&height=1600&aspect=true","isMain":true}],
    desc:"Pétalos de rosa. Almizcle puro. Enamorándome de ti.", specs:{"Familia":"Floral","Notas base":"Almizcle blanco","Notas corazón":"Rosa, Lila","Presentación":"Loción 250 ml"} },
  { id:17, name:"Victoria's Secret Romantic", price:10000, stock:18, store:"divino", type:"fragancias",
    img:"https://cdnx.jumpseller.com/la-perfumeria-cl/image/69524237/resize/540/540?1762793584", gallery:[{"url":"https://cdnx.jumpseller.com/la-perfumeria-cl/image/69524237/resize/540/540?1762793584","isMain":true}],
    desc:"Floral – clásico, femenino y delicado.", specs:{"Familia":"Floral","Notas base":"Sándalo","Notas corazón":"Jazmín, Rosa","Presentación":"Loción 250 ml"} },
  { id:32, name:"Lattafa Ladies Yara Deodorant Spray", price:6500, stock:11, store:"divino", type:"fragancias",
    img:"https://i.ebayimg.com/images/g/vcQAAOSwZA5m8W6W/s-l1600.jpg", gallery:[{"url":"https://i.ebayimg.com/images/g/vcQAAOSwZA5m8W6W/s-l1600.jpg","isMain":true},{"url":"https://www.intenseoud.com/cdn/shop/files/3_b1cef525-6643-489a-affe-fd56e171bd19.webp?v=1746547711","isMain":false},{"url":"https://www.intenseoud.com/cdn/shop/files/Yara_Deo_200ML_2.webp?v=1746547711","isMain":false}],
    desc:"Aroma dulce, cremoso y tipo gourmand. Comparado con un batido de fresa o postre tropical.", specs:{"Notas de Salida":"Orquídea, heliotropo y mandarina.","Notas de Corazón":"Frutas tropicales y acorde gourmand.","Notas de Fondo":"Vainilla, almizcle y sándalo.","Duración":"Entre 5 y 7 horas"} },
  { id:33, name:"Curve Sport Cologne Spray 125ml", price:14300, stock:1, store:"divino", type:"fragancias",
    img:"https://fimgs.net/mdimg/secundar/o.31107.jpg", gallery:[{"url":"https://fimgs.net/mdimg/secundar/o.31107.jpg","isMain":true},{"url":"https://holacompras.com/wp-content/uploads/2021/10/PERF-LIZ-CURSPORT-H-1-1000x1000.jpg","isMain":false}],
    desc:"Fresca, masculina y sensual. Combina notas verdes y cálidas con toque cítrico.", specs:{} },
  { id:19, name:"SAMSUNG CHROMEBOOK GO", price:285000, stock:8, store:"divino", type:"tech",
    img:"https://cdcinternacional.com/wp-content/uploads/2024/01/XE340XDA-KA2US-2.jpg", gallery:[{"url":"https://cdcinternacional.com/wp-content/uploads/2024/01/XE340XDA-KA2US-2.jpg","isMain":true}],
    desc:"REFURB ING CHROME CEL N4500 1.10-2.80/4GB/64GB/14 pulgadas/PLATA", specs:{"Marca":"Samsung","Sistema Operativo":"Chrome","Procesador":"Celeron","Memoria Ram":"4GB","Estado":"Refurbished"} },
  { id:38, name:"Cable Rainbow type C 1 metro", price:7000, stock:11, store:"divino", type:"tech",
    img:"https://www.acopluscr.com/public/6/productos/FEL2302234_1.webp?v=7798820", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL2302234_1.webp?v=7798820","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL2302234_2.webp?v=7798820","isMain":false}],
    desc:"Cable rainbow type c carga rápido y data", specs:{"Color":"Multicolor","Material":"Plástico PVC y TPE"} },
  { id:39, name:"Cable tipo C 1metro Magnético", price:10000, stock:11, store:"divino", type:"tech",
    img:"https://www.acopluscr.com/public/6/productos/FEL2405103_1.webp?v=7798820", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL2405103_1.webp?v=7798820","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL2405103_2.webp?v=7798820","isMain":false}],
    desc:"Cable magnético flexible, evita roturas y garantiza carga estable. Diseño magnético facilita enrollarlo.", specs:{"Dimensiones":"largo: 1 metro"} },
  { id:40, name:"Cable Rainbow V8 Carga Rapida y Data 1metro", price:7000, stock:11, store:"divino", type:"tech",
    img:"https://www.acopluscr.com/public/6/productos/FEL2302233_1.webp?v=7798820", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL2302233_1.webp?v=7798820","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL2302233_2.webp?v=7798820","isMain":false}],
    desc:"Cable de carga rápida de alta calidad. Compatible con todo tipo de dispositivos móviles.", specs:{} },
  { id:41, name:"Cable Rainbow IOS Carga Rapida Y Data", price:7000, stock:11, store:"divino", type:"tech",
    img:"https://www.acopluscr.com/public/6/productos/FEL2302235_1.webp?v=7798820", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL2302235_1.webp?v=7798820","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL2302235_2.webp?v=7798820","isMain":false}],
    desc:"Cable de carga rápida para dispositivos iOS. Compatible con iPhone y iPad.", specs:{"Material":"Plástico PVC y TPE","Dimensiones:":"Largo: 1 metro."} },
  { id:42, name:"Cable Plano V8 2Metros", price:7000, stock:11, store:"divino", type:"tech",
    img:"https://www.acopluscr.com/public/6/productos/FEL181202_1.webp?v=7798820", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL181202_1.webp?v=7798820","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL181202_2.webp?v=7798820","isMain":false}],
    desc:"Cable plano V8 2 metros", specs:{"Color:":"Varios","Dimensiones:":"2 Metros"} },
  { id:43, name:"Cable Plano Iphone 3Metros", price:7000, stock:11, store:"divino", type:"tech",
    img:"https://www.acopluscr.com/public/6/productos/FEL181205_1.webp?v=7798820", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL181205_1.webp?v=7798820","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL181205_2.webp?v=7798820","isMain":false}],
    desc:"Cable plano iPhone 3 Metros de diferentes colores. Fabricado con plástico duradero y alambre de cobre.", specs:{} },
  { id:44, name:"Cable Lightning 1Metro Magnético", price:7000, stock:11, store:"divino", type:"tech",
    img:"https://www.acopluscr.com/public/6/productos/FEL2405104_1.webp?v=7798820", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL2405104_1.webp?v=7798820","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL2405104_2.webp?v=7798820","isMain":false}],
    desc:"Cable magnético flexible, evita roturas y garantiza carga estable. Se adhiere a superficies metálicas.", specs:{"Material:":"Nylon y Metal."} },
  { id:45, name:"Cable Flat Wire 4 en 1 65W", price:11000, stock:11, store:"divino", type:"tech",
    img:"https://www.acopluscr.com/public/6/productos/FEL2411160_1.webp?v=7798820", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL2411160_1.webp?v=7798820","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL2411160_2.webp?v=7798820","isMain":false},{"url":"https://www.acopluscr.com/public/6/productos/FEL2411160_3.webp?v=7798820","isMain":false}],
    desc:"Cable 4 en 1: USB a Tipo C, Tipo C a Lightning 27W, y más. Carga rápida compatible con todos los dispositivos.", specs:{"Dimensiones:":"1 mtr x 1.5 cm.","Material:":"Plástico PVC y TPE."} },
  { id:46, name:"Cargador Inalámbrico QI Estándar", price:13000, stock:11, store:"divino", type:"tech",
    img:"https://www.acopluscr.com/public/6/productos/FEL220237_1.webp?v=9363716", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL220237_1.webp?v=9363716","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL220237_2.webp?v=9363716","isMain":false}],
    desc:"Compatible con todos los modelos con tecnología Qi. Coloque su teléfono directamente en la base. Corriente 110V.", specs:{} },
  { id:47, name:"Cable Auxiliar Audio 1Metro 3.5 Aux", price:8000, stock:11, store:"divino", type:"tech",
    img:"https://www.acopluscr.com/public/6/productos/FEL2302217_1.webp?v=9363716", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL2302217_1.webp?v=9363716","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL2302217_2.webp?v=9363716","isMain":false}],
    desc:"Cable doble espiga de 3.5mm, resistente y duradero. Compatible con todo tipo de dispositivos de audio.", specs:{"Dimensiones:":"1 metro.","Material:":"Nailon y Cobre."} },
  { id:48, name:"Audifonos BT Diadema", price:12000, stock:11, store:"divino", type:"tech",
    img:"https://www.acopluscr.com/public/6/productos/FEL2411001_1.webp?v=9363716", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL2411001_1.webp?v=9363716","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL2411001_2.webp?v=9363716","isMain":false}],
    desc:"Sonido envolvente y Bluetooth hasta 10 metros. Radio FM, MP3 vía SD y entrada auxiliar 3.5mm. Diseño plegable.", specs:{"Material:":"Plástico y Metal."} },
  { id:49, name:"Audifonos Diadema Tipo Unicornio", price:15000, stock:5, store:"divino", type:"tech",
    img:"https://www.acopluscr.com/public/6/productos/FEL210907_1.webp?v=9363716", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL210907_1.webp?v=9363716","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL210907_2.webp?v=9363716","isMain":false}],
    desc:"Bluetooth, Radio FM, MP3 desde SD y entrada auxiliar 3.5mm. Iluminación LED RGB.", specs:{"Dimensiones:":"24 cm x 18 cm."} },
  { id:50, name:"Audifonos Bluetooth Diadema Tipo Gato", price:15000, stock:11, store:"divino", type:"tech",
    img:"https://www.acopluscr.com/public/6/productos/FEL200942_1.webp?v=9363716", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL200942_1.webp?v=9363716","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL200942_2.webp?v=9363716","isMain":false}],
    desc:"Bluetooth, Radio FM, MP3 desde SD y entrada auxiliar 3.5mm. Iluminación LED RGB.", specs:{"Material:":"Plástico ABS"} },
  { id:51, name:"Audifonos Tipo Zipper Cajita", price:5000, stock:5, store:"divino", type:"tech",
    img:"https://www.acopluscr.com/public/6/productos/AEL190671_1.webp?v=9363716", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/AEL190671_1.webp?v=9363716","isMain":true}],
    desc:"Audifonos manos libres plug 3.5mm. Colores surtidos Negro/Verde/Rosa/Azul/Blanco/Rojo.", specs:{"Dimensiones:":"1.2 m de largo","Material:":"Plástico"} },
  { id:52, name:"Aro de Luz Selfie Con Espejo", price:7000, stock:3, store:"divino", type:"tech",
    img:"https://www.acopluscr.com/public/6/productos/FEL200918_1.webp?v=9363716", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL200918_1.webp?v=9363716","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL200918_2.webp?v=9363716","isMain":false}],
    desc:"36 LEDs blancos recargable USB. 3 opciones de brillo para fotos y videos mejor iluminados.", specs:{"Material:":"Plástico ABS y PC"} },
  { id:26, name:"Set 12 cepillos desechables para manicuristas", price:500, stock:5, store:"divino", type:"cosméticos",
    img:"https://divinocielo.hiboutik.com/shop/image.php?img=big_130-1.jpg", gallery:[{"url":"https://divinocielo.hiboutik.com/shop/image.php?img=big_130-1.jpg","isMain":true},{"url":"https://divinocielo.hiboutik.com/shop/image.php?img=big_130-2.jpg","isMain":false},{"url":"https://divinocielo.hiboutik.com/shop/image.php?img=big_130-3.jpg","isMain":false}],
    desc:"Mango ergonómico de plástico con cerdas de nailon.", specs:{"Uso":"Limpieza de uñas y manos."} },
  { id:27, name:"Espejo Maquillaje Táctil Led", price:12500, stock:5, store:"divino", type:"cosméticos",
    img:"https://http2.mlstatic.com/D_Q_NP_828259-MLC92151088387_092025-F.webp", gallery:[{"url":"https://http2.mlstatic.com/D_Q_NP_828259-MLC92151088387_092025-F.webp","isMain":true},{"url":"https://http2.mlstatic.com/D_Q_NP_658868-MLC92151039181_092025-F.webp","isMain":false},{"url":"https://http2.mlstatic.com/D_Q_NP_779292-MLC92151019369_092025-F.webp","isMain":false}],
    desc:"Ajustable a 180 grados, ampliación, LED iluminado, plegable tripliegue.", specs:{"Temperatura de la luz":"Cálida y fría.","Color del marco":"Blanco."} },
  { id:28, name:"Skala Expert Bomba de Vitaminas", price:6500, stock:1, store:"divino", type:"cosméticos",
    img:"https://m.media-amazon.com/images/I/71dDSNmffFL._SL1500_.jpg", gallery:[{"url":"https://m.media-amazon.com/images/I/71dDSNmffFL._SL1500_.jpg","isMain":true}],
    desc:"Enriquecida con Ácido Hialurónico, Aceite de Ricino, Proteínas Vegetales, Vitamina A, E y D-Pantenol.", specs:{"Propósito":"Crecimiento espectacular del cabello.","Características":"100% vegano, sin sulfatos ni parabenos."} },
  { id:29, name:"Creme para Pentear Salon Line Kids Cachinhos Uva", price:9200, stock:1, store:"divino", type:"cosméticos",
    img:"https://www.salonline.com.br/ccstore/v1/images/?source=/file/v694171561523967103/products/32446%20-%20SKU1.jpg&height=940&width=940", gallery:[{"url":"https://www.salonline.com.br/ccstore/v1/images/?source=/file/v694171561523967103/products/32446%20-%20SKU1.jpg&height=940&width=940","isMain":true},{"url":"https://m.media-amazon.com/images/I/61MEL7-nh1L._AC_SY355_.jpg","isMain":false}],
    desc:"Crema de peinar infantil vegana, ideal para cabellos ondulados, rizados y crespos. Brillo, suavidad y desenredar.", specs:{"Contenido":"1000g (1kg).","Forma":"Crema"} },
  { id:30, name:"Karseell Maca Essence Repair Collagen", price:12000, stock:2, store:"divino", type:"cosméticos",
    img:"https://hibeautycr.com/cdn/shop/files/FullSizeRender_333b6afe-3e35-4106-ab48-42f21b15d451_860x.jpg?v=1702749214", gallery:[{"url":"https://hibeautycr.com/cdn/shop/files/FullSizeRender_333b6afe-3e35-4106-ab48-42f21b15d451_860x.jpg?v=1702749214","isMain":true},{"url":"https://hibeautycr.com/cdn/shop/files/FullSizeRender_8a5ed4cf-8366-4134-8315-b06947be5bbb_860x.jpg?v=1702749214","isMain":false}],
    desc:"Tratamiento intensivo de 500ml que repara el cabello dañado, seco o teñido. Fórmula de colágeno y esencia de maca.", specs:{} },
  { id:31, name:"Karseell Maca Essence Oil", price:9000, stock:1, store:"divino", type:"cosméticos",
    img:"https://perfumeriaonlinex.com/wp-content/uploads/2025/09/Disenosintitulo-46_d78f0a47-39fb-438d-a2db-03f0cf428fd1.webp", gallery:[{"url":"https://perfumeriaonlinex.com/wp-content/uploads/2025/09/Disenosintitulo-46_d78f0a47-39fb-438d-a2db-03f0cf428fd1.webp","isMain":true}],
    desc:"Hidrata y repara el cabello seco. Controla el frizz y deja el cabello suave y brillante.", specs:{"Función":"Humedad, suavidad y brillo intenso.","Beneficios":"Intensifica y mantiene el color del cabello."} },
  { id:34, name:"Ushas Matte Lips 2in1 Lipstick & Lipline", price:1900, stock:20, store:"divino", type:"cosméticos",
    img:"https://static.wixstatic.com/media/d4e13d_d5239857ca434aee95b889c6477a59a7~mv2.jpg/v1/fill/w_498,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d4e13d_d5239857ca434aee95b889c6477a59a7~mv2.jpg", gallery:[{"url":"https://static.wixstatic.com/media/d4e13d_d5239857ca434aee95b889c6477a59a7~mv2.jpg/v1/fill/w_498,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d4e13d_d5239857ca434aee95b889c6477a59a7~mv2.jpg","isMain":true}],
    desc:"Textura mate que hace los labios lucir más regordetes e hidratados. Para trabajo, escuela, citas y fiestas.", specs:{} },
  { id:35, name:"Espuma Limpiadora Vitamina Arroz CQK", price:2500, stock:1, store:"divino", type:"cosméticos",
    img:"https://circulob.mx/wp-content/uploads/2023/09/ESPUMA-LIMPIADORA-ARROZ-CQK-800x800.jpg", gallery:[{"url":"https://circulob.mx/wp-content/uploads/2023/09/ESPUMA-LIMPIADORA-ARROZ-CQK-800x800.jpg","isMain":true}],
    desc:"Limpiador facial suave con extracto de arroz. Elimina impurezas y maquillaje. Aclara y suaviza la textura.", specs:{} },
  { id:36, name:"Espuma Limpiadora Vitamina Naranja CQK", price:2500, stock:1, store:"divino", type:"cosméticos",
    img:"https://circulob.mx/wp-content/uploads/2023/09/ESPUMA-LIMPIADORA-NARANJA-CQK-800x800.jpg", gallery:[{"url":"https://circulob.mx/wp-content/uploads/2023/09/ESPUMA-LIMPIADORA-NARANJA-CQK-800x800.jpg","isMain":true}],
    desc:"Limpiador facial refrescante con vitamina C. Ilumina y unifica el tono. Incluye cepillo de silicona.", specs:{} },
  { id:37, name:"Crema para Pentear Uva y Sandía", price:9200, stock:1, store:"divino", type:"cosméticos",
    img:"https://i.ebayimg.com/images/g/CWIAAeSw6H5owxNB/s-l960.jpg", gallery:[{"url":"https://i.ebayimg.com/images/g/CWIAAeSw6H5owxNB/s-l960.jpg","isMain":true},{"url":"https://i.ebayimg.com/images/g/PucAAeSwbCZowxNB/s-l140.jpg","isMain":false}],
    desc:"Crema de peinar con extractos de uva y sandía. Nutrición profunda, brillo extremo y alta definición.", specs:{"Ingredientes":"Extractos de uva y sandía con óleo de tratamiento extraordinario.","Tipo de cabello":"Ondulados, rizados y crespos."} },
  { id:53, name:"Cobertor Para Colchon Matrimonial", price:15000, stock:1, store:"divino", type:"hogar",
    img:"https://www.acopluscr.com/public/6/productos/FEL03231015_1.webp?v=9363716", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL03231015_1.webp?v=9363716","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL03231015_2.webp?v=9363716","isMain":false}],
    desc:"Protección y comodidad adicional para tu colchón. Ajuste elástico e impermeable.", specs:{"Dimensiones:":"150 cm x 200 cm.","Material:":"Poliéster."} },
  { id:54, name:"Batidora Eléctrica De Mano", price:13500, stock:2, store:"divino", type:"hogar",
    img:"https://www.acopluscr.com/public/6/productos/FEL2512019_1.webp?v=9363716", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL2512019_1.webp?v=9363716","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL2512019_2.webp?v=9363716","isMain":false}],
    desc:"7 velocidades, incluye batidores de globo y ganchos metálicos. Conexión 110V.", specs:{"Color:":"Blanco con Negro.","Material:":"Plástico y Acero."} },
  { id:55, name:"Aspiradora Multifuncional Recargable", price:12000, stock:3, store:"divino", type:"hogar",
    img:"https://www.acopluscr.com/public/6/productos/FEL2512020_1.webp?v=9363716", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL2512020_1.webp?v=9363716","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL2512020_2.webp?v=9363716","isMain":false}],
    desc:"Filtro lavable, depósito fácil de vaciar. Batería recargable 12V con entrada Tipo C.", specs:{"Dimensiones:":"24cm x 22cm x 7cm.","Material:":"Plástico ABS."} },
  { id:56, name:"Horno Eléctrico 25L", price:25000, stock:11, store:"divino", type:"hogar",
    img:"https://www.acopluscr.com/public/6/productos/FEL012511046_1.webp?v=9363716", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL012511046_1.webp?v=9363716","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL012511046_2.webp?v=9363716","isMain":false},{"url":"https://www.acopluscr.com/public/6/productos/FEL012511046_3.webp?v=9363716","isMain":false}],
    desc:"25 litros, temperatura 90°C a 250°C, temporizador 60 min. Incluye bandeja y rejilla. 110V / 1500W.", specs:{"Color:":"Negro.","Material:":"Metal y Vidrio."} },
  { id:57, name:"Waflera Eléctrica", price:12000, stock:10, store:"divino", type:"hogar",
    img:"https://www.acopluscr.com/public/6/productos/FEL052511043_1.webp?v=9363716", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL052511043_1.webp?v=9363716","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL052511043_2.webp?v=9363716","isMain":false}],
    desc:"Placas antiadherentes, diseño compacto. Conexión 110V y potencia de 350W.", specs:{"Dimensiones:":"16cm x 12cm x 8cm.","Material:":"Metal y Plástico."} },
  { id:58, name:"Waflera Con Forma de Canasta", price:12500, stock:1, store:"divino", type:"hogar",
    img:"https://www.acopluscr.com/public/6/productos/FEL042511044_1.webp?v=9363716", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL042511044_1.webp?v=9363716","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL042511044_2.webp?v=9363716","isMain":false}],
    desc:"Waffles en forma de canasta. Placas antiadherentes, diseño compacto. 110V / 350W.", specs:{"Color:":"Turquesa.","Material:":"Metal y Plástico."} },
  { id:59, name:"Horno Eléctrico 12L", price:25000, stock:1, store:"divino", type:"hogar",
    img:"https://www.acopluscr.com/public/6/productos/FEL012511045_1.webp?v=9363716", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL012511045_1.webp?v=9363716","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL012511045_2.webp?v=9363716","isMain":false}],
    desc:"12 litros, hasta 230°C, temporizador 60 min. Incluye bandeja y rejilla metálicas. 110V.", specs:{"Dimensiones:":"32cm x 20cm x 18cm.","Material:":"Metal y Vidrio."} },
  { id:60, name:"Humificador Tipo Barco", price:20000, stock:1, store:"divino", type:"hogar",
    img:"https://www.acopluscr.com/public/6/productos/FEL2511036_1.webp?v=9363716", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL2511036_1.webp?v=9363716","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL2511036_2.webp?v=9363716","isMain":false}],
    desc:"Barco con luces RGB, vapor por las chimeneas. Control remoto para encender/apagar/cambiar colores/temporizador.", specs:{"Material:":"Plástico ABS."} },
  { id:61, name:"Zapatera Vertical", price:10000, stock:13, store:"divino", type:"hogar",
    img:"https://www.acopluscr.com/public/6/productos/FEL2403017_1.webp?v=9363716", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL2403017_1.webp?v=9363716","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL2403017_2.webp?v=9363716","isMain":false}],
    desc:"Diseño apilable para más espacio. Instalación sin herramientas.", specs:{"Dimensiones:":"Al:52.5, An:27, L:29.5","Material:":"Plástico ABS"} },
  { id:62, name:"Zapatera Plegable", price:15000, stock:5, store:"divino", type:"hogar",
    img:"https://www.acopluscr.com/public/6/productos/FEL2504009_1.webp?v=9363716", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL2504009_1.webp?v=9363716","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL2504009_2.webp?v=9363716","isMain":false}],
    desc:"Se pliega completamente cuando no está en uso. Ocupa el mínimo espacio.", specs:{"Color:":"Blanco - Transparente","Material:":"Plástico y Acrílico."} },
  { id:63, name:"Zacate Artificial 1x1m", price:9000, stock:20, store:"divino", type:"hogar",
    img:"https://www.acopluscr.com/public/6/productos/FEL2506032_1.webp?v=9363716", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL2506032_1.webp?v=9363716","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL2506032_2.webp?v=9363716","isMain":false}],
    desc:"Ideal para jardines, terrazas, balcones. Se puede cortar y adaptar para espacios irregulares.", specs:{"Material:":"Plástico PE."} },
  { id:64, name:"Zacate Artificial Económico", price:6000, stock:15, store:"divino", type:"hogar",
    img:"https://www.acopluscr.com/public/6/productos/FEL2506033_1.webp?v=9363716", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL2506033_1.webp?v=9363716","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL2506033_2.webp?v=9363716","isMain":false}],
    desc:"Ideal para decorar jardines, terrazas y balcones. Se puede cortar y adaptar.", specs:{"Dimensiones:":"1mtr x 1mtr x 15mm.","Material:":"Plástico PE."} },
  { id:65, name:"Utensilio de Cocina 2 en 1 Cuchillo y Tijera", price:10500, stock:3, store:"divino", type:"hogar",
    img:"https://www.acopluscr.com/public/6/productos/FEL2410011_1.webp?v=9363716", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL2410011_1.webp?v=9363716","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL2410011_2.webp?v=9363716","isMain":false},{"url":"https://www.acopluscr.com/public/6/productos/FEL2410011_3.webp?v=9363716","isMain":false}],
    desc:"Herramienta 6 en 1: cuchillo, tijeras, abrebotellas, cascanueces, pelador y sierra para pan.", specs:{"Color:":"Rojo con Negro.","Material:":"Acero inoxidable."} },
  { id:7, name:"NVIDIA RTX 4090 24GB", price:1100000, stock:4, store:"family", type:"tech",
    img:"https://m.media-amazon.com/images/I/61S4V6X7uYL._AC_SL1500_.jpg", gallery:[{"url":"https://m.media-amazon.com/images/I/61S4V6X7uYL._AC_SL1500_.jpg","isMain":true}],
    desc:"24 GB GDDR6X, maxima potencia grafica para gaming y creacion profesional.", specs:{"VRAM":"24 GB GDDR6X","Nucleos CUDA":"16384","TDP":"450 W","Interfaz":"PCIe 4.0 x16"} },
  { id:9, name:"iPhone 15 Pro Max 256GB", price:980000, stock:6, store:"family", type:"celulares",
    img:"https://images.unsplash.com/photo-1695048064029-b98bdf717f4b?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1695048064029-b98bdf717f4b?q=80&w=800","isMain":true},{"url":"https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800","isMain":false}],
    desc:"Titanio, camara 48MP con zoom optico 5x, chip A17 Pro. La experiencia iPhone mas avanzada.", specs:{"Chip":"A17 Pro","Camara":"48 MP triple + teleobjetivo 5x","Almacenamiento":"256 GB","Material":"Titanio grado 5","Pantalla":"6.7 Super Retina XDR"} },
  { id:10, name:"AirPods Pro 2da Gen", price:210000, stock:11, store:"family", type:"accesorios",
    img:"https://images.unsplash.com/photo-1606220838315-056192d5e927?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1606220838315-056192d5e927?q=80&w=800","isMain":true}],
    desc:"Cancelacion activa de ruido adaptativa, audio espacial y hasta 30h de bateria con el estuche.", specs:{"ANC":"Activa adaptativa H2","Bateria":"6h + 24h estuche","Chip":"H2","Resistencia":"IPX4"} },
  { id:74, name:"Samsung Galaxy S24 Ultra 256GB", price:890000, stock:5, store:"family", type:"celulares",
    img:"https://images.unsplash.com/photo-1706865886026-a6a0278c4e20?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1706865886026-a6a0278c4e20?q=80&w=800","isMain":true},{"url":"https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800","isMain":false}],
    desc:"S Pen integrado, camara 200MP, pantalla Dynamic AMOLED 2X de 6.8 pulgadas. Galaxy AI incluido.", specs:{"Procesador":"Snapdragon 8 Gen 3","RAM":"12 GB","Almacenamiento":"256 GB","S Pen":"Integrado"} },
  { id:75, name:"Xiaomi Redmi Note 13 Pro 256GB", price:285000, stock:12, store:"family", type:"celulares",
    img:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=800","isMain":true}],
    desc:"Camara principal 200MP, pantalla AMOLED 120Hz, carga rapida 67W. Rendimiento premium a precio justo.", specs:{"Chipset":"Snapdragon 7s Gen 2","RAM":"8 GB","Camara":"200 MP","Bateria":"5000 mAh","Carga":"67W"} },
  { id:76, name:"MacBook Air M2 13 pulgadas", price:1150000, stock:3, store:"family", type:"tech",
    img:"https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800","isMain":true},{"url":"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800","isMain":false}],
    desc:"Chip M2 con CPU 8 nucleos, pantalla Liquid Retina 13.6 pulgadas, hasta 18h de bateria. Sin ventilador.", specs:{"Chip":"Apple M2","RAM":"8 GB unificada","Almacenamiento":"256 GB SSD","Pantalla":"13.6 Liquid Retina","Bateria":"18 horas"} },
  { id:77, name:"iPad Air 11 M2 Wi-Fi 128GB", price:720000, stock:4, store:"family", type:"tech",
    img:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800","isMain":true}],
    desc:"Pantalla Liquid Retina 11 pulgadas, chip M2, compatible con Apple Pencil Pro y Magic Keyboard.", specs:{"Chip":"Apple M2","Pantalla":"11 pulgadas Liquid Retina","Almacenamiento":"128 GB"} },
  { id:78, name:"Samsung Galaxy Tab S9 FE Wi-Fi", price:420000, stock:7, store:"family", type:"tech",
    img:"https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=800","isMain":true}],
    desc:"Pantalla 10.9 Dynamic AMOLED, S Pen incluido, bateria 8000 mAh, resistente al agua IP68.", specs:{"RAM":"6 GB","S Pen":"Incluido","Bateria":"8000 mAh","Resistencia":"IP68"} },
  { id:79, name:"Sony WH-1000XM5 Audifonos ANC", price:320000, stock:8, store:"family", type:"accesorios",
    img:"https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=800","isMain":true},{"url":"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800","isMain":false}],
    desc:"La mejor cancelacion de ruido del mercado. 30h de bateria, ocho microfonos, audio de alta resolucion.", specs:{"ANC":"8 microfonos con V1 y QN1","Bateria":"30 horas con ANC","Conector":"USB-C + Jack 3.5mm","Peso":"250 g"} },
  { id:80, name:"Apple Watch Series 9 GPS 41mm", price:420000, stock:9, store:"family", type:"accesorios",
    img:"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=800","isMain":true}],
    desc:"Pantalla siempre activa, Siri en el dispositivo, temperatura corporal, ECG. Resistente al agua 50m.", specs:{"Chip":"S9 SiP","Pantalla":"LTPO OLED siempre activa","GPS":"L1 + L5","Agua":"50 m"} },
  { id:81, name:"Samsung Galaxy Buds3 Pro", price:175000, stock:15, store:"family", type:"accesorios",
    img:"https://images.unsplash.com/photo-1590658268037-6bf12165928e?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1590658268037-6bf12165928e?q=80&w=800","isMain":true}],
    desc:"ANC inteligente con 3 microfonos, audio de alta resolucion 24 bits, hasta 37h con el estuche.", specs:{"ANC":"3 microfonos por auricular","Bateria":"7h + 30h estuche","Resistencia":"IPX7"} },
  { id:82, name:"Cargador MagSafe 15W Original", price:55000, stock:20, store:"family", type:"accesorios",
    img:"https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=800","isMain":true}],
    desc:"Carga magnetica de 15W para iPhone 12 y superior. Alineacion perfecta y carga rapida certificada Apple.", specs:{"Potencia":"15W max","Compatibilidad":"iPhone 12, 13, 14, 15, 16","Cable":"USB-C 1m"} },
  { id:83, name:"Motorola Edge 50 Pro 256GB", price:380000, stock:10, store:"family", type:"celulares",
    img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=800","isMain":true}],
    desc:"Pantalla pOLED 144Hz, camara 50MP OIS, carga TurboPower 125W. Rapido y fiable.", specs:{"Chipset":"Snapdragon 7 Gen 3","RAM":"12 GB","Pantalla":"6.67 pOLED 144Hz","Carga":"125W"} },
  { id:84, name:"Nintendo Switch OLED 64GB", price:450000, stock:5, store:"family", type:"tech",
    img:"https://images.unsplash.com/photo-1589394716116-3571d1b08aef?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1589394716116-3571d1b08aef?q=80&w=800","isMain":true}],
    desc:"Pantalla OLED vibrante de 7 pulgadas, base con puerto LAN integrado, 64 GB de almacenamiento.", specs:{"Pantalla":"7 pulgadas OLED","Almacenamiento":"64 GB","Bateria":"4.5-9 horas"} },

  { id:86, name:"Samsung Galaxy Watch 7 44mm", price:295000, stock:7, store:"family", type:"accesorios",
    img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800",
    gallery:[{"url":"https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800","isMain":true},{"url":"https://images.unsplash.com/photo-1434493651957-4ec10c7b4d54?q=80&w=800","isMain":false},{"url":"https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=800","isMain":false}],
    desc:"Smartwatch con monitor de salud avanzado, GPS, sensor de temperatura corporal, BioActive y 40 horas de batería. Resistente al agua 5ATM.",
    specs:{"Pantalla":"1.5 pulg. Super AMOLED","Procesador":"Exynos W1000","RAM":"2 GB","Almacenamiento":"32 GB","Batería":"500 mAh","Resistencia":"5ATM + IP68","GPS":"L1+L5 de doble frecuencia"} },

  { id:87, name:"Teclado Mecánico RGB HyperX Alloy Origins", price:185000, stock:5, store:"family", type:"accesorios",
    img:"https://images.unsplash.com/photo-1595044426077-d36d9236d54a?q=80&w=800",
    gallery:[{"url":"https://images.unsplash.com/photo-1595044426077-d36d9236d54a?q=80&w=800","isMain":true},{"url":"https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800","isMain":false},{"url":"https://images.unsplash.com/photo-1541140532154-b024d705b90a?q=80&w=800","isMain":false}],
    desc:"Teclado mecánico compacto TKL con switches HyperX Red lineales, iluminación RGB per-tecla y software HyperX NGENUITY. Construcción de aluminio aeroespacial.",
    specs:{"Switches":"HyperX Red (lineal)","Iluminación":"RGB per-tecla","Conexión":"USB-C desmontable","Material":"Aluminio aeroespacial","Distribución":"TKL (87 teclas)","Polling Rate":"1000 Hz"} },

  { id:88, name:"Monitor Gaming 27\" 165Hz IPS", price:420000, stock:4, store:"family", type:"tech",
    img:"https://images.unsplash.com/photo-1527443224154-c4a573d50c0f?q=80&w=800",
    gallery:[{"url":"https://images.unsplash.com/photo-1527443224154-c4a573d50c0f?q=80&w=800","isMain":true},{"url":"https://images.unsplash.com/photo-1593152167544-085d3b9c4938?q=80&w=800","isMain":false}],
    desc:"Monitor IPS de 27 pulgadas con 165Hz y 1ms de respuesta. Perfecto para gaming competitivo y trabajo creativo. Compatible con AMD FreeSync Premium.",
    specs:{"Panel":"IPS","Resolución":"2560x1440 QHD","Frecuencia":"165 Hz","Tiempo de Respuesta":"1 ms GTG","HDR":"DisplayHDR 400","Conectividad":"2x HDMI 2.0 + 1x DisplayPort 1.4"} },

  { id:89, name:"Cámara de Seguridad 4K WiFi 360°", price:78000, stock:12, store:"family", type:"tech",
    img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800",
    gallery:[{"url":"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800","isMain":true},{"url":"https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800","isMain":false}],
    desc:"Cámara IP 360° con resolución 4K, visión nocturna a color, detección de movimiento por IA y almacenamiento en la nube. Compatible con Alexa y Google Home.",
    specs:{"Resolución":"4K (8MP)","Ángulo":"360° panorámico","Visión Nocturna":"A color hasta 10m","Conectividad":"WiFi 2.4GHz + 5GHz","Detección":"IA — personas, vehículos, mascotas","Almacenamiento":"MicroSD hasta 256GB + Nube"} },

  { id:90, name:"Altavoz Bluetooth JBL Charge 5", price:135000, stock:9, store:"family", type:"accesorios",
    img:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=800",
    gallery:[{"url":"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=800","isMain":true},{"url":"https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=800","isMain":false}],
    desc:"Altavoz portátil con 20h de batería, IP67 resistente al agua, potente bajo extra y función Power Bank para cargar tu celular. Tecnología PartyBoost para conectar múltiples bocinas.",
    specs:{"Batería":"20 horas","Resistencia":"IP67 (sumergible)","Salida":"30W","Bluetooth":"5.1","Power Bank":"Sí","PartyBoost":"Sí — múltiples JBL"} },

  { id:91, name:"SSD NVMe Samsung 980 Pro 1TB", price:115000, stock:8, store:"family", type:"tech",
    img:"https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=800",
    gallery:[{"url":"https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=800","isMain":true},{"url":"https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=800","isMain":false}],
    desc:"SSD NVMe PCIe 4.0 con velocidades de hasta 7000 MB/s en lectura. Ideal para gaming, edición de video 4K y profesionales que exigen máximo rendimiento.",
    specs:{"Capacidad":"1 TB","Interfaz":"PCIe 4.0 NVMe M.2","Lectura":"7000 MB/s","Escritura":"5000 MB/s","NAND":"Samsung V-NAND MLC","Garantía":"5 años"} },

  { id:92, name:"Meta Quest 3 128GB — VR Headset", price:690000, stock:3, store:"family", type:"tech",
    img:"https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=800",
    gallery:[{"url":"https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=800","isMain":true},{"url":"https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=800","isMain":false}],
    desc:"Headset de realidad mixta con pantallas de alta resolución, procesador Snapdragon XR2 Gen 2 y passthrough a color. Gaming VR, productividad y entretenimiento sin cables.",
    specs:{"Almacenamiento":"128 GB","Procesador":"Snapdragon XR2 Gen 2","Pantalla":"2064x2208 por ojo","FOV":"110° horizontal","Batería":"2-3 horas continuo","Passthrough":"A color (RGB)"} },

  { id:93, name:"Webcam Logitech MX Brio 4K", price:145000, stock:6, store:"family", type:"accesorios",
    img:"https://images.unsplash.com/photo-1587119161562-2d7f86cf4d3d?q=80&w=800",
    gallery:[{"url":"https://images.unsplash.com/photo-1587119161562-2d7f86cf4d3d?q=80&w=800","isMain":true},{"url":"https://images.unsplash.com/photo-1576502200916-3808e07386a5?q=80&w=800","isMain":false}],
    desc:"Webcam 4K con corrección de luz con IA, privacidad total (obturador físico), micrófono con cancelación de ruido y soporte de 90 fps en 1080p. Ideal para streaming y videollamadas.",
    specs:{"Resolución":"4K 30fps / 1080p 90fps","Campo Visual":"65° / 78° / 90° ajustable","Micrófono":"Doble, cancelación ruido IA","Privacidad":"Obturador físico","HDR":"Sí","Conexión":"USB-C"} },

  { id:94, name:"RAM DDR5 Corsair Vengeance 32GB", price:125000, stock:10, store:"family", type:"tech",
    img:"https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800",
    gallery:[{"url":"https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800","isMain":true},{"url":"https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800","isMain":false}],
    desc:"Kit de 32GB (2x16GB) DDR5 a 6000MHz con latencia CL36. Diseño de aluminio con iluminación RGB dinámica. Compatible con Intel Alder/Raptor Lake y AMD AM5.",
    specs:{"Capacidad":"32 GB (2x16GB)","Tipo":"DDR5","Velocidad":"6000 MHz","Latencia":"CL36","Voltaje":"1.35V","Iluminación":"RGB Capellix"} },

  { id:95, name:"Controlador Xbox Series X Carbon Black", price:98000, stock:15, store:"family", type:"accesorios",
    img:"https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?q=80&w=800",
    gallery:[{"url":"https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?q=80&w=800","isMain":true},{"url":"https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=800","isMain":false}],
    desc:"Control oficial Xbox con botón Share, gatillos con textura y palancas antideslizantes mejoradas. Compatible con Xbox Series X|S, Xbox One y PC vía Bluetooth o USB-C.",
    specs:{"Botón Share":"Sí","Conectividad":"Bluetooth + USB-C","Batería":"AA x2 (hasta 40h)","Compatible":"Xbox Series X/S, Xbox One, PC, Android, iOS","Vibración":"Rumble en gatillos"} },

  { id:96, name:"Laptop MSI Stealth 16 AI i9 RTX4080", price:2850000, stock:2, store:"family", type:"tech",
    img:"https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=800",
    gallery:[{"url":"https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=800","isMain":true},{"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800","isMain":false},{"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=800","isMain":false}],
    desc:"Laptop gaming ultra-delgada con Intel Core i9 de 14ª gen, RTX 4080 12GB, pantalla OLED 4K 120Hz y 32GB DDR5. La bestia para gaming, streaming y creación de contenido.",
    specs:{"CPU":"Intel Core i9-14900HX","GPU":"NVIDIA RTX 4080 12GB","RAM":"32 GB DDR5","Almacenamiento":"2 TB NVMe PCIe 5.0","Pantalla":"16\" OLED 4K 120Hz","Batería":"99.9 Wh"} },

  { id:85, name:"Power Bank 20000mAh 65W PD", price:52000, stock:18, store:"family", type:"accesorios",
    img:"https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=800","isMain":true}],
    desc:"20000mAh con carga rapida 65W PD, compatible con laptops. 2 USB-A + 1 USB-C + pantalla LCD.", specs:{"Capacidad":"20000 mAh","Carga":"65W PD","Puertos":"2x USB-A + 1x USB-C"} },

  { id:12, name:"Uñas Acrílicas", price:25000, stock:0, store:"elegance", type:"unas",
    img:"https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800","isMain":true}],
    desc:"Construcción completa en acrílico con diseño incluido. Incluye forma, limado, sellado y decoración.", specs:{} },
  { id:13, name:"Uñas en Gel", price:20000, stock:0, store:"elegance", type:"unas",
    img:"https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800","isMain":true}],
    desc:"Acabado natural y brillante de larga duración. Ideal para fortalecer y embellecer la uña natural.", specs:{} },
  { id:14, name:"Diseño de Cejas", price:8000, stock:0, store:"elegance", type:"cejas-pestanas",
    img:"https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?q=80&w=800","isMain":true}],
    desc:"Depilación y diseño personalizado según la forma de tu rostro.", specs:{} },
  { id:15, name:"Extensión de Pestañas", price:35000, stock:0, store:"elegance", type:"cejas-pestanas",
    img:"https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800","isMain":true}],
    desc:"Extensiones pelo a pelo para una mirada más intensa y profunda.", specs:{} },
  { id:18, name:"Limpieza Facial Profunda", price:22000, stock:0, store:"elegance", type:"facial",
    img:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800","isMain":true}],
    desc:"Limpieza completa de poros, extracción de comedones, vapor y mascarilla hidratante.", specs:{} },
  { id:20, name:"Tratamiento Anti-edad", price:40000, stock:0, store:"elegance", type:"facial",
    img:"https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800","isMain":true}],
    desc:"Protocolo de rejuvenecimiento con activos de alta concentración. Reduce líneas de expresión.", specs:{} },
  { id:21, name:"Control de Acné", price:28000, stock:0, store:"elegance", type:"facial",
    img:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800","isMain":true}],
    desc:"Tratamiento especializado para piel con acné. Limpieza profunda y peelings ácidos.", specs:{} },
  { id:22, name:"Micro Agujas", price:55000, stock:0, store:"elegance", type:"facial",
    img:"https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800","isMain":true}],
    desc:"Microdermoabrasión con agujas para estimular el colágeno. Mejora textura y poros.", specs:{} },
  { id:23, name:"Dermaplaning", price:30000, stock:0, store:"elegance", type:"facial",
    img:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800","isMain":true}],
    desc:"Exfoliación suave con bisturí para eliminar vello facial fino y células muertas.", specs:{} },
  { id:24, name:"Levantamiento de Glúteos", price:45000, stock:0, store:"elegance", type:"corporal",
    img:"https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=800","isMain":true}],
    desc:"Tratamiento no invasivo con radiofrecuencia y masaje modelador.", specs:{} },
  { id:25, name:"Reducción de Grasa", price:50000, stock:0, store:"elegance", type:"corporal",
    img:"https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=800","isMain":true}],
    desc:"Cavitación ultrasónica para romper células de grasa en zonas específicas.", specs:{} },
  { id:66, name:"Celulitis y Estrías", price:42000, stock:0, store:"elegance", type:"corporal",
    img:"https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=800","isMain":true}],
    desc:"Tratamiento combinado de presoterapia y radiofrecuencia para mejorar celulitis.", specs:{} },
  { id:67, name:"Secadora Leafless Single", price:17000, stock:12, store:"divino", type:"cosméticos",
    img:"https://www.acopluscr.com/public/6/productos/FEL2411028_1.webp?v=7923332", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL2411028_1.webp?v=7923332","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL2411028_2.webp?v=7923332","isMain":false}],
    desc:"Secadora de cabello con diseño moderno sin aspas que ofrece un secado rápido y eficiente protegiendo la fibra capilar.", specs:{"Material":"Plastico y Metal","Ajuste":"3 Temperaturas / 3 velocidades","Accesorios":"Boquilla magnaetica y holder"} },
  { id:68, name:"Secadora Kemei", price:25000, stock:7, store:"divino", type:"cosméticos",
    img:"https://www.acopluscr.com/public/6/productos/FEL210814_1.webp?v=7923332", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL210814_1.webp?v=7923332","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL210814_2.webp?v=7923332","isMain":false}],
    desc:"Su diseño aerodinámico permite un manejo cómodo, ideal para lograr acabados de salón cuidando la salud de tu cabello.", specs:{"Marca":"Kemei","Potencia":"1400W (Eficiencia Profesional)","Material":"Plastico ABS"} },
  { id:69, name:"Plancha Lizbella", price:22000, stock:8, store:"divino", type:"cosméticos",
    img:"https://www.acopluscr.com/public/6/productos/FLB-542_1.webp?v=7923332", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FLB-542_1.webp?v=7923332","isMain":true}],
    desc:"Plancha profesional con placas de turmalina cerámica que distribuyen el calor uniformemente, evitando daños por puntos calientes.", specs:{"Material":"Turmalina de ceramica","Temperatura":"200°C max"} },
  { id:70, name:"Plancha De Cabello", price:10500, stock:3, store:"divino", type:"cosméticos",
    img:"https://www.acopluscr.com/public/6/productos/FLB235_1.webp?v=7923332", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FLB235_1.webp?v=7923332","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FLB235_2.webp?v=7923332","isMain":false}],
    desc:"Plancha profesional de 1.5 pulgadas diseñada con canales y difusores de vapor para uso seguro en cabello húmedo o seco.", specs:{"Material":"Turmalina y Ceramica","Uso":"Cabello humedo y seco","Temperatura":"Ajustable hasta 220°C"} },
  { id:71, name:"Set Plancha y Rizadora Lizbella", price:23000, stock:4, store:"divino", type:"cosméticos",
    img:"https://www.acopluscr.com/public/6/productos/FSEP0601_1.webp?v=7923332", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FSEP0601_1.webp?v=7923332","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FSEP0601_2.webp?v=7923332","isMain":false},{"url":"https://www.acopluscr.com/public/6/productos/FSEP0601_3.webp?v=7923332","isMain":false}],
    desc:"¡Todo lo que necesitás para tu cabello! ✨ Set Lizbella con plancha de 230°C y rizadora para ondas perfectas. Incluye peine y bolso. ¡Liso o rizado en minutos!", specs:{"Material":"Plastico ABS","Temperatura":"230°C","Conexion":"110v"} },
  { id:72, name:"Plancha Lizbella Diamante", price:16000, stock:11, store:"divino", type:"cosméticos",
    img:"https://www.acopluscr.com/public/6/productos/FLB399_1.webp?v=7923332", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FLB399_1.webp?v=7923332","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FLB399_2.webp?v=7923332","isMain":false}],
    desc:"Plancha de pelo Digital Titanium con placas conductoras del calor, temperatura uniforme para alisar suavemente el cabello. Potencia de 40w, temperatura máxima de 450 °F y voltaje de 110v. Incluye un peine que mide 26.5cm y 2,54cm de ancho.", specs:{} },
  { id:73, name:"Plancha Aguacate Coco Conair", price:42000, stock:11, store:"divino", type:"cosméticos",
    img:"https://www.acopluscr.com/public/6/productos/FCOCS952BT_1.webp?v=7923332", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FCOCS952BT_1.webp?v=7923332","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FCOCS952BT_2.webp?v=7923332","isMain":false}],
    desc:"Plancha con placas recubiertas de cerámica infundida con aguacate y coco, para un cuidado y alisado excepcionales.", specs:{"Marca":"Conair","Color":"Verde Metalico","Material":"Plástico y Cerámica"} }
];

function getInventory() {
  // Use admin-saved inventory if available, otherwise use default
  try {
    var saved = localStorage.getItem('admin-inventory');
    if (saved) {
      var parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch(e) {}
  return DEFAULT_INVENTORY;
}

var inventory = getInventory();
window._inventory = inventory;



var cart = [];
try { cart = JSON.parse(localStorage.getItem('lm-cart') || '[]'); } catch(e) { cart = []; }

function saveCart() { localStorage.setItem('lm-cart', JSON.stringify(cart)); }

function addToCart(id) {
  inventory = getInventory(); window._inventory = inventory;
  var item = inventory.find(function(i) { return i.id === id; });
  if (!item) return;
  var existing = cart.find(function(i) { return i.id === id; });
  if (existing) { existing.qty = (existing.qty || 1) + 1; }
  else { cart.push({ id:item.id, name:item.name, price:item.price, img:item.img, store:item.store, qty:1 }); }
  saveCart(); refreshCartUI(); openCart(); showToast(item.name + ' añadido', 'success');
}

function removeFromCart(id) { cart = cart.filter(function(i){return i.id!==id;}); saveCart(); refreshCartUI(); }
function changeQty(id, delta) {
  var item = cart.find(function(i){return i.id===id;}); if(!item) return;
  item.qty = (item.qty||1) + delta;
  if(item.qty<=0){removeFromCart(id);return;}
  saveCart(); refreshCartUI();
}
function clearCart() { cart=[]; saveCart(); refreshCartUI(); }

function refreshCartUI() {
  var count = cart.reduce(function(s,i){return s+(i.qty||1);},0);
  document.querySelectorAll('.cart-count').forEach(function(el){
    el.textContent=count; el.classList.add('bump'); setTimeout(function(){el.classList.remove('bump');},300);
  });
  var wrap=document.getElementById('cart-items-wrap'); if(!wrap) return;
  if(cart.length===0){
    wrap.innerHTML='<div class="cart-empty"><div class="cart-empty-icon">◻</div><div>Tu bolsa está vacía</div></div>';
    document.querySelectorAll('#cart-total').forEach(function(el){el.textContent='0';}); return;
  }
  var grandTotal=0;
  var html=cart.map(function(item){
    var qty=item.qty||1; var lineTotal=item.price*qty; grandTotal+=lineTotal;
    return '<div class="cart-item">'+
      '<img class="cart-item-img" src="'+item.img+'" alt="'+item.name+'">'+
      '<div class="cart-item-info">'+
        '<div class="cart-item-name">'+item.name+'</div>'+
        '<div class="cart-item-price">₡'+lineTotal.toLocaleString()+'</div>'+
        '<div class="cart-qty-row">'+
          '<button class="qty-btn" onclick="changeQty('+item.id+',-1)">−</button>'+
          '<span class="qty-val">'+qty+'</span>'+
          '<button class="qty-btn" onclick="changeQty('+item.id+',1)">+</button>'+
        '</div></div>'+
      '<button class="cart-item-remove" onclick="removeFromCart('+item.id+')" title="Eliminar">✕</button></div>';
  }).join('');
  wrap.innerHTML=html;
  document.querySelectorAll('#cart-total').forEach(function(el){el.textContent=grandTotal.toLocaleString();});
}

function openCart(){document.getElementById('cart-panel').classList.add('open');var o=document.getElementById('cart-overlay');if(o)o.classList.add('open');}
function closeCart(){document.getElementById('cart-panel').classList.remove('open');var o=document.getElementById('cart-overlay');if(o)o.classList.remove('open');}
function toggleCart(){document.getElementById('cart-panel').classList.contains('open')?closeCart():openCart();}

function sendWhatsApp(){
  if(cart.length===0) return;
  if(window.saveOrderToAccount) window.saveOrderToAccount(cart);
  var total=cart.reduce(function(s,i){return s+i.price*(i.qty||1);},0);
  var lines=cart.map(function(i){var q=i.qty||1;return '• '+i.name+(q>1?' ×'+q:'')+' — ₡'+(i.price*q).toLocaleString();}).join('\n');
  var msg='¡Hola! Quiero hacer un pedido 🛍️\n\n'+lines+'\n\n*TOTAL: ₡'+total.toLocaleString()+'*';
  // Store-specific WhatsApp links
  var waLinks = {
    divino:   'https://api.whatsapp.com/message/LQMOAQKS3LFII1?autoload=1&app_absent=0&utm_source=ig',
    family:   'https://web.whatsapp.com/send?phone=50687443315&text=',
    elegance: 'https://api.whatsapp.com/message/FW6MOU7RBY2LJ1?autoload=1&app_absent=0&utm_source=ig'
  };
  var store = (window._currentStore || document.body.dataset.store || 'family');
  var waBase = waLinks[store] || waLinks.family;
  if (store === 'family') {
    window.open(waBase + encodeURIComponent(msg), '_blank');
  } else {
    window.open(waBase, '_blank');
  }
}

function showToast(msg,type){
  type=type||'info'; var wrap=document.getElementById('toast-wrap');
  if(!wrap){wrap=document.createElement('div');wrap.id='toast-wrap';document.body.appendChild(wrap);}
  var t=document.createElement('div'); t.className='toast toast-'+type;
  t.innerHTML='<span class="toast-icon">'+({success:'✓',info:'◈',error:'✕'}[type]||'◈')+'</span>'+msg;
  wrap.appendChild(t); requestAnimationFrame(function(){t.classList.add('show');});
  setTimeout(function(){t.classList.remove('show');setTimeout(function(){t.remove();},400);},2500);
}
window.showToast=showToast;

function initCursor(){
  if(window.__cursorInit) return;
  window.__cursorInit = true;

  var dot  = document.getElementById('cursor-dot');
  var ring = document.getElementById('cursor-ring');

  // On touch devices: hide custom cursor elements and do NOT apply cursor:none
  if(window.matchMedia('(pointer:coarse)').matches || !window.matchMedia('(hover:hover)').matches){
    if(dot)  dot.style.display  = 'none';
    if(ring) ring.style.display = 'none';
    // Restore normal cursor for touch users
    document.documentElement.style.cursor = 'auto';
    document.body.style.cursor = 'auto';
    return;
  }

  // Desktop: apply cursor:none to body only, then show custom cursor
  document.body.style.cursor = 'none';

  if(!dot){
    dot = document.createElement('div');
    dot.id = 'cursor-dot'; dot.className = 'cursor-dot';
    document.body.appendChild(dot);
  }
  if(!ring){
    ring = document.createElement('div');
    ring.id = 'cursor-ring'; ring.className = 'cursor-ring';
    document.body.appendChild(ring);
  }
  dot.style.cssText  += 'display:block;position:fixed;pointer-events:none;z-index:99999;';
  ring.style.cssText += 'display:block;position:fixed;pointer-events:none;z-index:99998;';

  var rx = window.innerWidth/2, ry = window.innerHeight/2;
  var mx = rx, my = ry, visible = false;

  document.addEventListener('mousemove', function(e){
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px'; dot.style.top = my + 'px';
    if(!visible){ visible = true; dot.style.opacity = '1'; ring.style.opacity = '1'; }
  });
  document.addEventListener('mouseleave', function(){
    dot.style.opacity = '0'; ring.style.opacity = '0'; visible = false;
  });
  document.addEventListener('mouseenter', function(){
    if(mx > 0){ dot.style.opacity = '1'; ring.style.opacity = '1'; visible = true; }
  });

  // Hover effect on interactive elements
  var hoverEls = 'a, button, [onclick], .product-card, .store-card, .filter-btn, .add-btn, .wish-btn, .recent-card, .related-card';
  document.addEventListener('mouseover', function(e){
    if(e.target.closest(hoverEls)){
      ring.style.width  = '56px'; ring.style.height = '56px';
      ring.style.borderColor = 'rgba(201,168,76,0.5)';
    }
  });
  document.addEventListener('mouseout', function(e){
    if(e.target.closest(hoverEls)){
      ring.style.width  = '36px'; ring.style.height = '36px';
      ring.style.borderColor = 'rgba(245,240,232,0.6)';
    }
  });

  (function loop(){
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(loop);
  })();
}

function initNav(){
  var nav=document.querySelector('nav'),btn=document.getElementById('back-to-top'),bar=document.getElementById('progress-bar');
  window.addEventListener('scroll',function(){
    var y=window.scrollY; if(nav)nav.classList.toggle('scrolled',y>50);
    if(btn)btn.classList.toggle('visible',y>400);
    if(bar){var h=document.documentElement.scrollHeight-window.innerHeight;bar.style.width=(h>0?y/h*100:0)+'%';}
  });
  if(btn)btn.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});
}

function getStockBadge(s){if(s===undefined||s===null)return '';if(s<=0)return '<span class="stock-badge urgent">AGOTADO</span>';if(s<=2)return '<span class="stock-badge urgent">¡ÚLTIMAS '+s+'!</span>';if(s<=5)return '<span class="stock-badge low">POCAS UNIDADES</span>';return '';}
function getStockClass(s){return(!s&&s!==0)||s>5?'ok':s<=2?'urgent':'low';}
function getStockLabel(s){if(s===undefined||s===null)return'Disponible';if(s<=0)return'AGOTADO';if(s<=2)return'¡Últimas '+s+' unidades!';if(s<=5)return'Pocas unidades ('+s+')';return s+' en stock';}

var recentViews=[];try{recentViews=JSON.parse(localStorage.getItem('lm-recent')||'[]');}catch(e){}
function addRecentView(item){recentViews=recentViews.filter(function(i){return i.id!==item.id;});recentViews.unshift({id:item.id,name:item.name,img:item.img,price:item.price,store:item.store});if(recentViews.length>8)recentViews.pop();localStorage.setItem('lm-recent',JSON.stringify(recentViews));}
function renderRecentViews(storeKey){var section=document.getElementById('recent-views-section');if(!section)return;var rel=recentViews.filter(function(i){return i.store===storeKey;}).slice(0,6);if(rel.length<2){section.style.display='none';return;}section.style.display='block';var grid=section.querySelector('.recent-grid');if(grid)grid.innerHTML=rel.map(function(item){return '<div class="recent-card" onclick="openModal('+item.id+')">'+'<img src="'+item.img+'" alt="'+item.name+'" loading="lazy">'+'<div class="recent-name">'+item.name+'</div>'+'<div class="recent-price">₡'+item.price.toLocaleString()+'</div></div>';}).join('');}

// ── GALERÍA EN MODAL ──────────────────────────────────────────────────────────
function getGalleryUrls(item) {
  if (item.gallery && item.gallery.length > 0) return item.gallery.map(function(g){return g.url;});
  return item.img ? [item.img] : [];
}
function getMainImg(item) {
  if (item.gallery && item.gallery.length > 0) {
    var m = item.gallery.find(function(g){return g.isMain;});
    return m ? m.url : item.gallery[0].url;
  }
  return item.img || '';
}

var _modalGallery = [];
var _modalGalleryIdx = 0;

function renderModalGallery(urls, activeIdx) {
  _modalGallery = urls; _modalGalleryIdx = activeIdx;
  var wrap = document.getElementById('modal-gallery-wrap');
  if (!wrap) return;
  var mainImg = urls[activeIdx];
  var thumbsHTML = urls.length > 1
    ? '<div class="modal-thumbs">' +
      urls.map(function(u, i){
        return '<div class="modal-thumb '+(i===activeIdx?'active':'')+'" onclick="switchModalImg('+i+')">'+'<img src="'+u+'" alt="foto '+(i+1)+'"></div>';
      }).join('') +
      '</div>' : '';

  wrap.innerHTML =
    '<div class="modal-img-wrap" id="modal-main-img-wrap" onclick="zoomImg(''+mainImg+'')" style="cursor:zoom-in;">'+
      '<img id="modal-main-img" src="'+mainImg+'" alt="">'+
      '<div class="modal-zoom-hint">CLICK PARA AMPLIAR</div>'+
      (urls.length>1?'<button class="modal-gallery-prev" onclick="event.stopPropagation();switchModalImg('+((activeIdx-1+urls.length)%urls.length)+')">‹</button>'+
                     '<button class="modal-gallery-next" onclick="event.stopPropagation();switchModalImg('+((activeIdx+1)%urls.length)+')">›</button>':'') +
    '</div>' + thumbsHTML;
}

function switchModalImg(idx) {
  _modalGalleryIdx = idx;
  // Actualizar imagen principal
  var img = document.getElementById('modal-main-img');
  if (img) {
    img.style.opacity='0'; img.style.transition='opacity 0.2s';
    setTimeout(function(){ img.src = _modalGallery[idx]; img.style.opacity='1'; }, 180);
  }
  // Actualizar wrap onclick para zoom
  var wrap = document.getElementById('modal-main-img-wrap');
  if (wrap) wrap.setAttribute('onclick', 'zoomImg(''+_modalGallery[idx]+'')');
  // Actualizar prev/next
  var prev = wrap && wrap.querySelector('.modal-gallery-prev');
  var next = wrap && wrap.querySelector('.modal-gallery-next');
  if (prev) prev.setAttribute('onclick', 'event.stopPropagation();switchModalImg('+((idx-1+_modalGallery.length)%_modalGallery.length)+')');
  if (next) next.setAttribute('onclick', 'event.stopPropagation();switchModalImg('+((idx+1)%_modalGallery.length)+')');
  // Actualizar thumbs activos
  document.querySelectorAll('.modal-thumb').forEach(function(t,i){ t.classList.toggle('active',i===idx); });
}

function openModal(id){
  inventory=getInventory();window._inventory=inventory;
  var item=inventory.find(function(i){return i.id===id;});if(!item)return;
  addRecentView(item);if(window._currentStore)renderRecentViews(window._currentStore);

  var favs=window.getFavorites?window.getFavorites():JSON.parse(localStorage.getItem('lm-wishlist')||'[]');
  var inWish=favs.includes(item.id);
  var related=inventory.filter(function(i){return i.store===item.store&&i.type===item.type&&i.id!==item.id;}).slice(0,3);

  var specsHTML='';
  if(item.specs&&Object.keys(item.specs).length>0){
    specsHTML='<div class="modal-specs"><div class="modal-specs-title">ESPECIFICACIONES</div>'+
      Object.entries(item.specs).map(function(p){return '<div class="modal-spec-row"><span class="spec-key">'+p[0]+'</span><span class="spec-val">'+p[1]+'</span></div>';}).join('')+
    '</div>';
  }

  var relatedHTML=related.length>0?'<div class="modal-related"><div class="modal-related-title">TAMBIÉN TE PUEDE GUSTAR</div><div class="related-grid">'+related.map(function(r){return '<div class="related-card" onclick="openModal('+r.id+')">'+'<img src="'+r.img+'" alt="'+r.name+'" loading="lazy">'+'<div class="related-name">'+r.name+'</div>'+'<div class="related-price">₡'+r.price.toLocaleString()+'</div></div>';}).join('')+'</div></div>':'';

  var galleryUrls = getGalleryUrls(item);
  var mainIdx = item.gallery ? item.gallery.findIndex(function(g){return g.isMain;}) : 0;
  if (mainIdx < 0) mainIdx = 0;

  var modal=document.getElementById('product-modal');
  modal.innerHTML=
    '<div class="modal-backdrop" onclick="closeModal()"></div>'+
    '<div class="modal-box">'+
      '<button class="modal-close" onclick="closeModal()">✕</button>'+
      '<div class="modal-inner">'+
        '<div class="modal-left"><div id="modal-gallery-wrap"></div></div>'+
        '<div class="modal-right">'+
          '<div class="modal-meta">'+
            '<span class="modal-tag tag-'+item.type+'">'+item.type.toUpperCase()+'</span>'+
            '<button class="modal-share-btn" onclick="shareProduct('+item.id+')">COMPARTIR ↗</button>'+
          '</div>'+
          '<div class="modal-name">'+item.name+'</div>'+
          '<div class="modal-price">₡'+item.price.toLocaleString()+'</div>'+
          '<div class="modal-stock '+getStockClass(item.stock)+'">'+getStockLabel(item.stock)+'</div>'+
          '<div class="modal-desc">'+item.desc+'</div>'+
          specsHTML+
          '<div class="modal-actions">'+
            '<button class="btn-modal-add" onclick="addToCart('+item.id+');closeModal()"><span>AGREGAR A LA BOLSA</span></button>'+
            '<button class="btn-modal-wish '+(inWish?'wishlisted':'')+'" data-wish="'+item.id+'" onclick="wishFromModal('+item.id+',this)">♡</button>'+
          '</div>'+
          relatedHTML+
        '</div>'+
      '</div>'+
    '</div>';

  // Inyectar estilos de galería si no existen
  if (!document.getElementById('gallery-modal-styles')) {
    var st = document.createElement('style');
    st.id = 'gallery-modal-styles';
    st.textContent = `
      .modal-thumbs { display:flex; gap:6px; margin-top:10px; flex-wrap:wrap; }
      .modal-thumb { width:56px; height:56px; border:1px solid rgba(245,240,232,0.1); overflow:hidden; cursor:pointer; transition:border-color 0.2s; flex-shrink:0; }
      .modal-thumb img { width:100%; height:100%; object-fit:contain; }
      .modal-thumb.active { border-color:var(--gold,#c9a84c); }
      .modal-thumb:hover { border-color:rgba(201,168,76,0.5); }
      .modal-gallery-prev,.modal-gallery-next {
        position:absolute; top:50%; transform:translateY(-50%);
        background:rgba(8,8,8,0.6); border:1px solid rgba(245,240,232,0.15);
        color:#fff; width:32px; height:32px; font-size:1.2rem;
        cursor:pointer; display:flex; align-items:center; justify-content:center;
        transition:background 0.2s; z-index:3;
      }
      .modal-gallery-prev { left:6px; }
      .modal-gallery-next { right:6px; }
      .modal-gallery-prev:hover,.modal-gallery-next:hover { background:rgba(201,168,76,0.3); }
    `;
    document.head.appendChild(st);
  }

  renderModalGallery(galleryUrls, mainIdx);
  modal.classList.add('open'); document.body.style.overflow='hidden';
}

function wishFromModal(id,btn){var added=window.toggleFavorite?window.toggleFavorite(id):false;btn.classList.toggle('wishlisted',added);showToast(added?'Guardado en favoritos':'Eliminado de favoritos','info');}
function closeModal(){var m=document.getElementById('product-modal');if(m)m.classList.remove('open');document.body.style.overflow='';}
function zoomImg(src){var o=document.getElementById('img-zoom-overlay');if(!o){o=document.createElement('div');o.id='img-zoom-overlay';o.innerHTML='<div class="zoom-backdrop"></div><img>';o.addEventListener('click',function(){o.classList.remove('open');});document.body.appendChild(o);}o.querySelector('img').src=src;o.classList.add('open');}
function shareProduct(id){var item=inventory.find(function(i){return i.id===id;});if(!item)return;if(navigator.share)navigator.share({title:item.name,text:item.name+' — ₡'+item.price.toLocaleString(),url:window.location.href}).catch(function(){});else navigator.clipboard.writeText(item.name+' — ₡'+item.price.toLocaleString()).then(function(){showToast('Copiado','info');}).catch(function(){});}
document.addEventListener('keydown',function(e){
  if(e.key==='Escape'){closeModal();closeCart();}
  if(e.key==='ArrowLeft'&&_modalGallery.length>1)switchModalImg((_modalGalleryIdx-1+_modalGallery.length)%_modalGallery.length);
  if(e.key==='ArrowRight'&&_modalGallery.length>1)switchModalImg((_modalGalleryIdx+1)%_modalGallery.length);
});

function buildStore(storeKey){
  inventory=getInventory();window._inventory=inventory;window._currentStore=storeKey;
  var params=new URLSearchParams(window.location.search);
  var typeFilter=params.get('type')||'all',searchVal=(params.get('q')||'').toLowerCase(),sortVal=params.get('sort')||'';
  document.querySelectorAll('.filter-btn').forEach(function(btn){btn.classList.toggle('active',btn.dataset.type===typeFilter);});
  var si=document.getElementById('search-input');if(si&&searchVal)si.value=searchVal;
  var filtered=inventory.filter(function(item){
    return item.store===storeKey&&(typeFilter==='all'||item.type===typeFilter)&&
      (!searchVal||item.name.toLowerCase().includes(searchVal)||(item.desc||'').toLowerCase().includes(searchVal)||item.type.toLowerCase().includes(searchVal));
  });
  if(sortVal==='price-asc')filtered.sort(function(a,b){return a.price-b.price;});
  if(sortVal==='price-desc')filtered.sort(function(a,b){return b.price-a.price;});
  if(sortVal==='name')filtered.sort(function(a,b){return a.name.localeCompare(b.name);});
  if(sortVal==='newest')filtered.sort(function(a,b){return b.id-a.id;});
  renderGrid(filtered);renderRecentViews(storeKey);
}

function renderGrid(items){
  var grid=document.getElementById('product-grid');if(!grid)return;
  if(items.length===0){grid.innerHTML='<div class="no-results">Sin productos · <em>prueba con otro filtro</em></div>';return;}
  var favs=window.getFavorites?window.getFavorites():JSON.parse(localStorage.getItem('lm-wishlist')||'[]');
  grid.innerHTML=items.map(function(item){
    var inWish=favs.includes(item.id),hasSpecs=item.specs&&Object.keys(item.specs).length>0;
    var mainImg=getMainImg(item);
    var galleryCount=item.gallery?item.gallery.length:1;
    return '<div class="product-card reveal-card">'+getStockBadge(item.stock)+
      '<button class="wish-btn '+(inWish?'wishlisted':'')+'" data-wish="'+item.id+'" onclick="cardWish('+item.id+',this)" title="Guardar">♡</button>'+
      '<div class="product-img-wrap">'+
        '<img src="'+mainImg+'" alt="'+item.name+'" loading="lazy">'+
        (galleryCount>1?'<div class="product-gallery-dot">📷 '+galleryCount+'</div>':'')+
        '<div class="product-img-overlay" onclick="openModal('+item.id+')"><span>VER DETALLES</span></div>'+
      '</div>'+
      '<span class="product-tag tag-'+item.type+'">'+item.type.toUpperCase()+'</span>'+
      '<div class="product-name">'+item.name+'</div>'+
      '<div class="product-price">₡'+item.price.toLocaleString()+'</div>'+
      '<p class="product-desc">'+item.desc+'</p>'+
      (hasSpecs?'<button class="add-btn" style="margin-bottom:10px;border-color:rgba(245,240,232,0.1);" onclick="openModal('+item.id+')"><span>VER ESPECIFICACIONES</span></button>':'')+
      '<button class="add-btn" onclick="addToCart('+item.id+')"><span>AGREGAR A LA BOLSA</span></button>'+
    '</div>';
  }).join('');

  // Inyectar estilo de badge de galería si no existe
  if(!document.getElementById('gallery-badge-style')){
    var s=document.createElement('style'); s.id='gallery-badge-style';
    s.textContent='.product-gallery-dot{position:absolute;bottom:8px;right:8px;font-size:0.6rem;background:rgba(8,8,8,0.75);color:rgba(245,240,232,0.7);padding:3px 7px;letter-spacing:1px;pointer-events:none;}';
    document.head.appendChild(s);
  }

  var observer=new IntersectionObserver(function(entries){entries.forEach(function(e,i){if(e.isIntersecting){setTimeout(function(){e.target.classList.add('revealed');},i*55);observer.unobserve(e.target);}});},{threshold:0.06});
  grid.querySelectorAll('.reveal-card').forEach(function(c){observer.observe(c);});
}

function cardWish(id,btn){var added=window.toggleFavorite?window.toggleFavorite(id):false;btn.classList.toggle('wishlisted',added);showToast(added?'Guardado en favoritos':'Eliminado','info');}
function filterStore(type,storeKey){var url=new URL(window.location);url.searchParams.set('type',type);url.searchParams.delete('q');history.replaceState({},'',url);buildStore(storeKey);}
function onSearch(val,storeKey){var url=new URL(window.location);if(val)url.searchParams.set('q',val);else url.searchParams.delete('q');history.replaceState({},'',url);buildStore(storeKey);}
function sortProducts(val,storeKey){var url=new URL(window.location);if(val)url.searchParams.set('sort',val);else url.searchParams.delete('sort');history.replaceState({},'',url);buildStore(storeKey);}

window.addEventListener('DOMContentLoaded',function(){
  initCursor();initNav();refreshCartUI();
  if(document.body.dataset.store)buildStore(document.body.dataset.store);
});
