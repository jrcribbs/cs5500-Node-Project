var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Tuit from "./Tuit";
import tuitModel from "./TuitModel";
import User from "../users/User";
/**
 * DAO for Tuits.
 */
export default class TuitDao {
    constructor() { }
    /**
     * Finds specific tuit.
     * @param id tid of tuit
     */
    findTuitById(id) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return __awaiter(this, void 0, void 0, function* () {
            const tuitMongooseModel = yield tuitModel
                .findById(id)
                .populate('postedBy').exec();
            console.log(tuitMongooseModel.postedBy);
            const author = new User((_b = (_a = tuitMongooseModel.postedBy) === null || _a === void 0 ? void 0 : _a._id) !== null && _b !== void 0 ? _b : '', (_d = (_c = tuitMongooseModel.postedBy) === null || _c === void 0 ? void 0 : _c.username) !== null && _d !== void 0 ? _d : '', (_f = (_e = tuitMongooseModel.postedBy) === null || _e === void 0 ? void 0 : _e.password) !== null && _f !== void 0 ? _f : '');
            const tuit = new Tuit((_g = tuitMongooseModel === null || tuitMongooseModel === void 0 ? void 0 : tuitMongooseModel._id.toString()) !== null && _g !== void 0 ? _g : '', (_h = tuitMongooseModel === null || tuitMongooseModel === void 0 ? void 0 : tuitMongooseModel.tuit) !== null && _h !== void 0 ? _h : '', new Date((_j = tuitMongooseModel === null || tuitMongooseModel === void 0 ? void 0 : tuitMongooseModel.postedOn) !== null && _j !== void 0 ? _j : (new Date())));
            tuit.author = author;
            return tuit;
        });
    }
    /**
     * Finds all tuits.
     */
    findAllTuits() {
        return __awaiter(this, void 0, void 0, function* () {
            const tuitMongooseModels = yield tuitModel.find();
            const tuitModels = tuitMongooseModels
                .map((tuitMongooseModel) => {
                var _a, _b, _c;
                return new Tuit((_a = tuitMongooseModel === null || tuitMongooseModel === void 0 ? void 0 : tuitMongooseModel._id.toString()) !== null && _a !== void 0 ? _a : '', (_b = tuitMongooseModel === null || tuitMongooseModel === void 0 ? void 0 : tuitMongooseModel.tuit) !== null && _b !== void 0 ? _b : '', new Date((_c = tuitMongooseModel === null || tuitMongooseModel === void 0 ? void 0 : tuitMongooseModel.postedOn) !== null && _c !== void 0 ? _c : (new Date())));
            });
            return tuitModels;
        });
    }
    /**
     * Finds tuits by specific author.
     * @param authorId uid of user
     */
    findTuitsByAuthor(authorId) {
        return __awaiter(this, void 0, void 0, function* () {
            const tuitMongooseModels = yield tuitModel
                .find({ postedBy: authorId });
            const tuitModels = tuitMongooseModels
                .map((tuitMongooseModel) => {
                var _a, _b, _c;
                return new Tuit((_a = tuitMongooseModel === null || tuitMongooseModel === void 0 ? void 0 : tuitMongooseModel._id.toString()) !== null && _a !== void 0 ? _a : '', (_b = tuitMongooseModel === null || tuitMongooseModel === void 0 ? void 0 : tuitMongooseModel.tuit) !== null && _b !== void 0 ? _b : '', new Date((_c = tuitMongooseModel === null || tuitMongooseModel === void 0 ? void 0 : tuitMongooseModel.postedOn) !== null && _c !== void 0 ? _c : (new Date())));
            });
            return tuitModels;
        });
    }
    /**
     * Creates new tuit.
     * @param tuit json body of tuit to be made
     */
    createTuit(tuit) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const tuitMongooseModel = yield tuitModel.create(tuit);
            return new Tuit((_a = tuitMongooseModel === null || tuitMongooseModel === void 0 ? void 0 : tuitMongooseModel._id.toString()) !== null && _a !== void 0 ? _a : '', tuitMongooseModel.tuit, new Date((_b = tuitMongooseModel === null || tuitMongooseModel === void 0 ? void 0 : tuitMongooseModel.postedOn) !== null && _b !== void 0 ? _b : (new Date())));
        });
    }
    /**
     * Deletes specific tuit.
     * @param tuitId tid of tuit to be deleted
     */
    deleteTuit(tuitId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield tuitModel.deleteOne({ _id: tuitId });
        });
    }
    /**
     * Updates specific tuit
     * @param tuitId tid of tuit to be updated
     * @param tuit json with updated tuit information
     */
    updateTuit(tuitId, tuit) {
        return __awaiter(this, void 0, void 0, function* () {
            return tuitModel.updateOne({ _id: tuitId }, { $set: { tuit: tuit.post } });
        });
    }
}
TuitDao.tuitDao = null;
/**
 * Singleton pattern for DAO instantiation.
 */
TuitDao.getInstance = () => {
    if (TuitDao.tuitDao === null) {
        TuitDao.tuitDao = new TuitDao();
    }
    return TuitDao.tuitDao;
};
