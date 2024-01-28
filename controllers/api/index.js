const router = require('express').Router();
const listRoutes = require('./listRoutes');

router.use('/list', listRoutes);

module.exports = router;
