const express = require('express');
// const handle = require('./handle')
const app = express();
const admin = express();
// app.use(express.json());
// app.use(express.raw());
// app.use(express.urlencoded());
// app.use(
//   express.static(`${__dirname}/public/`, {
//     index: 'home.html',
//   })
// );

// const router = express.Router({
//   caseSensitive: true,
// });
// app.use(router);
// router.get('/', (req, res) => {
//   res.send('This is home page');
// });

app.use('/admin',admin);

app.locals.title = 'My locals variable';

// admin.on('mount',(parent)=>{
//   console.log('Admin mounted');
//   console.log(parent); //refers to the parrent app
// })
app.get('/', (req, res) => {
  // console.log(app.locals.title);
  res.send('This is home page');
});

//

// app.post('/',handle);
admin.get('/dashbored/hello', (req, res) => {
  console.log(admin.mountpath);
  res.send('<h1>Welcome to admin dashbored</h1>');
});
// router.get('/about', (req, res) => {
//   res.send('<h1>this is about page</h1>');
// });
app.get('*', (req, res) => {
  res.send('<h1>404: NOT FOUND</h1>');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listeing port in ${PORT}`);
});
// console.log(express);
