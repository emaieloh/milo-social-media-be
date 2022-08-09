import mongoose from "mongoose";

const connectDb = () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connected to database.");
  } catch (err) {
    console.error("Database connection failed.");
    process.exit(1);
  }
};

export default connectDb;
