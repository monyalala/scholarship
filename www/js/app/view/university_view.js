var UniversityView = {
  renderList: function () {
    var universities = UniversityModel.getUniversity();
    AppTemplate.process("university.html", {university: universities}, function (content) {
      $("#list-university").html(content);
      $("#list-university").trigger('create');
    });
  }
};