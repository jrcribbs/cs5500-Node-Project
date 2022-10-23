import {Request, Response, Express} from "express";
import UserDao from "./UserDao";
import UserControllerI from "./UserControllerI";

/**
 * Controller for Tuiter Users.
 */
export default class UserController implements UserControllerI {
    app: Express;
    userDao: UserDao;
    constructor(app: Express, userDao: UserDao) {
        this.app = app;
        this.userDao = userDao;
        this.app.get('/api/users', this.findAllUsers);
        this.app.get('/api/users/:userid', this.findUserById)
        this.app.post('/api/users', this.createUser);
        this.app.delete('/api/users/:userid', this.deleteUser);
        this.app.put('/api/users/:userid', this.updateUser);
    }

  /**
   * Returns all users.
   * @param req / to return all users
   * @param res json of all users
   */
    findAllUsers = (req: Request, res: Response) => // res.send('find all users')
        this.userDao.findAllUsers()
            .then(users => res.json(users));

  /**
   * Returns user for given id.
   * @param req UID for desired user
   * @param res json of requested users
   */
    findUserById = (req: Request, res: Response) =>
        this.userDao.findUserById(req.params.userid)
            .then(user => res.json(user));

  /**
   * Creates new user.
   * @param req json with user information
   * @param res json of created user
   */
    createUser = (req: Request, res: Response) =>
        this.userDao.createUser(req.body)
            .then(user => res.json(user));

  /**
   * Deletes given user.
   * @param req UID of user to delete
   * @param res json status of delete
   */
    deleteUser = (req: Request, res: Response) =>
        this.userDao.deleteUser(req.params.userid)
            .then(status => res.json(status));

  /**
   * Updates given user.
   * @param req UID of user to update
   * @param res json status of update
   */
    updateUser = (req: Request, res: Response) =>
        this.userDao.updateUser(req.params.userid, req.body)
            .then(status => res.json(status));
}
