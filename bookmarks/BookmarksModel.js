import mongoose from "mongoose";
import bookmarksSchema from "./BookmarksSchema";
/**
 * Bookmarks mongoose model.
 */
const bookmarksModel = mongoose.model("BookmarksModel", bookmarksSchema);
export default bookmarksModel;
