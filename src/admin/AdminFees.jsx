import { useState } from 'react';
import { useData } from '../context/DataContext';

export default function AdminFees() {
  const { feeStructure, updateFeeStructure } = useData();
  const [fees, setFees] = useState(JSON.parse(JSON.stringify(feeStructure)));
  const [saved, setSaved] = useState(false);

  const handlePlanChange = (planId, field, value) => {
    setFees(prev => ({
      ...prev,
      plans: prev.plans.map(p =>
        p.id === planId
          ? { ...p, [field]: field === 'price' ? Number(value) : value }
          : p
      )
    }));
    setSaved(false);
  };

  const handleFeatureChange = (planId, idx, value) => {
    setFees(prev => ({
      ...prev,
      plans: prev.plans.map(p => {
        if (p.id !== planId) return p;
        const features = [...p.features];
        features[idx] = value;
        return { ...p, features };
      })
    }));
    setSaved(false);
  };

  const addFeature = (planId) => {
    setFees(prev => ({
      ...prev,
      plans: prev.plans.map(p =>
        p.id === planId ? { ...p, features: [...p.features, ''] } : p
      )
    }));
    setSaved(false);
  };

  const removeFeature = (planId, idx) => {
    setFees(prev => ({
      ...prev,
      plans: prev.plans.map(p => {
        if (p.id !== planId) return p;
        const features = [...p.features];
        features.splice(idx, 1);
        return { ...p, features };
      })
    }));
    setSaved(false);
  };

  const addPlan = () => {
    const newPlan = {
      id: Date.now(),
      name: 'New Plan',
      icon: '⭐',
      price: 3000,
      period: 'month',
      classesPerWeek: 4,
      classDuration: '40 mins',
      popular: false,
      features: ['Classes per Week', 'One-to-One Session', '2 Days Free Demo'],
    };
    setFees(prev => ({ ...prev, plans: [...prev.plans, newPlan] }));
    setSaved(false);
  };

  const deletePlan = (planId) => {
    if (window.confirm('Delete this plan?')) {
      setFees(prev => ({ ...prev, plans: prev.plans.filter(p => p.id !== planId) }));
      setSaved(false);
    }
  };

  const togglePopular = (planId) => {
    setFees(prev => ({
      ...prev,
      plans: prev.plans.map(p => ({ ...p, popular: p.id === planId ? !p.popular : false }))
    }));
    setSaved(false);
  };

  const handleSave = () => {
    updateFeeStructure(fees);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <h3 className="admin-section__title" style={{ marginBottom: 0 }}>💰 Manage Fee Structure</h3>
        <button
          onClick={handleSave}
          style={{
            padding: '10px 24px', background: saved ? '#16a34a' : 'linear-gradient(135deg, #0f3d22, #1e7a38)',
            color: 'white', fontWeight: 700, fontSize: '0.88rem',
            borderRadius: 999, border: 'none', cursor: 'pointer', transition: 'all 0.2s'
          }}
        >
          {saved ? '✅ Saved!' : '💾 Save All Changes'}
        </button>
      </div>

      {/* Currency & Note */}
      <div className="admin-form" style={{ gridTemplateColumns: '1fr 1fr', marginBottom: 24 }}>
        <div className="admin-form__group">
          <label>Currency Label</label>
          <input
            value={fees.currency}
            onChange={(e) => { setFees(prev => ({ ...prev, currency: e.target.value })); setSaved(false); }}
            placeholder="e.g. PKR"
          />
        </div>
        <div className="admin-form__group admin-form__full">
          <label>Footer Note</label>
          <input
            value={fees.note}
            onChange={(e) => { setFees(prev => ({ ...prev, note: e.target.value })); setSaved(false); }}
            placeholder="Special discount note..."
          />
        </div>
      </div>

      {/* Plans */}
      {fees.plans.map(plan => (
        <div key={plan.id} style={{
          background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 16,
          padding: 20, marginBottom: 16
        }}>
          {/* Plan Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: '1.5rem' }}>{plan.icon}</span>
              <strong style={{ color: '#0f3d22', fontSize: '1rem' }}>{plan.name}</strong>
              {plan.popular && <span style={{ padding: '2px 10px', background: '#d4af37', color: '#0f3d22', borderRadius: 999, fontSize: '0.72rem', fontWeight: 700 }}>POPULAR</span>}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                onClick={() => togglePopular(plan.id)}
                style={{ padding: '5px 12px', background: plan.popular ? '#d4af371f' : 'white', border: '1px solid #d4af37', color: '#b38600', borderRadius: 999, fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
              >
                {plan.popular ? '⭐ Unset Popular' : '⭐ Set Popular'}
              </button>
              <button onClick={() => deletePlan(plan.id)} className="admin-btn-delete">🗑️</button>
            </div>
          </div>

          {/* Plan Fields Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 16 }}>
            {[
              ['Plan Name', 'name', 'text'],
              ['Icon (emoji)', 'icon', 'text'],
              ['Price', 'price', 'number'],
              ['Period', 'period', 'text'],
              ['Classes/Week', 'classesPerWeek', 'number'],
              ['Class Duration', 'classDuration', 'text'],
            ].map(([label, field, type]) => (
              <div key={field} className="admin-form__group">
                <label>{label}</label>
                <input
                  type={type}
                  value={plan[field]}
                  onChange={(e) => handlePlanChange(plan.id, field, e.target.value)}
                />
              </div>
            ))}
          </div>

          {/* Features */}
          <div>
            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#4b5563', display: 'block', marginBottom: 8 }}>Features List</label>
            {plan.features.map((feature, idx) => (
              <div key={idx} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                <input
                  value={feature}
                  onChange={(e) => handleFeatureChange(plan.id, idx, e.target.value)}
                  style={{ flex: 1, padding: '7px 10px', border: '1px solid #d1d5db', borderRadius: 8, fontSize: '0.85rem', outline: 'none' }}
                  placeholder="Feature description..."
                />
                <button
                  onClick={() => removeFeature(plan.id, idx)}
                  style={{ padding: '6px 10px', background: '#fef2f2', border: '1px solid #fca5a5', color: '#dc2626', borderRadius: 8, cursor: 'pointer', fontSize: '0.85rem' }}
                >✕</button>
              </div>
            ))}
            <button
              onClick={() => addFeature(plan.id)}
              style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', background: 'white', border: '1px dashed #9ca3af', borderRadius: 8, color: '#6b7280', fontSize: '0.82rem', cursor: 'pointer', marginTop: 6 }}
            >
              ➕ Add Feature
            </button>
          </div>
        </div>
      ))}

      {/* Add Plan */}
      <button className="admin-add-trigger" onClick={addPlan}>
        ➕ Add New Pricing Plan
      </button>
    </div>
  );
}
