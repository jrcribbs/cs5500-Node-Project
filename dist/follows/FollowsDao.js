"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findFollowedUsers = exports.findFollowingUsers = exports.userUnfollowsUser = exports.userFollowsUser = void 0;
const FollowsModel_1 = require("./FollowsModel");
/**
 * Creates new follows relationshio
 * @param uid followed user
 * @param uid2 following user
 */
const userFollowsUser = (uid, uid2) => FollowsModel_1.default
    .create({ userFollowed: uid, userFollowing: uid2 });
exports.userFollowsUser = userFollowsUser;
/**
 * Deletes following relationship
 * @param uid followed user
 * @param uid2 following user
 */
const userUnfollowsUser = (uid, uid2) => FollowsModel_1.default
    .deleteOne({ userFollowed: uid,
    userFollowing: uid2 });
exports.userUnfollowsUser = userUnfollowsUser;
/**
 * Finds users that provided uid is following.
 * @param uid uid of following user
 */
const findFollowingUsers = (uid) => FollowsModel_1.default
    .find({ userFollowing: uid })
    .populate('userFollowed', 'user')
    .populate('userFollowing', 'user').exec();
exports.findFollowingUsers = findFollowingUsers;
/**
 * Finds users that are following provided uid.
 * @param uid uid of following user
 */
const findFollowedUsers = (uid) => FollowsModel_1.default
    .find({ userFollowed: uid })
    .populate('userFollowed', 'user')
    .populate('userFollowing', 'user').exec();
exports.findFollowedUsers = findFollowedUsers;
//# sourceMappingURL=FollowsDao.js.map