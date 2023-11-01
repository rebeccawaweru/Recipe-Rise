const mongoose = require('mongoose');
let connection = null;
const connectDB = (url)=>{
    if(!connection){
        connection = mongoose.connect(url)
    }
    return connection
}

module.exports = connectDB