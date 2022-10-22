import mongoose from "mongoose";
import bookmarksSchema from "./BookmarksSchema";

const bookmarksModel = mongoose.model("BookmarksModel", bookmarksSchema);

export default bookmarksModel;
