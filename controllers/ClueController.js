// Create express app
const express = require("express");
const app = express();

const User = require('../models/user');
var exports = module.exports = {};

//const async = require('async');

exports.login = function (req, res) {
    res.render('user/loginpage');
}

exports.register = function (req, res) {
    res.render('user/signuppage');
}

exports.forgot1 = function (req, res) {
    res.render('user/forgotemail');
}

exports.forgot2 = function (req, res) {
    res.render('user/forgotcode');
}

exports.forgot3 = function (req, res) {
    res.render('user/newpassword');
}

exports.dashboard = function (req, res) {
    res.render('layout');
}

exports.logout = function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/');
    });
}

/* GET New User page. */
exports.newuser = function (req, res) {
    res.render('user/create', { title: 'Add New User' });
};

/* POST to Add User Service */
//router.post('/adduser', function(req, res) {
exports.adduser = function (req, res) {

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;

    // Submit to the DB
    const userdata = {
        username: userName,
        email: userEmail
    };

    const newUser = new User(userdata);

    newUser.save(function (err) {
        if (err) {
            console.log(err)
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            console.log("Data Saved");
            res.redirect("/user/index");
        }
    });

};
/* GET Userlist page. */
exports.userlist = async function (req, res) {
    try {
        const users = await User.find()
        console.log(users)
        res.render('user/index', { users })
    } catch (err) {
        console.log(err)
        res.status(500).send('failure')
    }
};

