const Users = require("./users.models");
const Movies = require('./movies.models');
const Episodes = require('./episodes.models');
const Genres = require('./genres.models');
const MovieGenres = require('./movie_genres.models');
const Seasons = require('./seasons.models');
const Series = require('./series.models');
const SerieGenres = require('./serie_genres.models');
const SeriesGenres = require("./serie_genres.models");

const initModels = () => {
  Users
Movies.belongsToMany(Genres, {through: MovieGenres});
Genres.belongsToMany(Movies, {through: MovieGenres});

Series.belongsToMany(Genres, {through: SerieGenres});
Genres.belongsToMany(Series,{through: SeriesGenres});

Series.hasMany(Seasons);
Seasons.belongsTo(Series);

Seasons.hasMany(Episodes);
Episodes.belongsTo(Seasons);
}

module.exports = initModels