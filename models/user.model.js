const mongoose= require('mongoose')

const UserSchema= new mongoose.Schema({
        id: {type: String}, 
        name:{type: String},
        username:{type: String},
        email:{type: Number},
        address:{
            street: String,
            suite: String,
            city: String,
            zipcode: String,
            geo: {
                lat: String,
                lng: String
            }
            
        },
        phone:{type: Number},
        website:{type: Number},
        company:{
            name: String, 
            catchPharse: String, 
            bs: String
        }
})

const User= mongoose.model('users', UserSchema)

module.exports= User























// var User= mongoose.model('users', {
    //     id: {type: String}, 
    //     name:{type: String},
    //     username:{type: String},
    //     email:{type: Number},
    //     address:{
    //         street: String,
    //         suite: String,
    //         city: String,
    //         zipcode: String,
    //         geo: {
    //             lat: String,
    //             lng: String
    //         }
            
    //     },
    //     phone:{type: Number},
    //     website:{type: Number},
    //     company:{
    //         name: String, 
    //         catchPharse: String, 
    //         bs: String
    //     }
    // })