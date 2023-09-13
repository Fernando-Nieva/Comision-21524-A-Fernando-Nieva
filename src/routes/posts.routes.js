const {Router} = require('express')
const { createPosts, listPosts ,borrarPost} = require('../controllers/posts.controller')

const router =Router()



router.get('/',listPosts)
router.post('/',createPosts)
// router.put('/:id',acturalizarPost)
router.delete('/:id', borrarPost);

module.exports = router