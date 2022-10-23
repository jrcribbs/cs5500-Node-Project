import mongoose from "mongoose";
import MessagesSchema from "./MessagesSchema";

/**
 * Messages mongoose model.
 */
const messagesModel = mongoose.model("MessagesModel", MessagesSchema);

export default messagesModel;
