var ScholarshipController = {
  get: function () {
    var scholarships = ScholarshipModel.getScholarships();
    var $element = $("#list-scholarships");
    $element.html = "";
    $.map(scholarships, function (scholar) {
      ScholarshipView.renderList($element, scholar);
    });
  }
};