var RequirementModel = {
    requirements: [],
    getRequirements: function () {
        return RequirementModel.requirements;
    },
    fetchBySchId: function (sch_id) {
        $.ajax({
            type: "GET",
            datatype: "JSON",
            url: "http://scholarship.ezytech.biz/index.php/mobile/requirement/getListBySch/"+sch_id,
            crossDomain: true,
            success: function (data) {                
                RequirementModel.requirements = JSON.parse(data);                
                RequirementView.renderList();
            },
            error: function (error) {
                console.log('error ; ', error);
            }
        });
    }
};