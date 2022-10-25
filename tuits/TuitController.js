/**
 * Tuit controller.
 */
export default class TuitController {
    constructor() {
        /**
         * Returns all tuits
         * @param req req for all tuits
         * @param res json with all tuits
         */
        this.findAllTuits = (req, res) => TuitController.tuitDao
            .findAllTuits()
            .then(tuits => res.json(tuits));
        /**
         * Find specific tuit.
         * @param req tid of desired tuit
         * @param res tuit json
         */
        this.findTuitById = (req, res) => TuitController.tuitDao
            .findTuitById(req.params.tid)
            .then(tuit => res.json(tuit));
        /**
         * Find all tuits by given author.
         * @param req uid of author
         * @param res json of author's tuits
         */
        this.findTuitsByAuthor = (req, res) => TuitController.tuitDao
            .findTuitsByAuthor(req.params.uid)
            .then(tuits => res.json(tuits));
        /**
         * Create new tuit
         * @param req json data of tuit and uid
         * @param res json of new tuit
         */
        this.createTuit = (req, res) => TuitController.tuitDao
            .createTuit(Object.assign(Object.assign({}, req.body), { postedBy: req.params.uid }))
            .then(actualTuit => res.json(actualTuit));
        /**
         * Delete specific tuit.
         * @param req tid of tuit
         * @param res json status of delete
         */
        this.deleteTuit = (req, res) => TuitController.tuitDao
            .deleteTuit(req.params.tid)
            .then(status => res.json(status));
        /**
         * Update specific tuit.
         * @param req tid of tuit to be updated
         * @param res json status of update
         */
        this.updateTuit = (req, res) => TuitController.tuitDao
            .updateTuit(req.params.tid, req.body)
            .then(status => res.json(status));
    }
}
TuitController.tuitController = null;
/**
 * Tuits follow singleton pattern.
 * @param app express
 * @param tuitDao dao for Tuits
 */
TuitController.getInstance = (app, tuitDao) => {
    if (TuitController.tuitController === null) {
        TuitController.tuitController = new TuitController();
    }
    TuitController.tuitDao = tuitDao;
    app.get('/api/tuits', TuitController.tuitController.findAllTuits);
    app.get('/api/tuits/:tid', TuitController.tuitController.findTuitById);
    app.get('/api/users/:uid/tuits', TuitController.tuitController.findTuitsByAuthor);
    app.post('/api/users/:uid/tuits', TuitController.tuitController.createTuit);
    app.delete('/api/tuits/:tid', TuitController.tuitController.deleteTuit);
    return TuitController.tuitController;
};
