const movies = {
  movie1: {
    Title: 'Blazing Saddles',
    'Release Year': 1974,
    Format: 'VHS',
    Stars: ['Mel Brooks', 'Clevon Little', 'Harvey Korman', 'Gene Wilder', 'Slim Pickens', ' Madeline Kahn'],
    id: 1,
  },
  movie2: {
    Title: 'Casablanca',
    'Release Year': 1942,
    Format: 'DVD',
    Stars: ['Humphrey Bogart', 'Ingrid Bergman', 'Claude Rains', 'Peter Lorre'],
    id: 2,
  },
};
// movie1: {
//   Title: 'Blazing Saddles',
//   'Release Year': 1974,
//   Format: 'VHS',
//   Stars: ['Mel Brooks', 'Clevon Little', 'Harvey Korman', 'Gene Wilder', 'Slim Pickens', ' Madeline Kahn'],
//   id: 1,
// },
// movie2: {
//   Title: 'Casablanca',
//   'Release Year': 1942,
//   Format: 'DVD',
//   Stars: ['Humphrey Bogart', 'Ingrid Bergman', 'Claude Rains', 'Peter Lorre'],
//   id: 2,
// },

exports.addMovie = function(req, res) {
  let newMovie = req.body;
  movies['movie' + newMovie.id] = newMovie;
  console.log('After post movie,  movies\n' + JSON.stringify(newMovie, null, 5));
  res.end('Post movie: \n' + JSON.stringify(newMovie, null, 5));
};

exports.getAllMovies = function(req, res) {
  console.log('All movies: \n' + JSON.stringify(movies, null, 5));
  res.end('All movies \n' + JSON.stringify(movies, null, 5));
};

exports.getMovieById = function(req, res) {
  let movie = movie['movies' + req.params.id];
  console.log('Find a movie: \n' + JSON.stringify(movie, null, 5));
  res.end('Find a movie: \n' + JSON.stringify(movie, null, 5));
};

exports.removeMovieById = function(req, res) {
  let deleteMovie = movies['movie' + req.params.id];
  delete movies['movie' + req.params.id];
  console.log('After deletion movie,  movies\n' + JSON.stringify(deleteMovie, null, 5));
  res.end('Deleted movie: \n' + JSON.stringify(deleteMovie, null, 5));
};
