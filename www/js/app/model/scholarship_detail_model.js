var ScholarshipDetailModel = {
    schDetails: [],
    getScholarshipDetails: function () {
        return ScholarshipDetailModel.schDetails;
    },
    fetchBySchId: function (sch_id) {
        $.ajax({
            type: "GET",
            datatype: "JSON",
            url: "http://scholarship.ezytech.biz/index.php/mobile/scholarshipdetail/getListBySch/"+sch_id, 
            crossDomain: true,
            success: function (data) {                
                ScholarshipDetailModel.schDetails = JSON.parse(data);                
                ScholarshipDetailView.renderList();
            },
            error: function (error) {
                console.log('error ; ', error);
            }
        });
    }
};