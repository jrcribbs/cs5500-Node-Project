"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const TuitSchema = new mongoose.Schema({
    tuit: { type: String, required: true },
    postedBy: { type: mongoose_1.Schema.Types.ObjectId, ref: "UserModel" },
    postedOn: { type: Date, default: Date.now },
    image: String,
    youtube: String,
    avatarLogo: String,
    imageOverlay: String,
    stats: {
        replies: Number,
        retuits: Number,
        likes: Number
    }
}, { collection: "tuits" });
exports.default = TuitSchema;
//# sourceMappingURL=TuitSchema.js.map