const handle = (req, res) => {
  console.log(req.app.locals);
  res.send('This is home page with post request');
};
module.exports= handle;