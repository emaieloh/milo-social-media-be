import mongoose from "mongoose";

const Schema = mongoose.Schema;
const CommentModel = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    post_id: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", CommentModel);
export default Comment;
