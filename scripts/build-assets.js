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

// Identidade Visual Eguchi
const BRAND_COLOR = '#857B75'; // Taupe
const TEXT_COLOR = '#F5F5F4';

const sizes = {
  mobile: { width: 768, quality: 75 },
  desktop: { width: 1920, quality: 80 }
};

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

// 1. GERAR QR CODE
async function generateStaticQRCode() {
  console.log('🔳 Gerando QR Code...');
  const qrPath = path.join(publicDir, 'qrcode-eguchi.png'); // Nome ajustado
  await QRCode.toFile(qrPath, SITE_URL, {
    color: { dark: BRAND_COLOR, light: '#FFFFFF' },
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

  // Fundo Elegante (Stone 900)
  const gradiente = ctx.createLinearGradient(0, 0, width, height);
  gradiente.addColorStop(0, '#292524');
  gradiente.addColorStop(1, '#1C1917');
  ctx.fillStyle = gradiente;
  ctx.fillRect(0, 0, width, height);

  // Elementos Decorativos (Círculos Sutis)
  ctx.strokeStyle = 'rgba(133, 123, 117, 0.15)'; // Brand color transparente
  ctx.lineWidth = 2;
  for(let i=0; i<5; i++) {
      ctx.beginPath();
      ctx.arc(width - 200, 315, 100 + (i*40), 0, 2 * Math.PI);
      ctx.stroke();
  }

  // Textos
  ctx.textAlign = 'center';
  
  // Título
  ctx.fillStyle = TEXT_COLOR;
  ctx.font = 'bold 70px sans-serif'; 
  ctx.fillText('Eguchi Odontologia', width/2, 280);

  // Subtítulo
  ctx.fillStyle = BRAND_COLOR;
  ctx.font = 'italic 40px sans-serif';
  ctx.fillText('Odontologia Humanizada em Florianópolis', width/2, 350);

  // Rodapé
  ctx.fillStyle = '#A8A29E'; 
  ctx.font = '30px sans-serif';
  ctx.fillText('eguchiodontologia.net', width/2, 550);

  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(publicDir, 'og-image.jpg'), buffer);
}

// 3. OTIMIZAR IMAGENS (COM PROTEÇÃO DE ERRO)
async function optimizeImages() {
  console.log('🖼️  Otimizando imagens...');
  if (!fs.existsSync(srcDir)) {
    console.warn('⚠️ Pasta src/assets não encontrada.');
    return;
  }

  const files = fs.readdirSync(srcDir);
  for (const file of files) {
    const fullPath = path.join(srcDir, file);
    
    // Pula diretórios
    if (fs.statSync(fullPath).isDirectory()) continue;

    const ext = path.extname(file).toLowerCase();
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      
      try {
        const image = sharp(fullPath);
        const metadata = await image.metadata(); // Tenta ler metadados para validar
        const baseName = path.basename(file, ext);

        console.log(`   Processando: ${file}`);

        for (const [sizeName, config] of Object.entries(sizes)) {
          const shouldResize = metadata.width > config.width;
          
          // WebP
          await image.clone()
            .resize(shouldResize ? config.width : null, null, { withoutEnlargement: true })
            .webp({ quality: config.quality, effort: 4 })
            .toFile(path.join(outputDir, `${baseName}-${sizeName}.webp`));
            
          // JPG
          await image.clone()
            .resize(shouldResize ? config.width : null, null, { withoutEnlargement: true })
            .jpeg({ quality: config.quality, mozjpeg: true })
            .toFile(path.join(outputDir, `${baseName}-${sizeName}.jpg`));
        }
      } catch (error) {
        console.error(`❌ Erro ao processar imagem ${file}:`, error.message);
        console.warn(`   -> DICA: O arquivo ${file} pode estar corrompido. Substitua-o por um JPG válido.`);
      }
    }
  }
}

async function runBuild() {
  console.log('🚀 Iniciando Build de Assets Eguchi...');
  await Promise.all([
    generateStaticQRCode(),
    generateOGImage(),
    optimizeImages()
  ]);
  console.log('✨ Assets processados (verifique se houve erros acima).');
}

runBuild();