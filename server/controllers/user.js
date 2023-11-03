const User = require('../models/User');
const {StatusCodes} = require('http-status-codes')
const bcrypt = require('bcryptjs')
const {createTransport} = require('nodemailer')
const jwt = require('jsonwebtoken');
const transporter = createTransport({
    service:'gmail',
    auth:{
    user:process.env.GMAIL_USER,
    pass:process.env.GMAIL_PASSWORD
    }
});
const signUp = async(req, res)=>{
    try {
        const {email, username, password} = req.body;
        const findUser = await User.findOne({email});
        if(findUser){
          res.status(StatusCodes.BAD_REQUEST).json({message:'User already exists'});
        }
        const salt = await bcrypt.genSalt(12);
        const hashedpassword = await bcrypt.hash(password, salt);
        const user = await User.create({email,username,password:hashedpassword});
        res.status(StatusCodes.CREATED).json({success:true, user})  
    } catch (error) {
        console.log(error.message)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.message)
    }
}

const login = async(req,res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        res.status(StatusCodes.UNAUTHORIZED).json({message:"Email does not exist"});
    }
    const isPasswordCorrect = await user.comparePassword(password);
    if (isPasswordCorrect){
        const userData = {username:user.username, id:user._id}
        const token = jwt.sign({user: userData }, process.env.JWT_SECRET, {expiresIn:'1h'})
        res.status(StatusCodes.OK).json({token})
    }else{
        res.status(StatusCodes.UNAUTHORIZED).json({message:"Wrong credentials"});
    }
} 

const getUser = async(req, res) =>{
    const {id:userId} = req.params;
    const user = await User.findById({_id:userId});
    user ? res.status(StatusCodes.OK).json({user}) : res.status(StatusCodes.NOT_FOUND).json({message:"User not found"});
}

const resetpassword = async(req, res)=>{
    const {email} = req.body;
    const user = await User.findOne({email});
    if(!user){
        res.status(StatusCodes.UNAUTHORIZED).json({message:"Email does not exist"});
    }
    const otp = Math.floor(100000 + Math.random() * 600000);
    user.otp = otp;
    user.save()
    const emailreset = await transporter.sendMail({
        from:'support@recipe-rise.com',
        to:email,
        subject:'RECOVER PASSWORD',
        html:`<p>Your OTP is ${otp}</p>`
    });
    res.status(StatusCodes.OK).json({success:true, emailreset})
}

const confirmpassword = async(req,res)=>{
    const {otp,password} = req.body;
    await User.findOne({otp}).then((user)=>{
        if(!user){
            res.status(StatusCodes.NOT_FOUND).send('Invalid code')
        }
    bcrypt.hash(password,12).then((hashedpassword)=>{
        user.password = hashedpassword;
        user.otp = 0;
        user.save().then(()=>{
        res.status(StatusCodes.ACCEPTED).json({success:true})
        })
    })
    })
    .catch(err=>res.json(err.message))
}

const contact = async(req,res)=>{
    const {email,name,phone,subject,message} = req.body
    const send = transporter.sendMail({
        from:email,
        to:'wawerur95@gmail.com',
        subject:subject,
        html:`<p>Greetings,<br>${message}<br>With regards,<br>${name} ${phone ? phone : ''}</p>`
    })
    res.status(StatusCodes.OK).json({success:true, send})
}

const bookmark = async(req,res)=>{
    const {id:userId} = req.params;
    const user = await User.findById({_id:userId});
    user.bookmarks.push(req.body)
    await user.save();
    res.status(StatusCodes.OK).json({success:true})
}

const removebookmark = async(req,res)=>{
    const {id:userId} = req.params;
    const user = await User.findById({_id:userId});
    user.bookmarks = user.bookmarks.filter((bookmarkId) => bookmarkId.toString() !== req.body.toString());
    await user.save();
    res.status(StatusCodes.OK).json({success:true})
}

module.exports = {signUp,login,getUser,resetpassword,confirmpassword,contact,bookmark,removebookmark}
