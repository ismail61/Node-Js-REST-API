const route = require('express').Router()

const User = require('./user')

exports.getAllUser = (req,res)=>{
    res.json(User.getAllUsers())
}

exports.createAUser = (req,res)=>{
    let {
        name,email,username,password,phone
    } = req.body
    //console.log(req.body)
    res.json(User.createAUser({
        name,email,username,password,phone
    }))
}

exports.deleteAUser = (req,res)=>{
    const id = parseInt(req.params.delId)
    res.json(User.deleteAUsers(id))

}


exports.updateAUser = (req,res)=>{
    const id = parseInt(req.params.upId)
    let {
        name,email,username,password,phone
    } = req.body
    //console.log(req.body)
    res.json(User.updateAUsers(id,{
        name,email,username,password,phone
    }))
    
}