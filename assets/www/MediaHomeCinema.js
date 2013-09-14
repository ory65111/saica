var HomeCinemaPage=new Object(Object);

$(document).ready(function(event) {

});
function HomeCinemaPageJSLoad(event)
{

   var event = event || window.event;
   var params=null;
        //begin js

        screen = document.getElementById('mScreen');

        // Hide the fullscreen button unless the code it uses is available (WebKit).
        if(typeof screen.webkitEnterFullScreen !== "function")
        {
          $('#bFullscreen_outer').css("visibility", "hidden");
        }

        //end
        
}

function bFullscreenJSClick(event)
{

  var event = event || window.event;
  var params=null;
        //begin js
        screen.webkitEnterFullScreen();
        //end
        
}

function loadElephantsDreamWrapper(event, hiddenfield, submitvalue, wrappedfunc)
{

var event = event || window.event;
submit1=true;
submit2=true;
if (typeof(wrappedfunc) == 'function') submit1=wrappedfunc(event);
form = hiddenfield.form;
if ((form) && (form.onsubmit) && (typeof(form.onsubmit) == 'function')) submit2=form.onsubmit();
if ((submit1) && (submit2)) { hiddenfield.value = submitvalue; form.submit(); }
return false;

}

function loadBigBuckBunnyWrapper(event, hiddenfield, submitvalue, wrappedfunc)
{

var event = event || window.event;
submit1=true;
submit2=true;
if (typeof(wrappedfunc) == 'function') submit1=wrappedfunc(event);
form = hiddenfield.form;
if ((form) && (form.onsubmit) && (typeof(form.onsubmit) == 'function')) submit2=form.onsubmit();
if ((submit1) && (submit2)) { hiddenfield.value = submitvalue; form.submit(); }
return false;

}

function loadSintelWrapper(event, hiddenfield, submitvalue, wrappedfunc)
{

var event = event || window.event;
submit1=true;
submit2=true;
if (typeof(wrappedfunc) == 'function') submit1=wrappedfunc(event);
form = hiddenfield.form;
if ((form) && (form.onsubmit) && (typeof(form.onsubmit) == 'function')) submit2=form.onsubmit();
if ((submit1) && (submit2)) { hiddenfield.value = submitvalue; form.submit(); }
return false;

}

