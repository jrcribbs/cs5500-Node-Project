import DislikeDaoI from "../interfaces/DislikeDaoI";
import DislikeModel from "../mongoose/dislikes/DislikeModel";
import Dislike from "../models/dislikes/Dislike";

/**
 * DAO for dislikes.
 */
export default class DislikeDao implements DislikeDaoI {
  private static dislikeDao: DislikeDao | null = null;
  public static getInstance = (): DislikeDao => {
    if(DislikeDao.dislikeDao === null) {
      DislikeDao.dislikeDao = new DislikeDao();
    }
    return DislikeDao.dislikeDao;
  }
  private constructor() {}
  findAllUsersThatDisLikedTuit = async (tid: string): Promise<Dislike[]> =>
      DislikeModel
      .find({tuit: tid})
      .populate("dislikedBy")
      .exec();
  findAllTuitsDislikedByUser = async (uid: string): Promise<Dislike[]> =>
      DislikeModel
      .find({dislikedBy: uid})
      .populate({
        path: "tuit",
        populate: {
          path: "postedBy"
        }
      })

      .exec();
  userDislikesTuit = async (uid: string, tid: string): Promise<any> =>
      DislikeModel.create({tuit: tid, dislikedBy: uid});
  userUndislikesTuit = async (uid: string, tid: string): Promise<any> =>
      DislikeModel.deleteOne({tuit: tid, dislikedBy: uid});

  /**
   * Counts how many users disliked given tuit.
   * @param tid tuit
   */
  countHowManyDislikedTuit = async (tid) =>
      DislikeModel.count({tuit: tid});

  /**
   * Find if given user dislikes tuit.
   * @param uid user
   * @param tid tuit
   */
  findUserDislikesTuit = async (uid, tid) =>
      DislikeModel.findOne(
          {tuit: tid, dislikedBy: uid});
}