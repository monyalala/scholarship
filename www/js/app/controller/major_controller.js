var MajorController = {
//    get: function () {
//        var majors = MajorModel.getMajors();
//        var $element = $("#list-majors");
//        $element.html = "";
//        $.map(majors, function (major) {
//            MajorView.renderList($element, major);
//        });
//    }

    get: function () {
        MajorModel.fetch();
        MajorModel.getMajors(function (majors) {
            MajorofflineModel.add(majors);
            MajorView.renderList(majors);
        }, function (error) {
            console.log("error:", error);
        }
        );
    },
    sync : function (majors){
        MajorofflineModel.fetchAll(function(oldMajors){
            console.log("oldMajors :", oldMajors.length);
            MajorofflineModel.update(oldMajors, majors);
        });
    }
};