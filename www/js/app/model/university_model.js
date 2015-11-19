var UniversityModel = {
    university: [],
    getUniversity: function () {
        return UniversityModel.university;
    },
    fetch: function () {
        $.ajax({
            type: "GET",
            datatype: "JSON",
            url: "http://scholarship.ezytech.biz/index.php/mobile/university/getList",  
            crossDomain: true,
            success: function (data) {                
                UniversityModel.university = JSON.parse(data);                
                UniversityView.renderList();
            },
            error: function (error) {
                console.log('error ; ', error);
            }
        });
    }
};