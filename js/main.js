// ═══════════════════════════════════════════════════════════
// MAIN.JS — Luxury Mall · v4 (auto-generado por Admin)
// ═══════════════════════════════════════════════════════════

const DEFAULT_INVENTORY = [
  { id:1, name:"Saco 'Cielo' Silk-Line", price:285000, stock:8, store:"divino", type:"moda",
    img:"https://images.unsplash.com/photo-1594932224456-80697a3288d8?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1594932224456-80697a3288d8?q=80&w=800","isMain":true}],
    desc:"Saco de seda fría, corte estructurado, forro de lujo.", specs:{"Material":"Seda fría premium","Corte":"Estructurado","Forro":"Lujo","Origen":"Colombia"} },
  { id:2, name:"Vestido Gala Nightfall", price:320000, stock:3, store:"divino", type:"moda",
    img:"https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800","isMain":true}],
    desc:"Vestido de noche, caída perfecta, exclusivo.", specs:{"Silueta":"A-line","Tela":"Chifón","Largo":"Maxi","Ocasión":"Gala / Noche"} },
  { id:3, name:"MacBook Pro M3 Elite", price:1850000, stock:5, store:"divino", type:"tech",
    img:"https://intelec.co.cr/wp-content/uploads/2023/11/APPLE-MACBOOK-PRO-M3.jpg", gallery:[{"url":"https://intelec.co.cr/wp-content/uploads/2023/11/APPLE-MACBOOK-PRO-M3.jpg","isMain":true}],
    desc:"Chip M3, 18 GB RAM, pantalla Liquid Retina XDR.", specs:{"Chip":"Apple M3","RAM":"18 GB","Almacenamiento":"512 GB SSD","Pantalla":"Liquid Retina XDR 14\""} },
  { id:4, name:"Camisa Lino 'Nube'", price:95000, stock:12, store:"divino", type:"moda",
    img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800","isMain":true}],
    desc:"Lino premium, bordado artesanal.", specs:{"Material":"Lino premium","Bordado":"Artesanal","Cuello":"Clásico","Tallas":"XS–XL"} },
  { id:5, name:"Bolso Cuero Artesanal", price:210000, stock:2, store:"divino", type:"moda",
    img:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800","isMain":true}],
    desc:"Cuero genuino, costura a mano, edición limitada.", specs:{"Material":"Cuero genuino","Costura":"A mano","Edición":"Limitada","Dimensiones":"32 × 24 × 10 cm"} },
  { id:6, name:"Victoria's Secret Amber Romance", price:10000, stock:20, store:"divino", type:"fragancias",
    img:"https://es.victoriassecret.com/p/1000x1333/png/zz/25/02/12/00/112592030037_OM_F.jpg", gallery:[{"url":"https://es.victoriassecret.com/p/1000x1333/png/zz/25/02/12/00/112592030037_OM_F.jpg","isMain":true}],
    desc:"Ámbar resinoso y crema de vainilla.", specs:{"Familia":"Oriental","Notas base":"Ámbar, Vainilla","Notas corazón":"Gardenia","Presentación":"Loción 250 ml"} },
  { id:7, name:"NVIDIA RTX 4090 Lab", price:1100000, stock:4, store:"family", type:"tech",
    img:"https://m.media-amazon.com/images/I/61S4V6X7uYL._AC_SL1500_.jpg", gallery:[{"url":"https://m.media-amazon.com/images/I/61S4V6X7uYL._AC_SL1500_.jpg","isMain":true}],
    desc:"24 GB GDDR6X, máxima potencia gráfica.", specs:{"VRAM":"24 GB GDDR6X","Núcleos CUDA":"16384","TDP":"450 W","Interfaz":"PCIe 4.0 x16"} },
  { id:8, name:"Teclado Custom 'Cell'", price:145000, stock:7, store:"family", type:"tech",
    img:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800","isMain":true}],
    desc:"Switches mecánicos Cherry MX, aluminio CNC.", specs:{"Switches":"Cherry MX Red","Cuerpo":"Aluminio CNC","Conectividad":"USB-C","Retroiluminación":"RGB"} },
  { id:9, name:"iPhone 15 Pro Max", price:980000, stock:6, store:"family", type:"celulares",
    img:"https://images.unsplash.com/photo-1695048064029-b98bdf717f4b?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1695048064029-b98bdf717f4b?q=80&w=800","isMain":true}],
    desc:"Titanio, cámara 48MP, chip A17 Pro.", specs:{"Chip":"A17 Pro","Cámara":"48 MP triple","Almacenamiento":"256 GB","Material":"Titanio grado 5"} },
  { id:10, name:"AirPods Pro 2 Gen", price:210000, stock:11, store:"family", type:"accesorios",
    img:"https://images.unsplash.com/photo-1606220838315-056192d5e927?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1606220838315-056192d5e927?q=80&w=800","isMain":true}],
    desc:"Cancelación activa de ruido, audio espacial.", specs:{"ANC":"Activa adaptativa","Audio":"Espacial personalizado","Batería":"6h + 24h estuche","Chip":"H2"} },
  { id:11, name:"Monitor 4K OLED 32\"", price:620000, stock:3, store:"family", type:"tech",
    img:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800","isMain":true}],
    desc:"OLED, 120Hz, HDR True Black 400.", specs:{"Panel":"OLED","Resolución":"3840×2160","Tasa de refresco":"120 Hz","HDR":"True Black 400"} },
  { id:12, name:"Unas Acrilicas", price:25000, stock:0, store:"elegance", type:"unas",
    img:"https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800","isMain":true}],
    desc:"Construccion completa en acrilico con diseno incluido. Incluye forma, limado, sellado y decoracion a eleccion.", specs:{} },
  { id:13, name:"Unas en Gel", price:20000, stock:0, store:"elegance", type:"unas",
    img:"https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800","isMain":true}],
    desc:"Acabado natural y brillante de larga duracion. Ideal para fortalecer y embellecer la una natural.", specs:{} },
  { id:14, name:"Diseno de Cejas", price:8000, stock:0, store:"elegance", type:"cejas-pestanas",
    img:"https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?q=80&w=800","isMain":true}],
    desc:"Depilacion y diseno personalizado segun la forma de tu rostro.", specs:{} },
  { id:15, name:"Extension de Pestanas", price:35000, stock:0, store:"elegance", type:"cejas-pestanas",
    img:"https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800","isMain":true}],
    desc:"Extensiones pelo a pelo para una mirada mas intensa y profunda.", specs:{} },
  { id:16, name:"Victoria's Secret Romance", price:10000, stock:15, store:"divino", type:"fragancias",
    img:"https://victoriassecretbeautycr.vtexassets.com/arquivos/ids/172845-1200-1600?v=638030941474070000&width=1200&height=1600&aspect=true", gallery:[{"url":"https://victoriassecretbeautycr.vtexassets.com/arquivos/ids/172845-1200-1600?v=638030941474070000&width=1200&height=1600&aspect=true","isMain":true}],
    desc:"Petalos de rosa. Almizcle puro.", specs:{"Familia":"Floral","Notas base":"Almizcle blanco","Notas corazon":"Rosa, Lila","Presentacion":"Locion 250 ml"} },
  { id:17, name:"Victoria's Secret Romantic", price:10000, stock:18, store:"divino", type:"fragancias",
    img:"https://cdnx.jumpseller.com/la-perfumeria-cl/image/69524237/resize/540/540?1762793584", gallery:[{"url":"https://cdnx.jumpseller.com/la-perfumeria-cl/image/69524237/resize/540/540?1762793584","isMain":true}],
    desc:"Floral - clasico, femenino y delicado.", specs:{"Familia":"Floral","Notas base":"Sandalo","Notas corazon":"Jazmin, Rosa","Presentacion":"Locion 250 ml"} },
  { id:18, name:"Limpieza Facial Profunda", price:22000, stock:0, store:"elegance", type:"facial",
    img:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800","isMain":true}],
    desc:"Limpieza completa de poros, extraccion de comedones, vapor y mascarilla hidratante.", specs:{} },
  { id:19, name:"Tratamiento Anti-edad", price:40000, stock:0, store:"elegance", type:"facial",
    img:"https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800","isMain":true}],
    desc:"Protocolo de rejuvenecimiento con activos de alta concentracion. Reduce lineas de expresion.", specs:{} },
  { id:20, name:"Control de Acne", price:28000, stock:0, store:"elegance", type:"facial",
    img:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800","isMain":true}],
    desc:"Tratamiento especializado para piel con acne. Limpieza profunda y peelings acidos.", specs:{} },
  { id:21, name:"Micro Agujas", price:55000, stock:0, store:"elegance", type:"facial",
    img:"https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800","isMain":true}],
    desc:"Microdermoabrasion con agujas para estimular el colageno. Mejora textura y poros.", specs:{} },
  { id:22, name:"Dermaplaning", price:30000, stock:0, store:"elegance", type:"facial",
    img:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800","isMain":true}],
    desc:"Exfoliacion suave con bisturi para eliminar vello facial fino y celulas muertas.", specs:{} },
  { id:23, name:"Levantamiento de Gluteos", price:45000, stock:0, store:"elegance", type:"corporal",
    img:"https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=800","isMain":true}],
    desc:"Tratamiento no invasivo con radiofrecuencia y masaje modelador.", specs:{} },
  { id:24, name:"Reduccion de Grasa", price:50000, stock:0, store:"elegance", type:"corporal",
    img:"https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=800","isMain":true}],
    desc:"Cavitacion ultrasonica para romper celulas de grasa en zonas especificas.", specs:{} },
  { id:25, name:"Celulitis y Estrias", price:42000, stock:0, store:"elegance", type:"corporal",
    img:"https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=800", gallery:[{"url":"https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=800","isMain":true}],
    desc:"Tratamiento combinado de presoterapia y radiofrecuencia para mejorar celulitis.", specs:{} },
  { id:26, name:"Secadora KEMEI", price:22000, stock:10, store:"divino", type:"cosméticos",
    img:"https://www.acopluscr.com/public/6/productos/FEL210814_1.webp?v=7923332", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL210814_1.webp?v=7923332","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL210814_2.webp?v=7923332","isMain":false}],
    desc:"Voltaje: 220V. Frecuencia: 50Hz. Potencia: 1400W. Mango aerodinámico. Incluye 2 boquillas extra.", specs:{"Marca":"Kemei"} },
  { id:27, name:"Secadora Kemei", price:26000, stock:10, store:"divino", type:"cosméticos",
    img:"https://www.acopluscr.com/public/6/productos/FEL210815_1.webp?v=7923332", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL210815_1.webp?v=7923332","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL210815_2.webp?v=7923332","isMain":false}],
    desc:"Voltaje: 220V. Frecuencia: 50Hz. Potencia: 3000W. Incluye 2 boquillas extra.", specs:{"Material":"Plastico ABS"} },
  { id:28, name:"Trimmer Vintage", price:8000, stock:10, store:"divino", type:"barberia",
    img:"https://www.acopluscr.com/public/6/productos/FEL2307211_1.webp?v=7923332", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL2307211_1.webp?v=7923332","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL2307211_2.webp?v=7923332","isMain":false}],
    desc:"Es fácil de usar, tanto para principiantes como para personas con experiencia. Se carga en 2 horas y tiene 180 minutos de uso continuo. Es de uso en seco y viene con cable de carga, 4 guías (1.5mm, 2mm, 3mm y 4mm), aceite y cepillo de limpieza.", specs:{"Color":"Bronce y Dorado","Material":"Metal"} },
  { id:29, name:"Clipper Remington", price:28000, stock:10, store:"divino", type:"barberia",
    img:"https://www.acopluscr.com/public/6/productos/FHC1080_1.webp?v=7923332", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FHC1080_1.webp?v=7923332","isMain":true}],
    desc:"La Remington Grooming Kit tiene cuchillas de acero inoxidable de calidad profesional para mayor comodidad. Viene con 13 piezas, incluyendo peines de guía y aceite lubricante, y su motor potente corta todo tipo de cabello y es de uso con cable.", specs:{} },
  { id:30, name:"Trimmer Surker", price:13500, stock:10, store:"divino", type:"barberia",
    img:"https://www.acopluscr.com/public/6/productos/F6004_1.webp?v=7923332", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/F6004_1.webp?v=7923332","isMain":true}],
    desc:"Máquina profesional con motor potente y cuchillas de acero inoxidable para cortes precisos y fluidos sin tirones. Incluye 4 peines guía, batería recargable vía USB con 45 minutos de autonomía y un diseño ergonómico compacto. Es la herramienta ideal para detallar barbas, realizar degradados y mantener el estilo con máxima versatilidad.", specs:{} },
  { id:31, name:"Rasuradora con accesorios", price:8000, stock:5, store:"divino", type:"barberia",
    img:"https://www.acopluscr.com/public/6/productos/FN115596_1.webp?v=7923332", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FN115596_1.webp?v=7923332","isMain":true}],
    desc:"Cortadora de pelo recargable con hoja chapada en titanio y hoja móvil ajustable para cortes de 3 a 12 mm. Inalámbrica, con hasta 150 minutos de uso tras carga de 3 horas. Hoja de acero inoxidable de alto rendimiento y peine ajustable para cortes prec", specs:{"Material de hoja":"Acero"} },
  { id:32, name:"Rasuradora Para Bebe WaterProof", price:17000, stock:3, store:"divino", type:"barberia",
    img:"https://www.acopluscr.com/public/6/productos/FEL220609007_1.webp?v=7923332", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL220609007_1.webp?v=7923332","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL220609007_2.webp?v=7923332","isMain":false}],
    desc:"Motor ultra silencioso con vibración reducida para no asustar al bebé y cuchillas de cerámica con puntas redondeadas que protegen la piel sensible. Cuenta con carga rápida de 1.5 horas vía USB, batería de litio de alto rendimiento para 50 minutos de uso y es totalmente impermeable para facilitar su limpieza. Incluye peines guía de diferentes medidas, capa y kit de mantenimiento en un diseño ergonómico y seguro.", specs:{"Tiempo de Uso":"50 Minutos","Tipo De Cargador":"USB","Ajuste":"Ajustable Con Guias"} },
  { id:33, name:"Plancha De Cabello Diamante", price:17000, stock:3, store:"divino", type:"cosméticos",
    img:"https://www.acopluscr.com/public/6/productos/FLB399_1.webp?v=7923332", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FLB399_1.webp?v=7923332","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FLB399_2.webp?v=7923332","isMain":false}],
    desc:"Plancha de pelo Digital Titanium con placas conductoras del calor, temperatura uniforme para alisar suavemente el cabello.", specs:{"Potencia":"40w","Temperatura Maxima":"450 °F"} },
  { id:34, name:"Planha + Rizadora Set", price:24000, stock:5, store:"divino", type:"cosméticos",
    img:"https://www.acopluscr.com/public/6/productos/FSEP0601_1.webp?v=7923332", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FSEP0601_1.webp?v=7923332","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FSEP0601_2.webp?v=7923332","isMain":false},{"url":"https://www.acopluscr.com/public/6/productos/FSEP0601_3.webp?v=7923332","isMain":false}],
    desc:"Lizbella Pro, con placas metálicas que distribuyen el calor de manera uniforme, la rizadora permite crear ondas, rizos definidos y bucles. Incluye peine tipo pinza y bolsa de almacenamiento", specs:{"Voltaje":"110v","Cable giratorio":"360"} },
  { id:35, name:"Plancha De Cabello Con Moldes", price:18000, stock:1, store:"divino", type:"cosméticos",
    img:"https://www.acopluscr.com/public/6/productos/FEL2311005_1.webp?v=7923332", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL2311005_1.webp?v=7923332","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL2311005_2.webp?v=7923332","isMain":false}],
    desc:"Funciona creando ondulaciones en el cabello que le dan la figura de la placa utilizada.Cuenta con 4 placas intercambiables con figuras como Rayo, Estrella, Corazón y Zigzag para personalizar tu estilo.Incluye 1 guante térmico para una manipulación", specs:{} },
  { id:36, name:"Plancha De Pelo Conair", price:35000, stock:2, store:"divino", type:"cosméticos",
    img:"https://www.acopluscr.com/public/6/productos/FCOCS952BT_1.webp?v=7923332", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FCOCS952BT_1.webp?v=7923332","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FCOCS952BT_2.webp?v=7923332","isMain":false}],
    desc:"Plancha con placas recubiertas de cerámica infundida con aguacate y coco, para un cuidado y alisado excepcionales.", specs:{"Temperatura Maxima":"230°C"} },
  { id:37, name:"Rizador Remington Shine Therapy", price:32000, stock:5, store:"divino", type:"cosméticos",
    img:"https://www.acopluscr.com/public/6/productos/FRECCI11AF_1.webp?v=7923332", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FRECCI11AF_1.webp?v=7923332","isMain":true}],
    desc:"cerámica avanzada infundida con aguacate y macadamia para rizos definidos, brillantes y sin frizz.", specs:{"Material":"Cerámica con Aguacate","Temperatura Máxima":"210°C (410°F)","Ajustes":"8 niveles digitales","Barril":"25 mm (rizos naturales)"} },
  { id:38, name:"Rizador De Cabello Lizbella", price:12000, stock:11, store:"divino", type:"cosméticos",
    img:"https://www.acopluscr.com/public/6/productos/FLB8124_1.webp?v=7923332", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FLB8124_1.webp?v=7923332","isMain":true}],
    desc:"Rizador de cabello compacto Lizbella. Diseñado con barril de acero inoxidable para un calentamiento rápido y uniforme, ideal para crear rizos definidos de forma sencilla y eficiente.", specs:{"Material":"Acero inoxidable","Barril":"19 mm - 25 mm","Seguridad":"Punta fría al tacto"} },
  { id:39, name:"Pinza Para Pelo Lizbella", price:15000, stock:0, store:"divino", type:"cosméticos",
    img:"https://www.acopluscr.com/public/6/productos/FLB8102_1.webp?v=7923332", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FLB8102_1.webp?v=7923332","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FLB8102_2.webp?v=7923332","isMain":false}],
    desc:"Rizadora profesional de titanio que permite crear rizos definidos con facilidad. Su cilindro de alta calidad asegura un calor uniforme para resultados rápidos y duraderos en cualquier tipo de cabello.", specs:{"Material":"Titanio y Plástico ABS","Temperatura":"210°C (Calor uniforme)","Potencia":"35W","Voltaje":"110V"} },
  { id:40, name:"Masajeador Mini Gun", price:10000, stock:5, store:"divino", type:"cosméticos",
    img:"https://www.acopluscr.com/public/6/productos/FEL24S6002_1.webp?v=7923332", gallery:[{"url":"https://www.acopluscr.com/public/6/productos/FEL24S6002_1.webp?v=7923332","isMain":true},{"url":"https://www.acopluscr.com/public/6/productos/FEL24S6002_2.webp?v=7923332","isMain":false}],
    desc:"Masajeador portátil tipo pistola diseñado para aliviar tensiones musculares. Ofrece intensidades ajustables y un cabezal de foam que se adapta a diversas zonas del cuerpo, ideal para recuperación post-entrenamiento o relax diario.", specs:{"Material":"Plástico ABS resistente","Velocidades":"3 niveles ajustables","Carga":"Cable Tipo C incluido","Dimensiones":"15 cm x 11 cm x 4.5 cm"} }
];

