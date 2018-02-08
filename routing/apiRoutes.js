var friendsArray = require("../app/data/friends");
// var newFriend = require("../public/survey");


module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
		res.json(friendsArray);

	});

	app.post("/api/friends", function(req, res) {
	 	friendsArray.push(req.body);
		res.json(true);

		//"Pseudo code"

		// for (i = 0; i < friendsArray.length; i++) {
		// 	for (i = 0; i < friendsArray[i].score.length; i++) {
		// 		var scores = [parseInt(score[i])];

		// 		if (scores[i] !== scores[i]) {
		// 			var differences = [];
		// 			var difference = Math.abs(scores[i] - scores[i]);
		// 			differences.push(difference);
		// 			var floor = 0;
		// 			var differencesTotal = differences += floor;

		// 			if (differencesTotal < differencesTotal) {
		// 				var match = friendsArray[i].name + friendsArray[i].photo;
		// 			}


		// 		};




			}
		}

		// 
	});



};

console.log(friendsArray);





// console.log(module.exports);

