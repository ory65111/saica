var HideAndSeekPage=new Object(Object);

$(document).ready(function(event) {
function Geolocation_Init() {
	 Geolocation_ID = navigator.geolocation.watchPosition(GeolocationJSChange, GeolocationJSError, {enableHighAccuracy: true, timeout: 10000, maximumAge: 10000});

  }

Geolocation_Init();

});
function HideAndSeekPageJSLoad(event)
{

   var event = event || window.event;
   var params=null;
        //begin js

        // Global variables.
        window.ifMap          = $('#ifMap');
        window.lMessage       = $('#lMessage');
        window.bHide          = $('#bHide');
        window.bShow          = $('#bShow');
        window.lAccuracy      = $('#lAccuracy');
        window.lAccuracyOuter = $('#lAccuracy_outer');
        window.lastLatitude   = null;
        window.lastLongitude  = null;
        window.iStatus        = $('#iStatus');
        window.invisible      = 'im-invisible-user.png';
        window.visible        = 'im-user.png';

        // Functions.

        // Update the content of the IFrame, so it points to the provided location.
        window.updateMap = function(latitude, longitude) {
          window.ifMap.attr("src", getOSM(latitude, longitude));
        }

        // Get an OpenStreetMaps URL pointing to the given location.
        window.getOSM = function(latitude, longitude) {
          var url = 'http://www.openstreetmap.org/export/embed.html?bbox=' +
            (longitude - 0.0001) + ',' +
            (latitude  - 0.0001) + ',' +
            (longitude + 0.0001) + ',' +
            (latitude  + 0.0001) + ',' +
            '&amp;layer=mapnik&amp;marker=' +
            latitude + ',' +
            longitude;
          return url;
        }

        // Hide accuracy label.
        window.hideAccuracy = function() {
          window.lAccuracyOuter.css("visibility", "hidden");
        }

        // Show accuracy value.
        window.showAccuracy = function(accuracy) {
          window.lAccuracyOuter.css("visibility", "visible");
          window.lAccuracy.html('Accuracy: ' + accuracy + ' meters.');
        }

        // Update the message above the map.
        window.updateMessage = function(newMessage) {
          window.lMessage.html(newMessage);
        }

        // Change status icon.
        window.setStatus = function(imagepath) {
          window.iStatus.attr("src", 'images/' + imagepath);
        }

        // Code to be actually run upon page load.
        hideAccuracy();

        //end
        
}

function bHideJSClick(event)
{

  var event = event || window.event;
  var params=null;
      //begin js
      // Hide only if currently visible.
      if (window.lastLatitude != null)
      {
        GeolocationDeactivate();

        window.lastLatitude  = null;
        window.lastLongitude = null;
        window.ifMap.attr("src", "");
        setStatus(invisible);
        hideAccuracy();

        updateMessage('Why did you hide? I want to see you!');
      }
      //end
      
}

function bShowJSClick(event)
{

  var event = event || window.event;
  var params=null;
      //begin js
      // Show only if currently invisible.
      if (window.lastLatitude == null)
      {
        GeolocationActivate();
      }
      else
      {
        updateMessage('I can see you already.');
      }
      //end
      
}

function GeolocationJSChange(event)
{

  var event = event || window.event;
  var params=null;
        //begin js
        latitude = event.coords.latitude;
        longitude = event.coords.longitude;

        // Update map.
        updateMap(latitude, longitude);

        // Manage the message.
        if(window.lastLatitude == null)
        {
          // Map was not being displayed.
          updateMessage('There you are!');
        }
        else if(window.lastLatitude !== latitude || window.lastLongitude !== longitude)
        {
          // Position changed.
          updateMessage("You've just moved, didn't you?");
        }

        // Manage the accuracy label.
        if(event.coords.accuracy === undefined)
        {
          hideAccuracy();
        }
        else
        {
          showAccuracy(event.coords.accuracy);
        }

        // Manage status icon.
        setStatus(visible);

        // Update last values.
        window.lastLatitude =  latitude;
        window.lastLongitude = longitude;
        //end
        
}

function GeolocationJSError(event)
{

  var event = event || window.event;
  var params=null;
        //begin js
        if(event.code === event.UNKNOWN_ERROR)
        {
          updateMessage('Not sure of what happened, but I still cannot see you :(');
        }
        else if(event.code === event.PERMISSION_DENIED)
        {
          updateMessage("Why won't you let me see you?");
          bHide.attr("disabled", true);
          bShow.attr("disabled", true);
        }
        else if(event.code === event.POSITION_UNAVAILABLE)
        {
          updateMessage("No one knows where you are!");
        }
        else if(event.code === event.TIMEOUT)
        {
          if(window.ifMap.attr("src") == "")
            updateMessage("I got tired of looking for you, I pass.");
          else // If visible, skip. (solves Firefox's timeout issue)
            return;
        }

        window.lastLatitude  = null;
        window.lastLongitude = null;
        window.ifMapattr("src", "");
        setStatus(invisible);
        hideAccuracy();
        //end
        
}

var Geolocation_ID = null;
      var GeolocationActivate=function(options) {
        var options = options || {enableHighAccuracy: true, timeout: 10000, maximumAge: 10000}
        Geolocation_ID = navigator.geolocation.watchPosition(GeolocationJSChange, GeolocationJSError,options);
        };

      var GeolocationRetrieve=function(options) {
        var options = options || {enableHighAccuracy: true, timeout: 10000, maximumAge: 10000}
        Geolocation_ID = navigator.geolocation.getCurrentPosition(GeolocationJSChange, GeolocationJSError,options);
        };
      
      var GeolocationDeactivate=function() {
        navigator.geolocation.clearWatch(Geolocation_ID);
        Geolocation_ID = null;
      }
      