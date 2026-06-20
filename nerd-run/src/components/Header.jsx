import { useState } from 'react';
import './Header.css';

export default function Header({ language, setLanguage }) {
  const toggleLanguage = () => {
    setLanguage(language === 'TH' ? 'EN' : 'TH');
  };

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo-container">
          <div className="text-logo">
            {language === 'TH' ? 'เนิร์ดรัน' : 'NERDRUN'}
          </div>
        </div>
        <div className="nav-actions">
          <button className="lang-toggle" onClick={toggleLanguage} aria-label="Toggle Language">
            <span className={language === 'TH' ? 'active' : ''}>TH</span>
            <span className="divider">/</span>
            <span className={language === 'EN' ? 'active' : ''}>EN</span>
          </button>
        </div>
      </div>
    </header>
  );
}
