import './FooterCTA.css';

export default function FooterCTA({ language }) {
  return (
    <footer className="footer-cta">
      <div className="container footer-container">
        <h2 className="footer-title">
          {language === 'TH' ? 'พร้อมที่จะยกระดับการวิ่งของคุณหรือยัง?' : 'Ready to Elevate Your Run?'}
        </h2>
        <button className="btn-primary btn-large cta-main">
          {language === 'TH' ? 'สั่งซื้อสินค้า' : 'Order Now'}
        </button>
        <div className="social-links">
          <a href="#" className="social-icon" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
          </a>
          <a href="#" className="social-icon" aria-label="LINE">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 3.53 8.892 8.415 9.605.518.113.88.243.834.793-.016.182-.122.75-.145.89-.044.271-.2.969.837.531 1.037-.437 5.58-3.284 8.04-5.94 1.95-2.096 3.019-4.256 3.019-5.879zM10.875 13.047h-1.603v-4.664h1.603v4.664zm3.931 0h-1.55v-4.664h1.55v4.664zm3.502 0h-2.585v-1.583h1.034v-1.498h-1.034v-1.583h2.585v4.664zm-10.428-4.664v3.167h-1.603v-3.167h1.603zm-1.603-1.002h1.603v.854h-1.603v-.854z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
