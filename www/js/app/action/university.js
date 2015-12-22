
$(function () {
    $(document).delegate($("#list-university"), "click", function () {
        UniversityModel.fetch();
    });
    $("#university-tab").on("click", function () {
        $(".header-title-h2").text("សាកលវិទ្យាល័យ");
        $('.search-class').attr('id', 'search-university');
    });        
//    $('body').on('click', '#university-listview li', function(){          
//        //var m_latlng = $(this).attr("data-uni-map");
//        var id = $(this).attr("data-id");
//        UniversityModel.fetchById(id);        
//    });
    
});




