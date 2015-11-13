
$(function () {
    $(document).delegate($("#major-list"), "click", function () {
        MajorModel.fetch();
    });
});



