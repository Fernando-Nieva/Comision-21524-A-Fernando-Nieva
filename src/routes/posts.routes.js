const {Router} = require('express')
const { createPosts,borrarPost,acturalizarPost, listarPosts} = require('../controllers/posts.controller')
const router =Router()



router.get('/',listarPosts)
router.post('/',createPosts)
router.put('/:id', acturalizarPost);
router.delete('/:id',borrarPost);

module.exports = router