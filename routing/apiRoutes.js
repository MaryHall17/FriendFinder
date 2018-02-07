var friendsArray = require("../app/data/friends");
// var newFriend = require("../public/survey");


module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
		res.json(friendsArray);

	});

	// app.post("/api/friends", function(req, res) {
	//  	friendsArray.push(req.body);
	// 	res.json(true);
	// });

};

console.log(friendsArray);

// console.log(module.exports);

