
$(function () {
    $(document).delegate($("#major-list"), "click", function () {
        MajorModel.fetch();
    });
    $("#major-list").on("click", function () {
        $(".header-title-h2").text("មុខជំនាញ");
        $('.search-class').attr('id', 'search-major');
    });
});



