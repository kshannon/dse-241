// <!DOCTYPE html>
// <head>
//     <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
//     <script>L_PREFER_CANVAS = false; L_NO_TOUCH = false; L_DISABLE_3D = false;</script>
//     <script src="https://cdn.jsdelivr.net/npm/leaflet@1.2.0/dist/leaflet.js"></script>
//     <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
//     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.js"></script>
//     <script type="text/javascript" src="tripdata.json"></script>
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet@1.2.0/dist/leaflet.css" />
//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" />
//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css" />
//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.css" />
//     <link rel="stylesheet" href="https://rawgit.com/python-visualization/folium/master/folium/templates/leaflet.awesome.rotate.css" />
//     <style>html, body {width: 100%;height: 100%;margin: 0;padding: 0;}</style>
//     <style>#map {position:absolute;top:0;bottom:0;right:0;left:0;}</style>
//
//             <style> #map_c719de9ea5a34ac2b96363b99c172fbb {
//                 position : relative;
//                 width : 100.0%;
//                 height: 100.0%;
//                 left: 0.0%;
//                 top: 0.0%;
//                 }
//             </style>
//
//     <script src="https://rawgit.com/socib/Leaflet.TimeDimension/master/dist/leaflet.timedimension.min.js"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/heatmap.js/2.0.2/heatmap.min.js"></script>
//     <script src="https://rawgit.com/pa7/heatmap.js/develop/plugins/leaflet-heatmap/leaflet-heatmap.js"></script>
//     <link rel="stylesheet" href="http://apps.socib.es/Leaflet.TimeDimension/dist/leaflet.timedimension.control.min.css" />
//

