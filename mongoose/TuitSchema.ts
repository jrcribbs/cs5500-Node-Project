import mongoose from "mongoose";

const TuitSchema = new mongoose.Schema({
  tuit: String,
  postedOn: Date,
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel'},

}, {collection: 'tuits'});
export default TuitSchema;