const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// "/api/users" route from server.js
router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);
router.post("/", usersCtrl.create);
router.post("/login", usersCtrl.login);





module.exports = router;
