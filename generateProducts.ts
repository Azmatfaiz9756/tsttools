import fs from 'fs';
import { catalogImages } from './src/imageCatalog';
import { Product } from './src/types';

const productsMap = new Map<string, string[]>();

catalogImages.forEach(url => {
  const match = url.match(/\/([^\/]+)$/);
  if (!match) return;
  const fileName = match[1];
  
  let baseName = fileName.replace(/\.(webp|jpg|png|jpeg)$/i, '');
  baseName = baseName.replace(/[-_]\d+$/, '');
  baseName = baseName.replace(/[-_]\d+[-_]\d+$/, ''); 
  
  if (!productsMap.has(baseName)) {
    productsMap.set(baseName, []);
  }
  if (!productsMap.get(baseName)!.includes(url)) {
    productsMap.get(baseName)!.push(url);
  }
});

function determineCategory(name: string): string {
  const lName = name.toLowerCase();
  if (lName.includes('microscope') || lName.includes('lens') || lName.includes('camera') || lName.includes('magnifi') || lName.includes('loupe')) return 'Microscopes & Cameras';
  if (lName.includes('solder') || lName.includes('flux') || lName.includes('bga') || lName.includes('iron') || lName.includes('paste') || lName.includes('reball') || lName.includes('welding') || lName.includes('desoldering')) return 'Soldering Equipment';
  if (lName.includes('power') || lName.includes('supply') || lName.includes('voltage') || lName.includes('charger') || lName.includes('cable') || lName.includes('usb') || lName.includes('battery')) return 'Power & Cables';
  if (lName.includes('screwdriver') || lName.includes('spudger') || lName.includes('pry') || lName.includes('plier') || lName.includes('tweezer') || lName.includes('opening') || lName.includes('blade') || lName.includes('knife')) return 'Opening & Hand Tools';
  if (lName.includes('multimeter') || lName.includes('tester') || lName.includes('oscilloscope') || lName.includes('measure') || lName.includes('meter')) return 'Measuring Tools';
  if (lName.includes('glue') || lName.includes('adhesive') || lName.includes('tape') || lName.includes('uv') || lName.includes('oca') || lName.includes('clean') || lName.includes('liquid')) return 'Consumables & Chemicals';
  if (lName.includes('stencil') || lName.includes('fixture') || lName.includes('holder') || lName.includes('jig') || lName.includes('mold') || lName.includes('pad') || lName.includes('mat')) return 'Fixtures & Mats';
  if (lName.includes('screen') || lName.includes('lcd') || lName.includes('glass') || lName.includes('separator') || lName.includes('laminating')) return 'Screen Repair';
  if (lName.includes('iphone') || lName.includes('macbook') || lName.includes('ipad') || lName.includes('samsung')) return 'Device Parts & Tools';
  return 'Accessories & Miscellaneous';
}

let idCounter = 1000;
const products: Product[] = Array.from(productsMap.entries()).map(([baseName, urls]) => {
  let cleanName = baseName.replace(/-china-phonefix$/, '').replace(/[-_]/g, ' ');
  // Clean up hashes and UUIDs from names
  cleanName = cleanName.replace(/\b[0-9a-fA-F]{10,}\b/g, '').replace(/ +/g, ' ').trim();
  if (cleanName.length < 3) cleanName = "Professional Repair Tool " + idCounter;
  
  cleanName = cleanName.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const cat = determineCategory(cleanName);
  
  return {
    id: `p-${idCounter++}`,
    name: cleanName,
    description: `Professional ${cleanName}. Ideal for precision electronics and smartphone repair.`,
    price: Math.floor(Math.random() * 150) + 15,
    category: cat,
    image: urls[0],
    images: urls,
    features: ['Professional quality', 'Durable and reliable', 'Easy to use'],
    rating: 4.5 + Math.random() * 0.5,
    reviewsCount: Math.floor(Math.random() * 50) + 5,
    inStock: true,
    stockQty: Math.floor(Math.random() * 100) + 10,
    brand: 'ProRepair'
  };
});

// Update data.ts categories
const categories = Array.from(new Set(products.map(p => p.category))).sort();
console.log('Categories generated:', categories);


const fileContent = `import { Product } from './types';

export const catalogProducts: Product[] = ${JSON.stringify(products, null, 2)};
`;

fs.writeFileSync('./src/catalogProducts.ts', fileContent);
