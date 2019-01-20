var friends = require("../data/friends")

module.exports = function(app) {

    app.get("/api/friends", function(request, response) {
        response.json(friends);
    });

    app.post("/api/friends", function(request, response) {
        friends.push(request.body);
    });
}