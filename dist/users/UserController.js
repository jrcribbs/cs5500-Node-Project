"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Controller for Tuiter Users.
 */
class UserController {
    constructor(app, userDao) {
        /**
         * Returns all users.
         * @param req / to return all users
         * @param res json of all users
         */
        this.findAllUsers = (req, res) => // res.send('find all users')
         this.userDao.findAllUsers()
            .then(users => res.json(users));
        /**
         * Returns user for given id.
         * @param req UID for desired user
         * @param res json of requested users
         */
        this.findUserById = (req, res) => this.userDao.findUserById(req.params.userid)
            .then(user => res.json(user));
        /**
         * Creates new user.
         * @param req json with user information
         * @param res json of created user
         */
        this.createUser = (req, res) => this.userDao.createUser(req.body)
            .then(user => res.json(user));
        /**
         * Deletes given user.
         * @param req UID of user to delete
         * @param res json status of delete
         */
        this.deleteUser = (req, res) => this.userDao.deleteUser(req.params.userid)
            .then(status => res.json(status));
        /**
         * Updates given user.
         * @param req UID of user to update
         * @param res json status of update
         */
        this.updateUser = (req, res) => this.userDao.updateUser(req.params.userid, req.body)
            .then(status => res.json(status));
        this.app = app;
        this.userDao = userDao;
        this.app.get('/api/users', this.findAllUsers);
        this.app.get('/api/users/:userid', this.findUserById);
        this.app.post('/api/users', this.createUser);
        this.app.delete('/api/users/:userid', this.deleteUser);
        this.app.put('/api/users/:userid', this.updateUser);
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map