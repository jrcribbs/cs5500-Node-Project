"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BookmarksSchema_1 = require("./BookmarksSchema");
/**
 * Bookmarks mongoose model.
 */
const bookmarksModel = mongoose_1.default.model("BookmarksModel", BookmarksSchema_1.default);
exports.default = bookmarksModel;
//# sourceMappingURL=BookmarksModel.js.map