"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
/**
 * Bookmarks mongoose schema.
 */
const bookmarksSchema = new mongoose_1.default.Schema({
    bookmarkedBy: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'UserModel' },
    bookmarkedTuit: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'TuitModel' }
}, { collection: 'bookmarks' });
exports.default = bookmarksSchema;
//# sourceMappingURL=BookmarksSchema.js.map