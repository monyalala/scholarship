$(function () {
    $("#scholarship-tab").on("click", function () {
        $("#header-title").text("អាហារូបករណ៍");
        $('.search-class').attr('id', 'search-sch');
    });
    $(document).delegate($("#list-scholarships"), "click", function () {
        ScholarshipModel.fetch();
    });
    
    $('body').on('click', '#scholarship-listview li', function(){
        var m_latlng = $(this).attr("data-uni-map");
        getMap('map-uni-sch',m_latlng);
    });

});



