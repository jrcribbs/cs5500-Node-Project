"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userUnlikesTuit = exports.userLikesTuit = exports.findTuitLikesCount = exports.findUsersThatLikedTuit = exports.findTuitsUserLiked = void 0;
const LikesModel_1 = require("./LikesModel");
/**
 * Finds all tuits that given user liked.
 * @param uid id of user who likes tuits
 */
const findTuitsUserLiked = (uid) => LikesModel_1.default
    .find({ likedBy: uid })
    .populate('likedTuit', 'tuit')
    .populate('likedBy', 'username').exec();
exports.findTuitsUserLiked = findTuitsUserLiked;
/**
 * Finds all users who liked given tuit.
 * @param tid id of tuit with likes
 */
const findUsersThatLikedTuit = (tid) => LikesModel_1.default
    .find({ likedTuit: tid })
    .populate('likedTuit')
    .populate('likedBy', 'username')
    .exec();
exports.findUsersThatLikedTuit = findUsersThatLikedTuit;
/**
 * Count number of likes for given tuit.
 * @param tid id of tuit with likes
 */
const findTuitLikesCount = (tid) => LikesModel_1.default
    .find({ likedTuit: tid }).count();
exports.findTuitLikesCount = findTuitLikesCount;
/**
 * Creates new likes relationship.
 * @param uid id of user who likes
 * @param tid id of liked tuit
 */
const userLikesTuit = (uid, tid) => LikesModel_1.default
    .create({ likedTuit: tid, likedBy: uid });
exports.userLikesTuit = userLikesTuit;
/**
 * Deletes likes relationship.
 * @param uid id of user who liked
 * @param tid id of liked tuit
 */
const userUnlikesTuit = (uid, tid) => LikesModel_1.default
    .deleteOne({ likedTuit: tid,
    likedBy: uid });
exports.userUnlikesTuit = userUnlikesTuit;
//# sourceMappingURL=LikesDao.js.map