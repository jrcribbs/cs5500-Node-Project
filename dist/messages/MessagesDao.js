"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findReceivedMessages = exports.findSentMessages = exports.userDeletesMessage = exports.userMessagesUser = void 0;
const MessagesModel_1 = require("./MessagesModel");
/**
 * Creates new message.
 * @param message message information
 * @param uid sender
 * @param uid2 recipient
 */
const userMessagesUser = (message, uid, uid2) => MessagesModel_1.default
    .create({ message: message, from: uid, to: uid2 });
exports.userMessagesUser = userMessagesUser;
/**
 * Deletes specific message.
 * @param uid sender
 * @param uid2 recipient
 */
const userDeletesMessage = (uid, uid2) => MessagesModel_1.default
    .deleteOne({ from: uid,
    to: uid2 });
exports.userDeletesMessage = userDeletesMessage;
/**
 * Finds all sent messages.
 * @param uid sender
 */
const findSentMessages = (uid) => MessagesModel_1.default
    .find({ from: uid })
    .populate('message', 'string')
    .populate('to', 'user')
    .populate('from', 'user')
    .populate('sentOn', 'date').exec();
exports.findSentMessages = findSentMessages;
/**
 * Finds all received messages.
 * @param uid recipient
 */
const findReceivedMessages = (uid) => MessagesModel_1.default
    .find({ to: uid })
    .populate('message', 'string')
    .populate('to', 'user')
    .populate('from', 'user')
    .populate('sentOn', 'date').exec();
exports.findReceivedMessages = findReceivedMessages;
//# sourceMappingURL=MessagesDao.js.map