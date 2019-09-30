module.exports = function(app) {
  const movies = require('../controllers');

  app.post('/api/movies/', movies.addMovie);
  app.get('/api/movies/', movies.getAllMovies);
  app.get('/api/movies/:id', movies.getMovieById);
  app.delete('/api/movies/:id', movies.removeMovieById);
};
