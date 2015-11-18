
$(function () {
    $(document).delegate($("#list-university"), "click", function () {
        UniversityModel.fetch();
    });
});



