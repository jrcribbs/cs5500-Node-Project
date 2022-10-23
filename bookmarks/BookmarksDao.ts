import bookmarksModel from "./BookmarksModel";

/**
 * Finds all tuits bookmarked by given user.
 * @param uid id of user
 */
export const findTuitsUserBookmarked =
    (uid: string) => bookmarksModel
    .find({bookmarkedBy: uid})
    .populate('bookmarkedTuit', 'tuit')
    .populate('bookmarkedBy', 'username').exec();

/**
 * Finds all users that bookmarked given tuit.
 * @param tid id of tuit
 */
export const findUsersThatBookmarkedTuit =
    (tid: string) => bookmarksModel
    .find({bookmarkedTuit: tid})
    .populate('bookmarkedTuit')
    .populate('bookmarkedBy', 'username')
    .exec();

/**
 * Creates new bookmark.
 * @param uid id of user who bookmarks
 * @param tid id of tuit that is bookmarked
 */
export const userBookmarksTuit =
    (uid: string, tid: string) => bookmarksModel
    .create({bookmarkedTuit: tid, bookmarkedBy: uid});

/**
 * Deletes bookmark.
 * @param uid id of user who bookmarked
 * @param tid id of tuit that was bookmarked
 */
export const userUnbookmarksTuit =
    (uid: string, tid: string) => bookmarksModel
    .deleteOne({bookmarkedTuit: tid,
      bookmarkedBy: uid});
