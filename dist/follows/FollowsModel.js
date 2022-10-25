"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const FollowsSchema_1 = require("./FollowsSchema");
/**
 * Follows mongoose model.
 */
const followsModel = mongoose_1.default.model("FollowsModel", FollowsSchema_1.default);
exports.default = followsModel;
//# sourceMappingURL=FollowsModel.js.map