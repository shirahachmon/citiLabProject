
const express= require("express")
const router = express.Router()

const UserController= require('../controllers/user.controller')

router.get('/', UserController.getUsers)


// router.get('/:id', userController.findOne)
// router.put('/:id', userController.update)
// router.delete('/:id', userController.delete)
// router.post('/:id', userController.createUser)

module.exports =router;





// // Define the routes
// router.get('/all', function(req, res){
//     // res.send({type: 'succes motherfuckers'})
//     try{
//     User.find(docs => res.send(docs)
//     )} catch(error){
//         res.status(200).JSON({
//             status: 'fail',
//             error: error.message
//         })
//     }
// })