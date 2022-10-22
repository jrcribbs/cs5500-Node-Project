import {Express, Request, Response}
  from "express";
import * as dao from "./MessagesDao";

const userMessagesUser = (req: Request, res: Response) =>
    dao.userMessagesUser(req.params.message, req.params.uid, req.params.uid2)
    .then(status => res.json(status));

const userDeletesMessage = (req: Request, res: Response) =>
    dao.userDeletesMessage(req.params.uid, req.params.uid2)
    .then(status => res.json(status));

const findSentMessages =
    (req: Request, res: Response) => dao
    .findSentMessages(req.params.uid)
    .then(messages => res.json(messages));

const findReceivedMessages =
    (req: Request, res: Response) => dao
    .findReceivedMessages(req.params.uid)
    .then(messages => res.json(messages));

export default (app: Express) => {
  app.post("/api/users/:uid/messages/:uid2",
      userMessagesUser)
  app.delete("/api/users/:uid/messages/:uid2",
      userDeletesMessage)
  app.get("/api/users/:uid/messages/",
      findSentMessages)
  app.get("/api/messages/:uid",
      findReceivedMessages)
};
