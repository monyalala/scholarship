var ScholarshipDetailView = {
    renderList: function () {
        var sch_detail = ScholarshipDetailModel.getScholarshipDetails();
        AppTemplate.process("sch_detail.html", {sch_detail: sch_detail}, function (content) {
            $("#amount-scholarship").html(content);
            $("#amount-scholarship").trigger('create');
        });
    }
};