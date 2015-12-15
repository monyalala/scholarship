var App = {
    DB_SIZE: 10 * 1024 * 1024,
    DB_NAME: 'scholarship_db',
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    resetDB: function (){
        persistence.reset();
        persistence.schemaSync();
    },
    onDeviceReady: function () {
        connectionDB(App.DB_NAME, App.DB_SIZE); 
        createTable();
        UniversityModel.fetch();
    	//PushbotsPlugin.initialize("5660536f17795926588b4567");        
    }
};

App.initialize();
