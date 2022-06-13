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
  },

  edit: async (req, res) => {
    const data = await Post.findByPk(req.params.id);
    return res.render('post/edit', {
      data
    })
  },

  update : async (req, res)=>{
    console.log(req.body)
    await Post.update(req.body, {
      where: {
        id: req.params.id
      },
    })
    
    return res.redirect('/posts')
  }
};
