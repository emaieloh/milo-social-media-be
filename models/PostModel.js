import mongoose from "mongoose";

const Schema = mongoose.Schema;
const PostModel = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      url: { type: String },
      filename: { type: String },
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
        default: [],
      },
    ],
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Like",
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", PostModel);
export default Post;
