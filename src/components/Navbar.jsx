import { useState, useEffect } from 'react';
import './Navbar.css';

const WHATSAPP = 'https://wa.me/923007201825';

export default function Navbar({ onAdminClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#courses', label: 'Courses' },
    { href: '#fees', label: 'Fee Structure' },
    { href: '#teachers', label: 'Teachers' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        {/* Logo */}
        <a href="#home" className="navbar__brand" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>
          <div className="navbar__logo-wrap">
            <img src="/logo.png" alt="Al-Frid Logo" className="navbar__logo-img" />
          </div>
          <div className="navbar__brand-text">
            <span className="navbar__brand-name">Al-Frid</span>
            <span className="navbar__brand-subtitle">Online Qur'an Institution</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="navbar__actions">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="navbar__cta">
            <span>📱</span> Free Trial
          </a>
          <button className="navbar__admin-btn" onClick={onAdminClick} title="Admin Panel">
            ⚙️
          </button>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
          >
            {link.label}
          </a>
        ))}
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ margin: '8px 16px' }}>
          📱 Book Free Trial
        </a>
        <button className="navbar__admin-mobile-btn" onClick={() => { setMenuOpen(false); onAdminClick(); }}>
          ⚙️ Admin Panel
        </button>
      </div>
    </nav>
  );
}
