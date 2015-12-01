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
    },
    renderListByMajor: function () {
        var scholar = ScholarshipModel.getSchByMajor();
        AppTemplate.process("scholarship_list_by_major.html", {scholar: scholar}, function (content) {
            $("#page-scholarship-by-major").html(content);
            $("#page-scholarship-by-major").trigger('create');
        });
    },
    renderListByUni: function () {
        var scholar = ScholarshipModel.getSchByUni();
        AppTemplate.process("scholarship_list_by_uni.html", {scholar: scholar}, function (content) {
            $("#page-scholarship-by-uni").html(content);
            $("#page-scholarship-by-uni").trigger('create');
        });
    }
};