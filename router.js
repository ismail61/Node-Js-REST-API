const router = require('express').Router()
const bodyParser = require('body-parser')

const {
    getAllUser,
    createAUser,
    deleteAUser,
    updateAUser
} = require('./usercontroller')

router.get('/',getAllUser)
router.post('/',createAUser)
router.delete('/:delId',deleteAUser)
router.put('/:upId',updateAUser)
router.get('*',(req,res)=>{
    res.send('404 Not Found')
})

module.exports = router
