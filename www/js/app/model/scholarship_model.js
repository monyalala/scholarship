var ScholarshipModel = {
    scholarships: [],
    getScholarships: function () {
        return ScholarshipModel.scholarships;
    },
    fetch: function () {
        $.ajax({
            type: "GET",
            datatype: "JSON",
            url: "http://192.168.1.125:81/scholarship/index.php/mobile/major/getList",
            crossDomain: true,
            success: function (data) {
                console.log(typeof(data));
                
                ScholarshipModel.scholarships = JSON.parse(data);
                
                ScholarshipView.renderList();
            },
            error: function (error) {
                console.log('error ; ', error);
            }
        });
    }
};