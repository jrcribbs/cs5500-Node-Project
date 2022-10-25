import mongoose from "mongoose";
import likesSchema from "./LikesSchema";
/**
 * Likes mongoose model.
 */
const likesModel = mongoose.model("LikesModel", likesSchema);
export default likesModel;
