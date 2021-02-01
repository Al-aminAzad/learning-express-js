const express = require('express');
const app = express();
// app.enable('case sensitive routing');

// app.param('id', (req, res, next, id) => {
//   const user = {
//     userId: id,
//     name: 'Bangladesh',
//   };
//   req.userDeatils = user;
//   next();
// });
// app.get('/user/:id', (req, res) => {
//   console.log(req.userDeatils);
//   res.send('Wellcome to application home');
// });
app.set('view engine', 'ejs');

app
  .route('/about/mission')
  .get((req, res) => {
    res.render('pages/about');
  })
  .post((req, res) => {
    res.send('Wellcome to home post');
  })
  .put((req, res) => {
    res.send('Wellcome to home put');
  });
app.listen(3000, () => {
  console.log('listening on port 3000');
});
