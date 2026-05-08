import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_BASE } from '../apiConfig';

function AdminDestinationCreate() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    await fetch(`${API_BASE}/destinations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    });
    navigate('/admin/destinations');
  };

  return (
    <section>
      <div className="page-header"><h1>Create Destination</h1><p>Add a destination record.</p></div>
      <div className="admin-section">
        <div className="admin-toolbar"><Link className="btn" to="/admin/destinations">Back to Destinations</Link></div>
        <div className="admin-card">
          <form className="contact-form" onSubmit={onSubmit}>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Destination name" required />
            <button className="btn" type="submit">Create Destination</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AdminDestinationCreate;
