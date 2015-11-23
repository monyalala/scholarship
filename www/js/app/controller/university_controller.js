var UniversityController = {
    get: function () {
        var universities = UniversityModel.getUniversity();
        var $element = $("#list-university");
        $element.html = "";
        $.map(universities, function (university) {
            UniversityView.renderList($element, university);
        });
    }
};