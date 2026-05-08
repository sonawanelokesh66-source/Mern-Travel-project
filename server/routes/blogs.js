const express = require('express');
const Blog = require('../models/Blog');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    console.log('GET /api/blogs error:', error.message);
    res.json([]);
  }
});

router.get('/trending', async (req, res) => {
  try {
    const blogs = await Blog.find({ isTrending: true });
    res.json(blogs);
  } catch (error) {
    console.log('GET /api/blogs/trending error:', error.message);
    res.json([]);
  }
});

router.get('/featured', async (req, res) => {
  try {
    const blogs = await Blog.find({ isFeatured: true });
    res.json(blogs);
  } catch (error) {
    console.log('GET /api/blogs/featured error:', error.message);
    res.json([]);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const createdBlog = await Blog.create(req.body);
    res.status(201).json(createdBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.json(updatedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);

    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.json({ message: 'Blog deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
