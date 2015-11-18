var ScholarshipModel = {
    scholarships: [],
    scholarship:[],
    getScholarships: function () {
        return ScholarshipModel.scholarships;
    },
    getScholarship: function () {
        return ScholarshipModel.scholarship;
    },
    fetch: function () {
        $.ajax({
            type: "GET",
            datatype: "JSON",
            url: "http://scholarship.ezytech.biz/index.php/mobile/scholarship/getList", 
//            url: "http://localhost:81/scholarship/index.php/mobile/scholarship/getList", 
            crossDomain: true,
            success: function (data) {                
                ScholarshipModel.scholarships = JSON.parse(data);                
                ScholarshipView.renderList();
            },
            error: function (error) {
                console.log('error ; ', error);
            }
        });
    }
    ,
    fetchById: function (id,uni_id) {
        $.ajax({
            type: "GET",
            datatype: "JSON",
            url: "http://scholarship.ezytech.biz/index.php/mobile/scholarship/getList/"+id, 
            crossDomain: true,
            success: function (data) {                
                ScholarshipModel.scholarship = JSON.parse(data);                
                ScholarshipView.renderDetail();
                RequirementModel.fetchBySchId(id);
                ScholarshipDetailModel.fetchBySchId(id);
                ContactModel.fetchByUniIdForSch(1);
            },
            error: function (error) {
                console.log('error ; ', error);
            }
        });
    }
};