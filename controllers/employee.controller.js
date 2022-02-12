// const { Employee } = require('../routes/employee.js')

// // CRUD
// module.exports.employees_all= async function(req, res, next) {
//     try{
//         let docs= await Employee.find({});
//         res.send(docs);
//     } catch(error){
//         console.log(error);
//         // res.status(200).JSON({
//         //     status: 'fail',
//         //     error: error.message
//         // })
//     }
// }

















// // // CREATE
// // router.post('/', (req, res)=>{
// //     var emp= new Employee({
// //         name: req.body.name,
// //         position: req.body.position,
// //         office: req.body.office,
// //         salary: req.body.salary
// //     })

// //     // Save all the records
// //     emp.save((err,doc)=> {
// //         if(!err) {res.send(doc)}
// //         else {console.log('Error in Employee Save: '+ JSON.stringify(err, undefined, 2))}
// //     })
// // })


// // // UPDATE
// // router.put('/:id', (req, res) => {
// //     if(!ObjectId.isValid(req.params.id))
// //         return res.status(400).send(`No record with given id : ${req.params}`) 
    
// //     var emp= new Employee({
// //             name: req.body.name,
// //             position: req.body.position,
// //             office: req.body.office,
// //             salary: req.body.salary
// //         })

// //     Employee.findByIdAndUpdate(req.params.id, {$set: emp}, {new: true}, (err,doc) =>{
// //         if(!err) {res.send(doc)}
// //         else {console.log('Error in Employee Update: '+ JSON.stringify(err, undefined, 2))}
// //     })
// // })


// // //DELETE
// // router.delete('/:id', (req, res)=>{
// //     if(!ObjectId.isValid(req.params.id))
// //         return res.status(400).send(`No record with given id : ${req.params}`) 
// //     Employee.findByIdAndRemove(req.params.id, (err,doc) =>{
// //     if(!err) {res.send(doc)}
// //     else { console.log('Error in Employee Delete: ' + JSON.stringify(err, undefined, 2))}
// //     })
// // })
