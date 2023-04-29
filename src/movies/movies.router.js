const router = require('express').Router();
const movieServices = require('./movies.services');
const upload = require('../utils/multer')

router.route('/')
.get(movieServices.getAllMovies)
.post(upload.single('movieViedo'),movieServices.postMovie)
router.get('/genres/:genreId', movieServices.getAllMoviesByGenre)
router.post('/:movieId/genre/:genreId', movieServices.postGenreToMovie)

module.exports = router  