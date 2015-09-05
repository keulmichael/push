
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {alert('deviceready');
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
var pushNotification = window.plugins.pushNotification;

pushNotification.register(
    successHandler, 
    errorHandler, 
    {
        'senderID':'651586884852',
        'ecb':'onNotificationGCM' // callback function
    }
);
    },

    function successHandler(result) {
    alert('Success: '+ result);
}


function errorHandler(error) {
    alert('Error: '+ error);
}
};

app.initialize();
