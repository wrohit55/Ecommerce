const ErrorHandler = require("../utils/errorhander");


module.exports = (err, req, res, next) => {

    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal server Server Error";


    // wrong MongoDB ID error 
    if (err.name === "CastError") {
        const message = `Resorce not Found. Invalid: ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    // Mongose duplicate key error 
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`
        err = new ErrorHandler(message, 400);
    }
    // wrong JWT error 
    if (err.name === "JsonWebTokenError") {
        const message = `Json Web Token is invalid, Try Again`;
        err = new ErrorHandler(message, 400);
    }
    // JWT Expire error 
    if (err.name === "TokenExpiredError") {
        const message = `Json Web Token is Expaired, Try Again`;
        err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    })


}