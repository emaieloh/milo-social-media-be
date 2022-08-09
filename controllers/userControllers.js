import User from "../models/UserModel.js";
import bcrypt from "bcrypt";

const signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    res.send({ error: "User already exists." });
  } else {
    bcrypt.hash(password, 12, async (err, hash) => {
      try {
        const newUser = new User({
          firstName,
          lastName,
          email,
          password: hash,
        });
        await newUser.save();
        res.send(newUser);
      } catch (err) {
        res.send(err);
      }
    });
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      res.send(user);
    } else {
      res.send({ error: "Invalid email/password" });
    }
  } else {
    res.send({ error: "Invalid email/password." });
  }
};

export { signup, signin };
