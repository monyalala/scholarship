var MovieView = {
  renderList: function () {
    var movies = MovieModel.getMovies();
    AppTemplate.process("movie.html", {movies: movies}, function (content) {
      $("#page-movies").html(content);
      $("#page-movies").trigger('create');
    });
  }
};