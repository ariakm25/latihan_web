const indexController = require('../controllers/index.controller');
const postController = require('../controllers/post.controller');
const auth = require('../middlewares/auth');

const router = require('express').Router();

router.get('/', indexController.index);

router.get('/posts', postController.index);
router.get('/posts/create', postController.create);
router.post('/posts/store', postController.store);
router.get('/posts/:id/edit', postController.edit);
router.post('/posts/:id/update',postController.update)
router.delete('/posts/delete/:id', postController.delete);
router.put('/posts/:id/update', postController.update);

module.exports = router;
