const express = require('express');
const config = require('../../config/env');
const userCtrl = require('../controllers/UserController');
const jwtVerify = require('../../middleware/JWTVerify');

const router = express.Router();
/**
 * @swagger
 * definitions:
 *   Project:
 *     properties:
 *       id:
 *         type: integer
 *		name:
 *         type: string
 *       startDate:
 *         type: string
 *       created_at:
 *         type: string
 *       updated_at:
 *         type: string
 */


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
 *         schema:
 *           $ref: '#/definitions/String'
 */
router.route('/').post(userCtrl.createProj);

/**
 * @swagger
 * /api/v1/projects/{projectId}
 *   get:
 *     tags:
 *       - Project
 *     description: Returns projects
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An single object of project
 *         schema:
 *           $ref: '#/definitions/Project'
 */
router.route('/:projectId').get(userCtrl.getProj)

/** Load project when API with projectId route parameter is hit */
router.param('projectId', userCtrl.loadProj);

module.exports = router;
