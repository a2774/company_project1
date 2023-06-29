const mongoose = require('mongoose');
// const {email} = require('validator');
const bcrypt = require('bcrypt');
const adminuserSchema = new mongoose.Schema({
    firstname:{
        type: "String",
        require: [true,'first name is required'],
        lowercase: true, 
    },
    lastname:{
        type:"String",
        require: true
    },
    emailaddress:{
        type:String,
        require:true,
        // validate:[email, 'please enter a value email']

     
    },
    password:{
        type:"String",
        require: [true, 'please enter an password'],
        minlength:[6, 'mininum password length is 6 characters']
    },
    emailaddress:{
        type:String,
        require:true,
    },
    contactnumber:{
        type:Number,
        require:true,
    },
    status:{
        type:String,
        require:true, 
    },
    active:{
        type:String,
        require:true,
    },
    inactive:{
        type:String,
        require:true,
     
    },
    username:{
        type:String,
        require:true,
    },
    token:{
        type:String,
        default:''
    }

});

// adminuserSchema.pre('save', async function(next){
//     const salt = await bcrypt.genSalt();
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
// });

const Adminuser = mongoose.model('Adminuser', adminuserSchema);
module.exports = Adminuser;