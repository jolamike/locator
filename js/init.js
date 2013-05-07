$(document).ready(function () {
    document.addEventListener("deviceready", onDeviceReady, false);
    jQuery.support.cors = true; //Cross-Origin Resource Sharing
});

// phonegap is initialised
function onDeviceReady() {
    $("#welcomeMsg").append("Geo-locator...Ready");
}

function showAlert(msg) {
    navigator.notification.alert(
                    msg, // message
                    alertDismissed, // callback
                    'Alert', // title
                    'Done'  // buttonName
                    );
}

function showError(error, otherInfo) {
    var element = document.getElementById('errorMessage');
    element.innerHTML = "Errors: " + error.Message + "<br>" + (otherInfo ? otherInfo : "");
}




function getSingle() {
    var longcentre = "3.355";
    var latcentre = "6.602";
    var locname = "hotel";
    var searchrad = "10";


    var jqxhr = $.ajax({
        url: 'http://realestatewcf.com.m6.net/GetEmployees.svc/?lat1='+latcentre+'&long1='+longcentre+'&srad='+searchrad+'&lname='+locname+'',
         // url: '../Service1/?lat1=6.602&long1=3.355&srad=5.5&lname=bank',
        type: 'GET',
        //headers:
        beforeSend: function (xhr) {
            //xhr.overrideMimeType('text/plain; charset=x-user-defined');
        },
        dataType: 'json',
        contentType: 'application/json; charset=utf-8'
    })
    .done(function (data) {
        var element = document.getElementById('getSingleCall');
        element.innerHTML = JSON.stringify(data, null, "\t");
    })
    .fail(function (xhr, status, error) { showError(error); })
    .always(function () { showAlert("complete"); });
}