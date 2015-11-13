var MajorView = {
  renderList: function () {
    var major = MajorModel.getMajors();
    AppTemplate.process("major.html", {major: major}, function (content) {
      $("#list-majors").html(content);
      $("#list-majors").trigger('create');
    });
  }
};