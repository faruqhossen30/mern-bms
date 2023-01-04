const express = require("express");
const cors = require("cors");
const app = express();
var morgan = require('morgan')
const PORT = process.env.PORT || 5000;
const session = require("express-session");
var MongoDBStore = require('connect-mongodb-session')(session);

require("dotenv").config();
require("./db/connectDB");

var store = new MongoDBStore({
    uri: process.env.DATABASE,
    collection: 'mySessions'
});
const corsOption = {
    origin: ['http://localhost:3000'],
};
const middleware = [
    express.json(),
    express.urlencoded({ extended: true }),
    // cors(corsOption),
    session({
        secret: process.env.SESSION_SECRET || 'ON_TEST',
        resave: false,
        saveUninitialized: true,
        store:store,
        cookie: { secure: true }
    })
];
app.use(express.static(__dirname + '/public'));
app.use(cors({origin: 'http://localhost:3000'}));
app.use(middleware);
app.use(morgan('combined'))

// import routes
const apiRoutes = require("./routes/api");
const authRoutes = require("./routes/auth");
const webRoutes = require("./routes/web");
// defining routes
app.use("/api/", webRoutes);
app.use("/api/", authRoutes);
app.use("/api/", apiRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
