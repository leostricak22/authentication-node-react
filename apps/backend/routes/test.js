const express = require('express');

const { checkAuth } = require('../util/auth');

const router = express.Router();


router.get('/unprotected-route', async (req, res) => {
  console.log(req.token);

  res.json({ message: 'Fetch successful.' });
});

router.use(checkAuth);
router.get('/protected-route', async (req, res) => {
  console.log(req.token);

  res.json({ message: 'Fetch successful.' });
});

module.exports = router;
