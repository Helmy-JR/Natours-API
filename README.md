# Natours Project 🚀

Natours is a back-end project that simulates a tour booking platform, featuring user authentication, role management, and booking functionality. It uses Node.js, Express, and MongoDB to handle data operations, security, and server-side rendering.

## Overview 📦

* Node.js and the Express Framework
* Database modeling using MongoDB
* MongoDB Database management
* Utilization of the Mongoose Library
* Security implementation
* Error handling with Express
* Authentication and Authorization processes
* Server-side Rendering MVC
* Image processing techniques
* File upload functionality

<hr>

## Key Features 📝

### Authentication and Authorization:

* User functionalities such as sign up, log in, logout, update, and password reset.

### User Profile:

* Update options for username, photo, email, password, and other personal information.
* Users categorized as regular users, guides, lead guides, or admins.
* Default user type is regular upon sign-up.

### Tour:

* Tours accessible to all users.
* Booking management, tour map viewing, user reviews, and ratings check.
* `admins and lead guides` can create, update and delete Tours

### Reviews:

* Writing reviews limited to regular users `who have booked tours`.
* Review visibility to all users.
* Editing and deleting of personal reviews by regular users.
* Prevention of multiple reviews for the same tour by regular users.
* Review deletion capability for `admins`.

<hr>

## Built With 🏗️

* NodeJS - JS runtime environment
* Express - Web framework
* Mongoose - Object Data Modelling library
* MongoDB Atlas - Cloud database service
* Pug - High-performance template engine
* JSON Web Token - Security token
* Postman - API testing
* Mailtrap - Email delivery platform

<hr>

### If you interested you can check the [Natours API Documentation](https://node-production-69ff.up.railway.app/api-docs/#/) from here 📝💥.