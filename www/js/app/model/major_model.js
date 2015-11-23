var MajorModel = {
    majors: [],
    getMajors: function () {
        return MajorModel.majors;
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
                MajorModel.majors = JSON.parse(data);
                MajorView.renderList();
            },
            error: function (error) {
                console.log('error ; ', error);
            }
        });
    }
};