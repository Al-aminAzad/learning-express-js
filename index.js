const express = require('express');
const cookieParse = require('cookie-parser');
const handle = require('./handle')
const app = express();
app.use(express.json());
app.use(cookieParse());
const adminRoute = express.Router();
adminRoute.get('/dashboard', (req, res) => {
  // console.log(req.originalUrl);
  // console.log(req.url);
  // console.log(req.path);
  // console.log(req.hostname);
  console.log(req.ip);
  res.send('We are in admin dashboard');
});
app.use('/admin', adminRoute);
app.get('/user/:id', handle);
app.post('/user', (req, res) => {
  console.log(req.route);
  res.send('Hello world post');
});
app.listen(3000, () => {
  console.log('listening port on 3000');
});
