var User= require('../models/user.model')

exports.getUsers= async function() {
    try{
        var users= await User.find()
        return users;
    }catch(err){
        throw Error('error')
    }
}