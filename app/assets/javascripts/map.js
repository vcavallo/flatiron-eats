var map;
$(".meals.index").ready (function(){
  $.getJSON('/meals', function(data){
    insertMap(40.705329, -74.013970, data, insertMealsPins)
  });
});

$(".restaurants.index").ready (function(){
  $.getJSON('/restaurants', function(data){
    insertMap(40.705329, -74.013970, data, insertRestaurantPins);
  }); 
});


function insertMap(lat, lng, data, funk){
  var myLatlng = new google.maps.LatLng(40.705329, -74.013970);
  var mapCanvas = document.getElementById('map-canvas');
  var mapOptions = {
    center: new google.maps.LatLng(lat, lng),
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(mapCanvas, mapOptions);
  var img = "assets/logo.png";
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: img,
      title: 'Hello World!'
  });
  funk(map, data);
}



// function insertMealsMap(lat, lng, data){
//   var myLatlng = new google.maps.LatLng(40.705329, -74.013970);
//   var mapCanvas = document.getElementById('map-canvas');
//   var mapOptions = {
//     center: new google.maps.LatLng(lat, lng),
//     zoom: 16,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   };
//   var map = new google.maps.Map(mapCanvas, mapOptions);
//   var img = "assets/logo.png";
//   var marker = new google.maps.Marker({
//       position: myLatlng,
//       map: map,
//       icon: img,
//       title: 'Hello World!'
//   });
//   funk(map, data);
// }