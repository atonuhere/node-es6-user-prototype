const express = require('express');
const config = require('../../config/env');
const userCtrl = require('../controllers/UserController');
const jwtVerify = require('../../middleware/JWTVerify');

const router = express.Router();

router.route('/').post(userCtrl.createProj);
router.route('/:projectId').get(userCtrl.getProj)

/** Load project when API with projectId route parameter is hit */
router.param('projectId', userCtrl.loadProj);

module.exports = router;
