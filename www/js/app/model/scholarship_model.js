var ScholarshipModel = {
  scholarships: [],
  getScholarships: function () {
    return ScholarshipModel.scholarships;
  },
  fetch: function () {
    $.ajax({
      type: "GET",
      datatype: "JSON",
      url: "http://192.168.1.125:81/scholarship/index.php/mobile/major/getList",
      crossDomain: true,
      success: function (data) {
          console.log(data)
//        $.map(data, function (scholar) {
//          var jsonMovie = {
//            "id": scholar.m_id 
////            "name": scholar.gsx$name.$t,
////            "description": scholar.gsx$description.$t,
////            "image": scholar.gsx$image.$t
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