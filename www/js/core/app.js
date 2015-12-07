var App = {
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        UniversityModel.fetch();
    	//PushbotsPlugin.initialize("5660536f17795926588b4567");        
    }
};

App.initialize();
