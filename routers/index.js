const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");

// home
router.get("/", Controller.home);

//read
router.get("/production-houses", Controller.readPH);
router.get("/movies", Controller.readMovies);

//add
router.get("/movies/add", Controller.showForm);
router.post("/movies/add", Controller.postAdd);

// //update
router.get("/movies/edit/:id", Controller.showForm);
router.post("/movies/edit/:id", Controller.postEdit);

// //delete
router.get("/movies/delete/:id", Controller.deleteMovie);

module.exports = router;
