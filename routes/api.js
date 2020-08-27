const express = require('express');
const router = express.Router();
const piratesCtrl = require('../controllers/api/pirates');

/* GET /api/pirates */
router.get('/pirates', piratesCtrl.index);
router.get('/pirates/:id', piratesCtrl.show);
router.put('/pirates/:id', piratesCtrl.update);
router.post('/pirates', piratesCtrl.create);
router.delete('/pirates/:id', piratesCtrl.delete);

module.exports = router;