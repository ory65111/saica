var Page1=new Object(Object);

$(document).ready(function(event) {

});
function Page1JSLoad(event)
{

   var event = event || window.event;
   var params=null;
        //begin js

        window.localIsSupported = function() {
          try {
            return 'localStorage' in window && window['localStorage'] !== null;
          } catch (e) {
            return false;
          }
        }

        window.sessionIsSupported = function() {
          try {
            return 'sessionStorage' in window && window['sessionStorage'] !== null;
          } catch (e) {
            return false;
          }
        }

        window.supported = function() {
          return localIsSupported() && sessionIsSupported();
        }

        window.pointInRectangle = function(point, rectangle) {
          if(
              point.x >= rectangle.x && point.x <= (rectangle.x + rectangle.w) &&
              point.y >= rectangle.y && point.y <= (rectangle.y + rectangle.h)
            )
          {
            return true;
          }
          else
          {
            return false;
          }
        }

        window.selectLanguage = function(langIndex, storageIndex) {
          // Select the right type of storage.
          var storage;
          var altStorage;
          if(!storageIndex)
          {
            storage = localStorage;
            altStorage = sessionStorage;
          }
          else
          {
            storage = sessionStorage;
            altStorage = localStorage;
          }

          // Remove from the additional storage if defined.
          altStorage.removeItem(langIndex);

          // Store or delete.
          var exists = storage.getItem(langIndex);
          if(exists != null && initialLoad == true)
          {
            storage.removeItem(langIndex);
            $("#" + labels[langIndex]).css("background-color", "white");
          }
          else
          {
            storage.setItem(langIndex, 'selected');
            $("#" + labels[langIndex]).css("background-color", storageColors[storageIndex]);
          }
        }

        window.selectStorage = function(oldIndex, newIndex) {
          // Unselect the previous storage.
          $("#" + labels[oldIndex]).css("background-color", "white");

          // Select the new storage.
          $("#" + labels[newIndex]).css("background-color", storageColors[newIndex]);
          window.storageType = newIndex;
        }

        window.parseClick = function(x, y) {

          // Storage types.
          for (var i = 0; i < 2; i++) {
            if(pointInRectangle({x: x, y: y}, rectangles[i]))
            {
              j = Math.abs(i-1);
              selectStorage(j, i);
              return true;
            }
          }

          // Programming languages.
          for (var i = 2; i < rectangles.length; i++) {
            if(pointInRectangle({x: x, y: y}, rectangles[i]))
            {
              selectLanguage(i, storageType);
              return true;
            }
          }

        }

        window.getRectangle = function(component) {

          var x = 0;
          var y = 0;
          var w = component.offsetWidth;
          var h = component.offsetHeight;

          while( component && !isNaN( component.offsetLeft ) && !isNaN( component.offsetTop ) ) {
              x += component.offsetLeft - component.scrollLeft;
              y += component.offsetTop - component.scrollTop;
              component = component.offsetParent;
          }

          return { x: x, y: y, w: w, h: h };
        }

        window.storageHandler = function(event) {
          event = event || window.event;

          // Item added.
          if(event.oldValue == null)
          {
            sessionStorage.removeItem(event.key); // Remove in case it was defined.
            $("#" + labels[event.key]).css("background-color", storageColors[0]);
          }

          // Item deleted.
          if(event.newValue == null)
          {
            $("#" + labels[event.key]).css("background-color", "white");
          }

          // Note: no value changes expected.
        }

        window.initialLoad = false; // Lock.

        // Check support.
        if(!supported())
          alert('Your web browser does not support HTML5 Local and Session Storage.');

        // Define clickable labels.
        window.labels = ['lLocal', 'lSession',
                         'lPHP', 'lDelphi', 'lCpp',
                         'lJavaScript', 'lJava', 'lRuby',
                         'lPython', 'lPerl', 'lVisualBasic',
                         'lC', 'lObjectiveC', 'lCSharp'];

        // Get their rectangle.
        window.rectangles = new Array();
        for (var i = 0; i < labels.length; i++) {
          rectangles[i] = getRectangle($("#" + labels[i]).get()[0]);
        }

        // Define storage colors.
        window.storageColors = Array();
        storageColors[0] = 'lightgreen'; // Local Storage.
        storageColors[1] = 'coral'; // Session Storage.

        // Load already stored values.
        for (var i = 0; i < localStorage.length; i++) {
          selectLanguage(localStorage.key(i), 0);
        }
        for (var i = 0; i < sessionStorage.length; i++) {
          selectLanguage(sessionStorage.key(i), 1);
        }

        // Select the default storage method:
        selectStorage(1, 0); // Local Storage.

        // Event listener for changes.
        if (window.addEventListener) {
          window.addEventListener("storage", storageHandler, false);
        } else {
          window.attachEvent("onstorage", storageHandler);
        };

        window.initialLoad = true;

        //end
        
}

function JSClick(event)
{

  var event = event || window.event;
  var params=null;
        //begin js
        parseClick(event.clientX, event.clientY);
        //end
        
}

