const fs = require('fs');
const Tour = require('./../models/tourmodel');

exports.getAllTours = async (req, res) => {
  const tours = await Tour.find();
  res.status(200).json({
    status: 'Success',
    requesttime: req.requestTime,
    results: tours.length,
    data: {
      tours: tours,
    },
  });
};

exports.getTour = async (req, res) => {
  const tour = await Tour.findById(req.params.id);

  res.status(200).json({
    status: 'Success',
    tour: {
      tour,
    },
  });
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
