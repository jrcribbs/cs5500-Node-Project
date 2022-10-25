import followsModel from "./FollowsModel";
/**
 * Creates new follows relationshio
 * @param uid followed user
 * @param uid2 following user
 */
export const userFollowsUser = (uid, uid2) => followsModel
    .create({ userFollowed: uid, userFollowing: uid2 });
/**
 * Deletes following relationship
 * @param uid followed user
 * @param uid2 following user
 */
export const userUnfollowsUser = (uid, uid2) => followsModel
    .deleteOne({ userFollowed: uid,
    userFollowing: uid2 });
/**
 * Finds users that provided uid is following.
 * @param uid uid of following user
 */
export const findFollowingUsers = (uid) => followsModel
    .find({ userFollowing: uid })
    .populate('userFollowed', 'user')
    .populate('userFollowing', 'user').exec();
/**
 * Finds users that are following provided uid.
 * @param uid uid of following user
 */
export const findFollowedUsers = (uid) => followsModel
    .find({ userFollowed: uid })
    .populate('userFollowed', 'user')
    .populate('userFollowing', 'user').exec();
