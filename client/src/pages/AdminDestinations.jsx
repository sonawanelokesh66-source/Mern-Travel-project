import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE } from '../apiConfig';

function AdminDestinations() {
  const [destinations, setDestinations] = useState([]);

  const loadDestinations = () => {
    fetch(`${API_BASE}/destinations`)
      .then((res) => res.json())
      .then((data) => setDestinations(Array.isArray(data) ? data : []));
  };

  useEffect(() => {
    loadDestinations();
  }, []);

  const deleteDestination = async (id) => {
    await fetch(`${API_BASE}/destinations/${id}`, { method: 'DELETE' });
    loadDestinations();
  };

  return (
    <section>
      <div className="page-header">
        <h1>Admin: Destinations</h1>
        <p>Create, update, and delete destinations.</p>
      </div>
      <div className="admin-section">
        <div className="admin-toolbar">
          <div className="admin-toolbar-nav">
            <Link className="btn btn-admin-tab" to="/admin">Admin Home</Link>
            <Link className="btn btn-admin-tab" to="/admin/blogs">Blogs</Link>
            <Link className="btn btn-admin-tab" to="/admin/categories">Categories</Link>
          </div>
          <Link className="btn btn-create" to="/admin/destinations/new">+ Create Destination</Link>
        </div>

        <div className="admin-card">
          <h3>All Destinations</h3>
          <div className="admin-table">
            <div className="admin-table-head">
              <span>Name</span>
              <span>Actions</span>
            </div>
            {destinations.map((item) => (
              <div key={item._id} className="admin-table-row">
                <span>{item.name || item.title}</span>
                <div className="admin-actions">
                  <Link className="btn" to={`/admin/destinations/edit/${item._id}`}>Edit</Link>
                  <button className="btn danger" type="button" onClick={() => deleteDestination(item._id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminDestinations;
