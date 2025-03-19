const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/posts", controller.getPosts);
router.get("/posts/:id", controller.getPostById);
router.get("/posts/:id/comments", controller.getPostByIdWithComments);
router.get("/tags/:name", controller.getPostsByTag);

module.exports = router;
