import mongoose from "mongoose";

const bookmarksSchema = new mongoose.Schema({
  bookmarkedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  bookmarkedTuit: {type: mongoose.Schema.Types.ObjectId, ref: 'TuitModel'}
}, {collection: 'bookmarks'});

export default bookmarksSchema;
