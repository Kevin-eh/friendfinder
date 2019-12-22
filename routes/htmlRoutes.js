var path = require("path");
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });

  app.get("/index.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });

  app.get("/quiz.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../quiz.html"));
  });
};
