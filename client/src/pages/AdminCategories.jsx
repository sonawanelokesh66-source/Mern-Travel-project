import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE } from '../apiConfig';

function AdminCategories() {
  const [categories, setCategories] = useState([]);

  const loadCategories = () => {
    fetch(`${API_BASE}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(Array.isArray(data) ? data : []));
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const deleteCategory = async (id) => {
    await fetch(`${API_BASE}/categories/${id}`, { method: 'DELETE' });
    loadCategories();
  };

  return (
    <section>
      <div className="page-header">
        <h1>Admin: Categories</h1>
        <p>Create, update, and delete categories.</p>
      </div>
      <div className="admin-section">
        <div className="admin-toolbar">
          <div className="admin-toolbar-nav">
            <Link className="btn btn-admin-tab" to="/admin">Admin Home</Link>
            <Link className="btn btn-admin-tab" to="/admin/blogs">Blogs</Link>
            <Link className="btn btn-admin-tab" to="/admin/destinations">Destinations</Link>
          </div>
          <Link className="btn btn-create" to="/admin/categories/new">+ Create Category</Link>
        </div>

        <div className="admin-card">
          <h3>All Categories</h3>
          <div className="admin-table">
            <div className="admin-table-head">
              <span>Name</span>
              <span>Actions</span>
            </div>
            {categories.map((item) => (
              <div key={item._id} className="admin-table-row">
                <span>{item.name || item.title}</span>
                <div className="admin-actions">
                  <Link className="btn" to={`/admin/categories/edit/${item._id}`}>Edit</Link>
                  <button className="btn danger" type="button" onClick={() => deleteCategory(item._id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminCategories;
