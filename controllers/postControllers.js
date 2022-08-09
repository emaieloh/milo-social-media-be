import Post from "../models/PostModel.js";
import Comment from "../models/CommentModel.js";
import Like from "../models/LikeModel.js";
import { cloudinary } from "../cloudinary/index.js";

const getPosts = async (req, res) => {
  try {
    const post = await Post.find({})
      .sort({ date: -1 })
      .populate("comments")
      .populate("user")
      .exec();
    res.send(post);
  } catch (err) {
    res.send(err);
  }
};

const addPost = async (req, res) => {
  try {
    const { path, filename } = req.file;
    const { user, content } = req.body;
    const post = new Post({
      user,
      content,
      image: { url: path, filename },
    });
    await post.save();
    res.send(post);
  } catch (err) {
    res.send(err);
  }
};

const deletePost = (req, res) => {
  try {
    const { post_id, img } = req.params;
    Comment.deleteMany({ post_id }, (err, doc) => {
      Like.deleteMany({ postId: post_id }, (err, doc) => {
        Post.deleteOne({ _id: post_id }, (err, doc) => {
          cloudinary.uploader.destroy(`social-media/${img}`);
          res.send(doc);
        });
      });
    });
  } catch (err) {
    res.send(err);
  }
};

export { getPosts, addPost, deletePost };
