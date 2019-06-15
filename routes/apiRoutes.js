var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.post("/api/inventory", function(req, res) {
    db.Inventory.create(req.body).then(function(dbInventory) {
      res.json(dbInventory);
    });
  });

// get user data by username
  app.get("/api/users/:username/", function(req,res){
    db.Users.findOne({ where: {username: req.params.username} }).then(function(dbUsers){
      res.json(dbUsers);
    });
  });

  app.get("/api/transaction/", function(req, res){
    db.Transaction.findAll({}).then(function(dbTransactions){
      res.json(dbTransactions)
    });
  });

  app.get("/api/item/", function(req, res){
    db.Inventory.findAll({}).then(function(Inventory){
      res.json(Inventory)
    });
  });

  // Create a new example
  app.post("/api/users", function(req, res) {
    db.Users.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Delete an inventory by id
  app.delete("/api/inventory/:id", function(req, res) {
    db.Inventory.destroy({ where: { id: req.params.id } }).then(function(dbInventory) {
      res.json(dbInventory);
    });
  });
};
