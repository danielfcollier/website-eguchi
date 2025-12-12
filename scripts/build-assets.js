import sharp from 'sharp';
import QRCode from 'qrcode';
import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurações
const srcDir = path.join(__dirname, '../src/assets');
const outputDir = path.join(__dirname, '../public/optimized');
const publicDir = path.join(__dirname, '../public');
const SITE_URL = 'https://eguchiodontologia.net';

// Cores
const BRAND_ORANGE = '#FF9701';
const BRAND_DARK = '#595959';
const BRAND_TAUPE = '#857B75';
const TEXT_LIGHT = '#F5F5F4';

const sizes = {
  mobile: { width: 768, quality: 75 },
  desktop: { width: 1920, quality: 80 }
};

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

// 1. GERAR QR CODE
async function generateStaticQRCode() {
  console.log('🔳 Gerando QR Code...');
  const qrPath = path.join(publicDir, 'qrcode-eguchi.png');
  await QRCode.toFile(qrPath, SITE_URL, {
    color: { dark: BRAND_DARK, light: '#FFFFFF' },
    width: 500,
    margin: 2
  });
}

// 2. GERAR CAPA SOCIAL (OG IMAGE)
async function generateOGImage() {
  console.log('🎨 Gerando Capa Social (OG Image)...');
  
  const width = 1200;
  const height = 630;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fundo
  ctx.fillStyle = BRAND_DARK;
  ctx.fillRect(0, 0, width, height);

  // Logo Ikigai (Lateral)
  const logoX = 200;
  const logoY = 315;
  const r = 80;
  ctx.lineWidth = 14;
  
  ctx.strokeStyle = BRAND_ORANGE; 
  ctx.beginPath(); ctx.arc(logoX, logoY - 50, r, 0, 2 * Math.PI); ctx.stroke();
  ctx.beginPath(); ctx.arc(logoX, logoY + 50, r, 0, 2 * Math.PI); ctx.stroke();
  ctx.beginPath(); ctx.arc(logoX - 50, logoY, r, 0, 2 * Math.PI); ctx.stroke();
  ctx.beginPath(); ctx.arc(logoX + 50, logoY, r, 0, 2 * Math.PI); ctx.stroke();

  // Texto
  ctx.textAlign = 'left';
  
  // Título
  ctx.fillStyle = TEXT_LIGHT;
  ctx.font = 'bold 70px sans-serif'; 
  ctx.fillText('Eguchi Odontologia', 400, 230);

  // Frase Poética (Em destaque)
  ctx.fillStyle = BRAND_ORANGE;
  ctx.font = 'italic 34px sans-serif';
  ctx.fillText('"O que o sol é para flores,', 405, 300);
  ctx.fillText('o sorriso é para a humanidade."', 405, 345);
  
  // Rodapé
  ctx.fillStyle = '#CCCCCC'; 
  ctx.font = '26px sans-serif';
  ctx.fillText('Florianópolis - SC', 405, 450);

  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(publicDir, 'og-image.jpg'), buffer);
}

// 3. OTIMIZAR IMAGENS
async function optimizeImages() {
  console.log('🖼️  Otimizando imagens...');
  if (!fs.existsSync(srcDir)) return;

  const files = fs.readdirSync(srcDir);
  for (const file of files) {
    const fullPath = path.join(srcDir, file);
    if (fs.statSync(fullPath).isDirectory()) continue;
    const ext = path.extname(file).toLowerCase();
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      try {
        const image = sharp(fullPath);
        const metadata = await image.metadata();
        const baseName = path.basename(file, ext);
        for (const [sizeName, config] of Object.entries(sizes)) {
          const shouldResize = metadata.width > config.width;
          await image.clone()
            .resize(shouldResize ? config.width : null, null, { withoutEnlargement: true })
            .webp({ quality: config.quality, effort: 4 })
            .toFile(path.join(outputDir, `${baseName}-${sizeName}.webp`));
            
          await image.clone()
            .resize(shouldResize ? config.width : null, null, { withoutEnlargement: true })
            .jpeg({ quality: config.quality, mozjpeg: true })
            .toFile(path.join(outputDir, `${baseName}-${sizeName}.jpg`));
        }
      } catch (error) {
        console.warn(`⚠️ Erro ao processar ${file}: ${error.message}`);
      }
    }
  }
}

async function runBuild() {
  await Promise.all([generateStaticQRCode(), generateOGImage(), optimizeImages()]);
  console.log('✅ Assets gerados.');
}

runBuild();