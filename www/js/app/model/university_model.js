var UniversityModel = {
    university: [],
    uni_fetch_id: [],
    getUniversity: function () {
        return UniversityModel.university;
    },
    getUniversityByID: function () {
        return UniversityModel.uni_fetch_id;
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
    },
    fetchById: function (id) {
        $.ajax({
            type: "GET",
            datatype: "JSON",
            url: "http://scholarship.ezytech.biz/index.php/mobile/university/getList/" + id,
            crossDomain: true,
            success: function (data) {
                UniversityModel.uni_fetch_id = JSON.parse(data);
                UniversityView.renderDetail();
                ContactModel.fetchByUniIdForSch(id);
            },
            error: function (error) {
                console.log('error ; ', error);
            }
        });
    }
};