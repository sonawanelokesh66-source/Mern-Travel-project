const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  imgUrl: String,
  categoryId: String,
  destinationId: String,
  isTrending: Boolean,
  isFeatured: Boolean
});

module.exports = mongoose.model('Blog', blogSchema);
