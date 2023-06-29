const Adminuser = require('../models/adminmodel');
const User = require('../models/usermodel');
// const nodemailer = require("nodemailer");
// const randomstring = require("randomstring");

// error handle validater
const handleErrors = (err)=>{
    console.log(err.massage, err.code);
    let error = {email: '', password: ''};
    //validation errors
    if(err.massage.includes('user validation faild')){
        console.log(object.value(err.errors));
    }
}

module.exports.home = function(req, res){
    return res.render('home',{
        title: "registeration"
    })
}

module.exports.home = function(req, res){
    return res.render('home',{
        title: "dashbord"
    })
}

module.exports.registration = function(req, res){
    return res.render('registration',{
        title: "registeration"
    })
}

module.exports.dashbord = function(req, res){
    return res.render('dashbord',{
        title: "dashbord"
    })
}

module.exports.forgetpassword = function(req, res){
    return res.render('forgetpassword',{
        title: "forgetpassword"
    })
}

module.exports.userform = function(req, res){
    return res.render('userform',{
        title: "userform"
    })
}

module.exports.admin_index = async function(req, res){
    const data = await Adminuser.find();
    console.log(data);
    return res.render('admin_index',{
        title: "admin_index",
        data: data
    });
}

module.exports.admin_create = async function(req, res){
    
    
    return res.render('admin_create',{
        title: "admin_create"
    });
}


module.exports.registrationPost = async function(req, res){
    // console.log(req.body)
    let {firstname, lastname, password, confirmpassword, email}=req.body
    await User.create({firstname, lastname, password, email})
    req.flash("success", "you are sing up");
    res.redirect('/login');
}

module.exports.admin_createPost = async function(req, res){
    // console.log(req, body)
    let{firstname, lastname, emailaddress, contactnumber, organisation, status, username, password} = req.body
    await Adminuser.create({firstname, lastname, emailaddress, contactnumber, organisation, status, username, password})
    // req.flash("success", "you dataadd");
    res.redirect('/admin_index')
}

module.exports.delete = async function(req, res){
    try {
        console.log("Anil Kumar", req)
        let admin = await Adminuser.findById(req.params.id);
        admin.deleteOne();
            return res.redirect('back');
        } catch (error) {
            console.log('error in deleting', error);
            return;
        }
    }


