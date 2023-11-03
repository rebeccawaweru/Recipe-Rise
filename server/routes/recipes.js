const express = require('express')
const { newRecipe, getRecipes, getRecipe, updateRecipe, deleteRecipe } = require('../controllers/recipes')
const router = express.Router()

router.post('/new', newRecipe);
router.get('/recipes', getRecipes)
router.get('/recipe/:id', getRecipe)
router.put('/update/:id', updateRecipe)
router.delete('/delete/:id', deleteRecipe)

module.exports = router