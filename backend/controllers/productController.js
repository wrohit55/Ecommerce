const { json } = require("express");
const Product = require("../models/productModle");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");



// 

// Create product -- Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {

    req.body.user = req.user.id

    const product = await Product.create(req.body);

    res.status(201).json({
        sucess: true,
        product
    })
});

// Get all product 
exports.getAllProducts = catchAsyncErrors(async (req, res) => {

    const resultperPage = 5;
    const productCount = await Product.countDocuments();

    const apiFeature = new ApiFeatures(Product.find(), req.query)
        .search()
        .filter()
        .pagination(resultperPage);
    const products = await apiFeature.query;


    res.status(200).json({
        sucess: true,
        products,
        productCount
    });
});

// Get Product Details 
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHander("product not Foundd", 404));
    }
    res.status(200).json({
        sucess: true,
        product,
    });
});

// Update Product  --- Admin 

exports.updateProducts = catchAsyncErrors(async (req, res, next) => {

    let product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHander("product not Foundd", 404));
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });
    res.status(200).json({
        sucess: true,
        product
    });
});

// Delete Product 
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHander("product not Foundd", 404));

    }
    await product.remove();

    res.status(200).json({
        sucess: true,
        message: "Product Deleted Sucessfully"
    })
});
