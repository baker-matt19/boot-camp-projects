// requiring my mongo db connection as well as the ObjectId from mongodb
const { devConnect, quesConnect } = require("../controllers/connection");
const { ObjectID, ObjectId } = require("mongodb");
const json = require("body-parser/lib/types/json");



// console.log(questions.length);


// =================APIS=&=ROUTES==============================================
module.exports = (app) => {
    // GET for devs
    app.route("/api/devs")
       .get(async (req, res) => {
           const db = await devConnect();
           const results = await db.find().toArray();
           res.json(results);
        //    console.log(results);
       }) 
    // GET for questions
    app.route("/api/questions")
       .get(async (req, res) => {
           const db = await quesConnect();
           const results = await db.find().toArray();
           res.json(results);
        //    console.log(results);
       })    
      // POST to post new questin to the db
      app.route('/api/question')
      .post(async (req, res) => {
         // console.log(req.body);
         try {
            const db = await quesConnect();
            const result = await db.insertOne({
               questionText: req.body.questionText,
               answerOptions: req.body.answerOptions
            });
            res.json(result);
            console.log(result);
         }
         catch(err) {
            console.log(err)
            res.json({ error: err })
         }
      })  
};
