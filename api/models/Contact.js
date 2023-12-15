import { Schema, model } from "mongoose";

const contactSchema = new Schema({
  name: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true },
  number: { type: Number, required: true },
  message: { type: String, trim: true, required: true },
});

// Compiling Schema into model
const ContactModel = model("contact", contactSchema);

//Export Model
export { ContactModel };
