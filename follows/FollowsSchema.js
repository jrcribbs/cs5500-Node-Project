import mongoose from "mongoose";
/**
 * Follows mongoose schema.
 */
const followsSchema = new mongoose.Schema({
    userFollowed: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel' },
    userFollowing: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel' }
}, { collection: 'follows' });
export default followsSchema;
