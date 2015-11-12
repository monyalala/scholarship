var ScholarshipView = {
  renderList: function () {
    var scholar = ScholarshipModel.getScholarships();
    AppTemplate.process("scholarship_list.html", {scholar: scholar}, function (content) {
      $("#list-scholarships").html(content);
      $("#list-scholarships").trigger('create');
    });
  }
};