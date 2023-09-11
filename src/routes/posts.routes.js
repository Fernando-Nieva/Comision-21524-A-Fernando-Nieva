
const router = require ('express').Router();
const { postsModel } = require('../models/posts'); 


// Ruta para obtener todos los registros
router.get('/', async (req, res) => {
  try {
    const registros = await postsModel.findAll();
    res.status(200).json(registros);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


module.exports = router;
