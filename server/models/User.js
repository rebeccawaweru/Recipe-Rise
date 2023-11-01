const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema = mongoose.Schema({
    email:{type:String, require:true},
    username:{type:String, require:true},
    password:{type:String, require:true},
    otp:{type:Number, default:0, unique:true}
});
userSchema.methods.comparePassword = async function(candidatePassword){
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
};
module.exports = mongoose.model('User', userSchema)