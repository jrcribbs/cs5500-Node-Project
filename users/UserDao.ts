import User from "./User";
import UserModel from "./UserModel";
import UserDaoI from "./UserDaoI";

/**
 * DAO for Tuiter users.
 */
export default class UserDao implements UserDaoI {

    /**
     * Finds and returns all users.
     */
    async findAllUsers(): Promise<User[]> {
        const userMongooseModels = await UserModel.find();
        const userModels = userMongooseModels
            .map((userMongooseModel) => {
                return new User(
                    userMongooseModel?._id.toString()??'',
                    userMongooseModel?.username??'',
                    userMongooseModel?.password??'',
                );
            });
        return userModels;
    }

    /**
     * Finds specific user.
     * @param uid id of desired user
     */
    async findUserById(uid: string): Promise<User> {
        const userMongooseModel = await UserModel.findById(uid);
        return new User(
            userMongooseModel?._id.toString()??'',
            userMongooseModel?.username??'',
            userMongooseModel?.password??'',
        );
    }

    /**
     * Creates new user.
     * @param user user data to be inserted into database
     */
    async createUser(user: User): Promise<User> {
        const userMongooseModel = await UserModel.create(user);
        return new User(
            userMongooseModel?._id.toString()??'',
            userMongooseModel?.username??'',
            userMongooseModel?.password??'',
        );
    }

    /**
     * Deletes given user.
     * @param uid id of user to be deleted
     */
    async deleteUser(uid: string):  Promise<any> {
        return await UserModel.deleteOne({_id: uid});
    }

    /**
     * Updates given user.
     * @param uid id of user to be updated
     * @param user information to be updated
     */
    async updateUser(uid: string, user: any): Promise<any> {
        return await UserModel.updateOne({_id: uid}, {$set: {
                username: user.username,
                password: user.password
            }});
    }
}
