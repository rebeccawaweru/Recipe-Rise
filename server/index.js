require('dotenv').config();
const db = require('./connection/db');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000;
const userRouter = require('./routes/user');
const recipeRouter = require('./routes/recipes')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.use('/',userRouter,recipeRouter);
const start = () => {
try {
 app.listen(port, ()=>{
   db(process.env.MONGO_URI);
    console.log(`Server is listening on port ${port}.....`)
 })   
} catch (error) {
   console.log(error) 
}
}

start()