// requiring my mongo db connection as well as the ObjectId from mongodb
const {
	userConnect,
	recipeConnect,
	issuesConnect,
	mBConnect,
} = require("../controllers/connection");
const { ObjectID, ObjectId } = require("mongodb");
const SALT = 12;

// requiring bcrypt to hash passwords
const bcrypt = require("bcrypt");

// =================APIS=&=ROUTES========================
module.exports = (app) => {
	// ==================SIGN=UP==============================
	// POST to add users to the database and hash password
	app.route("/api/users").post(async (req, res) => {
		const { email, username, password } = req.body;
		// console.log(req.body);
		try {
			bcrypt.hash(password, SALT, async (err, hash) => {
				const db = await userConnect();
				const result = await db.insertOne({
					email: email,
					username: username,
					password: hash, // if we used bcrypt to hash it would be password: hash
				});
				res.json(result);
				// console.log(result);
			});
		} catch (err) {
			console.log(err);
			res.json({ error: err });
		}
	});

	// ===============LOG=IN=============================
	// creating api to check that the user exists and the password entered matches the hashed password of the user
	app.route("/api/login/:username/:password")
	.get(async (req, res) => {
		let { username, password } = req.params;
		const db = await userConnect();
		const result = await db.findOne({ username: username });
		if (result != null) {
			const match = bcrypt.compareSync(password, result.password);
			// console.log(match)
			res.json(match ? { ...result, login: "success" } : { login: "error" });
		} else {
			res.json({ login: "error" });
		}
	});

	// ================APP========================
	// ========RECIPE=GET========
	app
		.route("/api/recipes")
		.get(async (req, res) => {
			const db = await recipeConnect();
			const results = await db.find().toArray();
			res.json(results);
			// console.log(results);
		})
		// ========RECIPE=POST========
		.post(async (req, res) => {
			// console.log(req.body);
			const {
				name,
				image,
				description,
				ingredients,
				directions,
				calories,
				servings,
				protein,
				fat,
				carbs,
				category,
				username,
			} = req.body;
			try {
				const db = await recipeConnect();
				const result = await db.insertOne({
					name: name,
					image: image,
					description: description,
					ingredients: ingredients,
					directions: directions,
					calories: calories,
					servings: servings,
					protein: protein,
					fat: fat,
					carbs: carbs,
					category: category,
					date: new Date().toString(),
					username: username,
				});
				res.json(result);
				console.log(result);
			} catch (err) {
				res.json({ error: err });
				console.log(err);
			}
		});

	// ========MESSAGE=BOARD=POST========
		app.route('/api/boards')
		.post(async (req, res) => {
			// console.log(req.body);
			const { title, board, username } = req.body;
			try {
				const db = await mBConnect();
				const result = await db.insertOne({
					title: title,
					board: board,
					date: new Date().toString(),
					username: username
				})
				res.json(result);
				console.log(result);
			}
			catch(err) {
				res.json({ error: err });
				console.log(err);
			}
		})
		// ========MESSAGE=BOARDS=GET========
		.get(async (req, res) => {
			const db = await mBConnect();
			const results = await db.find().toArray();
			res.json(results);
			// console.log(results);
		})

		// ========SELECTED=MESSAGE=BOARD=GET========
		app.route('/api/boards/:title/:date')
		.get(async (req, res) => {
			// console.log(req.params);
			const { title, date } = req.params;
			const db = await mBConnect();
			const result = await db.findOne({
				title: title,
				date: date
			})
			res.json(result);
			// console.log(result);
		})
		// PUT to update a message board from the db
	app.route("/api/boards/:_id")
	.put(async (req, res) => {
		// console.log(req.params);
		// console.log(req.body);
		const db = await mBConnect();
		let result;
		if (req.body.title !== "" && req.body.board !== "") {
			result = await db.updateOne(
				{ _id: new ObjectId(req.params._id) },
				{ $set: { title: req.body.title, board: req.body.board, upDated: new Date().toString() } }
			);
		}
		else if (req.body.title !== "" && req.body.board === "") {
			result = await db.updateOne(
				{ _id: new ObjectId(req.params._id) },
				{ $set: { title: req.body.title, upDated: new Date().toString() } }
			);
		}
		else if (req.body.title === "" && req.body.board !== "") {
			result = await db.updateOne(
				{ _id: new ObjectId(req.params._id) },
				{ $set: { board: req.body.board, upDated: new Date().toString() } }
			);
		}
		res.json(result);
	})
	// DELETE to delete a message board from the database
	.delete(async (req, res) => {
		// console.log(req.params);
		const db = await mBConnect();
		const result = await db.findOneAndDelete({
			_id: new ObjectId(req.params._id)
		})
		res.json(result);
		console.log(result);
	})

	// ========ISSUE=POST========
	app.route("/api/issues").post(async (req, res) => {
		// console.log(req.body);
		const { username, issue } = req.body;
		try {
			const db = await issuesConnect();
			const result = await db.insertOne({
				username: username,
				issue: issue,
				date: new Date().toString(),
			});
			res.json(result);
			console.log(result);
		} catch (err) {
			res.json({ error: err });
			console.log(err);
		}
	});
};
