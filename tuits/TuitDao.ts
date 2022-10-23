import TuitDaoI from "./TuitDaoI";
import Tuit from "./Tuit";
import tuitModel from "./TuitModel";
import User from "../users/User";

/**
 * DAO for Tuits.
 */
export default class TuitDao implements TuitDaoI {
    private static tuitDao: TuitDao | null = null;
    /**
     * Singleton pattern for DAO instantiation.
     */
    public static getInstance = (): TuitDao => {
        if (TuitDao.tuitDao === null) {
            TuitDao.tuitDao = new TuitDao();
        }
        return TuitDao.tuitDao;
    }
    private constructor() {}

    /**
     * Finds specific tuit.
     * @param id tid of tuit
     */
    public async findTuitById(id: string):
        Promise<Tuit> {
        const tuitMongooseModel: any = await tuitModel
            .findById(id)
            .populate('postedBy').exec();
        console.log(tuitMongooseModel.postedBy)
        const author = new User(
            tuitMongooseModel.postedBy?._id??'',
            tuitMongooseModel.postedBy?.username??'',
            tuitMongooseModel.postedBy?.password??''
        );
        const tuit = new Tuit(
            tuitMongooseModel?._id.toString() ?? '',
            tuitMongooseModel?.tuit ?? '',
            new Date(tuitMongooseModel?.postedOn ?? (new Date())))
        tuit.author = author;
        return tuit;
    }

    /**
     * Finds all tuits.
     */
    public async findAllTuits(): Promise<Tuit[]> {
        const tuitMongooseModels =
            await tuitModel.find();
        const tuitModels = tuitMongooseModels
            .map((tuitMongooseModel) => {
                return new Tuit(
                    tuitMongooseModel?._id.toString() ?? '',
                    tuitMongooseModel?.tuit ?? '',
                    new Date(tuitMongooseModel?.postedOn ?? (new Date())))
            });
        return tuitModels;
    }

    /**
     * Finds tuits by specific author.
     * @param authorId uid of user
     */
    public async findTuitsByAuthor(authorId: string):
        Promise<Tuit[]> {
        const tuitMongooseModels = await tuitModel
            .find({postedBy: authorId});
        const tuitModels = tuitMongooseModels
            .map((tuitMongooseModel) => {
                return new Tuit(
                    tuitMongooseModel?._id.toString() ?? '',
                    tuitMongooseModel?.tuit ?? '',
                    new Date(tuitMongooseModel?.postedOn ?? (new Date())))
            });
        return tuitModels;
    }

    /**
     * Creates new tuit.
     * @param tuit json body of tuit to be made
     */
    public async createTuit(tuit: Tuit): Promise<Tuit> {
        const tuitMongooseModel = await tuitModel.create(tuit);
        return new Tuit(
            tuitMongooseModel?._id.toString() ?? '',
            tuitMongooseModel.tuit,
            new Date(tuitMongooseModel?.postedOn ?? (new Date()))
        )
    }

    /**
     * Deletes specific tuit.
     * @param tuitId tid of tuit to be deleted
     */
    public async deleteTuit(tuitId: string): Promise<any> {
        return await tuitModel.deleteOne({_id: tuitId});
    }

    /**
     * Updates specific tuit
     * @param tuitId tid of tuit to be updated
     * @param tuit json with updated tuit information
     */
    public async updateTuit(tuitId: string, tuit: Tuit): Promise<any> {
        return tuitModel.updateOne(
            {_id: tuitId},
            {$set: {tuit: tuit.post}})
    }
}
