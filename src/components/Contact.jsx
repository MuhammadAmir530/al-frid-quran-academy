import './Contact.css';

const WHATSAPP_NUM = '+92 300 7201825';
const WHATSAPP_LINK = 'https://wa.me/923007201825';
const EMAIL = 'alihassanraza70@gmail.com';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      {/* CTA Banner */}
      <div className="contact__cta-banner">
        <div className="contact__cta-content container">
          <div className="contact__cta-text">
            <h2>Start Your Quranic Journey Today!</h2>
            <p>Join thousands of students worldwide learning Quran from home. Book your 2-day free demo now!</p>
            <ul className="contact__cta-list">
              <li>✅ No Registration Fee</li>
              <li>✅ 2 Days Free Demo</li>
              <li>✅ 24/7 Classes Available</li>
              <li>✅ Female Tutors for Sisters</li>
              <li>✅ Kids & Adults Welcome</li>
            </ul>
          </div>
          <div className="contact__cta-actions">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary contact__cta-btn-main">
              📱 Book Free Demo
            </a>
            <a href={`mailto:${EMAIL}`} className="btn-secondary contact__cta-btn-sec">
              ✉️ Send Email
            </a>
            <div className="contact__cta-badge">
              <span>🎁</span>
              <div>
                <strong>2 Days FREE</strong>
                <small>No credit card needed</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="contact__info-section">
        <div className="container">
          <div className="contact__info-grid">
            {/* Card 1: WhatsApp */}
            <div className="contact__info-card">
              <div className="contact__info-icon contact__info-icon--whatsapp">📱</div>
              <h3>WhatsApp</h3>
              <p>Message us anytime — we respond quickly!</p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="contact__info-link">
                {WHATSAPP_NUM}
              </a>
            </div>

            {/* Card 2: Email */}
            <div className="contact__info-card">
              <div className="contact__info-icon contact__info-icon--email">✉️</div>
              <h3>Email Us</h3>
              <p>For inquiries, enrollment, and support</p>
              <a href={`mailto:${EMAIL}`} className="contact__info-link">
                {EMAIL}
              </a>
            </div>

            {/* Card 3: Availability */}
            <div className="contact__info-card">
              <div className="contact__info-icon contact__info-icon--time">⏰</div>
              <h3>Class Timings</h3>
              <p>Available 24/7 to suit your timezone</p>
              <span className="contact__info-link">Flexible · Any Time · Any Day</span>
            </div>

            {/* Card 4: Location */}
            <div className="contact__info-card">
              <div className="contact__info-icon contact__info-icon--location">🌍</div>
              <h3>We Serve</h3>
              <p>Online worldwide & offline in Pakistan</p>
              <span className="contact__info-link">Pakistan · USA · UK · Canada · KSA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
