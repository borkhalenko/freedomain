/* borkhalenko.freedomain.thehost.com.ua/geolocation/ */
function Coordinates(x, y, q) {
	this.latitude = x;
	this.longitude = y;
	this.accuracy = q;
}
var thisMap;
window.onload = function() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(displayLocation, displayErrors);
	} else {
		alert("Sorry, your browser doesn't support geolocation");
	}
};

function displayLocation(position) {
	var mapCenter = new Coordinates(50.46944680319378, 30.334997896047994);
	var myLocation = new Coordinates(position.coords.latitude, position.coords.longitude, position.coords.accuracy);
	//var myLatitude=position.coords.latitude;
	//var myLongitude=position.coords.longitude;
	//var centerLatitude=50.46944680319378;
	//var centerLongitude=30.334997896047994;
	//var coordAccuracy=position.coords.accuracy;
	//var div=document.getElementById("location");
	//div.innerHTML="You are at "+myLatitude+"  "+myLongitude;
	useMap(mapCenter, myLocation);
}

function displayErrors(error) {
	var errorTypes = {
		0: "unknown error",
		1: "permission denided by user",
		2: "permission is not available",
		3: "request timed out"
	};
	var errorMessage = errorTypes[error.code];
	if (error.code == 1 || error.code == 2) {
		errorMessage += " " + error.message;
	}
	var div = document.getElementById("location");
	div.innerHTML = errorMessage;
}

function useMap(center, mark) {
	var googleLatAndLong = new google.maps.LatLng(center.latitude, center.longitude);
	var googleMyPosition = new google.maps.LatLng(mark.latitude, mark.longitude);
	var mapOptions = {
		zoom: 13,
		center: googleLatAndLong,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var mapDiv = document.getElementById("map");
	thisMap = new google.maps.Map(mapDiv, mapOptions);
	var markerMyPosition = {
		position: googleMyPosition,
		map: thisMap,
		title: "I\'m there",
		clickable: true
	};
	var myPos = new google.maps.Marker(markerMyPosition);
	var infoWindowOptions = {
		content: "Точность: " + mark.accuracy + " м.",
		position: googleMyPosition
	};
	var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
	google.maps.event.addListener(myPos, "click", markerClick);

	function markerClick() {
		infoWindow.open(thisMap);
	}
}