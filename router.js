/* jshint esversion: 6, node : true */

const express = require('express');

const router = express.Router();

let toggle = 0;

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Successfully retrieved variable",
        status: 200,
        toggle: toggle
    });
});

router.post('/', (req, res, next) => {

    if(toggle == 0) {
        toggle = 1;
    } else {
        toggle = 0;
    }

    res.status(200).json({
        message: "Successfully toggled variable",
        status: 200,
        newtoggle: toggle
    });
});

module.exports = router;