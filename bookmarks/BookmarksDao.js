import bookmarksModel from "./BookmarksModel";
/**
 * Finds all tuits bookmarked by given user.
 * @param uid id of user
 */
export const findTuitsUserBookmarked = (uid) => bookmarksModel
    .find({ bookmarkedBy: uid })
    .populate('bookmarkedTuit', 'tuit')
    .populate('bookmarkedBy', 'username').exec();
/**
 * Finds all users that bookmarked given tuit.
 * @param tid id of tuit
 */
export const findUsersThatBookmarkedTuit = (tid) => bookmarksModel
    .find({ bookmarkedTuit: tid })
    .populate('bookmarkedTuit')
    .populate('bookmarkedBy', 'username')
    .exec();
/**
 * Creates new bookmark.
 * @param uid id of user who bookmarks
 * @param tid id of tuit that is bookmarked
 */
export const userBookmarksTuit = (uid, tid) => bookmarksModel
    .create({ bookmarkedTuit: tid, bookmarkedBy: uid });
/**
 * Deletes bookmark.
 * @param uid id of user who bookmarked
 * @param tid id of tuit that was bookmarked
 */
export const userUnbookmarksTuit = (uid, tid) => bookmarksModel
    .deleteOne({ bookmarkedTuit: tid,
    bookmarkedBy: uid });
