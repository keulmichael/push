document.addEventListener('deviceready', onDeviceReady, false);


function onDeviceReady (){alert('deviceready');


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
}

