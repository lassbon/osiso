const express = require('express');
const router = express.Router();
const Delivery = require('../models/delivery');


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Doing the magic for get on immediate deliver'
    });

});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Doing the magic for post on immediate deliver'
    });

});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: 'Single get Immediate delivery for {id}',
        id: id
    });
});

router.patch('/:id', (req, res, next) => {
        const id = req.params.id;
        res.status(200).json({
            message: 'Updated delivery {id}',
            id: id
        });

});

module.exports = router;