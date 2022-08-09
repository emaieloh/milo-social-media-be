import Comment from "../models/CommentModel.js";
import Post from "../models/PostModel.js";

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({});
    res.send(comments);
  } catch (err) {
    res.send(err);
  }
};

const addComment = async (req, res) => {
  try {
    const { user, content, post_id } = req.body;
    const comment = new Comment({
      user,
      content,
      post_id,
    });
    await comment.save();
    const post = await Post.findOne({ _id: post_id });
    post.comments.push(comment._id);
    await post.save();
    res.send(comment);
  } catch (err) {
    res.send(err);
  }
};

export { getComments, addComment };
