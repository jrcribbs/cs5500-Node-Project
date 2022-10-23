import followsModel from "./FollowsModel";

/**
 * Creates new follows relationshio
 * @param uid followed user
 * @param uid2 following user
 */
export const userFollowsUser =
    (uid: string, uid2: string) => followsModel
    .create({userFollowed: uid, userFollowing: uid2});

/**
 * Deletes following relationship
 * @param uid followed user
 * @param uid2 following user
 */
export const userUnfollowsUser =
    (uid: string, uid2: string) => followsModel
    .deleteOne({userFollowed: uid,
        userFollowing: uid2});

/**
 * Finds users that provided uid is following.
 * @param uid uid of following user
 */
export const findFollowingUsers =
    (uid: string) => followsModel
    .find({userFollowing: uid})
    .populate('userFollowed', 'user')
    .populate('userFollowing', 'user').exec();

/**
 * Finds users that are following provided uid.
 * @param uid uid of following user
 */
export const findFollowedUsers =
    (uid: string) => followsModel
    .find({userFollowed: uid})
    .populate('userFollowed', 'user')
    .populate('userFollowing', 'user').exec();

