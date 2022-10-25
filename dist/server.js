"use strict";
/**
 * @file Implements an Express Node HTTP server.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const LikesController_1 = require("./likes/LikesController");
const TuitDao_1 = require("./tuits/TuitDao");
const TuitController_1 = require("./tuits/TuitController");
const UserDao_1 = require("./users/UserDao");
const UserController_1 = require("./users/UserController");
const express = require("express");
const mongoose = require("mongoose");
const BookmarksController_1 = require("./bookmarks/BookmarksController");
const FollowsController_1 = require("./follows/FollowsController");
const MessagesController_1 = require("./messages/MessagesController");
//const cors = require('cors')
const app = express();
// app.use(cors());
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
};
/**
 * Connecting to atlas database
 */
mongoose.connect('mongodb+srv://seoh:superdupersecretzaxscd@cluster0.ebtz510.mongodb.net/?retryWrites=true&w=majority', options);
const dbCallback = (movies) => {
    console.log('invoked when db returns data');
    console.log(movies);
};
function sayHello(req, res) {
    res.send('Hi from FSD 1!!!');
}
const sayHello2 = (req, res) => res.send('Hi from FSD 2!!!');
app.get('/', sayHello);
app.get('/hello', sayHello2);
/**
 * Getting singleton instances and passing app to controllers.
 */
const userDao = new UserDao_1.default();
const userController = new UserController_1.default(app, userDao);
const tuitDao = TuitDao_1.default.getInstance();
const tuitController = TuitController_1.default.getInstance(app, tuitDao);
(0, LikesController_1.default)(app);
(0, BookmarksController_1.default)(app);
(0, FollowsController_1.default)(app);
(0, MessagesController_1.default)(app);
/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on Heroku if available.
 */
const PORT = 4000;
app.listen(process.env.PORT || PORT);
//# sourceMappingURL=server.js.map