const { StatusCodes } = require('http-status-codes');
const Recipe = require('../models/Recipe')

const newRecipe = async(req,res)=>{
    try {
    const recipe = await Recipe.create(req.body);
    res.status(StatusCodes.CREATED).json({success:true,recipe}) 
    } catch (error) {
    res.send(error)
    }
}

const getRecipes = async(req,res)=>{
    try {
    const recipes = await Recipe.find({})
    res.status(StatusCodes.OK).json(recipes) 
    } catch (error) {
      res.send(error)
    }
}

const getRecipe = async(req,res)=>{
    try {
       const {id:recipeId} = req.params;
       const recipe = await Recipe.findById({_id:recipeId}) 
       res.status(StatusCodes.OK).json({recipe})
    } catch (error) {
        res.send(error)
    }
}

const updateRecipe = async(req,res)=>{
    try {
        const {id:recipeId} = req.params;
        
        const recipe = await Recipe.findByIdAndUpdate({_id:recipeId}, req.body)
        res.status(StatusCodes.OK).json({success:true,recipe})
    } catch (error) {
        res.send(error)
    }
}

const deleteRecipe = async(req,res)=>{
    try {
        const {id:recipeId} = req.params;
        const recipe = await Recipe.findByIdAndDelete({_id:recipeId})
        res.status(StatusCodes.OK).json({success:true,recipe})
    } catch (error) {
        res.send(error)
    }
}

module.exports = {newRecipe,getRecipe,getRecipes,updateRecipe,deleteRecipe}