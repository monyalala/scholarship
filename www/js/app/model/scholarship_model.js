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
    fetchById: function (id) {
        $.ajax({
            type: "GET",
            datatype: "JSON",
//            url: "http://scholarship.ezytech.biz/index.php/mobile/major/getList/"+id,  
            url: "http://localhost:81/scholarship/index.php/mobile/scholarship/getList/"+id,
            crossDomain: true,
            success: function (data) {                
                ScholarshipModel.scholarship = JSON.parse(data);                
                ScholarshipView.renderDetail();
            },
            error: function (error) {
                console.log('error ; ', error);
            }
        });
    }
};