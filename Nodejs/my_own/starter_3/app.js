const express = require('express');
const app = express();
const port = 3000;

const morgan = require('morgan');
const tourRouter = require('./Routers/tourRouter');
const userRouter = require('./Routers/userRouter');

app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  console.log('Helo from middleware 👋👋(❁´◡`❁)');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 4. Routes
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
