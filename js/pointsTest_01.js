
var circleRadius = 6;
map.on('load', function() {       ////////////////// Bucharest points //////////////////////////////////////
    ////////////////// Green points //////////////////////////////////////
    map.addSource("VERDE_punts_no_aquifer", {
      "type": "vector",
      "tiles": ["https://tilemaps.icgc.cat/tileserver/tileserver.php/VERDE_punts_no_aquifer/{z}/{x}/{y}.pbf"],
     /*  "minzoom": 0,
      "maxzoom": 14  */
      "maxzoom": 7
  });       
  map.addLayer({
      "id": "Non aquifer motion points",
      "source": "VERDE_punts_no_aquifer",
      "source-layer": "VERDE_punts_no_aquifer",
      "type": "circle",
      "layout": {
      "visibility": "visible"
      },
        'paint': {
            "circle-radius": circleRadius,
            "circle-color": [
            "case",
                ["<",  ["get", "VEL"], -15], "rgba(226,26,28, 1)",
                [">=", ["get", "VEL"], -15] && ["<=", ["get", "VEL"], -12], "rgba(239,117,16, 1)",
                [">=", ["get", "VEL"], -12] && ["<=", ["get", "VEL"], -9], "rgba(250,209,5, 1)",
                [">=", ["get", "VEL"], -9]  && ["<=", ["get", "VEL"], -6], "rgba(255,243,24, 1)",
                [">=", ["get", "VEL"], -6]  && ["<=", ["get", "VEL"], -3], "rgba(174,255,0, 1)",
                /* [">=", ["get", "VEL"], -3]  && ["<=", ["get", "VEL"], 3], "rgba(4,255,0, 1)", */
                [">=", ["get", "VEL"], 3]  && ["<=", ["get", "VEL"], 6], "rgba(2,255,130, 1)",
                [">=", ["get", "VEL"], 6]  && ["<=", ["get", "VEL"], 9], "rgba(1,255,203, 1)",
                [">=", ["get", "VEL"], 9]  && ["<=", ["get", "VEL"], 12], "rgba(1,210,251, 1)",
                [">=", ["get", "VEL"], 12] && ["<=", ["get", "VEL"], 15], "rgba(0,121,246, 1)",
                [">",  ["get", "VEL"], 15], "rgba(1,32,244, 1)",
                "rgba(4,255,0, 1)" //Range between -3 y 3 
            ]
        }
    });
    ////////////////// Green points ////////////////////////////id//////////
    ////////////////// Blue points //////////////////////////////////////
    map.addSource("Pous_Catalunya_reduitBlue", {
      "type": "vector",
      "tiles": ["https://tilemaps.icgc.cat/tileserver/tileserver.php/Pous_Catalunya_reduitBlue/{z}/{x}/{y}.pbf"],
      /* "minzoom": 0,
      "maxzoom": 14  */
      "maxzoom": 7
  });

  map.addLayer({
      "id": "Declared wells",
      "source": "Pous_Catalunya_reduitBlue",
      "source-layer": "Pous_Catalunya_reduitBlue",
      "type": "circle",
      "layout": {
      "visibility": "visible"
      },
        'paint': {
            "circle-radius": circleRadius,
            "circle-color": [
            "case",
                ["<",  ["get", "VEL"], -15], "rgba(226,26,28, 1)",
                [">=", ["get", "VEL"], -15] && ["<=", ["get", "VEL"], -12], "rgba(239,117,16, 1)",
                [">=", ["get", "VEL"], -12] && ["<=", ["get", "VEL"], -9], "rgba(250,209,5, 1)",
                [">=", ["get", "VEL"], -9]  && ["<=", ["get", "VEL"], -6], "rgba(255,243,24, 1)",
                [">=", ["get", "VEL"], -6]  && ["<=", ["get", "VEL"], -3], "rgba(174,255,0, 1)",
                /* [">=", ["get", "VEL"], -3]  && ["<=", ["get", "VEL"], 3], "rgba(4,255,0, 1)", */
                [">=", ["get", "VEL"], 3]  && ["<=", ["get", "VEL"], 6], "rgba(2,255,130, 1)",
                [">=", ["get", "VEL"], 6]  && ["<=", ["get", "VEL"], 9], "rgba(1,255,203, 1)",
                [">=", ["get", "VEL"], 9]  && ["<=", ["get", "VEL"], 12], "rgba(1,210,251, 1)",
                [">=", ["get", "VEL"], 12] && ["<=", ["get", "VEL"], 15], "rgba(0,121,246, 1)",
                [">",  ["get", "VEL"], 15], "rgba(1,32,244, 1)",
                "rgba(4,255,0, 1)" //Range between -3 y 3 
            ]
        }
    });
    ////////////////// Blue points //////////////////////////////////////
    ////////////////// Red points //////////////////////////////////////   
    map.addSource("ROJO_punts_aquifer_detectats", {
      "type": "vector",
      "tiles": ["https://tilemaps.icgc.cat/tileserver/tileserver.php/ROJO_punts_aquifer_detectats/{z}/{x}/{y}.pbf"],
     /*  "minzoom": 0,
      "maxzoom": 14  */
      "maxzoom": 7
  });
  map.addLayer({
      "id": "Aquifer motion points",
      "source": "ROJO_punts_aquifer_detectats",
      "source-layer": "ROJO_punts_aquifer_detectats",
      "type": "circle",
      "layout": {
      "visibility": "visible"
      },
        'paint': {
            "circle-radius": circleRadius,
            "circle-color": [
            "case",
                ["<",  ["get", "VEL"], -15], "rgba(226,26,28, 1)",
                [">=", ["get", "VEL"], -15] && ["<=", ["get", "VEL"], -12], "rgba(239,117,16, 1)",
                [">=", ["get", "VEL"], -12] && ["<=", ["get", "VEL"], -9], "rgba(250,209,5, 1)",
                [">=", ["get", "VEL"], -9]  && ["<=", ["get", "VEL"], -6], "rgba(255,243,24, 1)",
                [">=", ["get", "VEL"], -6]  && ["<=", ["get", "VEL"], -3], "rgba(174,255,0, 1)",
                /* [">=", ["get", "VEL"], -3]  && ["<=", ["get", "VEL"], 3], "rgba(4,255,0, 1)", */
                [">=", ["get", "VEL"], 3]  && ["<=", ["get", "VEL"], 6], "rgba(2,255,130, 1)",
                [">=", ["get", "VEL"], 6]  && ["<=", ["get", "VEL"], 9], "rgba(1,255,203, 1)",
                [">=", ["get", "VEL"], 9]  && ["<=", ["get", "VEL"], 12], "rgba(1,210,251, 1)",
                [">=", ["get", "VEL"], 12] && ["<=", ["get", "VEL"], 15], "rgba(0,121,246, 1)",
                [">",  ["get", "VEL"], 15], "rgba(1,32,244, 1)",
                "rgba(4,255,0, 1)" //Range between -3 y 3 
            ]
        }
    });
    ////////////////// Red points //////////////////////////////////////
}); 
