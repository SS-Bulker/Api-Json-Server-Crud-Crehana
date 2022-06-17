const divMap = document.getElementById("map");
const input = document.getElementById("place_input");
const coord = { lat: -4.0, lng: 36.0 };
let map;
let marker;
let autocomplete;
function initMap() {
    map = new google.maps.Map(divMap, {
        center: coord,
        zoom: 4,
    });
    marker = new google.maps.Marker({
        position: coord,
        map: map,
    });
    initAutoComplete();
}
function initAutoComplete() {
    autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', function () {
        const place = autocomplete.getPlace();
        map.setCenter(place.geometry.location);
        marker.setPosition(place.geometry.location);
    })

}