var UniversityView = {
  renderList: function () {
    var universities = UniversityModel.getUniversity();
    AppTemplate.process("university.html", {university: universities}, function (content) {
      $("#list-university").html(content);
      $("#list-university").trigger('create');
    });
  },
   renderDetail: function () {
    var univers = UniversityModel.getUniversityByID();
    AppTemplate.process("univ_detail.html", {univer: univers}, function (content) {
      $("#page-university-detail").html(content);
      $("#page-university-detail").trigger('create');
    });
  }
};