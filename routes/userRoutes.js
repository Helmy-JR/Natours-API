const express = require("express");
const multer = require("multer");
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User endpoints
 */

/**
 * @swagger
 * api/v1/users:
 *   get:
 *     summary: Get all users
 *     tags:
 *       - Users
 *     parameters:
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *         description: Sort the users by a specific field
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Limit the number of returned users
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Specify the page number for pagination
 *       - in: query
 *         name: fields
 *         schema:
 *           type: string
 *         description: Select specific fields to return (comma-separated)
 *     responses:
 *       200:
 *         description: A list of users
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
 *                     data:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                             example: 64bca2f928c4b5d7e3a9a1bc
 *                           name:
 *                             type: string
 *                             example: John Doe
 *                           email:
 *                             type: string
 *                             example: john@example.com
 */

/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     description: Retrieve a user by their unique ID
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique ID of the user
 *     responses:
 *       200:
 *         description: Successfully retrieved the user data
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
 *                       example: 6813d84b81431cc656634d76
 *                     name:
 *                       type: string
 *                       example: The Mountain Biker
 *                     email:
 *                       type: string
 *                       example: laura@example.com
 *                     photo:
 *                       type: string
 *                       example: user-photo.jpg
 *                     role:
 *                       type: string
 *                       example: lead guide
 *       404:
 *         description: User not found
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
 *       500:
 *         description: Internal server error
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
 *                   example: "Internal server error"
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
 * /api/v1/users/{id}:
 *   patch:
 *     summary: Update a user by ID
 *     description: Update user information by their unique ID
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique ID of the user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 example: JohnDoe@gmail.com
 *               role:
 *                 type: string
 *                 example: user
 *     responses:
 *       200:
 *         description: Successfully updated the user data
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
 *                       example: 6813d84b81431cc656634d76
 *                     name:
 *                       type: string
 *                       example: The Mountain Biker
 *                     email:
 *                       type: string
 *                       example: laura@example.com
 *                     photo:
 *                       type: string
 *                       example: user-photo.jpg
 *                     role:
 *                       type: string
 *                       example: lead guide
 *       404:
 *         description: User not found
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
 *       500:
 *         description: Internal server error
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
 *                   example: "Internal server error"
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
 * /api/v1/users/{id}:
 *   delete:
 *     summary: Delete User by ID
 *     description: Delete a user by their unique ID
 *     tags:
 *       - Users
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
 *         description: User Deleted successfully (No content)
 *       401:
 *         description: Unauthorized (Invalid or missing token)
 *       403:
 *         description: Forbidden (User does not have permission)
 *       404:
 *         description: No Document found with that ID
 */

/**
 * @swagger
 * /api/v1/users/getMe:
 *   get:
 *     summary: Get current user
 *     description: Get the currently logged-in user's information
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved user data
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
 *                     user:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                           example: 64bca2f928c4b5d7e3a9a1bc
 *                         name:
 *                           type: string
 *                           example: John Doe
 *                         email:
 *                           type: string
 *                           example: email@example.com
 *                         photo:
 *                           type: string
 *                           example: user-photo.jpg
 *                         role:
 *                           type: string
 *                           example: user
 *       401:
 *         description: Unauthorized (Invalid or missing token)
 *       404:
 *         description: No Document found with that ID
 */

/**
 * @swagger
 * /api/v1/users/updateMe:
 *   patch:
 *     summary: Update current user profile
 *     description: Update the authenticated user's profile details. Cannot update password here.
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *                 example: "65f47a8cde3a6e7b5a1c9b91"
 *               firstName:
 *                 type: string
 *                 example: "John"
 *               lastName:
 *                 type: string
 *                 example: "Doe"
 *               email:
 *                 type: string
 *                 example: "john.doe@example.com"
 *               photo:
 *                 type: string
 *                 example: "user-photo.jpg"
 *               role:
 *                 type: string
 *                 example: "lead guide"
 *     responses:
 *       400:
 *         description: Password update not allowed or email already exists
 *       401:
 *         description: Unauthorized (Invalid or missing token)
 *       404:
 *         description: User not found
 */

/**
 * @swagger
 * /api/v1/users/deleteMe:
 *   delete:
 *     summary: Delete current user account
 *     description: Deactivate the authenticated user's account
 *     tags:
 *      - Users
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       204:
 *         description: User deleted successfully (No content)
 *       401:
 *         description: Unauthorized (Invalid or missing token)
 *       404:
 *         description: User not found
 */

// Protect all routes after this middleware
router.use(authController.protect);

router.get("/getMe", userController.getMe, userController.getUser);

router.patch(
  "/updateMe",
  userController.uploadUserPhoto,
  userController.resizeUserPhoto,
  userController.updateMe
);

router.delete("/deleteMe", userController.deleteMe);

// restrict all routes after this middleware
router.use(authController.restrictTo("admin"));

router
  .route("/")
  .get(userController.gatAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
