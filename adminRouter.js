const express = require('express');
const adminRouter = express.Router();

adminRouter.get('/', (req, res) => {
  res.send('Admin dashboard');
});
adminRouter.get('/login', (req, res) => {
  res.send('login page');
});

module.exports = adminRouter;
