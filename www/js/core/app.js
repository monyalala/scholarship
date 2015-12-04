var App = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
    	PushbotsPlugin.initialize("5660536f17795926588b4567");
        UniversityModel.fetch();
    }
};

App.initialize();
