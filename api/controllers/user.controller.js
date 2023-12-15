import { UserModel } from "../models/User.js";
export class UserController {
  static createUser = async (req, res) => {
    try {
      const data = await new UserModel(req.body).save();
      res.status(201).json(data);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
}
