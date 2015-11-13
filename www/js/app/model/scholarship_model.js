var ScholarshipModel = {
    scholarships: [],
    getScholarships: function () {
        return ScholarshipModel.scholarships;
    },
    fetch: function () {
        $.ajax({
            type: "GET",
            datatype: "JSON",
//            url: "http://192.168.1.125:81/scholarship/index.php/mobile/major/getList",
//                url: "http://192.168.54.67:81/scholarship/index.php/mobile/major/getList",
            url: "http://scholarship.ezytech.biz/index.php/mobile/major/getList",  
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
            url: "http://scholarship.ezytech.biz/index.php/mobile/major/getList/"+id,  
            crossDomain: true,
            success: function (data) {                
                ScholarshipModel.scholarships = JSON.parse(data);                
                ScholarshipView.renderListById();
            },
            error: function (error) {
                console.log('error ; ', error);
            }
        });
    }
};