import { useState } from 'react';
import { useData } from '../context/DataContext';

const EMPTY_TEACHER = {
  name: '', title: '', specialization: '',
  experience: '', students: '', description: '', image: '',
};

export default function AdminTeachers() {
  const { teachers, addTeacher, updateTeacher, deleteTeacher } = useData();
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY_TEACHER);

  const handleOpen = (teacher = null) => {
    if (teacher) {
      setEditing(teacher.id);
      setForm({ ...teacher });
    } else {
      setEditing(null);
      setForm(EMPTY_TEACHER);
    }
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
    setEditing(null);
    setForm(EMPTY_TEACHER);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    if (editing) {
      updateTeacher(editing, form);
    } else {
      addTeacher(form);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to remove this teacher?')) {
      deleteTeacher(id);
    }
  };

  return (
    <div>
      <h3 className="admin-section__title">👨‍🏫 Manage Teachers ({teachers.length})</h3>

      <button className="admin-add-trigger" onClick={() => handleOpen()}>
        ➕ Add New Teacher
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="admin-form">
          <div className="admin-form__group">
            <label>Full Name *</label>
            <input name="name" value={form.name} onChange={handleChange} placeholder="e.g. Dr. Ali Hassan Fridi" required />
          </div>
          <div className="admin-form__group">
            <label>Job Title</label>
            <input name="title" value={form.title} onChange={handleChange} placeholder="e.g. Head Teacher" />
          </div>
          <div className="admin-form__group">
            <label>Specialization</label>
            <input name="specialization" value={form.specialization} onChange={handleChange} placeholder="e.g. Hifz, Tajweed" />
          </div>
          <div className="admin-form__group">
            <label>Experience</label>
            <input name="experience" value={form.experience} onChange={handleChange} placeholder="e.g. 10+ Years" />
          </div>
          <div className="admin-form__group">
            <label>Students Taught</label>
            <input name="students" value={form.students} onChange={handleChange} placeholder="e.g. 200+" />
          </div>
          <div className="admin-form__group">
            <label>Profile Image URL</label>
            <input name="image" value={form.image} onChange={handleChange} placeholder="https://... (leave blank for default)" />
          </div>
          <div className="admin-form__group admin-form__full">
            <label>Bio / Description</label>
            <textarea name="description" value={form.description} onChange={handleChange} placeholder="Brief biography of the teacher..." />
          </div>
          <div className="admin-form__actions">
            <button type="button" className="admin-btn-cancel" onClick={handleClose}>Cancel</button>
            <button type="submit" className="admin-btn-add">
              {editing ? '💾 Save Changes' : '➕ Add Teacher'}
            </button>
          </div>
        </form>
      )}

      <div>
        {teachers.map(teacher => (
          <div key={teacher.id} className="admin-item">
            <div className="admin-item__icon">
              <img
                src={teacher.image || '/teacher-default.png'}
                alt={teacher.name}
                style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(30,122,56,0.2)' }}
                onError={(e) => { e.target.src = '/teacher-default.png'; }}
              />
            </div>
            <div className="admin-item__body">
              <div className="admin-item__title">{teacher.name}</div>
              <div className="admin-item__sub">{teacher.title} · {teacher.experience}</div>
              <div className="admin-item__sub">Specialization: {teacher.specialization} · {teacher.students} Students</div>
              {teacher.description && <div className="admin-item__desc">{teacher.description}</div>}
            </div>
            <div className="admin-item__actions">
              <button className="admin-btn-edit" onClick={() => handleOpen(teacher)}>✏️ Edit</button>
              <button className="admin-btn-delete" onClick={() => handleDelete(teacher.id)}>🗑️ Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
