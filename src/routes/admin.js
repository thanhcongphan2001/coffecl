const express =require('express');
const router =express.Router();
const logincontroller =require('../app/controllers/Admincontroller')

router.post('/create',logincontroller.create)
router.get('/trash',logincontroller.trash)
router.post('/create', logincontroller.create);
router.get('/:id/edit', logincontroller.edit);
router.put('/:id', logincontroller.update);
router.delete('/:id', logincontroller.delete);
router.delete('/:id/force', logincontroller.forcedestroy);
router.patch('/:id/restore',logincontroller.restore)
router.post('/store',logincontroller.store)
router.post('/', logincontroller.admin);
module.exports =router;