const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/hmi', (req, res, next) => {
    const products = adminData.products;
    // setInterval(function () {
    //     console.log("hello this is in the interval!");
    // }, 1000);
    res.render("hmi", { prods: products, docTitle: "HMI", path: "/", pageTitle: "Shop" });
});

module.exports = router;
