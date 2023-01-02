
const express = require('express');
const router = express.Router();
const UserController = require('../controller/usersController');

router.get("/", async(req, res) => {
  res.json({"s":"s"})
 });

 // Create a new User
 router.post("/users/create", UserController.create);
 router.get("/users", UserController.findAll);
//  router.get("/users", async(req, res) => {
//   res.json(req.body)
//  });




module.exports = router;