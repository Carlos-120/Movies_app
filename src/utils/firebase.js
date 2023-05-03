const firebase = require('firebase/app');
const {getStorage, uploadBytes, ref, getDownloadURL} = require('firebase/storage');

const config = require('../../config').api.firebase; 
const firebaseApp = firebase.initializeApp(config);
const storage = getStorage(firebaseApp);

//? Peliculas
const addToFirebaseMovieVideo = async (file) => {
const movieRef = ref(storage, `movieVideos/${Date.now()}-${file.originalname}`)
await uploadBytes(movieRef, file.buffer)
const movieUrl = await getDownloadURL(movieRef)
return movieUrl
};
//? Cover Peliculas
const addToFirebaseMovieCover = async (file) => {
    const movieRef = ref(storage, `movieCover/${Date.now()}-${file.originalname}`)
    await uploadBytes(movieRef, file.buffer)
    const movieUrl = await getDownloadURL(movieRef)
    return movieUrl
    };
//? Serie - Name - Temporada - Cover
const addToFirebaseMovieSeasonCover = async (file, name, season) => {
    const movieRef = ref(storage, `Serie/${name}/${season}/${Date.now()}-${file.originalname}`)
    await uploadBytes(movieRef, file.buffer)
    const movieUrl = await getDownloadURL(movieRef)
    return movieUrl
    };
//? Serie - Name - Temporada - Capitulo


module.exports = {
    addToFirebaseMovieVideo,
    addToFirebaseMovieCover
}