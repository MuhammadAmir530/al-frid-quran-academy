import { useData } from '../context/DataContext';
import './Teachers.css';

const WHATSAPP = 'https://wa.me/923007201825';

export default function Teachers() {
  const { teachers } = useData();

  return (
    <section id="teachers" className="teachers">
      <div className="container">
        <div className="teachers__header">
          <div className="section-badge">👨‍🏫 Our Faculty</div>
          <h2 className="section-title">Meet Our Expert<br />Qur'an Teachers</h2>
          <div className="arabesque-divider">✦ ✦ ✦</div>
          <p className="section-subtitle">
            Learn from certified Islamic scholars and Huffaz with decades of experience in Quranic education.
          </p>
        </div>

        <div className="teachers__grid">
          {teachers.map((teacher, i) => (
            <div key={teacher.id} className="teacher-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="teacher-card__img-wrap">
                <img
                  src={teacher.image || '/teacher-default.png'}
                  alt={teacher.name}
                  className="teacher-card__img"
                  onError={(e) => { e.target.src = '/teacher-default.png'; }}
                />
                <div className="teacher-card__img-ring" />
              </div>

              <div className="teacher-card__body">
                <h3 className="teacher-card__name">{teacher.name}</h3>
                <p className="teacher-card__title">{teacher.title}</p>

                <div className="teacher-card__tags">
                  {teacher.experience && (
                    <span className="teacher-card__tag">📅 {teacher.experience}</span>
                  )}
                  {teacher.students && (
                    <span className="teacher-card__tag">👨‍🎓 {teacher.students} Students</span>
                  )}
                </div>

                {teacher.specialization && (
                  <p className="teacher-card__spec">
                    <strong>Specialization:</strong> {teacher.specialization}
                  </p>
                )}

                {teacher.description && (
                  <p className="teacher-card__desc">{teacher.description}</p>
                )}

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="teacher-card__btn"
                >
                  📱 Book a Trial Class
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Join as Teacher */}
        <div className="teachers__join">
          <div className="teachers__join-icon">🌟</div>
          <div className="teachers__join-text">
            <h3>Are you a qualified Quran teacher?</h3>
            <p>Join our growing team of dedicated Islamic educators and make a difference worldwide.</p>
          </div>
          <a href={`mailto:alihassanraza70@gmail.com`} className="btn-green">
            ✉️ Apply to Teach
          </a>
        </div>
      </div>
    </section>
  );
}
