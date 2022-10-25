import mongoose from "mongoose";
import tuitSchema from "./TuitSchema";
/**
 * Tuit mongoose model.
 */
const TuitModel = mongoose.model("TuitModel", tuitSchema);
export default TuitModel;
