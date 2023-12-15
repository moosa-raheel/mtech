import { ContactModel } from "../models/Contact.js";

const contact = async (req, res) => {
  try {
    const data = new ContactModel(req.body);
    await data.save();
    res.send(data);
  } catch (error) {
    res.send({ error: error.message });
  }
};

export default contact;
