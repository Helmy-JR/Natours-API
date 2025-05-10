const reviewController = require('./../controllers/reviewController');
const authController = require('./../controllers/authController');
const express = require('express');

const router = express.Router({ mergeParams: true });

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Reviews management endpoints
 */

/**
 * @swagger
 * /api/v1/reviews:
 *   get:
 *     summary: Retrieve all reviews
 *     description: Fetch a list of all reviews with detailed information.
 *     tags:
 *       - Reviews
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: rating
 *         schema:
 *           type: string
 *         description: Filter reviews by rating
 *     responses:
 *       200:
 *         description: Successful response
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
 *                           _id:
 *                             type: string
 *                             example: 67d8a5124b2e4c2f4915fa9c
 *                           review:
 *                             type: string
 *                             example: cool tour
 *                           rating:
 *                             type: integer
 *                             example: 1
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                             example: 2025-03-17T22:40:42.853Z
 *                           tour:
 *                             type: string
 *                             example: 67d895deb32fcb8a3084f1fc
 *                           user:
 *                             type: object
 *                             properties:
 *                               _id:
 *                                 type: string
 *                                 example: 5c8a1ec62f8fb814b56fa183
 *                               name:
 *                                 type: string
 *                                 example: Ayla Cornell
 *                               photo:
 *                                 type: string
 *                                 example: user-4.jpg
 *                           id:
 *                             type: string
 *                             example: 67d8a5124b2e4c2f4915fa9c
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
 *       403:
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "fail"
 *                 message:
 *                   type: string
 *                   example: "You do not have permission to perform this action"
 */

/**
 * @swagger
 * /api/v1/reviews/{id}:
 *   get:
 *     summary: Retrieve a specific review
 *     description: Fetch detailed information about a specific review.
 *     tags:
 *       - Reviews
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the review to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
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
 *                         _id:
 *                           type: string
 *                           example: 67d8a5124b2e4c2f4915fa9c
 *                         review:
 *                           type: string
 *                           example: cool tour
 *                         rating:
 *                           type: integer
 *                           example: 1
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                           example: 2025-03-17T22:40:42.853Z
 *                         tour:
 *                           type: string
 *                           example: 67d895deb32fcb8a3084f1fc
 *                         user:
 *                           type: object
 *                           properties:
 *                             _id:
 *                               type: string
 *                               example: 5c8a1ec62f8fb814b56fa183
 *                             name:
 *                               type: string
 *                               example: Ayla Cornell
 *                             photo:
 *                               type: string
 *                               example: user-4.jpg
 *                         __v:
 *                           type: integer
 *                           example: 0
 *                         id:
 *                           type: string
 *                           example: 67d8a5124b2e4c2f4915fa9c
 *       404:
 *         description: Review not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No document found with that ID"
 *       403:
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "fail"
 *                 message:
 *                   type: string
 *                   example: "You do not have permission to perform this action"
 */

