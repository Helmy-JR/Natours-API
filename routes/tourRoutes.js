const express = require('express');
const tourController = require('./../controllers/tourController');
const authController = require('./../controllers/authController');
const reviewRouter = require('./../routes/reviewRoutes');

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Tours
 *   description: Tours management endpoints
 */

/**
 * @swagger
 * /api/v1/tours:
 *   get:
 *     summary: Retrieve all tours
 *     description: Fetch a list of all tours with detailed information.
 *     tags:
 *       - Tours
 *     parameters:
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *         description: Sort the tours by a specific field
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Limit the number of returned tours
 *       - in: query
 *         name: fields
 *         schema:
 *           type: string
 *         description: Select specific fields to return (comma-separated)
 *       - in: query
 *         name: difficulty
 *         schema:
 *           type: integer
 *         description: Filter tours by difficulty level
 *       - in: query
 *         name: duration [gte] or [lte]
 *         schema:
 *           type: string
 *         description: Filter tours by minimum or maximum duration
 *     responses:
 *       200:
 *         description: Successfully retrieved tours
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 results:
 *                   type: integer
 *                   example: 1
 *                 data:
 *                   type: object
 *                   properties:
 *                     data:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           startLocation:
 *                             type: object
 *                             properties:
 *                               type:
 *                                 type: string
 *                                 example: Point
 *                               coordinates:
 *                                 type: array
 *                                 items:
 *                                   type: number
 *                                 example: [-80.185942, 25.774772]
 *                               address:
 *                                 type: string
 *                                 example: 301 Biscayne Blvd, Miami, FL 33132, USA
 *                               description:
 *                                 type: string
 *                                 example: Miami, USA
 *                           _id:
 *                             type: string
 *                             example: 5c88fa8cf4afda39709c2955
 *                           name:
 *                             type: string
 *                             example: The Sea Explorer
 *                           duration:
 *                             type: integer
 *                             example: 7
 *                           maxGroupSize:
 *                             type: integer
 *                             example: 15
 *                           difficulty:
 *                             type: string
 *                             example: medium
 *                           ratingsAverage:
 *                             type: number
 *                             format: float
 *                             example: 4.8
 *                           ratingsQuantity:
 *                             type: integer
 *                             example: 6
 *                           price:
 *                             type: number
 *                             example: 497
 *                           summary:
 *                             type: string
 *                             example: "Exploring the US east coast by foot and by boat"
 *                           imageCover:
 *                             type: string
 *                             example: tour-2-cover.jpg
 *                           startDates:
 *                             type: array
 *                             items:
 *                               type: string
 *                               format: date-time
 *                             example:
 *                               - "2021-06-19T09:00:00.000Z"
 *                               - "2021-07-20T09:00:00.000Z"
 *                           guides:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 _id:
 *                                   type: string
 *                                   example: 5c8a22c62f8fb814b56fa18b
 *                                 name:
 *                                   type: string
 *                                   example: Miyah Myles
 *                                 email:
 *                                   type: string
 *                                   example: miyah@example.com
 *                                 photo:
 *                                   type: string
 *                                   example: user-12.jpg
 *                                 role:
 *                                   type: string
 *                                   example: lead-guide
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid request"
 */

/**
 * @swagger
 * /api/v1/tours/{id}:
 *   get:
 *     summary: Get a single tour by ID
 *     description: Retrieve detailed information of a tour using its ID.
 *     tags:
 *       - Tours
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique ID of the tour
 *     responses:
 *       200:
 *         description: Successfully retrieved the tour data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                   properties:
 *                     data:
 *                       type: object
 *                       properties:
 *                         startLocation:
 *                           type: object
 *                           properties:
 *                             type:
 *                               type: string
 *                               example: Point
 *                             coordinates:
 *                               type: array
 *                               items:
 *                                 type: number
 *                               example: [-80.185942, 25.774772]
 *                             address:
 *                               type: string
 *                               example: 301 Biscayne Blvd, Miami, FL 33132, USA
 *                             description:
 *                               type: string
 *                               example: Miami, USA
 *                         _id:
 *                           type: string
 *                           example: 6813d84b81431cc656634d76
 *                         name:
 *                           type: string
 *                           example: The Mountain Biker
 *                         duration:
 *                           type: integer
 *                           example: 5
 *                         maxGroupSize:
 *                           type: integer
 *                           example: 10
 *                         difficulty:
 *                           type: string
 *                           example: medium
 *                         ratingsAverage:
 *                           type: number
 *                           format: float
 *                           example: 4.8
 *                         ratingsQuantity:
 *                           type: integer
 *                           example: 6
 *                         price:
 *                           type: number
 *                           example: 997
 *                         summary:
 *                           type: string
 *                           example: "Exploring the US east coast by foot and by boat"
 *                         imageCover:
 *                           type: string
 *                           example: tour-6813d84b81431cc656634d76-1746142667405-cover.jpeg
 *                         images:
 *                           type: array
 *                           items:
 *                             type: string
 *                           example:
 *                             - "tour-6813d84b81431cc656634d76-1746142667475-1.jpeg"
 *                             - "tour-6813d84b81431cc656634d76-1746142667475-2.jpeg"
 *                         startDates:
 *                           type: array
 *                           items:
 *                             type: string
 *                             format: date-time
 *                           example:
 *                             - "2021-06-19T09:00:00.000Z"
 *                             - "2021-07-20T09:00:00.000Z"
 *                         guides:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               _id:
 *                                 type: string
 *                                 example: 5c8a22c62f8fb814b56fa18b
 *                               name:
 *                                 type: string
 *                                 example: Miyah Myles
 *                               email:
 *                                 type: string
 *                                 example: miyah@example.com
 *                               photo:
 *                                 type: string
 *                                 example: user-12.jpg
 *                               role:
 *                                 type: string
 *                                 example: lead-guide
 *       404:
 *         description: Tour not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No document found with that ID"
 */

