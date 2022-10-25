import mongoose from "mongoose";
import UserSchema from "./UserSchema";
/**
 * Model for Users.
 */
const UserModel = mongoose.model('UserModel', UserSchema);
export default UserModel;
