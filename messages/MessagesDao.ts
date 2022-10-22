import messagesModel from "./MessagesModel";

export const userMessagesUser =
    (uid: string, uid2: string) => messagesModel
    .create({userFollowed: uid, userFollowing: uid2});

export const userDeletesMessage =
    (uid: string, uid2: string) => messagesModel
    .deleteOne({to: uid,
      from: uid2});

/**
 * finds users that provided uid is following.
 * @param uid uid of following user
 */
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
