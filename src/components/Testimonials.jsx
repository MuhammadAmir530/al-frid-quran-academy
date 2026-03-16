import { useState } from 'react';
import { useData } from '../context/DataContext';
import './Testimonials.css';

export default function Testimonials() {
  const { testimonials } = useData();
  const [active, setActive] = useState(0);

  const prev = () => setActive(a => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive(a => (a + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <div className="section-badge">💬 Student Reviews</div>
          <h2 className="section-title">What Our Students Say</h2>
          <div className="arabesque-divider">✦ ✦ ✦</div>
        </div>

        <div className="testimonials__slider">
          <button className="testimonials__nav testimonials__nav--prev" onClick={prev} aria-label="Previous">
            ←
          </button>

          <div className="testimonials__card">
            <div className="testimonials__stars">
              {'⭐'.repeat(t.rating)}
            </div>
            <blockquote className="testimonials__quote">"{t.text}"</blockquote>
            <div className="testimonials__author">
              <div className="testimonials__avatar">
                {t.name.charAt(0)}
              </div>
              <div className="testimonials__author-info">
                <strong>{t.name}</strong>
                <span>{t.country}</span>
                <span className="testimonials__course">{t.course}</span>
              </div>
            </div>
          </div>

          <button className="testimonials__nav testimonials__nav--next" onClick={next} aria-label="Next">
            →
          </button>
        </div>

        {/* Dots */}
        <div className="testimonials__dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonials__dot ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Grid Preview */}
        <div className="testimonials__grid">
          {testimonials.map((item, i) => (
            <div
              key={item.id}
              className={`testimonials__mini-card ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              <div className="testimonials__mini-stars">{'⭐'.repeat(item.rating)}</div>
              <p>"{item.text.slice(0, 80)}..."</p>
              <strong>{item.name}</strong>
              <span>{item.country}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
