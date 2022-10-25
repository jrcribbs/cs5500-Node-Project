var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import User from "./User";
import UserModel from "./UserModel";
/**
 * DAO for Tuiter users.
 */
export default class UserDao {
    /**
     * Finds and returns all users.
     */
    findAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const userMongooseModels = yield UserModel.find();
            const userModels = userMongooseModels
                .map((userMongooseModel) => {
                var _a, _b, _c;
                return new User((_a = userMongooseModel === null || userMongooseModel === void 0 ? void 0 : userMongooseModel._id.toString()) !== null && _a !== void 0 ? _a : '', (_b = userMongooseModel === null || userMongooseModel === void 0 ? void 0 : userMongooseModel.username) !== null && _b !== void 0 ? _b : '', (_c = userMongooseModel === null || userMongooseModel === void 0 ? void 0 : userMongooseModel.password) !== null && _c !== void 0 ? _c : '');
            });
            return userModels;
        });
    }
    /**
     * Finds specific user.
     * @param uid id of desired user
     */
    findUserById(uid) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const userMongooseModel = yield UserModel.findById(uid);
            return new User((_a = userMongooseModel === null || userMongooseModel === void 0 ? void 0 : userMongooseModel._id.toString()) !== null && _a !== void 0 ? _a : '', (_b = userMongooseModel === null || userMongooseModel === void 0 ? void 0 : userMongooseModel.username) !== null && _b !== void 0 ? _b : '', (_c = userMongooseModel === null || userMongooseModel === void 0 ? void 0 : userMongooseModel.password) !== null && _c !== void 0 ? _c : '');
        });
    }
    /**
     * Creates new user.
     * @param user user data to be inserted into database
     */
    createUser(user) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const userMongooseModel = yield UserModel.create(user);
            return new User((_a = userMongooseModel === null || userMongooseModel === void 0 ? void 0 : userMongooseModel._id.toString()) !== null && _a !== void 0 ? _a : '', (_b = userMongooseModel === null || userMongooseModel === void 0 ? void 0 : userMongooseModel.username) !== null && _b !== void 0 ? _b : '', (_c = userMongooseModel === null || userMongooseModel === void 0 ? void 0 : userMongooseModel.password) !== null && _c !== void 0 ? _c : '');
        });
    }
    /**
     * Deletes given user.
     * @param uid id of user to be deleted
     */
    deleteUser(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UserModel.deleteOne({ _id: uid });
        });
    }
    /**
     * Updates given user.
     * @param uid id of user to be updated
     * @param user information to be updated
     */
    updateUser(uid, user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UserModel.updateOne({ _id: uid }, { $set: {
                    username: user.username,
                    password: user.password
                } });
        });
    }
}
