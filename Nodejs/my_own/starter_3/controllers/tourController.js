const fs = require('fs');
const Tour = require('./../models/tourmodel');

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'Success',
    requesttime: req.requestTime,
    // results: tours.length,
    // data: {
    //   tours: tours,
    // },
  });
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1;

  // if (id > tours.length) {
  //   return res.status(404).json({
  //     status: 'failed',
  //     message: 'Invalid id',
  //   });
  // }

  // const tour = tours.find((el) => el.id === id);
  // console.log(req.params);
  // res.status(200).json({
  //   status: 'Success',
  //   tour: {
  //     tour,
  //   },
};

exports.createTour = async (req, res) => {
  const newTour = await Tour.create(req.body);

  res.status(201).json({
    status: 'success',
    tour: newTour,
  });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    staut: 'success',
    data: {
      tour: '<Updated tour...>',
    },
  });
};

exports.deleteTour = (req, res) => {
  // if (req.params.id * 1 > tours.length) {
  //   return res
  //     .status(404)
  //     .json({ status: 'Not Found', message: 'Tour not found' });
  // }
};
