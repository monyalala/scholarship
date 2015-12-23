$(function () {
    $("#scholarship-tab").on("click", function () {
        $(".header-title-h2").text("អាហារូបករណ៍");
        $('.search-class').attr('id', 'search-sch');
    });
    $(document).delegate($("#list-scholarships"), "click", function () {
        ScholarshipModel.fetch();
    });
    $('#search-all').on('keyup', function () {
        var search = $('#search-all').val();
        ScholarshipModel.fetchSearch(search);
    });    

});
function set_favourite() {
    alert("set favourit");
}



