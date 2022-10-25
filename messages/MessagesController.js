import * as dao from "./MessagesDao";
/**
 * Creates new message
 * @param req uid, user sending message | uid2, user receiving message
 * @param res json status
 */
const userMessagesUser = (req, res) => dao.userMessagesUser(req.params.message, req.params.uid, req.params.uid2)
    .then(status => res.json(status));
/**
 * Deletes specific message.
 * @param req uid, user sending message | uid2, user receiving message
 * @param res json status
 */
const userDeletesMessage = (req, res) => dao.userDeletesMessage(req.params.uid, req.params.uid2)
    .then(status => res.json(status));
/**
 * Finds all sent messages.
 * @param req uid of sender
 * @param res json of messages
 */
const findSentMessages = (req, res) => dao
    .findSentMessages(req.params.uid)
    .then(messages => res.json(messages));
/**
 * Finds all received messages.
 * @param req uid of message recipient
 * @param res json of messages
 */
const findReceivedMessages = (req, res) => dao
    .findReceivedMessages(req.params.uid)
    .then(messages => res.json(messages));
/**
 * App export with pathways.
 * @param app express
 */
export default (app) => {
    app.post("/api/users/:uid/messages/:uid2", userMessagesUser);
    app.delete("/api/users/:uid/messages/:uid2", userDeletesMessage);
    app.get("/api/users/:uid/messages/", findSentMessages);
    app.get("/api/messages/:uid", findReceivedMessages);
};
