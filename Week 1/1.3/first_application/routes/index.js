var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  var places = [
    { name: "Home", rating: 10 },
    { name: "Myrtle Beach", rating: 9 },
    { name: "Gatlinburg", rating: 8 },
    { name: "Virginia Beach", rating: 7 },
    { name: "San Antonio", rating: 7 },
  ];

  // create a name
  var myname = "David Owens";

  res.render("index", {
    title: "Favorite Places",
    places: places,
    myname: myname,
  });
});

module.exports = router;
