var ContactView = {
    renderListForSch: function () {
        var contact = ContactModel.getContacts();
        AppTemplate.process("contact_for_sch.html", {contact: contact}, function (content) {
            $("#list-contacts").html(content);
            $("#list-contacts").trigger('create');
        });
    },
    renderListForSchMap: function () {
        var contact = ContactModel.getContacts();
        AppTemplate.process("contact_for_sch_map.html", {contact: contact}, function (content) {
            $("#contact-for-sch-map").html(content);
            $("#contact-for-sch-map").trigger('create');
        });
    }
};