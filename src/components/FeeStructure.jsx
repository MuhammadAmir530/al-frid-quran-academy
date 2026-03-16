import { useData } from '../context/DataContext';
import './FeeStructure.css';

const WHATSAPP = 'https://wa.me/923007201825';

export default function FeeStructure() {
  const { feeStructure } = useData();
  const { currency, plans, note } = feeStructure;

  return (
    <section id="fees" className="fees">
      <div className="container">
        <div className="fees__header">
          <div className="section-badge">💰 Pricing</div>
          <h2 className="section-title">Affordable Fee Structure</h2>
          <div className="arabesque-divider">✦ ✦ ✦</div>
          <p className="section-subtitle">
            Flexible and transparent pricing for every budget. All plans include 2 days free demo — No payment required!
          </p>
        </div>

        <div className="fees__grid">
          {plans.map((plan) => (
            <div key={plan.id} className={`fee-card ${plan.popular ? 'fee-card--popular' : ''}`}>
              {plan.popular && <div className="fee-card__popular-badge">⭐ Most Popular</div>}

              <div className="fee-card__header">
                <div className="fee-card__icon">{plan.icon}</div>
                <h3 className="fee-card__name">{plan.name}</h3>
                <div
                  className="fee-card__price"
                  style={{ fontSize: String(plan.price).length > 8 ? '1.8rem' : '2.5rem', flexWrap: 'wrap' }}
                >
                  {currency && <span className="fee-card__currency">{currency}</span>}
                  <span className="fee-card__amount">
                    {typeof plan.price === 'number' ? plan.price.toLocaleString() : plan.price}
                  </span>
                  <span className="fee-card__period">/{plan.period}</span>
                </div>
                <p className="fee-card__sub">
                  {plan.classesPerWeek} classes/week · {plan.classDuration}/class
                </p>
              </div>

              <ul className="fee-card__features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="fee-card__feature">
                    <span className="fee-card__check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className={plan.popular ? 'fee-card__btn-popular' : 'fee-card__btn'}>
                📱 Enroll Now
              </a>
            </div>
          ))}
        </div>

        {note && (
          <div className="fees__note">
            <span>💡</span>
            <p>{note}</p>
          </div>
        )}

        {/* Free Demo Banner */}
        <div className="fees__demo-banner">
          <div className="fees__demo-content">
            <div className="fees__demo-icon">🎁</div>
            <div>
              <h3>Start With a FREE 2-Day Demo!</h3>
              <p>No registration fee. No credit card. No commitment. Just pure Quranic learning!</p>
            </div>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book Free Demo Now
          </a>
        </div>
      </div>
    </section>
  );
}
