const express = require('express');
const Blog = require('../models/Blog');
const Category = require('../models/Category');
const Destination = require('../models/Destination');

const router = express.Router();

router.post('/seed', async (req, res) => {
  try {
    await Blog.deleteMany({});
    await Category.deleteMany({});
    await Destination.deleteMany({});

    const categoryDocs = await Category.insertMany([
      { name: 'Adventure' },
      { name: 'Culture' },
      { name: 'Food' },
      { name: 'Budget Travel' },
      { name: 'City Guides' }
    ]);

    const destinationDocs = await Destination.insertMany([
      { name: 'Asia' },
      { name: 'Europe' },
      { name: 'Americas' },
      { name: 'Africa' },
      { name: 'Oceania' }
    ]);

    const categoryMap = {};
    categoryDocs.forEach((item) => {
      categoryMap[item.name] = String(item._id);
    });

    const destinationMap = {};
    destinationDocs.forEach((item) => {
      destinationMap[item.name] = String(item._id);
    });

    const blogs = [
      { title: 'Walking the Himalayas: A 30-Day Solo Trek', author: 'Arjun Mehta', category: 'Adventure', destination: 'Asia' },
      { title: "48 Hours in Kyoto's Hidden Temples", author: 'Priya Nair', category: 'Culture', destination: 'Asia' },
      { title: 'Santorini on a Budget: What No One Tells You', author: 'Lena Kovac', category: 'Budget Travel', destination: 'Europe' },
      { title: 'The W Trek in Patagonia: Full Guide', author: 'Carlos Ruiz', category: 'Adventure', destination: 'Americas' },
      { title: 'Eating Through Rajasthan', author: 'Meera Sharma', category: 'Food', destination: 'Asia' },
      { title: 'A Slow Week in Lisbon', author: 'Nikhil Rao', category: 'City Guides', destination: 'Europe' },
      { title: 'Cape Town Coastline Diaries', author: 'Nadia Ali', category: 'Adventure', destination: 'Africa' },
      { title: 'Tokyo Alley Food Guide', author: 'Kenji Sato', category: 'Food', destination: 'Asia' },
      { title: 'Backpacking Peru Under $900', author: 'Riya Desai', category: 'Budget Travel', destination: 'Americas' },
      { title: 'Vienna in Winter: Coffee and Museums', author: 'Eva Muller', category: 'Culture', destination: 'Europe' },
      { title: 'Morocco by Train', author: 'Omar Idris', category: 'City Guides', destination: 'Africa' },
      { title: 'Sydney Sunrise Walks', author: 'Hannah Lee', category: 'City Guides', destination: 'Oceania' },
      { title: 'Street Eats in Mexico City', author: 'Diego Santos', category: 'Food', destination: 'Americas' },
      { title: 'Iceland Ring Road Basics', author: 'Aria Collins', category: 'Adventure', destination: 'Europe' },
      { title: 'Bangkok Temples and Markets', author: 'Pimchai Arun', category: 'Culture', destination: 'Asia' },
      { title: 'New York Weekend on a Budget', author: 'Noah Grant', category: 'Budget Travel', destination: 'Americas' },
      { title: 'Marrakech Riads and Rooftops', author: 'Sara Benali', category: 'Culture', destination: 'Africa' },
      { title: 'Melbourne Coffee Trails', author: 'Jordan Price', category: 'Food', destination: 'Oceania' },
      { title: 'Berlin in 3 Days', author: 'Anya Vogel', category: 'City Guides', destination: 'Europe' },
      { title: 'Bali Waterfalls and Rice Fields', author: 'Rohan Kapoor', category: 'Adventure', destination: 'Asia' }
    ];

    const seededBlogs = blogs.map((item, index) => ({
      title: item.title,
      content: `Travel notes: ${item.title}. This story shares practical tips, local highlights, and a simple itinerary.`,
      author: item.author,
      imgUrl: `https://picsum.photos/seed/travel-${index + 1}/900/600`,
      categoryId: categoryMap[item.category],
      destinationId: destinationMap[item.destination],
      isTrending: index % 3 === 0,
      isFeatured: index % 4 === 0
    }));

    await Blog.insertMany(seededBlogs);

    res.json({
      message: 'Seed completed',
      counts: {
        blogs: seededBlogs.length,
        categories: categoryDocs.length,
        destinations: destinationDocs.length
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/delete-all', async (req, res) => {
  try {
    await Blog.deleteMany({});
    await Category.deleteMany({});
    await Destination.deleteMany({});
    res.json({ message: 'All collections cleared' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
