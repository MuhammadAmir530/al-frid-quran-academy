import './About.css';

const WHATSAPP = 'https://wa.me/923007201825';

const features = [
  { icon: '🎓', title: 'Qualified Scholars', desc: 'All teachers are certified Huffaz and Islamic scholars with verified credentials and years of teaching experience.' },
  { icon: '📱', title: 'Interactive Classes', desc: 'Live one-to-one sessions via Zoom/Skype with digital whiteboards, screen sharing, and interactive tools.' },
  { icon: '🌍', title: 'Global Reach', desc: 'Serving students in Pakistan, USA, UK, Canada, Australia, Saudi Arabia, UAE and 15+ more countries.' },
  { icon: '⏰', title: 'Flexible Schedule', desc: '24/7 class availability to accommodate different time zones. Classes fit around your daily routine.' },
  { icon: '👩‍🏫', title: 'Female Tutors', desc: 'Dedicated qualified female teachers available exclusively for sisters and young girls.' },
  { icon: '📊', title: 'Progress Tracking', desc: 'Regular assessments, monthly tests, and detailed progress reports shared with parents.' },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        {/* Section Header */}
        <div className="about__header">
          <div className="section-badge">🕌 About Al-Frid</div>
          <h2 className="section-title">Why Choose Al-Frid Online<br />Qur'an Institution?</h2>
          <div className="arabesque-divider">✦ ✦ ✦</div>
          <p className="section-subtitle">
            A dedicated platform for authentic Quranic & Islamic education — bringing knowledge directly to your home through modern technology.
          </p>
        </div>

        {/* Main Content */}
        <div className="about__main">
          <div className="about__text-col">
            <div className="about__quote">
              <span className="about__quote-icon">❝</span>
              <p>
                Al-Frid Online Qur'an Institution is more than just an online academy — it is a mission to spread the light of the Holy Quran to every corner of the world.
              </p>
            </div>

            <p className="about__para">
              Founded by <strong>Dr. Mufti Hafiz Ali Hassan Fridi</strong>, Al-Frid is a globally recognized online Quran learning center committed to providing authentic Islamic education to Muslims of all ages — from children to adults — regardless of their location or busy schedules.
            </p>
            <p className="about__para">
              We teach online and offline in <strong>Pakistan</strong> and abroad in <strong>USA, Canada, UK, Australia, Saudi Arabia</strong> and many more countries. Using advanced technology including high-speed internet, Zoom, Skype and interactive digital whiteboards, we deliver live one-to-one Quran classes you can attend from anywhere in the world.
            </p>
            <p className="about__para">
              Our courses include Nazra Quran, Hifz (Memorization), Tajweed, Tafseer, Arabic Language, English Language, Islamic Studies, and more — all taught by certified scholars with 20+ years of combined experience.
            </p>

            <div className="about__highlights">
              <div className="about__highlight">
                <span className="about__highlight-num">500+</span>
                <span className="about__highlight-text">Happy Students</span>
              </div>
              <div className="about__highlight">
                <span className="about__highlight-num">15+</span>
                <span className="about__highlight-text">Countries</span>
              </div>
              <div className="about__highlight">
                <span className="about__highlight-num">20+</span>
                <span className="about__highlight-text">Years Experience</span>
              </div>
            </div>

            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-green" style={{ display: 'inline-flex', marginTop: '8px' }}>
              📱 Start Free Demo Today
            </a>
          </div>

          <div className="about__features-col">
            <div className="about__features-grid">
              {features.map((f, i) => (
                <div key={i} className="about__feature-card">
                  <div className="about__feature-icon">{f.icon}</div>
                  <h3 className="about__feature-title">{f.title}</h3>
                  <p className="about__feature-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
