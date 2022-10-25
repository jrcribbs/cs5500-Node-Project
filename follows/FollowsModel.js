import mongoose from "mongoose";
import FollowsSchema from "./FollowsSchema";
/**
 * Follows mongoose model.
 */
const followsModel = mongoose.model("FollowsModel", FollowsSchema);
export default followsModel;
