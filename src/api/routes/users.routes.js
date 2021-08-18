const express = require("express");

const router = express.Router();
const controller = require("../controllers/users.controller");

router.route("/").get(controller.getUsers);
router.route("/:id").get(controller.getUserById);

module.exports = router;
