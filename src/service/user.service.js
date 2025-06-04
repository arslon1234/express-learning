import { OK } from "zod";
import { User } from "../models/index.js";

export const signUp = async (user) => {
    try {
        const newUser = new User(user);
        await newUser.save();
        return newUser;
      } catch (e) {
        throw new Error(e);
      }
};

export const findByEmailUser = async (email) => {
    try {
      const user = await User.findOne({ email });
      console.log(user, 'user')
      if (!user) {
        throw new Error('xato ketti email')
        // throw new AppError("Post not found!", 404);
      }
      return {message: 'user successfully', data: user, ok: true};
    } catch (e) {
      return {message: e.message, ok: false};
    }
  };