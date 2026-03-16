import './Footer.css';

const WHATSAPP_LINK = 'https://wa.me/923007201825';
const EMAIL = 'alihassanraza70@gmail.com';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* Brand Column */}
            <div className="footer__col footer__col--brand">
              <div className="footer__brand">
                <img src="/logo.png" alt="Al-Frid Logo" className="footer__logo" />
                <div>
                  <div className="footer__brand-name">Al-Frid</div>
                  <div className="footer__brand-subtitle">Online Qur'an Institution</div>
                </div>
              </div>
              <p className="footer__about">
                A globally recognized online platform for authentic Quranic and Islamic education. Serving students in Pakistan and 15+ countries worldwide with one-to-one interactive classes.
              </p>
              <div className="footer__bismillah">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِیْمِ</div>
              <div className="footer__contact-links">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="footer__contact-btn footer__contact-btn--wa">
                  📱 +92 300 7201825
                </a>
                <a href={`mailto:${EMAIL}`} className="footer__contact-btn footer__contact-btn--email">
                  ✉️ {EMAIL}
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__col">
              <h4 className="footer__col-title">Quick Links</h4>
              <ul className="footer__links">
                {[
                  ['#home', 'Home'],
                  ['#about', 'About Us'],
                  ['#courses', 'Courses'],
                  ['#fees', 'Fee Structure'],
                  ['#teachers', 'Our Teachers'],
                  ['#contact', 'Contact'],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a href={href} className="footer__link" onClick={(e) => { e.preventDefault(); scrollTo(href); }}>
                      → {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div className="footer__col">
              <h4 className="footer__col-title">Our Courses</h4>
              <ul className="footer__links">
                {[
                  'Nazra Quran',
                  'Hifz (Memorization)',
                  'Tajweed Course',
                  'Tafseer Quran',
                  'Quran Ijazah',
                  'Arabic Language',
                  'English Language',
                  'Islamic Studies',
                ].map(course => (
                  <li key={course}>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="footer__link">
                      → {course}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Us */}
            <div className="footer__col">
              <h4 className="footer__col-title">Why Al-Frid?</h4>
              <ul className="footer__why-list">
                {[
                  ['✅', 'No Registration Fee'],
                  ['✅', '2 Days Free Demo'],
                  ['✅', 'Expert Certified Teachers'],
                  ['✅', 'Female Tutors Available'],
                  ['✅', 'One-to-One Classes'],
                  ['✅', '24/7 Flexible Timing'],
                  ['✅', 'Kids & Adults Welcome'],
                  ['✅', 'Global Online Reach'],
                ].map(([icon, text]) => (
                  <li key={text}>
                    <span>{icon}</span> {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} Al-Frid Online Qur'an Institution. All rights reserved.</p>
          <p>Founded by <strong>Dr. Mufti Hafiz Ali Hassan Fridi</strong> · Made with ❤️ for the Ummah</p>
        </div>
      </div>
    </footer>
  );
}
