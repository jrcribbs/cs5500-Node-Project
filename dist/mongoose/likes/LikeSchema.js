"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const LikeSchema = new mongoose.Schema({
    tuit: { type: mongoose_1.Schema.Types.ObjectId, ref: "TuitModel" },
    likedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: "UserModel" },
}, { collection: "likes" });
exports.default = LikeSchema;
//# sourceMappingURL=LikeSchema.js.map