import * as mongoose from "mongoose";
import {Schema} from "mongoose";
import Dislike from "../../models/dislikes/Dislike";

/**
 * Schema for Dislikes
 */
const DislikeSchema = new mongoose.Schema<Dislike>({
  tuit: {type: Schema.Types.ObjectId, ref: "TuitModel"},
  dislikedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "dislikes"});
export default DislikeSchema;