function heatmapVisual() {

                var TDHeatmap = L.TimeDimension.Layer.extend({

            initialize: function(data, options) {
                var heatmapCfg = {
                    radius: 15,
                    maxOpacity: 1.,
                    scaleRadius: false,
                    useLocalExtrema: false,
                    latField: 'lat',
                    lngField: 'lng',
                    valueField: 'count',
                    defaultWeight : 1,
                };
                heatmapCfg = $.extend({}, heatmapCfg, options.heatmapOptions || {});
                var layer = new HeatmapOverlay(heatmapCfg);
                L.TimeDimension.Layer.prototype.initialize.call(this, layer, options);
                this._currentLoadedTime = 0;
                this._currentTimeData = {
                    data: []
                    };
                this.data= data;
                this.defaultWeight = heatmapCfg.defaultWeight || 1;
            },
            onAdd: function(map) {
                L.TimeDimension.Layer.prototype.onAdd.call(this, map);
                map.addLayer(this._baseLayer);
                if (this._timeDimension) {
                    this._getDataForTime(this._timeDimension.getCurrentTime());
                }
            },
            _onNewTimeLoading: function(ev) {
                this._getDataForTime(ev.time);
                return;
            },
            isReady: function(time) {
                return (this._currentLoadedTime == time);
            },
            _update: function() {
                this._baseLayer.setData(this._currentTimeData);
                return true;
            },
            _getDataForTime: function(time) {
                    delete this._currentTimeData.data;
                    this._currentTimeData.data = [];
                    var data = this.data[time-1];
                    for (var i = 0; i < data.length; i++) {
                        this._currentTimeData.data.push({
                                lat: data[i][0],
                                lng: data[i][1],
                                count: data[i].length>2 ? data[i][2] : this.defaultWeight
                            });
                        }
                    this._currentLoadedTime = time;
                    if (this._timeDimension && time == this._timeDimension.getCurrentTime() && !this._timeDimension.isLoading()) {
                        this._update();
                    }
                    this.fire('timeload', {
                        time: time
                    });
                }
        });

        L.Control.TimeDimensionCustom = L.Control.TimeDimension.extend({
            initialize: function(index, options) {
                var playerOptions = {
                    buffer: 1,
                    minBufferReady: -1
                    };
                options.playerOptions = $.extend({}, playerOptions, options.playerOptions || {});
                L.Control.TimeDimension.prototype.initialize.call(this, options);
                this.index = index;
                },
            _getDisplayDateFormat: function(date){
                return this.index[date.getTime()-1];
                }
            });
            </script>

</head>
<body>

            <div class="folium-map" id="map_c719de9ea5a34ac2b96363b99c172fbb" ></div>

</body>
<script>



                var bounds = null;


            var map_c719de9ea5a34ac2b96363b99c172fbb = L.map(
                                  'map_c719de9ea5a34ac2b96363b99c172fbb',
                                  {center: tripdata.center_map,
                                  zoom: tripdata.zoom,
                                  maxBounds: bounds,
                                  layers: [],
                                  worldCopyJump: false,
                                  crs: L.CRS.EPSG3857
                                 });


                var tile_layer_dr19418c30def487ab80c65577be7427d = L.tileLayer(
                  tripdata.map_types[1],
                    {
      "attribution": null,
      "detectRetina": false,
      "maxZoom": 18,
      "minZoom": 1,
      "noWrap": false,
      "subdomains": "abc"
    }
                    ).addTo(map_c719de9ea5a34ac2b96363b99c172fbb);


                    var tile_layer_c19418c30def487ab80c65577be7427d = L.tileLayer(
                      tripdata.map_types[0],
                        {
                    "attribution": null,
                    "detectRetina": false,
                    "maxZoom": 18,
                    "minZoom": 1,
                    "noWrap": false,
                    "subdomains": "abc"
                    }
                        ).addTo(map_c719de9ea5a34ac2b96363b99c172fbb);

            map_c719de9ea5a34ac2b96363b99c172fbb.timeDimension = L.timeDimension(
                {times : tripdata.times, currentTime: new Date(1)}
            );

            var heat_map_0f93110bfb0f423fb75c5ab7af878603Control = new L.Control.TimeDimensionCustom(tripdata.time_labels, {
                autoPlay: true,
                backwardButton: true,
                displayDate: true,
                forwardButton: true,
                limitMinimumRange: 5,
                limitSliders: true,
                loopButton: true,
                maxSpeed: 10,
                minSpeed: 0.1,
                playButton: true,
                playReverseButton: true,
                position: "bottomleft",
                speedSlider: true,
                speedStep: 0.1,
                styleNS: "leaflet-control-timecontrol",
                timeSlider: true,
                timeSliderDrapUpdate: false,
                timeSteps: 1
                })
                .addTo(map_c719de9ea5a34ac2b96363b99c172fbb);

                var heat_map_0f93110bfb0f423fb75c5ab7af878603 = new TDHeatmap(tripdata.locations,
                {heatmapOptions: {
                        radius: 15,
                        minOpacity: 0,
                        maxOpacity: 0.6,
                        scaleRadius: false,
                        useLocalExtrema: false,
                        defaultWeight: 1 ,
                    }
                })
                .addTo(map_c719de9ea5a34ac2b96363b99c172fbb);

            var layer_control_93faaa4254a24458aedba1ecd611bc5e = {
                base_layers : { "Street map" : tile_layer_dr19418c30def487ab80c65577be7427d,
                "Terrain map" : tile_layer_c19418c30def487ab80c65577be7427d, },
                overlays : { [tripdata.event_type]: heat_map_0f93110bfb0f423fb75c5ab7af878603, }
                };
            L.control.layers(
                layer_control_93faaa4254a24458aedba1ecd611bc5e.base_layers,
                layer_control_93faaa4254a24458aedba1ecd611bc5e.overlays,
                {position: 'topright',
                 collapsed: true,
                 autoZIndex: true
                }).addTo(map_c719de9ea5a34ac2b96363b99c172fbb);
}
document.getElementById("heatmap").onclick = heatmapVisual();
