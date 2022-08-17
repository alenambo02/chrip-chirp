//requiring express router and api routes
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  return res.send('Oh no, wrong route!');
});

module.exports = router;
