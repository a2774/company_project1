const mongoose = require('mongoose');
const {isEmail} = require('validator');
const validater = require('validator');
// const {email} = require('validator');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    firstname:{
        type: "String",
        require: [true,'first name is required'],
        lowercase: true, 
        
    },
    lastname:{
        type:"String",
        require: true
    },
    email:{
        type:String,
        require:true,
        validate:[isEmail, 'please enter a value email']

     
    },
    password:{
        type:"String",
        require: [true, 'please enter an password'],
        minlength:[6, 'mininum password length is 6 characters']
    },
    token:{
        type:String,
        default:''
    }

});

// var userSchema = new mongoose.Schema({
//     name: {
//       type: String
//     , required: true
//     , validate: [validators.notEmpty, 'Name is empty']
//     }
//   , username: {
//       type: String
//     , required: true
//     , validate: [validators.notEmpty, 'Username is empty']
//     }
//   , email: {
//       type: String
//     , required: true
//     , validate: [
//         { validator: validators.notEmpty, msg: 'Email is empty' }
//       , { validator: validators.isEmail, msg: 'Invalid email' }
//       ]
//     }
//   , salt: String
//   , hash: String
// });

userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;