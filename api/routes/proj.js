const express = require('express');
const config = require('../../config/env');
const userCtrl = require('../controllers/UserController');

const router = express.Router();

/**
 * @swagger
 * /api/v1/projects:
 *   post:
 *     tags:
 *       - Project
 *     description: Create project
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: projectId
 */
router.route('/').post(userCtrl.createProj);

/**
 * @swagger
 * /api/v1/projects/{projectId}:
 *   get:
 *     tags:
 *       - Project
 *     description: Returns projects
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An single object of project
 */
router.route('/:projectId').get(userCtrl.getProj)

/** Load project when API with projectId route parameter is hit */
router.param('projectId', userCtrl.loadProj);

module.exports = router;
