var path = require("path");

module.exports = function(app) {


	app.get("/survey", function(req, res) {
		res.sendFile(path.join(_dirname, "../public/survey.html"));
	});

	app.get("/home", function(req, res) {
		res.sendFile(path.join(_dirname, "..public/home.html"));
	})

	app.get("*", function(req, res) {
		res.sendFile(path(_dirname, "../public/home.html"));
	});
};