var friendArray = require("../data/friends.js")

module.exports = function(app) {

    app.get("/api/friends", function(request, response) {
        response.json(friendArray);
    });

    app.post("/api/friends", function(request, response) {
        var friendData = request.body;
        var friendScore = friendData.scores;
        var scoreDifference = 100;
        var friendMatch = {
            name: "",
            photo: "",
            scoreMatch: 100
        };
        for (var i=0; i < friendArray.length; i++) {
            scoreDifference = 0
            for(var j=0; j < friendArray[i].scores[j]; j++) {
                scoreDifference = Math.abs(parseInt(friendScore[j] - parseInt(friendArray[i].scores[j])));
                if (scoreDifference <= friendMatch.scoreMatch) {
                    friendMatch.name = friendArray[i].friendName;
                    friendMatch.photo = friendArray[i].friendPhoto;
                    friendMatch.scoreMatch = scoreDifference;
                };
            };
        };
        friendArray.push(friendData);
        response.json(friendMatch);
    });
}