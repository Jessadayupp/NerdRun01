import './Hero.css';

export default function Hero({ language }) {
  const scrollToCatalog = () => {
    const catalog = document.getElementById('catalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const content = {
    TH: {
      headline: 'พร้อมลุยทุกเส้นทางไปกับ เนิร์ดรัน',
      subheadline: 'อุปกรณ์วิ่งคุณภาพสูง ดีไซน์เรียบง่าย ตอบโจทย์ทุกการเคลื่อนไหว',
      cta: 'เลือกดูสินค้า'
    },
    EN: {
      headline: 'Ready for Every Path with Nerd Run',
      subheadline: 'High-quality running gear, minimal design, perfect for every movement.',
      cta: 'Shop Now'
    }
  };

  const currentContent = content[language];

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-text">
          <h1 className="hero-headline">{currentContent.headline}</h1>
          <p className="hero-subheadline">{currentContent.subheadline}</p>
          <button className="btn-primary hero-cta" onClick={scrollToCatalog}>
            {currentContent.cta}
          </button>
        </div>
        <div className="hero-visual">
          <div className="image-wrapper t-shirt">
            <img src="/images/T-Shirt.png" alt="Nerd Run T-Shirt" />
          </div>
          <div className="image-wrapper singlet">
            <img src="/images/Sing-let.png" alt="Nerd Run Singlet" />
          </div>
          <div className="hero-backdrop-glow"></div>
        </div>
      </div>
    </section>
  );
}
