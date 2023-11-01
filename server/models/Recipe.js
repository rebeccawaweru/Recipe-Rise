const mongoose = require('mongoose')
const recipeSchema = mongoose.Schema({
    owner:{type:String, require:true},
    name:{type:String, require:true},
    preptime:{type:String, require:true},
    cooktime:{type:String, require:true},
    category:{type:String, require:true},
    ingredients:{type:Array, require:true},
    description:{type:String, require:true},
    comments:{type:Array},
    rating:{type:Number},
    budget:{type:Number},
    avatar:{type:String, require:true},
    month:{type:String},
    createdOn:{type:Date,default:Date.now}
})
recipeSchema.pre('save', function(next){
    if (this.isNew){
        const date = new Date(this.createdOn);
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December'
          ];
          this.month = monthNames[date.getMonth()];
    }
    next()
})
module.exports = mongoose.model('Recipe', recipeSchema)