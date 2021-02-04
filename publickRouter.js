const express = require('express');
const publickRouter = express.Router();

// const log = (req, res, next) => {
//   console.log('Hey middleware I am loging');
//   next();
// };
// publickRouter.all('*', log);
// publickRouter.param('user', (req, res, next, id) => {
//   req.user = id === '1' ? 'Admin' : 'Anonymous';
//   console.log('I am called once');
//   next();
// });
// publickRouter.get('/:user', (req, res, next) => {
//   console.log('I also match');
//   next();
// });
// publickRouter.param((param, options) => (req, res, next, val) => {
//   if (val === options) {
//     next();
//   } else {
//     res.sendStatus(403);
//   }
// });
// publickRouter.param('user', '12');
// publickRouter.get('/:user', (req, res) => {
//   res.send(`Hello admin`);
// });
publickRouter
  .route('/user')
  .all((req, res, next) => {
    console.log('I am logging something');
    next();
  })
  .get((req, res) => {
    res.send('GET');
  })
  .post((req, res) => {
    res.send('POST');
  })
  .put((req, res) => {
    res.send('PUT');
  });
publickRouter.get('/about', (req, res) => {
  res.send('About page');
});
module.exports = publickRouter;
