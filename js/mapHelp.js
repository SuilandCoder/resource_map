// import {featureOutFields} from "./const"
function my_addLayer(map, layer_url, layerId, symbolUrl, tabId, attr_val, vueObj) {
    var cur_layer;
    var myOutFields;
    if (tabId === '0') {
        myOutFields = featureOutFields['company'];
    } else {
        myOutFields = featureOutFields[attr_val];
    }
    console.log("myOutFields:", myOutFields);
    if (map && map.getLayer(layerId) === undefined) {

        cur_layer = new esri.layers.FeatureLayer(layer_url, {
            id: layerId,
            outFields: myOutFields,
            mode: esri.layers.FeatureLayer.MODE_AUTO
        });
        var pictureMarkerSymbol = new MyPictureMarkerSymbol(symbolUrl, 25, 25);
        var renderer = new MySimpleRenderer(pictureMarkerSymbol);

        if (tabId === "0") {
            cur_layer.setDefinitionExpression("类型=" + "'" + attr_val + "'");
        }
        map.addLayer(cur_layer);
        cur_layer.setRenderer(renderer);
        cur_layer.on("click", evt => {
            console.log("layer select:", evt);
            if (evt.graphic && evt.graphic.attributes) {
                vueObj.featureInfo = evt.graphic.attributes;
                vueObj.featureShow = true;
            }else{
                alert("请求数据失败");
                vueObj.featureShow = false;
            }
        })
    } else if (map && map.getLayer(layerId)) {
        cur_layer = map.getLayer(layerId);
        cur_layer.show();
    }
    return cur_layer;
}

function my_removeLayer(map, layerId) {
    if (map && map.getLayer(layerId) !== undefined) {
        // map.removeLayer(map.getLayer(layerId));
        map.getLayer(layerId).hide();
    }
}

function render_heatmap(map, layerId) {
    if (!map || map.getLayer(layerId) === undefined) {
        return
    }
    var cur_layer = map.getLayer(layerId);
    var heatmapRenderer = new MyHeatmapRenderer({
        blurRadius: 15,
        // colors: ["rgba(0, 0, 255, 0)","rgb(0, 0, 255)","rgb(255, 0, 255)", "rgb(255, 0, 0)"],
        maxPixelIntensity: 80,
        minPixelIntensity: 5
    });
    heatmapRenderer.setColorStops([{
            ratio: 0,
            color: "rgba(255, 50, 0, 0)"
        },
        {
            ratio: 0.6,
            color: "rgba(255, 100, 0, 0.5)"
        },
        {
            ratio: 0.85,
            color: "rgba(255, 150, 0, 0.5)"
        },
        {
            ratio: 0.95,
            color: "rgba(255, 200, 0, 0.5)"
        }
    ]);
    cur_layer.setRenderer(heatmapRenderer);
}


function render_simple(map, layerId, symbolUrl) {
    if (!map || map.getLayer(layerId) === undefined) {
        return
    }
    var cur_layer = map.getLayer(layerId);
    cur_layer.setRenderer(null);
    // cur_layer.styling = false;
    // cur_layer.renderer = null;
    // cur_layer.refresh()

    var pictureMarkerSymbol = new MyPictureMarkerSymbol(symbolUrl, 25, 25);
    var renderer = new MySimpleRenderer(pictureMarkerSymbol);
    cur_layer.setRenderer(renderer);
    cur_layer.refresh();
}