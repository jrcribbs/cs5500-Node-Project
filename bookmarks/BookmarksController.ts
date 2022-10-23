import {Express, Request, Response}
  from "express";
import * as dao from "./BookmarksDao";

/**
 * Finds all tuits user bookmarked.
 * @param req uid of user
 * @param res json of tuits
 */
const findTuitsUserBookmarked =
    (req: Request, res: Response) => dao
    .findTuitsUserBookmarked(req.params.uid)
    .then(tuits => res.json(tuits));

/**
 * Finds all users who bookmarked given tuit.
 * @param req tid of tuit
 * @param res json of users
 */
const findUsersThatBookmarkedTuit =
    (req: Request, res: Response) => dao
    .findUsersThatBookmarkedTuit(req.params.tid)
    .then(users => res.json(users));

/**
 * Creates new bookmark.
 * @param req uid of user, tid of tuit
 * @param res json create status
 */
const userBookmarksTuit = (req: Request, res: Response) =>
    dao.userBookmarksTuit(req.params.uid, req.params.tid)
    .then(status => res.json(status));

/**
 * Deletes existing bookmark.
 * @param req uid of user, tid of tuit
 * @param res json delete status
 */
const userUnbookmarksTuit = (req: Request, res: Response) =>
    dao.userUnbookmarksTuit(req.params.uid, req.params.tid)
    .then(status => res.json(status));

/**
 * App export with pathways.
 * @param app express
 */
export default (app: Express) => {
  app.get("/api/users/:uid/bookmarks",
      findTuitsUserBookmarked)
  app.get("/api/tuits/:tid/bookmarks",
      findUsersThatBookmarkedTuit)
  app.post("/api/users/:uid/bookmarks/:tid",
      userBookmarksTuit)
  app.delete("/api/users/:uid/bookmarks/:tid",
      userUnbookmarksTuit)
};
