var ScholarshipModel = {
    scholarships: [],
    scholarship: [],
    schByUni: [],
    schByMajor: [],
    getScholarships: function () {
        return ScholarshipModel.scholarships;
    },
    getScholarship: function () {
        return ScholarshipModel.scholarship;
    },
    getSchByUni: function () {
        return ScholarshipModel.schByUni;
    },
    getSchByMajor: function () {
        return ScholarshipModel.schByMajor;
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
    fetchById: function (id, uni_id) {
        $.ajax({
            type: "GET",
            datatype: "JSON",
            url: "http://scholarship.ezytech.biz/index.php/mobile/scholarship/getList/" + id,
            crossDomain: true,
            success: function (data) {
                ScholarshipModel.scholarship = JSON.parse(data);
                ScholarshipView.renderDetail();
                RequirementModel.fetchBySchId(id);
                ScholarshipDetailModel.fetchBySchId(id);
                ContactModel.fetchByUniIdForSch(uni_id);                
            },
            error: function (error) {
                console.log('error ; ', error);
            }
        });
    },
    fetchByUniId: function (uni_id) {
        $.ajax({
            type: "GET",
            datatype: "JSON", 
            url: "http://scholarship.ezytech.biz/index.php/mobile/scholarship/getListByUni/" + uni_id,
            crossDomain: true,
            success: function (data) {
                ScholarshipModel.schByUni = JSON.parse(data);
                ScholarshipView.renderList();
            },
            error: function (error) {
                console.log('error ; ', error);
            }
        });
    }
    ,
    fetchByMajorId: function (m_id) {
        $.ajax({
            type: "GET",
            datatype: "JSON",
            url: "http://scholarship.ezytech.biz/index.php/mobile/scholarship/getListByMajor/" + m_id,
            crossDomain: true,
            success: function (data) {
                ScholarshipModel.schByMajor = JSON.parse(data);
                ScholarshipView.renderListByMajor();
            },
            error: function (error) {
                console.log('error ; ', error);
            }
        });
    }
};