import mongoose from "mongoose";
import bookmarksSchema from "./BookmarksSchema";

const bookmarksModel = mongoose.model("LikesModel", bookmarksSchema);

export default bookmarksModel;
