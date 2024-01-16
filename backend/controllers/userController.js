
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModule");
const ErrorHander = require("../utils/errorhander");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail")

// Register a user

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: "this is a sample id",
            url: "profilepicUrl"
        }
    });
    sendToken(user, 201, res);
});

// login user 
exports.loginUser = catchAsyncErrors(async (req, res, next) => {

    const { email, password } = req.body;

    // checking if user has given password and email both 

    if (!email || !password) {
        return next(new ErrorHander("Please Enter Email & password", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHander("Invalid email or password", 401));

    }

    const isPasswordMatched = user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHander("invalid email or password", 401));

    }

    sendToken(user, 200, res);

    // const token = user.getJWTToken();

    // res.status(200).json({
    //     sucess: true,
    //     token,
    // });

});

// Logout User 
exports.logout = catchAsyncErrors(async (req, res, next) => {

    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    })

    res.status(200).json({
        sucess: true,
        message: "Logged Out",
    });
});

// Forgot Password 
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return next(new ErrorHander("User not found", 404));
    }

    // Get ResetPassword Token 
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    // const resetPasswordUrl = `http://localhost/api/v1/password/reset/${resetToken}`
    const resetPasswordUrl = `${req.protocol}://${req.get(
        "host"
    )}/api/v1/password/reset/${resetToken}`;

    const message = `Your Password reset token is :- \n\n ${resetPasswordUrl}\n\n If you have not requested this email than, please ignore it`;
    try {

        await sendEmail({
            email: user.email,
            subject: `Ecommerce Password Recovery`,
            message,
        });
        res.status(200).json({
            sucess: true,
            message: `Email sent to ${user.email} successfully`,
        });

    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPAsswordExpire = undefined;

        await user.save({ validateBeforeSave: false });
        return next(new ErrorHander(error.message, 500))
    }
});

// reset password
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {

    // creating token hash
    const resetPasswordToken = crypto
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");

    const user = await USer.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    });
    if (!user) {
        return next(new ErrorHander("Reset Password Tokern is envalid or has been expaired", 404));
    }

    if (req.body.password !== req.body.password) {
        return next(new ErrorHander("PAssword Doesnot Match", 404));

    }

    user.password = req.body.paswword;
    user.resetPasswordToken = undefined;
    user.resetPAsswordExpire = undefined;

    await user.save();
    sendToken(user, 200, res)
});

// Get user Details 
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        sucess: true,
        user,
    })
})
// Update user Password 
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id).select("+password");

    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);
    if (!isPasswordMatched) {
        return next(new ErrorHander("old Password is Incorrect", 400));
    }
    if (req.body.newPassword !== req.body.conformPassword) {
        return next(new ErrorHander("Password Doesnot Match", 400));
    }

    user.password = req.body.newPassword;
    await user.save();

    sendToken(user, 200, res);

})