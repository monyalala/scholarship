var MajorController = {
  get: function () {
    var majors = MajorModel.getMajors();
    var $element = $("#list-majors");
    $element.html = "";
    $.map(majors, function (major) {
      MajorView.renderList($element, major);
    });
  }
};