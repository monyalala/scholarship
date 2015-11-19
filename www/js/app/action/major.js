
$(function () {
    $(document).delegate($("#major-list"), "click", function () {
        MajorModel.fetch();
    });
     $("#major-list").on("click",function(){
        $("#header-title").text("ជំនាញ");
        $('.search-class').attr('id','search-major');
    })
});



