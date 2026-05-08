import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { API_BASE } from '../apiConfig';

function AdminDestinationEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');

  useEffect(() => {
    fetch(`${API_BASE}/destinations/${id}`).then((r) => r.json()).then((d) => setName(d.name || d.title || ''));
  }, [id]);

  const onSubmit = async (event) => {
    event.preventDefault();
    await fetch(`${API_BASE}/destinations/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    });
    navigate('/admin/destinations');
  };

  return (
    <section>
      <div className="page-header"><h1>Edit Destination</h1><p>Update a destination record.</p></div>
      <div className="admin-section">
        <div className="admin-toolbar"><Link className="btn" to="/admin/destinations">Back to Destinations</Link></div>
        <div className="admin-card">
          <form className="contact-form" onSubmit={onSubmit}>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Destination name" required />
            <button className="btn" type="submit">Update Destination</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AdminDestinationEdit;
