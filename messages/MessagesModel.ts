import mongoose from "mongoose";
import MessagesSchema from "./MessagesSchema";

const messagesModel = mongoose.model("MessagesModel", MessagesSchema);

export default messagesModel;
