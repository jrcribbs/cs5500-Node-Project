import {Express, Request, Response} from "express";
import TuitDaoI from "./TuitDaoI";

/**
 * Tuit controller.
 */
export default class TuitController {
    private static tuitController: TuitController | null = null;
    private static tuitDao: TuitDaoI;
  /**
   * Tuits follow singleton pattern.
   * @param app express
   * @param tuitDao dao for Tuits
   */
    public static getInstance = (app: Express, tuitDao: TuitDaoI): TuitController => {
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
    }
    private constructor() {}

  /**
   * Returns all tuits
   * @param req req for all tuits
   * @param res json with all tuits
   */
    private findAllTuits = (req: Request, res: Response) =>
        TuitController.tuitDao
            .findAllTuits()
            .then(tuits => res.json(tuits));
  /**
   * Find specific tuit.
   * @param req tid of desired tuit
   * @param res tuit json
   */
    private findTuitById = (req: Request, res: Response) =>
        TuitController.tuitDao
            .findTuitById(req.params.tid)
            .then(tuit => res.json(tuit));
  /**
   * Find all tuits by given author.
   * @param req uid of author
   * @param res json of author's tuits
   */
    private findTuitsByAuthor =
        (req: Request, res: Response) =>
            TuitController.tuitDao
                .findTuitsByAuthor(req.params.uid)
                .then(tuits => res.json(tuits));
  /**
   * Create new tuit
   * @param req json data of tuit and uid
   * @param res json of new tuit
   */
    private createTuit = (req: Request, res: Response) =>
        TuitController.tuitDao
            .createTuit({...req.body, postedBy: req.params.uid})
            .then(actualTuit => res.json(actualTuit));

  /**
   * Delete specific tuit.
   * @param req tid of tuit
   * @param res json status of delete
   */
    private deleteTuit = (req: Request, res: Response) =>
        TuitController.tuitDao
            .deleteTuit(req.params.tid)
            .then(status => res.json(status));

  /**
   * Update specific tuit.
   * @param req tid of tuit to be updated
   * @param res json status of update
   */
    private updateTuit = (req: Request, res: Response) =>
        TuitController.tuitDao
            .updateTuit(req.params.tid, req.body)
            .then(status => res.json(status));
}
