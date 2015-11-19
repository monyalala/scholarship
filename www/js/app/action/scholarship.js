
$(function () {
//    $("#scholarship-listview").on("click", function(){
//        console.log("this : ", $(this) );
//    });
//    $(document).delegate($("#scholarship-listview li"), "click", function () {
////        console.log('this : ', $(this))
//        var id = $("#scholarship-listview li").attr("data-id");
//        console.log("id : ", id);
//        ScholarshipModel.fetchById(id);
//    });
});
//function getId(element){
//    console.log("element : ", $(element).attr("data-id"));
//    var id = $(element).attr("data-id");
//    ScholarshipModel.fetchById(id);
//}

$(function(){
    $("#scholarship-tab").on("click",function(){
        $("#header-title").text("អាហារូបករណ៍");
    });
    $(document).delegate($("#list-scholarships"), "click", function () {
        ScholarshipModel.fetch();
    });
    
});
    


