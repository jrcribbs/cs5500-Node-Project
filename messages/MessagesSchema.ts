import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema({
  message: {type: "string"},
  to: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  from: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  sentOn: {type: Date}
}, {collection: 'messages'});

export default messagesSchema;