var path = require("path")

module.exports = function(app) {

    app.get("/", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/home.html"))
    });

    app.post("/survey", function(request, response) {
        response.sendfile(path.join(__dirname, "../public/survey.html"))
    });
}