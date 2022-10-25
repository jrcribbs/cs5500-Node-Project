"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MessagesSchema_1 = require("./MessagesSchema");
/**
 * Messages mongoose model.
 */
const messagesModel = mongoose_1.default.model("MessagesModel", MessagesSchema_1.default);
exports.default = messagesModel;
//# sourceMappingURL=MessagesModel.js.map