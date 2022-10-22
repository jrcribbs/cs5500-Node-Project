import {Express, Request, Response}
  from "express";
import * as dao from "./BookmarksDao";

const findTuitsUserBookmarked =
    (req: Request, res: Response) => dao
    .findTuitsUserBookmarked(req.params.uid)
    .then(tuits => res.json(tuits));

const findUsersThatBookmarkedTuit =
    (req: Request, res: Response) => dao
    .findUsersThatBookmarkedTuit(req.params.tid)
    .then(users => res.json(users));

const userBookmarksTuit = (req: Request, res: Response) =>
    dao.userBookmarksTuit(req.params.uid, req.params.tid)
    .then(status => res.json(status));

const userUnbookmarksTuit = (req: Request, res: Response) =>
    dao.userUnbookmarksTuit(req.params.uid, req.params.tid)
    .then(status => res.json(status));

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
