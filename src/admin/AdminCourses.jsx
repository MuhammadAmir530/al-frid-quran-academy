import { useState } from 'react';
import { useData } from '../context/DataContext';

const EMPTY_COURSE = {
  title: '', titleUrdu: '', description: '', icon: '📖',
  badge: '', duration: '', level: 'All Levels',
};

const LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'All Levels'];

export default function AdminCourses() {
  const { courses, addCourse, updateCourse, deleteCourse } = useData();
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY_COURSE);

  const handleOpen = (course = null) => {
    if (course) {
      setEditing(course.id);
      setForm({ ...course });
    } else {
      setEditing(null);
      setForm(EMPTY_COURSE);
    }
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
    setEditing(null);
    setForm(EMPTY_COURSE);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    if (editing) {
      updateCourse(editing, form);
    } else {
      addCourse(form);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      deleteCourse(id);
    }
  };

  return (
    <div>
      <h3 className="admin-section__title">📚 Manage Courses ({courses.length})</h3>

      <button className="admin-add-trigger" onClick={() => handleOpen()}>
        ➕ Add New Course
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="admin-form">
          <div className="admin-form__group">
            <label>Course Title *</label>
            <input name="title" value={form.title} onChange={handleChange} placeholder="e.g. Nazra Quran" required />
          </div>
          <div className="admin-form__group">
            <label>Urdu Title</label>
            <input name="titleUrdu" value={form.titleUrdu} onChange={handleChange} placeholder="e.g. ناظرہ قرآن" style={{ fontFamily: 'Amiri, serif', direction: 'rtl' }} />
          </div>
          <div className="admin-form__group admin-form__full">
            <label>Description *</label>
            <textarea name="description" value={form.description} onChange={handleChange} placeholder="Brief description of the course..." required />
          </div>
          <div className="admin-form__group">
            <label>Icon (emoji)</label>
            <input name="icon" value={form.icon} onChange={handleChange} placeholder="📖" />
          </div>
          <div className="admin-form__group">
            <label>Badge Label</label>
            <input name="badge" value={form.badge} onChange={handleChange} placeholder="e.g. Most Popular" />
          </div>
          <div className="admin-form__group">
            <label>Duration</label>
            <input name="duration" value={form.duration} onChange={handleChange} placeholder="e.g. 3-6 Months" />
          </div>
          <div className="admin-form__group">
            <label>Level</label>
            <select name="level" value={form.level} onChange={handleChange}>
              {LEVELS.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>
          <div className="admin-form__actions">
            <button type="button" className="admin-btn-cancel" onClick={handleClose}>Cancel</button>
            <button type="submit" className="admin-btn-add">
              {editing ? '💾 Save Changes' : '➕ Add Course'}
            </button>
          </div>
        </form>
      )}

      <div>
        {courses.map(course => (
          <div key={course.id} className="admin-item">
            <div className="admin-item__icon">{course.icon || '📖'}</div>
            <div className="admin-item__body">
              <div className="admin-item__title">{course.title}</div>
              {course.titleUrdu && (
                <div className="admin-item__sub" style={{ fontFamily: 'Amiri, serif', direction: 'rtl' }}>{course.titleUrdu}</div>
              )}
              <div className="admin-item__sub">
                {course.level} · {course.duration} {course.badge && `· 🏷️ ${course.badge}`}
              </div>
              <div className="admin-item__desc">{course.description}</div>
            </div>
            <div className="admin-item__actions">
              <button className="admin-btn-edit" onClick={() => handleOpen(course)}>✏️ Edit</button>
              <button className="admin-btn-delete" onClick={() => handleDelete(course.id)}>🗑️ Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
