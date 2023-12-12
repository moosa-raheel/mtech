import { Schema, model } from "mongoose";

//User Schema
const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    description: "Username should be string and it is required",
  },
  gender: {
    type: String,
    required: true,
    trim: true,
    description: "Gender should be string and it is required",
  },
  email: {
    type: String,
    required: true,
    trim: true,
    description: "email should be string and it is required",
  },
  password: {
    type: String,
    required: true,
    trim: true,
    description: "password should be string and it is required",
  },
  isAdmin: { type: Boolean, default: false },
  join: { type: Date, default: Date.now },
});

// Compiling SChema

const UserModel = model("user", userSchema);

// Export Model
export { UserModel };
