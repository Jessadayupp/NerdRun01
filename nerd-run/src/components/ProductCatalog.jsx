import './ProductCatalog.css';

const products = [
  {
    id: 1,
    image: '/images/T-Shirt.png',
    nameTH: 'เสื้อวิ่ง Nerd Run T-Shirt',
    nameEN: 'Nerd Run T-Shirt',
    price: '590 ฿'
  },
  {
    id: 2,
    image: '/images/Sing-let.png',
    nameTH: 'เสื้อกล้ามวิ่ง Nerd Run Singlet',
    nameEN: 'Nerd Run Singlet',
    price: '490 ฿'
  },
  {
    id: 3,
    image: '/images/sock.png',
    nameTH: 'ถุงเท้าวิ่ง Nerd Run Socks',
    nameEN: 'Nerd Run Socks',
    price: '190 ฿'
  }
];

export default function ProductCatalog({ language }) {
  return (
    <section id="catalog" className="catalog">
      <div className="container">
        <h2 className="section-title">
          {language === 'TH' ? 'สินค้าของเรา' : 'Our Products'}
        </h2>
        <div className="catalog-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.image} alt={product.nameEN} className="product-image" />
              </div>
              <div className="product-info">
                <h3 className="product-name">
                  {language === 'TH' ? product.nameTH : product.nameEN}
                </h3>
                <p className="product-price">{product.price}</p>
                <button className="btn-small w-full">
                  {language === 'TH' ? 'หยิบใส่ตะกร้า' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
