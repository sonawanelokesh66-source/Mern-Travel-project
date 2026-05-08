import { useState } from 'react';
import { API_BASE } from '../apiConfig';

function Admin() {
  const [message, setMessage] = useState('');

  const runSeed = async () => {
    const response = await fetch(`${API_BASE}/admin/seed`, {
      method: 'POST'
    });
    const data = await response.json();
    setMessage(data.message || 'Seed completed');
  };

  const deleteAll = async () => {
    const response = await fetch(`${API_BASE}/admin/delete-all`, {
      method: 'DELETE'
    });
    const data = await response.json();
    setMessage(data.message || 'All data deleted');
  };

  return (
    <section>
      <div className="page-header">
        <h1>Admin Panel</h1>
        <p>Choose a collection to manage CRUD operations.</p>
      </div>

      <div className="admin-section">
        <div className="admin-actions">
          <button className="btn" type="button" onClick={runSeed}>Seed 20 Blogs</button>
          <button className="btn danger" type="button" onClick={deleteAll}>Delete All Data</button>
        </div>
        {message ? <p className="seed-msg">{message}</p> : null}
        <div className="mini-grid">
          <article className="mini-card">
            <h4>Blogs</h4>
            <p>Create, update, and delete blog posts.</p>
            <a className="btn" href="/admin/blogs">Manage Blogs</a>
          </article>
          <article className="mini-card">
            <h4>Categories</h4>
            <p>Manage available category options.</p>
            <a className="btn" href="/admin/categories">Manage Categories</a>
          </article>
          <article className="mini-card">
            <h4>Destinations</h4>
            <p>Manage destination collection entries.</p>
            <a className="btn" href="/admin/destinations">Manage Destinations</a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Admin;
