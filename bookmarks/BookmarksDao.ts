import bookmarksModel from "./BookmarksModel";

export const findTuitsUserBookmarked =
    (uid: string) => bookmarksModel
    .find({bookmarkedBy: uid})
    .populate('bookmarkedTuit', 'tuit')
    .populate('bookmarkedBy', 'username').exec();

export const findUsersThatBookmarkedTuit =
    (tid: string) => bookmarksModel
    .find({bookmarkedTuit: tid})
    .populate('bookmarkedTuit')
    .populate('bookmarkedBy', 'username')
    .exec();

export const userBookmarksTuit =
    (uid: string, tid: string) => bookmarksModel
    .create({bookmarkedTuit: tid, bookmarkedBy: uid});

export const userUnbookmarksTuit =
    (uid: string, tid: string) => bookmarksModel
    .deleteOne({bookmarkedTuit: tid,
      bookmarkedBy: uid});
