import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { API_BASE } from '../apiConfig';

function AdminBlogEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [form, setForm] = useState({
    title: '',
    content: '',
    author: '',
    imgUrl: '',
    categoryId: '',
    destinationId: '',
    isTrending: false,
    isFeatured: false
  });

  useEffect(() => {
    fetch(`${API_BASE}/categories`).then((r) => r.json()).then((d) => setCategories(Array.isArray(d) ? d : []));
    fetch(`${API_BASE}/destinations`).then((r) => r.json()).then((d) => setDestinations(Array.isArray(d) ? d : []));
    fetch(`${API_BASE}/blogs/${id}`).then((r) => r.json()).then((blog) => {
      setForm({
        title: blog.title || '',
        content: blog.content || '',
        author: blog.author || '',
        imgUrl: blog.imgUrl || '',
        categoryId: blog.categoryId || '',
        destinationId: blog.destinationId || '',
        isTrending: !!blog.isTrending,
        isFeatured: !!blog.isFeatured
      });
    });
  }, [id]);

  const onChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await fetch(`${API_BASE}/blogs/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    navigate('/admin/blogs');
  };

  return (
    <section>
      <div className="page-header">
        <h1>Edit Blog Post</h1>
        <p>Update blog details.</p>
      </div>
      <div className="admin-section">
        <div className="admin-toolbar">
          <Link className="btn" to="/admin/blogs">Back to Blogs</Link>
        </div>
        <div className="admin-card">
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-row">
              <input name="title" value={form.title} onChange={onChange} placeholder="Title" required />
              <input name="author" value={form.author} onChange={onChange} placeholder="Author" required />
            </div>
            <input name="imgUrl" value={form.imgUrl} onChange={onChange} placeholder="Image URL" required />
            <div className="form-row">
              <select name="categoryId" value={form.categoryId} onChange={onChange} required>
                <option value="">Select category</option>
                {categories.map((item) => <option key={item._id} value={item._id}>{item.name || item.title}</option>)}
              </select>
              <select name="destinationId" value={form.destinationId} onChange={onChange} required>
                <option value="">Select destination</option>
                {destinations.map((item) => <option key={item._id} value={item._id}>{item.name || item.title}</option>)}
              </select>
            </div>
            <textarea name="content" value={form.content} onChange={onChange} placeholder="Content" required />
            <div className="form-row">
              <label><input type="checkbox" name="isTrending" checked={form.isTrending} onChange={onChange} /> Trending</label>
              <label><input type="checkbox" name="isFeatured" checked={form.isFeatured} onChange={onChange} /> Featured</label>
            </div>
            <button className="btn" type="submit">Update Blog</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AdminBlogEdit;
