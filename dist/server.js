"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file Implements an Express Node HTTP server. Declares RESTful Web services
 * enabling CRUD operations on the following resources:
 * <ul>
 *     <li>users</li>
 *     <li>tuits</li>
 *     <li>likes</li>
 * </ul>
 *
 * Connects to a remote MongoDB instance hosted on the Atlas cloud database
 * service
 */
const express = require("express");
const UserController_1 = require("./controllers/UserController");
const TuitController_1 = require("./controllers/TuitController");
const LikeController_1 = require("./controllers/LikeController");
const mongoose = require("mongoose");
// build the connection string
/**
const PROTOCOL = "mongodb+srv";
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const HOST = "cluster0.ebtz510.mongodb.net";
const DB_QUERY = "retryWrites=true&w=majority";
const connectionString = `${PROTOCOL}://${DB_USERNAME}:${DB_PASSWORD}@${HOST}/?${DB_QUERY}`;
// connect to the database
mongoose.connect(connectionString);
 **/
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
};
mongoose.connect('mongodb+srv://seoh:superdupersecretzaxscd@cluster0.ebtz510.mongodb.net/?retryWrites=true&w=majority', options);
const app = express();
app.use(express.json());
app.get('/', (req, res) => res.send('Welcome!'));
app.get('/add/:a/:b', (req, res) => res.send(req.params.a + req.params.b));
// create RESTful Web service API
const userController = UserController_1.default.getInstance(app);
const tuitController = TuitController_1.default.getInstance(app);
const likesController = LikeController_1.default.getInstance(app);
/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on Heroku if available.
 */
const PORT = 4000;
app.listen(process.env.PORT || PORT);
//# sourceMappingURL=server.js.map