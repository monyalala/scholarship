var RequirementView = {
    renderList: function () {
        var req = RequirementModel.getRequirements();
        AppTemplate.process("requirement.html", {req: req}, function (content) {
            $("#list-requirements").html(content);
            $("#list-requirements").trigger('create');
        });
    }
};