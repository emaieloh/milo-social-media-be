import mongoose from "mongoose";

const Schema = mongoose.Schema;
const LikeModel = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    postId: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Like = mongoose.model("Like", LikeModel);
export default Like;
