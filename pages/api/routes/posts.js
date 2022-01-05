const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//create a post

router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete a post

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("the post has been deleted");
    } else {
      res.status(403).json("you can delete only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//upvoting a post

router.put("/:id/upvote", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.upvotes.includes(req.body.userId)) {
      await post.updateOne({ $push: { upvotes: req.body.userId } });
      res.status(200).json("The post has been upvoted");
    } else {
      await post.updateOne({ $pull: { upvotes: req.body.userId } });
      res.status(200).json("The upvote has been removed");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//downvoting a post
router.put("/:id/downvote", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.downvotes.includes(req.body.userId)) {
      await post.updateOne({ $push: { downvotes: req.body.userId } });
      res.status(200).json("The post has been downvoted");
    } else {
      await post.updateOne({ $pull: { downvotes: req.body.userId } });
      res.status(200).json("The downvote has been removed");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//get a post

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//all post
router.get('/posts',async(req,res)=>{
  try{
    Post.map((posts)=>{
      res.status(200).json(posts)
    })
  }
})
//get timeline posts

router.get("/timeline/:userId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.status(200).json(userPosts.concat(...friendPosts));
  } catch (err) {
    res.status(500).json(err);
  }
});

//get user's all posts

router.get("/profile/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const posts = await Post.find({ userId: user._id });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
