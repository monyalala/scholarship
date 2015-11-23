var ContactView = {
    renderListForSch: function () {
        var contact = ContactModel.getContacts();
        AppTemplate.process("contact_for_sch.html", {contact: contact}, function (content) {
            $("#list-contacts").html(content);
            $("#list-contacts").trigger('create');
        });
    }
};