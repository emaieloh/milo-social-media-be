import Like from "../models/LikeModel.js";
import Post from "../models/PostModel.js";

const getLikes = async (req, res) => {
  try {
    const likes = await Like.find({});
    res.send(likes);
  } catch (err) {
    res.send(err);
  }
};

const likePost = async (req, res) => {
  try {
    const { postId, userId } = req.params;
    const like = await Like.findOne({ postId, userId });
    if (!like) {
      const like = new Like({
        postId,
        userId,
      });
      await like.save();
      const post = await Post.findOne({ _id: postId });
      post.likes.push(like._id);
      await post.save();
      res.send(like);
    } else {
      Post.findOneAndUpdate(
        { _id: postId },
        { $pull: { likes: like._id } },
        { new: true, useFindAndModify: false },
        (err, doc) => {
          Like.deleteOne({ userId, postId }, (err, doc) => {
            res.send(doc);
          });
        }
      );
    }
  } catch (err) {
    res.send(err);
  }
};

export { getLikes, likePost };
