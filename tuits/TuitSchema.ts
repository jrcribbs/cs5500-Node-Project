import mongoose from "mongoose";

/**
 * Tuit mongoose schema.
 */
const TuitSchema = new mongoose.Schema({
    tuit: {type: String, required: true},
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'},
    postedOn: Date,
}, {collection: 'tuits'});
export default TuitSchema;
