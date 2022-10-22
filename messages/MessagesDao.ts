import messagesModel from "./MessagesModel";

export const userMessagesUser =
    (message: string, uid: string, uid2: string) => messagesModel
    .create({message: message, from: uid, to: uid2});

export const userDeletesMessage =
    (uid: string, uid2: string) => messagesModel
    .deleteOne({from: uid,
      to: uid2});

export const findSentMessages =
    (uid: string) => messagesModel
    .find({from: uid})
    .populate('message', 'string')
    .populate('to', 'user')
    .populate('from', 'user')
    .populate('sentOn', 'date').exec();

export const findReceivedMessages =
    (uid: string) => messagesModel
    .find({to: uid})
    .populate('message', 'string')
    .populate('to', 'user')
    .populate('from', 'user')
    .populate('sentOn', 'date').exec();
