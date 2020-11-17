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

