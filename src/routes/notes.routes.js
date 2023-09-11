const {Router} = require('express')
const { createNote, listNotes } = require('../controllers/notes.controller')

const router =Router()



router.get('/',listNotes)
router.post('/',createNote)

module.exports =router