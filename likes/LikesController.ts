import {Express, Request, Response}
    from "express";
import * as dao from "./LikesDao";

/**
 * Find tuits that specific user liked.
 * @param req uid, user who liked tuits
 * @param res json of liked tuits
 */
const findTuitsUserLiked =
    (req: Request, res: Response) => dao
        .findTuitsUserLiked(req.params.uid)
        .then(likes => res.json(likes));

/**
 * Find users that liked specific tuit
 * @param req tid, tuit that users like
 * @param res json of users
 */
const findUsersThatLikedTuit =
    (req: Request, res: Response) => dao
        .findUsersThatLikedTuit(req.params.tid)
        .then(likes => res.json(likes));

/**
 * Counts how many likes a tuit has.
 * @param req tid, tuit with likes
 * @param res count of likes
 */
const findTuitLikesCount =
    (req: Request, res: Response) =>
        dao.findTuitLikesCount(req.params.tid)
            .then(likes => res.json({likes}));

/**
 * Create new likes relationship between user and tuit
 * @param req uid, tid, user who likes tuit
 * @param res json status
 */
const userLikesTuit = (req: Request, res: Response) =>
    dao.userLikesTuit(req.params.uid, req.params.tid)
        .then(status => res.json(status));

/**
 * Deletes likes relationship between user and tuit
 * @param req uid, tid, user who liked tuit
 * @param res json delete status
 */
const userUnlikesTuit = (req: Request, res: Response) =>
    dao.userUnlikesTuit(req.params.uid, req.params.tid)
        .then(status => res.json(status));

/**
 * App export with pathways.
 * @param app express
 */
export default (app: Express) => {
    app.get("/api/users/:uid/likes",
        findTuitsUserLiked)
    app.get("/api/tuits/:tid/likes",
        findUsersThatLikedTuit)
    app.get("/api/tuits/:tid/likes/count",
        findTuitLikesCount)
    app.post("/api/users/:uid/likes/:tid",
        userLikesTuit)
    app.delete("/api/users/:uid/likes/:tid",
        userUnlikesTuit)
};
