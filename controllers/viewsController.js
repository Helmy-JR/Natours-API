const Tour = require("../models/tourModel");
const catchAsync = require("../utils/catchAsync");

exports.getOverview = catchAsync(async (req, res, next) => {
  // 1) Get tour data from API
  const tours = await Tour.find();

  // 2) Build template

  // 3) Render that template using tour data from 1)
  res.status(200).render("overview", {
    title: "All Tours",
    tours,
  });
});