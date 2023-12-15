import { Schema, model } from "mongoose";

//User Schema
const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  isAdmin: { type: Boolean, default: false },
  join: { type: Date, default: Date.now },
});

// Compiling SChema

const UserModel = model("user", userSchema);

// Export Model
export { UserModel };
