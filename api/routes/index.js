const express = require('express');
const userRoutes = require('./user');
const projRoutes = require('./proj');
const authRoutes = require('./auth');
const constantV1="/api/v1";
const router = express.Router();

router.get('/api-status', (req, res) =>
  res.json({ status: "ok" }));

router.use('/auth', authRoutes);
router.use(constantV1+'/users', userRoutes);
router.use(constantV1+'/projects', projRoutes);


module.exports = router;

