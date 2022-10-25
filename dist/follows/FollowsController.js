"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dao = require("./FollowsDao");
/**
 * Creates new follows relationship between two users.
 * @param req uid, user followed | uid2, user following
 * @param res json status
 */
const userFollowsUser = (req, res) => dao.userFollowsUser(req.params.uid, req.params.uid2)
    .then(status => res.json(status));
/**
 * Deletes follows relationship between to users.
 * @param req uid, user followed | uid2, user following
 * @param res json delete status
 */
const userUnfollowsUser = (req, res) => dao.userUnfollowsUser(req.params.uid, req.params.uid2)
    .then(status => res.json(status));
/**
 * Finds users that provided uid is following.
 * @param req uid of following user
 * @param res json of users
 */
const findFollowingUsers = (req, res) => dao
    .findFollowingUsers(req.params.uid)
    .then(users => res.json(users));
/**
 * Finds users that are following provided uid.
 * @param req uid of following user
 * @param res json user
 */
const findFollowedUsers = (req, res) => dao
    .findFollowedUsers(req.params.uid)
    .then(users => res.json(users));
/**
 * App export with pathways.
 * @param app express
 */
exports.default = (app) => {
    app.post("/api/users/:uid/follows/:uid2", userFollowsUser);
    app.delete("/api/users/:uid/follows/:uid2", userUnfollowsUser);
    app.get("/api/users/:uid/follows/", findFollowingUsers);
    app.get("/api/follows/:uid", findFollowedUsers);
};
//# sourceMappingURL=FollowsController.js.map