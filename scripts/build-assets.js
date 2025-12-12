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

// Identidade Visual Eguchi (Nova Paleta)
const BRAND_TAUPE = '#857B75';
const BRAND_ORANGE = '#FF9701';
const BRAND_DARK = '#595959';
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

// 2. GERAR CAPA SOCIAL (OG IMAGE) COM LOGO IKIGAI
async function generateOGImage() {
  console.log('🎨 Gerando Capa Social (OG Image)...');
  
  const width = 1200;
  const height = 630;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fundo (Brand Dark)
  const gradiente = ctx.createLinearGradient(0, 0, width, height);
  gradiente.addColorStop(0, '#595959'); // Brand Dark
  gradiente.addColorStop(1, '#404040'); // Um pouco mais escuro
  ctx.fillStyle = gradiente;
  ctx.fillRect(0, 0, width, height);

  // --- DESENHO DO LOGO IKIGAI (Lateral) ---
  const logoX = 200;
  const logoY = 315;
  const r = 80; // Raio dos círculos
  const lw = 12; // Espessura da linha

  ctx.lineWidth = lw;
  
  // Círculo Superior (Laranja)
  ctx.beginPath();
  ctx.arc(logoX, logoY - 50, r, 0, 2 * Math.PI);
  ctx.strokeStyle = BRAND_ORANGE;
  ctx.stroke();

  // Círculo Inferior (Taupe)
  ctx.beginPath();
  ctx.arc(logoX, logoY + 50, r, 0, 2 * Math.PI);
  ctx.strokeStyle = BRAND_TAUPE;
  ctx.stroke();

  // Círculo Esquerdo (Taupe)
  ctx.beginPath();
  ctx.arc(logoX - 50, logoY, r, 0, 2 * Math.PI);
  ctx.strokeStyle = BRAND_TAUPE;
  ctx.stroke();

  // Círculo Direito (Taupe)
  ctx.beginPath();
  ctx.arc(logoX + 50, logoY, r, 0, 2 * Math.PI);
  ctx.strokeStyle = BRAND_TAUPE;
  ctx.stroke();

  // Ponto Central (Laranja)
  ctx.beginPath();
  ctx.arc(logoX, logoY, 10, 0, 2 * Math.PI);
  ctx.fillStyle = BRAND_ORANGE;
  ctx.fill();

  // --- TEXTOS ---
  ctx.textAlign = 'left';
  
  // Título Principal
  ctx.fillStyle = TEXT_LIGHT;
  ctx.font = 'bold 70px sans-serif'; 
  ctx.fillText('Eguchi Odontologia', 400, 240);

  // Subtítulo (Laranja)
  ctx.fillStyle = BRAND_ORANGE;
  ctx.font = 'italic 32px sans-serif';
  ctx.fillText('Odontologia Humanizada em Florianópolis', 405, 300);
  
  // Descrição Extra
  ctx.fillStyle = '#CCCCCC'; 
  ctx.font = '26px sans-serif';
  ctx.fillText('+14 anos de experiência em Reabilitação Oral', 405, 350);
  ctx.fillText('Estacionamento Gratuito no local', 405, 390);

  // Rodapé (URL)
  ctx.textAlign = 'center';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.font = '24px sans-serif';
  ctx.fillText('eguchiodontologia.net', width/2, 580);

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
        console.warn(`   ⚠️ Pular ${file}: ${error.message}`);
      }
    }
  }
}

async function runBuild() {
  console.log('🚀 Iniciando Build de Assets Eguchi (Novo Logo)...');
  await Promise.all([
    generateStaticQRCode(),
    generateOGImage(),
    optimizeImages()
  ]);
  console.log('✨ Assets e OG Image atualizados.');
}

runBuild();