/**
 * @swagger
 * /api/v1/tours:
 *   post:
 *     summary: Create a new tour
  *     description: Create a new tour with the provided details.
 *     tags:
 *       - Tours
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Amazing Adventure in the Sahara
 *               duration:
 *                 type: integer
 *                 example: 7
 *               maxGroupSize:
 *                 type: integer
 *                 example: 10
 *               difficulty:
 *                 type: string
 *                 enum: [easy, medium, difficult]
 *                 example: medium
 *               ratingsAverage:
 *                 type: number
 *                 format: float
 *                 example: 4.7
 *               ratingsQuantity:
 *                 type: integer
 *                 example: 35
 *               price:
 *                 type: number
 *                 example: 1200
 *               priceDiscount:
 *                 type: number
 *                 example: 100
 *               summary:
 *                 type: string
 *                 example: Experience an incredible adventure across the Sahara desert.
 *               description:
 *                 type: string
 *                 example: This 7-day tour takes you deep into the Sahara desert.
 *               imageCover:
 *                 type: string
 *                 example: sahara-tour.jpg
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["sahara1.jpg", "sahara2.jpg", "sahara3.jpg"]
 *               startDates:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: date-time
 *                 example: ["2025-06-01T00:00:00.000Z", "2025-07-15T00:00:00.000Z", "2025-09-10T00:00:00.000Z"]
 *               secretTour:
 *                 type: boolean
 *                 example: false
 *               startLocation:
 *                 type: object
 *                 properties:
 *                   type:
 *                     type: string
 *                     example: Point
 *                   coordinates:
 *                     type: array
 *                     items:
 *                       type: number
 *                     example: [29.976, 31.131]
 *                   address:
 *                     type: string
 *                     example: Cairo, Egypt
 *                   description:
 *                     type: string
 *                     example: Tour starts from Cairo, Egypt
 *               locations:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     type:
 *                       type: string
 *                       example: Point
 *                     coordinates:
 *                       type: array
 *                       items:
 *                         type: number
 *                       example: [30.044, 31.236]
 *                     address:
 *                       type: string
 *                       example: Cairo
 *                     description:
 *                       type: string
 *                       example: Start point of the tour
 *                     day:
 *                       type: integer
 *                       example: 1
 *               guides:
 *                 type: array
 *                 items:
 *                   type: string
 *                   example: "60c72b2f9b1d4c34d4fcb034"
 *     responses:
 *       200:
 *         description: Tour created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                   properties:
 *                     data:
 *                      type: object
 *                      properties:
 *                      name:
 *                       type: string
 *                      example: Tour Data
 */

/**
 * @swagger
 * /api/v1/tours/{id}:
 *   patch:
 *     summary: Update an existing tour by ID
 *     description: Update the details of a specific tour using its ID.
 *     tags:
 *       - Tours
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique ID of the tour to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Amazing Adventure in the Sahara
 *               duration:
 *                 type: integer
 *                 example: 7
 *     responses:
 *       200:
 *         description: Tour updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                   properties:
 *                     data:
 *                      type: object
 *                      properties:
 *                      name:
 *                       type: string
 *                      example: Tour Data
 *       404:
 *         description: Tour not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: No Document found with that ID
 * 
 */

/**
 * @swagger
 * /api/v1/tours/{id}:
 *   delete:
 *     summary: Delete a tour by ID
 *     description: Remove a specific tour from the system using its ID.
 *     tags:
 *       - Tours
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique ID of the tour to delete
 *     responses:
 *       204:
 *         description: Tour Deleted successfully (No content)
 *       401:
 *         description: Unauthorized (Invalid or missing token)
 *       403:
 *         description: Forbidden (User does not have permission)
 *       404:
 *         description: No Document found with that ID
 */

/**
 * @swagger
 * /api/v1/tours/top-5-cheap:
 *   get:
 *     summary: Get top 5 cheap tours
 *     description: Retrieve the top 5 cheapest tours.
 *     tags:
 *       - Tours
 *     responses:
 *       200:
 *         description: Tour retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: Tour Data
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid request"
 */

