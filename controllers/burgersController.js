var db = require("../models");

module.exports = function (app) {

  app.get("/api/burgers", function (req, res) {
    db.burgers.findAll({}).then(function (burgerData) {
      res.json(burgerData);
    });
  });

  app.post("/api/burgers", function (req, res) {
    console.log(req.body);

    db.burgers.create({
      burger_name: req.body.burger_name,
      devoured: false
    }).then(function (burgerData) {
      res.json(burgerData);
    })
  });

  app.put("/api/burgers/:id", function (req, res) {
    db.burgers.update({
      devoured: true
    },
    {
      where: {
        id: req.params.id
      }
    }).then(function(burgerData){
      res.json(burgerData);
    });
  });
}