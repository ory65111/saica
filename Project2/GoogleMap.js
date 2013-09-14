// This is where you can place your Javascript code

function MMap1Load(event) {
 var MMap1_uiMap =jQuery("#MMap1").gmap();
   var MMap1_googleMap = jQuery(MMap1_uiMap.gmap('get', 'map'));
   MMap1_googleMap[0].setCenter(new google.maps.LatLng(36.526570612940866, -6.205902099609375));
   MMap1_uiMap.gmap('addMarker', { 'position': '36.526570612940866,-6.205902099609375'});
}

function MButton1Click(event) {
    alert('Hola Mundo');
}
