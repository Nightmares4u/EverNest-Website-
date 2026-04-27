const fs = require('fs');
const path = require('path');

const destinationsPath = path.join(__dirname, '../public/images/destinations');
const galleryPath = path.join(__dirname, '../public/images/gallery');
const logosPath = path.join(__dirname, '../public/images/logos');
const fallbacksPath = path.join(__dirname, '../public/images/fallbacks');

[destinationsPath, galleryPath, logosPath, fallbacksPath].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

function createGradientSVG(width, height, color1, color2, text) {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad)" />
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="${width/15}" font-weight="bold" fill="rgba(255,255,255,0.8)">
    ${text}
  </text>
  <circle cx="50%" cy="40%" r="${width/20}" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="4" />
  <path d="M${width/2 - width/20} ${height*0.4 + width/20} L${width/2 + width/20} ${height*0.4 - width/20}" stroke="rgba(255,255,255,0.5)" stroke-width="4" />
</svg>`;
}

function createLogoSVG(width, height, color, name) {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="white" rx="10" />
  <rect width="100%" height="100%" fill="none" stroke="${color}" stroke-width="4" rx="10" />
  <circle cx="${width/2}" cy="${height/2 - 15}" r="25" fill="${color}" opacity="0.1" />
  <path d="M${width/2 - 15} ${height/2 - 15} L${width/2} ${height/2 - 30} L${width/2 + 15} ${height/2 - 15} L${width/2} ${height/2}" fill="${color}" />
  <text x="50%" y="${height/2 + 30}" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0B1B3A">
    ${name}
  </text>
</svg>`;
}

// Generate Destination Backgrounds
const destinations = [
  "Italy", "Finland", "Turkey", "UAE", "Canada", "Georgia", 
  "United-Kingdom", "Azerbaijan", "France", "Ireland", "Malta", 
  "Uzbekistan", "Australia", "Malaysia", "Spain", "Cyprus", "USA", "New-Zealand", "European-Union"
];

destinations.forEach(dest => {
  const svg = createGradientSVG(1200, 800, '#0B1B3A', '#1E3A8A', dest.replace('-', ' '));
  fs.writeFileSync(path.join(destinationsPath, `${dest.toLowerCase()}.svg`), svg);
});

// Generate Gallery Images
for (let i = 1; i <= 6; i++) {
  const svg = createGradientSVG(800, 600, '#0B1B3A', '#e11d2e', `Campus View ${i}`);
  fs.writeFileSync(path.join(galleryPath, `gallery-${i}.svg`), svg);
}

// Generate Logos
const logos = [
  "British Council", "IELTS", "PTE Academic", "Cambridge", "TOEFL", 
  "IDP Education", "Study Group", "ApplyBoard"
];

logos.forEach(logo => {
  const svg = createLogoSVG(200, 100, '#e11d2e', logo);
  fs.writeFileSync(path.join(logosPath, `${logo.toLowerCase().replace(/\s+/g, '-')}.svg`), svg);
});

// Fallback image
const fallbackSvg = createGradientSVG(800, 600, '#0B1B3A', '#0B1B3A', 'Evernest');
fs.writeFileSync(path.join(fallbacksPath, `fallback.svg`), fallbackSvg);

console.log("Local assets generated successfully!");
