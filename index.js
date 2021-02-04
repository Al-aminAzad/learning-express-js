const express = require('express');
const adminRouter = require('./adminRouter');
const publickRouter = require('./publickRouter');
const app = express();

app.use('/admin', adminRouter);
app.use('/', publickRouter);
app.listen(3000, () => {
  console.log('listening port in 3000');
});
