const express =require('express');
const router =express.Router();
const sitecontroller =require('../app/controllers/Sitecontroller')

router.post('/seach', sitecontroller.seach);

router.get('/', sitecontroller.index);

module.exports =router;