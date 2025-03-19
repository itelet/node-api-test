const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/posts", controller.getPosts);
router.get("/posts/:id", controller.getPosts);
router.get("/posts/:id/comments", controller.getPosts);
router.get("/tags/:name", controller.getPosts);

module.exports = router;
