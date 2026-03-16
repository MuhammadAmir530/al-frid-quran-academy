import { useState } from 'react';
import { useData } from '../context/DataContext';
import AdminCourses from './AdminCourses';
import AdminTeachers from './AdminTeachers';
import AdminFees from './AdminFees';
import './AdminPanel.css';
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'Aqsa@786!alfrid';

export default function AdminPanel({ onClose }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('courses');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  const tabs = [
    { id: 'courses', label: '📚 Courses', icon: '📚' },
    { id: 'teachers', label: '👨‍🏫 Teachers', icon: '👨‍🏫' },
    { id: 'fees', label: '💰 Fee Structure', icon: '💰' },
  ];

  return (
    <div className="admin-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="admin-panel">
        {/* Header */}
        <div className="admin-panel__header">
          <div className="admin-panel__header-left">
            <span className="admin-panel__header-icon">⚙️</span>
            <div>
              <h2 className="admin-panel__title">Admin Panel</h2>
              <p className="admin-panel__subtitle">Al-Frid Institution Management</p>
            </div>
          </div>
          <button className="admin-panel__close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        {/* Login Form */}
        {!authenticated ? (
          <div className="admin-login">
            <div className="admin-login__icon">🔐</div>
            <h3>Admin Access Required</h3>
            <p>Please enter your admin password to continue.</p>
            <form onSubmit={handleLogin} className="admin-login__form">
              <div className="admin-login__field">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoFocus
                  id="admin-password-input"
                />
              </div>
              {error && <p className="admin-login__error">⚠️ {error}</p>}
              <button type="submit" className="admin-login__btn">
                🔓 Login to Admin
              </button>
            </form>
          </div>
        ) : (
          /* Admin Content */
          <div className="admin-content">
            {/* Tabs */}
            <div className="admin-tabs">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`admin-tab ${activeTab === tab.id ? 'admin-tab--active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  id={`admin-tab-${tab.id}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="admin-tab-content">
              {activeTab === 'courses' && <AdminCourses />}
              {activeTab === 'teachers' && <AdminTeachers />}
              {activeTab === 'fees' && <AdminFees />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
