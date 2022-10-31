import mongoose from "mongoose";

/**
 * Bookmarks mongoose schema.
 */
const bookmarksSchema = new mongoose.Schema({
  bookmarkedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  bookmarkedTuit: {type: mongoose.Schema.Types.ObjectId, ref: 'TuitModel'}
}, {collection: 'bookmarks'});

export default bookmarksSchema;
