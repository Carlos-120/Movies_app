const movieControllers = require('./movies.controllers');
const responses = require('../utils/handleResponses')
const {addToFirebaseMovieVideo} = require('../utils/firebase')
// Comprueva si se realizo la peticion correcta
const getAllMovies = (req, res) => {
movieControllers.findAllMovies()
.then(data => {
    responses.success({
        res,
        status: 200,
        data,
        message: 'Getting all the movies'
    });
})
.catch(err => {
    responses.error({
        res,
        data: err,
        message:'Something bad gettting the movies',
        status:400,
    });
})
};
// optenemos los datos de req.body y req.file, con try y catch, intenta optener los datos  
const postMovie = async (req, res) =>{
    const movieObj = req.body
    const movieFile = req.file
    // const coverFile = req.files.coverImage[0]
   
   try {
 const movieUrl = await addToFirebaseMovieVideo(movieFile)
 const data = await movieControllers.createMovie({...movieObj, movieUrl})
responses.success({
    res,
    status: 201,
    data,
    message: 'Movie Created! :D'
})   
} catch (err){
responses.error({
    res,
    data: err, 
    message: err.message,
    status:400,
    fields: {  
    title: 'string',
    synopsis:'string',
    releaseYear:2020,
    director: 'string',
    duration:180,
    trillerUrl: 'a',
    coverUrl: 'a',
    classification:'string' ,
    rating: 0.0 ,
    }
})
   }
};

module.exports = {
    getAllMovies,
    postMovie,
}