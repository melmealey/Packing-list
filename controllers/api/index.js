const router = require('express').Router();
const listRoutes = require('./tripRoutes');

router.use('/list', listRoutes);

module.exports = router;