function getInventory() {
  // DEFAULT_INVENTORY (hardcodeado en este archivo) es siempre la fuente de verdad base.
  // lm-inventory solo se usa si tiene MÁS productos que el default (admin añadió algo en sesión).
  try {
    var saved = localStorage.getItem('lm-inventory');
    if (saved) {
      var parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length >= DEFAULT_INVENTORY.length) return parsed;
    }
  } catch(e) {
    try { localStorage.removeItem('lm-inventory'); } catch(_) {}
  }
  // Siempre sincronizar lm-inventory con el DEFAULT real
  try { localStorage.setItem('lm-inventory', JSON.stringify(DEFAULT_INVENTORY)); } catch(_) {}
  return DEFAULT_INVENTORY;
}

var inventory = getInventory();
window._inventory = inventory;

// ── MIGRATE: elegance-services → lm-inventory ─────────────────────────────
(function migrateEleganceServices() {
  try {
    var raw = localStorage.getItem('elegance-services');
    if (!raw) return;
    var services = JSON.parse(raw);
    if (!services || !services.length) return;
    var inv = getInventory();
    var hasEleganceServices = inv.some(function(i){ return i.store==='elegance' && i.duration; });
    if (hasEleganceServices) { localStorage.removeItem('elegance-services'); return; }
    // Remove old elegance products, add migrated services
    inv = inv.filter(function(i){ return i.store !== 'elegance'; });
    var maxId = inv.reduce(function(m,i){ return Math.max(m, typeof i.id==='number'?i.id:0); }, 25);
    services.forEach(function(s, idx) {
      inv.push({
        id: maxId + idx + 1,
        name: s.name, price: s.price, stock: null,
        duration: s.duration || '60 min',
        store: 'elegance', type: s.cat || 'facial',
        img: s.img || '', gallery: s.img ? [{url:s.img,isMain:true}] : [],
        desc: s.desc || '', specs: {}
      });
    });
    localStorage.setItem('lm-inventory', JSON.stringify(inv));
    localStorage.removeItem('elegance-services');
    inventory = getInventory();
    window._inventory = inventory;
    console.log('Migrated', services.length, 'elegance services to lm-inventory');
  } catch(e) { console.warn('Migration error:', e); }
})();

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
  if(window.__cursorInit)return; window.__cursorInit=true;
  var dot=document.getElementById('cursor-dot'),ring=document.getElementById('cursor-ring');
  if(!dot||!ring||window.matchMedia('(pointer:coarse)').matches){if(dot)dot.style.display='none';if(ring)ring.style.display='none';return;}
  dot.style.display='block'; ring.style.display='block';
  var rx=0,ry=0,mx=window.innerWidth/2,my=window.innerHeight/2;
  document.addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px';});
  (function a(){rx+=(mx-rx)*0.12;ry+=(my-ry)*0.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(a);})();
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
