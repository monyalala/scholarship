var ContactModel = {
    contacts: [],
    getContacts: function () {
        return ContactModel.contacts;
    },
    fetchByUniIdForSch: function (uni_id) {
        $.ajax({
            type: "GET",
            datatype: "JSON",
            url: "http://scholarship.ezytech.biz/index.php/mobile/contact/getListByUni/"+uni_id,
            crossDomain: true,
            success: function (data) {                
                ContactModel.contacts = JSON.parse(data);                
                ContactView.renderListForSch();
            },
            error: function (error) {
                console.log('error ; ', error);
            }
        });
    }
};