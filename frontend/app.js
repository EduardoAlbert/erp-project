var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const session = require("express-session");

require("dotenv").config();

var banksRouter = require("./routes/banks");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //Necessário para obter os valores das variáveis via POST
app.use(cookieParser());

app.use(
    session({
        secret: "palavrasecreta",
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: null },
    })
);

app.use(express.static(path.join(__dirname, 'views')));

app.use("/banks", banksRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
