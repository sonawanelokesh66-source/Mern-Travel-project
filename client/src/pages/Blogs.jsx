import { useEffect, useState } from 'react';
import { API_BASE } from '../apiConfig';

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [titleFilter, setTitleFilter] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [destinationId, setDestinationId] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/blogs`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(Array.isArray(data) ? data : []);
      });

    fetch(`${API_BASE}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(Array.isArray(data) ? data : []));

    fetch(`${API_BASE}/destinations`)
      .then((res) => res.json())
      .then((data) => {
        setDestinations(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  let filteredBlogs = blogs;

  if (titleFilter) {
    filteredBlogs = filteredBlogs.filter((blog) =>
      (blog.title || '').toLowerCase().includes(titleFilter.toLowerCase())
    );
  }

  if (categoryId) {
    filteredBlogs = filteredBlogs.filter((blog) => blog.categoryId === categoryId);
  }

  if (destinationId) {
    filteredBlogs = filteredBlogs.filter(
      (blog) => blog.destinationId === destinationId
    );
  }

  return (
    <section>
      <div className="page-header">
        <h1>All Stories</h1>
        <p>Filter stories by title, category, and destination.</p>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by title"
          value={titleFilter}
          onChange={(event) => setTitleFilter(event.target.value)}
        />
        <select
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name || category.title}
            </option>
          ))}
        </select>
        <select
          value={destinationId}
          onChange={(event) => setDestinationId(event.target.value)}
        >
          <option value="">All Destinations</option>
          {destinations.map((destination) => (
            <option key={destination._id} value={destination._id}>
              {destination.name || destination.title}
            </option>
          ))}
        </select>
      </div>

      {loading ? <p>Loading...</p> : null}

      <div className="blog-list">
        {filteredBlogs.map((blog) => (
          <article key={blog._id} className="blog-card">
            <img
              src={
                blog.imgUrl ||
                'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80'
              }
              alt={blog.title || 'Travel blog'}
            />
            <h3>{blog.title || 'Untitled Blog'}</h3>
            <p>{blog.content || blog.summary || 'No content available.'}</p>
            <p>
              <strong>Author:</strong> {blog.author || 'Unknown'}
            </p>
            <div className="tag-row">
              {blog.isTrending ? <span className="tag trend">Trending</span> : null}
              {blog.isFeatured ? <span className="tag feature">Featured</span> : null}
            </div>
          </article>
        ))}
      </div>
      {!loading && filteredBlogs.length === 0 ? <p>No blogs found.</p> : null}
    </section>
  );
}

export default Blogs;
