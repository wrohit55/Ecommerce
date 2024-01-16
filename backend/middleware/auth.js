const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModule");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {

    const { token } = req.cookies;
    if (!token) {
        return next(new ErrorHander("please Login to acess to access this resorce", 401))
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decodedData.id);

    next();
});


exports.authorizeRoles = (...roles) => {

    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(new ErrorHander(
                `Role:${req.user.role} is not allowed to acess this resource `, 403
            )
            );
        }

        next();

    }
}



