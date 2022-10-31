const express = require("express");

const postControllers = require("../controllers/postControllers");

const router = express.Router();

router
  .route("/")
  .get(postControllers.getAllPosts) //GET ALL
  .post(postControllers.createNewPost); //POST

router
  .route("/:id") // PARAM ID
  .get(postControllers.getPostById)  //GET
  .put(postControllers.updatePostById) // PUT
  .delete(postControllers.deletePostById); //DELETE

module.exports = router;
