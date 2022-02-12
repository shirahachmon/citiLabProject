        // Set up
        var express  = require('express');
        var app = express();                               // create our app w/ express
        var morgan = require('morgan');             
        var bodyParser = require('body-parser');    
        var methodOverride = require('method-override'); 
        const cors= require('cors')

        app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
        app.use(morgan('dev'));                                         
        app.use(bodyParser.urlencoded({'extended':'false'}));            
        app.use(bodyParser.json());                                     
        app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
        app.use(methodOverride());
        app.use(cors());

        const db= require('./models/configDb')

        db.mongoose.connect(db.url, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
            })
            .then(()=> {
                console.log('connected to DB!')
            }).catch(err =>{
                console.log('cannot connect to the DB!', err)
                process.exit;
        });

        // Import routes
        // app.use('/employee', require("./routes/employee"));
        app.use('/users', require("./routes/user.routes.js"));

        app.listen(8080);
        console.log("App listening on port 8080");
