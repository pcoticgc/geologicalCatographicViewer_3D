
import Perspective_3d_2D from "./classes/classPerspective_3d_2DTest.js";

/* Create map and make style */
mapboxgl.accessToken = "pk.eyJ1IjoidG9uaWxvZ2FyIiwiYSI6ImNqYjZlamY1dzBtMXEzM3FxbmppeXBpeHoifQ.DbzKh1wtO4p4QOUjj9eg1w";

var map = new mapboxgl.Map({
    container: "map",
    /* style: "https://geoserveis.icgc.cat/contextmaps/icgc.json", */
    /* style: "mapbox://styles/mapbox/streets-v11", */
    /* style: 'https://geoserveis.icgc.cat/contextmaps/osm-bright.json' */
    /* style: 'https://tilemaps.icgc.cat/tileserver/styles/orto.json', maxZoom: 19,*/
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [1.380, 41.25],
    /* pitchWithRotate: false,
    dragRotate: false, */
    maxZoom: 25,
    minZoom: 1.65,
    /* pitch: 50, */
    zoom: 8.4
});
console.log("map.getPitch");