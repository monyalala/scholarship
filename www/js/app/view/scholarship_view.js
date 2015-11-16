var ScholarshipView = {
  renderList: function () {
    var scholar = ScholarshipModel.getScholarships();
    AppTemplate.process("scholarship_list.html", {scholar: scholar}, function (content) {
      $("#list-scholarships").html(content);
      $("#list-scholarships").trigger('create');
    });
  },
  renderDetail: function () {
    var scholar = ScholarshipModel.getScholarship();
    AppTemplate.process("scholarship_detail.html", {scholar: scholar}, function (content) {
      $("#page-scholarship-detail").html(content);
      $("#page-scholarship-detail").trigger('create');
    });
  }
};