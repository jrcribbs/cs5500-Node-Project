import Dislike from "../models/dislikes/Dislike";

/**
 * @file Declares API for Dislikes related data access object methods
 */
export default interface DislikeDaoI {
  /**
   * Finds users that disliked given tuit
   * @param tid disliked tuit
   */
  findAllUsersThatDisLikedTuit (tid: string): Promise<Dislike[]>;

  /**
   * Find all tuits disliked by given user.
   * @param uid user who dislikes
   */
  findAllTuitsDislikedByUser (uid: string): Promise<Dislike[]>;

  /**
   * User undislikes (but doesn't immediately "like") tuit.
   * @param tid tuit
   * @param uid user
   */
  userUndislikesTuit (tid: string, uid: string): Promise<any>;

  /**
   * User dislikes tuit.
   * @param tid tuit
   * @param uid user
   */
  userDislikesTuit (tid: string, uid: string): Promise<Dislike>;
};