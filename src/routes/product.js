const express =require('express');
const router =express.Router();
const productcontroller =require('../app/controllers/Productcontroller')

router.get('/:slug', productcontroller.show);

module.exports =router;