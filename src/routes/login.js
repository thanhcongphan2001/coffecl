const express =require('express');
const router =express.Router();
const logincontroller =require('../app/controllers/Logincontroller')


router.post('/', logincontroller.show);
router.get('/', logincontroller.index);
module.exports =router;