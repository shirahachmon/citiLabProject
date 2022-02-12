var UserService= require('../services/user.service')

module.exports.getUsers= async (req, res, next) =>{
    // res.send({type: 'succes motherfuckers'})
    try{
        var users= await UserService.getUsers({})
        return res.status(200).json({status:200, data: users, message: 'Successfully users retrieved!'})
    }
    catch(err) {
        return res.status(400).json({status:400, message: err.message})
    }
}



// module.exports.createUser= (req, res) =>{

// }


// module.exports.findOne= (req, res) =>{
//     User.findOne({}, function(err, result) {
//         if (err) throw err;
//         console.log(result.name);
//         db.close();
//       });
// }

// module.exports.update= (req, res) =>{

// }

// module.exports.delete= (req, res) =>{

// }