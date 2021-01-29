const route = require('express').Router()
const { getAllUsers } = require('./user')
const User = require('./user')
exports.getAllUser = (req,res)=>{
    res.json(User.getAllUsers())
}

exports.createAUser = (req,res)=>{
    let {
        name,email,username,pass
    }
    console.log(req.body)
}