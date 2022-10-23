/**
 * @file Implements an Express Node HTTP server.
 */

import LikesController from "./likes/LikesController";
import TuitDao from "./tuits/TuitDao";
import TuitController from "./tuits/TuitController";
import UserDao from "./users/UserDao";
import UserController from "./users/UserController";
import express, {Request, Response} from 'express';
import * as mongoose from "mongoose";
import BookmarksController from "./bookmarks/BookmarksController";
import FollowsController from "./follows/FollowsController";
import MessagesController from "./messages/MessagesController";

const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

/**
 * Options for server.
 */
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
}

/**
 * Connecting to atlas database
 */
mongoose.connect('mongodb+srv://seoh:superdupersecretzaxscd@cluster0.ebtz510.mongodb.net/?retryWrites=true&w=majority', options);


const dbCallback = (movies: any) => {
    console.log('invoked when db returns data')
    console.log(movies);
}


function sayHello (req: Request, res: Response) {
    res.send('Hi from FSD 1!!!');
}

const sayHello2 = (req: Request, res: Response) =>
    res.send('Hi from FSD 2!!!');


app.get('/', sayHello);

app.get('/hello', sayHello2);

/**
 * Getting singleton instances and passing app to controllers.
 */
const userDao = new UserDao();
const userController = new UserController(app, userDao);
const tuitDao = TuitDao.getInstance();
const tuitController = TuitController.getInstance(app, tuitDao);
LikesController(app);
BookmarksController(app);
FollowsController(app);
MessagesController(app);

/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on Heroku if available.
 */
const PORT = 4000;
app.listen(process.env.PORT || PORT);
