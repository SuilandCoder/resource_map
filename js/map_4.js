require(["esri/Map", "esri/views/MapView", "esri/widgets/Zoom", "esri/layers/TileLayer"], function (Map, MapView,
    Zoom, TileLayer) {
    var map = new Map();

    var view = new MapView({
        container: "mapBox",
        map: map,
        // center: [-118.805, 34.027], // longitude, latitude
        zoom: 13,
        constraints: {
            snapToZoom: false
        },
    });
    view.ui.empty("top-left");
    const zoom = new Zoom({
        view: view,
        container: zoom_widg
    });
    var base_layer = new TileLayer({
        url: "http://58.49.165.89:8010/ServiceAdapter/MAP/%E7%94%B5%E5%AD%90%E5%9C%B0%E5%9B%BE%EF%BC%88%E5%AE%A1%E5%9B%BE%E7%89%88%EF%BC%89/07769b53b5243b7d6aea9df803f471c1"
    });
    map.layers.add(base_layer)
    // Add the widget to the top-right corner of the view
    view.ui.add(zoom, "bottom-right");

});