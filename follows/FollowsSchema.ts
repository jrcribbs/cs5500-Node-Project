import mongoose from "mongoose";

const followsSchema = new mongoose.Schema({
  userFollowed: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  userFollowing: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'}
}, {collection: 'follows'});

export default followsSchema;