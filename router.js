const router = require('express').Router()
const bodyParser = require('body-parser')

const {
    getAllUser,
    createAUser
} = require('./usercontroller')

router.get('/',getAllUser)
router.post('/',createAUser)
router.get('*',(req,res)=>{
    res.send('404 Not Found')
})

module.exports = router
