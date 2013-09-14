// This is where you can place your Javascript code

function MButton1Click(event) {
    alert('hola');
}

function MMap1Load(event) {
   // $('#MMap1').
}

function MPage1Load(event) {
    alert('asdf');
   var geocoder = new google.maps.Geocoder(),
var geocoderRequest = { address: 'The address you want to go to' };
geocoder.geocode(geocoderRequest, function(geocoderResult, geocoderStatus){
    if (geocoderStatus == google.maps.GeocoderStatus.OK)
    {
        ComponentName_map.panTo(geocoderResult[0].geometry.location);
    }
});

}
