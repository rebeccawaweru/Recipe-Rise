const express = require('express')
const { newRecipe, getRecipes, getRecipe, updateRecipe, deleteRecipe } = require('../controllers/recipes')
const router = express.Router()

router.post('/new', newRecipe);
router.get('/recipes', getRecipes)
router.get('/recipe/:id', getRecipe)
router.get('/update/:id', updateRecipe)
router.get('/delete/:id', deleteRecipe)

module.exports = router