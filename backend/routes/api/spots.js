
const express = require('express');

const { Sequelize } = require('sequelize')

const { Spot, Review, SpotImage } = require('../../db/models');
const { setTokenCookie } = require('../../utils/auth');

const router = express.Router();





router.get('/', async (req, res, next) => {

    const spotsWithPreview = await Spot.scope(['spotWithPreview']).findAll({})
    return res.json({Spots: spotsWithPreview})
})


router.post('/', async (req, res, next) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body

    const createSpot = await Spot.create({
        address: address,
        city: city,
        state: state,
        country: country,
        lat: lat,
        lng: lng,
        name: name,
        description: description,
        price: price
    })
    
    

    res.json({newSpot: createSpot})
})


module.exports = router