const Post = require('../models/Post');

module.exports = {
  index: async (req, res) => {
    // Menampilkan semua data
    const posts = await Post.findAll();

    return res.render('post/index', {
      posts
    });
  },

  // Create Post
  create: async (req, res) => {
    return res.render('post/create');
  },

  // Store post to database
  store: async (req, res) => {
    await Post.create({
      title: req.body.title,
      content: req.body.content,
    });

    return res.redirect('/posts');
  }
};
