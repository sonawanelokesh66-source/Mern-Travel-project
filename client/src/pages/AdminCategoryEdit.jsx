import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { API_BASE } from '../apiConfig';

function AdminCategoryEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');

  useEffect(() => {
    fetch(`${API_BASE}/categories/${id}`).then((r) => r.json()).then((d) => setName(d.name || ''));
  }, [id]);

  const onSubmit = async (event) => {
    event.preventDefault();
    await fetch(`${API_BASE}/categories/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    });
    navigate('/admin/categories');
  };

  return (
    <section>
      <div className="page-header"><h1>Edit Category</h1><p>Update a category record.</p></div>
      <div className="admin-section">
        <div className="admin-toolbar"><Link className="btn" to="/admin/categories">Back to Categories</Link></div>
        <div className="admin-card">
          <form className="contact-form" onSubmit={onSubmit}>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Category name" required />
            <button className="btn" type="submit">Update Category</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AdminCategoryEdit;
