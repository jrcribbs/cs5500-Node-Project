"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
/**
 * Messages mongoose schema.
 */
const messagesSchema = new mongoose_1.default.Schema({
    message: { type: "string" },
    to: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'UserModel' },
    from: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'UserModel' },
    sentOn: { type: Date }
}, { collection: 'messages' });
exports.default = messagesSchema;
//# sourceMappingURL=MessagesSchema.js.map