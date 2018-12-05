const express = require('express');
const config = require('../../config/env');
const userCtrl = require('../controllers/UserController');
const jwtVerify = require('../../middleware/JWTVerify');

const router = express.Router();

router.route('/')
  .get(userCtrl.list)
  .post(jwtVerify,userCtrl.create);

router.route('/:userId')
  .get(jwtVerify,userCtrl.get)
  .put(jwtVerify,userCtrl.update)
  .delete(jwtVerify,userCtrl.remove);

/** Load user when API with userId route parameter is hit */
router.param('userId', userCtrl.load);

module.exports = router;
