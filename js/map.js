var dxh_map;
var MyPictureMarkerSymbol;
var MySimpleRenderer;
var MyHeatmapRenderer;
require(["esri/map",
        "esri/layers/ArcGISTiledMapServiceLayer",
        "esri/SpatialReference",
        "esri/layers/FeatureLayer",
        "esri/renderers/HeatmapRenderer",
        "esri/symbols/PictureMarkerSymbol",
        "esri/renderers/SimpleRenderer",
        "esri/layers/GraphicsLayer",
        "esri/layers/ArcGISDynamicMapServiceLayer",
        "esri/layers/DataAdapterFeatureLayer"
    ],
    function (Map, ArcGISTiledMapServiceLayer, SpatialReference, FeatureLayer, HeatmapRenderer,PictureMarkerSymbol,SimpleRenderer,GraphicsLayer,ArcGISDynamicMapServiceLayer,DataAdapterFeatureLayer) {
        dxh_map = new Map("mapBox", {
            fadeOnZoom: true,
            autoResize: true,
            logo: false,
            sliderPosition: 'bottom-right',
            // slider:false // 隐藏zoom等控件·  
        })
        var base_layer = new ArcGISTiledMapServiceLayer(map_service_url.baseMap);

        var test_layer = new DataAdapterFeatureLayer("http://219.140.192.142:6080/arcgis/rest/services/东西湖产业地图/东西湖产业地图/MapServer/1");
        // test_layer.setDefinitionExpression("类型=大健康");

        MyPictureMarkerSymbol = PictureMarkerSymbol;
        MySimpleRenderer = SimpleRenderer;
        MyHeatmapRenderer = HeatmapRenderer;
        dxh_map.addLayer(base_layer);

        dxh_map.addLayer(test_layer);

        // dxh_map.on("click", function (ev) {
        //     console.log(ev);
        //     var lat = Math.round(ev.mapPoint.getLatitude() * 1000) / 1000;
        //     var lon = Math.round(ev.mapPoint.getLongitude() * 1000) / 1000;
        //     // alert(lat + "," + lon);
        // });
        // console.log("spr:", dxh_map);
        var mapPoint = new esri.geometry.Point(114.1308, 30.6220, new SpatialReference({
            wkid: 4490
        }));
        dxh_map.centerAndZoom(mapPoint, 3);
    })