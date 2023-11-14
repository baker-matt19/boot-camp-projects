// requiring the .env file to use the uri inside
require('dotenv').config();


// ========================MONGODB=CONNECTION===================================

// requiring my mongodb client
const { MongoClient } = require('mongodb');

// setting the client using the Mongo client
const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// creating an async function to connect to the users db and return the collection from the db
async function userConnect() {
    await client.connect();
    return client.db('baker_db').collection('users');
}

async function recipeConnect() {
    await client.connect();
    return client.db('baker_db').collection('recipes');
}

async function issuesConnect() {
    await client.connect();
    return client.db('baker_db').collection('issues');
}

async function mBConnect() {
    await client.connect();
    return client.db('baker_db').collection('message_board')
}

  // exporting our connect function
  module.exports = { userConnect, recipeConnect, issuesConnect, mBConnect };