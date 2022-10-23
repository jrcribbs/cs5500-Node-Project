import messagesModel from "./MessagesModel";

/**
 * Creates new message.
 * @param message message information
 * @param uid sender
 * @param uid2 recipient
 */
export const userMessagesUser =
    (message: string, uid: string, uid2: string) => messagesModel
    .create({message: message, from: uid, to: uid2});

/**
 * Deletes specific message.
 * @param uid sender
 * @param uid2 recipient
 */
export const userDeletesMessage =
    (uid: string, uid2: string) => messagesModel
    .deleteOne({from: uid,
      to: uid2});

/**
 * Finds all sent messages.
 * @param uid sender
 */
export const findSentMessages =
    (uid: string) => messagesModel
    .find({from: uid})
    .populate('message', 'string')
    .populate('to', 'user')
    .populate('from', 'user')
    .populate('sentOn', 'date').exec();

/**
 * Finds all received messages.
 * @param uid recipient
 */
export const findReceivedMessages =
    (uid: string) => messagesModel
    .find({to: uid})
    .populate('message', 'string')
    .populate('to', 'user')
    .populate('from', 'user')
    .populate('sentOn', 'date').exec();
