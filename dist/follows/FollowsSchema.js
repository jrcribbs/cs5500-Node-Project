"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
/**
 * Follows mongoose schema.
 */
const followsSchema = new mongoose_1.default.Schema({
    userFollowed: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'UserModel' },
    userFollowing: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'UserModel' }
}, { collection: 'follows' });
exports.default = followsSchema;
//# sourceMappingURL=FollowsSchema.js.map