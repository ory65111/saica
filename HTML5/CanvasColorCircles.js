var ColorCirclesPage=new Object(Object);

$(document).ready(function(event) {

ColorCircles_ctx = document.getElementById('ColorCircles').getContext('2d');
ColorCirclesJSPaint(ColorCircles_ctx);

});
function bUpdateJSClick(event)
{

   var event = event || window.event;
   var params=null;
        //begin js
        // Update drawing.
        ColorCirclesJSPaint(ColorCircles_ctx);
        //end
        
}

var ColorCircles_ctx;
function ColorCirclesJSPaint(event)
{

  var event = event || window.event;
  var params=null;
        //begin js

        // Get context and canvas component.
        context = event;
        canvas = $('#ColorCircles');

        // Clear the canvas. Useless on the first draw, but important on the next ones.
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Background circle.
        var backgroundFill = context.createRadialGradient(
          canvas.width()/2, canvas.height()/2, 0,
          canvas.width()/2, canvas.height()/2, (canvas.width()+canvas.height())/2
        );
        backgroundFill.addColorStop(0, $('#eInner').val());
        backgroundFill.addColorStop(1, $('#eOuter').val());
        context.fillStyle = backgroundFill;
        context.fillRect(0, 0, canvas.width(), canvas.height());

        // Top circle.
        context.beginPath();
        context.arc(canvas.width()/2, canvas.height()/3, 70, 0, 2 * Math.PI, false);
        context.fillStyle = $('#eTop').val();
        context.fill();
        context.closePath();

        // Left circle.
        context.beginPath();
        context.arc(canvas.width()/3, canvas.height()/3*2, 70, 0, 2 * Math.PI, false);
        context.fillStyle = $('#eLeft').val();
        context.fill();
        context.closePath();

        // Right circle.
        context.beginPath();
        context.arc(canvas.width()/3*2, canvas.height()/3*2, 70, 0, 2 * Math.PI, false);
        context.fillStyle = $('#eRight').val();
        context.fill();
        context.closePath();

        //end
        
}

        	function eTop_updatehidden(event)
            {
            	edit=$('#eTop').get(0);
                hidden=$('#eTop_hidden').get(0);
                hidden.value=edit.value;
                            }
        function JSKeyDown(event)
{

  var event = event || window.event;
  var params=null;
        //begin js
        // Update drawing after hitting Enter.
        if (event.keyCode == 13)
          ColorCirclesJSPaint(ColorCircles_ctx);
        //end
        
}

        	function eRight_updatehidden(event)
            {
            	edit=$('#eRight').get(0);
                hidden=$('#eRight_hidden').get(0);
                hidden.value=edit.value;
                            }
                	function eLeft_updatehidden(event)
            {
            	edit=$('#eLeft').get(0);
                hidden=$('#eLeft_hidden').get(0);
                hidden.value=edit.value;
                            }
        function bUpdateJSClick(event)
{

  var event = event || window.event;
  var params=null;
        //begin js
        // Update drawing.
        ColorCirclesJSPaint(ColorCircles_ctx);
        //end
        
}

function bSaveJSClick(event)
{

  var event = event || window.event;
  var params=null;
        //begin js
        window.location = $("#ColorCircles").get()[0].toDataURL("image/png");
        //end
        
}

        	function eInner_updatehidden(event)
            {
            	edit=$('#eInner').get(0);
                hidden=$('#eInner_hidden').get(0);
                hidden.value=edit.value;
                            }
                	function eOuter_updatehidden(event)
            {
            	edit=$('#eOuter').get(0);
                hidden=$('#eOuter_hidden').get(0);
                hidden.value=edit.value;
                            }
        