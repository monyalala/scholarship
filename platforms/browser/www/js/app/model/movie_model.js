var MovieModel = {
  movies: [],
  getMovies: function () {
    return MovieModel.movies;
  },
  fetch: function () {
    $.ajax({
      type: "GET",
      datatype: "JSON",
      url: "https://spreadsheets.google.com/feeds/list/1fCpRAuSepC0ohq3pDEOJPKYxj6dJE2x6JNtDCsvej3M/od6/public/values?alt=json",
      crossDomain: true,
      success: function (data) {
        $.map(data.feed.entry, function (movie) {
          var jsonMovie = {
            "id": movie.gsx$id.$t,
            "name": movie.gsx$name.$t,
            "description": movie.gsx$description.$t,
            "image": movie.gsx$image.$t
          };
          MovieModel.movies.push(jsonMovie);
        });
        MovieView.renderList();
      },
      error: function (error) {
        console.log('error ; ', error);
      }
    });
  }
};