import sharp from 'sharp';
import QRCode from 'qrcode';
import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, '../src/assets');
const outputDir = path.join(__dirname, '../public/optimized');
const publicDir = path.join(__dirname, '../public');

// Configuração do Site
const SITE_URL = 'https://eguchiodontologia.net';
const BRAND_COLOR = '#857B75';

// Garante diretórios
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

async function optimizeImages() {
  console.log('🖼️ Otimizando imagens...');
  
  // Otimiza a imagem Hero (Assumindo src/assets/hero.jpg)
  const heroSrc = path.join(srcDir, 'hero.jpg');
  const heroDest = path.join(outputDir, 'hero-main'); // Nome base para OptimizedImage.tsx

  if (fs.existsSync(heroSrc)) {
    // WebP
    await sharp(heroSrc)
      .resize(1920)
      .webp({ quality: 80 })
      .toFile(`${heroDest}.webp`);

    // AVIF
    await sharp(heroSrc)
      .resize(1920)
      .avif({ quality: 70 })
      .toFile(`${heroDest}.avif`);

    // Fallback JPG 
    await sharp(heroSrc)
      .resize(1920)
      .jpeg({ quality: 90 })
      .toFile(`${heroDest}.jpg`);
      
    console.log('✅ Imagem Hero otimizada.');
  }
}

async function generateAssets() {
  console.log('🚀 Iniciando Build de Assets Eguchi...');

  // 1. QR Code estático em /public/qrcode.png
  await QRCode.toFile(path.join(publicDir, 'qrcode.png'), SITE_URL, {
    color: { dark: BRAND_COLOR, light: '#FFFFFF' },
    width: 500,
    margin: 1
  });
  console.log('✅ QR Code (qrcode.png) gerado.');

  // 2. OG Image
  const width = 1200;
  const height = 630;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  // ... (código de desenho da OG Image)
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#292524'); 
  gradient.addColorStop(1, '#1C1917'); 
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 70px Montserrat'; 
  ctx.textAlign = 'center';
  ctx.fillText('Eguchi Odontologia', width/2, 280);

  ctx.fillStyle = BRAND_COLOR;
  ctx.font = 'italic 40px Roboto';
  ctx.fillText('Odontologia Humanizada em Florianópolis', width/2, 350);
  
  ctx.fillStyle = '#A8A29E';
  ctx.font = '30px Roboto';
  ctx.fillText('eguchiodontologia.net', width/2, 550);
  
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(publicDir, 'og-image.jpg'), buffer);
  console.log('✅ OG Image (og-image.jpg) gerada.');

  // 3. Otimização de Imagens
  await optimizeImages();

  console.log('🎉 Build de Assets concluído!');
}

generateAssets().catch(console.error);