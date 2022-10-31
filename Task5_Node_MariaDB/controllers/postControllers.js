const Post = require("../models/Post");
//calls method that returns whole table
exports.getAllPosts = async (req, res, next) => {
  try {
    const [posts, _] = await Post.findAll();
    res.status(200).json({ count: posts.length, posts });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
//calls method that returns post by id
exports.getPostById = async (req, res, next) => {
  try {
    let postId = Number(req.params.id);
    let [post, _] = await Post.findById(postId);
    res.status(200).json({ post: post[0] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
//calls save method to create new post
exports.createNewPost = async (req, res, next) => {
  try {
    let { title, body } = req.body;
    let post = new Post(title, body);
    post = await post.save();
    res.status(201).json({ message: "Post created" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
//calls delete method
  exports.deletePostById = async (reg, res, next) => {
    try {
      let postId = Number(reg.params.id);
      let [post, _] = await Post.deleteById(postId);
      res.status(200).json({ post: "Post Deleted" });
    }catch (error){
      console.log(error);
      next(error);
    }
  };
  //calls update method
  exports.updatePostById = async (reg, res, next) => {
    try {
      let postId = Number(reg.params.id);
      let { title, body } = reg.body;
      let [post, _] = await Post.updateById(postId, title, body);
      res.status(200).json({ post: "Post Updated" });
    }catch (error){
      console.log(error);
      next(error);
    }
  };
