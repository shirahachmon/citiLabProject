const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url ='mongodb://127.0.0.1:27017/weekact';

module.exports = db;