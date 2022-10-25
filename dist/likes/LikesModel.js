"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const LikesSchema_1 = require("./LikesSchema");
/**
 * Likes mongoose model.
 */
const likesModel = mongoose_1.default.model("LikesModel", LikesSchema_1.default);
exports.default = likesModel;
//# sourceMappingURL=LikesModel.js.map