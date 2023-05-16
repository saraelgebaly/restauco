const dark = document.getElementById("dark");
const body = document.querySelector("body");
dark.onclick= function(){
    dark.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
}

let map;

async function initMap() {
 
  const position = { lat: 30.1197986, lng: 31.537000300000045 };
 
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 8,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position:{lat:29.962696,lng:31.276942},
    title: "Uluru",
  });
}

initMap();