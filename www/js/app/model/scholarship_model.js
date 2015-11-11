var ScholarshipModel = {
  scholarships: [],
  getScholarships: function () {
    return ScholarshipModel.scholarships;
  },
  fetch: function () {
    $.ajax({
      type: "GET",
      datatype: "JSON",
      url: "http://localhost:81/scholarship/index.php/major/major/getList",
      crossDomain: true,
      success: function (data) {
          console.log (data);
//        $.map(data.feed.entry, function (movie) {
//          var jsonMovie = {
//            "id": movie.gsx$id.$t,  
//            "name": movie.gsx$name.$t,
//            "description": movie.gsx$description.$t,
//            "image": movie.gsx$image.$t
//          };
//          ScholarshipModel.scholarships.push(jsonMovie);
//        });
//        MovieView.renderList();
      },
      error: function (error) {
        console.log('error ; ', error);
      }
    });
  }
};