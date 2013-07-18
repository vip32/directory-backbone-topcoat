var app = {
    views: {},
    models: {},
    routers: {},
    utils: {},
    adapters: {},

    initialize: function() {
        console.log('app initialize');
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        console.log('device ready');
        app.router = new app.routers.AppRouter();
        app.utils.templates.load(["HomeView",  "EmployeeView", "EmployeeListItemView", "ReportsView", "MapView"],
        function ()  {
            app.router = new app.routers.AppRouter();
             Backbone.history.start();
        });
    },
};

$(document).on("ready", function () {
    console.log('document ready');
    app.initialize();
});
