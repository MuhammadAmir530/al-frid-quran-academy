import { useEffect, useRef } from 'react';
import { useData } from '../context/DataContext';
import './Hero.css';

const WHATSAPP = 'https://wa.me/923007201825';

export default function Hero() {
  const { stats } = useData();
  const canvasRef = useRef(null);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let width, height;
    let particles = [];

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = -Math.random() * 0.5 - 0.2;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.5 ? '#d4af37' : '#86d9a0';
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= 0.0015;
        if (this.opacity <= 0 || this.y < -10) this.reset();
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < 60; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => { p.update(); p.draw(); });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="hero__canvas" />
      <div className="hero__bg" />

      {/* Islamic geometric overlay */}
      <div className="hero__pattern" />

      <div className="hero__container container">
        <div className="hero__content">
          {/* Arabic Bismillah */}
          <div className="hero__bismillah">
            بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِیْمِ
          </div>

          <div className="section-badge" style={{ justifyContent: 'center', marginBottom: '20px' }}>
            <span>🌙</span> Trusted by 500+ Students Worldwide
          </div>

          <h1 className="hero__title">
            Al-Frid Online
            <span className="hero__title-highlight"> Qur'an</span>
            <br />Institution
          </h1>

          <p className="hero__tagline">
            "The best amongst you are those who learn and teach the Quran"
            <span className="hero__hadith-ref"> — Prophet Muhammad ﷺ</span>
          </p>

          <p className="hero__description">
            Learn Quran online with certified scholars from the comfort of your home.
            One-to-one interactive classes for all ages. Available in Pakistan, USA, UK, Canada, Australia & worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="hero__ctas">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary hero__btn-main">
              <span>📱</span> Book 2 Days Free Demo
            </a>
            <a href="#courses" className="btn-secondary" onClick={(e) => { e.preventDefault(); document.querySelector('#courses')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <span>📚</span> Explore Courses
            </a>
          </div>

          {/* Trust Badges */}
          <div className="hero__badges">
            <div className="hero__badge">✅ No Registration Fee</div>
            <div className="hero__badge">✅ One-to-One Classes</div>
            <div className="hero__badge">✅ Flexible Timing</div>
            <div className="hero__badge">✅ Female Tutors Available</div>
          </div>
        </div>

        {/* Floating card */}
        <div className="hero__card-wrap">
          <div className="hero__demo-card">
            <div className="hero__demo-icon">🎁</div>
            <div className="hero__demo-number">02</div>
            <div className="hero__demo-label">DAYS</div>
            <div className="hero__demo-text">FREE DEMO</div>
            <div className="hero__demo-sub">No credit card needed</div>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hero__demo-btn">
              Start Now →
            </a>
          </div>

          <div className="hero__features-card">
            <h3 className="hero__features-title">Why Al-Frid?</h3>
            {[
              ['🎓', 'Expert Quran Scholars'],
              ['🕌', 'Authentic Islamic Teaching'],
              ['📱', 'Zoom / Skype Classes'],
              ['🌍', 'Students in 15+ Countries'],
              ['👩‍🏫', 'Female Tutors for Sisters'],
              ['📊', 'Monthly Progress Reports'],
            ].map(([icon, text]) => (
              <div key={text} className="hero__feature-item">
                <span className="hero__feature-icon">{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="hero__stats">
        <div className="container">
          <div className="hero__stats-grid">
            {stats.map((stat) => (
              <div key={stat.id} className="hero__stat">
                <span className="hero__stat-icon">{stat.icon}</span>
                <div className="hero__stat-value">{stat.value}{stat.suffix}</div>
                <div className="hero__stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
