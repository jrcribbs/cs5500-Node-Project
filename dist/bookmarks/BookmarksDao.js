"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userUnbookmarksTuit = exports.userBookmarksTuit = exports.findUsersThatBookmarkedTuit = exports.findTuitsUserBookmarked = void 0;
const BookmarksModel_1 = require("./BookmarksModel");
/**
 * Finds all tuits bookmarked by given user.
 * @param uid id of user
 */
const findTuitsUserBookmarked = (uid) => BookmarksModel_1.default
    .find({ bookmarkedBy: uid })
    .populate('bookmarkedTuit', 'tuit')
    .populate('bookmarkedBy', 'username').exec();
exports.findTuitsUserBookmarked = findTuitsUserBookmarked;
/**
 * Finds all users that bookmarked given tuit.
 * @param tid id of tuit
 */
const findUsersThatBookmarkedTuit = (tid) => BookmarksModel_1.default
    .find({ bookmarkedTuit: tid })
    .populate('bookmarkedTuit')
    .populate('bookmarkedBy', 'username')
    .exec();
exports.findUsersThatBookmarkedTuit = findUsersThatBookmarkedTuit;
/**
 * Creates new bookmark.
 * @param uid id of user who bookmarks
 * @param tid id of tuit that is bookmarked
 */
const userBookmarksTuit = (uid, tid) => BookmarksModel_1.default
    .create({ bookmarkedTuit: tid, bookmarkedBy: uid });
exports.userBookmarksTuit = userBookmarksTuit;
/**
 * Deletes bookmark.
 * @param uid id of user who bookmarked
 * @param tid id of tuit that was bookmarked
 */
const userUnbookmarksTuit = (uid, tid) => BookmarksModel_1.default
    .deleteOne({ bookmarkedTuit: tid,
    bookmarkedBy: uid });
exports.userUnbookmarksTuit = userUnbookmarksTuit;
//# sourceMappingURL=BookmarksDao.js.map