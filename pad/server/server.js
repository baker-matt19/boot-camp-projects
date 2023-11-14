// ================EXPRESS=&=ENV=FILE===============================================================
// requiring my environment file and enabling it with config()
require('dotenv').config();

// creating the express application by requiring express and setting app as our express function. 
// require() is used to import modules, JSON and local files. Modules are imported from node_modules, local modules and JSON can be imported using a relative path(ie ./, ./foo, ./bar/baz) that will be resolved against the directory named by __dirname or the current working directory.
const express = require('express');  
const app = express();

// __dirname is the directory or path of where the file is excluding the file itself and __filename is the path with the file name.
// console.log(__dirname)
// console.log(__filename)



// ================BODY=PARSER=========================================================================
// bodyparser allows us to accept json from a post request. requiring then configuring it
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// =================APIS=&=ROUTES=====================================================================
// requiring routes from our api.js
const apiRoutes = require('./routes/api')

// routes
apiRoutes(app);





// =================EXPRESS=LISTENER===================================================================

// setting my port variable from the environment file and then setting my app to listen on that port.
const port = process.env.PORT;

app.listen(process.env.PORT, () => {
    console.log(`Server Started on port ${port}`)
})

