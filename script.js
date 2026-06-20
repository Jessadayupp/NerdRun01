document.addEventListener('DOMContentLoaded', () => {
    // 1. Language Toggle
    const translations = {
        th: {
            hero_title: 'อุปกรณ์วิ่งของคน "คลั่ง" วิ่ง',
            hero_subtitle: 'พร้อมให้คุณทำลายสถิติใหม่ด้วยอุปกรณ์คุณภาพระดับโปร',
            view_products: 'เลือกดูสินค้า',
            catalog_title: 'สินค้าแนะนำ',
            product_singlet: 'เสื้อกล้ามวิ่ง Nerd Run Singlet',
            product_tshirt: 'เสื้อยืดวิ่ง Nerd Run T-Shirt',
            product_socks: 'ถุงเท้าวิ่ง Nerd Run Socks',
            add_to_cart: 'หยิบใส่ตะกร้า',
            ready_to_run: 'พร้อมลุยไปกับเราหรือยัง?',
            buy_now: 'สั่งซื้อสินค้าเลย'
        },
        en: {
            hero_title: 'Running Gear for the Obsessed',
            hero_subtitle: 'Break your personal best with pro-level equipment.',
            view_products: 'View Products',
            catalog_title: 'Featured Products',
            product_singlet: 'Nerd Run Singlet',
            product_tshirt: 'Nerd Run T-Shirt',
            product_socks: 'Nerd Run Socks',
            add_to_cart: 'Add to Cart',
            ready_to_run: 'Ready to hit the road?',
            buy_now: 'Buy Now'
        }
    };

    const langToggleBtn = document.getElementById('langToggle');
    const langSpans = langToggleBtn.querySelectorAll('.lang');

    langToggleBtn.addEventListener('click', (e) => {
        const clickedLang = e.target.getAttribute('data-lang');
        if (!clickedLang) return;

        // Update active class
        langSpans.forEach(span => span.classList.remove('active'));
        e.target.classList.add('active');

        // Apply translations
        const texts = translations[clickedLang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (texts[key]) {
                el.textContent = texts[key];
            }
        });
    });

    // 2. Smooth Scrolling for Anchor Links
    document.querySelector('.cta-btn').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });

    // 3. Dynamic Color Extraction
    if (typeof logoBase64 !== 'undefined') {
        const img = new Image();
        img.onload = function() {
            const colors = extractProminentColors(img);
            if (colors && colors.length >= 1) {
                const primaryHex = rgbToHex(colors[0].r, colors[0].g, colors[0].b);
                document.documentElement.style.setProperty('--primary-color', primaryHex);
                
                // Update primary button shadow dynamically
                const shadowColor = `rgba(${colors[0].r}, ${colors[0].g}, ${colors[0].b}, 0.4)`;
                const styleSheet = document.createElement("style");
                styleSheet.innerText = `
                    .primary-btn.big-btn { box-shadow: 0 10px 30px ${shadowColor}; }
                    .primary-btn.big-btn:hover { box-shadow: 0 15px 40px ${shadowColor}; }
                `;
                document.head.appendChild(styleSheet);
                
                if (colors.length >= 2) {
                    const secondaryHex = rgbToHex(colors[1].r, colors[1].g, colors[1].b);
                    document.documentElement.style.setProperty('--secondary-color', secondaryHex);
                }
            }
        };
        img.src = logoBase64;
    }
});

// Color Extraction Algorithm
function extractProminentColors(imgElement) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = imgElement.width;
    canvas.height = imgElement.height;
    ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    const colorCounts = {};
    
    // Group colors by rounding to nearest 10
    const round = (val) => Math.round(val / 10) * 10;
    
    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i+1];
        const b = data[i+2];
        const a = data[i+3];
        
        // Skip transparent or near-transparent pixels
        if (a < 128) continue;
        
        // Skip near white
        if (r > 240 && g > 240 && b > 240) continue;
        
        // Skip near black
        if (r < 20 && g < 20 && b < 20) continue;
        
        const rr = round(r);
        const gg = round(g);
        const bb = round(b);
        const key = `${rr},${gg},${bb}`;
        
        if (colorCounts[key]) {
            colorCounts[key].count++;
        } else {
            colorCounts[key] = { r: rr, g: gg, b: bb, count: 1 };
        }
    }
    
    // Sort by frequency
    const sortedColors = Object.values(colorCounts).sort((a, b) => b.count - a.count);
    
    if (sortedColors.length === 0) return null;
    
    const primary = sortedColors[0];
    let secondary = null;
    
    // Find secondary color that is sufficiently different from primary
    const distanceThreshold = 60; 
    for (let i = 1; i < sortedColors.length; i++) {
        const c = sortedColors[i];
        const dist = Math.abs(c.r - primary.r) + Math.abs(c.g - primary.g) + Math.abs(c.b - primary.b);
        if (dist > distanceThreshold) {
            secondary = c;
            break;
        }
    }
    
    return secondary ? [primary, secondary] : [primary];
}

function rgbToHex(r, g, b) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}
