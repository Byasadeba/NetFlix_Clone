const { addToLikedMovies, getLikedMovies, removeFromlikedmovies } = require("../controlers/userController");

const router = require("express").Router();

router.post("/add", addToLikedMovies);
router.get("/liked/:email",getLikedMovies);
router.put("/delete",removeFromlikedmovies);


module.exports = router;