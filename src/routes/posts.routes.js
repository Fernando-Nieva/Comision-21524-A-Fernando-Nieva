const {Router} = require('express')
const { createPosts, listPosts } = require('../controllers/posts.controller')

const router =Router()



router.get('/',listPosts)
router.post('/',createPosts)

module.exports =router