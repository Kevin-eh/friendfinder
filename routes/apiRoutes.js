var friends = require("../data/friendsData");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    //got stuck on this part. Used https://github.com/kwoulfe/Friend-Finder/blob/master/app/routing/apiRoutes.js for the for loop.
    function findUserMatch(answers) {
      var userSum = 0;

      for (let h = 0; h < answers.length; h++) {
        userSum += +answers[h];
      }
      var bestMatch = {
        friend: null,
        lowest: null
      };
      for (let i = 0; i < friends.length; i++) {
        var runningTotal = 0;
        for (let j = 0; j < friends[i].answers.length; j++) {
          runningTotal += friends[i].answers[j];
        }
        var difference = Math.abs(userSum - runningTotal);
        if (difference < bestMatch.lowest || bestMatch.friend == null) {
          bestMatch.friend = friends[i];
          bestMatch.lowest = difference;
        }
      }
      return bestMatch.friend;
    }
    var newMatch = findUserMatch(req.body.answers);
    console.log(newMatch);
    friends.push(req.body);
    res.json(newMatch);

    // var newFriend = req.body;

    // console.log(newFriend);

    // friends.push(newFriend);

    // res.json(newFriend);
  });
};
