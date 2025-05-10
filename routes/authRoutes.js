// routes/authRoutes.js
const express = require("express");
const authController = require("./../controllers/authController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authentication endpoints
 */

/**
 * @swagger
 * /api/v1/auth/signup:
 *   post:
 *     summary: Register a new user
 *     description: Create a new user with email , password, firstName, lastName and role.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - password
 *               - role
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: John
 *               lastName:
 *                 type: string
 *                 example: Doe
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: MyStrongPassword123
 *               role:
 *                 enum: ['user', 'guide', 'lead-guide', 'admin']
 *                 type: string
 *                 example: user
 *     responses:
 *       200:
 *         description: User registered successfully
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *               token:
 *                type: string
 *                example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       400:
 *         description: User forgot to provide a field or email already exist or invalid email
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *               message:
 *                type: string
 *                example: "Email already exist"
 *
 */

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Login a user
 *     description: Login a user with email and password.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - role
 *             properties:
 *               email:
 *                 type: string
 *                 example: test@example.coom
 *               password:
 *                 type: string
 *                 example: MyStrongPassword123
 *               role:
 *                 enum: ['user', 'guide', 'lead-guide', 'admin']
 *                 type: string
 *                 example: user
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                           example: 5c8a1d5b0190b214360dc057
 *                         name:
 *                           type: string
 *                           example: Jonas Schmedtmann
 *                         email:
 *                           type: string
 *                           example: admin@natours.io
 *                         photo:
 *                           type: string
 *                           example: user-1.jpg
 *                         role:
 *                           type: string
 *                           enum:
 *                             - user
 *                             - guide
 *                             - lead-guide
 *                             - admin
 *                           example: admin
 *                         __v:
 *                           type: integer
 *                           example: 0
 *       400:
 *         description: User forgot to provide a field
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *               message:
 *                type: string
 *                example: "Please provide an email and password"
 *       401:
 *         description: invalid credentials
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *               message:
 *                type: string
 *                example: "Invalid credentials"
 *       404:
 *         description: User not found
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *               message:
 *                type: string
 *                example: "User not found"
 *
 */

/**
 * @swagger
 * /api/v1/auth/Forgot Password:
 *   post:
 *     summary: Send token to user email
 *     description: Send token to user email to reset password.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *     responses:
 *       200:
 *         description: Code sent successfully
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *               status:
 *                type: string
 *                example: "success"
 *               message:
 *                type: string
 *                example: "Token sent to email!"
 *       404:
 *         description: User not found
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *               message:
 *                type: string
 *                example: "There is no user with email address."
 *       500:
 *         description: Internal Server Error
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *               message:
 *                type: string
 *                example: "There was an error sending the email. Try again later!"
 */

/**
 * @swagger
 * /api/v1/auth/resetPassword/{token}:
 *   patch:
 *     summary: Reset Password
 *     description: Verify token sent to user email to reset password.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - code
 *             properties:
 *               password:
 *                 type: string
 *                 example: newpassword
 *               passwordConfirm:
 *                 type: string
 *                 example: newpassword
 *     responses:
 *       200:
 *         description: Code verified
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *               status:
 *                type: string
 *                example: "success"
 *               token:
 *                type: string
 *                example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 * 
 *       400:
 *         description: Invalid Token
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *               status:
 *                type: string
 *                example: "fail"
 *               message:
 *                type: string
 *                example: "token is invalid or has expired"
 */

/**
 * @swagger
 * /api/v1/auth/updateMyPassword:
 *   patch:
 *     summary: Update Current User password
 *     description: Update Current User password
 *     tags:
 *       - Authentication
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - passwordCurrent
 *               - password
 *               - passwordConfirm
 *             properties:
 *               passwordCurrent:
 *                 type: string
 *                 example: currentpassword
 *               password:
 *                 type: string
 *                 example: newpassword
 *               passwordConfirm:
 *                 type: string
 *                 example: newpassword
 *     responses:
 *       200:
 *         description: Password verified
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                           example: 68193ade182566099e5820a3
 *                         name:
 *                           type: string
 *                           example: Test Helmy User
 *                         email:
 *                           type: string
 *                           example: testuseremail@exapmle.com
 *                         photo:
 *                           type: string
 *                           example: default.jpg
 *                         role:
 *                           type: string
 *                           example: user
 *                         passwordChangedAt:
 *                           type: string
 *                           format: date-time
 *                           example: 2025-05-05T22:26:15.261Z
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: fail
 *                 message:
 *                   type: string
 *                   example: Your current password is wrong.
 *       500:
 *         description: Innternal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 error:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: JsonWebTokenError
 *                     message:
 *                       type: string
 *                       example: jwt malformed
 *                     statusCode:
 *                       type: integer
 *                       example: 500
 *                     status:
 *                       type: string
 *                       example: error
 *                 message:
 *                   type: string
 *                   example: jwt malformed
 */
router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

// Protect all routes after this middleware
router.use(authController.protect);

router.patch("/updateMyPassword", authController.updatePassword);

module.exports = router;
