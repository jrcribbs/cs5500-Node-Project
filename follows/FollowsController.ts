import {Express, Request, Response}
  from "express";
import * as dao from "./FollowsDao";

const userFollowsUser = (req: Request, res: Response) =>
    dao.userFollowsUser(req.params.uid, req.params.uid2)
    .then(status => res.json(status));

const userUnfollowsUser = (req: Request, res: Response) =>
    dao.userUnfollowsUser(req.params.uid, req.params.uid2)
    .then(status => res.json(status));

const findFollowingUsers =
    (req: Request, res: Response) => dao
    .findFollowingUsers(req.params.uid)
    .then(users => res.json(users));

const findFollowedUsers =
    (req: Request, res: Response) => dao
    .findFollowedUsers(req.params.uid)
    .then(users => res.json(users));

export default (app: Express) => {
  app.post("/api/users/:uid/follows/:uid2",
      userFollowsUser)
  app.delete("/api/users/:uid/follows/:uid2",
      userUnfollowsUser)
  app.get("/api/users/:uid/follows/",
      findFollowingUsers)
  app.get("/api/follows/:uid",
      findFollowedUsers)
};
