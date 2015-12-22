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
        AppTemplate.process("scholarship_detail.html", {scholar:scholar}, function (content) {
            $("#page-scholarship-detail").html(content);
            $("#page-scholarship-detail").trigger('create');
            getMap('map-uni-sch',scholar.sch[0].uni_map);
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
    },
    renderListBySearch: function () {
        var scholar = ScholarshipModel.getSchBySearch();
        AppTemplate.process("scholarship_list_by_search.html", {scholar: scholar}, function (content) {
            $("#sch-search-list").html(content);
            $("#sch-search-list").trigger('create');
        });
    }
};