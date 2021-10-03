// List of all the route files
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes')

// List of all the routes used for these files
router.use('/users', userRoutes);
router.use('/blog', blogRoutes);

module.exports = router;