/**
 * @swagger
 * /api/v1/reviews:
 *   post:
 *     summary: Create a new review
 *     description: Add a new review to a specific tour.
 *     tags:
 *       - Reviews
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               review:
 *                 type: string
 *                 example: "This was an amazing tour!"
 *               rating:
 *                 type: number
 *                 example: 5
 *               tour:
 *                 type: string
 *                 example: "67d895deb32fcb8a3084f1fc"
 *               user:
 *                 type: string
 *                 example: "5c8a1ec62f8fb814b56fa183"
 *     responses:
 *       201:
 *         description: Review created successfully
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
 *                     _id:
 *                       type: string
 *                       example: "67d8a5124b2e4c2f4915fa9c"
 *                     review:
 *                       type: string
 *                       example: "cool tour"
 *                     rating:
 *                       type: integer
 *                       example: 1
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-03-17T22:40:42.853Z"
 *                     tour:
 *                       type: string
 *                       example: "67d895deb32fcb8a3084f1fc"
 *                     user:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                           example: "5c8a1ec62f8fb814b56fa183"
 *                         name:
 *                           type: string
 *                           example: "Ayla Cornell"
 *                         photo:
 *                           type: string
 *                           example: "user-4.jpg"
 *                         __v:
 *                           type: integer
 *                           example: 0
 *                         id:
 *                           type: string
 *                           example: "67d8a5124b2e4c2f4915fa9c"
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
 *       403:
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "fail"
 *                 message:
 *                   type: string
 *                   example: "You do not have permission to perform this action"
 *       404:
 *         description: Review not found
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
 * /api/v1/reviews/{id}:
 *   patch:
 *     summary: Update a review
 *     description: Modify an existing review.
 *     tags:
 *       - Reviews
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the review to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               review:
 *                 type: string
 *                 example: "This was an amazing tour!"
 *               rating:
 *                 type: number
 *                 example: 5
 *     responses:
 *       200:
 *         description: Review updated successfully
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
 *                     _id:
 *                       type: string
 *                       example: "67d8a5124b2e4c2f4915fa9c"
 *                     review:
 *                       type: string
 *                       example: "cool tour"
 *                     rating:
 *                       type: integer
 *                       example: 1
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2025-03-17T22:40:42.853Z"
 *                     tour:
 *                       type: string
 *                       example: "67d895deb32fcb8a3084f1fc"
 *                     user:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                           example: "5c8a1ec62f8fb814b56fa183"
 *                         name:
 *                           type: string
 *                           example: "Ayla Cornell"
 *                         photo:
 *                           type: string
 *                           example: "user-4.jpg"
 *                         __v:
 *                           type: integer
 *                           example: 0
 *                         id:
 *                           type: string
 *                           example: "67d8a5124b2e4c2f4915fa9c"
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
 *       403:
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "fail"
 *                 message:
 *                   type: string
 *                   example: "You do not have permission to perform this action"
 *       404:
 *         description: Review not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "fail"
 *                 message:
 *                   type: string
 *                   example: "No document found with that ID"
 */

/**
 * @swagger
 * /api/v1/reviews/{id}:
 *   delete:
 *     summary: Delete a review
 *     description: Remove a specific review from the system.
 *     tags:
 *       - Reviews
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
 *         description: review Deleted successfully (No content)
 *       401:
 *         description: Unauthorized (Invalid or missing token)
 *       403:
 *         description: Forbidden (User does not have permission)
 *       404:
 *         description: No Document found with that ID
 */

/**
 * @swagger
 * /api/v1/tour/{tourId}/reviews:
 *   get:
 *     summary: Get all reviews for a specific tour
 *     description: Retrieve all reviews associated with a specific tour.
 *     tags:
 *       - Reviews
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: tourId
 *         required: true
 *         description: ID of the tour to retrieve reviews for
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
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
 *                           _id:
 *                             type: string
 *                             example: 67d8a5124b2e4c2f4915fa9c
 *                           review:
 *                             type: string
 *                             example: cool tour
 *                           rating:
 *                             type: integer
 *                             example: 1
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                             example: 2025-03-17T22:40:42.853Z
 *                           tour:
 *                             type: string
 *                             example: 67d895deb32fcb8a3084f1fc
 *                           user:
 *                             type: object
 *                             properties:
 *                               _id:
 *                                 type: string
 *                                 example: 5c8a1ec62f8fb814b56fa183
 *                               name:
 *                                 type: string
 *                                 example: Ayla Cornell
 *                               photo:
 *                                 type: string
 *                                 example: user-4.jpg
 *                           id:
 *                             type: string
 *                             example: 67d8a5124b2e4c2f4915fa9c
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
 *       403:
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "fail"
 *                 message:
 *                   type: string
 *                   example: "You do not have permission to perform this action"
 *       404:
 *         description: Review not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No document found with that ID"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An error occurred while processing your request"
 */
// Protect all routes after this middleware
router.use(authController.protect);

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.restrictTo('user'),
    reviewController.setTourUserIds,
    reviewController.createReview,
  );

router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(
    authController.restrictTo('user', 'admin'),
    reviewController.updateReview,
  )
  .delete(
    authController.restrictTo('user', 'admin'),
    reviewController.deleteReview,
  );

module.exports = router;
