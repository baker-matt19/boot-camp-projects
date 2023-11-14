// requiring the .env file to use the uri inside
require('dotenv').config();


// ========================MONGODB=CONNECTION===================================

// requiring my mongodb client
const { MongoClient } = require('mongodb');

// setting the client using the Mongo client
const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// create a connect for the dev db
async function devConnect() {
    await client.connect();
    return client.db('group').collection('devs');
}

// create a connect for the question db
async function quesConnect() {
    await client.connect();
    return client.db('group').collection('questions');
}

  // exporting our connect functions
  module.exports = { devConnect, quesConnect };