import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import FooterCTA from './components/FooterCTA';
import './App.css';

function App() {
  const [language, setLanguage] = useState('TH');

  // Update document title based on language
  useEffect(() => {
    document.title = language === 'TH' ? 'เนิร์ดรัน (Nerd Run) | อุปกรณ์วิ่งคุณภาพสูง' : 'Nerd Run | Premium Running Gear';
  }, [language]);

  return (
    <div className="app-wrapper">
      <Header language={language} setLanguage={setLanguage} />
      <main className="main-content">
        <Hero language={language} />
        <ProductCatalog language={language} />
      </main>
      <FooterCTA language={language} />
    </div>
  );
}

export default App;
