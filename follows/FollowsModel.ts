import mongoose from "mongoose";
import FollowsSchema from "./FollowsSchema";

const followsModel = mongoose.model("FollowsModel", FollowsSchema);

export default followsModel;
