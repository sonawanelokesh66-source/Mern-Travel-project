import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'
import Admin from './pages/Admin'
import AdminBlogs from './pages/AdminBlogs'
import AdminCategories from './pages/AdminCategories'
import AdminDestinations from './pages/AdminDestinations'
import AdminBlogCreate from './pages/AdminBlogCreate'
import AdminBlogEdit from './pages/AdminBlogEdit'
import AdminCategoryCreate from './pages/AdminCategoryCreate'
import AdminCategoryEdit from './pages/AdminCategoryEdit'
import AdminDestinationCreate from './pages/AdminDestinationCreate'
import AdminDestinationEdit from './pages/AdminDestinationEdit'

function App() {
  return (
    <div className="site">
      <nav className="top-nav">
        <Link to="/" className="logo">
          Wander<span>log</span>
        </Link>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/blogs" element={<AdminBlogs />} />
          <Route path="/admin/blogs/new" element={<AdminBlogCreate />} />
          <Route path="/admin/blogs/edit/:id" element={<AdminBlogEdit />} />
          <Route path="/admin/categories" element={<AdminCategories />} />
          <Route path="/admin/categories/new" element={<AdminCategoryCreate />} />
          <Route path="/admin/categories/edit/:id" element={<AdminCategoryEdit />} />
          <Route path="/admin/destinations" element={<AdminDestinations />} />
          <Route path="/admin/destinations/new" element={<AdminDestinationCreate />} />
          <Route path="/admin/destinations/edit/:id" element={<AdminDestinationEdit />} />
        </Routes>
      </main>
      <footer>
        <Link to="/" className="logo">Wander<span>log</span></Link>
        <p>© 2026 Wanderlog. Built with MERN stack.</p>
      </footer>
    </div>
  )
}

export default App
