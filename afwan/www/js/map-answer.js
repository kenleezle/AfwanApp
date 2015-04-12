$(document).ready(function () {
    var map = new GMaps({
        div: '#map-canvas',
        lat: 24.522807,
        lng: 54.435447,
        zoom: 14,
        zoomControl: true,
        zoomControlOpt: {
            style: 'SMALL',
            position: 'TOP_LEFT'
        },
        panControl: false
    });

	map.drawRoute({
        origin: [24.522807, 54.435447],
        destination: [24.540274, 54.421541],
        travelMode: 'driving',
        strokeColor: '#9C59B8',
        strokeOpacity: 0.6,
        strokeWeight: 6
	});
});
// function CheckRes(x){
//           $.ajax({url:'http://ec2-54-149-21-125.us-west-2.compute.amazonaws.com/res/check/',
//           type:"POST",
          
//           data:'{"respondID":4, "approved":'+x+'}',
//           success: function(){location.href="map.html";},
//           });
// }    
