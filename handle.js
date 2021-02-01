// const handle = (req, res) => {
//   console.log(req.app.locals);
//   res.send('This is home page with post request');
// };
const handle = (req, res) => {
  // console.log(req.originalUrl);
  // console.log(req.url);
  // console.log(req.path);
  // console.log(req.hostname);
  // console.log(req.method);
  // console.log(req.protocol);
  // console.log(req.params);
  // console.log(req.query);
  // console.log(req.cookies);
  // console.log(req.app.get('view engine'));
  // if(req.accepts('html')){
  //   res.render();
  // }else{
  //   res.send('Hello world');
  // }
  // console.log(req.accepts('json'));
  console.log(req.get('accept'));
  res.send('Hello world');
};
module.exports = handle;