/**
 * @swagger
 * /api/v1/tours/monthly-plan/{year}:
 *   get:
 *     summary: Get monthly plan of tours for a specific year
 *     description: Retrieves the number of tours starting in each month of the specified year, sorted by the number of tour starts in descending order.
 *     tags:
 *       - Tours
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: year
 *         required: true
 *         schema:
 *           type: integer
 *           example: 2021
 *         description: The year for which to retrieve the monthly plan
 *     responses:
 *       200:
 *         description: Monthly plan retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                   properties:
 *                     plan:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           month:
 *                             type: integer
 *                             example: 7
 *                           numTourStarts:
 *                             type: integer
 *                             example: 5
 *                           tours:
 *                             type: array
 *                             items:
 *                               type: string
 *                               example: "Tour A"
 *       400:
 *         description: Invalid year parameter
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid request"
 */

/**
 * @swagger
 * /api/v1/tours/stats:
 *   get:
 *     summary: Get tour statistics
 *     description: Retrieves statistics for tours with an average rating of 4.5 or higher, grouped by difficulty.
 *     tags:
 *       - Tours
 *     responses:
 *       200:
 *         description: Tour statistics retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                   properties:
 *                     stats:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                             example: MEDIUM
 *                           numTours:
 *                             type: integer
 *                             example: 5
 *                           numRatings:
 *                             type: integer
 *                             example: 25
 *                           avgRating:
 *                             type: number
 *                             format: float
 *                             example: 4.8
 *                           avgPrice:
 *                             type: number
 *                             format: float
 *                             example: 399.99
 *                           minPrice:
 *                             type: number
 *                             format: float
 *                             example: 150
 *                           maxPrice:
 *                             type: number
 *                             format: float
 *                             example: 600
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid request"
 */

/**
 * @swagger
 * /api/v1/tours/tours-within/{distance}/center/{latlng}/unit/{unit}:
 *   get:
 *     summary: Get tours within a specific distance
 *     description: Retrieves tours located within a specified distance from a given geographical point.
 *     tags:
 *       - Tours
 *     parameters:
 *       - in: path
 *         name: distance
 *         required: true
 *         schema:
 *           type: number
 *           example: 233
 *         description: Distance from the center point
 *       - in: path
 *         name: latlng
 *         required: true
 *         schema:
 *           type: string
 *           example: "41.379216,2.165337"
 *         description: Latitude and longitude in the format lat,lng
 *       - in: path
 *         name: unit
 *         required: true
 *         schema:
 *           type: string
 *           enum: [mi, km]
 *           example: mi
 *         description: Unit of distance (miles or kilometers)
 *     responses:
 *       200:
 *         description: Tours retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 results:
 *                   type: integer
 *                   example: 2
 *                 data:
 *                   type: object
 *                   properties:
 *                     tours:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                             example: "Tour A"
 *                           startLocation:
 *                             type: object
 *                             properties:
 *                               coordinates:
 *                                 type: array
 *                                 items:
 *                                   type: number
 *                                 example: [2.165337, 41.379216]
 *       400:
 *         description: Bad request - Invalid or missing parameters
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Please provide latitude and longitude in the format lat,lng."
 */

/**
 * @swagger
 * /api/v1/tours/distances/{latlng}/unit/{unit}:
 *   get:
 *     summary: Get distances of tours from a specified location
 *     description: Retrieves the distances of all tours from a given geographical point, sorted by proximity.
 *     tags:
 *       - Tours
 *     parameters:
 *       - in: path
 *         name: latlng
 *         required: true
 *         schema:
 *           type: string
 *           example: "41.379216,2.165337"
 *         description: Latitude and longitude in the format lat,lng
 *       - in: path
 *         name: unit
 *         required: true
 *         schema:
 *           type: string
 *           enum: [mi, km]
 *           example: km
 *         description: Unit of distance (miles or kilometers)
 *     responses:
 *       200:
 *         description: Distances retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                   properties:
 *                     distances:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                             example: "5c88fa8cf4afda39709c2966"
 *                           name:
 *                             type: string
 *                             example: "The Sports Lover"
 *                           distance:
 *                             type: number
 *                             format: float
 *                             example: 45.03269833472238
 *       400:
 *         description: Invalid or missing parameters
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Please provide latitude and longitude in the format lat,lng."
 */


// POST /tour/234fad4/reviews
// GET /tour/234fad4/reviews
router.use('/:tourId/reviews', reviewRouter);

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTtours, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStats);
router
  .route('/monthly-plan/:year')
  .get(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide', 'guide'),
    tourController.getMonthlyPlan,
  );

router
  .route('/tours-within/:distance/center/:latlng/unit/:unit')
  .get(tourController.getToursWithin);
// /tours-within?distance=233&center=-40,45&unit=mi
// /tours-within/233/center/-40,45/unit/mi

router
  .route('/distances/:latlng/unit/:unit')
  .get(tourController.getDistances);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.createTour,
  );

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.uploadTourImages,
    tourController.resizeTourImages,
    tourController.updateTour,
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.deleteTour,
  );

module.exports = router;
