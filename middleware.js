const express = require('express');
const app = express();
const adminRouter = express.Router();
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.json());

//middleware function
const loggerWrapper = (options) => {
  return function (req, res, next) {
    if (options.log) {
      console.log(
        `${new Date(Date.now()).toLocaleString()}-${req.method}-${req.originalUrl}-${req.protocol}-${req.ip}`
      );
      next();
    } else {
      throw new Error('Failed to log');
    }
  };
};
// const logger = (req, res, next) => {
//   console.log(`${new Date(Date.now()).toLocaleString()}-${req.method}-${req.originalUrl}-${req.protocol}-${req.ip}`);
//   // next();
//   // res.end();
//   throw new Error('This is an error');
// };
adminRouter.use(loggerWrapper({ log: true }));

adminRouter.get('/dashboard', (req, res) => {
  res.send('Welcome to dasshboard');
});

app.use('/admin', adminRouter);


app.get('/about', (req, res) => {
  res.send('About page');
});


const errorMiddleware = (err, req, res, next) => {
  console.log(err.message);
  res.status(500).send('There was an server side error');
};

adminRouter.use(errorMiddleware);

app.listen(3000, () => {
  console.log('Listening port on 3000');
});
