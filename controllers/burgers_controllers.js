var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers", function(req, res) {
  cat.create([
    "burger_name"
  ], [
    req.body.burger_name, 
  ], function(result) {
    // Send back the ID of the new quote
    res.redirect('/');
  });
});

router.put("burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: true
  }, condition, function(data) {
      res.redirect('/');
    
  });
});

// Export routes for server.js to use.
module.exports = router;