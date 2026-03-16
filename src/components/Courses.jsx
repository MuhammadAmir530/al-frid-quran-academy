import { useData } from '../context/DataContext';
import './Courses.css';

const WHATSAPP = 'https://wa.me/923007201825';

const LEVEL_COLORS = {
  'Beginner': '#4cc06a',
  'Intermediate': '#d4af37',
  'Advanced': '#e07b39',
  'All Levels': '#5b8cdb',
};

export default function Courses() {
  const { courses } = useData();

  return (
    <section id="courses" className="courses">
      {/* Wave Top */}
      <div className="courses__wave-top">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z" fill="#f3f8f5" />
        </svg>
      </div>

      <div className="container">
        <div className="courses__header">
          <div className="section-badge">📚 Our Programs</div>
          <h2 className="section-title">Comprehensive Qur'an &<br />Islamic Courses</h2>
          <div className="arabesque-divider">✦ ✦ ✦</div>
          <p className="section-subtitle">
            Choose from our wide range of Islamic education courses designed for all age groups and skill levels. All starting with a 2-day free demo!
          </p>
        </div>

        <div className="courses__grid">
          {courses.map((course, i) => (
            <div key={course.id} className="course-card" style={{ animationDelay: `${i * 0.08}s` }}>
              {course.badge && (
                <div className="course-card__badge">{course.badge}</div>
              )}
              <div className="course-card__icon">{course.icon || '📖'}</div>
              <h3 className="course-card__title">{course.title}</h3>
              {course.titleUrdu && (
                <p className="course-card__urdu">{course.titleUrdu}</p>
              )}
              <p className="course-card__desc">{course.description}</p>

              <div className="course-card__meta">
                {course.duration && (
                  <span className="course-card__tag">⏱ {course.duration}</span>
                )}
                {course.level && (
                  <span
                    className="course-card__tag course-card__level"
                    style={{ color: LEVEL_COLORS[course.level] || '#5b8cdb',
                             borderColor: LEVEL_COLORS[course.level] || '#5b8cdb',
                             background: (LEVEL_COLORS[course.level] || '#5b8cdb') + '14' }}
                  >
                    🎯 {course.level}
                  </span>
                )}
              </div>

              <div className="course-card__actions">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="course-card__btn-primary">
                  📱 Free Demo
                </a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="course-card__btn-secondary">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="courses__cta">
          <p>Don't see your preferred course? <strong>We offer custom Islamic education packages!</strong></p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary">
            📞 Contact Us for Custom Course
          </a>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="courses__wave-bottom">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,60 C360,0 1080,0 1440,60 L1440,0 L0,0 Z" fill="#f3f8f5" />
        </svg>
      </div>
    </section>
  );
}
