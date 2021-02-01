const express = require('express');
const app = express();
// app.use(express.json());
// app.use(express.raw());
app.use(express.urlencoded());
app.get('/', (req, res) => {
  res.send('This is home page');
});
app.post('/', (req, res) => {
  console.log(req.body);
  res.send('This is home page with post request');
});
app.get('/about', (req, res) => {
  res.send('<h1>this is about page</h1>');
});
app.get('*', (req, res) => {
  res.send('<h1>404: NOT FOUND</h1>');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listeing port in ${PORT}`);
});
// console.log(express);
