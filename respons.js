const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.get('/test', (req, res) => {
  res.send('Redirect from about');
});

app.get('/about', (req, res) => {
  // console.log(res.headersSent);
  // res.render('pages/about', {
  //   name: 'Bangladesh',
  // });
  // console.log(res.headersSent);
  // res.send('About page');
  // res.end();
  // res.json({
  //   name: 'Bangladesh',
  //   language: 'Bangla',
  // });
  // res.status(200);
  // res.end();
  // res.sendStatus(500);
  // res.format({
  //   'text/plain': () => {
  //     res.send('Hi');
  //   },
  //   'text/html': () => {
  //     res.render('pages/about', {
  //       name: 'Bangladesh',
  //     });
  //   },
  //   'application/json': () => {
  //     res.json({
  //       message: 'About',
  //     });
  //   },
  //   default: ()=>{
  //     res.status(403).send('Not acceptable');
  //   }
  // });
  // res.cookie('name','Alamin azad',{

  // });
  // res.end();
  // res.redirect('/test');
  // res.end();
  res.set('platform', 'learn with sumit');
  console.log(res.get('platform'));
  res.end();
});

app.listen(3000, () => {
  console.log('listening in port 3000');
});
