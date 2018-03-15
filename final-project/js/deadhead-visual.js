
function testVisual() {

  var bounds = null;

  var map_c719de9ea5a34ac2b96363b99c172fbb = new L.map(
                        'map_c719de9ea5a34ac2b96363b99c172fbb',
                        {center: [44.0,-76],
                        zoom: 7,
                        maxBounds: bounds,
                        layers: [],
                        worldCopyJump: false,
                        crs: L.CRS.EPSG3857
                       });



  var tile_layer_88d29062cf0447e9b628d949b21e8d6b = L.tileLayer(
      'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',
      {
  "attribution": null,
  "detectRetina": false,
  "maxZoom": 18,
  "minZoom": 1,
  "noWrap": false,
  "subdomains": "abc"
  }
                  ).addTo(map_c719de9ea5a34ac2b96363b99c172fbb);


              var feature_group_9b0088be39ea42b3b366996b61f25468 = L.featureGroup(
                  ).addTo(map_c719de9ea5a34ac2b96363b99c172fbb);


                  var poly_line_6815f40d020c41de8ad44c7d125bd891 = L.polyline(
                      [[[43.99580028, -75.55640279], [42.66128195, -73.78371329]], [[43.99569148, -75.55621878], [42.66127244, -73.78361104]], [[43.99563567, -75.55616166], [42.66122742, -73.78370786]], [[44.6762135, -75.52421559], [43.05567572, -76.14935869]], [[44.76754667, -75.29764326], [43.3308524, -73.69852098]], [[44.76789765, -75.29796975], [43.04113673, -76.13771624]], [[43.97577878, -75.95906498], [42.86794228, -73.9095867]], [[43.99133045, -75.90360218], [42.8683383, -73.90960301]], [[43.85463447, -75.80219421], [42.86830018, -73.91038884]], [[42.72777619, -73.79926995], [43.9766088, -75.61979971]], [[43.99586228, -75.5563663], [42.66128446, -73.78360756]], [[44.30291151, -75.38317532], [44.47899816, -73.19256477]], [[43.99571878, -75.55635584], [42.66134048, -73.78369005]], [[43.99565447, -75.5563319], [42.66130105, -73.78356979]], [[44.33608017, -75.91424822], [42.18867635, -76.05751263]], [[44.87418245, -74.87386859], [43.01171627, -77.4391044]], [[44.03569656, -75.67136302], [42.661347, -73.78353390000001]], [[44.76755036, -75.29758667], [43.00773252, -76.16820381]], [[43.99563819, -75.55624363], [42.66127266, -73.78359019]], [[44.70363405, -75.35371057], [43.05586785, -76.14923484]], [[44.92842404, -74.88025685], [43.05507532, -76.14872936]], [[43.99627785, -75.55649518], [42.66138151, -73.78347272]], [[44.73744926, -75.1463217], [43.33101431, -73.69870838]], [[44.87435478, -74.87373074], [43.04135917, -76.13777079]], [[43.99580067, -75.55646532], [42.66120777, -73.7837222]], [[44.13067876, -76.32082785], [42.18867171, -76.05752081]], [[43.99554237, -75.55643836], [42.66127266, -73.78356891]], [[43.00771455, -76.16719184], [44.69240035, -75.49568553]], [[42.661278964160104, -73.7836964916656], [44.1701389716971, -75.838529993723]], [[43.05522423, -76.14801529], [44.67969338, -74.98465325]], [[42.661336798977, -73.7835250031618], [44.170069473301, -75.8385163019323]], [[42.86836953, -73.91026055], [44.08769316, -75.80708506]], [[42.8682322011422, -73.9103845236454], [43.9660644119629, -75.9160172584886]], [[43.03853303, -77.66665237], [43.8877710316813, -75.51297751349979]], [[43.04861407, -77.6582999], [44.17020228, -75.8385959]], [[43.05579861, -76.14952319], [44.68631092, -75.49307902]], [[43.10619202, -75.25476973], [44.87425276, -74.87384122]], [[43.10683847, -75.25390490000001], [44.91226866, -74.88556389]], [[42.86830018, -73.91038884], [43.85464226, -75.8022129]], [[42.66120872, -73.78363844], [44.17004469, -75.83852833]], [[42.8682741400517, -73.91036556474221], [44.063097808399895, -75.9223689303353]], [[42.72777619, -73.79926995], [43.9766088, -75.61979971]], [[42.66124309, -73.78374651], [44.17016918, -75.83847364]], [[43.04147765, -76.13807412], [44.73741029, -75.14631573]], [[42.661338925352204, -73.78355805841309], [44.1701903796955, -75.8385194931861]], [[43.0322441, -76.17220158], [44.76759369, -75.29764471]], [[42.65873207, -73.74867502], [43.99133671, -75.90360074]], [[42.6613627727468, -73.7835261194085], [44.17013551417379, -75.83852890270958]], [[42.8683091240613, -73.9102618609529], [44.1704134590127, -75.8389274249025]], [[42.18873071, -76.05751567], [44.33610474, -75.91422659999999]], [[43.11784199, -77.62380057], [44.87418239, -74.87386855]], [[42.6612244839865, -73.7835885343108], [44.1700773798958, -75.8384655365124]], [[43.07202142, -76.17311355], [44.76763699, -75.29756195]], [[43.33086031, -73.69859169], [44.68106679, -74.96844814]], [[42.8682734218795, -73.91022146523159], [44.170126317190295, -75.8385669691612]], [[43.04600146, -76.13677463], [44.50327635, -75.47151816]], [[42.6612802136624, -73.7836203595989], [44.170103513911506, -75.8385329721728]], [[43.10611502, -75.25465268], [44.78365844, -75.35281648]], [[43.10626718, -75.25453432], [44.92493563, -74.87387945]], [[43.04234884, -76.14033409], [44.73730856, -75.14672504]], [[42.6613722696041, -73.7835660207365], [44.1700617965717, -75.83853403280091]], [[42.86833828, -73.91024498], [43.85514035, -75.80206963]], [[42.18871866, -76.05749312], [43.97584749, -75.91917494]], [[42.8682889004097, -73.9103229380082], [43.966122880764104, -75.9160341368078]]],
                      {
    "bubblingMouseEvents": true,
    "color": "red",
    "dashArray": null,
    "dashOffset": null,
    "fill": false,
    "fillColor": "red",
    "fillOpacity": 0.2,
    "fillRule": "evenodd",
    "lineCap": "round",
    "lineJoin": "round",
    "noClip": false,
    "opacity": 0.4,
    "smoothFactor": 1.0,
    "stroke": true,
    "weight": 3
  }).addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



              var marker_2e5331922cd44f68b849342aa4a55285 = L.marker(
                  [43.99580028,-75.55640279],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_83e7f4b85bf1456ea5feb25fc312f6d4 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_2e5331922cd44f68b849342aa4a55285.setIcon(icon_83e7f4b85bf1456ea5feb25fc312f6d4);


              var popup_f13cfaea948d420b865e78a08d5ff2fd = L.popup({maxWidth: '300'});


                  var html_002130e69c7540a085ab65ea4eaa6111 = $('<div id="html_002130e69c7540a085ab65ea4eaa6111" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>32</th></tr><tr><td>Trip # </td><td align="right">7825</td></tr><tr><td>Distance </td><td align="right">124 miles</td><tr><td>Date</td><td align="right">2018-01-08 13:22:12.743384</td></tr></table></div>')[0];
                  popup_f13cfaea948d420b865e78a08d5ff2fd.setContent(html_002130e69c7540a085ab65ea4eaa6111);


              marker_2e5331922cd44f68b849342aa4a55285.bindPopup(popup_f13cfaea948d420b865e78a08d5ff2fd);





              var marker_f5529db4ff4b47d196bdd4cae218a174 = L.marker(
                  [42.66128195,-73.78371329],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_ff60796612de4d6eb5516690daff0604 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_f5529db4ff4b47d196bdd4cae218a174.setIcon(icon_ff60796612de4d6eb5516690daff0604);


              var popup_216f07097a9c40af85ece36d6aaa158e = L.popup({maxWidth: '300'});


                  var html_ca48ef3055594db4a35d9ea54a55c698 = $('<div id="html_ca48ef3055594db4a35d9ea54a55c698" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>32</th></tr><tr><td>Trip # </td><td align="right">7825</td></tr><tr><td>Distance </td><td align="right">124 miles</td><tr><td>Date</td><td align="right">2018-01-08 13:22:12.743384</td></tr></table></div>')[0];
                  popup_216f07097a9c40af85ece36d6aaa158e.setContent(html_ca48ef3055594db4a35d9ea54a55c698);


              marker_f5529db4ff4b47d196bdd4cae218a174.bindPopup(popup_216f07097a9c40af85ece36d6aaa158e);





              var marker_7c84848e8ced4977ab869779caae75cd = L.marker(
                  [43.99569148,-75.55621878],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_875aabf97d1e452da8857164e354f153 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_7c84848e8ced4977ab869779caae75cd.setIcon(icon_875aabf97d1e452da8857164e354f153);


              var popup_8cccd3f961644f59a6b03cb0602745ab = L.popup({maxWidth: '300'});


                  var html_431fb2323c5e4a009628a53a87a465b4 = $('<div id="html_431fb2323c5e4a009628a53a87a465b4" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>32</th></tr><tr><td>Trip # </td><td align="right">8289</td></tr><tr><td>Distance </td><td align="right">124 miles</td><tr><td>Date</td><td align="right">2018-01-15 13:35:17.92649</td></tr></table></div>')[0];
                  popup_8cccd3f961644f59a6b03cb0602745ab.setContent(html_431fb2323c5e4a009628a53a87a465b4);


              marker_7c84848e8ced4977ab869779caae75cd.bindPopup(popup_8cccd3f961644f59a6b03cb0602745ab);





              var marker_14e4f5e211fe461f9ceec7f7d20c5446 = L.marker(
                  [42.66127244,-73.78361104],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_9eab0273eb7f438fa074f36d70d05018 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_14e4f5e211fe461f9ceec7f7d20c5446.setIcon(icon_9eab0273eb7f438fa074f36d70d05018);


              var popup_7f667246dcbc4943968a64e755e7804e = L.popup({maxWidth: '300'});


                  var html_f034c6631f504a6690c25d2fcefd0fcf = $('<div id="html_f034c6631f504a6690c25d2fcefd0fcf" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>32</th></tr><tr><td>Trip # </td><td align="right">8289</td></tr><tr><td>Distance </td><td align="right">124 miles</td><tr><td>Date</td><td align="right">2018-01-15 13:35:17.92649</td></tr></table></div>')[0];
                  popup_7f667246dcbc4943968a64e755e7804e.setContent(html_f034c6631f504a6690c25d2fcefd0fcf);


              marker_14e4f5e211fe461f9ceec7f7d20c5446.bindPopup(popup_7f667246dcbc4943968a64e755e7804e);





              var marker_2c66a57ab46443d0968505b62a6b31c2 = L.marker(
                  [43.99563567,-75.55616166],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_8824a8134da845969cfda4cb3a6a53ce = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_2c66a57ab46443d0968505b62a6b31c2.setIcon(icon_8824a8134da845969cfda4cb3a6a53ce);


              var popup_92dbeb1fe8b14ddaa784a10eef4166d5 = L.popup({maxWidth: '300'});


                  var html_142c2323172242bd8edc25ba89f1eb4d = $('<div id="html_142c2323172242bd8edc25ba89f1eb4d" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>32</th></tr><tr><td>Trip # </td><td align="right">8842</td></tr><tr><td>Distance </td><td align="right">124 miles</td><tr><td>Date</td><td align="right">2018-01-22 13:32:50.486653</td></tr></table></div>')[0];
                  popup_92dbeb1fe8b14ddaa784a10eef4166d5.setContent(html_142c2323172242bd8edc25ba89f1eb4d);


              marker_2c66a57ab46443d0968505b62a6b31c2.bindPopup(popup_92dbeb1fe8b14ddaa784a10eef4166d5);





              var marker_d4aab98e58854e558aaf275f37e304f3 = L.marker(
                  [42.66122742,-73.78370786],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_34d1b486c2f04fd0ac9ab212119af9f4 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_d4aab98e58854e558aaf275f37e304f3.setIcon(icon_34d1b486c2f04fd0ac9ab212119af9f4);


              var popup_6ce35f8ce9be42a3b9170fd8d0a24312 = L.popup({maxWidth: '300'});


                  var html_58048898d86d4603842a8cd991562b67 = $('<div id="html_58048898d86d4603842a8cd991562b67" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>32</th></tr><tr><td>Trip # </td><td align="right">8842</td></tr><tr><td>Distance </td><td align="right">124 miles</td><tr><td>Date</td><td align="right">2018-01-22 13:32:50.486653</td></tr></table></div>')[0];
                  popup_6ce35f8ce9be42a3b9170fd8d0a24312.setContent(html_58048898d86d4603842a8cd991562b67);


              marker_d4aab98e58854e558aaf275f37e304f3.bindPopup(popup_6ce35f8ce9be42a3b9170fd8d0a24312);





              var marker_bedd4d85e4164cb98a4fdfbb6595b5b5 = L.marker(
                  [44.6762135,-75.52421559],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_7d17480b905442229890c3d5ca136dcf = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_bedd4d85e4164cb98a4fdfbb6595b5b5.setIcon(icon_7d17480b905442229890c3d5ca136dcf);


              var popup_8c91959f5d17485bb595762c6445b90d = L.popup({maxWidth: '300'});


                  var html_a38d453880674607af5218e0890e0135 = $('<div id="html_a38d453880674607af5218e0890e0135" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>49</th></tr><tr><td>Trip # </td><td align="right">1541</td></tr><tr><td>Distance </td><td align="right">112 miles</td><tr><td>Date</td><td align="right">2017-09-08 14:07:25.959199</td></tr></table></div>')[0];
                  popup_8c91959f5d17485bb595762c6445b90d.setContent(html_a38d453880674607af5218e0890e0135);


              marker_bedd4d85e4164cb98a4fdfbb6595b5b5.bindPopup(popup_8c91959f5d17485bb595762c6445b90d);





              var marker_0a1569db4b0d442f9d46fb5a14b30f1c = L.marker(
                  [43.05567572,-76.14935869],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_ffd45d63ed324bc4957a54a2708254b5 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_0a1569db4b0d442f9d46fb5a14b30f1c.setIcon(icon_ffd45d63ed324bc4957a54a2708254b5);


              var popup_c485784bc07c46608e255966dde73eb1 = L.popup({maxWidth: '300'});


                  var html_d77e17dc3460465e922d4d3fc4a28a36 = $('<div id="html_d77e17dc3460465e922d4d3fc4a28a36" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>49</th></tr><tr><td>Trip # </td><td align="right">1541</td></tr><tr><td>Distance </td><td align="right">112 miles</td><tr><td>Date</td><td align="right">2017-09-08 14:07:25.959199</td></tr></table></div>')[0];
                  popup_c485784bc07c46608e255966dde73eb1.setContent(html_d77e17dc3460465e922d4d3fc4a28a36);


              marker_0a1569db4b0d442f9d46fb5a14b30f1c.bindPopup(popup_c485784bc07c46608e255966dde73eb1);





              var marker_2212238574524220a15b366bad1473b0 = L.marker(
                  [44.76754667,-75.29764326],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_39b20a7898ea416ea7f7a8949a2ca847 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_2212238574524220a15b366bad1473b0.setIcon(icon_39b20a7898ea416ea7f7a8949a2ca847);


              var popup_ef12cbf442374d619aca71b14361dfe2 = L.popup({maxWidth: '300'});


                  var html_ffe858a48b6b419899a96a49b2e95ad3 = $('<div id="html_ffe858a48b6b419899a96a49b2e95ad3" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>12</th></tr><tr><td>Trip # </td><td align="right">1647</td></tr><tr><td>Distance </td><td align="right">123 miles</td><tr><td>Date</td><td align="right">2017-09-13 11:15:46.367528</td></tr></table></div>')[0];
                  popup_ef12cbf442374d619aca71b14361dfe2.setContent(html_ffe858a48b6b419899a96a49b2e95ad3);


              marker_2212238574524220a15b366bad1473b0.bindPopup(popup_ef12cbf442374d619aca71b14361dfe2);





              var marker_144ad38d2d094756bc53553767795f2b = L.marker(
                  [43.3308524,-73.69852098],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_14605a115ba74a8ea91d061c1df35bc7 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_144ad38d2d094756bc53553767795f2b.setIcon(icon_14605a115ba74a8ea91d061c1df35bc7);


              var popup_a8083d1491514e89a95858b980c15a7d = L.popup({maxWidth: '300'});


                  var html_5b71f128f626470d81ee5046856430f4 = $('<div id="html_5b71f128f626470d81ee5046856430f4" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>12</th></tr><tr><td>Trip # </td><td align="right">1647</td></tr><tr><td>Distance </td><td align="right">123 miles</td><tr><td>Date</td><td align="right">2017-09-13 11:15:46.367528</td></tr></table></div>')[0];
                  popup_a8083d1491514e89a95858b980c15a7d.setContent(html_5b71f128f626470d81ee5046856430f4);


              marker_144ad38d2d094756bc53553767795f2b.bindPopup(popup_a8083d1491514e89a95858b980c15a7d);





              var marker_85d910bdce2b4de4aab007a8a5744680 = L.marker(
                  [44.76789765,-75.29796975],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_d36da29e0aa846bd9622a5fe1bf25bfe = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_85d910bdce2b4de4aab007a8a5744680.setIcon(icon_d36da29e0aa846bd9622a5fe1bf25bfe);


              var popup_ea5f066d9f554132949e8f36e1cc2243 = L.popup({maxWidth: '300'});


                  var html_0bee492bd8c143f08a1aa3880918b92c = $('<div id="html_0bee492bd8c143f08a1aa3880918b92c" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>12</th></tr><tr><td>Trip # </td><td align="right">1675</td></tr><tr><td>Distance </td><td align="right">122 miles</td><tr><td>Date</td><td align="right">2017-09-13 21:12:42.520531</td></tr></table></div>')[0];
                  popup_ea5f066d9f554132949e8f36e1cc2243.setContent(html_0bee492bd8c143f08a1aa3880918b92c);


              marker_85d910bdce2b4de4aab007a8a5744680.bindPopup(popup_ea5f066d9f554132949e8f36e1cc2243);





              var marker_b6ba86fb525844a0a10e3c8ac243f9a4 = L.marker(
                  [43.04113673,-76.13771624],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_553d9953c0b347a8b7b9096c864a341e = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_b6ba86fb525844a0a10e3c8ac243f9a4.setIcon(icon_553d9953c0b347a8b7b9096c864a341e);


              var popup_0f5c28a5e8034641badfd2748cd00757 = L.popup({maxWidth: '300'});


                  var html_7577dbfdf6da41159e350b90bd0fe666 = $('<div id="html_7577dbfdf6da41159e350b90bd0fe666" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>12</th></tr><tr><td>Trip # </td><td align="right">1675</td></tr><tr><td>Distance </td><td align="right">122 miles</td><tr><td>Date</td><td align="right">2017-09-13 21:12:42.520531</td></tr></table></div>')[0];
                  popup_0f5c28a5e8034641badfd2748cd00757.setContent(html_7577dbfdf6da41159e350b90bd0fe666);


              marker_b6ba86fb525844a0a10e3c8ac243f9a4.bindPopup(popup_0f5c28a5e8034641badfd2748cd00757);





              var marker_85b42c44d6bb48c581a51993b1442830 = L.marker(
                  [43.97577878,-75.95906498],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_d6bbbeb5d5d44740ab5af6d5e354e35e = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_85b42c44d6bb48c581a51993b1442830.setIcon(icon_d6bbbeb5d5d44740ab5af6d5e354e35e);


              var popup_106d9bcf5a7d401993d0b3b65db3ed5b = L.popup({maxWidth: '300'});


                  var html_3e6531db2d424e109d9e72fe0bfb72ba = $('<div id="html_3e6531db2d424e109d9e72fe0bfb72ba" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>21</th></tr><tr><td>Trip # </td><td align="right">1803</td></tr><tr><td>Distance </td><td align="right">124 miles</td><tr><td>Date</td><td align="right">2017-09-18 15:47:40.601021</td></tr></table></div>')[0];
                  popup_106d9bcf5a7d401993d0b3b65db3ed5b.setContent(html_3e6531db2d424e109d9e72fe0bfb72ba);


              marker_85b42c44d6bb48c581a51993b1442830.bindPopup(popup_106d9bcf5a7d401993d0b3b65db3ed5b);





              var marker_d3c430565ca146cf8222a3bdb8bdeb79 = L.marker(
                  [42.86794228,-73.9095867],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_d447b93a69ea4e10aaa58b4e537b1b66 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_d3c430565ca146cf8222a3bdb8bdeb79.setIcon(icon_d447b93a69ea4e10aaa58b4e537b1b66);


              var popup_9331a11e369c4f2aa2be716689ee899a = L.popup({maxWidth: '300'});


                  var html_1ecf89fb8cc54173a1c0311a64220aaf = $('<div id="html_1ecf89fb8cc54173a1c0311a64220aaf" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>21</th></tr><tr><td>Trip # </td><td align="right">1803</td></tr><tr><td>Distance </td><td align="right">124 miles</td><tr><td>Date</td><td align="right">2017-09-18 15:47:40.601021</td></tr></table></div>')[0];
                  popup_9331a11e369c4f2aa2be716689ee899a.setContent(html_1ecf89fb8cc54173a1c0311a64220aaf);


              marker_d3c430565ca146cf8222a3bdb8bdeb79.bindPopup(popup_9331a11e369c4f2aa2be716689ee899a);





              var marker_ed922d10cb20413aae2d803a53c8b2d4 = L.marker(
                  [43.99133045,-75.90360218],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_1475f43516a14950956ffcb0d884ef38 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_ed922d10cb20413aae2d803a53c8b2d4.setIcon(icon_1475f43516a14950956ffcb0d884ef38);


              var popup_e83bc0befc6d47b8a706ff91919ca79f = L.popup({maxWidth: '300'});


                  var html_10517bd1b6c54d64ac2b940f97710c72 = $('<div id="html_10517bd1b6c54d64ac2b940f97710c72" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>70</th></tr><tr><td>Trip # </td><td align="right">2044</td></tr><tr><td>Distance </td><td align="right">122 miles</td><tr><td>Date</td><td align="right">2017-09-25 14:57:57.926939</td></tr></table></div>')[0];
                  popup_e83bc0befc6d47b8a706ff91919ca79f.setContent(html_10517bd1b6c54d64ac2b940f97710c72);


              marker_ed922d10cb20413aae2d803a53c8b2d4.bindPopup(popup_e83bc0befc6d47b8a706ff91919ca79f);





              var marker_00d283b60376416eb226939da716fc11 = L.marker(
                  [42.8683383,-73.90960301],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_75f358b839f8439fa35e07db49726a99 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_00d283b60376416eb226939da716fc11.setIcon(icon_75f358b839f8439fa35e07db49726a99);


              var popup_a327e2adb02740cbb1fee191d68abdc6 = L.popup({maxWidth: '300'});


                  var html_f0fadf54644349838423e4ea39dd1eae = $('<div id="html_f0fadf54644349838423e4ea39dd1eae" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>70</th></tr><tr><td>Trip # </td><td align="right">2044</td></tr><tr><td>Distance </td><td align="right">122 miles</td><tr><td>Date</td><td align="right">2017-09-25 14:57:57.926939</td></tr></table></div>')[0];
                  popup_a327e2adb02740cbb1fee191d68abdc6.setContent(html_f0fadf54644349838423e4ea39dd1eae);


              marker_00d283b60376416eb226939da716fc11.bindPopup(popup_a327e2adb02740cbb1fee191d68abdc6);





              var marker_7b50db625e1a4033b483fea863f713f9 = L.marker(
                  [43.85463447,-75.80219421],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_af4c5d6b4d824622b836b6b06f4e86e4 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_7b50db625e1a4033b483fea863f713f9.setIcon(icon_af4c5d6b4d824622b836b6b06f4e86e4);


              var popup_28ab7a4a0d7948d18bf6b940cd979ecb = L.popup({maxWidth: '300'});


                  var html_fca8707194b44ac4a0f53cf2e918adab = $('<div id="html_fca8707194b44ac4a0f53cf2e918adab" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>86</th></tr><tr><td>Trip # </td><td align="right">2583</td></tr><tr><td>Distance </td><td align="right">113 miles</td><tr><td>Date</td><td align="right">2017-10-07 15:27:00.725782</td></tr></table></div>')[0];
                  popup_28ab7a4a0d7948d18bf6b940cd979ecb.setContent(html_fca8707194b44ac4a0f53cf2e918adab);


              marker_7b50db625e1a4033b483fea863f713f9.bindPopup(popup_28ab7a4a0d7948d18bf6b940cd979ecb);





              var marker_4466d4f3935a489cb033e3ada4d6c744 = L.marker(
                  [42.86830018,-73.91038884],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_1538762a41714943b5143f053bd9a497 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_4466d4f3935a489cb033e3ada4d6c744.setIcon(icon_1538762a41714943b5143f053bd9a497);


              var popup_3fbfcc131c5443399a67acbf50a02e60 = L.popup({maxWidth: '300'});


                  var html_89be21f168f24bc5ad44c18277be7a4e = $('<div id="html_89be21f168f24bc5ad44c18277be7a4e" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>86</th></tr><tr><td>Trip # </td><td align="right">2583</td></tr><tr><td>Distance </td><td align="right">113 miles</td><tr><td>Date</td><td align="right">2017-10-07 15:27:00.725782</td></tr></table></div>')[0];
                  popup_3fbfcc131c5443399a67acbf50a02e60.setContent(html_89be21f168f24bc5ad44c18277be7a4e);


              marker_4466d4f3935a489cb033e3ada4d6c744.bindPopup(popup_3fbfcc131c5443399a67acbf50a02e60);





              var marker_c0595c24b20d479faffa22d564257dcd = L.marker(
                  [42.72777619,-73.79926995],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_1d28f8eb6bf64cc6955187ce65f92645 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_c0595c24b20d479faffa22d564257dcd.setIcon(icon_1d28f8eb6bf64cc6955187ce65f92645);


              var popup_6bedfa7fb8b04cd19921b33d00147744 = L.popup({maxWidth: '300'});


                  var html_129fe70542014099aff4301777e55807 = $('<div id="html_129fe70542014099aff4301777e55807" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>4</th></tr><tr><td>Trip # </td><td align="right">3044</td></tr><tr><td>Distance </td><td align="right">121 miles</td><tr><td>Date</td><td align="right">2017-10-18 15:18:55.266526</td></tr></table></div>')[0];
                  popup_6bedfa7fb8b04cd19921b33d00147744.setContent(html_129fe70542014099aff4301777e55807);


              marker_c0595c24b20d479faffa22d564257dcd.bindPopup(popup_6bedfa7fb8b04cd19921b33d00147744);





              var marker_c1a2e0b50b8648fab3a503f93d365120 = L.marker(
                  [43.9766088,-75.61979971],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_22ddff434e6448c9a58850b6664be9c1 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_c1a2e0b50b8648fab3a503f93d365120.setIcon(icon_22ddff434e6448c9a58850b6664be9c1);


              var popup_4a6ebad9254945db8fff77d763c7b92e = L.popup({maxWidth: '300'});


                  var html_254800dff4424ecb85f4058590c0d8e5 = $('<div id="html_254800dff4424ecb85f4058590c0d8e5" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>4</th></tr><tr><td>Trip # </td><td align="right">3044</td></tr><tr><td>Distance </td><td align="right">121 miles</td><tr><td>Date</td><td align="right">2017-10-18 15:18:55.266526</td></tr></table></div>')[0];
                  popup_4a6ebad9254945db8fff77d763c7b92e.setContent(html_254800dff4424ecb85f4058590c0d8e5);


              marker_c1a2e0b50b8648fab3a503f93d365120.bindPopup(popup_4a6ebad9254945db8fff77d763c7b92e);





              var marker_733c00526e834ff9a297fa69e540f3bf = L.marker(
                  [43.99586228,-75.5563663],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_1caff5a3a9774be38a63a395e0b9f105 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_733c00526e834ff9a297fa69e540f3bf.setIcon(icon_1caff5a3a9774be38a63a395e0b9f105);


              var popup_bb6aacedcddb477383ddbb9776e06bbb = L.popup({maxWidth: '300'});


                  var html_664a290508e94c2aa3f3ed25e6294b7d = $('<div id="html_664a290508e94c2aa3f3ed25e6294b7d" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>32</th></tr><tr><td>Trip # </td><td align="right">3947</td></tr><tr><td>Distance </td><td align="right">124 miles</td><tr><td>Date</td><td align="right">2017-11-05 13:34:03.782531</td></tr></table></div>')[0];
                  popup_bb6aacedcddb477383ddbb9776e06bbb.setContent(html_664a290508e94c2aa3f3ed25e6294b7d);


              marker_733c00526e834ff9a297fa69e540f3bf.bindPopup(popup_bb6aacedcddb477383ddbb9776e06bbb);





              var marker_1618685a9a0545338bf280997046c37f = L.marker(
                  [42.66128446,-73.78360756],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_66bea26bd5284351a52a60ed44d09649 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_1618685a9a0545338bf280997046c37f.setIcon(icon_66bea26bd5284351a52a60ed44d09649);


              var popup_017b8c5264e947bf872c68e0f9367a5c = L.popup({maxWidth: '300'});


                  var html_805d5020e9ed49d783342492d535687f = $('<div id="html_805d5020e9ed49d783342492d535687f" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>32</th></tr><tr><td>Trip # </td><td align="right">3947</td></tr><tr><td>Distance </td><td align="right">124 miles</td><tr><td>Date</td><td align="right">2017-11-05 13:34:03.782531</td></tr></table></div>')[0];
                  popup_017b8c5264e947bf872c68e0f9367a5c.setContent(html_805d5020e9ed49d783342492d535687f);


              marker_1618685a9a0545338bf280997046c37f.bindPopup(popup_017b8c5264e947bf872c68e0f9367a5c);





              var marker_e3739ccbccfd46fd97d3eb40f38b3cc5 = L.marker(
                  [44.30291151,-75.38317532],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_78f04dfc72fb4d15b27fd139bf08ef0d = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_e3739ccbccfd46fd97d3eb40f38b3cc5.setIcon(icon_78f04dfc72fb4d15b27fd139bf08ef0d);


              var popup_c5558b7d2adf41589db83b3c67a113d3 = L.popup({maxWidth: '300'});


                  var html_3e128916d6dc432a9f4d6ec33963849c = $('<div id="html_3e128916d6dc432a9f4d6ec33963849c" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>91</th></tr><tr><td>Trip # </td><td align="right">3968</td></tr><tr><td>Distance </td><td align="right">105 miles</td><tr><td>Date</td><td align="right">2017-11-06 10:37:37.567277</td></tr></table></div>')[0];
                  popup_c5558b7d2adf41589db83b3c67a113d3.setContent(html_3e128916d6dc432a9f4d6ec33963849c);


              marker_e3739ccbccfd46fd97d3eb40f38b3cc5.bindPopup(popup_c5558b7d2adf41589db83b3c67a113d3);





              var marker_7965ad64c91d4f4695596a7943851683 = L.marker(
                  [44.47899816,-73.19256477],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_067da775fdda4a438bf857eb481357c8 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_7965ad64c91d4f4695596a7943851683.setIcon(icon_067da775fdda4a438bf857eb481357c8);


              var popup_ff168444317a495c98d8bb98953a3550 = L.popup({maxWidth: '300'});


                  var html_c9b8ac5ef2b44bab8d4711d8bb209a06 = $('<div id="html_c9b8ac5ef2b44bab8d4711d8bb209a06" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>91</th></tr><tr><td>Trip # </td><td align="right">3968</td></tr><tr><td>Distance </td><td align="right">105 miles</td><tr><td>Date</td><td align="right">2017-11-06 10:37:37.567277</td></tr></table></div>')[0];
                  popup_ff168444317a495c98d8bb98953a3550.setContent(html_c9b8ac5ef2b44bab8d4711d8bb209a06);


              marker_7965ad64c91d4f4695596a7943851683.bindPopup(popup_ff168444317a495c98d8bb98953a3550);





              var marker_56f109fb3d704b69a5e56c3415f80877 = L.marker(
                  [43.99571878,-75.55635584],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_1b45b27676d6406f9e00e7e828fa4b63 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_56f109fb3d704b69a5e56c3415f80877.setIcon(icon_1b45b27676d6406f9e00e7e828fa4b63);


              var popup_b5f78003e0c143fe9f97366c56b9377a = L.popup({maxWidth: '300'});


                  var html_e9c6198b61b94315960daf8afca8224a = $('<div id="html_e9c6198b61b94315960daf8afca8224a" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>32</th></tr><tr><td>Trip # </td><td align="right">4370</td></tr><tr><td>Distance </td><td align="right">124 miles</td><tr><td>Date</td><td align="right">2017-11-12 13:38:31.48017</td></tr></table></div>')[0];
                  popup_b5f78003e0c143fe9f97366c56b9377a.setContent(html_e9c6198b61b94315960daf8afca8224a);


              marker_56f109fb3d704b69a5e56c3415f80877.bindPopup(popup_b5f78003e0c143fe9f97366c56b9377a);





              var marker_513d720cce7b42efbed4f84689d8b4b6 = L.marker(
                  [42.66134048,-73.78369005],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_d4cf2fcbdccb4ebaa789a75082c46e47 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_513d720cce7b42efbed4f84689d8b4b6.setIcon(icon_d4cf2fcbdccb4ebaa789a75082c46e47);


              var popup_90bcf831aba149e89dc85c87e373d27e = L.popup({maxWidth: '300'});


                  var html_8632bd50592041269f9a766751927ecb = $('<div id="html_8632bd50592041269f9a766751927ecb" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>32</th></tr><tr><td>Trip # </td><td align="right">4370</td></tr><tr><td>Distance </td><td align="right">124 miles</td><tr><td>Date</td><td align="right">2017-11-12 13:38:31.48017</td></tr></table></div>')[0];
                  popup_90bcf831aba149e89dc85c87e373d27e.setContent(html_8632bd50592041269f9a766751927ecb);


              marker_513d720cce7b42efbed4f84689d8b4b6.bindPopup(popup_90bcf831aba149e89dc85c87e373d27e);





              var marker_af90f1c5e5ee415eb1aeeab8d79a41ee = L.marker(
                  [43.99565447,-75.5563319],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_400f54721d854616bdeb7559e77b726e = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_af90f1c5e5ee415eb1aeeab8d79a41ee.setIcon(icon_400f54721d854616bdeb7559e77b726e);


              var popup_d929b1e5001a42de853c30d4717bfef6 = L.popup({maxWidth: '300'});


                  var html_9dcc1cf341184fc6be2f4c5d4e0c2b52 = $('<div id="html_9dcc1cf341184fc6be2f4c5d4e0c2b52" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>32</th></tr><tr><td>Trip # </td><td align="right">4828</td></tr><tr><td>Distance </td><td align="right">124 miles</td><tr><td>Date</td><td align="right">2017-11-19 13:23:59.50198</td></tr></table></div>')[0];
                  popup_d929b1e5001a42de853c30d4717bfef6.setContent(html_9dcc1cf341184fc6be2f4c5d4e0c2b52);


              marker_af90f1c5e5ee415eb1aeeab8d79a41ee.bindPopup(popup_d929b1e5001a42de853c30d4717bfef6);





              var marker_c60944f80ea54c2b9f49a95324fa7190 = L.marker(
                  [42.66130105,-73.78356979],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_b2aa8177e9f8486f8709fdb48479d4ff = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_c60944f80ea54c2b9f49a95324fa7190.setIcon(icon_b2aa8177e9f8486f8709fdb48479d4ff);


              var popup_1c5ca59636b34a8b9f4f7d4186384f7e = L.popup({maxWidth: '300'});


                  var html_25f3fbddff2746dcbf3f921046aaec3b = $('<div id="html_25f3fbddff2746dcbf3f921046aaec3b" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>32</th></tr><tr><td>Trip # </td><td align="right">4828</td></tr><tr><td>Distance </td><td align="right">124 miles</td><tr><td>Date</td><td align="right">2017-11-19 13:23:59.50198</td></tr></table></div>')[0];
                  popup_1c5ca59636b34a8b9f4f7d4186384f7e.setContent(html_25f3fbddff2746dcbf3f921046aaec3b);


              marker_c60944f80ea54c2b9f49a95324fa7190.bindPopup(popup_1c5ca59636b34a8b9f4f7d4186384f7e);





              var marker_5636639cda6b49ea9af32cd7516e4e00 = L.marker(
                  [44.33608017,-75.91424822],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_a22dbfb69b9c4764984e389f7ddd2b15 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_5636639cda6b49ea9af32cd7516e4e00.setIcon(icon_a22dbfb69b9c4764984e389f7ddd2b15);


              var popup_9da92b4f9c8948f98c51cc2d82bccee9 = L.popup({maxWidth: '300'});


                  var html_efdce931d7aa46daa9a6c53cb9041b83 = $('<div id="html_efdce931d7aa46daa9a6c53cb9041b83" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>99</th></tr><tr><td>Trip # </td><td align="right">4838</td></tr><tr><td>Distance </td><td align="right">143 miles</td><tr><td>Date</td><td align="right">2017-11-20 08:34:35.036334</td></tr></table></div>')[0];
                  popup_9da92b4f9c8948f98c51cc2d82bccee9.setContent(html_efdce931d7aa46daa9a6c53cb9041b83);


              marker_5636639cda6b49ea9af32cd7516e4e00.bindPopup(popup_9da92b4f9c8948f98c51cc2d82bccee9);





              var marker_1218acfdbd8e4c4cb4a6fe36d238780a = L.marker(
                  [42.18867635,-76.05751263],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_536e97f369864d2a919282391e219098 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_1218acfdbd8e4c4cb4a6fe36d238780a.setIcon(icon_536e97f369864d2a919282391e219098);


              var popup_e6f3a8094e0a4f528b8ddf4c9f3bb1a9 = L.popup({maxWidth: '300'});


                  var html_c16e3662bf8a408c94bd01c111b85bc6 = $('<div id="html_c16e3662bf8a408c94bd01c111b85bc6" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>99</th></tr><tr><td>Trip # </td><td align="right">4838</td></tr><tr><td>Distance </td><td align="right">143 miles</td><tr><td>Date</td><td align="right">2017-11-20 08:34:35.036334</td></tr></table></div>')[0];
                  popup_e6f3a8094e0a4f528b8ddf4c9f3bb1a9.setContent(html_c16e3662bf8a408c94bd01c111b85bc6);


              marker_1218acfdbd8e4c4cb4a6fe36d238780a.bindPopup(popup_e6f3a8094e0a4f528b8ddf4c9f3bb1a9);





              var marker_64ec5bc32ff2476290487e8a0ba0709e = L.marker(
                  [44.87418245,-74.87386859],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_23394ea5bafd463eaa7b1504a6a467ee = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_64ec5bc32ff2476290487e8a0ba0709e.setIcon(icon_23394ea5bafd463eaa7b1504a6a467ee);


              var popup_7f77fd9b656449c88433268ae59d48f6 = L.popup({maxWidth: '300'});


                  var html_f20a1dcdffc14c9a945baca3945b3a7d = $('<div id="html_f20a1dcdffc14c9a945baca3945b3a7d" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">5007</td></tr><tr><td>Distance </td><td align="right">175 miles</td><tr><td>Date</td><td align="right">2017-11-22 11:44:39.869609</td></tr></table></div>')[0];
                  popup_7f77fd9b656449c88433268ae59d48f6.setContent(html_f20a1dcdffc14c9a945baca3945b3a7d);


              marker_64ec5bc32ff2476290487e8a0ba0709e.bindPopup(popup_7f77fd9b656449c88433268ae59d48f6);





              var marker_7ae1567dbdd941c3a82a1150b7962918 = L.marker(
                  [43.01171627,-77.4391044],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_be273caff8044b7799ffa05850e374f2 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_7ae1567dbdd941c3a82a1150b7962918.setIcon(icon_be273caff8044b7799ffa05850e374f2);


              var popup_64bebbc4fa5e43afb91cbab242a8fcad = L.popup({maxWidth: '300'});


                  var html_2c5db3c0411a4b8988f6f97d663b10be = $('<div id="html_2c5db3c0411a4b8988f6f97d663b10be" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">5007</td></tr><tr><td>Distance </td><td align="right">175 miles</td><tr><td>Date</td><td align="right">2017-11-22 11:44:39.869609</td></tr></table></div>')[0];
                  popup_64bebbc4fa5e43afb91cbab242a8fcad.setContent(html_2c5db3c0411a4b8988f6f97d663b10be);


              marker_7ae1567dbdd941c3a82a1150b7962918.bindPopup(popup_64bebbc4fa5e43afb91cbab242a8fcad);





              var marker_ffdc8973269f4f8880cc4f7eb93e4cc7 = L.marker(
                  [44.03569656,-75.67136302],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_bcb5d4d3c5d042d1b4c0239c661e10a6 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_ffdc8973269f4f8880cc4f7eb93e4cc7.setIcon(icon_bcb5d4d3c5d042d1b4c0239c661e10a6);


              var popup_0b494781805745b7a40e24e588518189 = L.popup({maxWidth: '300'});


                  var html_040aa052078949fba0836debfbeaebac = $('<div id="html_040aa052078949fba0836debfbeaebac" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>32</th></tr><tr><td>Trip # </td><td align="right">5152</td></tr><tr><td>Distance </td><td align="right">129 miles</td><tr><td>Date</td><td align="right">2017-11-26 13:33:29.800061</td></tr></table></div>')[0];
                  popup_0b494781805745b7a40e24e588518189.setContent(html_040aa052078949fba0836debfbeaebac);


              marker_ffdc8973269f4f8880cc4f7eb93e4cc7.bindPopup(popup_0b494781805745b7a40e24e588518189);





              var marker_a133b8a6b48c45c08953e6e3de3c55e9 = L.marker(
                  [42.661347,-73.78353390000001],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_3cbc946a43494c65a2fe59832b061954 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_a133b8a6b48c45c08953e6e3de3c55e9.setIcon(icon_3cbc946a43494c65a2fe59832b061954);


              var popup_e370ef921ab34eb88c6231ea17b7f1e1 = L.popup({maxWidth: '300'});


                  var html_76c2761f790842f38805500ada49797a = $('<div id="html_76c2761f790842f38805500ada49797a" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>32</th></tr><tr><td>Trip # </td><td align="right">5152</td></tr><tr><td>Distance </td><td align="right">129 miles</td><tr><td>Date</td><td align="right">2017-11-26 13:33:29.800061</td></tr></table></div>')[0];
                  popup_e370ef921ab34eb88c6231ea17b7f1e1.setContent(html_76c2761f790842f38805500ada49797a);


              marker_a133b8a6b48c45c08953e6e3de3c55e9.bindPopup(popup_e370ef921ab34eb88c6231ea17b7f1e1);





              var marker_881bdb64ef8a48ab9bd1d1fbd6dd67db = L.marker(
                  [44.76755036,-75.29758667],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_f6f24d4c0c1e458fba736277afcf3009 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_881bdb64ef8a48ab9bd1d1fbd6dd67db.setIcon(icon_f6f24d4c0c1e458fba736277afcf3009);


              var popup_6684ce66071a403d8f0b2dabd8a778ac = L.popup({maxWidth: '300'});


                  var html_3e7a55524c9e4f3fa01e794a68f7f320 = $('<div id="html_3e7a55524c9e4f3fa01e794a68f7f320" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>12</th></tr><tr><td>Trip # </td><td align="right">5382</td></tr><tr><td>Distance </td><td align="right">125 miles</td><tr><td>Date</td><td align="right">2017-11-29 13:39:58.876736</td></tr></table></div>')[0];
                  popup_6684ce66071a403d8f0b2dabd8a778ac.setContent(html_3e7a55524c9e4f3fa01e794a68f7f320);


              marker_881bdb64ef8a48ab9bd1d1fbd6dd67db.bindPopup(popup_6684ce66071a403d8f0b2dabd8a778ac);





              var marker_40c7dddea16a4ecf92ab3de17ea5db26 = L.marker(
                  [43.00773252,-76.16820381],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_e5ba1e10dbc14fc6b2f3b0cc6d19a499 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_40c7dddea16a4ecf92ab3de17ea5db26.setIcon(icon_e5ba1e10dbc14fc6b2f3b0cc6d19a499);


              var popup_16f627fc27494f95b61b0c222d22fc56 = L.popup({maxWidth: '300'});


                  var html_993df42b68fc482fab8408ac1b88dd86 = $('<div id="html_993df42b68fc482fab8408ac1b88dd86" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>12</th></tr><tr><td>Trip # </td><td align="right">5382</td></tr><tr><td>Distance </td><td align="right">125 miles</td><tr><td>Date</td><td align="right">2017-11-29 13:39:58.876736</td></tr></table></div>')[0];
                  popup_16f627fc27494f95b61b0c222d22fc56.setContent(html_993df42b68fc482fab8408ac1b88dd86);


              marker_40c7dddea16a4ecf92ab3de17ea5db26.bindPopup(popup_16f627fc27494f95b61b0c222d22fc56);





              var marker_1bb836082b2846abb3543caefcc33275 = L.marker(
                  [43.99563819,-75.55624363],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_200f2446f5344d97994a99fd19b6c910 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_1bb836082b2846abb3543caefcc33275.setIcon(icon_200f2446f5344d97994a99fd19b6c910);


              var popup_91f115cb450743958edf19d9f68859a6 = L.popup({maxWidth: '300'});


                  var html_66966e4403a34193be8a67a9d1203ed5 = $('<div id="html_66966e4403a34193be8a67a9d1203ed5" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>32</th></tr><tr><td>Trip # </td><td align="right">6156</td></tr><tr><td>Distance </td><td align="right">124 miles</td><tr><td>Date</td><td align="right">2017-12-10 13:32:19.647968</td></tr></table></div>')[0];
                  popup_91f115cb450743958edf19d9f68859a6.setContent(html_66966e4403a34193be8a67a9d1203ed5);


              marker_1bb836082b2846abb3543caefcc33275.bindPopup(popup_91f115cb450743958edf19d9f68859a6);





              var marker_d254f0f70ba0422e89094d922f5e3101 = L.marker(
                  [42.66127266,-73.78359019],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_fdd1e7975b724b7ab40b1bb2c3068d6d = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_d254f0f70ba0422e89094d922f5e3101.setIcon(icon_fdd1e7975b724b7ab40b1bb2c3068d6d);


              var popup_b81981f65fbb42c5aa4cf0ee69e07309 = L.popup({maxWidth: '300'});


                  var html_0bc5a5e360fd49ff97cbef6b631cb289 = $('<div id="html_0bc5a5e360fd49ff97cbef6b631cb289" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>32</th></tr><tr><td>Trip # </td><td align="right">6156</td></tr><tr><td>Distance </td><td align="right">124 miles</td><tr><td>Date</td><td align="right">2017-12-10 13:32:19.647968</td></tr></table></div>')[0];
                  popup_b81981f65fbb42c5aa4cf0ee69e07309.setContent(html_0bc5a5e360fd49ff97cbef6b631cb289);


              marker_d254f0f70ba0422e89094d922f5e3101.bindPopup(popup_b81981f65fbb42c5aa4cf0ee69e07309);





              var marker_701f0d7b2bf649b2ba3251c61d5002bb = L.marker(
                  [44.70363405,-75.35371057],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_58f1d6dae98545aca37460f247014f97 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_701f0d7b2bf649b2ba3251c61d5002bb.setIcon(icon_58f1d6dae98545aca37460f247014f97);


              var popup_e627f8b317df42d18cfda76bc7d6a8a0 = L.popup({maxWidth: '300'});


                  var html_df027e392c724055a98bc49cc97fef87 = $('<div id="html_df027e392c724055a98bc49cc97fef87" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>52</th></tr><tr><td>Trip # </td><td align="right">6159</td></tr><tr><td>Distance </td><td align="right">116 miles</td><tr><td>Date</td><td align="right">2017-12-10 16:51:08.99468</td></tr></table></div>')[0];
                  popup_e627f8b317df42d18cfda76bc7d6a8a0.setContent(html_df027e392c724055a98bc49cc97fef87);


              marker_701f0d7b2bf649b2ba3251c61d5002bb.bindPopup(popup_e627f8b317df42d18cfda76bc7d6a8a0);





              var marker_d1e025206a9643309b5a4b12300de1ae = L.marker(
                  [43.05586785,-76.14923484],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_693af90836264824be8d67e6db25b61c = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_d1e025206a9643309b5a4b12300de1ae.setIcon(icon_693af90836264824be8d67e6db25b61c);


              var popup_f5baeb91fcc0413087401a084c1e56e9 = L.popup({maxWidth: '300'});


                  var html_934bf1d012304edaa9ae9d3c91683b2e = $('<div id="html_934bf1d012304edaa9ae9d3c91683b2e" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>52</th></tr><tr><td>Trip # </td><td align="right">6159</td></tr><tr><td>Distance </td><td align="right">116 miles</td><tr><td>Date</td><td align="right">2017-12-10 16:51:08.99468</td></tr></table></div>')[0];
                  popup_f5baeb91fcc0413087401a084c1e56e9.setContent(html_934bf1d012304edaa9ae9d3c91683b2e);


              marker_d1e025206a9643309b5a4b12300de1ae.bindPopup(popup_f5baeb91fcc0413087401a084c1e56e9);





              var marker_b8ae4efd4099482a98d882f872069f5c = L.marker(
                  [44.92842404,-74.88025685],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_2788bc6260204355a3f88ca8693906d9 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_b8ae4efd4099482a98d882f872069f5c.setIcon(icon_2788bc6260204355a3f88ca8693906d9);


              var popup_13360b35b09548bba7b80da585439c18 = L.popup({maxWidth: '300'});


                  var html_8072a1d93f28481ab8c0421f737117f9 = $('<div id="html_8072a1d93f28481ab8c0421f737117f9" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>47</th></tr><tr><td>Trip # </td><td align="right">6544</td></tr><tr><td>Distance </td><td align="right">139 miles</td><tr><td>Date</td><td align="right">2017-12-15 10:50:30.524552</td></tr></table></div>')[0];
                  popup_13360b35b09548bba7b80da585439c18.setContent(html_8072a1d93f28481ab8c0421f737117f9);


              marker_b8ae4efd4099482a98d882f872069f5c.bindPopup(popup_13360b35b09548bba7b80da585439c18);





              var marker_211b1ba700724b6eb6825dcb94ad84ed = L.marker(
                  [43.05507532,-76.14872936],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_112ebe47925346ac93185178eaf823c3 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_211b1ba700724b6eb6825dcb94ad84ed.setIcon(icon_112ebe47925346ac93185178eaf823c3);


              var popup_24f078e2b9d2477cb74aaa095a6c8549 = L.popup({maxWidth: '300'});


                  var html_904e0ff23f714aaab069510f6b6a02a5 = $('<div id="html_904e0ff23f714aaab069510f6b6a02a5" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>47</th></tr><tr><td>Trip # </td><td align="right">6544</td></tr><tr><td>Distance </td><td align="right">139 miles</td><tr><td>Date</td><td align="right">2017-12-15 10:50:30.524552</td></tr></table></div>')[0];
                  popup_24f078e2b9d2477cb74aaa095a6c8549.setContent(html_904e0ff23f714aaab069510f6b6a02a5);


              marker_211b1ba700724b6eb6825dcb94ad84ed.bindPopup(popup_24f078e2b9d2477cb74aaa095a6c8549);





              var marker_1cb21ea9b0334f9e8459a8e9f56e68f6 = L.marker(
                  [43.99627785,-75.55649518],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_ace14459e6174b3fbbd861605f19a108 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_1cb21ea9b0334f9e8459a8e9f56e68f6.setIcon(icon_ace14459e6174b3fbbd861605f19a108);


              var popup_3f9fff08a2034f1fa969420464a6fab8 = L.popup({maxWidth: '300'});


                  var html_3c708efb878545b0bc70af2ffc096831 = $('<div id="html_3c708efb878545b0bc70af2ffc096831" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>32</th></tr><tr><td>Trip # </td><td align="right">6649</td></tr><tr><td>Distance </td><td align="right">124 miles</td><tr><td>Date</td><td align="right">2017-12-17 13:36:51.561549</td></tr></table></div>')[0];
                  popup_3f9fff08a2034f1fa969420464a6fab8.setContent(html_3c708efb878545b0bc70af2ffc096831);


              marker_1cb21ea9b0334f9e8459a8e9f56e68f6.bindPopup(popup_3f9fff08a2034f1fa969420464a6fab8);





              var marker_db4d071833ee4d479b245c01569d20f2 = L.marker(
                  [42.66138151,-73.78347272],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_d802063dc8f04606818760b360a161b2 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_db4d071833ee4d479b245c01569d20f2.setIcon(icon_d802063dc8f04606818760b360a161b2);


              var popup_0b68f138e74b4d83bfc32c6648e2f21f = L.popup({maxWidth: '300'});


                  var html_e26e912f9ff04d289ded858051b335f5 = $('<div id="html_e26e912f9ff04d289ded858051b335f5" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>32</th></tr><tr><td>Trip # </td><td align="right">6649</td></tr><tr><td>Distance </td><td align="right">124 miles</td><tr><td>Date</td><td align="right">2017-12-17 13:36:51.561549</td></tr></table></div>')[0];
                  popup_0b68f138e74b4d83bfc32c6648e2f21f.setContent(html_e26e912f9ff04d289ded858051b335f5);


              marker_db4d071833ee4d479b245c01569d20f2.bindPopup(popup_0b68f138e74b4d83bfc32c6648e2f21f);





              var marker_31446812133f4ec682a77d8c0652e517 = L.marker(
                  [44.73744926,-75.1463217],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_673ff7725b0b4f2a88fbb83acfc98216 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_31446812133f4ec682a77d8c0652e517.setIcon(icon_673ff7725b0b4f2a88fbb83acfc98216);


              var popup_b9edb657c8934212b6be5f5aa0368394 = L.popup({maxWidth: '300'});


                  var html_c002b7afb00d49878f01282698413136 = $('<div id="html_c002b7afb00d49878f01282698413136" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>55</th></tr><tr><td>Trip # </td><td align="right">6956</td></tr><tr><td>Distance </td><td align="right">117 miles</td><tr><td>Date</td><td align="right">2017-12-21 12:53:19.891337</td></tr></table></div>')[0];
                  popup_b9edb657c8934212b6be5f5aa0368394.setContent(html_c002b7afb00d49878f01282698413136);


              marker_31446812133f4ec682a77d8c0652e517.bindPopup(popup_b9edb657c8934212b6be5f5aa0368394);





              var marker_ac251fb5b5794bf88f07ecbd1254933c = L.marker(
                  [43.33101431,-73.69870838],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_972ed60ebc5143e3b55d36cde59be8f2 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_ac251fb5b5794bf88f07ecbd1254933c.setIcon(icon_972ed60ebc5143e3b55d36cde59be8f2);


              var popup_b4b838db7f5549c39c4292176da3933f = L.popup({maxWidth: '300'});


                  var html_e4b7e6a5012b4d68a764d3d7803d7cd0 = $('<div id="html_e4b7e6a5012b4d68a764d3d7803d7cd0" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>55</th></tr><tr><td>Trip # </td><td align="right">6956</td></tr><tr><td>Distance </td><td align="right">117 miles</td><tr><td>Date</td><td align="right">2017-12-21 12:53:19.891337</td></tr></table></div>')[0];
                  popup_b4b838db7f5549c39c4292176da3933f.setContent(html_e4b7e6a5012b4d68a764d3d7803d7cd0);


              marker_ac251fb5b5794bf88f07ecbd1254933c.bindPopup(popup_b4b838db7f5549c39c4292176da3933f);





              var marker_4898f949a8d1494db7cf11a74bc872e5 = L.marker(
                  [44.87435478,-74.87373074],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_e64ad9733b93472d8905bea40a05e6dd = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_4898f949a8d1494db7cf11a74bc872e5.setIcon(icon_e64ad9733b93472d8905bea40a05e6dd);


              var popup_9d9a210278cc41ebbf87850a2887aa19 = L.popup({maxWidth: '300'});


                  var html_4daa5ef72eb246ffb2609be8a949098a = $('<div id="html_4daa5ef72eb246ffb2609be8a949098a" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>40</th></tr><tr><td>Trip # </td><td align="right">7099</td></tr><tr><td>Distance </td><td align="right">136 miles</td><tr><td>Date</td><td align="right">2017-12-24 10:00:13.480228</td></tr></table></div>')[0];
                  popup_9d9a210278cc41ebbf87850a2887aa19.setContent(html_4daa5ef72eb246ffb2609be8a949098a);


              marker_4898f949a8d1494db7cf11a74bc872e5.bindPopup(popup_9d9a210278cc41ebbf87850a2887aa19);





              var marker_687f730ec2654850bd74437a1cbbfc06 = L.marker(
                  [43.04135917,-76.13777079],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_669f5ae2e4e14494b147d8a3de5d2404 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_687f730ec2654850bd74437a1cbbfc06.setIcon(icon_669f5ae2e4e14494b147d8a3de5d2404);


              var popup_9be7f475978f4d368cc6f4f563786534 = L.popup({maxWidth: '300'});


                  var html_651e874397564aa4b20a23c1ec6639ca = $('<div id="html_651e874397564aa4b20a23c1ec6639ca" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>40</th></tr><tr><td>Trip # </td><td align="right">7099</td></tr><tr><td>Distance </td><td align="right">136 miles</td><tr><td>Date</td><td align="right">2017-12-24 10:00:13.480228</td></tr></table></div>')[0];
                  popup_9be7f475978f4d368cc6f4f563786534.setContent(html_651e874397564aa4b20a23c1ec6639ca);


              marker_687f730ec2654850bd74437a1cbbfc06.bindPopup(popup_9be7f475978f4d368cc6f4f563786534);





              var marker_719bae43704b4e3b89c3ea1ad7bfecb9 = L.marker(
                  [43.99580067,-75.55646532],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_aeac08d6f30c4561a3e0a57cbbde4339 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_719bae43704b4e3b89c3ea1ad7bfecb9.setIcon(icon_aeac08d6f30c4561a3e0a57cbbde4339);


              var popup_64bca6630446406fb9102359e858d3a6 = L.popup({maxWidth: '300'});


                  var html_355ebe43f9eb4a85b598649e3e5edfba = $('<div id="html_355ebe43f9eb4a85b598649e3e5edfba" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>32</th></tr><tr><td>Trip # </td><td align="right">7138</td></tr><tr><td>Distance </td><td align="right">124 miles</td><tr><td>Date</td><td align="right">2017-12-26 13:31:37.800848</td></tr></table></div>')[0];
                  popup_64bca6630446406fb9102359e858d3a6.setContent(html_355ebe43f9eb4a85b598649e3e5edfba);


              marker_719bae43704b4e3b89c3ea1ad7bfecb9.bindPopup(popup_64bca6630446406fb9102359e858d3a6);





              var marker_c066e3a5cf2940738db822759ac8decf = L.marker(
                  [42.66120777,-73.7837222],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_d5d6a894ca3d4cd786afb7c12a7b0788 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_c066e3a5cf2940738db822759ac8decf.setIcon(icon_d5d6a894ca3d4cd786afb7c12a7b0788);


              var popup_a5531f05d74540f6b2508dc481edd5d3 = L.popup({maxWidth: '300'});


                  var html_62d3f54370554f4d9ebaa796f8a750fc = $('<div id="html_62d3f54370554f4d9ebaa796f8a750fc" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>32</th></tr><tr><td>Trip # </td><td align="right">7138</td></tr><tr><td>Distance </td><td align="right">124 miles</td><tr><td>Date</td><td align="right">2017-12-26 13:31:37.800848</td></tr></table></div>')[0];
                  popup_a5531f05d74540f6b2508dc481edd5d3.setContent(html_62d3f54370554f4d9ebaa796f8a750fc);


              marker_c066e3a5cf2940738db822759ac8decf.bindPopup(popup_a5531f05d74540f6b2508dc481edd5d3);





              var marker_7b5e9f0f46ef484ca2f9c0cd536534fc = L.marker(
                  [44.13067876,-76.32082785],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_ddf291356beb4651a9fbfbdbf5d320c2 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_7b5e9f0f46ef484ca2f9c0cd536534fc.setIcon(icon_ddf291356beb4651a9fbfbdbf5d320c2);


              var popup_de0d5b244f2d45ff8ae3e5237b0f7ee9 = L.popup({maxWidth: '300'});


                  var html_6ce361c3b8d346fbb7de7d924fe3889d = $('<div id="html_6ce361c3b8d346fbb7de7d924fe3889d" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>53</th></tr><tr><td>Trip # </td><td align="right">7245</td></tr><tr><td>Distance </td><td align="right">130 miles</td><tr><td>Date</td><td align="right">2017-12-28 08:05:58.779577</td></tr></table></div>')[0];
                  popup_de0d5b244f2d45ff8ae3e5237b0f7ee9.setContent(html_6ce361c3b8d346fbb7de7d924fe3889d);


              marker_7b5e9f0f46ef484ca2f9c0cd536534fc.bindPopup(popup_de0d5b244f2d45ff8ae3e5237b0f7ee9);





              var marker_d9622d254483440c95e412776fc195cb = L.marker(
                  [42.18867171,-76.05752081],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_c4c703bd29f44fe59e224c1563d2f36e = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_d9622d254483440c95e412776fc195cb.setIcon(icon_c4c703bd29f44fe59e224c1563d2f36e);


              var popup_6e50781462d54b53bdc8c7d931876c76 = L.popup({maxWidth: '300'});


                  var html_d6f0874f90e441bbaf70682fd4826ff5 = $('<div id="html_d6f0874f90e441bbaf70682fd4826ff5" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>53</th></tr><tr><td>Trip # </td><td align="right">7245</td></tr><tr><td>Distance </td><td align="right">130 miles</td><tr><td>Date</td><td align="right">2017-12-28 08:05:58.779577</td></tr></table></div>')[0];
                  popup_6e50781462d54b53bdc8c7d931876c76.setContent(html_d6f0874f90e441bbaf70682fd4826ff5);


              marker_d9622d254483440c95e412776fc195cb.bindPopup(popup_6e50781462d54b53bdc8c7d931876c76);





              var marker_ab812999d94649b0bd9b97f0513d16c5 = L.marker(
                  [43.99554237,-75.55643836],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_0e8c135436b241e39ce8438bf6acce89 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_ab812999d94649b0bd9b97f0513d16c5.setIcon(icon_0e8c135436b241e39ce8438bf6acce89);


              var popup_4cd81c74f29a487e97a6b3f1c8244eef = L.popup({maxWidth: '300'});


                  var html_c2c29e49dcab4207a4e9686032e315d1 = $('<div id="html_c2c29e49dcab4207a4e9686032e315d1" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>32</th></tr><tr><td>Trip # </td><td align="right">7429</td></tr><tr><td>Distance </td><td align="right">124 miles</td><tr><td>Date</td><td align="right">2017-12-31 13:32:42.195868</td></tr></table></div>')[0];
                  popup_4cd81c74f29a487e97a6b3f1c8244eef.setContent(html_c2c29e49dcab4207a4e9686032e315d1);


              marker_ab812999d94649b0bd9b97f0513d16c5.bindPopup(popup_4cd81c74f29a487e97a6b3f1c8244eef);





              var marker_ed96ebbadc6e4d90821a1802d954c98d = L.marker(
                  [42.66127266,-73.78356891],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_e6f763e53b9143b784b11a7318cfdb02 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_ed96ebbadc6e4d90821a1802d954c98d.setIcon(icon_e6f763e53b9143b784b11a7318cfdb02);


              var popup_de7e2d84a2304fb1b168ce2e501e025a = L.popup({maxWidth: '300'});


                  var html_06ca0369ba744e2f88fea4b9d7f433e8 = $('<div id="html_06ca0369ba744e2f88fea4b9d7f433e8" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>32</th></tr><tr><td>Trip # </td><td align="right">7429</td></tr><tr><td>Distance </td><td align="right">124 miles</td><tr><td>Date</td><td align="right">2017-12-31 13:32:42.195868</td></tr></table></div>')[0];
                  popup_de7e2d84a2304fb1b168ce2e501e025a.setContent(html_06ca0369ba744e2f88fea4b9d7f433e8);


              marker_ed96ebbadc6e4d90821a1802d954c98d.bindPopup(popup_de7e2d84a2304fb1b168ce2e501e025a);





              var marker_e32a0fad286741eb932972f1a62bfe50 = L.marker(
                  [43.00771455,-76.16719184],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_4704c3ae0b2441d19f4542f7569c33ca = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_e32a0fad286741eb932972f1a62bfe50.setIcon(icon_4704c3ae0b2441d19f4542f7569c33ca);


              var popup_2d0f2232ca00434b925c8bcd611c453e = L.popup({maxWidth: '300'});


                  var html_adfcaabd702243f5a0d5fb3d10a22b28 = $('<div id="html_adfcaabd702243f5a0d5fb3d10a22b28" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>150</th></tr><tr><td>Trip # </td><td align="right">7555</td></tr><tr><td>Distance </td><td align="right">117 miles</td><tr><td>Date</td><td align="right">2018-01-05 01:06:49.550809</td></tr></table></div>')[0];
                  popup_2d0f2232ca00434b925c8bcd611c453e.setContent(html_adfcaabd702243f5a0d5fb3d10a22b28);


              marker_e32a0fad286741eb932972f1a62bfe50.bindPopup(popup_2d0f2232ca00434b925c8bcd611c453e);





              var marker_1c6b0b0670424927b4640fbb556bb68d = L.marker(
                  [44.69240035,-75.49568553],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_0e90951ce9ce4ef28cf93ed641ec3f8a = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_1c6b0b0670424927b4640fbb556bb68d.setIcon(icon_0e90951ce9ce4ef28cf93ed641ec3f8a);


              var popup_9961c41c258d48f48406262503b9e838 = L.popup({maxWidth: '300'});


                  var html_6f18c3adf85442a28915e85d32fb7f62 = $('<div id="html_6f18c3adf85442a28915e85d32fb7f62" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>150</th></tr><tr><td>Trip # </td><td align="right">7555</td></tr><tr><td>Distance </td><td align="right">117 miles</td><tr><td>Date</td><td align="right">2018-01-05 01:06:49.550809</td></tr></table></div>')[0];
                  popup_9961c41c258d48f48406262503b9e838.setContent(html_6f18c3adf85442a28915e85d32fb7f62);


              marker_1c6b0b0670424927b4640fbb556bb68d.bindPopup(popup_9961c41c258d48f48406262503b9e838);





              var marker_5347c1aac25b40838b589c6c8dfb33f2 = L.marker(
                  [42.661278964160104,-73.7836964916656],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_d66fcd6eb0a1479da559337c419f350d = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_5347c1aac25b40838b589c6c8dfb33f2.setIcon(icon_d66fcd6eb0a1479da559337c419f350d);


              var popup_b1349adf2375482e91035ad4b651d9b7 = L.popup({maxWidth: '300'});


                  var html_d0ef2afb09884128976b1e6d72c5f7d8 = $('<div id="html_d0ef2afb09884128976b1e6d72c5f7d8" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">7696</td></tr><tr><td>Distance </td><td align="right">141 miles</td><tr><td>Date</td><td align="right">2018-01-06 02:27:22.668478</td></tr></table></div>')[0];
                  popup_b1349adf2375482e91035ad4b651d9b7.setContent(html_d0ef2afb09884128976b1e6d72c5f7d8);


              marker_5347c1aac25b40838b589c6c8dfb33f2.bindPopup(popup_b1349adf2375482e91035ad4b651d9b7);





              var marker_e4e004bb01a245bba553adfabc9c4e14 = L.marker(
                  [44.1701389716971,-75.838529993723],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_b1b16f5d010043e1ba991263294ba8f9 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_e4e004bb01a245bba553adfabc9c4e14.setIcon(icon_b1b16f5d010043e1ba991263294ba8f9);


              var popup_6bda54e61b8a45c5b76b19cf220458bc = L.popup({maxWidth: '300'});


                  var html_31e0f8a738f7456a9238c08ddd98bc82 = $('<div id="html_31e0f8a738f7456a9238c08ddd98bc82" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">7696</td></tr><tr><td>Distance </td><td align="right">141 miles</td><tr><td>Date</td><td align="right">2018-01-06 02:27:22.668478</td></tr></table></div>')[0];
                  popup_6bda54e61b8a45c5b76b19cf220458bc.setContent(html_31e0f8a738f7456a9238c08ddd98bc82);


              marker_e4e004bb01a245bba553adfabc9c4e14.bindPopup(popup_6bda54e61b8a45c5b76b19cf220458bc);





              var marker_d031c48484cb49bc9dfa9e12196d0519 = L.marker(
                  [43.05522423,-76.14801529],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_3b05a7877ab947f2bb938c89da2ee24b = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_d031c48484cb49bc9dfa9e12196d0519.setIcon(icon_3b05a7877ab947f2bb938c89da2ee24b);


              var popup_a41a2215d6d34615a3d6c27cc3006bdd = L.popup({maxWidth: '300'});


                  var html_ae67d3d4d0404da1bfa5709d495364a5 = $('<div id="html_ae67d3d4d0404da1bfa5709d495364a5" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>115</th></tr><tr><td>Trip # </td><td align="right">8136</td></tr><tr><td>Distance </td><td align="right">122 miles</td><tr><td>Date</td><td align="right">2018-01-12 23:07:51.614707</td></tr></table></div>')[0];
                  popup_a41a2215d6d34615a3d6c27cc3006bdd.setContent(html_ae67d3d4d0404da1bfa5709d495364a5);


              marker_d031c48484cb49bc9dfa9e12196d0519.bindPopup(popup_a41a2215d6d34615a3d6c27cc3006bdd);





              var marker_f464a6a9ba2b453c858a5efbbf4fd013 = L.marker(
                  [44.67969338,-74.98465325],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_b5585e7629c14d639684421aebcb9db6 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_f464a6a9ba2b453c858a5efbbf4fd013.setIcon(icon_b5585e7629c14d639684421aebcb9db6);


              var popup_5cc452710a27464a99a6776ef1fbb2db = L.popup({maxWidth: '300'});


                  var html_dac2ab75571b4f049fb3f06c2fec1de6 = $('<div id="html_dac2ab75571b4f049fb3f06c2fec1de6" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>115</th></tr><tr><td>Trip # </td><td align="right">8136</td></tr><tr><td>Distance </td><td align="right">122 miles</td><tr><td>Date</td><td align="right">2018-01-12 23:07:51.614707</td></tr></table></div>')[0];
                  popup_5cc452710a27464a99a6776ef1fbb2db.setContent(html_dac2ab75571b4f049fb3f06c2fec1de6);


              marker_f464a6a9ba2b453c858a5efbbf4fd013.bindPopup(popup_5cc452710a27464a99a6776ef1fbb2db);





              var marker_a25cd305c3a34a66850555e179a25b64 = L.marker(
                  [42.661336798977,-73.7835250031618],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_7dd8afa8ac6d4754a04ed2b565b07602 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_a25cd305c3a34a66850555e179a25b64.setIcon(icon_7dd8afa8ac6d4754a04ed2b565b07602);


              var popup_724a4366fa9a428382b1fc8cdc0d0aba = L.popup({maxWidth: '300'});


                  var html_971ae43bcd694beb878e51f921a5a43f = $('<div id="html_971ae43bcd694beb878e51f921a5a43f" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">8147</td></tr><tr><td>Distance </td><td align="right">141 miles</td><tr><td>Date</td><td align="right">2018-01-13 09:45:37.38746</td></tr></table></div>')[0];
                  popup_724a4366fa9a428382b1fc8cdc0d0aba.setContent(html_971ae43bcd694beb878e51f921a5a43f);


              marker_a25cd305c3a34a66850555e179a25b64.bindPopup(popup_724a4366fa9a428382b1fc8cdc0d0aba);





              var marker_ce08c8969d144919be8d284cdf5f4792 = L.marker(
                  [44.170069473301,-75.8385163019323],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_a9a2242e158144288371bb74d8b627ce = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_ce08c8969d144919be8d284cdf5f4792.setIcon(icon_a9a2242e158144288371bb74d8b627ce);


              var popup_6e07029d7886456ca3018b4a1b6f5ae3 = L.popup({maxWidth: '300'});


                  var html_c5dec7150512459aa9b44b646bb4d44c = $('<div id="html_c5dec7150512459aa9b44b646bb4d44c" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">8147</td></tr><tr><td>Distance </td><td align="right">141 miles</td><tr><td>Date</td><td align="right">2018-01-13 09:45:37.38746</td></tr></table></div>')[0];
                  popup_6e07029d7886456ca3018b4a1b6f5ae3.setContent(html_c5dec7150512459aa9b44b646bb4d44c);


              marker_ce08c8969d144919be8d284cdf5f4792.bindPopup(popup_6e07029d7886456ca3018b4a1b6f5ae3);





              var marker_8e5e875697cc457fa99364a5871989bb = L.marker(
                  [42.86836953,-73.91026055],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_542daf5b44564a6aab17ea74d58563ec = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_8e5e875697cc457fa99364a5871989bb.setIcon(icon_542daf5b44564a6aab17ea74d58563ec);


              var popup_3a63ce80eb5e4b888ace2cdce6ce62e1 = L.popup({maxWidth: '300'});


                  var html_2799089029ae490ea7f50ca8e661059a = $('<div id="html_2799089029ae490ea7f50ca8e661059a" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>23</th></tr><tr><td>Trip # </td><td align="right">8192</td></tr><tr><td>Distance </td><td align="right">123 miles</td><tr><td>Date</td><td align="right">2018-01-13 01:10:20.286349</td></tr></table></div>')[0];
                  popup_3a63ce80eb5e4b888ace2cdce6ce62e1.setContent(html_2799089029ae490ea7f50ca8e661059a);


              marker_8e5e875697cc457fa99364a5871989bb.bindPopup(popup_3a63ce80eb5e4b888ace2cdce6ce62e1);





              var marker_9e2890fd9b364dcd8aedb30b3569584f = L.marker(
                  [44.08769316,-75.80708506],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_5890e1d226284ee88f8ccfc7eff3a6ed = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_9e2890fd9b364dcd8aedb30b3569584f.setIcon(icon_5890e1d226284ee88f8ccfc7eff3a6ed);


              var popup_58b21451ff6241898c3ddeac1abb9323 = L.popup({maxWidth: '300'});


                  var html_9ff0c479704f40169abf95d81006d44c = $('<div id="html_9ff0c479704f40169abf95d81006d44c" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>23</th></tr><tr><td>Trip # </td><td align="right">8192</td></tr><tr><td>Distance </td><td align="right">123 miles</td><tr><td>Date</td><td align="right">2018-01-13 01:10:20.286349</td></tr></table></div>')[0];
                  popup_58b21451ff6241898c3ddeac1abb9323.setContent(html_9ff0c479704f40169abf95d81006d44c);


              marker_9e2890fd9b364dcd8aedb30b3569584f.bindPopup(popup_58b21451ff6241898c3ddeac1abb9323);





              var marker_f35853a6fd2040f3bcd0b75eb3a1402f = L.marker(
                  [42.8682322011422,-73.9103845236454],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_b2e66a3a37674b96a51335fbb4e6ae56 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_f35853a6fd2040f3bcd0b75eb3a1402f.setIcon(icon_b2e66a3a37674b96a51335fbb4e6ae56);


              var popup_c931e717b5164cdab58b41319df6b5be = L.popup({maxWidth: '300'});


                  var html_9963d687fb284225a90072b044fcf8b5 = $('<div id="html_9963d687fb284225a90072b044fcf8b5" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>25</th></tr><tr><td>Trip # </td><td align="right">8767</td></tr><tr><td>Distance </td><td align="right">122 miles</td><tr><td>Date</td><td align="right">2018-01-20 22:00:03.005193</td></tr></table></div>')[0];
                  popup_c931e717b5164cdab58b41319df6b5be.setContent(html_9963d687fb284225a90072b044fcf8b5);


              marker_f35853a6fd2040f3bcd0b75eb3a1402f.bindPopup(popup_c931e717b5164cdab58b41319df6b5be);





              var marker_01d337dccb11400ba597170e59291d31 = L.marker(
                  [43.9660644119629,-75.9160172584886],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_63c6f5d9d5764c08aaa65eb65e3341d5 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_01d337dccb11400ba597170e59291d31.setIcon(icon_63c6f5d9d5764c08aaa65eb65e3341d5);


              var popup_67aefde632a04a38ac52fe37ac649861 = L.popup({maxWidth: '300'});


                  var html_11db95c5c5e14c46ae36ef459e14ca40 = $('<div id="html_11db95c5c5e14c46ae36ef459e14ca40" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>25</th></tr><tr><td>Trip # </td><td align="right">8767</td></tr><tr><td>Distance </td><td align="right">122 miles</td><tr><td>Date</td><td align="right">2018-01-20 22:00:03.005193</td></tr></table></div>')[0];
                  popup_67aefde632a04a38ac52fe37ac649861.setContent(html_11db95c5c5e14c46ae36ef459e14ca40);


              marker_01d337dccb11400ba597170e59291d31.bindPopup(popup_67aefde632a04a38ac52fe37ac649861);





              var marker_1f4fc06061664baa93421386487e2653 = L.marker(
                  [43.03853303,-77.66665237],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_bba0b77d7a1746dcb2c491e75f0b4454 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_1f4fc06061664baa93421386487e2653.setIcon(icon_bba0b77d7a1746dcb2c491e75f0b4454);


              var popup_4607e4dc11da4bf0837e0e5b5ac7c800 = L.popup({maxWidth: '300'});


                  var html_30b96ce12a584c1f83e734bf4bfcb1d4 = $('<div id="html_30b96ce12a584c1f83e734bf4bfcb1d4" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>87</th></tr><tr><td>Trip # </td><td align="right">8554</td></tr><tr><td>Distance </td><td align="right">119 miles</td><tr><td>Date</td><td align="right">2018-01-22 18:55:39.841126</td></tr></table></div>')[0];
                  popup_4607e4dc11da4bf0837e0e5b5ac7c800.setContent(html_30b96ce12a584c1f83e734bf4bfcb1d4);


              marker_1f4fc06061664baa93421386487e2653.bindPopup(popup_4607e4dc11da4bf0837e0e5b5ac7c800);





              var marker_232d67932c7d47e087e5c98bb3580f05 = L.marker(
                  [43.8877710316813,-75.51297751349979],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_38348012a0074320982dca83a6d8d0f3 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_232d67932c7d47e087e5c98bb3580f05.setIcon(icon_38348012a0074320982dca83a6d8d0f3);


              var popup_b7382af994a944a39fb1cc4e56980293 = L.popup({maxWidth: '300'});


                  var html_24dc9c5346914ff4b0d897ff1fbfcc69 = $('<div id="html_24dc9c5346914ff4b0d897ff1fbfcc69" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>87</th></tr><tr><td>Trip # </td><td align="right">8554</td></tr><tr><td>Distance </td><td align="right">119 miles</td><tr><td>Date</td><td align="right">2018-01-22 18:55:39.841126</td></tr></table></div>')[0];
                  popup_b7382af994a944a39fb1cc4e56980293.setContent(html_24dc9c5346914ff4b0d897ff1fbfcc69);


              marker_232d67932c7d47e087e5c98bb3580f05.bindPopup(popup_b7382af994a944a39fb1cc4e56980293);





              var marker_ead83701d8d4447582d8b19ffb200482 = L.marker(
                  [43.04861407,-77.6582999],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_11f69ed5b337451aae21a83417cc6ac2 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_ead83701d8d4447582d8b19ffb200482.setIcon(icon_11f69ed5b337451aae21a83417cc6ac2);


              var popup_893dd571399242cc9ebc5ac36a9671b8 = L.popup({maxWidth: '300'});


                  var html_3147428bde17406c99ab073a3f65bb94 = $('<div id="html_3147428bde17406c99ab073a3f65bb94" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>16</th></tr><tr><td>Trip # </td><td align="right">1411</td></tr><tr><td>Distance </td><td align="right">115 miles</td><tr><td>Date</td><td align="right">2017-09-04 23:04:09.589799</td></tr></table></div>')[0];
                  popup_893dd571399242cc9ebc5ac36a9671b8.setContent(html_3147428bde17406c99ab073a3f65bb94);


              marker_ead83701d8d4447582d8b19ffb200482.bindPopup(popup_893dd571399242cc9ebc5ac36a9671b8);





              var marker_23d182070fbc4daaa7075399f8e17046 = L.marker(
                  [44.17020228,-75.8385959],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_2a5b664a039c46e8b4f03e28b400a3ea = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_23d182070fbc4daaa7075399f8e17046.setIcon(icon_2a5b664a039c46e8b4f03e28b400a3ea);


              var popup_fb9d352a9d0543bd9cda542f58642e33 = L.popup({maxWidth: '300'});


                  var html_b1c83b8671364a3da17ed92c7c472698 = $('<div id="html_b1c83b8671364a3da17ed92c7c472698" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>16</th></tr><tr><td>Trip # </td><td align="right">1411</td></tr><tr><td>Distance </td><td align="right">115 miles</td><tr><td>Date</td><td align="right">2017-09-04 23:04:09.589799</td></tr></table></div>')[0];
                  popup_fb9d352a9d0543bd9cda542f58642e33.setContent(html_b1c83b8671364a3da17ed92c7c472698);


              marker_23d182070fbc4daaa7075399f8e17046.bindPopup(popup_fb9d352a9d0543bd9cda542f58642e33);





              var marker_b63ad9dfe16647c9997ab0d3a0fb02ed = L.marker(
                  [43.05579861,-76.14952319],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_4904b6e2d0314a0ab23e4354a264b76b = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_b63ad9dfe16647c9997ab0d3a0fb02ed.setIcon(icon_4904b6e2d0314a0ab23e4354a264b76b);


              var popup_0b92b5e1b83049dda17162957c54ec4a = L.popup({maxWidth: '300'});


                  var html_56aa0bd1b5ff4c29bf5fd45f63847ba5 = $('<div id="html_56aa0bd1b5ff4c29bf5fd45f63847ba5" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">1483</td></tr><tr><td>Distance </td><td align="right">113 miles</td><tr><td>Date</td><td align="right">2017-09-07 12:53:16.600513</td></tr></table></div>')[0];
                  popup_0b92b5e1b83049dda17162957c54ec4a.setContent(html_56aa0bd1b5ff4c29bf5fd45f63847ba5);


              marker_b63ad9dfe16647c9997ab0d3a0fb02ed.bindPopup(popup_0b92b5e1b83049dda17162957c54ec4a);





              var marker_18d46de5a3834252a8a0b31abcc6358d = L.marker(
                  [44.68631092,-75.49307902],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_9d21493c8811493e935b73da084dfe01 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_18d46de5a3834252a8a0b31abcc6358d.setIcon(icon_9d21493c8811493e935b73da084dfe01);


              var popup_02f8b81b5bea4411b6fcc9c3da4af08e = L.popup({maxWidth: '300'});


                  var html_c5f2fdb9917042a68366749ce93b2b8b = $('<div id="html_c5f2fdb9917042a68366749ce93b2b8b" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">1483</td></tr><tr><td>Distance </td><td align="right">113 miles</td><tr><td>Date</td><td align="right">2017-09-07 12:53:16.600513</td></tr></table></div>')[0];
                  popup_02f8b81b5bea4411b6fcc9c3da4af08e.setContent(html_c5f2fdb9917042a68366749ce93b2b8b);


              marker_18d46de5a3834252a8a0b31abcc6358d.bindPopup(popup_02f8b81b5bea4411b6fcc9c3da4af08e);





              var marker_08960d59733241c7a47dddac356974c5 = L.marker(
                  [43.10619202,-75.25476973],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_e585336a4a694440a9fb690433d4135a = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_08960d59733241c7a47dddac356974c5.setIcon(icon_e585336a4a694440a9fb690433d4135a);


              var popup_2ee5ed3315714f3b8f35630dfca775be = L.popup({maxWidth: '300'});


                  var html_7312c0418b9b4eeeaf03916d8104c1d4 = $('<div id="html_7312c0418b9b4eeeaf03916d8104c1d4" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">1728</td></tr><tr><td>Distance </td><td align="right">119 miles</td><tr><td>Date</td><td align="right">2017-09-15 23:16:42.388421</td></tr></table></div>')[0];
                  popup_2ee5ed3315714f3b8f35630dfca775be.setContent(html_7312c0418b9b4eeeaf03916d8104c1d4);


              marker_08960d59733241c7a47dddac356974c5.bindPopup(popup_2ee5ed3315714f3b8f35630dfca775be);





              var marker_37b270f0189d4d96a5d052f4f58cf9d6 = L.marker(
                  [44.87425276,-74.87384122],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_52e9dfc0982e42d694fcfbf14af77d9c = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_37b270f0189d4d96a5d052f4f58cf9d6.setIcon(icon_52e9dfc0982e42d694fcfbf14af77d9c);


              var popup_0750e1f98cc045928eb90f0576018f75 = L.popup({maxWidth: '300'});


                  var html_aa8263f2e41543c0ad90653762f56de4 = $('<div id="html_aa8263f2e41543c0ad90653762f56de4" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">1728</td></tr><tr><td>Distance </td><td align="right">119 miles</td><tr><td>Date</td><td align="right">2017-09-15 23:16:42.388421</td></tr></table></div>')[0];
                  popup_0750e1f98cc045928eb90f0576018f75.setContent(html_aa8263f2e41543c0ad90653762f56de4);


              marker_37b270f0189d4d96a5d052f4f58cf9d6.bindPopup(popup_0750e1f98cc045928eb90f0576018f75);





              var marker_d95a8477011e4b3880d3952862b20cbc = L.marker(
                  [43.10683847,-75.25390490000001],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_d4e281c2ec3b419d81f9dfcb9e99888b = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_d95a8477011e4b3880d3952862b20cbc.setIcon(icon_d4e281c2ec3b419d81f9dfcb9e99888b);


              var popup_4144e648d768460f93f9f28a94a8ec27 = L.popup({maxWidth: '300'});


                  var html_67eefbaf79c742aaa6464535b23cfd2f = $('<div id="html_67eefbaf79c742aaa6464535b23cfd2f" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>40</th></tr><tr><td>Trip # </td><td align="right">2481</td></tr><tr><td>Distance </td><td align="right">122 miles</td><tr><td>Date</td><td align="right">2017-10-06 11:39:32.569468</td></tr></table></div>')[0];
                  popup_4144e648d768460f93f9f28a94a8ec27.setContent(html_67eefbaf79c742aaa6464535b23cfd2f);


              marker_d95a8477011e4b3880d3952862b20cbc.bindPopup(popup_4144e648d768460f93f9f28a94a8ec27);





              var marker_ee8def4c125d4585a2ea2652eb88d25b = L.marker(
                  [44.91226866,-74.88556389],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_97c3c79e403a4cdd8723e94072229e31 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_ee8def4c125d4585a2ea2652eb88d25b.setIcon(icon_97c3c79e403a4cdd8723e94072229e31);


              var popup_72c3cae5363143f8954f8740f0ae9f32 = L.popup({maxWidth: '300'});


                  var html_ceaa2ddeefaa42ff93f521fb1162d6c6 = $('<div id="html_ceaa2ddeefaa42ff93f521fb1162d6c6" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>40</th></tr><tr><td>Trip # </td><td align="right">2481</td></tr><tr><td>Distance </td><td align="right">122 miles</td><tr><td>Date</td><td align="right">2017-10-06 11:39:32.569468</td></tr></table></div>')[0];
                  popup_72c3cae5363143f8954f8740f0ae9f32.setContent(html_ceaa2ddeefaa42ff93f521fb1162d6c6);


              marker_ee8def4c125d4585a2ea2652eb88d25b.bindPopup(popup_72c3cae5363143f8954f8740f0ae9f32);





              var marker_37bb3379f94243d7a59e39b175954902 = L.marker(
                  [42.86830018,-73.91038884],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_04b0c8278b6048c9b915138a94e6e5e9 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_37bb3379f94243d7a59e39b175954902.setIcon(icon_04b0c8278b6048c9b915138a94e6e5e9);


              var popup_f33ebeef749c4afe9364d6b91e1d7177 = L.popup({maxWidth: '300'});


                  var html_7c391aa097ad4c95887cab2cb11346f8 = $('<div id="html_7c391aa097ad4c95887cab2cb11346f8" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>86</th></tr><tr><td>Trip # </td><td align="right">2583</td></tr><tr><td>Distance </td><td align="right">113 miles</td><tr><td>Date</td><td align="right">2017-10-07 23:56:56.079198</td></tr></table></div>')[0];
                  popup_f33ebeef749c4afe9364d6b91e1d7177.setContent(html_7c391aa097ad4c95887cab2cb11346f8);


              marker_37bb3379f94243d7a59e39b175954902.bindPopup(popup_f33ebeef749c4afe9364d6b91e1d7177);





              var marker_a2d7001eb4bc4713b0c32c2b5781bcdb = L.marker(
                  [43.85464226,-75.8022129],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_aeeb220f9f0c4593812babf13439737c = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_a2d7001eb4bc4713b0c32c2b5781bcdb.setIcon(icon_aeeb220f9f0c4593812babf13439737c);


              var popup_4bb1aa708727424f86cad84267b2d14b = L.popup({maxWidth: '300'});


                  var html_c52ea4531f7349d8a6e7f176f036cea1 = $('<div id="html_c52ea4531f7349d8a6e7f176f036cea1" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>86</th></tr><tr><td>Trip # </td><td align="right">2583</td></tr><tr><td>Distance </td><td align="right">113 miles</td><tr><td>Date</td><td align="right">2017-10-07 23:56:56.079198</td></tr></table></div>')[0];
                  popup_4bb1aa708727424f86cad84267b2d14b.setContent(html_c52ea4531f7349d8a6e7f176f036cea1);


              marker_a2d7001eb4bc4713b0c32c2b5781bcdb.bindPopup(popup_4bb1aa708727424f86cad84267b2d14b);





              var marker_dea59c5dd10c45fe9c0da314c720b6d6 = L.marker(
                  [42.66120872,-73.78363844],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_622e7019af3a437aaaba802978f54b20 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_dea59c5dd10c45fe9c0da314c720b6d6.setIcon(icon_622e7019af3a437aaaba802978f54b20);


              var popup_8e259152b2574492956f553a2d769cdc = L.popup({maxWidth: '300'});


                  var html_0933a3588ec146cda6e678356cd2a349 = $('<div id="html_0933a3588ec146cda6e678356cd2a349" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">2800</td></tr><tr><td>Distance </td><td align="right">141 miles</td><tr><td>Date</td><td align="right">2017-10-13 22:09:24.455018</td></tr></table></div>')[0];
                  popup_8e259152b2574492956f553a2d769cdc.setContent(html_0933a3588ec146cda6e678356cd2a349);


              marker_dea59c5dd10c45fe9c0da314c720b6d6.bindPopup(popup_8e259152b2574492956f553a2d769cdc);





              var marker_197af416796442d8b29d0cfe9b3d6c38 = L.marker(
                  [44.17004469,-75.83852833],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_0db7ff7898024e609610ddec61414f5d = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_197af416796442d8b29d0cfe9b3d6c38.setIcon(icon_0db7ff7898024e609610ddec61414f5d);


              var popup_6e6dcd5a95984a52b23c8f23b3ae7dc2 = L.popup({maxWidth: '300'});


                  var html_b1d2b37d658c47e4bedffc3f3d26d6cf = $('<div id="html_b1d2b37d658c47e4bedffc3f3d26d6cf" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">2800</td></tr><tr><td>Distance </td><td align="right">141 miles</td><tr><td>Date</td><td align="right">2017-10-13 22:09:24.455018</td></tr></table></div>')[0];
                  popup_6e6dcd5a95984a52b23c8f23b3ae7dc2.setContent(html_b1d2b37d658c47e4bedffc3f3d26d6cf);


              marker_197af416796442d8b29d0cfe9b3d6c38.bindPopup(popup_6e6dcd5a95984a52b23c8f23b3ae7dc2);





              var marker_aa9293ee9b554ec1a3ba2a735661650a = L.marker(
                  [42.8682741400517,-73.91036556474221],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_70af01bed59346398b48768db09defc2 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_aa9293ee9b554ec1a3ba2a735661650a.setIcon(icon_70af01bed59346398b48768db09defc2);


              var popup_0b6dd33a62af43bba28c2c6ccc702533 = L.popup({maxWidth: '300'});


                  var html_c334bef524eb4cc2bc9d6e9541e8ee17 = $('<div id="html_c334bef524eb4cc2bc9d6e9541e8ee17" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>21</th></tr><tr><td>Trip # </td><td align="right">2832</td></tr><tr><td>Distance </td><td align="right">126 miles</td><tr><td>Date</td><td align="right">2017-10-13 22:44:56.940562</td></tr></table></div>')[0];
                  popup_0b6dd33a62af43bba28c2c6ccc702533.setContent(html_c334bef524eb4cc2bc9d6e9541e8ee17);


              marker_aa9293ee9b554ec1a3ba2a735661650a.bindPopup(popup_0b6dd33a62af43bba28c2c6ccc702533);





              var marker_3cfe4937a8ca43f79c646c591d3cbe8f = L.marker(
                  [44.063097808399895,-75.9223689303353],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_6ec4b072f65246d9b96ab63d76e2bc21 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_3cfe4937a8ca43f79c646c591d3cbe8f.setIcon(icon_6ec4b072f65246d9b96ab63d76e2bc21);


              var popup_52f582bccf464fc095ba89a3c7705c26 = L.popup({maxWidth: '300'});


                  var html_f698c3759c3846aa82c2e2d16d809774 = $('<div id="html_f698c3759c3846aa82c2e2d16d809774" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>21</th></tr><tr><td>Trip # </td><td align="right">2832</td></tr><tr><td>Distance </td><td align="right">126 miles</td><tr><td>Date</td><td align="right">2017-10-13 22:44:56.940562</td></tr></table></div>')[0];
                  popup_52f582bccf464fc095ba89a3c7705c26.setContent(html_f698c3759c3846aa82c2e2d16d809774);


              marker_3cfe4937a8ca43f79c646c591d3cbe8f.bindPopup(popup_52f582bccf464fc095ba89a3c7705c26);





              var marker_3a9b1f9629b748b8af4cae8f7445dd2f = L.marker(
                  [42.72777619,-73.79926995],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_6adce6a81fc74464847b9ad55e8278de = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_3a9b1f9629b748b8af4cae8f7445dd2f.setIcon(icon_6adce6a81fc74464847b9ad55e8278de);


              var popup_574609c025374dd6a11ff3352ad6d3dc = L.popup({maxWidth: '300'});


                  var html_bd86bf8bdeec4de68c4016b00a220b99 = $('<div id="html_bd86bf8bdeec4de68c4016b00a220b99" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>4</th></tr><tr><td>Trip # </td><td align="right">3044</td></tr><tr><td>Distance </td><td align="right">121 miles</td><tr><td>Date</td><td align="right">2017-10-18 23:24:38.57702</td></tr></table></div>')[0];
                  popup_574609c025374dd6a11ff3352ad6d3dc.setContent(html_bd86bf8bdeec4de68c4016b00a220b99);


              marker_3a9b1f9629b748b8af4cae8f7445dd2f.bindPopup(popup_574609c025374dd6a11ff3352ad6d3dc);





              var marker_0b85a1dc95c54659afb6bc37665f2eb9 = L.marker(
                  [43.9766088,-75.61979971],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_2dc19aa32fc34ceba1a11f736ccbfcae = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_0b85a1dc95c54659afb6bc37665f2eb9.setIcon(icon_2dc19aa32fc34ceba1a11f736ccbfcae);


              var popup_3d6d31505a734960ab72fe71babf9884 = L.popup({maxWidth: '300'});


                  var html_0987805e5f504f6c80bba9b65a6933ee = $('<div id="html_0987805e5f504f6c80bba9b65a6933ee" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>4</th></tr><tr><td>Trip # </td><td align="right">3044</td></tr><tr><td>Distance </td><td align="right">121 miles</td><tr><td>Date</td><td align="right">2017-10-18 23:24:38.57702</td></tr></table></div>')[0];
                  popup_3d6d31505a734960ab72fe71babf9884.setContent(html_0987805e5f504f6c80bba9b65a6933ee);


              marker_0b85a1dc95c54659afb6bc37665f2eb9.bindPopup(popup_3d6d31505a734960ab72fe71babf9884);





              var marker_662d7db605d64ec7978f16eb112d43d2 = L.marker(
                  [42.66124309,-73.78374651],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_471b26171e0c4c26b95b90a3f585c1a9 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_662d7db605d64ec7978f16eb112d43d2.setIcon(icon_471b26171e0c4c26b95b90a3f585c1a9);


              var popup_b8e147307ecb4ab2954fe57fcb056ba9 = L.popup({maxWidth: '300'});


                  var html_ea843cb56f3747faa1da1e95ce68d516 = $('<div id="html_ea843cb56f3747faa1da1e95ce68d516" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">3114</td></tr><tr><td>Distance </td><td align="right">141 miles</td><tr><td>Date</td><td align="right">2017-10-20 23:12:03.862443</td></tr></table></div>')[0];
                  popup_b8e147307ecb4ab2954fe57fcb056ba9.setContent(html_ea843cb56f3747faa1da1e95ce68d516);


              marker_662d7db605d64ec7978f16eb112d43d2.bindPopup(popup_b8e147307ecb4ab2954fe57fcb056ba9);





              var marker_3f097130594d45378d21d4c1a85ca1ef = L.marker(
                  [44.17016918,-75.83847364],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_5fb83d19f6c74e19980cf244b314b750 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_3f097130594d45378d21d4c1a85ca1ef.setIcon(icon_5fb83d19f6c74e19980cf244b314b750);


              var popup_8dce151c0af440eeb6a5caf681ead10b = L.popup({maxWidth: '300'});


                  var html_225b8854395641249a99c853d3634008 = $('<div id="html_225b8854395641249a99c853d3634008" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">3114</td></tr><tr><td>Distance </td><td align="right">141 miles</td><tr><td>Date</td><td align="right">2017-10-20 23:12:03.862443</td></tr></table></div>')[0];
                  popup_8dce151c0af440eeb6a5caf681ead10b.setContent(html_225b8854395641249a99c853d3634008);


              marker_3f097130594d45378d21d4c1a85ca1ef.bindPopup(popup_8dce151c0af440eeb6a5caf681ead10b);





              var marker_ab1ce83c339145de93fd187016a62701 = L.marker(
                  [43.04147765,-76.13807412],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_20add36687424cc2ab413ad295986b73 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_ab1ce83c339145de93fd187016a62701.setIcon(icon_20add36687424cc2ab413ad295986b73);


              var popup_9c48670182974851b9d35e5de55c8998 = L.popup({maxWidth: '300'});


                  var html_dbf59fff8bfb464396aa52f5ba1447e7 = $('<div id="html_dbf59fff8bfb464396aa52f5ba1447e7" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>55</th></tr><tr><td>Trip # </td><td align="right">3480</td></tr><tr><td>Distance </td><td align="right">123 miles</td><tr><td>Date</td><td align="right">2017-10-27 16:48:03.855534</td></tr></table></div>')[0];
                  popup_9c48670182974851b9d35e5de55c8998.setContent(html_dbf59fff8bfb464396aa52f5ba1447e7);


              marker_ab1ce83c339145de93fd187016a62701.bindPopup(popup_9c48670182974851b9d35e5de55c8998);





              var marker_e6b0d3ff0af2436f9a08df7d563917b5 = L.marker(
                  [44.73741029,-75.14631573],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_8ccf91a177ae40dd9e0588cc1f874944 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_e6b0d3ff0af2436f9a08df7d563917b5.setIcon(icon_8ccf91a177ae40dd9e0588cc1f874944);


              var popup_f333b4f58a384f2187b2973c31be2ee3 = L.popup({maxWidth: '300'});


                  var html_e886e4f6dcff4e99a925e80e2d12a038 = $('<div id="html_e886e4f6dcff4e99a925e80e2d12a038" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>55</th></tr><tr><td>Trip # </td><td align="right">3480</td></tr><tr><td>Distance </td><td align="right">123 miles</td><tr><td>Date</td><td align="right">2017-10-27 16:48:03.855534</td></tr></table></div>')[0];
                  popup_f333b4f58a384f2187b2973c31be2ee3.setContent(html_e886e4f6dcff4e99a925e80e2d12a038);


              marker_e6b0d3ff0af2436f9a08df7d563917b5.bindPopup(popup_f333b4f58a384f2187b2973c31be2ee3);





              var marker_39af221e39384d8e99da27b48ddf8d25 = L.marker(
                  [42.661338925352204,-73.78355805841309],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_8d8dc151c30f4acbb0e3b428d46741be = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_39af221e39384d8e99da27b48ddf8d25.setIcon(icon_8d8dc151c30f4acbb0e3b428d46741be);


              var popup_9ccc64ab3442462ea856045962472f98 = L.popup({maxWidth: '300'});


                  var html_99ea1b99a9b343d38870513efb4fdae8 = $('<div id="html_99ea1b99a9b343d38870513efb4fdae8" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">4281</td></tr><tr><td>Distance </td><td align="right">141 miles</td><tr><td>Date</td><td align="right">2017-11-11 02:06:48.847675</td></tr></table></div>')[0];
                  popup_9ccc64ab3442462ea856045962472f98.setContent(html_99ea1b99a9b343d38870513efb4fdae8);


              marker_39af221e39384d8e99da27b48ddf8d25.bindPopup(popup_9ccc64ab3442462ea856045962472f98);





              var marker_678fab563b8e44a5a7e33c13398d8272 = L.marker(
                  [44.1701903796955,-75.8385194931861],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_e8c3c47a270d4800b404cf83474216f4 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_678fab563b8e44a5a7e33c13398d8272.setIcon(icon_e8c3c47a270d4800b404cf83474216f4);


              var popup_ee7924894579473e8a4c99aac96015e9 = L.popup({maxWidth: '300'});


                  var html_2beeb04af91d4610af44c9c3e2412462 = $('<div id="html_2beeb04af91d4610af44c9c3e2412462" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">4281</td></tr><tr><td>Distance </td><td align="right">141 miles</td><tr><td>Date</td><td align="right">2017-11-11 02:06:48.847675</td></tr></table></div>')[0];
                  popup_ee7924894579473e8a4c99aac96015e9.setContent(html_2beeb04af91d4610af44c9c3e2412462);


              marker_678fab563b8e44a5a7e33c13398d8272.bindPopup(popup_ee7924894579473e8a4c99aac96015e9);





              var marker_cbd3f910b91b4c2b953e75381d7a9581 = L.marker(
                  [43.0322441,-76.17220158],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_67a7d25984924abcbd9a98e99b21f804 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_cbd3f910b91b4c2b953e75381d7a9581.setIcon(icon_67a7d25984924abcbd9a98e99b21f804);


              var popup_3bc06041abc14a0cb705d39ddaefb081 = L.popup({maxWidth: '300'});


                  var html_3f121b974d2a445a9a3625aa7ac9f6e8 = $('<div id="html_3f121b974d2a445a9a3625aa7ac9f6e8" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>12</th></tr><tr><td>Trip # </td><td align="right">4414</td></tr><tr><td>Distance </td><td align="right">123 miles</td><tr><td>Date</td><td align="right">2017-11-13 23:09:09.750325</td></tr></table></div>')[0];
                  popup_3bc06041abc14a0cb705d39ddaefb081.setContent(html_3f121b974d2a445a9a3625aa7ac9f6e8);


              marker_cbd3f910b91b4c2b953e75381d7a9581.bindPopup(popup_3bc06041abc14a0cb705d39ddaefb081);





              var marker_0bc6e039533c486c944f8b4e3a61c987 = L.marker(
                  [44.76759369,-75.29764471],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_699b930824344ce3ac7393b243e03f64 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_0bc6e039533c486c944f8b4e3a61c987.setIcon(icon_699b930824344ce3ac7393b243e03f64);


              var popup_c3af816351d44ec4a3012986fdfeec71 = L.popup({maxWidth: '300'});


                  var html_89957bd603f7416f83b992aa3048e82b = $('<div id="html_89957bd603f7416f83b992aa3048e82b" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>12</th></tr><tr><td>Trip # </td><td align="right">4414</td></tr><tr><td>Distance </td><td align="right">123 miles</td><tr><td>Date</td><td align="right">2017-11-13 23:09:09.750325</td></tr></table></div>')[0];
                  popup_c3af816351d44ec4a3012986fdfeec71.setContent(html_89957bd603f7416f83b992aa3048e82b);


              marker_0bc6e039533c486c944f8b4e3a61c987.bindPopup(popup_c3af816351d44ec4a3012986fdfeec71);





              var marker_19d87b97aaa342c0b0d15d05bb43209d = L.marker(
                  [42.65873207,-73.74867502],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_41de597d05ba494dbee8656662af2a1a = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_19d87b97aaa342c0b0d15d05bb43209d.setIcon(icon_41de597d05ba494dbee8656662af2a1a);


              var popup_6778bd327e324ffab7ce695e10cfb010 = L.popup({maxWidth: '300'});


                  var html_4acf4402a8864119a7f31540cacd6f08 = $('<div id="html_4acf4402a8864119a7f31540cacd6f08" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>70</th></tr><tr><td>Trip # </td><td align="right">4485</td></tr><tr><td>Distance </td><td align="right">137 miles</td><tr><td>Date</td><td align="right">2017-11-15 00:03:00.494727</td></tr></table></div>')[0];
                  popup_6778bd327e324ffab7ce695e10cfb010.setContent(html_4acf4402a8864119a7f31540cacd6f08);


              marker_19d87b97aaa342c0b0d15d05bb43209d.bindPopup(popup_6778bd327e324ffab7ce695e10cfb010);





              var marker_faf711416f08470e88f5ea4f9dead98d = L.marker(
                  [43.99133671,-75.90360074],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_c063ebce45ae4342a33c9650c16fa8c7 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_faf711416f08470e88f5ea4f9dead98d.setIcon(icon_c063ebce45ae4342a33c9650c16fa8c7);


              var popup_12be19fdf3d1464da77a53ae433fd1ba = L.popup({maxWidth: '300'});


                  var html_e393f760a5cb4d6d8bc0cca5d8e2862f = $('<div id="html_e393f760a5cb4d6d8bc0cca5d8e2862f" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>70</th></tr><tr><td>Trip # </td><td align="right">4485</td></tr><tr><td>Distance </td><td align="right">137 miles</td><tr><td>Date</td><td align="right">2017-11-15 00:03:00.494727</td></tr></table></div>')[0];
                  popup_12be19fdf3d1464da77a53ae433fd1ba.setContent(html_e393f760a5cb4d6d8bc0cca5d8e2862f);


              marker_faf711416f08470e88f5ea4f9dead98d.bindPopup(popup_12be19fdf3d1464da77a53ae433fd1ba);





              var marker_072bcb0569b54db98ac2660089099693 = L.marker(
                  [42.6613627727468,-73.7835261194085],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_fed756fc474f4f499ab060068cc9733d = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_072bcb0569b54db98ac2660089099693.setIcon(icon_fed756fc474f4f499ab060068cc9733d);


              var popup_d54405f731bb456999edb77a45e3611b = L.popup({maxWidth: '300'});


                  var html_f0e020dc21f9400f9e3c60eda24ee50b = $('<div id="html_f0e020dc21f9400f9e3c60eda24ee50b" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">4727</td></tr><tr><td>Distance </td><td align="right">141 miles</td><tr><td>Date</td><td align="right">2017-11-18 00:27:05.761764</td></tr></table></div>')[0];
                  popup_d54405f731bb456999edb77a45e3611b.setContent(html_f0e020dc21f9400f9e3c60eda24ee50b);


              marker_072bcb0569b54db98ac2660089099693.bindPopup(popup_d54405f731bb456999edb77a45e3611b);





              var marker_ec56302905c6441ca916ee963bcf9648 = L.marker(
                  [44.17013551417379,-75.83852890270958],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_80b91c9506fd49838ba557d7c6eb2302 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_ec56302905c6441ca916ee963bcf9648.setIcon(icon_80b91c9506fd49838ba557d7c6eb2302);


              var popup_b63b5f6a876046faa1f028305fafc9f6 = L.popup({maxWidth: '300'});


                  var html_933cab8d007942a9b230295894eca8ac = $('<div id="html_933cab8d007942a9b230295894eca8ac" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">4727</td></tr><tr><td>Distance </td><td align="right">141 miles</td><tr><td>Date</td><td align="right">2017-11-18 00:27:05.761764</td></tr></table></div>')[0];
                  popup_b63b5f6a876046faa1f028305fafc9f6.setContent(html_933cab8d007942a9b230295894eca8ac);


              marker_ec56302905c6441ca916ee963bcf9648.bindPopup(popup_b63b5f6a876046faa1f028305fafc9f6);





              var marker_4697115c8ad8458490ddcdeaab0eb3ee = L.marker(
                  [42.8683091240613,-73.9102618609529],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_eb036f93230249dda0d431db2b1ed1e7 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_4697115c8ad8458490ddcdeaab0eb3ee.setIcon(icon_eb036f93230249dda0d431db2b1ed1e7);


              var popup_c944fa2fc2a942a3a70b63e14639c585 = L.popup({maxWidth: '300'});


                  var html_bfe5480c2e544c0db54396e114180066 = $('<div id="html_bfe5480c2e544c0db54396e114180066" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>16</th></tr><tr><td>Trip # </td><td align="right">4814</td></tr><tr><td>Distance </td><td align="right">127 miles</td><tr><td>Date</td><td align="right">2017-11-19 00:33:32.388101</td></tr></table></div>')[0];
                  popup_c944fa2fc2a942a3a70b63e14639c585.setContent(html_bfe5480c2e544c0db54396e114180066);


              marker_4697115c8ad8458490ddcdeaab0eb3ee.bindPopup(popup_c944fa2fc2a942a3a70b63e14639c585);





              var marker_7f42e95e0c534dba9889e96c165aaae1 = L.marker(
                  [44.1704134590127,-75.8389274249025],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_7fdbfd7633fe4061a7a3587b398f9bfe = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_7f42e95e0c534dba9889e96c165aaae1.setIcon(icon_7fdbfd7633fe4061a7a3587b398f9bfe);


              var popup_863673401d6a4b51850f6a0e4588f1c0 = L.popup({maxWidth: '300'});


                  var html_0d73fb9c78724651a8442b873d807306 = $('<div id="html_0d73fb9c78724651a8442b873d807306" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>16</th></tr><tr><td>Trip # </td><td align="right">4814</td></tr><tr><td>Distance </td><td align="right">127 miles</td><tr><td>Date</td><td align="right">2017-11-19 00:33:32.388101</td></tr></table></div>')[0];
                  popup_863673401d6a4b51850f6a0e4588f1c0.setContent(html_0d73fb9c78724651a8442b873d807306);


              marker_7f42e95e0c534dba9889e96c165aaae1.bindPopup(popup_863673401d6a4b51850f6a0e4588f1c0);





              var marker_9be94b97db744c479dcc4daaef7bf7ee = L.marker(
                  [42.18873071,-76.05751567],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_fcb50c66321f440191cd533a12a4a402 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_9be94b97db744c479dcc4daaef7bf7ee.setIcon(icon_fcb50c66321f440191cd533a12a4a402);


              var popup_9db3b5e8aad7476b9818ef8dd810d5e3 = L.popup({maxWidth: '300'});


                  var html_9f20f380a7ad49918cddc061d80fe2d1 = $('<div id="html_9f20f380a7ad49918cddc061d80fe2d1" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>99</th></tr><tr><td>Trip # </td><td align="right">4896</td></tr><tr><td>Distance </td><td align="right">143 miles</td><tr><td>Date</td><td align="right">2017-11-21 02:08:28.348786</td></tr></table></div>')[0];
                  popup_9db3b5e8aad7476b9818ef8dd810d5e3.setContent(html_9f20f380a7ad49918cddc061d80fe2d1);


              marker_9be94b97db744c479dcc4daaef7bf7ee.bindPopup(popup_9db3b5e8aad7476b9818ef8dd810d5e3);





              var marker_026130b8ab684d1da360b7af81ee8e3d = L.marker(
                  [44.33610474,-75.91422659999999],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_02d1934b2d304449b7e61b8a929e394b = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_026130b8ab684d1da360b7af81ee8e3d.setIcon(icon_02d1934b2d304449b7e61b8a929e394b);


              var popup_b04df6b326ca4408bbb36a657a8cd36a = L.popup({maxWidth: '300'});


                  var html_bf350c09b5d04f7a93e54149f15f4296 = $('<div id="html_bf350c09b5d04f7a93e54149f15f4296" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>99</th></tr><tr><td>Trip # </td><td align="right">4896</td></tr><tr><td>Distance </td><td align="right">143 miles</td><tr><td>Date</td><td align="right">2017-11-21 02:08:28.348786</td></tr></table></div>')[0];
                  popup_b04df6b326ca4408bbb36a657a8cd36a.setContent(html_bf350c09b5d04f7a93e54149f15f4296);


              marker_026130b8ab684d1da360b7af81ee8e3d.bindPopup(popup_b04df6b326ca4408bbb36a657a8cd36a);





              var marker_c51368c3e6ba4ca9ae3e97afe3ecf13d = L.marker(
                  [43.11784199,-77.62380057],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_dddc822529854a84a2757b3e1f6ce37a = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_c51368c3e6ba4ca9ae3e97afe3ecf13d.setIcon(icon_dddc822529854a84a2757b3e1f6ce37a);


              var popup_9951633fc5f34ea9beb1d169fa22b93d = L.popup({maxWidth: '300'});


                  var html_d65a07ebe3384852bb66314c0038ca8b = $('<div id="html_d65a07ebe3384852bb66314c0038ca8b" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">4924</td></tr><tr><td>Distance </td><td align="right">176 miles</td><tr><td>Date</td><td align="right">2017-11-22 11:44:32.911771</td></tr></table></div>')[0];
                  popup_9951633fc5f34ea9beb1d169fa22b93d.setContent(html_d65a07ebe3384852bb66314c0038ca8b);


              marker_c51368c3e6ba4ca9ae3e97afe3ecf13d.bindPopup(popup_9951633fc5f34ea9beb1d169fa22b93d);





              var marker_60238ac4db7a4c37b1b85df76eb8a2ad = L.marker(
                  [44.87418239,-74.87386855],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_fb00409436a94215bdbe392d9a130386 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_60238ac4db7a4c37b1b85df76eb8a2ad.setIcon(icon_fb00409436a94215bdbe392d9a130386);


              var popup_37305f1fd27746eb9c59fe8979372002 = L.popup({maxWidth: '300'});


                  var html_f9fe29b022f544868f243c5ccb9e214c = $('<div id="html_f9fe29b022f544868f243c5ccb9e214c" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">4924</td></tr><tr><td>Distance </td><td align="right">176 miles</td><tr><td>Date</td><td align="right">2017-11-22 11:44:32.911771</td></tr></table></div>')[0];
                  popup_37305f1fd27746eb9c59fe8979372002.setContent(html_f9fe29b022f544868f243c5ccb9e214c);


              marker_60238ac4db7a4c37b1b85df76eb8a2ad.bindPopup(popup_37305f1fd27746eb9c59fe8979372002);





              var marker_dcede9f5f3694094999011e84ac62315 = L.marker(
                  [42.6612244839865,-73.7835885343108],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_e9e7e9c4b9e648209c7698163f9348cf = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_dcede9f5f3694094999011e84ac62315.setIcon(icon_e9e7e9c4b9e648209c7698163f9348cf);


              var popup_652e16a425f94e438338a870a8fd710b = L.popup({maxWidth: '300'});


                  var html_6ae8cd8d8b564ebb900a6b3af1b4a040 = $('<div id="html_6ae8cd8d8b564ebb900a6b3af1b4a040" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">4998</td></tr><tr><td>Distance </td><td align="right">141 miles</td><tr><td>Date</td><td align="right">2017-11-23 00:58:48.210503</td></tr></table></div>')[0];
                  popup_652e16a425f94e438338a870a8fd710b.setContent(html_6ae8cd8d8b564ebb900a6b3af1b4a040);


              marker_dcede9f5f3694094999011e84ac62315.bindPopup(popup_652e16a425f94e438338a870a8fd710b);





              var marker_7b78a5a6d38d4c54a92975e2a5cc0c23 = L.marker(
                  [44.1700773798958,-75.8384655365124],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_a1066852bad94a58b4d541ea7c0c6053 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_7b78a5a6d38d4c54a92975e2a5cc0c23.setIcon(icon_a1066852bad94a58b4d541ea7c0c6053);


              var popup_0d1b38c46dc74ad7b36d4fd85ee3d207 = L.popup({maxWidth: '300'});


                  var html_6cd414f3112c4e0fb237e6b17608f7fe = $('<div id="html_6cd414f3112c4e0fb237e6b17608f7fe" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">4998</td></tr><tr><td>Distance </td><td align="right">141 miles</td><tr><td>Date</td><td align="right">2017-11-23 00:58:48.210503</td></tr></table></div>')[0];
                  popup_0d1b38c46dc74ad7b36d4fd85ee3d207.setContent(html_6cd414f3112c4e0fb237e6b17608f7fe);


              marker_7b78a5a6d38d4c54a92975e2a5cc0c23.bindPopup(popup_0d1b38c46dc74ad7b36d4fd85ee3d207);





              var marker_6853d18d37af4222aeb505df8a8d6dfc = L.marker(
                  [43.07202142,-76.17311355],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_f33d55b9f1294ba78aeda79da2de1da7 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_6853d18d37af4222aeb505df8a8d6dfc.setIcon(icon_f33d55b9f1294ba78aeda79da2de1da7);


              var popup_2f47b134a4914ddeb37b2fa427f0af3b = L.popup({maxWidth: '300'});


                  var html_7c22cafa374146678ef73fb36ff4c66d = $('<div id="html_7c22cafa374146678ef73fb36ff4c66d" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>12</th></tr><tr><td>Trip # </td><td align="right">5257</td></tr><tr><td>Distance </td><td align="right">121 miles</td><tr><td>Date</td><td align="right">2017-11-29 13:39:57.095921</td></tr></table></div>')[0];
                  popup_2f47b134a4914ddeb37b2fa427f0af3b.setContent(html_7c22cafa374146678ef73fb36ff4c66d);


              marker_6853d18d37af4222aeb505df8a8d6dfc.bindPopup(popup_2f47b134a4914ddeb37b2fa427f0af3b);





              var marker_a7ddda9b08ba4df08fbde9a05912c670 = L.marker(
                  [44.76763699,-75.29756195],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_820405d4d67142f786ba2a9275702e94 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_a7ddda9b08ba4df08fbde9a05912c670.setIcon(icon_820405d4d67142f786ba2a9275702e94);


              var popup_9041badec1af40b19fd5214477ad584c = L.popup({maxWidth: '300'});


                  var html_7dce9417c5b84cf8b9ac5c495bd58a84 = $('<div id="html_7dce9417c5b84cf8b9ac5c495bd58a84" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>12</th></tr><tr><td>Trip # </td><td align="right">5257</td></tr><tr><td>Distance </td><td align="right">121 miles</td><tr><td>Date</td><td align="right">2017-11-29 13:39:57.095921</td></tr></table></div>')[0];
                  popup_9041badec1af40b19fd5214477ad584c.setContent(html_7dce9417c5b84cf8b9ac5c495bd58a84);


              marker_a7ddda9b08ba4df08fbde9a05912c670.bindPopup(popup_9041badec1af40b19fd5214477ad584c);





              var marker_5092b95fc3504f10b290ea2e6b0b2914 = L.marker(
                  [43.33086031,-73.69859169],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_d9c8f10407e9486ea7fc590a812498f7 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_5092b95fc3504f10b290ea2e6b0b2914.setIcon(icon_d9c8f10407e9486ea7fc590a812498f7);


              var popup_ad4aac8feab7408190d8399f6297d117 = L.popup({maxWidth: '300'});


                  var html_edabc460a5e44e80adca963166eb15dc = $('<div id="html_edabc460a5e44e80adca963166eb15dc" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>100</th></tr><tr><td>Trip # </td><td align="right">5362</td></tr><tr><td>Distance </td><td align="right">109 miles</td><tr><td>Date</td><td align="right">2017-11-30 12:09:08.164111</td></tr></table></div>')[0];
                  popup_ad4aac8feab7408190d8399f6297d117.setContent(html_edabc460a5e44e80adca963166eb15dc);


              marker_5092b95fc3504f10b290ea2e6b0b2914.bindPopup(popup_ad4aac8feab7408190d8399f6297d117);





              var marker_516048d25cd84e5b81ac3c7ac7fc6d96 = L.marker(
                  [44.68106679,-74.96844814],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_67609b04e51c4db68e85131f0ec1f905 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_516048d25cd84e5b81ac3c7ac7fc6d96.setIcon(icon_67609b04e51c4db68e85131f0ec1f905);


              var popup_e90f83e9b32a4c809d64cc1c9c922a2f = L.popup({maxWidth: '300'});


                  var html_fa15386e740d440da7fbb7ce5b0f7af2 = $('<div id="html_fa15386e740d440da7fbb7ce5b0f7af2" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>100</th></tr><tr><td>Trip # </td><td align="right">5362</td></tr><tr><td>Distance </td><td align="right">109 miles</td><tr><td>Date</td><td align="right">2017-11-30 12:09:08.164111</td></tr></table></div>')[0];
                  popup_e90f83e9b32a4c809d64cc1c9c922a2f.setContent(html_fa15386e740d440da7fbb7ce5b0f7af2);


              marker_516048d25cd84e5b81ac3c7ac7fc6d96.bindPopup(popup_e90f83e9b32a4c809d64cc1c9c922a2f);





              var marker_d1bffdc49a9e451ea3a1cbfa30403120 = L.marker(
                  [42.8682734218795,-73.91022146523159],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_44b7d424d5304171ae27788444877428 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_d1bffdc49a9e451ea3a1cbfa30403120.setIcon(icon_44b7d424d5304171ae27788444877428);


              var popup_d24e70ba05d940b6b52cc2e8e9399435 = L.popup({maxWidth: '300'});


                  var html_baa10b1b8f934a40857a73675f2c701c = $('<div id="html_baa10b1b8f934a40857a73675f2c701c" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>16</th></tr><tr><td>Trip # </td><td align="right">5443</td></tr><tr><td>Distance </td><td align="right">127 miles</td><tr><td>Date</td><td align="right">2017-12-01 08:35:53.809278</td></tr></table></div>')[0];
                  popup_d24e70ba05d940b6b52cc2e8e9399435.setContent(html_baa10b1b8f934a40857a73675f2c701c);


              marker_d1bffdc49a9e451ea3a1cbfa30403120.bindPopup(popup_d24e70ba05d940b6b52cc2e8e9399435);





              var marker_f140945299954498b4b652e223874e63 = L.marker(
                  [44.170126317190295,-75.8385669691612],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_abe198f05a82460481d23847e82403bc = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_f140945299954498b4b652e223874e63.setIcon(icon_abe198f05a82460481d23847e82403bc);


              var popup_ca06f29010e04810a01c7512c9c307c8 = L.popup({maxWidth: '300'});


                  var html_0ad10a56db0d448f95e574ac87c70f8a = $('<div id="html_0ad10a56db0d448f95e574ac87c70f8a" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>16</th></tr><tr><td>Trip # </td><td align="right">5443</td></tr><tr><td>Distance </td><td align="right">127 miles</td><tr><td>Date</td><td align="right">2017-12-01 08:35:53.809278</td></tr></table></div>')[0];
                  popup_ca06f29010e04810a01c7512c9c307c8.setContent(html_0ad10a56db0d448f95e574ac87c70f8a);


              marker_f140945299954498b4b652e223874e63.bindPopup(popup_ca06f29010e04810a01c7512c9c307c8);





              var marker_0546617d89e54e9aadb3d4ee3a76ba2f = L.marker(
                  [43.04600146,-76.13677463],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_3f55d4380cfa4fe7ba95616c38fe2f55 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_0546617d89e54e9aadb3d4ee3a76ba2f.setIcon(icon_3f55d4380cfa4fe7ba95616c38fe2f55);


              var popup_cbb7cba31b35497a921c1c0c2cdb2a02 = L.popup({maxWidth: '300'});


                  var html_6ca56ac34dcb4ac598369f042c7455df = $('<div id="html_6ca56ac34dcb4ac598369f042c7455df" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>150</th></tr><tr><td>Trip # </td><td align="right">5476</td></tr><tr><td>Distance </td><td align="right">102 miles</td><tr><td>Date</td><td align="right">2017-11-30 23:55:34.993111</td></tr></table></div>')[0];
                  popup_cbb7cba31b35497a921c1c0c2cdb2a02.setContent(html_6ca56ac34dcb4ac598369f042c7455df);


              marker_0546617d89e54e9aadb3d4ee3a76ba2f.bindPopup(popup_cbb7cba31b35497a921c1c0c2cdb2a02);





              var marker_b0edc87320de41d98f4f40b4622a592e = L.marker(
                  [44.50327635,-75.47151816],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_6fb54c8b3b3248c78339294bf6884355 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_b0edc87320de41d98f4f40b4622a592e.setIcon(icon_6fb54c8b3b3248c78339294bf6884355);


              var popup_842895d5cac9464d9e407abd5bf3c679 = L.popup({maxWidth: '300'});


                  var html_63e488eb5d194ed1affcbc71e9e17851 = $('<div id="html_63e488eb5d194ed1affcbc71e9e17851" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>150</th></tr><tr><td>Trip # </td><td align="right">5476</td></tr><tr><td>Distance </td><td align="right">102 miles</td><tr><td>Date</td><td align="right">2017-11-30 23:55:34.993111</td></tr></table></div>')[0];
                  popup_842895d5cac9464d9e407abd5bf3c679.setContent(html_63e488eb5d194ed1affcbc71e9e17851);


              marker_b0edc87320de41d98f4f40b4622a592e.bindPopup(popup_842895d5cac9464d9e407abd5bf3c679);





              var marker_d848feb1d4bb4baba7f21cf19a3c777d = L.marker(
                  [42.6612802136624,-73.7836203595989],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_476df4bb0fbc40d081a964946e0aae32 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_d848feb1d4bb4baba7f21cf19a3c777d.setIcon(icon_476df4bb0fbc40d081a964946e0aae32);


              var popup_73eb62d335474822bd037f2999e5a293 = L.popup({maxWidth: '300'});


                  var html_b2c2b405e16c4e559facdfa93f27a2d4 = $('<div id="html_b2c2b405e16c4e559facdfa93f27a2d4" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">5549</td></tr><tr><td>Distance </td><td align="right">141 miles</td><tr><td>Date</td><td align="right">2017-12-02 00:37:40.332295</td></tr></table></div>')[0];
                  popup_73eb62d335474822bd037f2999e5a293.setContent(html_b2c2b405e16c4e559facdfa93f27a2d4);


              marker_d848feb1d4bb4baba7f21cf19a3c777d.bindPopup(popup_73eb62d335474822bd037f2999e5a293);





              var marker_567a1c8db1be417db73b36a57ff23041 = L.marker(
                  [44.170103513911506,-75.8385329721728],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_b0694ec1926e4d459596ccb64ca0b686 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_567a1c8db1be417db73b36a57ff23041.setIcon(icon_b0694ec1926e4d459596ccb64ca0b686);


              var popup_1164cba140d34363a8ae0135cfce9f4c = L.popup({maxWidth: '300'});


                  var html_339f5a0305ff43699eed105f7fa78b8f = $('<div id="html_339f5a0305ff43699eed105f7fa78b8f" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">5549</td></tr><tr><td>Distance </td><td align="right">141 miles</td><tr><td>Date</td><td align="right">2017-12-02 00:37:40.332295</td></tr></table></div>')[0];
                  popup_1164cba140d34363a8ae0135cfce9f4c.setContent(html_339f5a0305ff43699eed105f7fa78b8f);


              marker_567a1c8db1be417db73b36a57ff23041.bindPopup(popup_1164cba140d34363a8ae0135cfce9f4c);





              var marker_da368f06b55244dfb8b9ea1edf7ca851 = L.marker(
                  [43.10611502,-75.25465268],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_72a8d1396d34420fb68fdc4596a20fd3 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_da368f06b55244dfb8b9ea1edf7ca851.setIcon(icon_72a8d1396d34420fb68fdc4596a20fd3);


              var popup_961e1e3d5020469297cf693d5919e17c = L.popup({maxWidth: '300'});


                  var html_2c7e778a2b294f418a786de87ff4f1cc = $('<div id="html_2c7e778a2b294f418a786de87ff4f1cc" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>180</th></tr><tr><td>Trip # </td><td align="right">5960</td></tr><tr><td>Distance </td><td align="right">112 miles</td><tr><td>Date</td><td align="right">2017-12-07 18:39:12.482794</td></tr></table></div>')[0];
                  popup_961e1e3d5020469297cf693d5919e17c.setContent(html_2c7e778a2b294f418a786de87ff4f1cc);


              marker_da368f06b55244dfb8b9ea1edf7ca851.bindPopup(popup_961e1e3d5020469297cf693d5919e17c);





              var marker_36fce53b87e04c109701e433862f991d = L.marker(
                  [44.78365844,-75.35281648],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_93062d762da4448b9a85bc280ccaeed2 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_36fce53b87e04c109701e433862f991d.setIcon(icon_93062d762da4448b9a85bc280ccaeed2);


              var popup_e9256e928d6c4c7a82ba06783227d11b = L.popup({maxWidth: '300'});


                  var html_497a21b62ac34943b8ddfdbe782fe0d6 = $('<div id="html_497a21b62ac34943b8ddfdbe782fe0d6" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>180</th></tr><tr><td>Trip # </td><td align="right">5960</td></tr><tr><td>Distance </td><td align="right">112 miles</td><tr><td>Date</td><td align="right">2017-12-07 18:39:12.482794</td></tr></table></div>')[0];
                  popup_e9256e928d6c4c7a82ba06783227d11b.setContent(html_497a21b62ac34943b8ddfdbe782fe0d6);


              marker_36fce53b87e04c109701e433862f991d.bindPopup(popup_e9256e928d6c4c7a82ba06783227d11b);





              var marker_43f631feb1f64af3a0ad333fcbfa69a5 = L.marker(
                  [43.10626718,-75.25453432],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_e7fcdc07a1774a5e8898aab7662e4ce8 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_43f631feb1f64af3a0ad333fcbfa69a5.setIcon(icon_e7fcdc07a1774a5e8898aab7662e4ce8);


              var popup_9f94c6853f4642699b656fdd6440adb3 = L.popup({maxWidth: '300'});


                  var html_14056ecbd37b414ea55f4d9c31115a05 = $('<div id="html_14056ecbd37b414ea55f4d9c31115a05" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>129</th></tr><tr><td>Trip # </td><td align="right">6170</td></tr><tr><td>Distance </td><td align="right">123 miles</td><tr><td>Date</td><td align="right">2017-12-12 13:39:11.40271</td></tr></table></div>')[0];
                  popup_9f94c6853f4642699b656fdd6440adb3.setContent(html_14056ecbd37b414ea55f4d9c31115a05);


              marker_43f631feb1f64af3a0ad333fcbfa69a5.bindPopup(popup_9f94c6853f4642699b656fdd6440adb3);





              var marker_9eb86c8e70f1400992636c325d8b2990 = L.marker(
                  [44.92493563,-74.87387945],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_cff919ff16bb457fbb80f6a88f9c6db1 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_9eb86c8e70f1400992636c325d8b2990.setIcon(icon_cff919ff16bb457fbb80f6a88f9c6db1);


              var popup_816b3ff4cf9c4c50ba2349f19e2b3ddc = L.popup({maxWidth: '300'});


                  var html_4bcbc106de6a4e4d947f13dcf11de173 = $('<div id="html_4bcbc106de6a4e4d947f13dcf11de173" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>129</th></tr><tr><td>Trip # </td><td align="right">6170</td></tr><tr><td>Distance </td><td align="right">123 miles</td><tr><td>Date</td><td align="right">2017-12-12 13:39:11.40271</td></tr></table></div>')[0];
                  popup_816b3ff4cf9c4c50ba2349f19e2b3ddc.setContent(html_4bcbc106de6a4e4d947f13dcf11de173);


              marker_9eb86c8e70f1400992636c325d8b2990.bindPopup(popup_816b3ff4cf9c4c50ba2349f19e2b3ddc);





              var marker_19335e521d234106a1ed656432e6e3e5 = L.marker(
                  [43.04234884,-76.14033409],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_94bee35e608341be9aa083217d59f7b0 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_19335e521d234106a1ed656432e6e3e5.setIcon(icon_94bee35e608341be9aa083217d59f7b0);


              var popup_38d3021434cd49fa92dfe1c784c42f96 = L.popup({maxWidth: '300'});


                  var html_8552fde5c87d4dcf91cdb19aa402b549 = $('<div id="html_8552fde5c87d4dcf91cdb19aa402b549" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>55</th></tr><tr><td>Trip # </td><td align="right">6739</td></tr><tr><td>Distance </td><td align="right">123 miles</td><tr><td>Date</td><td align="right">2017-12-19 16:48:40.936216</td></tr></table></div>')[0];
                  popup_38d3021434cd49fa92dfe1c784c42f96.setContent(html_8552fde5c87d4dcf91cdb19aa402b549);


              marker_19335e521d234106a1ed656432e6e3e5.bindPopup(popup_38d3021434cd49fa92dfe1c784c42f96);





              var marker_e0695814d8654b258426e83e64d42122 = L.marker(
                  [44.73730856,-75.14672504],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_5a4ad8b6a8d348959355a9d7dcf2b51e = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_e0695814d8654b258426e83e64d42122.setIcon(icon_5a4ad8b6a8d348959355a9d7dcf2b51e);


              var popup_81b2307226594b29849748e4ed16ecab = L.popup({maxWidth: '300'});


                  var html_11a35c8ab63642bd95e68e4543a8f591 = $('<div id="html_11a35c8ab63642bd95e68e4543a8f591" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>55</th></tr><tr><td>Trip # </td><td align="right">6739</td></tr><tr><td>Distance </td><td align="right">123 miles</td><tr><td>Date</td><td align="right">2017-12-19 16:48:40.936216</td></tr></table></div>')[0];
                  popup_81b2307226594b29849748e4ed16ecab.setContent(html_11a35c8ab63642bd95e68e4543a8f591);


              marker_e0695814d8654b258426e83e64d42122.bindPopup(popup_81b2307226594b29849748e4ed16ecab);





              var marker_be376486c01441249d73941c069aede7 = L.marker(
                  [42.6613722696041,-73.7835660207365],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_13e0cfb368c74759824ae550ccbf3f7c = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_be376486c01441249d73941c069aede7.setIcon(icon_13e0cfb368c74759824ae550ccbf3f7c);


              var popup_4b60b241090b432b9fac32dc2bc24073 = L.popup({maxWidth: '300'});


                  var html_c59d01a841654d628fee960aae27530d = $('<div id="html_c59d01a841654d628fee960aae27530d" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>16</th></tr><tr><td>Trip # </td><td align="right">7030</td></tr><tr><td>Distance </td><td align="right">141 miles</td><tr><td>Date</td><td align="right">2017-12-23 09:26:54.935347</td></tr></table></div>')[0];
                  popup_4b60b241090b432b9fac32dc2bc24073.setContent(html_c59d01a841654d628fee960aae27530d);


              marker_be376486c01441249d73941c069aede7.bindPopup(popup_4b60b241090b432b9fac32dc2bc24073);





              var marker_947d1b5f2f8b4460ad581e30e0a8d212 = L.marker(
                  [44.1700617965717,-75.83853403280091],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_bfb58ce016ae459faa02326c9d5e573f = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_947d1b5f2f8b4460ad581e30e0a8d212.setIcon(icon_bfb58ce016ae459faa02326c9d5e573f);


              var popup_0702f235bde644caa8abc24f5ff36ace = L.popup({maxWidth: '300'});


                  var html_8aa75b8d936d4836a617badfd4c9c1ab = $('<div id="html_8aa75b8d936d4836a617badfd4c9c1ab" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>16</th></tr><tr><td>Trip # </td><td align="right">7030</td></tr><tr><td>Distance </td><td align="right">141 miles</td><tr><td>Date</td><td align="right">2017-12-23 09:26:54.935347</td></tr></table></div>')[0];
                  popup_0702f235bde644caa8abc24f5ff36ace.setContent(html_8aa75b8d936d4836a617badfd4c9c1ab);


              marker_947d1b5f2f8b4460ad581e30e0a8d212.bindPopup(popup_0702f235bde644caa8abc24f5ff36ace);





              var marker_891153ed919745cd99d95a9417ff32ad = L.marker(
                  [42.86833828,-73.91024498],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_c91436171a3345a58865f7945318a965 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_891153ed919745cd99d95a9417ff32ad.setIcon(icon_c91436171a3345a58865f7945318a965);


              var popup_a5c143b9b04747b0928d21039d724495 = L.popup({maxWidth: '300'});


                  var html_d9641585952a4676a92fd578ae1b479a = $('<div id="html_d9641585952a4676a92fd578ae1b479a" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>86</th></tr><tr><td>Trip # </td><td align="right">7141</td></tr><tr><td>Distance </td><td align="right">113 miles</td><tr><td>Date</td><td align="right">2017-12-27 02:58:04.405035</td></tr></table></div>')[0];
                  popup_a5c143b9b04747b0928d21039d724495.setContent(html_d9641585952a4676a92fd578ae1b479a);


              marker_891153ed919745cd99d95a9417ff32ad.bindPopup(popup_a5c143b9b04747b0928d21039d724495);





              var marker_4135a971dcb64a9ea5a227186e71d6be = L.marker(
                  [43.85514035,-75.80206963],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_42281a4156e54f0b87e9a4f72adbdc53 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_4135a971dcb64a9ea5a227186e71d6be.setIcon(icon_42281a4156e54f0b87e9a4f72adbdc53);


              var popup_5311f911c2014535a148df5211445a2c = L.popup({maxWidth: '300'});


                  var html_85aaa7cee34f40b28608e7ef7b8486bb = $('<div id="html_85aaa7cee34f40b28608e7ef7b8486bb" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>86</th></tr><tr><td>Trip # </td><td align="right">7141</td></tr><tr><td>Distance </td><td align="right">113 miles</td><tr><td>Date</td><td align="right">2017-12-27 02:58:04.405035</td></tr></table></div>')[0];
                  popup_5311f911c2014535a148df5211445a2c.setContent(html_85aaa7cee34f40b28608e7ef7b8486bb);


              marker_4135a971dcb64a9ea5a227186e71d6be.bindPopup(popup_5311f911c2014535a148df5211445a2c);





              var marker_d087e19cf49f4791a254af18e6fbcf21 = L.marker(
                  [42.18871866,-76.05749312],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_508cb34a380d4a149cbe220c03d23642 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_d087e19cf49f4791a254af18e6fbcf21.setIcon(icon_508cb34a380d4a149cbe220c03d23642);


              var popup_3f5d9fba57db40b6a274ca15c131e28e = L.popup({maxWidth: '300'});


                  var html_1ec9837acc28428d8af7d7464af59957 = $('<div id="html_1ec9837acc28428d8af7d7464af59957" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>85</th></tr><tr><td>Trip # </td><td align="right">7325</td></tr><tr><td>Distance </td><td align="right">119 miles</td><tr><td>Date</td><td align="right">2017-12-29 01:13:43.195041</td></tr></table></div>')[0];
                  popup_3f5d9fba57db40b6a274ca15c131e28e.setContent(html_1ec9837acc28428d8af7d7464af59957);


              marker_d087e19cf49f4791a254af18e6fbcf21.bindPopup(popup_3f5d9fba57db40b6a274ca15c131e28e);





              var marker_333b0f6b864f49fe9063bf377013b1ec = L.marker(
                  [43.97584749,-75.91917494],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_cd05ed7fc0be4a8a880b1dec07675452 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_333b0f6b864f49fe9063bf377013b1ec.setIcon(icon_cd05ed7fc0be4a8a880b1dec07675452);


              var popup_a28500fd195546a3be3f9262d1b7f0b1 = L.popup({maxWidth: '300'});


                  var html_1aace49343d948eda937eb010ed7b484 = $('<div id="html_1aace49343d948eda937eb010ed7b484" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>85</th></tr><tr><td>Trip # </td><td align="right">7325</td></tr><tr><td>Distance </td><td align="right">119 miles</td><tr><td>Date</td><td align="right">2017-12-29 01:13:43.195041</td></tr></table></div>')[0];
                  popup_a28500fd195546a3be3f9262d1b7f0b1.setContent(html_1aace49343d948eda937eb010ed7b484);


              marker_333b0f6b864f49fe9063bf377013b1ec.bindPopup(popup_a28500fd195546a3be3f9262d1b7f0b1);





              var marker_2d2979af0da0431aba13cabd2b6e6895 = L.marker(
                  [42.8682889004097,-73.9103229380082],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_b5d10be7a4eb4347afa08161ad1d864e = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_2d2979af0da0431aba13cabd2b6e6895.setIcon(icon_b5d10be7a4eb4347afa08161ad1d864e);


              var popup_1e82dae90a1940e7bf18ade5f7a24161 = L.popup({maxWidth: '300'});


                  var html_e7088fa986874a3e9044c4f6d3806161 = $('<div id="html_e7088fa986874a3e9044c4f6d3806161" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>25</th></tr><tr><td>Trip # </td><td align="right">7414</td></tr><tr><td>Distance </td><td align="right">122 miles</td><tr><td>Date</td><td align="right">2017-12-30 23:30:57.47722</td></tr></table></div>')[0];
                  popup_1e82dae90a1940e7bf18ade5f7a24161.setContent(html_e7088fa986874a3e9044c4f6d3806161);


              marker_2d2979af0da0431aba13cabd2b6e6895.bindPopup(popup_1e82dae90a1940e7bf18ade5f7a24161);





              var marker_84bb017885b2415a90e1ef548ab1825f = L.marker(
                  [43.966122880764104,-75.9160341368078],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_9b0088be39ea42b3b366996b61f25468);



                  var icon_f36e5122982a4e18874603be120bcc41 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_84bb017885b2415a90e1ef548ab1825f.setIcon(icon_f36e5122982a4e18874603be120bcc41);


              var popup_5164e502ba5145de86f19ffd622bb587 = L.popup({maxWidth: '300'});


                  var html_bde9a5206217410fa821177976825473 = $('<div id="html_bde9a5206217410fa821177976825473" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>25</th></tr><tr><td>Trip # </td><td align="right">7414</td></tr><tr><td>Distance </td><td align="right">122 miles</td><tr><td>Date</td><td align="right">2017-12-30 23:30:57.47722</td></tr></table></div>')[0];
                  popup_5164e502ba5145de86f19ffd622bb587.setContent(html_bde9a5206217410fa821177976825473);


              marker_84bb017885b2415a90e1ef548ab1825f.bindPopup(popup_5164e502ba5145de86f19ffd622bb587);




              var feature_group_a17bad20cf4c41dbb0779dec3a88d621 = L.featureGroup(
                  ).addTo(map_c719de9ea5a34ac2b96363b99c172fbb);


                  var poly_line_c7ce73e9d84743b886542101e5fd880c = L.polyline(
                      [[[44.00588988, -75.98484227], [43.06134758, -76.11031082]], [[43.972974994127, -75.89472760335059], [43.0424890474046, -76.14060877793091]], [[44.87429888, -74.87379248], [44.47893192, -73.19349712]], [[43.96755997, -75.88371193], [44.62497861, -75.09525605]], [[43.8818644981721, -75.5242118577481], [43.0435926286726, -76.09486752491149]], [[44.60729476, -75.13297373], [43.981100041419296, -75.9163922723383]], [[44.92853018, -74.88040939], [44.706225700000005, -73.5049917]], [[43.94783098, -75.91746364], [44.686375299999995, -75.49299995]], [[44.329604781232796, -75.47477334737779], [44.3245947081596, -74.1451556514949]], [[44.0875700857596, -75.873462069057], [43.0409589287177, -76.1377472690484]], [[43.966073118723095, -75.91595649167229], [43.1197856592254, -76.18335850456259]], [[44.69084361, -75.49903266], [43.97928981, -75.90767622]], [[43.966011248728705, -75.91605944541621], [43.045358640571, -76.1439443661136]], [[43.98865697, -75.94388764], [43.04566218, -76.13666255]], [[44.23438008, -76.0872113], [43.04634963, -76.13655827]], [[43.97278763, -75.92013833], [42.96466453, -76.14052721]], [[44.30294602, -75.38331067], [43.08912227, -76.05490143]], [[43.71653054, -75.9414068], [42.93364624, -76.55681102]], [[44.68637831, -75.49302611], [43.969148499999996, -75.91140457]], [[44.22946648, -76.07911312], [43.04246915, -76.14130116]], [[43.99131508, -75.9036504], [43.04364651, -76.09493601]], [[43.95211501, -75.63167208], [43.06130408, -76.11029935]], [[44.03324395260861, -75.93756428050979], [43.0447256690915, -76.1443694080783]], [[44.84121557, -74.68517424], [44.01548578, -75.76861226]], [[44.62499437, -75.09537509], [44.021227292446, -75.9296869845412]], [[44.09667765, -76.19187376], [43.09003125, -76.18966301]], [[43.88786369, -75.51307681], [43.10136773, -76.18837322]], [[43.28381234, -75.47093419], [44.16177469, -75.33235451]], [[44.68625356, -75.49316105], [43.96905944, -75.91134237]], [[43.9913472, -75.90362939], [44.69085165, -75.49927069]], [[43.1219697916936, -77.61801014018559], [43.966123762586605, -75.91604696450491]], [[43.9798125046735, -75.9075119757729], [43.052853621797, -76.1610981155413]], [[43.966066299494, -75.9157820011887], [43.101659344234506, -76.0564917176864]], [[43.977921747531006, -75.9049419219867], [43.04161054007871, -76.13804755913979]], [[43.0416452797668, -76.13814981155141], [43.980478495986006, -75.9063101285934]], [[43.0430758102409, -76.1457480092909], [43.966040946731006, -75.9160284929442]], [[43.96608473060989, -75.91602602590321], [43.1761073910221, -76.1131568126739]], [[44.68090362, -74.96879704], [43.97107408, -75.91203884]], [[44.68598995, -75.49305807], [43.96627833, -75.91369326]], [[43.68773037, -76.07334253], [44.92854031, -74.88022219]], [[44.92243678, -74.88971111], [44.47897263, -73.19259391]], [[43.5519154, -75.43877121], [42.89663317, -74.09676912]], [[43.97891093, -75.91563234], [43.042179600000004, -76.14034819]], [[44.09086833, -75.79944934], [44.93941197, -74.89748693]], [[44.0630733045963, -75.9221992810117], [43.089981377620894, -76.1886187071557]], [[44.68090486, -74.96884482], [44.47835974, -73.19349788]], [[44.68609109, -75.49308001], [44.00577193, -75.98479493]], [[43.71720559, -75.4172396], [43.00772075, -76.1680329]], [[43.96605236823729, -75.9160159349518], [43.04077358699529, -76.2938667818167]], [[43.966133474069004, -75.9160017423178], [43.0407751003693, -76.2939235283063]], [[43.9763708, -75.88030153], [43.04247814, -76.13782031]], [[43.99748648, -75.74585971], [43.04243208, -76.14057659999999]], [[44.095735999999995, -76.19154411], [43.04245074, -76.14094752]], [[44.87314435, -74.87135140000001], [44.47903074, -73.19330163]], [[44.68099451, -74.96863540000001], [44.47838789, -73.19321609]], [[43.966019790168104, -75.91609951250321], [43.0424081003834, -76.1404061736097]], [[44.04000986, -75.90152921], [43.04617157, -76.13416596]], [[43.68573206, -75.35512922], [44.68095554, -74.96839665]], [[44.09577425, -76.19150762], [44.73743229, -75.14637427]], [[44.76756034, -75.29758019], [44.23643776, -76.0814562]], [[44.23643776, -76.0814562], [43.552028899999996, -75.43818398]], [[43.0657897, -76.10085759], [44.00646172, -75.98406507]], [[43.98707853, -75.59248283], [44.9526581, -74.84376237]], [[44.84123661, -74.68520144], [43.97921051, -75.63158607]], [[43.90918273, -75.50244345], [44.73743484, -75.14628783]], [[44.92495252, -74.87373005], [43.887950472076206, -75.5130044869492]], [[44.12508498, -76.34027887], [43.71528429, -75.41538373]], [[43.71528429, -75.41538373], [44.76761511, -75.29767656]], [[44.09577075, -76.19146802], [43.55203014, -75.43866392]], [[43.96697595, -75.87922097], [43.34414389, -76.50968849]], [[43.04589497, -76.13666829], [43.97589879, -75.91927807]], [[43.03829552, -76.13859658], [44.09574117, -76.19155224]], [[43.1622586, -76.31718031], [43.96867871, -75.91031788]], [[43.0899701686576, -76.1890343762934], [43.9975255122408, -75.7454051356763]], [[43.97668777, -75.61999181], [44.8412521, -74.6851298]], [[44.62501132, -75.09524811], [43.887921429319896, -75.5130230125736]], [[43.7153155, -75.41553612], [44.69908034, -75.46242503]], [[44.17652065, -75.79194659], [44.92487814, -74.87398244]], [[44.12500838, -76.34036482], [43.55223982, -75.43857759]], [[43.61462219, -75.36081703], [43.04627878, -76.13685349]], [[44.69188257, -75.49995473], [43.9702078, -75.88673394]], [[44.70636251, -73.50500033], [44.62509823, -75.09543349]], [[43.0531092407182, -76.06816842220721], [43.9778725896031, -75.9048956539482]], [[43.1212614161374, -76.17771479496359], [43.966006202169105, -75.9160347845229]], [[44.09579282, -76.19149667], [44.75178268, -74.79482459]], [[44.87442164, -74.87346508], [44.013115852139904, -75.67778823897241]], [[43.71573855, -75.41566694], [44.62005959, -75.41006478]], [[43.99151979, -75.95072289], [44.69232211, -75.50033736]], [[43.05640308, -76.15256928], [44.13067257, -76.32077059]], [[43.89994781, -75.27286294], [43.08290188, -75.26738419]], [[43.046552500000004, -76.13642218], [43.78500724, -75.49681149]], [[42.93359373, -76.55683974], [43.71648269, -75.94109871]], [[43.04655414, -76.13669954], [43.97295854, -75.89476264]], [[44.66249609, -74.74530676], [44.23422105, -76.08704865]], [[43.10641963, -75.25472841], [43.99742493, -75.74577024]], [[43.97405054, -75.90350217], [44.76776613, -75.29748329]], [[44.66248549, -74.74524735], [43.977622100000005, -75.61787952]], [[43.17559416, -76.24958665], [43.9803926, -75.90208908]], [[43.06585757, -76.10090226], [43.95211759, -75.6313588]], [[43.06573407, -76.10105683], [43.95210944, -75.63147526]], [[44.14660388, -75.70970465], [44.84121241, -74.68516793]], [[44.676847753308, -74.98258724255659], [44.0631063389913, -75.92237206678959]], [[44.6766395553744, -74.9829354440827], [43.9989190898038, -75.931250194107]], [[43.05631654, -76.14808851], [43.89007113, -75.38663488]], [[43.1061405, -75.25455054], [43.97957748, -75.90753459999999]], [[44.68625356, -75.49316105], [43.96905944, -75.91134237]], [[44.70047837, -75.4651201], [43.97340946, -75.89442017]], [[44.76772211, -75.29744375], [43.97858986, -75.91076355]], [[43.97858986, -75.91076355], [44.68631177, -75.49303867]], [[44.6078624177109, -75.1325577511325], [43.9744983517729, -75.9032180502217]], [[43.97670689, -75.90212361], [44.92487056, -74.87389259999999]], [[44.92487056, -74.87389259999999], [44.01736852, -75.80297415]], [[44.84120602, -74.68505293], [43.71511833, -75.41567282]], [[43.71511833, -75.41567282], [44.84112879, -74.68519337]], [[43.97107604, -75.9120413], [44.62501848, -75.09539542]], [[43.06853275, -76.10094575], [43.99740066, -75.74590494]], [[43.98293966, -75.61220036], [43.35038152, -76.51365283]], [[43.04230189, -76.14030491], [43.854669, -75.80223234]], [[44.33334912, -75.91382857], [43.35018831, -76.51368471]], [[43.97294321, -75.89438254], [43.35033063, -76.51364465]], [[44.93949746, -74.89778766], [44.09060424, -75.79949233]], [[44.1460805, -75.7079203], [43.35033823, -76.51359398]], [[43.68562951, -75.35520699], [44.13061059, -76.32770722]], [[44.92469352, -74.87419513], [43.55195779, -75.43865687]], [[43.55195779, -75.43865687], [44.095786, -76.19146567]], [[43.97775701, -75.60219163], [43.35040894, -76.51361926]], [[44.01729044, -75.80327832], [44.62498994, -75.09529551]], [[44.62498994, -75.09529551], [43.97585231, -75.91935819]], [[44.12514532, -76.34015962], [44.78350794, -75.35297412]], [[44.68092414, -74.96869334], [44.09580331, -76.19155652]], [[44.09580331, -76.19155652], [44.67964558, -74.98459165]], [[44.67964558, -74.98459165], [43.71521526, -75.41558621]], [[44.23421609, -76.08724119], [43.55200591, -75.43863621]], [[43.92858213, -76.05465642], [44.87317418, -74.87133788]], [[43.11867168, -76.14327883], [43.97593354, -75.91918034]], [[43.81351159, -76.02030273], [44.92491167, -74.87393928]], [[44.92491167, -74.87393928], [43.8878888958775, -75.5130367071502]], [[43.71538319, -75.41547595], [44.68093154, -74.96869092]], [[44.68093154, -74.96869092], [44.09570258, -76.19135403]], [[43.97579943, -75.91917264], [44.70769558, -75.45698693]], [[44.70769558, -75.45698693], [43.71553276, -75.41568574]], [[44.1700892600457, -75.838541848663], [44.8725253, -74.87279745]], [[44.8107660344283, -74.7519992190566], [43.952119316209405, -75.631431272801]]],
                      {
    "bubblingMouseEvents": true,
    "color": "#B9770E",
    "dashArray": null,
    "dashOffset": null,
    "fill": false,
    "fillColor": "#B9770E",
    "fillOpacity": 0.2,
    "fillRule": "evenodd",
    "lineCap": "round",
    "lineJoin": "round",
    "noClip": false,
    "opacity": 0.4,
    "smoothFactor": 1.0,
    "stroke": true,
    "weight": 2
  }).addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



              var marker_478140fff8584dfd8ac6b2a22da82910 = L.marker(
                  [44.00588988,-75.98484227],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_cd5ae528fa114919900f1b877bb132d2 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_478140fff8584dfd8ac6b2a22da82910.setIcon(icon_cd5ae528fa114919900f1b877bb132d2);


              var popup_604e7336f1b24ee09049cbf99e3f4516 = L.popup({maxWidth: '300'});


                  var html_bdf9dab379bb47c1a3b7417426d9b280 = $('<div id="html_bdf9dab379bb47c1a3b7417426d9b280" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>22</th></tr><tr><td>Trip # </td><td align="right">7583</td></tr><tr><td>Distance </td><td align="right">63 miles</td><tr><td>Date</td><td align="right">2018-01-03 18:03:23.112741</td></tr></table></div>')[0];
                  popup_604e7336f1b24ee09049cbf99e3f4516.setContent(html_bdf9dab379bb47c1a3b7417426d9b280);


              marker_478140fff8584dfd8ac6b2a22da82910.bindPopup(popup_604e7336f1b24ee09049cbf99e3f4516);





              var marker_34a2c6691ea9496cbccd21d5719243e3 = L.marker(
                  [43.06134758,-76.11031082],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_7e389440a5644908930406a28dba2fb1 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_34a2c6691ea9496cbccd21d5719243e3.setIcon(icon_7e389440a5644908930406a28dba2fb1);


              var popup_37d79b6bebe34f579f17faa2456b2adb = L.popup({maxWidth: '300'});


                  var html_191544399f0946b7a78a2050596ed2bf = $('<div id="html_191544399f0946b7a78a2050596ed2bf" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>22</th></tr><tr><td>Trip # </td><td align="right">7583</td></tr><tr><td>Distance </td><td align="right">63 miles</td><tr><td>Date</td><td align="right">2018-01-03 18:03:23.112741</td></tr></table></div>')[0];
                  popup_37d79b6bebe34f579f17faa2456b2adb.setContent(html_191544399f0946b7a78a2050596ed2bf);


              marker_34a2c6691ea9496cbccd21d5719243e3.bindPopup(popup_37d79b6bebe34f579f17faa2456b2adb);





              var marker_de5702ecbc1f4babbcf0f1ffe15c3688 = L.marker(
                  [43.972974994127,-75.89472760335059],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_57afe111d3cc456d86893d22e125db08 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_de5702ecbc1f4babbcf0f1ffe15c3688.setIcon(icon_57afe111d3cc456d86893d22e125db08);


              var popup_3530e0e1109a4da0bd427132189445d6 = L.popup({maxWidth: '300'});


                  var html_eb1258636b3f473db92ee9f9af084792 = $('<div id="html_eb1258636b3f473db92ee9f9af084792" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>3</th></tr><tr><td>Trip # </td><td align="right">7737</td></tr><tr><td>Distance </td><td align="right">63 miles</td><tr><td>Date</td><td align="right">2018-01-05 16:17:48.00341</td></tr></table></div>')[0];
                  popup_3530e0e1109a4da0bd427132189445d6.setContent(html_eb1258636b3f473db92ee9f9af084792);


              marker_de5702ecbc1f4babbcf0f1ffe15c3688.bindPopup(popup_3530e0e1109a4da0bd427132189445d6);





              var marker_abb072adfc294e5b8030a521c28689f0 = L.marker(
                  [43.0424890474046,-76.14060877793091],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_2f896face4904928a56be6117e1cb24f = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_abb072adfc294e5b8030a521c28689f0.setIcon(icon_2f896face4904928a56be6117e1cb24f);


              var popup_2c78bbb675f94c36883c7bd77d7fed76 = L.popup({maxWidth: '300'});


                  var html_c60c7f22294b448dbe64e79e22193e6a = $('<div id="html_c60c7f22294b448dbe64e79e22193e6a" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>3</th></tr><tr><td>Trip # </td><td align="right">7737</td></tr><tr><td>Distance </td><td align="right">63 miles</td><tr><td>Date</td><td align="right">2018-01-05 16:17:48.00341</td></tr></table></div>')[0];
                  popup_2c78bbb675f94c36883c7bd77d7fed76.setContent(html_c60c7f22294b448dbe64e79e22193e6a);


              marker_abb072adfc294e5b8030a521c28689f0.bindPopup(popup_2c78bbb675f94c36883c7bd77d7fed76);





              var marker_20b5668809c44fd88e152ee2428babcb = L.marker(
                  [44.87429888,-74.87379248],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_f29c3adfbfa54eef99e683419020f7c5 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_20b5668809c44fd88e152ee2428babcb.setIcon(icon_f29c3adfbfa54eef99e683419020f7c5);


              var popup_bd9bf616678641ed9bb33c057e1d9b40 = L.popup({maxWidth: '300'});


                  var html_896399ff85ae4e27b27bb29518506eb1 = $('<div id="html_896399ff85ae4e27b27bb29518506eb1" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>40</th></tr><tr><td>Trip # </td><td align="right">7752</td></tr><tr><td>Distance </td><td align="right">84 miles</td><tr><td>Date</td><td align="right">2018-01-05 18:49:13.043121</td></tr></table></div>')[0];
                  popup_bd9bf616678641ed9bb33c057e1d9b40.setContent(html_896399ff85ae4e27b27bb29518506eb1);


              marker_20b5668809c44fd88e152ee2428babcb.bindPopup(popup_bd9bf616678641ed9bb33c057e1d9b40);





              var marker_e7da36f812ed47a2af4ca9720ae3ed27 = L.marker(
                  [44.47893192,-73.19349712],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_059a45bd07e3482c8a2f563e910f2f07 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_e7da36f812ed47a2af4ca9720ae3ed27.setIcon(icon_059a45bd07e3482c8a2f563e910f2f07);


              var popup_25c725cb9a1f4d088095bc0d186b6916 = L.popup({maxWidth: '300'});


                  var html_dca02365d0f34cc5ba14054433173899 = $('<div id="html_dca02365d0f34cc5ba14054433173899" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>40</th></tr><tr><td>Trip # </td><td align="right">7752</td></tr><tr><td>Distance </td><td align="right">84 miles</td><tr><td>Date</td><td align="right">2018-01-05 18:49:13.043121</td></tr></table></div>')[0];
                  popup_25c725cb9a1f4d088095bc0d186b6916.setContent(html_dca02365d0f34cc5ba14054433173899);


              marker_e7da36f812ed47a2af4ca9720ae3ed27.bindPopup(popup_25c725cb9a1f4d088095bc0d186b6916);





              var marker_c64a9bfebd9f4d2baaeb94d98d9b19da = L.marker(
                  [43.96755997,-75.88371193],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_13b135aae8b8448ba27f3d9b3d5b98d3 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_c64a9bfebd9f4d2baaeb94d98d9b19da.setIcon(icon_13b135aae8b8448ba27f3d9b3d5b98d3);


              var popup_4e345a59454c45b0a5e4d2fd83dfb0b5 = L.popup({maxWidth: '300'});


                  var html_7fc1defc4de246b286469ebf9b799553 = $('<div id="html_7fc1defc4de246b286469ebf9b799553" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>125</th></tr><tr><td>Trip # </td><td align="right">7761</td></tr><tr><td>Distance </td><td align="right">58 miles</td><tr><td>Date</td><td align="right">2018-01-05 21:23:24.557247</td></tr></table></div>')[0];
                  popup_4e345a59454c45b0a5e4d2fd83dfb0b5.setContent(html_7fc1defc4de246b286469ebf9b799553);


              marker_c64a9bfebd9f4d2baaeb94d98d9b19da.bindPopup(popup_4e345a59454c45b0a5e4d2fd83dfb0b5);





              var marker_9dad538e1fc7433b8d1f78c34c12667b = L.marker(
                  [44.62497861,-75.09525605],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_b508a446fc1240199a054897cfe9e976 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_9dad538e1fc7433b8d1f78c34c12667b.setIcon(icon_b508a446fc1240199a054897cfe9e976);


              var popup_fa9866c88d0d45e68af464422551f550 = L.popup({maxWidth: '300'});


                  var html_ac4752868b8b49279952f4829258c94c = $('<div id="html_ac4752868b8b49279952f4829258c94c" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>125</th></tr><tr><td>Trip # </td><td align="right">7761</td></tr><tr><td>Distance </td><td align="right">58 miles</td><tr><td>Date</td><td align="right">2018-01-05 21:23:24.557247</td></tr></table></div>')[0];
                  popup_fa9866c88d0d45e68af464422551f550.setContent(html_ac4752868b8b49279952f4829258c94c);


              marker_9dad538e1fc7433b8d1f78c34c12667b.bindPopup(popup_fa9866c88d0d45e68af464422551f550);





              var marker_704ec8288aad4c449624453fd3517d32 = L.marker(
                  [43.8818644981721,-75.5242118577481],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_1d74b783e0544473957184c7448124a8 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_704ec8288aad4c449624453fd3517d32.setIcon(icon_1d74b783e0544473957184c7448124a8);


              var popup_da300fe8a9ee4980882a315d5ab8a274 = L.popup({maxWidth: '300'});


                  var html_7b287010314e421b960f6b3230457436 = $('<div id="html_7b287010314e421b960f6b3230457436" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>87</th></tr><tr><td>Trip # </td><td align="right">7808</td></tr><tr><td>Distance </td><td align="right">63 miles</td><tr><td>Date</td><td align="right">2018-01-08 11:45:00.545129</td></tr></table></div>')[0];
                  popup_da300fe8a9ee4980882a315d5ab8a274.setContent(html_7b287010314e421b960f6b3230457436);


              marker_704ec8288aad4c449624453fd3517d32.bindPopup(popup_da300fe8a9ee4980882a315d5ab8a274);





              var marker_142352f9494a4653839f7fdde5bb5ad3 = L.marker(
                  [43.0435926286726,-76.09486752491149],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_812c47603e8d4f578add0d238c0b8268 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_142352f9494a4653839f7fdde5bb5ad3.setIcon(icon_812c47603e8d4f578add0d238c0b8268);


              var popup_231875ee44ce40c8b4d047e06288bfe4 = L.popup({maxWidth: '300'});


                  var html_23bd9b1d239f4f678b60dab73e13ebfb = $('<div id="html_23bd9b1d239f4f678b60dab73e13ebfb" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>87</th></tr><tr><td>Trip # </td><td align="right">7808</td></tr><tr><td>Distance </td><td align="right">63 miles</td><tr><td>Date</td><td align="right">2018-01-08 11:45:00.545129</td></tr></table></div>')[0];
                  popup_231875ee44ce40c8b4d047e06288bfe4.setContent(html_23bd9b1d239f4f678b60dab73e13ebfb);


              marker_142352f9494a4653839f7fdde5bb5ad3.bindPopup(popup_231875ee44ce40c8b4d047e06288bfe4);





              var marker_e17f75bd3ec54b95811767974fde53eb = L.marker(
                  [44.60729476,-75.13297373],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_0e135ec1a5484edfa25c870714d76aa5 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_e17f75bd3ec54b95811767974fde53eb.setIcon(icon_0e135ec1a5484edfa25c870714d76aa5);


              var popup_b8161140dd6247ac9c0d1988f609b2a0 = L.popup({maxWidth: '300'});


                  var html_820574032bcc43e1a96cf1441ddf0569 = $('<div id="html_820574032bcc43e1a96cf1441ddf0569" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">8093</td></tr><tr><td>Distance </td><td align="right">56 miles</td><tr><td>Date</td><td align="right">2018-01-11 15:33:09.907953</td></tr></table></div>')[0];
                  popup_b8161140dd6247ac9c0d1988f609b2a0.setContent(html_820574032bcc43e1a96cf1441ddf0569);


              marker_e17f75bd3ec54b95811767974fde53eb.bindPopup(popup_b8161140dd6247ac9c0d1988f609b2a0);





              var marker_9b701056e0da4c73b34c00593487b373 = L.marker(
                  [43.981100041419296,-75.9163922723383],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_35ba4e1d12df4a5f9449a2205c39e220 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_9b701056e0da4c73b34c00593487b373.setIcon(icon_35ba4e1d12df4a5f9449a2205c39e220);


              var popup_e0234953bc344cc8a35bfda4ebd1a613 = L.popup({maxWidth: '300'});


                  var html_6eba0ed2d7834bbc8701f54bc4539ee7 = $('<div id="html_6eba0ed2d7834bbc8701f54bc4539ee7" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">8093</td></tr><tr><td>Distance </td><td align="right">56 miles</td><tr><td>Date</td><td align="right">2018-01-11 15:33:09.907953</td></tr></table></div>')[0];
                  popup_e0234953bc344cc8a35bfda4ebd1a613.setContent(html_6eba0ed2d7834bbc8701f54bc4539ee7);


              marker_9b701056e0da4c73b34c00593487b373.bindPopup(popup_e0234953bc344cc8a35bfda4ebd1a613);





              var marker_8e98357f2079417bb1d76255f82cc58b = L.marker(
                  [44.92853018,-74.88040939],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_51d7ef7c03e84f53823a813b297fd073 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_8e98357f2079417bb1d76255f82cc58b.setIcon(icon_51d7ef7c03e84f53823a813b297fd073);


              var popup_0c3bee13a10049c1b09dd5b4247608b4 = L.popup({maxWidth: '300'});


                  var html_a8da1d9df491452abb7aa4656c08a6ea = $('<div id="html_a8da1d9df491452abb7aa4656c08a6ea" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>47</th></tr><tr><td>Trip # </td><td align="right">8115</td></tr><tr><td>Distance </td><td align="right">67 miles</td><tr><td>Date</td><td align="right">2018-01-11 18:46:24.216793</td></tr></table></div>')[0];
                  popup_0c3bee13a10049c1b09dd5b4247608b4.setContent(html_a8da1d9df491452abb7aa4656c08a6ea);


              marker_8e98357f2079417bb1d76255f82cc58b.bindPopup(popup_0c3bee13a10049c1b09dd5b4247608b4);





              var marker_6403710084974284a6e65239d5203cbf = L.marker(
                  [44.706225700000005,-73.5049917],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_bff0e72fad774bdba271c48d00bb579c = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_6403710084974284a6e65239d5203cbf.setIcon(icon_bff0e72fad774bdba271c48d00bb579c);


              var popup_d622ecd8c4d94195bd2670cead867348 = L.popup({maxWidth: '300'});


                  var html_a95b0c26f9744be9b77b66f0a95023ad = $('<div id="html_a95b0c26f9744be9b77b66f0a95023ad" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>47</th></tr><tr><td>Trip # </td><td align="right">8115</td></tr><tr><td>Distance </td><td align="right">67 miles</td><tr><td>Date</td><td align="right">2018-01-11 18:46:24.216793</td></tr></table></div>')[0];
                  popup_d622ecd8c4d94195bd2670cead867348.setContent(html_a95b0c26f9744be9b77b66f0a95023ad);


              marker_6403710084974284a6e65239d5203cbf.bindPopup(popup_d622ecd8c4d94195bd2670cead867348);





              var marker_e14aa511b7b04970a9b9adf29bd5a0ba = L.marker(
                  [43.94783098,-75.91746364],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_f82e05f7b6bd403b8643b8816dfcc37e = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_e14aa511b7b04970a9b9adf29bd5a0ba.setIcon(icon_f82e05f7b6bd403b8643b8816dfcc37e);


              var popup_8452bec285c545aa804eca7fb23a8ffb = L.popup({maxWidth: '300'});


                  var html_bcd37242b46f437186ae72df53ce9afc = $('<div id="html_bcd37242b46f437186ae72df53ce9afc" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">8189</td></tr><tr><td>Distance </td><td align="right">54 miles</td><tr><td>Date</td><td align="right">2018-01-12 15:15:43.120851</td></tr></table></div>')[0];
                  popup_8452bec285c545aa804eca7fb23a8ffb.setContent(html_bcd37242b46f437186ae72df53ce9afc);


              marker_e14aa511b7b04970a9b9adf29bd5a0ba.bindPopup(popup_8452bec285c545aa804eca7fb23a8ffb);





              var marker_732f18c1775d40f186d4bf1b11390bd9 = L.marker(
                  [44.686375299999995,-75.49299995],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_40d2064329164cd9b651d1cd3ab62ef5 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_732f18c1775d40f186d4bf1b11390bd9.setIcon(icon_40d2064329164cd9b651d1cd3ab62ef5);


              var popup_7eec68f8e88047d9a67b3169bc8646e4 = L.popup({maxWidth: '300'});


                  var html_2eccc748e9674598924d673ad3c22ad1 = $('<div id="html_2eccc748e9674598924d673ad3c22ad1" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">8189</td></tr><tr><td>Distance </td><td align="right">54 miles</td><tr><td>Date</td><td align="right">2018-01-12 15:15:43.120851</td></tr></table></div>')[0];
                  popup_7eec68f8e88047d9a67b3169bc8646e4.setContent(html_2eccc748e9674598924d673ad3c22ad1);


              marker_732f18c1775d40f186d4bf1b11390bd9.bindPopup(popup_7eec68f8e88047d9a67b3169bc8646e4);





              var marker_5df7e4deb4334edbbea01b3466532d3d = L.marker(
                  [44.329604781232796,-75.47477334737779],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_b7982b4d387d45c2a1c5ef27c39f6b14 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_5df7e4deb4334edbbea01b3466532d3d.setIcon(icon_b7982b4d387d45c2a1c5ef27c39f6b14);


              var popup_bea641fb8e024c779c1b7db648c67597 = L.popup({maxWidth: '300'});


                  var html_2eba7c65beb248c58c13a59c873eb84e = $('<div id="html_2eba7c65beb248c58c13a59c873eb84e" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>35</th></tr><tr><td>Trip # </td><td align="right">8303</td></tr><tr><td>Distance </td><td align="right">64 miles</td><tr><td>Date</td><td align="right">2018-01-15 15:34:13.908726</td></tr></table></div>')[0];
                  popup_bea641fb8e024c779c1b7db648c67597.setContent(html_2eba7c65beb248c58c13a59c873eb84e);


              marker_5df7e4deb4334edbbea01b3466532d3d.bindPopup(popup_bea641fb8e024c779c1b7db648c67597);





              var marker_2d1072ba6e304c5a80a0f849dfb052c7 = L.marker(
                  [44.3245947081596,-74.1451556514949],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_89fe05628806491a8e1e17b91b3ae671 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_2d1072ba6e304c5a80a0f849dfb052c7.setIcon(icon_89fe05628806491a8e1e17b91b3ae671);


              var popup_34e551c9fded4354987c4453ef4ab347 = L.popup({maxWidth: '300'});


                  var html_a4eb9d560bda485794e377a8bc69cb4e = $('<div id="html_a4eb9d560bda485794e377a8bc69cb4e" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>35</th></tr><tr><td>Trip # </td><td align="right">8303</td></tr><tr><td>Distance </td><td align="right">64 miles</td><tr><td>Date</td><td align="right">2018-01-15 15:34:13.908726</td></tr></table></div>')[0];
                  popup_34e551c9fded4354987c4453ef4ab347.setContent(html_a4eb9d560bda485794e377a8bc69cb4e);


              marker_2d1072ba6e304c5a80a0f849dfb052c7.bindPopup(popup_34e551c9fded4354987c4453ef4ab347);





              var marker_14f558190f924240ad045a8c346f06f7 = L.marker(
                  [44.0875700857596,-75.873462069057],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_c25e5e6313cf4bf69610e86e6f408afb = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_14f558190f924240ad045a8c346f06f7.setIcon(icon_c25e5e6313cf4bf69610e86e6f408afb);


              var popup_36da1fe9968844ac8e5ace08ca4b2cb8 = L.popup({maxWidth: '300'});


                  var html_a9f2db957c3f4c8c87f46db807f125a7 = $('<div id="html_a9f2db957c3f4c8c87f46db807f125a7" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>21</th></tr><tr><td>Trip # </td><td align="right">8342</td></tr><tr><td>Distance </td><td align="right">71 miles</td><tr><td>Date</td><td align="right">2018-01-16 02:41:06.790862</td></tr></table></div>')[0];
                  popup_36da1fe9968844ac8e5ace08ca4b2cb8.setContent(html_a9f2db957c3f4c8c87f46db807f125a7);


              marker_14f558190f924240ad045a8c346f06f7.bindPopup(popup_36da1fe9968844ac8e5ace08ca4b2cb8);





              var marker_34101c8f38814e47b544bb79d04e52e1 = L.marker(
                  [43.0409589287177,-76.1377472690484],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_c7a72980e8074a0e90a80f677f286251 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_34101c8f38814e47b544bb79d04e52e1.setIcon(icon_c7a72980e8074a0e90a80f677f286251);


              var popup_141ab8675f754ba0a6a556e22be497de = L.popup({maxWidth: '300'});


                  var html_3539ec5805d947d88ea76a4178d9ec32 = $('<div id="html_3539ec5805d947d88ea76a4178d9ec32" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>21</th></tr><tr><td>Trip # </td><td align="right">8342</td></tr><tr><td>Distance </td><td align="right">71 miles</td><tr><td>Date</td><td align="right">2018-01-16 02:41:06.790862</td></tr></table></div>')[0];
                  popup_141ab8675f754ba0a6a556e22be497de.setContent(html_3539ec5805d947d88ea76a4178d9ec32);


              marker_34101c8f38814e47b544bb79d04e52e1.bindPopup(popup_141ab8675f754ba0a6a556e22be497de);





              var marker_48231460f8c4492a8c25baebf2312066 = L.marker(
                  [43.966073118723095,-75.91595649167229],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_13fcce84d80f4fd1a366a08071d93e8b = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_48231460f8c4492a8c25baebf2312066.setIcon(icon_13fcce84d80f4fd1a366a08071d93e8b);


              var popup_7feab734634a4d4e8e3da86ea1b1c9e0 = L.popup({maxWidth: '300'});


                  var html_f4e847dc8dab474f9b5ec15c7b4a41b0 = $('<div id="html_f4e847dc8dab474f9b5ec15c7b4a41b0" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>25</th></tr><tr><td>Trip # </td><td align="right">8647</td></tr><tr><td>Distance </td><td align="right">58 miles</td><tr><td>Date</td><td align="right">2018-01-19 11:26:45.910356</td></tr></table></div>')[0];
                  popup_7feab734634a4d4e8e3da86ea1b1c9e0.setContent(html_f4e847dc8dab474f9b5ec15c7b4a41b0);


              marker_48231460f8c4492a8c25baebf2312066.bindPopup(popup_7feab734634a4d4e8e3da86ea1b1c9e0);





              var marker_a6e658de630f44c5bd5da4e4af8da5a8 = L.marker(
                  [43.1197856592254,-76.18335850456259],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_3bb0622d4ec14572838e77dffa57c555 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_a6e658de630f44c5bd5da4e4af8da5a8.setIcon(icon_3bb0622d4ec14572838e77dffa57c555);


              var popup_c9f47af6c6594a6797cc32af9683ca1b = L.popup({maxWidth: '300'});


                  var html_331a9fbd9b094b70a35175fdfd596d76 = $('<div id="html_331a9fbd9b094b70a35175fdfd596d76" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>25</th></tr><tr><td>Trip # </td><td align="right">8647</td></tr><tr><td>Distance </td><td align="right">58 miles</td><tr><td>Date</td><td align="right">2018-01-19 11:26:45.910356</td></tr></table></div>')[0];
                  popup_c9f47af6c6594a6797cc32af9683ca1b.setContent(html_331a9fbd9b094b70a35175fdfd596d76);


              marker_a6e658de630f44c5bd5da4e4af8da5a8.bindPopup(popup_c9f47af6c6594a6797cc32af9683ca1b);





              var marker_d9b30c13942b42648a1a3dd54272a0c5 = L.marker(
                  [44.69084361,-75.49903266],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_e3d174f23b8e442081497ebbdc275461 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_d9b30c13942b42648a1a3dd54272a0c5.setIcon(icon_e3d174f23b8e442081497ebbdc275461);


              var popup_58a09e98ede5427f9fc6da5ebf3e0d3e = L.popup({maxWidth: '300'});


                  var html_2e814fb1d92846008ee7f3c535b735f2 = $('<div id="html_2e814fb1d92846008ee7f3c535b735f2" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">8892</td></tr><tr><td>Distance </td><td align="right">52 miles</td><tr><td>Date</td><td align="right">2018-01-22 18:36:34.931682</td></tr></table></div>')[0];
                  popup_58a09e98ede5427f9fc6da5ebf3e0d3e.setContent(html_2e814fb1d92846008ee7f3c535b735f2);


              marker_d9b30c13942b42648a1a3dd54272a0c5.bindPopup(popup_58a09e98ede5427f9fc6da5ebf3e0d3e);





              var marker_063c95b4279d40769d3e6983725c86d8 = L.marker(
                  [43.97928981,-75.90767622],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_732ccf591f5940a4a559368c23dbb2ed = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_063c95b4279d40769d3e6983725c86d8.setIcon(icon_732ccf591f5940a4a559368c23dbb2ed);


              var popup_2bdeb391ceb54060b71a1b22240aed0a = L.popup({maxWidth: '300'});


                  var html_da70e387ad774e768de23abd7eea827c = $('<div id="html_da70e387ad774e768de23abd7eea827c" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">8892</td></tr><tr><td>Distance </td><td align="right">52 miles</td><tr><td>Date</td><td align="right">2018-01-22 18:36:34.931682</td></tr></table></div>')[0];
                  popup_2bdeb391ceb54060b71a1b22240aed0a.setContent(html_da70e387ad774e768de23abd7eea827c);


              marker_063c95b4279d40769d3e6983725c86d8.bindPopup(popup_2bdeb391ceb54060b71a1b22240aed0a);





              var marker_a7b3a5fc356a4c289b084914ad1feb77 = L.marker(
                  [43.966011248728705,-75.91605944541621],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_319be429ca3c46249b2f9602273aab86 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_a7b3a5fc356a4c289b084914ad1feb77.setIcon(icon_319be429ca3c46249b2f9602273aab86);


              var popup_bcd6968d5fb34c4f9ff062ba323d52a4 = L.popup({maxWidth: '300'});


                  var html_364ce736a10f4f50b84376e73b1f873f = $('<div id="html_364ce736a10f4f50b84376e73b1f873f" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>25</th></tr><tr><td>Trip # </td><td align="right">8903</td></tr><tr><td>Distance </td><td align="right">63 miles</td><tr><td>Date</td><td align="right">2018-01-22 19:22:51.493947</td></tr></table></div>')[0];
                  popup_bcd6968d5fb34c4f9ff062ba323d52a4.setContent(html_364ce736a10f4f50b84376e73b1f873f);


              marker_a7b3a5fc356a4c289b084914ad1feb77.bindPopup(popup_bcd6968d5fb34c4f9ff062ba323d52a4);





              var marker_cecb96d627104324a1cfd8a1d5689c84 = L.marker(
                  [43.045358640571,-76.1439443661136],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_84b81cd4e0a4407dbf17e4911a009fc1 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_cecb96d627104324a1cfd8a1d5689c84.setIcon(icon_84b81cd4e0a4407dbf17e4911a009fc1);


              var popup_4c9562cae7034797a013f09091fae60b = L.popup({maxWidth: '300'});


                  var html_47fc12934f4e4a6f97ee82fb7f9c876d = $('<div id="html_47fc12934f4e4a6f97ee82fb7f9c876d" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>25</th></tr><tr><td>Trip # </td><td align="right">8903</td></tr><tr><td>Distance </td><td align="right">63 miles</td><tr><td>Date</td><td align="right">2018-01-22 19:22:51.493947</td></tr></table></div>')[0];
                  popup_4c9562cae7034797a013f09091fae60b.setContent(html_47fc12934f4e4a6f97ee82fb7f9c876d);


              marker_cecb96d627104324a1cfd8a1d5689c84.bindPopup(popup_4c9562cae7034797a013f09091fae60b);





              var marker_2581dfab514147dda8838628fb841c9f = L.marker(
                  [43.98865697,-75.94388764],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_111c7b0b0dfb4910846bd9246a23cac1 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_2581dfab514147dda8838628fb841c9f.setIcon(icon_111c7b0b0dfb4910846bd9246a23cac1);


              var popup_0fc09a57150a4b8eb7520d6f096bca80 = L.popup({maxWidth: '300'});


                  var html_ff4bddf7d2764500b4446212df8dcd28 = $('<div id="html_ff4bddf7d2764500b4446212df8dcd28" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>21</th></tr><tr><td>Trip # </td><td align="right">1420</td></tr><tr><td>Distance </td><td align="right">64 miles</td><tr><td>Date</td><td align="right">2017-09-05 10:42:10.756521</td></tr></table></div>')[0];
                  popup_0fc09a57150a4b8eb7520d6f096bca80.setContent(html_ff4bddf7d2764500b4446212df8dcd28);


              marker_2581dfab514147dda8838628fb841c9f.bindPopup(popup_0fc09a57150a4b8eb7520d6f096bca80);





              var marker_dd342d0b4ea84befb7bfff21296f4cf7 = L.marker(
                  [43.04566218,-76.13666255],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_04084a5bd57745169c9e6fcdbee06f4b = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_dd342d0b4ea84befb7bfff21296f4cf7.setIcon(icon_04084a5bd57745169c9e6fcdbee06f4b);


              var popup_6c468442bfe64b4f85eb80e8d4e608f4 = L.popup({maxWidth: '300'});


                  var html_6177ce3b4bcd4aba9dfa91f051ef57f2 = $('<div id="html_6177ce3b4bcd4aba9dfa91f051ef57f2" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>21</th></tr><tr><td>Trip # </td><td align="right">1420</td></tr><tr><td>Distance </td><td align="right">64 miles</td><tr><td>Date</td><td align="right">2017-09-05 10:42:10.756521</td></tr></table></div>')[0];
                  popup_6c468442bfe64b4f85eb80e8d4e608f4.setContent(html_6177ce3b4bcd4aba9dfa91f051ef57f2);


              marker_dd342d0b4ea84befb7bfff21296f4cf7.bindPopup(popup_6c468442bfe64b4f85eb80e8d4e608f4);





              var marker_ee285e9734d04fe7a99cb9ea56c66459 = L.marker(
                  [44.23438008,-76.0872113],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_ce38f3ed4859449ba9dbff7b37eba0c0 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_ee285e9734d04fe7a99cb9ea56c66459.setIcon(icon_ce38f3ed4859449ba9dbff7b37eba0c0);


              var popup_b5395e5242b6449cbeac4dda9f44d1cf = L.popup({maxWidth: '300'});


                  var html_795bec69bfa04450b9a0d6f64b7f9a95 = $('<div id="html_795bec69bfa04450b9a0d6f64b7f9a95" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>10</th></tr><tr><td>Trip # </td><td align="right">1481</td></tr><tr><td>Distance </td><td align="right">79 miles</td><tr><td>Date</td><td align="right">2017-09-07 07:40:17.380774</td></tr></table></div>')[0];
                  popup_b5395e5242b6449cbeac4dda9f44d1cf.setContent(html_795bec69bfa04450b9a0d6f64b7f9a95);


              marker_ee285e9734d04fe7a99cb9ea56c66459.bindPopup(popup_b5395e5242b6449cbeac4dda9f44d1cf);





              var marker_a1ac425098874e97aeebd591a26a902c = L.marker(
                  [43.04634963,-76.13655827],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_fe0186cd9b824374b66fb4cc1b678ddf = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_a1ac425098874e97aeebd591a26a902c.setIcon(icon_fe0186cd9b824374b66fb4cc1b678ddf);


              var popup_2c0420a2cc4247b89ebd25aac899fba1 = L.popup({maxWidth: '300'});


                  var html_d18e0d7b2a0b40beac5878102594628d = $('<div id="html_d18e0d7b2a0b40beac5878102594628d" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>10</th></tr><tr><td>Trip # </td><td align="right">1481</td></tr><tr><td>Distance </td><td align="right">79 miles</td><tr><td>Date</td><td align="right">2017-09-07 07:40:17.380774</td></tr></table></div>')[0];
                  popup_2c0420a2cc4247b89ebd25aac899fba1.setContent(html_d18e0d7b2a0b40beac5878102594628d);


              marker_a1ac425098874e97aeebd591a26a902c.bindPopup(popup_2c0420a2cc4247b89ebd25aac899fba1);





              var marker_3af90e204fb247ccb8a474673a95b0db = L.marker(
                  [43.97278763,-75.92013833],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_4b97040691864303a543a23893159479 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_3af90e204fb247ccb8a474673a95b0db.setIcon(icon_4b97040691864303a543a23893159479);


              var popup_7b1c626f698c4a279b285dd2a4b3dedb = L.popup({maxWidth: '300'});


                  var html_319663d775f346df8f6481366cdd3f58 = $('<div id="html_319663d775f346df8f6481366cdd3f58" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>21</th></tr><tr><td>Trip # </td><td align="right">1556</td></tr><tr><td>Distance </td><td align="right">68 miles</td><tr><td>Date</td><td align="right">2017-09-09 11:01:00.953486</td></tr></table></div>')[0];
                  popup_7b1c626f698c4a279b285dd2a4b3dedb.setContent(html_319663d775f346df8f6481366cdd3f58);


              marker_3af90e204fb247ccb8a474673a95b0db.bindPopup(popup_7b1c626f698c4a279b285dd2a4b3dedb);





              var marker_3e3ddf094b084d21acd8f7143480e5c2 = L.marker(
                  [42.96466453,-76.14052721],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_39e84befe57a4951a3429a8472752463 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_3e3ddf094b084d21acd8f7143480e5c2.setIcon(icon_39e84befe57a4951a3429a8472752463);


              var popup_0e72870c769445ec82903e0b9e5d163d = L.popup({maxWidth: '300'});


                  var html_08f9adfb5cf1429ba6dce77c9bcc7874 = $('<div id="html_08f9adfb5cf1429ba6dce77c9bcc7874" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>21</th></tr><tr><td>Trip # </td><td align="right">1556</td></tr><tr><td>Distance </td><td align="right">68 miles</td><tr><td>Date</td><td align="right">2017-09-09 11:01:00.953486</td></tr></table></div>')[0];
                  popup_0e72870c769445ec82903e0b9e5d163d.setContent(html_08f9adfb5cf1429ba6dce77c9bcc7874);


              marker_3e3ddf094b084d21acd8f7143480e5c2.bindPopup(popup_0e72870c769445ec82903e0b9e5d163d);





              var marker_bf699cb57a0244169d293ac807286b06 = L.marker(
                  [44.30294602,-75.38331067],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_fd067f81c4ea4aba940781cdb1e2ec0d = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_bf699cb57a0244169d293ac807286b06.setIcon(icon_fd067f81c4ea4aba940781cdb1e2ec0d);


              var popup_444fe4a5c9394016a201123c0c8aeaf7 = L.popup({maxWidth: '300'});


                  var html_7cba8e2da07d4562955b87827f05d894 = $('<div id="html_7cba8e2da07d4562955b87827f05d894" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>91</th></tr><tr><td>Trip # </td><td align="right">2192</td></tr><tr><td>Distance </td><td align="right">87 miles</td><tr><td>Date</td><td align="right">2017-09-28 10:14:19.457139</td></tr></table></div>')[0];
                  popup_444fe4a5c9394016a201123c0c8aeaf7.setContent(html_7cba8e2da07d4562955b87827f05d894);


              marker_bf699cb57a0244169d293ac807286b06.bindPopup(popup_444fe4a5c9394016a201123c0c8aeaf7);





              var marker_92ebc06bb3f549318ac2131dbc757805 = L.marker(
                  [43.08912227,-76.05490143],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_fe6168ce6b5241ac8134550a452605aa = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_92ebc06bb3f549318ac2131dbc757805.setIcon(icon_fe6168ce6b5241ac8134550a452605aa);


              var popup_64fa0b920b8b4bf3899e9b71453f4ab5 = L.popup({maxWidth: '300'});


                  var html_8201995b51ea4a58b771ed9f798b1e86 = $('<div id="html_8201995b51ea4a58b771ed9f798b1e86" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>91</th></tr><tr><td>Trip # </td><td align="right">2192</td></tr><tr><td>Distance </td><td align="right">87 miles</td><tr><td>Date</td><td align="right">2017-09-28 10:14:19.457139</td></tr></table></div>')[0];
                  popup_64fa0b920b8b4bf3899e9b71453f4ab5.setContent(html_8201995b51ea4a58b771ed9f798b1e86);


              marker_92ebc06bb3f549318ac2131dbc757805.bindPopup(popup_64fa0b920b8b4bf3899e9b71453f4ab5);





              var marker_3a799f57f6414b7d833b487d0fbfd26c = L.marker(
                  [43.71653054,-75.9414068],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_410ecbac1cda48e4a68fa76444521224 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_3a799f57f6414b7d833b487d0fbfd26c.setIcon(icon_410ecbac1cda48e4a68fa76444521224);


              var popup_00b29f943cba4952a1860a02abdbcc35 = L.popup({maxWidth: '300'});


                  var html_9016a349fc764be5b0cead48035322b5 = $('<div id="html_9016a349fc764be5b0cead48035322b5" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>73</th></tr><tr><td>Trip # </td><td align="right">2204</td></tr><tr><td>Distance </td><td align="right">60 miles</td><tr><td>Date</td><td align="right">2017-09-28 12:07:10.383151</td></tr></table></div>')[0];
                  popup_00b29f943cba4952a1860a02abdbcc35.setContent(html_9016a349fc764be5b0cead48035322b5);


              marker_3a799f57f6414b7d833b487d0fbfd26c.bindPopup(popup_00b29f943cba4952a1860a02abdbcc35);





              var marker_73b4246fad1649ec9181cfb61b31f6c9 = L.marker(
                  [42.93364624,-76.55681102],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_c0cfcbf1d9d54f1c836edb4289170cd4 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_73b4246fad1649ec9181cfb61b31f6c9.setIcon(icon_c0cfcbf1d9d54f1c836edb4289170cd4);


              var popup_e5fb4f458cb64050b5fa0af59d512ef3 = L.popup({maxWidth: '300'});


                  var html_d46588399e824034b91e4e121e957b38 = $('<div id="html_d46588399e824034b91e4e121e957b38" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>73</th></tr><tr><td>Trip # </td><td align="right">2204</td></tr><tr><td>Distance </td><td align="right">60 miles</td><tr><td>Date</td><td align="right">2017-09-28 12:07:10.383151</td></tr></table></div>')[0];
                  popup_e5fb4f458cb64050b5fa0af59d512ef3.setContent(html_d46588399e824034b91e4e121e957b38);


              marker_73b4246fad1649ec9181cfb61b31f6c9.bindPopup(popup_e5fb4f458cb64050b5fa0af59d512ef3);





              var marker_4f893da229504845bdff7acf022a4196 = L.marker(
                  [44.68637831,-75.49302611],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_fa88a217a99947ffb1b60f27cfaa98e6 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_4f893da229504845bdff7acf022a4196.setIcon(icon_fa88a217a99947ffb1b60f27cfaa98e6);


              var popup_b3f42cd060eb4c5ea9a21125afe3b6a4 = L.popup({maxWidth: '300'});


                  var html_295126f7aa1d497fb59b1f4efa49583e = $('<div id="html_295126f7aa1d497fb59b1f4efa49583e" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>49</th></tr><tr><td>Trip # </td><td align="right">2485</td></tr><tr><td>Distance </td><td align="right">52 miles</td><tr><td>Date</td><td align="right">2017-10-05 10:53:47.460613</td></tr></table></div>')[0];
                  popup_b3f42cd060eb4c5ea9a21125afe3b6a4.setContent(html_295126f7aa1d497fb59b1f4efa49583e);


              marker_4f893da229504845bdff7acf022a4196.bindPopup(popup_b3f42cd060eb4c5ea9a21125afe3b6a4);





              var marker_dfd3661ed63842d190e1ca46e84a75bb = L.marker(
                  [43.969148499999996,-75.91140457],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_375327c30cdf4b98929b76074f92e140 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_dfd3661ed63842d190e1ca46e84a75bb.setIcon(icon_375327c30cdf4b98929b76074f92e140);


              var popup_b86c4a19eed448a88e0633f145476892 = L.popup({maxWidth: '300'});


                  var html_26c50d88a62a4ce28b3448cf7cdcdc05 = $('<div id="html_26c50d88a62a4ce28b3448cf7cdcdc05" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>49</th></tr><tr><td>Trip # </td><td align="right">2485</td></tr><tr><td>Distance </td><td align="right">52 miles</td><tr><td>Date</td><td align="right">2017-10-05 10:53:47.460613</td></tr></table></div>')[0];
                  popup_b86c4a19eed448a88e0633f145476892.setContent(html_26c50d88a62a4ce28b3448cf7cdcdc05);


              marker_dfd3661ed63842d190e1ca46e84a75bb.bindPopup(popup_b86c4a19eed448a88e0633f145476892);





              var marker_3a3aff69b65e47edaafb2e465ffede03 = L.marker(
                  [44.22946648,-76.07911312],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_fb3fbb83eb554cfcb0fc799d0b8f11de = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_3a3aff69b65e47edaafb2e465ffede03.setIcon(icon_fb3fbb83eb554cfcb0fc799d0b8f11de);


              var popup_8c790a7d0f2f4da7a55c99f1daec6ff3 = L.popup({maxWidth: '300'});


                  var html_9a687e699fe24f879dbccb2de46c93aa = $('<div id="html_9a687e699fe24f879dbccb2de46c93aa" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>10</th></tr><tr><td>Trip # </td><td align="right">2654</td></tr><tr><td>Distance </td><td align="right">79 miles</td><tr><td>Date</td><td align="right">2017-10-10 12:40:16.47727</td></tr></table></div>')[0];
                  popup_8c790a7d0f2f4da7a55c99f1daec6ff3.setContent(html_9a687e699fe24f879dbccb2de46c93aa);


              marker_3a3aff69b65e47edaafb2e465ffede03.bindPopup(popup_8c790a7d0f2f4da7a55c99f1daec6ff3);





              var marker_0886475a650b4ac5bac89d5ef2660335 = L.marker(
                  [43.04246915,-76.14130116],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_79ed64b056104b0db7d4838c72b78bc0 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_0886475a650b4ac5bac89d5ef2660335.setIcon(icon_79ed64b056104b0db7d4838c72b78bc0);


              var popup_0891afb1fdc64e90a15cd155675740ef = L.popup({maxWidth: '300'});


                  var html_fced5438c19344e8bff580967f31e7b3 = $('<div id="html_fced5438c19344e8bff580967f31e7b3" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>10</th></tr><tr><td>Trip # </td><td align="right">2654</td></tr><tr><td>Distance </td><td align="right">79 miles</td><tr><td>Date</td><td align="right">2017-10-10 12:40:16.47727</td></tr></table></div>')[0];
                  popup_0891afb1fdc64e90a15cd155675740ef.setContent(html_fced5438c19344e8bff580967f31e7b3);


              marker_0886475a650b4ac5bac89d5ef2660335.bindPopup(popup_0891afb1fdc64e90a15cd155675740ef);





              var marker_1bf41eb603a74415bbf205d476bf943a = L.marker(
                  [43.99131508,-75.9036504],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_869e96a5a72641818615c0ad98864ef0 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_1bf41eb603a74415bbf205d476bf943a.setIcon(icon_869e96a5a72641818615c0ad98864ef0);


              var popup_4bd7e135653a422ea59ce12b9f7e28ab = L.popup({maxWidth: '300'});


                  var html_7058d0d9ec17402eb77abc9ef09d086a = $('<div id="html_7058d0d9ec17402eb77abc9ef09d086a" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>70</th></tr><tr><td>Trip # </td><td align="right">2656</td></tr><tr><td>Distance </td><td align="right">64 miles</td><tr><td>Date</td><td align="right">2017-10-10 12:53:17.934136</td></tr></table></div>')[0];
                  popup_4bd7e135653a422ea59ce12b9f7e28ab.setContent(html_7058d0d9ec17402eb77abc9ef09d086a);


              marker_1bf41eb603a74415bbf205d476bf943a.bindPopup(popup_4bd7e135653a422ea59ce12b9f7e28ab);





              var marker_b61f20f2063d4088b2beb93e1f473739 = L.marker(
                  [43.04364651,-76.09493601],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_d13d8433d77a4d279583dda6ac3e8946 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_b61f20f2063d4088b2beb93e1f473739.setIcon(icon_d13d8433d77a4d279583dda6ac3e8946);


              var popup_ffd9ff38394f4141afa9c749e1a2933c = L.popup({maxWidth: '300'});


                  var html_0d2b802cdc00414482f6e97a1a37c610 = $('<div id="html_0d2b802cdc00414482f6e97a1a37c610" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>70</th></tr><tr><td>Trip # </td><td align="right">2656</td></tr><tr><td>Distance </td><td align="right">64 miles</td><tr><td>Date</td><td align="right">2017-10-10 12:53:17.934136</td></tr></table></div>')[0];
                  popup_ffd9ff38394f4141afa9c749e1a2933c.setContent(html_0d2b802cdc00414482f6e97a1a37c610);


              marker_b61f20f2063d4088b2beb93e1f473739.bindPopup(popup_ffd9ff38394f4141afa9c749e1a2933c);





              var marker_0a5506796c154db899b8973027c2fcdb = L.marker(
                  [43.95211501,-75.63167208],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_ccf368c3c5224c6e858d1610efce88ce = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_0a5506796c154db899b8973027c2fcdb.setIcon(icon_ccf368c3c5224c6e858d1610efce88ce);


              var popup_055dd9d30801404db896e44a1836a7c5 = L.popup({maxWidth: '300'});


                  var html_77811bb22290406aa5f0440ce1bd3045 = $('<div id="html_77811bb22290406aa5f0440ce1bd3045" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>75</th></tr><tr><td>Trip # </td><td align="right">2788</td></tr><tr><td>Distance </td><td align="right">64 miles</td><tr><td>Date</td><td align="right">2017-10-12 16:29:53.304016</td></tr></table></div>')[0];
                  popup_055dd9d30801404db896e44a1836a7c5.setContent(html_77811bb22290406aa5f0440ce1bd3045);


              marker_0a5506796c154db899b8973027c2fcdb.bindPopup(popup_055dd9d30801404db896e44a1836a7c5);





              var marker_e9f9650f76f0494195c0c28b27fdddb8 = L.marker(
                  [43.06130408,-76.11029935],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_6ec565cc828b4555bc58eadf129241ea = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_e9f9650f76f0494195c0c28b27fdddb8.setIcon(icon_6ec565cc828b4555bc58eadf129241ea);


              var popup_96fc955e14b840da94a3dec0a10100c4 = L.popup({maxWidth: '300'});


                  var html_377696fe86224d7d9fd93e5cfab42993 = $('<div id="html_377696fe86224d7d9fd93e5cfab42993" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>75</th></tr><tr><td>Trip # </td><td align="right">2788</td></tr><tr><td>Distance </td><td align="right">64 miles</td><tr><td>Date</td><td align="right">2017-10-12 16:29:53.304016</td></tr></table></div>')[0];
                  popup_96fc955e14b840da94a3dec0a10100c4.setContent(html_377696fe86224d7d9fd93e5cfab42993);


              marker_e9f9650f76f0494195c0c28b27fdddb8.bindPopup(popup_96fc955e14b840da94a3dec0a10100c4);





              var marker_de6cb05fcaac4cc6a075b1076de54f16 = L.marker(
                  [44.03324395260861,-75.93756428050979],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_813aaea3452f4ae4a38d7b966add42b1 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_de6cb05fcaac4cc6a075b1076de54f16.setIcon(icon_813aaea3452f4ae4a38d7b966add42b1);


              var popup_7b700ea625b24df1ad51c34c90eab131 = L.popup({maxWidth: '300'});


                  var html_34f1dd3024e64c2b9deea4c41b8c58ba = $('<div id="html_34f1dd3024e64c2b9deea4c41b8c58ba" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>21</th></tr><tr><td>Trip # </td><td align="right">3070</td></tr><tr><td>Distance </td><td align="right">67 miles</td><tr><td>Date</td><td align="right">2017-10-19 11:10:47.892759</td></tr></table></div>')[0];
                  popup_7b700ea625b24df1ad51c34c90eab131.setContent(html_34f1dd3024e64c2b9deea4c41b8c58ba);


              marker_de6cb05fcaac4cc6a075b1076de54f16.bindPopup(popup_7b700ea625b24df1ad51c34c90eab131);





              var marker_488eba7833164325a00c41227d96e3f3 = L.marker(
                  [43.0447256690915,-76.1443694080783],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_3f15d4404f694351b3a53a2f6fecbced = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_488eba7833164325a00c41227d96e3f3.setIcon(icon_3f15d4404f694351b3a53a2f6fecbced);


              var popup_33c15f9b947746cf952d1068262dd99c = L.popup({maxWidth: '300'});


                  var html_d503329da83e4b5eabf4a946f7350337 = $('<div id="html_d503329da83e4b5eabf4a946f7350337" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>21</th></tr><tr><td>Trip # </td><td align="right">3070</td></tr><tr><td>Distance </td><td align="right">67 miles</td><tr><td>Date</td><td align="right">2017-10-19 11:10:47.892759</td></tr></table></div>')[0];
                  popup_33c15f9b947746cf952d1068262dd99c.setContent(html_d503329da83e4b5eabf4a946f7350337);


              marker_488eba7833164325a00c41227d96e3f3.bindPopup(popup_33c15f9b947746cf952d1068262dd99c);





              var marker_312436c577ef4706b474a81d35859087 = L.marker(
                  [44.84121557,-74.68517424],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_b47c7caa43b54c299feb556a17dbae35 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_312436c577ef4706b474a81d35859087.setIcon(icon_b47c7caa43b54c299feb556a17dbae35);


              var popup_12da7c027f1c40fa8f10eb4da03e68aa = L.popup({maxWidth: '300'});


                  var html_f7f784ec3060484c947a78845fa4ac4d = $('<div id="html_f7f784ec3060484c947a78845fa4ac4d" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">3123</td></tr><tr><td>Distance </td><td align="right">76 miles</td><tr><td>Date</td><td align="right">2017-10-20 10:53:12.252875</td></tr></table></div>')[0];
                  popup_12da7c027f1c40fa8f10eb4da03e68aa.setContent(html_f7f784ec3060484c947a78845fa4ac4d);


              marker_312436c577ef4706b474a81d35859087.bindPopup(popup_12da7c027f1c40fa8f10eb4da03e68aa);





              var marker_5a73f1bfa5c643ab82af4f6bb5b5504a = L.marker(
                  [44.01548578,-75.76861226],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_9016a9b876e047a9baebb67650de8ded = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_5a73f1bfa5c643ab82af4f6bb5b5504a.setIcon(icon_9016a9b876e047a9baebb67650de8ded);


              var popup_2e916ece4f274a8c95906e84a9d79cd0 = L.popup({maxWidth: '300'});


                  var html_17be8485774e4fbd99017a65554eb88b = $('<div id="html_17be8485774e4fbd99017a65554eb88b" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">3123</td></tr><tr><td>Distance </td><td align="right">76 miles</td><tr><td>Date</td><td align="right">2017-10-20 10:53:12.252875</td></tr></table></div>')[0];
                  popup_2e916ece4f274a8c95906e84a9d79cd0.setContent(html_17be8485774e4fbd99017a65554eb88b);


              marker_5a73f1bfa5c643ab82af4f6bb5b5504a.bindPopup(popup_2e916ece4f274a8c95906e84a9d79cd0);





              var marker_94c383253a3f47e5a1082b858337dc65 = L.marker(
                  [44.62499437,-75.09537509],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_da8f7a728b794423aa947a744dbb834d = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_94c383253a3f47e5a1082b858337dc65.setIcon(icon_da8f7a728b794423aa947a744dbb834d);


              var popup_95ea231ae5904774b025b1bb961afed7 = L.popup({maxWidth: '300'});


                  var html_5b34b380e5c34e539948528db6245679 = $('<div id="html_5b34b380e5c34e539948528db6245679" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">3165</td></tr><tr><td>Distance </td><td align="right">57 miles</td><tr><td>Date</td><td align="right">2017-10-20 19:03:41.382477</td></tr></table></div>')[0];
                  popup_95ea231ae5904774b025b1bb961afed7.setContent(html_5b34b380e5c34e539948528db6245679);


              marker_94c383253a3f47e5a1082b858337dc65.bindPopup(popup_95ea231ae5904774b025b1bb961afed7);





              var marker_3502b5682d124bb7b4e7b73394330f6d = L.marker(
                  [44.021227292446,-75.9296869845412],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_d9df275b639f4a3c8e704c2ec798740d = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_3502b5682d124bb7b4e7b73394330f6d.setIcon(icon_d9df275b639f4a3c8e704c2ec798740d);


              var popup_8b82c3d7f6634be5ac2586a6cf859392 = L.popup({maxWidth: '300'});


                  var html_68b9cf7e9ed14c7e8ff25cf7c8d88309 = $('<div id="html_68b9cf7e9ed14c7e8ff25cf7c8d88309" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">3165</td></tr><tr><td>Distance </td><td align="right">57 miles</td><tr><td>Date</td><td align="right">2017-10-20 19:03:41.382477</td></tr></table></div>')[0];
                  popup_8b82c3d7f6634be5ac2586a6cf859392.setContent(html_68b9cf7e9ed14c7e8ff25cf7c8d88309);


              marker_3502b5682d124bb7b4e7b73394330f6d.bindPopup(popup_8b82c3d7f6634be5ac2586a6cf859392);





              var marker_ca19490edab946118bbf3e9f9e77c7f1 = L.marker(
                  [44.09667765,-76.19187376],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_c9950c8577b04597ae4dc9ddf2a657de = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_ca19490edab946118bbf3e9f9e77c7f1.setIcon(icon_c9950c8577b04597ae4dc9ddf2a657de);


              var popup_9e190c1ee74747fdb24dc683bea2c398 = L.popup({maxWidth: '300'});


                  var html_48b37b69a9a04b13942f53b4ef22b05e = $('<div id="html_48b37b69a9a04b13942f53b4ef22b05e" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>135</th></tr><tr><td>Trip # </td><td align="right">3189</td></tr><tr><td>Distance </td><td align="right">67 miles</td><tr><td>Date</td><td align="right">2017-10-22 10:07:02.015952</td></tr></table></div>')[0];
                  popup_9e190c1ee74747fdb24dc683bea2c398.setContent(html_48b37b69a9a04b13942f53b4ef22b05e);


              marker_ca19490edab946118bbf3e9f9e77c7f1.bindPopup(popup_9e190c1ee74747fdb24dc683bea2c398);





              var marker_4b1015c3efcc4c62b4ef5b695e46a1da = L.marker(
                  [43.09003125,-76.18966301],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_52ad6f1eb36645768f7bb85669e902aa = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_4b1015c3efcc4c62b4ef5b695e46a1da.setIcon(icon_52ad6f1eb36645768f7bb85669e902aa);


              var popup_742282ecf9fe491f802f5166b68e468a = L.popup({maxWidth: '300'});


                  var html_876e0b55d924458f8090deb7fb03042d = $('<div id="html_876e0b55d924458f8090deb7fb03042d" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>135</th></tr><tr><td>Trip # </td><td align="right">3189</td></tr><tr><td>Distance </td><td align="right">67 miles</td><tr><td>Date</td><td align="right">2017-10-22 10:07:02.015952</td></tr></table></div>')[0];
                  popup_742282ecf9fe491f802f5166b68e468a.setContent(html_876e0b55d924458f8090deb7fb03042d);


              marker_4b1015c3efcc4c62b4ef5b695e46a1da.bindPopup(popup_742282ecf9fe491f802f5166b68e468a);





              var marker_2774350c3db4415eb39540fa4a978001 = L.marker(
                  [43.88786369,-75.51307681],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_e45a9e8a244e4aaeb5e4b2cad9dc2c35 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_2774350c3db4415eb39540fa4a978001.setIcon(icon_e45a9e8a244e4aaeb5e4b2cad9dc2c35);


              var popup_b045f055c8fe48508631ab669d57b597 = L.popup({maxWidth: '300'});


                  var html_b455780eaea546b989e24e2f2fb0b34a = $('<div id="html_b455780eaea546b989e24e2f2fb0b34a" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>87</th></tr><tr><td>Trip # </td><td align="right">3270</td></tr><tr><td>Distance </td><td align="right">62 miles</td><tr><td>Date</td><td align="right">2017-10-24 11:27:00.156469</td></tr></table></div>')[0];
                  popup_b045f055c8fe48508631ab669d57b597.setContent(html_b455780eaea546b989e24e2f2fb0b34a);


              marker_2774350c3db4415eb39540fa4a978001.bindPopup(popup_b045f055c8fe48508631ab669d57b597);





              var marker_7f2fef84861c43d59053b4b755a5b8e5 = L.marker(
                  [43.10136773,-76.18837322],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_41a5bf00485941d99b90d3ac24bee288 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_7f2fef84861c43d59053b4b755a5b8e5.setIcon(icon_41a5bf00485941d99b90d3ac24bee288);


              var popup_7d271d87524d4e97ba5495088e9f7c63 = L.popup({maxWidth: '300'});


                  var html_7b824dbd2a254398a3d35398237f5ef3 = $('<div id="html_7b824dbd2a254398a3d35398237f5ef3" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>87</th></tr><tr><td>Trip # </td><td align="right">3270</td></tr><tr><td>Distance </td><td align="right">62 miles</td><tr><td>Date</td><td align="right">2017-10-24 11:27:00.156469</td></tr></table></div>')[0];
                  popup_7d271d87524d4e97ba5495088e9f7c63.setContent(html_7b824dbd2a254398a3d35398237f5ef3);


              marker_7f2fef84861c43d59053b4b755a5b8e5.bindPopup(popup_7d271d87524d4e97ba5495088e9f7c63);





              var marker_be34d6b193c746628641390c09f54780 = L.marker(
                  [43.28381234,-75.47093419],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_ddab137a52734e7b97a984bfe5728709 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_be34d6b193c746628641390c09f54780.setIcon(icon_ddab137a52734e7b97a984bfe5728709);


              var popup_70d72af2af554178b763f567534a9a7f = L.popup({maxWidth: '300'});


                  var html_1d200ce802974e4fb435a6e44aa8369d = $('<div id="html_1d200ce802974e4fb435a6e44aa8369d" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>32</th></tr><tr><td>Trip # </td><td align="right">3783</td></tr><tr><td>Distance </td><td align="right">59 miles</td><tr><td>Date</td><td align="right">2017-11-01 18:28:29.063196</td></tr></table></div>')[0];
                  popup_70d72af2af554178b763f567534a9a7f.setContent(html_1d200ce802974e4fb435a6e44aa8369d);


              marker_be34d6b193c746628641390c09f54780.bindPopup(popup_70d72af2af554178b763f567534a9a7f);





              var marker_aaba056444e9445f9be6d7664ba73858 = L.marker(
                  [44.16177469,-75.33235451],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_d1bfa392f1af499190acfc0a23875734 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_aaba056444e9445f9be6d7664ba73858.setIcon(icon_d1bfa392f1af499190acfc0a23875734);


              var popup_07ff90d6d57b482f8221851f4987a559 = L.popup({maxWidth: '300'});


                  var html_9b62f8d13774414ea9af14587b5d9b46 = $('<div id="html_9b62f8d13774414ea9af14587b5d9b46" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>32</th></tr><tr><td>Trip # </td><td align="right">3783</td></tr><tr><td>Distance </td><td align="right">59 miles</td><tr><td>Date</td><td align="right">2017-11-01 18:28:29.063196</td></tr></table></div>')[0];
                  popup_07ff90d6d57b482f8221851f4987a559.setContent(html_9b62f8d13774414ea9af14587b5d9b46);


              marker_aaba056444e9445f9be6d7664ba73858.bindPopup(popup_07ff90d6d57b482f8221851f4987a559);





              var marker_eed9c67b787046d5be4b1821392c250f = L.marker(
                  [44.68625356,-75.49316105],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_53ed077573cd462a849ded0411e23e35 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_eed9c67b787046d5be4b1821392c250f.setIcon(icon_53ed077573cd462a849ded0411e23e35);


              var popup_1d47490f7e344124bcc193b6ed526949 = L.popup({maxWidth: '300'});


                  var html_242ea4a20904415cbd9a172ceca92c2d = $('<div id="html_242ea4a20904415cbd9a172ceca92c2d" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>49</th></tr><tr><td>Trip # </td><td align="right">3812</td></tr><tr><td>Distance </td><td align="right">52 miles</td><tr><td>Date</td><td align="right">2017-11-02 12:08:05.516633</td></tr></table></div>')[0];
                  popup_1d47490f7e344124bcc193b6ed526949.setContent(html_242ea4a20904415cbd9a172ceca92c2d);


              marker_eed9c67b787046d5be4b1821392c250f.bindPopup(popup_1d47490f7e344124bcc193b6ed526949);





              var marker_dabc426a61c743e0ae10405105a08ad7 = L.marker(
                  [43.96905944,-75.91134237],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_f22e16e8b1674c708007e184fc3cab23 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_dabc426a61c743e0ae10405105a08ad7.setIcon(icon_f22e16e8b1674c708007e184fc3cab23);


              var popup_e122801ac5874f1bb387d769599d5b6d = L.popup({maxWidth: '300'});


                  var html_211dbef3702f43a6bc1b94f45231ffde = $('<div id="html_211dbef3702f43a6bc1b94f45231ffde" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>49</th></tr><tr><td>Trip # </td><td align="right">3812</td></tr><tr><td>Distance </td><td align="right">52 miles</td><tr><td>Date</td><td align="right">2017-11-02 12:08:05.516633</td></tr></table></div>')[0];
                  popup_e122801ac5874f1bb387d769599d5b6d.setContent(html_211dbef3702f43a6bc1b94f45231ffde);


              marker_dabc426a61c743e0ae10405105a08ad7.bindPopup(popup_e122801ac5874f1bb387d769599d5b6d);





              var marker_006ac8db72424549af4e3304d60af690 = L.marker(
                  [43.9913472,-75.90362939],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_65f5ebcbe2fe4edbb3186e7ed011d472 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_006ac8db72424549af4e3304d60af690.setIcon(icon_65f5ebcbe2fe4edbb3186e7ed011d472);


              var popup_6aa37c1884084d9cbc43d28470782f68 = L.popup({maxWidth: '300'});


                  var html_0a2709bddafc4bf198c245c9236d9fe4 = $('<div id="html_0a2709bddafc4bf198c245c9236d9fe4" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>70</th></tr><tr><td>Trip # </td><td align="right">3887</td></tr><tr><td>Distance </td><td align="right">51 miles</td><tr><td>Date</td><td align="right">2017-11-03 13:03:51.883953</td></tr></table></div>')[0];
                  popup_6aa37c1884084d9cbc43d28470782f68.setContent(html_0a2709bddafc4bf198c245c9236d9fe4);


              marker_006ac8db72424549af4e3304d60af690.bindPopup(popup_6aa37c1884084d9cbc43d28470782f68);





              var marker_c23399a6b05046e1ae954a09eb6d4331 = L.marker(
                  [44.69085165,-75.49927069],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_5331be2ac7524d6cb0dc7590d6cf3bc8 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_c23399a6b05046e1ae954a09eb6d4331.setIcon(icon_5331be2ac7524d6cb0dc7590d6cf3bc8);


              var popup_9f5e39b1c7ca4c6f92f1ddde18820806 = L.popup({maxWidth: '300'});


                  var html_8ea9878e2ac94431a5d0bd3ce301058f = $('<div id="html_8ea9878e2ac94431a5d0bd3ce301058f" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>70</th></tr><tr><td>Trip # </td><td align="right">3887</td></tr><tr><td>Distance </td><td align="right">51 miles</td><tr><td>Date</td><td align="right">2017-11-03 13:03:51.883953</td></tr></table></div>')[0];
                  popup_9f5e39b1c7ca4c6f92f1ddde18820806.setContent(html_8ea9878e2ac94431a5d0bd3ce301058f);


              marker_c23399a6b05046e1ae954a09eb6d4331.bindPopup(popup_9f5e39b1c7ca4c6f92f1ddde18820806);





              var marker_5641b52fb4ca45c480c860797b7843cc = L.marker(
                  [43.1219697916936,-77.61801014018559],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_4235a86fbfad45fdb7af73770483a591 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_5641b52fb4ca45c480c860797b7843cc.setIcon(icon_4235a86fbfad45fdb7af73770483a591);


              var popup_a78e1867c6964aaa848292264c3dcca8 = L.popup({maxWidth: '300'});


                  var html_4fd76b71fce94974943b473f90876894 = $('<div id="html_4fd76b71fce94974943b473f90876894" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>25</th></tr><tr><td>Trip # </td><td align="right">4003</td></tr><tr><td>Distance </td><td align="right">100 miles</td><tr><td>Date</td><td align="right">2017-11-06 15:25:38.517488</td></tr></table></div>')[0];
                  popup_a78e1867c6964aaa848292264c3dcca8.setContent(html_4fd76b71fce94974943b473f90876894);


              marker_5641b52fb4ca45c480c860797b7843cc.bindPopup(popup_a78e1867c6964aaa848292264c3dcca8);





              var marker_bde5b03e47c84d37ad9ca8461ac97f08 = L.marker(
                  [43.966123762586605,-75.91604696450491],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_d0955976fb024f5db8babe550d045970 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_bde5b03e47c84d37ad9ca8461ac97f08.setIcon(icon_d0955976fb024f5db8babe550d045970);


              var popup_2a40d0e8d908487793c599d6a3e854ed = L.popup({maxWidth: '300'});


                  var html_58b6efb8d33749aabb7842cdec52fbff = $('<div id="html_58b6efb8d33749aabb7842cdec52fbff" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>25</th></tr><tr><td>Trip # </td><td align="right">4003</td></tr><tr><td>Distance </td><td align="right">100 miles</td><tr><td>Date</td><td align="right">2017-11-06 15:25:38.517488</td></tr></table></div>')[0];
                  popup_2a40d0e8d908487793c599d6a3e854ed.setContent(html_58b6efb8d33749aabb7842cdec52fbff);


              marker_bde5b03e47c84d37ad9ca8461ac97f08.bindPopup(popup_2a40d0e8d908487793c599d6a3e854ed);





              var marker_bdfa2adcddff428098a6f8f52369e860 = L.marker(
                  [43.9798125046735,-75.9075119757729],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_fdc14a84ea734f8c84d45138361ca595 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_bdfa2adcddff428098a6f8f52369e860.setIcon(icon_fdc14a84ea734f8c84d45138361ca595);


              var popup_abaf332d213648a3a5de265641bc69ea = L.popup({maxWidth: '300'});


                  var html_5090b9764bb944c98e5f9188d6b5bb94 = $('<div id="html_5090b9764bb944c98e5f9188d6b5bb94" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">4049</td></tr><tr><td>Distance </td><td align="right">63 miles</td><tr><td>Date</td><td align="right">2017-11-07 11:44:13.622007</td></tr></table></div>')[0];
                  popup_abaf332d213648a3a5de265641bc69ea.setContent(html_5090b9764bb944c98e5f9188d6b5bb94);


              marker_bdfa2adcddff428098a6f8f52369e860.bindPopup(popup_abaf332d213648a3a5de265641bc69ea);





              var marker_c5dfa06c437f4d65ac2a4a512fd42fa5 = L.marker(
                  [43.052853621797,-76.1610981155413],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_d538bd9708044fdcb4692d49aa0530b5 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_c5dfa06c437f4d65ac2a4a512fd42fa5.setIcon(icon_d538bd9708044fdcb4692d49aa0530b5);


              var popup_eaef3fa1a93b40039aba1c11fc170cf9 = L.popup({maxWidth: '300'});


                  var html_19b2b914912d412cb26d6b56402aa1c8 = $('<div id="html_19b2b914912d412cb26d6b56402aa1c8" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">4049</td></tr><tr><td>Distance </td><td align="right">63 miles</td><tr><td>Date</td><td align="right">2017-11-07 11:44:13.622007</td></tr></table></div>')[0];
                  popup_eaef3fa1a93b40039aba1c11fc170cf9.setContent(html_19b2b914912d412cb26d6b56402aa1c8);


              marker_c5dfa06c437f4d65ac2a4a512fd42fa5.bindPopup(popup_eaef3fa1a93b40039aba1c11fc170cf9);





              var marker_7cfdd6952ab642aba8849ada9782fddf = L.marker(
                  [43.966066299494,-75.9157820011887],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_11fade2d2a0748a7ade87671d853cd28 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_7cfdd6952ab642aba8849ada9782fddf.setIcon(icon_11fade2d2a0748a7ade87671d853cd28);


              var popup_70d8e87ef47545fbb779f19093c304b0 = L.popup({maxWidth: '300'});


                  var html_6e05937242e7422db8f905a9ed87436e = $('<div id="html_6e05937242e7422db8f905a9ed87436e" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>25</th></tr><tr><td>Trip # </td><td align="right">4383</td></tr><tr><td>Distance </td><td align="right">58 miles</td><tr><td>Date</td><td align="right">2017-11-13 10:26:07.84344</td></tr></table></div>')[0];
                  popup_70d8e87ef47545fbb779f19093c304b0.setContent(html_6e05937242e7422db8f905a9ed87436e);


              marker_7cfdd6952ab642aba8849ada9782fddf.bindPopup(popup_70d8e87ef47545fbb779f19093c304b0);





              var marker_9f36d498b8434fd4bbeadb89539ba867 = L.marker(
                  [43.101659344234506,-76.0564917176864],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_43d811154b98401a8ffcd8d889e8578d = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_9f36d498b8434fd4bbeadb89539ba867.setIcon(icon_43d811154b98401a8ffcd8d889e8578d);


              var popup_7ffeaf0aed0d4c9886458fb446c3e857 = L.popup({maxWidth: '300'});


                  var html_19996c6ae33b487898ef571b74fb50b4 = $('<div id="html_19996c6ae33b487898ef571b74fb50b4" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>25</th></tr><tr><td>Trip # </td><td align="right">4383</td></tr><tr><td>Distance </td><td align="right">58 miles</td><tr><td>Date</td><td align="right">2017-11-13 10:26:07.84344</td></tr></table></div>')[0];
                  popup_7ffeaf0aed0d4c9886458fb446c3e857.setContent(html_19996c6ae33b487898ef571b74fb50b4);


              marker_9f36d498b8434fd4bbeadb89539ba867.bindPopup(popup_7ffeaf0aed0d4c9886458fb446c3e857);





              var marker_526c111994d2406589dd87ac57fdf2c5 = L.marker(
                  [43.977921747531006,-75.9049419219867],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_b0d7a209c222460e851a662983766ddc = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_526c111994d2406589dd87ac57fdf2c5.setIcon(icon_b0d7a209c222460e851a662983766ddc);


              var popup_1f56e2ff27cc45f0af6fe69ac2dbb60e = L.popup({maxWidth: '300'});


                  var html_5398cbaf0add42ec9c32d692e41ba90a = $('<div id="html_5398cbaf0add42ec9c32d692e41ba90a" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>21</th></tr><tr><td>Trip # </td><td align="right">4411</td></tr><tr><td>Distance </td><td align="right">64 miles</td><tr><td>Date</td><td align="right">2017-11-13 14:48:57.9814</td></tr></table></div>')[0];
                  popup_1f56e2ff27cc45f0af6fe69ac2dbb60e.setContent(html_5398cbaf0add42ec9c32d692e41ba90a);


              marker_526c111994d2406589dd87ac57fdf2c5.bindPopup(popup_1f56e2ff27cc45f0af6fe69ac2dbb60e);





              var marker_de4e674bd7cb429d8f2faabc0c1bb4c0 = L.marker(
                  [43.04161054007871,-76.13804755913979],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_09fa097668614e6fa4c6f1268433b5fb = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_de4e674bd7cb429d8f2faabc0c1bb4c0.setIcon(icon_09fa097668614e6fa4c6f1268433b5fb);


              var popup_9336be24183647b58f1b3024c7fd96b4 = L.popup({maxWidth: '300'});


                  var html_f5012326bbad49a897090dc313bc22f9 = $('<div id="html_f5012326bbad49a897090dc313bc22f9" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>21</th></tr><tr><td>Trip # </td><td align="right">4411</td></tr><tr><td>Distance </td><td align="right">64 miles</td><tr><td>Date</td><td align="right">2017-11-13 14:48:57.9814</td></tr></table></div>')[0];
                  popup_9336be24183647b58f1b3024c7fd96b4.setContent(html_f5012326bbad49a897090dc313bc22f9);


              marker_de4e674bd7cb429d8f2faabc0c1bb4c0.bindPopup(popup_9336be24183647b58f1b3024c7fd96b4);





              var marker_67568703031c45828bd33976c54aefa2 = L.marker(
                  [43.0416452797668,-76.13814981155141],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_4e554d0223af4fc2886c0586044e1c34 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_67568703031c45828bd33976c54aefa2.setIcon(icon_4e554d0223af4fc2886c0586044e1c34);


              var popup_03238e887685400182e69efe366f0055 = L.popup({maxWidth: '300'});


                  var html_2d753c44a5e24e399d0e449eff00b014 = $('<div id="html_2d753c44a5e24e399d0e449eff00b014" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>21</th></tr><tr><td>Trip # </td><td align="right">4438</td></tr><tr><td>Distance </td><td align="right">64 miles</td><tr><td>Date</td><td align="right">2017-11-13 17:47:32.547333</td></tr></table></div>')[0];
                  popup_03238e887685400182e69efe366f0055.setContent(html_2d753c44a5e24e399d0e449eff00b014);


              marker_67568703031c45828bd33976c54aefa2.bindPopup(popup_03238e887685400182e69efe366f0055);





              var marker_ad4039008382492884dba3980b9510d2 = L.marker(
                  [43.980478495986006,-75.9063101285934],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_ba52fa58b65948f59944ce74490e8218 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_ad4039008382492884dba3980b9510d2.setIcon(icon_ba52fa58b65948f59944ce74490e8218);


              var popup_ccc59a562c414cec8d993849846b3784 = L.popup({maxWidth: '300'});


                  var html_231043b2e8dd42bf823da7be1fcb8df5 = $('<div id="html_231043b2e8dd42bf823da7be1fcb8df5" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>21</th></tr><tr><td>Trip # </td><td align="right">4438</td></tr><tr><td>Distance </td><td align="right">64 miles</td><tr><td>Date</td><td align="right">2017-11-13 17:47:32.547333</td></tr></table></div>')[0];
                  popup_ccc59a562c414cec8d993849846b3784.setContent(html_231043b2e8dd42bf823da7be1fcb8df5);


              marker_ad4039008382492884dba3980b9510d2.bindPopup(popup_ccc59a562c414cec8d993849846b3784);





              var marker_fb3a5245b975437fb0f6649909021b15 = L.marker(
                  [43.0430758102409,-76.1457480092909],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_d5130ead3aa24daa8540a6ea61018299 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_fb3a5245b975437fb0f6649909021b15.setIcon(icon_d5130ead3aa24daa8540a6ea61018299);


              var popup_3827e2e2db7948aca5dc2912127e2fb2 = L.popup({maxWidth: '300'});


                  var html_169135a444e4456e9135d54efd7fa4ea = $('<div id="html_169135a444e4456e9135d54efd7fa4ea" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>25</th></tr><tr><td>Trip # </td><td align="right">4495</td></tr><tr><td>Distance </td><td align="right">63 miles</td><tr><td>Date</td><td align="right">2017-11-14 15:21:31.05907</td></tr></table></div>')[0];
                  popup_3827e2e2db7948aca5dc2912127e2fb2.setContent(html_169135a444e4456e9135d54efd7fa4ea);


              marker_fb3a5245b975437fb0f6649909021b15.bindPopup(popup_3827e2e2db7948aca5dc2912127e2fb2);





              var marker_3d3c237c032546b899671c8f0ef47549 = L.marker(
                  [43.966040946731006,-75.9160284929442],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_b187223f50ef4971838f45f0a32804b0 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_3d3c237c032546b899671c8f0ef47549.setIcon(icon_b187223f50ef4971838f45f0a32804b0);


              var popup_9076f26e2a15423d9568c9ccbf5f7f34 = L.popup({maxWidth: '300'});


                  var html_555b8c7a4ceb43e5a9ec8222b3ce8798 = $('<div id="html_555b8c7a4ceb43e5a9ec8222b3ce8798" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>25</th></tr><tr><td>Trip # </td><td align="right">4495</td></tr><tr><td>Distance </td><td align="right">63 miles</td><tr><td>Date</td><td align="right">2017-11-14 15:21:31.05907</td></tr></table></div>')[0];
                  popup_9076f26e2a15423d9568c9ccbf5f7f34.setContent(html_555b8c7a4ceb43e5a9ec8222b3ce8798);


              marker_3d3c237c032546b899671c8f0ef47549.bindPopup(popup_9076f26e2a15423d9568c9ccbf5f7f34);





              var marker_1ca58ca4df2244b7b7f776a2a8d8c24d = L.marker(
                  [43.96608473060989,-75.91602602590321],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_e6a1313245ee4767b3817b86a1849880 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_1ca58ca4df2244b7b7f776a2a8d8c24d.setIcon(icon_e6a1313245ee4767b3817b86a1849880);


              var popup_0e07938cd7a24703b4995109f4bdbacb = L.popup({maxWidth: '300'});


                  var html_de8407ee3f2e4e9ab09759fb0961d88e = $('<div id="html_de8407ee3f2e4e9ab09759fb0961d88e" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>25</th></tr><tr><td>Trip # </td><td align="right">4654</td></tr><tr><td>Distance </td><td align="right">54 miles</td><tr><td>Date</td><td align="right">2017-11-16 11:25:27.533988</td></tr></table></div>')[0];
                  popup_0e07938cd7a24703b4995109f4bdbacb.setContent(html_de8407ee3f2e4e9ab09759fb0961d88e);


              marker_1ca58ca4df2244b7b7f776a2a8d8c24d.bindPopup(popup_0e07938cd7a24703b4995109f4bdbacb);





              var marker_24c445982d344a10a814d14519c2c824 = L.marker(
                  [43.1761073910221,-76.1131568126739],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_77fc3ba4de3847f7a3a4192a7049508f = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_24c445982d344a10a814d14519c2c824.setIcon(icon_77fc3ba4de3847f7a3a4192a7049508f);


              var popup_96c0be60e9f14ee39c34aa997912a9c5 = L.popup({maxWidth: '300'});


                  var html_df652d22646045b68c57cc61cfe358a9 = $('<div id="html_df652d22646045b68c57cc61cfe358a9" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>25</th></tr><tr><td>Trip # </td><td align="right">4654</td></tr><tr><td>Distance </td><td align="right">54 miles</td><tr><td>Date</td><td align="right">2017-11-16 11:25:27.533988</td></tr></table></div>')[0];
                  popup_96c0be60e9f14ee39c34aa997912a9c5.setContent(html_df652d22646045b68c57cc61cfe358a9);


              marker_24c445982d344a10a814d14519c2c824.bindPopup(popup_96c0be60e9f14ee39c34aa997912a9c5);





              var marker_b34d4d26d77742c0a81f41d0161c4f6f = L.marker(
                  [44.68090362,-74.96879704],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_2860a767fcfe42818f6a6c558bb49971 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_b34d4d26d77742c0a81f41d0161c4f6f.setIcon(icon_2860a767fcfe42818f6a6c558bb49971);


              var popup_a6341b0f369d41dc806325e9528fdf61 = L.popup({maxWidth: '300'});


                  var html_3b8264a7b4db4e338ba60171cedc2b34 = $('<div id="html_3b8264a7b4db4e338ba60171cedc2b34" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>100</th></tr><tr><td>Trip # </td><td align="right">4863</td></tr><tr><td>Distance </td><td align="right">66 miles</td><tr><td>Date</td><td align="right">2017-11-20 13:04:18.91681</td></tr></table></div>')[0];
                  popup_a6341b0f369d41dc806325e9528fdf61.setContent(html_3b8264a7b4db4e338ba60171cedc2b34);


              marker_b34d4d26d77742c0a81f41d0161c4f6f.bindPopup(popup_a6341b0f369d41dc806325e9528fdf61);





              var marker_b3265e37302e4ae1a9a6e4704775b2d8 = L.marker(
                  [43.97107408,-75.91203884],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_d3b90e7af5d84cd18aa20ed461e0f165 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_b3265e37302e4ae1a9a6e4704775b2d8.setIcon(icon_d3b90e7af5d84cd18aa20ed461e0f165);


              var popup_4bb8b205cbf041fcb169956082380b33 = L.popup({maxWidth: '300'});


                  var html_3edb62493043435b8a3ecc9f53e8e623 = $('<div id="html_3edb62493043435b8a3ecc9f53e8e623" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>100</th></tr><tr><td>Trip # </td><td align="right">4863</td></tr><tr><td>Distance </td><td align="right">66 miles</td><tr><td>Date</td><td align="right">2017-11-20 13:04:18.91681</td></tr></table></div>')[0];
                  popup_4bb8b205cbf041fcb169956082380b33.setContent(html_3edb62493043435b8a3ecc9f53e8e623);


              marker_b3265e37302e4ae1a9a6e4704775b2d8.bindPopup(popup_4bb8b205cbf041fcb169956082380b33);





              var marker_92e4f9ef60f34af3bb85b4920ff3ce79 = L.marker(
                  [44.68598995,-75.49305807],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_251a426946e041ec8c58db96823a47ba = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_92e4f9ef60f34af3bb85b4920ff3ce79.setIcon(icon_251a426946e041ec8c58db96823a47ba);


              var popup_6e6fc482164e4c2494a43695df9872e5 = L.popup({maxWidth: '300'});


                  var html_f3687760290d4c9996a39f0f9db79c0e = $('<div id="html_f3687760290d4c9996a39f0f9db79c0e" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>49</th></tr><tr><td>Trip # </td><td align="right">4865</td></tr><tr><td>Distance </td><td align="right">52 miles</td><tr><td>Date</td><td align="right">2017-11-20 13:12:33.071942</td></tr></table></div>')[0];
                  popup_6e6fc482164e4c2494a43695df9872e5.setContent(html_f3687760290d4c9996a39f0f9db79c0e);


              marker_92e4f9ef60f34af3bb85b4920ff3ce79.bindPopup(popup_6e6fc482164e4c2494a43695df9872e5);





              var marker_42a3e8905c7c4f288d00b0152f5968a0 = L.marker(
                  [43.96627833,-75.91369326],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_2014e42a74bc479683b70c808408286d = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_42a3e8905c7c4f288d00b0152f5968a0.setIcon(icon_2014e42a74bc479683b70c808408286d);


              var popup_902f786678cd4e25b4576db0e45a472f = L.popup({maxWidth: '300'});


                  var html_d78bbd679d024513abee1065bbcca4e2 = $('<div id="html_d78bbd679d024513abee1065bbcca4e2" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>49</th></tr><tr><td>Trip # </td><td align="right">4865</td></tr><tr><td>Distance </td><td align="right">52 miles</td><tr><td>Date</td><td align="right">2017-11-20 13:12:33.071942</td></tr></table></div>')[0];
                  popup_902f786678cd4e25b4576db0e45a472f.setContent(html_d78bbd679d024513abee1065bbcca4e2);


              marker_42a3e8905c7c4f288d00b0152f5968a0.bindPopup(popup_902f786678cd4e25b4576db0e45a472f);





              var marker_1da8c8a631104e4085654dbe95732acb = L.marker(
                  [43.68773037,-76.07334253],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_3eef9db245ec4d0e8574659bc10c7afd = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_1da8c8a631104e4085654dbe95732acb.setIcon(icon_3eef9db245ec4d0e8574659bc10c7afd);


              var popup_e8b8bcaa92d048f086b575b068d49654 = L.popup({maxWidth: '300'});


                  var html_1fc79ec2655e4545b48e58d71e3df5cf = $('<div id="html_1fc79ec2655e4545b48e58d71e3df5cf" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>47</th></tr><tr><td>Trip # </td><td align="right">4993</td></tr><tr><td>Distance </td><td align="right">100 miles</td><tr><td>Date</td><td align="right">2017-11-21 23:17:44.031089</td></tr></table></div>')[0];
                  popup_e8b8bcaa92d048f086b575b068d49654.setContent(html_1fc79ec2655e4545b48e58d71e3df5cf);


              marker_1da8c8a631104e4085654dbe95732acb.bindPopup(popup_e8b8bcaa92d048f086b575b068d49654);





              var marker_5c78cfe9b2cd4ea3b63683ac09335890 = L.marker(
                  [44.92854031,-74.88022219],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_78b83d901598431c8fdd6cbcdd3904df = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_5c78cfe9b2cd4ea3b63683ac09335890.setIcon(icon_78b83d901598431c8fdd6cbcdd3904df);


              var popup_9863b97b13a7455eb810f245037cb851 = L.popup({maxWidth: '300'});


                  var html_25e4860b49b344b58e4ab87e46785eb0 = $('<div id="html_25e4860b49b344b58e4ab87e46785eb0" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>47</th></tr><tr><td>Trip # </td><td align="right">4993</td></tr><tr><td>Distance </td><td align="right">100 miles</td><tr><td>Date</td><td align="right">2017-11-21 23:17:44.031089</td></tr></table></div>')[0];
                  popup_9863b97b13a7455eb810f245037cb851.setContent(html_25e4860b49b344b58e4ab87e46785eb0);


              marker_5c78cfe9b2cd4ea3b63683ac09335890.bindPopup(popup_9863b97b13a7455eb810f245037cb851);





              var marker_71819fff64194b15aa71bbc46f449b6e = L.marker(
                  [44.92243678,-74.88971111],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_cb886f47109d4dbeb7dd9f3cb2bdcdcf = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_71819fff64194b15aa71bbc46f449b6e.setIcon(icon_cb886f47109d4dbeb7dd9f3cb2bdcdcf);


              var popup_a247f8701683480b97ce5a46873a072f = L.popup({maxWidth: '300'});


                  var html_22e48998036c447e949bb16db0458dab = $('<div id="html_22e48998036c447e949bb16db0458dab" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>40</th></tr><tr><td>Trip # </td><td align="right">5169</td></tr><tr><td>Distance </td><td align="right">86 miles</td><tr><td>Date</td><td align="right">2017-11-27 11:54:57.246343</td></tr></table></div>')[0];
                  popup_a247f8701683480b97ce5a46873a072f.setContent(html_22e48998036c447e949bb16db0458dab);


              marker_71819fff64194b15aa71bbc46f449b6e.bindPopup(popup_a247f8701683480b97ce5a46873a072f);





              var marker_5d4a8078edbd4a2a86d4a2a0f120fddd = L.marker(
                  [44.47897263,-73.19259391],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_8ab316a91b9e472cbf6bde0bac25ca45 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_5d4a8078edbd4a2a86d4a2a0f120fddd.setIcon(icon_8ab316a91b9e472cbf6bde0bac25ca45);


              var popup_a1c8d09ee04145139bf3a00fd8179214 = L.popup({maxWidth: '300'});


                  var html_14da3ba1cf754ee687632e140dd293d8 = $('<div id="html_14da3ba1cf754ee687632e140dd293d8" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>40</th></tr><tr><td>Trip # </td><td align="right">5169</td></tr><tr><td>Distance </td><td align="right">86 miles</td><tr><td>Date</td><td align="right">2017-11-27 11:54:57.246343</td></tr></table></div>')[0];
                  popup_a1c8d09ee04145139bf3a00fd8179214.setContent(html_14da3ba1cf754ee687632e140dd293d8);


              marker_5d4a8078edbd4a2a86d4a2a0f120fddd.bindPopup(popup_a1c8d09ee04145139bf3a00fd8179214);





              var marker_7eb21502924141f880c16f28b6c39e25 = L.marker(
                  [43.5519154,-75.43877121],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_bb099cd5731f470c86974f8bf96defa6 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_7eb21502924141f880c16f28b6c39e25.setIcon(icon_bb099cd5731f470c86974f8bf96defa6);


              var popup_e4e54fab43b545b8b2b3eda3907674fa = L.popup({maxWidth: '300'});


                  var html_dbbbfad554d445e0b0a390113780b963 = $('<div id="html_dbbbfad554d445e0b0a390113780b963" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">5381</td></tr><tr><td>Distance </td><td align="right">79 miles</td><tr><td>Date</td><td align="right">2017-11-29 13:37:44.371807</td></tr></table></div>')[0];
                  popup_e4e54fab43b545b8b2b3eda3907674fa.setContent(html_dbbbfad554d445e0b0a390113780b963);


              marker_7eb21502924141f880c16f28b6c39e25.bindPopup(popup_e4e54fab43b545b8b2b3eda3907674fa);





              var marker_ed24a68108b7427e92ba2b0ec336b8e2 = L.marker(
                  [42.89663317,-74.09676912],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_317ceae656904f83a7d2163c1ae727ac = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_ed24a68108b7427e92ba2b0ec336b8e2.setIcon(icon_317ceae656904f83a7d2163c1ae727ac);


              var popup_6dcadde1801440dfa61ae2dc06821abb = L.popup({maxWidth: '300'});


                  var html_a17c61c57a3f42edb204753c88c8d19c = $('<div id="html_a17c61c57a3f42edb204753c88c8d19c" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">5381</td></tr><tr><td>Distance </td><td align="right">79 miles</td><tr><td>Date</td><td align="right">2017-11-29 13:37:44.371807</td></tr></table></div>')[0];
                  popup_6dcadde1801440dfa61ae2dc06821abb.setContent(html_a17c61c57a3f42edb204753c88c8d19c);


              marker_ed24a68108b7427e92ba2b0ec336b8e2.bindPopup(popup_6dcadde1801440dfa61ae2dc06821abb);





              var marker_6858af47aaba4730bce9e997b8bae52e = L.marker(
                  [43.97891093,-75.91563234],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_2b001983d22d4f5d86944dbf8dc66e1e = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_6858af47aaba4730bce9e997b8bae52e.setIcon(icon_2b001983d22d4f5d86944dbf8dc66e1e);


              var popup_9a6838798a744bf8aa84e0fde4cbdb2d = L.popup({maxWidth: '300'});


                  var html_981521b825a4461195e101619d9c4800 = $('<div id="html_981521b825a4461195e101619d9c4800" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>120</th></tr><tr><td>Trip # </td><td align="right">5507</td></tr><tr><td>Distance </td><td align="right">64 miles</td><tr><td>Date</td><td align="right">2017-11-30 16:54:04.649194</td></tr></table></div>')[0];
                  popup_9a6838798a744bf8aa84e0fde4cbdb2d.setContent(html_981521b825a4461195e101619d9c4800);


              marker_6858af47aaba4730bce9e997b8bae52e.bindPopup(popup_9a6838798a744bf8aa84e0fde4cbdb2d);





              var marker_344867354f2a4074a8fbc5b92d922276 = L.marker(
                  [43.042179600000004,-76.14034819],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_3d898729a0054f7a9e744d2821f8991b = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_344867354f2a4074a8fbc5b92d922276.setIcon(icon_3d898729a0054f7a9e744d2821f8991b);


              var popup_6e64984eeed444f8a736366c67b32c8a = L.popup({maxWidth: '300'});


                  var html_7c7a2f9d88f640c6a6ba6cc492cbf12e = $('<div id="html_7c7a2f9d88f640c6a6ba6cc492cbf12e" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>120</th></tr><tr><td>Trip # </td><td align="right">5507</td></tr><tr><td>Distance </td><td align="right">64 miles</td><tr><td>Date</td><td align="right">2017-11-30 16:54:04.649194</td></tr></table></div>')[0];
                  popup_6e64984eeed444f8a736366c67b32c8a.setContent(html_7c7a2f9d88f640c6a6ba6cc492cbf12e);


              marker_344867354f2a4074a8fbc5b92d922276.bindPopup(popup_6e64984eeed444f8a736366c67b32c8a);





              var marker_fc5bbf53d9504c7d9263d13e07e73968 = L.marker(
                  [44.09086833,-75.79944934],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_db720b4d3c0b44ee96dc724cf0eb929b = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_fc5bbf53d9504c7d9263d13e07e73968.setIcon(icon_db720b4d3c0b44ee96dc724cf0eb929b);


              var popup_716cb65b03bd4f7b8ac04816a45fd281 = L.popup({maxWidth: '300'});


                  var html_c1d2f000c40244a494ffeb7e7485ac5e = $('<div id="html_c1d2f000c40244a494ffeb7e7485ac5e" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>127</th></tr><tr><td>Trip # </td><td align="right">5513</td></tr><tr><td>Distance </td><td align="right">71 miles</td><tr><td>Date</td><td align="right">2017-11-30 17:21:02.366273</td></tr></table></div>')[0];
                  popup_716cb65b03bd4f7b8ac04816a45fd281.setContent(html_c1d2f000c40244a494ffeb7e7485ac5e);


              marker_fc5bbf53d9504c7d9263d13e07e73968.bindPopup(popup_716cb65b03bd4f7b8ac04816a45fd281);





              var marker_45b79874fdc14bb890379f05038360ea = L.marker(
                  [44.93941197,-74.89748693],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_7612888636bb478ba3ba3b96ab274c82 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_45b79874fdc14bb890379f05038360ea.setIcon(icon_7612888636bb478ba3ba3b96ab274c82);


              var popup_bca5d7ba32ed41fe9c11b1a1d3eb0925 = L.popup({maxWidth: '300'});


                  var html_2e36cb700576432eaefa3d58d4592ec5 = $('<div id="html_2e36cb700576432eaefa3d58d4592ec5" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>127</th></tr><tr><td>Trip # </td><td align="right">5513</td></tr><tr><td>Distance </td><td align="right">71 miles</td><tr><td>Date</td><td align="right">2017-11-30 17:21:02.366273</td></tr></table></div>')[0];
                  popup_bca5d7ba32ed41fe9c11b1a1d3eb0925.setContent(html_2e36cb700576432eaefa3d58d4592ec5);


              marker_45b79874fdc14bb890379f05038360ea.bindPopup(popup_bca5d7ba32ed41fe9c11b1a1d3eb0925);





              var marker_122f3a97dde8432a99ea5ff81cffed20 = L.marker(
                  [44.0630733045963,-75.9221992810117],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_b97877b873dd4f10aff90d716e1e660c = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_122f3a97dde8432a99ea5ff81cffed20.setIcon(icon_b97877b873dd4f10aff90d716e1e660c);


              var popup_eec413bcc5b14907891aa549a255a0b2 = L.popup({maxWidth: '300'});


                  var html_40617bfb1f9b4532b04c746cad4258f2 = $('<div id="html_40617bfb1f9b4532b04c746cad4258f2" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>21</th></tr><tr><td>Trip # </td><td align="right">5855</td></tr><tr><td>Distance </td><td align="right">66 miles</td><tr><td>Date</td><td align="right">2017-12-06 09:36:38.629221</td></tr></table></div>')[0];
                  popup_eec413bcc5b14907891aa549a255a0b2.setContent(html_40617bfb1f9b4532b04c746cad4258f2);


              marker_122f3a97dde8432a99ea5ff81cffed20.bindPopup(popup_eec413bcc5b14907891aa549a255a0b2);





              var marker_21b94414dbb142acbb55911c529d5976 = L.marker(
                  [43.089981377620894,-76.1886187071557],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_05f813415aeb4aa380ad8008ad18fbe6 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_21b94414dbb142acbb55911c529d5976.setIcon(icon_05f813415aeb4aa380ad8008ad18fbe6);


              var popup_4f3e329673a74015bf75bdfac3d20494 = L.popup({maxWidth: '300'});


                  var html_d9e89c923beb4e86953d91ac4a927b06 = $('<div id="html_d9e89c923beb4e86953d91ac4a927b06" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>21</th></tr><tr><td>Trip # </td><td align="right">5855</td></tr><tr><td>Distance </td><td align="right">66 miles</td><tr><td>Date</td><td align="right">2017-12-06 09:36:38.629221</td></tr></table></div>')[0];
                  popup_4f3e329673a74015bf75bdfac3d20494.setContent(html_d9e89c923beb4e86953d91ac4a927b06);


              marker_21b94414dbb142acbb55911c529d5976.bindPopup(popup_4f3e329673a74015bf75bdfac3d20494);





              var marker_726da28436704db0bd5bb7c608427b87 = L.marker(
                  [44.68090486,-74.96884482],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_675479a548a64804b5ff40dda6dd06ec = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_726da28436704db0bd5bb7c608427b87.setIcon(icon_675479a548a64804b5ff40dda6dd06ec);


              var popup_3858762475344d4eae783b692190517d = L.popup({maxWidth: '300'});


                  var html_cce2f6e18c584b4090497a6f48d39985 = $('<div id="html_cce2f6e18c584b4090497a6f48d39985" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>100</th></tr><tr><td>Trip # </td><td align="right">5885</td></tr><tr><td>Distance </td><td align="right">86 miles</td><tr><td>Date</td><td align="right">2017-12-06 13:30:11.812329</td></tr></table></div>')[0];
                  popup_3858762475344d4eae783b692190517d.setContent(html_cce2f6e18c584b4090497a6f48d39985);


              marker_726da28436704db0bd5bb7c608427b87.bindPopup(popup_3858762475344d4eae783b692190517d);





              var marker_8f4ea03ea800444d95cb381a9388982e = L.marker(
                  [44.47835974,-73.19349788],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_c58a492739024e2d9735c51973aeb37a = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_8f4ea03ea800444d95cb381a9388982e.setIcon(icon_c58a492739024e2d9735c51973aeb37a);


              var popup_723a079498e645aeb51dc319a8b3cf50 = L.popup({maxWidth: '300'});


                  var html_ed0819b016844033b284255a4d9904fa = $('<div id="html_ed0819b016844033b284255a4d9904fa" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>100</th></tr><tr><td>Trip # </td><td align="right">5885</td></tr><tr><td>Distance </td><td align="right">86 miles</td><tr><td>Date</td><td align="right">2017-12-06 13:30:11.812329</td></tr></table></div>')[0];
                  popup_723a079498e645aeb51dc319a8b3cf50.setContent(html_ed0819b016844033b284255a4d9904fa);


              marker_8f4ea03ea800444d95cb381a9388982e.bindPopup(popup_723a079498e645aeb51dc319a8b3cf50);





              var marker_32c31628899a4994973a558ccc6bcd14 = L.marker(
                  [44.68609109,-75.49308001],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_c4d2279eee1e49778dd4d53f801c8d89 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_32c31628899a4994973a558ccc6bcd14.setIcon(icon_c4d2279eee1e49778dd4d53f801c8d89);


              var popup_49a7a14764264b0e9a6c767bb7652caa = L.popup({maxWidth: '300'});


                  var html_4826fefdd21246d89e426c4721c6e653 = $('<div id="html_4826fefdd21246d89e426c4721c6e653" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>108</th></tr><tr><td>Trip # </td><td align="right">6087</td></tr><tr><td>Distance </td><td align="right">51 miles</td><tr><td>Date</td><td align="right">2017-12-08 15:14:39.825378</td></tr></table></div>')[0];
                  popup_49a7a14764264b0e9a6c767bb7652caa.setContent(html_4826fefdd21246d89e426c4721c6e653);


              marker_32c31628899a4994973a558ccc6bcd14.bindPopup(popup_49a7a14764264b0e9a6c767bb7652caa);





              var marker_0d5bb7f55b504396bc3239c6ac70e8a2 = L.marker(
                  [44.00577193,-75.98479493],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_c906f3a98dec4f1ca5e312fc75bac988 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_0d5bb7f55b504396bc3239c6ac70e8a2.setIcon(icon_c906f3a98dec4f1ca5e312fc75bac988);


              var popup_12847702cc6042f1bcab906175a59a32 = L.popup({maxWidth: '300'});


                  var html_644bcc84c07840589aa814f7f0191799 = $('<div id="html_644bcc84c07840589aa814f7f0191799" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>108</th></tr><tr><td>Trip # </td><td align="right">6087</td></tr><tr><td>Distance </td><td align="right">51 miles</td><tr><td>Date</td><td align="right">2017-12-08 15:14:39.825378</td></tr></table></div>')[0];
                  popup_12847702cc6042f1bcab906175a59a32.setContent(html_644bcc84c07840589aa814f7f0191799);


              marker_0d5bb7f55b504396bc3239c6ac70e8a2.bindPopup(popup_12847702cc6042f1bcab906175a59a32);





              var marker_623a7846cfca4baa9b9bb710e87f3ab7 = L.marker(
                  [43.71720559,-75.4172396],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_938b24c7d6ec454d8f2f8fb3f8c8c5da = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_623a7846cfca4baa9b9bb710e87f3ab7.setIcon(icon_938b24c7d6ec454d8f2f8fb3f8c8c5da);


              var popup_d8b2355b82c0484ea356222507fc1faf = L.popup({maxWidth: '300'});


                  var html_dadcb9442baf4a079fbb46d9e9733005 = $('<div id="html_dadcb9442baf4a079fbb46d9e9733005" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>7</th></tr><tr><td>Trip # </td><td align="right">6145</td></tr><tr><td>Distance </td><td align="right">60 miles</td><tr><td>Date</td><td align="right">2017-12-09 17:38:57.840101</td></tr></table></div>')[0];
                  popup_d8b2355b82c0484ea356222507fc1faf.setContent(html_dadcb9442baf4a079fbb46d9e9733005);


              marker_623a7846cfca4baa9b9bb710e87f3ab7.bindPopup(popup_d8b2355b82c0484ea356222507fc1faf);





              var marker_ecb8cdf593cb45528393d40cea9d69a7 = L.marker(
                  [43.00772075,-76.1680329],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_bb6a7e20b2b04ba2820b2e20f0e65006 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_ecb8cdf593cb45528393d40cea9d69a7.setIcon(icon_bb6a7e20b2b04ba2820b2e20f0e65006);


              var popup_9a341b79d403478caeedec676e577e80 = L.popup({maxWidth: '300'});


                  var html_60717cb0b4284ad08389e860cb02829e = $('<div id="html_60717cb0b4284ad08389e860cb02829e" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>7</th></tr><tr><td>Trip # </td><td align="right">6145</td></tr><tr><td>Distance </td><td align="right">60 miles</td><tr><td>Date</td><td align="right">2017-12-09 17:38:57.840101</td></tr></table></div>')[0];
                  popup_9a341b79d403478caeedec676e577e80.setContent(html_60717cb0b4284ad08389e860cb02829e);


              marker_ecb8cdf593cb45528393d40cea9d69a7.bindPopup(popup_9a341b79d403478caeedec676e577e80);





              var marker_9046071c6a9249a88c78e24558372b1d = L.marker(
                  [43.96605236823729,-75.9160159349518],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_0c03cf6884e145fa965aaa12535c92a2 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_9046071c6a9249a88c78e24558372b1d.setIcon(icon_0c03cf6884e145fa965aaa12535c92a2);


              var popup_1a3a91795641423daaee501c292f7969 = L.popup({maxWidth: '300'});


                  var html_7302079912ff4ad7911d278782b36762 = $('<div id="html_7302079912ff4ad7911d278782b36762" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>25</th></tr><tr><td>Trip # </td><td align="right">6151</td></tr><tr><td>Distance </td><td align="right">65 miles</td><tr><td>Date</td><td align="right">2017-12-09 23:50:03.829612</td></tr></table></div>')[0];
                  popup_1a3a91795641423daaee501c292f7969.setContent(html_7302079912ff4ad7911d278782b36762);


              marker_9046071c6a9249a88c78e24558372b1d.bindPopup(popup_1a3a91795641423daaee501c292f7969);





              var marker_b9af7caa2b924bc4824fba8411d91f9a = L.marker(
                  [43.04077358699529,-76.2938667818167],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_029bc0ebbfd84d91954ca84e9ae82812 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_b9af7caa2b924bc4824fba8411d91f9a.setIcon(icon_029bc0ebbfd84d91954ca84e9ae82812);


              var popup_35d2eebc083241b4b92272b5a38eda53 = L.popup({maxWidth: '300'});


                  var html_9ab2463868164de89c2fca1d8160bac3 = $('<div id="html_9ab2463868164de89c2fca1d8160bac3" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>25</th></tr><tr><td>Trip # </td><td align="right">6151</td></tr><tr><td>Distance </td><td align="right">65 miles</td><tr><td>Date</td><td align="right">2017-12-09 23:50:03.829612</td></tr></table></div>')[0];
                  popup_35d2eebc083241b4b92272b5a38eda53.setContent(html_9ab2463868164de89c2fca1d8160bac3);


              marker_b9af7caa2b924bc4824fba8411d91f9a.bindPopup(popup_35d2eebc083241b4b92272b5a38eda53);





              var marker_22c4775f83394c74bc2007e57272fee2 = L.marker(
                  [43.966133474069004,-75.9160017423178],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_3bf6afe0e3da45e387c18090d4a72058 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_22c4775f83394c74bc2007e57272fee2.setIcon(icon_3bf6afe0e3da45e387c18090d4a72058);


              var popup_d34b5d8671c544df948407e3f44f3658 = L.popup({maxWidth: '300'});


                  var html_9897d1792e6245f8aa6f74880b6177e9 = $('<div id="html_9897d1792e6245f8aa6f74880b6177e9" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>25</th></tr><tr><td>Trip # </td><td align="right">6153</td></tr><tr><td>Distance </td><td align="right">65 miles</td><tr><td>Date</td><td align="right">2017-12-10 10:05:12.255622</td></tr></table></div>')[0];
                  popup_d34b5d8671c544df948407e3f44f3658.setContent(html_9897d1792e6245f8aa6f74880b6177e9);


              marker_22c4775f83394c74bc2007e57272fee2.bindPopup(popup_d34b5d8671c544df948407e3f44f3658);





              var marker_4a0136333aa94844be465d1fca32f001 = L.marker(
                  [43.0407751003693,-76.2939235283063],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_981a53931f4e44c79db4587d106aa868 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_4a0136333aa94844be465d1fca32f001.setIcon(icon_981a53931f4e44c79db4587d106aa868);


              var popup_2587b87522c44e14ade7a02d4853aae5 = L.popup({maxWidth: '300'});


                  var html_638df95d036f44959092a23020b6e338 = $('<div id="html_638df95d036f44959092a23020b6e338" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>25</th></tr><tr><td>Trip # </td><td align="right">6153</td></tr><tr><td>Distance </td><td align="right">65 miles</td><tr><td>Date</td><td align="right">2017-12-10 10:05:12.255622</td></tr></table></div>')[0];
                  popup_2587b87522c44e14ade7a02d4853aae5.setContent(html_638df95d036f44959092a23020b6e338);


              marker_4a0136333aa94844be465d1fca32f001.bindPopup(popup_2587b87522c44e14ade7a02d4853aae5);





              var marker_e576a3805e814cc58e9bbcd9f0071621 = L.marker(
                  [43.9763708,-75.88030153],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_bb612c0bb9094903b48bbc0b4b6dc0c8 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_e576a3805e814cc58e9bbcd9f0071621.setIcon(icon_bb612c0bb9094903b48bbc0b4b6dc0c8);


              var popup_5fff0a36583c442bae7281ae6bffc7da = L.popup({maxWidth: '300'});


                  var html_59a4053180fa4f9a80370fe16c662564 = $('<div id="html_59a4053180fa4f9a80370fe16c662564" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>126</th></tr><tr><td>Trip # </td><td align="right">6219</td></tr><tr><td>Distance </td><td align="right">64 miles</td><tr><td>Date</td><td align="right">2017-12-11 15:27:26.358934</td></tr></table></div>')[0];
                  popup_5fff0a36583c442bae7281ae6bffc7da.setContent(html_59a4053180fa4f9a80370fe16c662564);


              marker_e576a3805e814cc58e9bbcd9f0071621.bindPopup(popup_5fff0a36583c442bae7281ae6bffc7da);





              var marker_7b0757e6a92142798b177151ae27d3fa = L.marker(
                  [43.04247814,-76.13782031],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_9db82252aa52444f96f7072be01e5913 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_7b0757e6a92142798b177151ae27d3fa.setIcon(icon_9db82252aa52444f96f7072be01e5913);


              var popup_a8205d233a5f4bafa651795f6efa540c = L.popup({maxWidth: '300'});


                  var html_4fd2bf40d64441b2882dfe93f9035b50 = $('<div id="html_4fd2bf40d64441b2882dfe93f9035b50" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>126</th></tr><tr><td>Trip # </td><td align="right">6219</td></tr><tr><td>Distance </td><td align="right">64 miles</td><tr><td>Date</td><td align="right">2017-12-11 15:27:26.358934</td></tr></table></div>')[0];
                  popup_a8205d233a5f4bafa651795f6efa540c.setContent(html_4fd2bf40d64441b2882dfe93f9035b50);


              marker_7b0757e6a92142798b177151ae27d3fa.bindPopup(popup_a8205d233a5f4bafa651795f6efa540c);





              var marker_2c5769c475aa44ef847f09bf1901bcf0 = L.marker(
                  [43.99748648,-75.74585971],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_8a501d6fd94b4ebca30b88ae0630d971 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_2c5769c475aa44ef847f09bf1901bcf0.setIcon(icon_8a501d6fd94b4ebca30b88ae0630d971);


              var popup_f312950ec59e4910986a58617954851e = L.popup({maxWidth: '300'});


                  var html_d36eaa654aeb44a9b35a4354db39ddf5 = $('<div id="html_d36eaa654aeb44a9b35a4354db39ddf5" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>93</th></tr><tr><td>Trip # </td><td align="right">6289</td></tr><tr><td>Distance </td><td align="right">67 miles</td><tr><td>Date</td><td align="right">2017-12-12 13:36:39.12778</td></tr></table></div>')[0];
                  popup_f312950ec59e4910986a58617954851e.setContent(html_d36eaa654aeb44a9b35a4354db39ddf5);


              marker_2c5769c475aa44ef847f09bf1901bcf0.bindPopup(popup_f312950ec59e4910986a58617954851e);





              var marker_55619d9cb27f49468acfbd6e6afca8e6 = L.marker(
                  [43.04243208,-76.14057659999999],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_46c99293568b41acb76bd6485f6576f7 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_55619d9cb27f49468acfbd6e6afca8e6.setIcon(icon_46c99293568b41acb76bd6485f6576f7);


              var popup_eb83f9fed4184f35a526a379bea6fd95 = L.popup({maxWidth: '300'});


                  var html_d54dcc254abe4b3d977cb9593bc50c64 = $('<div id="html_d54dcc254abe4b3d977cb9593bc50c64" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>93</th></tr><tr><td>Trip # </td><td align="right">6289</td></tr><tr><td>Distance </td><td align="right">67 miles</td><tr><td>Date</td><td align="right">2017-12-12 13:36:39.12778</td></tr></table></div>')[0];
                  popup_eb83f9fed4184f35a526a379bea6fd95.setContent(html_d54dcc254abe4b3d977cb9593bc50c64);


              marker_55619d9cb27f49468acfbd6e6afca8e6.bindPopup(popup_eb83f9fed4184f35a526a379bea6fd95);





              var marker_691556f919ed47b0a77a951c77af6880 = L.marker(
                  [44.095735999999995,-76.19154411],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_f48b39b9313a42d8b15c204bfeb11718 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_691556f919ed47b0a77a951c77af6880.setIcon(icon_f48b39b9313a42d8b15c204bfeb11718);


              var popup_15a0ed33a7ad4dd7becdd6c31ff5b37f = L.popup({maxWidth: '300'});


                  var html_2ce3460dbf90418fb65cf0b1a2f4968c = $('<div id="html_2ce3460dbf90418fb65cf0b1a2f4968c" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>135</th></tr><tr><td>Trip # </td><td align="right">6532</td></tr><tr><td>Distance </td><td align="right">70 miles</td><tr><td>Date</td><td align="right">2017-12-14 20:48:22.421895</td></tr></table></div>')[0];
                  popup_15a0ed33a7ad4dd7becdd6c31ff5b37f.setContent(html_2ce3460dbf90418fb65cf0b1a2f4968c);


              marker_691556f919ed47b0a77a951c77af6880.bindPopup(popup_15a0ed33a7ad4dd7becdd6c31ff5b37f);





              var marker_5a26c64de92b470688e0661ef70a65b9 = L.marker(
                  [43.04245074,-76.14094752],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_4059957966394da79dc5fed13dc86800 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_5a26c64de92b470688e0661ef70a65b9.setIcon(icon_4059957966394da79dc5fed13dc86800);


              var popup_358e905972384d06ac17f6bf71ba48a9 = L.popup({maxWidth: '300'});


                  var html_015de608d4d94d3aadae397bdef29475 = $('<div id="html_015de608d4d94d3aadae397bdef29475" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>135</th></tr><tr><td>Trip # </td><td align="right">6532</td></tr><tr><td>Distance </td><td align="right">70 miles</td><tr><td>Date</td><td align="right">2017-12-14 20:48:22.421895</td></tr></table></div>')[0];
                  popup_358e905972384d06ac17f6bf71ba48a9.setContent(html_015de608d4d94d3aadae397bdef29475);


              marker_5a26c64de92b470688e0661ef70a65b9.bindPopup(popup_358e905972384d06ac17f6bf71ba48a9);





              var marker_2e61a16267d54df3858c34df181ecb96 = L.marker(
                  [44.87314435,-74.87135140000001],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_3ee36edf7b1c4002b9253cd48b30e086 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_2e61a16267d54df3858c34df181ecb96.setIcon(icon_3ee36edf7b1c4002b9253cd48b30e086);


              var popup_90318098f57b4f97ae6e805f50d29f84 = L.popup({maxWidth: '300'});


                  var html_a6996a1aec7249968c87dccdbf180083 = $('<div id="html_a6996a1aec7249968c87dccdbf180083" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>40</th></tr><tr><td>Trip # </td><td align="right">6563</td></tr><tr><td>Distance </td><td align="right">84 miles</td><tr><td>Date</td><td align="right">2017-12-15 12:44:47.382576</td></tr></table></div>')[0];
                  popup_90318098f57b4f97ae6e805f50d29f84.setContent(html_a6996a1aec7249968c87dccdbf180083);


              marker_2e61a16267d54df3858c34df181ecb96.bindPopup(popup_90318098f57b4f97ae6e805f50d29f84);





              var marker_7f8474cd7275435a99041693bf2b6615 = L.marker(
                  [44.47903074,-73.19330163],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_15c4547baad84ce5b010af177a73fc4c = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_7f8474cd7275435a99041693bf2b6615.setIcon(icon_15c4547baad84ce5b010af177a73fc4c);


              var popup_238e7137edb248b280c00535be34e72d = L.popup({maxWidth: '300'});


                  var html_12c3734d14d746ba8f780e1315a17b12 = $('<div id="html_12c3734d14d746ba8f780e1315a17b12" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>40</th></tr><tr><td>Trip # </td><td align="right">6563</td></tr><tr><td>Distance </td><td align="right">84 miles</td><tr><td>Date</td><td align="right">2017-12-15 12:44:47.382576</td></tr></table></div>')[0];
                  popup_238e7137edb248b280c00535be34e72d.setContent(html_12c3734d14d746ba8f780e1315a17b12);


              marker_7f8474cd7275435a99041693bf2b6615.bindPopup(popup_238e7137edb248b280c00535be34e72d);





              var marker_997e4f727fde49a38877b17ab44321c9 = L.marker(
                  [44.68099451,-74.96863540000001],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_4f63f8d111514d9899aa3e4e333663f4 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_997e4f727fde49a38877b17ab44321c9.setIcon(icon_4f63f8d111514d9899aa3e4e333663f4);


              var popup_b6fd51d1c9494e0797989c80867cae96 = L.popup({maxWidth: '300'});


                  var html_44316b75940045e98805ee0f072ac063 = $('<div id="html_44316b75940045e98805ee0f072ac063" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>100</th></tr><tr><td>Trip # </td><td align="right">6592</td></tr><tr><td>Distance </td><td align="right">86 miles</td><tr><td>Date</td><td align="right">2017-12-15 16:46:14.840432</td></tr></table></div>')[0];
                  popup_b6fd51d1c9494e0797989c80867cae96.setContent(html_44316b75940045e98805ee0f072ac063);


              marker_997e4f727fde49a38877b17ab44321c9.bindPopup(popup_b6fd51d1c9494e0797989c80867cae96);





              var marker_285f15213d9d46b79c83e3341d0b7d9d = L.marker(
                  [44.47838789,-73.19321609],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_fcc31aeed9f443adb04b93b4d15de156 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_285f15213d9d46b79c83e3341d0b7d9d.setIcon(icon_fcc31aeed9f443adb04b93b4d15de156);


              var popup_453058c7486c4eca91b0997e4e2bc2a6 = L.popup({maxWidth: '300'});


                  var html_dbcd7a887700436db1d76b0b475e0a3b = $('<div id="html_dbcd7a887700436db1d76b0b475e0a3b" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>100</th></tr><tr><td>Trip # </td><td align="right">6592</td></tr><tr><td>Distance </td><td align="right">86 miles</td><tr><td>Date</td><td align="right">2017-12-15 16:46:14.840432</td></tr></table></div>')[0];
                  popup_453058c7486c4eca91b0997e4e2bc2a6.setContent(html_dbcd7a887700436db1d76b0b475e0a3b);


              marker_285f15213d9d46b79c83e3341d0b7d9d.bindPopup(popup_453058c7486c4eca91b0997e4e2bc2a6);





              var marker_4762bc85f74e4d8eb3acad9438a1fe5c = L.marker(
                  [43.966019790168104,-75.91609951250321],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_ac6f4f827c964f57b98d4bd3628a0517 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_4762bc85f74e4d8eb3acad9438a1fe5c.setIcon(icon_ac6f4f827c964f57b98d4bd3628a0517);


              var popup_3648d78f169a454cba6c9640281fe4ef = L.popup({maxWidth: '300'});


                  var html_0525d443ffe648bf9680bed8b1c278ca = $('<div id="html_0525d443ffe648bf9680bed8b1c278ca" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>25</th></tr><tr><td>Trip # </td><td align="right">6936</td></tr><tr><td>Distance </td><td align="right">63 miles</td><tr><td>Date</td><td align="right">2017-12-21 09:28:23.478022</td></tr></table></div>')[0];
                  popup_3648d78f169a454cba6c9640281fe4ef.setContent(html_0525d443ffe648bf9680bed8b1c278ca);


              marker_4762bc85f74e4d8eb3acad9438a1fe5c.bindPopup(popup_3648d78f169a454cba6c9640281fe4ef);





              var marker_84f94bcf59cf4510b75bae07d0d82ab0 = L.marker(
                  [43.0424081003834,-76.1404061736097],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_1a6b7ebac179455c86a26789114c924b = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_84f94bcf59cf4510b75bae07d0d82ab0.setIcon(icon_1a6b7ebac179455c86a26789114c924b);


              var popup_463dbd3a36a147b38384717de983e9af = L.popup({maxWidth: '300'});


                  var html_074dbc0801644fde970e76bf31367910 = $('<div id="html_074dbc0801644fde970e76bf31367910" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>25</th></tr><tr><td>Trip # </td><td align="right">6936</td></tr><tr><td>Distance </td><td align="right">63 miles</td><tr><td>Date</td><td align="right">2017-12-21 09:28:23.478022</td></tr></table></div>')[0];
                  popup_463dbd3a36a147b38384717de983e9af.setContent(html_074dbc0801644fde970e76bf31367910);


              marker_84f94bcf59cf4510b75bae07d0d82ab0.bindPopup(popup_463dbd3a36a147b38384717de983e9af);





              var marker_34cf7f39dc354cc1bef2d4fbbef61ce7 = L.marker(
                  [44.04000986,-75.90152921],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_95d30b4fbbdb4ec9bce59088c0624663 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_34cf7f39dc354cc1bef2d4fbbef61ce7.setIcon(icon_95d30b4fbbdb4ec9bce59088c0624663);


              var popup_9994b5b1e853443ba2ee9250a00f6966 = L.popup({maxWidth: '300'});


                  var html_0f2696a0040145308432c897f6508471 = $('<div id="html_0f2696a0040145308432c897f6508471" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>23</th></tr><tr><td>Trip # </td><td align="right">7435</td></tr><tr><td>Distance </td><td align="right">67 miles</td><tr><td>Date</td><td align="right">2017-12-31 21:53:16.593153</td></tr></table></div>')[0];
                  popup_9994b5b1e853443ba2ee9250a00f6966.setContent(html_0f2696a0040145308432c897f6508471);


              marker_34cf7f39dc354cc1bef2d4fbbef61ce7.bindPopup(popup_9994b5b1e853443ba2ee9250a00f6966);





              var marker_3a460a9109cd4c998ec212607b8ccb8e = L.marker(
                  [43.04617157,-76.13416596],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_5c2037f30f744bcc9f3d50f74d76e45e = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_3a460a9109cd4c998ec212607b8ccb8e.setIcon(icon_5c2037f30f744bcc9f3d50f74d76e45e);


              var popup_afe28cdf556d4c209c87e041cfa4d723 = L.popup({maxWidth: '300'});


                  var html_ff43b4ac66ab4373ba23dfab07b171b1 = $('<div id="html_ff43b4ac66ab4373ba23dfab07b171b1" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>23</th></tr><tr><td>Trip # </td><td align="right">7435</td></tr><tr><td>Distance </td><td align="right">67 miles</td><tr><td>Date</td><td align="right">2017-12-31 21:53:16.593153</td></tr></table></div>')[0];
                  popup_afe28cdf556d4c209c87e041cfa4d723.setContent(html_ff43b4ac66ab4373ba23dfab07b171b1);


              marker_3a460a9109cd4c998ec212607b8ccb8e.bindPopup(popup_afe28cdf556d4c209c87e041cfa4d723);





              var marker_bb4cf27ceb8145e28a44372d43d12b91 = L.marker(
                  [43.68573206,-75.35512922],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_6b9e57262f9949c9ba7b3d4b2b083f32 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_bb4cf27ceb8145e28a44372d43d12b91.setIcon(icon_6b9e57262f9949c9ba7b3d4b2b083f32);


              var popup_df4d299dbea8413895b81a01f04c509b = L.popup({maxWidth: '300'});


                  var html_e5f3d32b01e240399b181105ed62ab07 = $('<div id="html_e5f3d32b01e240399b181105ed62ab07" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>100</th></tr><tr><td>Trip # </td><td align="right">7294</td></tr><tr><td>Distance </td><td align="right">69 miles</td><tr><td>Date</td><td align="right">2018-01-02 12:53:34.252741</td></tr></table></div>')[0];
                  popup_df4d299dbea8413895b81a01f04c509b.setContent(html_e5f3d32b01e240399b181105ed62ab07);


              marker_bb4cf27ceb8145e28a44372d43d12b91.bindPopup(popup_df4d299dbea8413895b81a01f04c509b);





              var marker_c12ceeb5bb154cbbb1de874ba3cc9b07 = L.marker(
                  [44.68095554,-74.96839665],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_e9ebf0ad85714edeb008370dfaed8acb = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_c12ceeb5bb154cbbb1de874ba3cc9b07.setIcon(icon_e9ebf0ad85714edeb008370dfaed8acb);


              var popup_89959b522a8540d2acfaf0bc0a7c0e7a = L.popup({maxWidth: '300'});


                  var html_0ed88ba73fca4509bd0dc26780ca5ccf = $('<div id="html_0ed88ba73fca4509bd0dc26780ca5ccf" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>100</th></tr><tr><td>Trip # </td><td align="right">7294</td></tr><tr><td>Distance </td><td align="right">69 miles</td><tr><td>Date</td><td align="right">2018-01-02 12:53:34.252741</td></tr></table></div>')[0];
                  popup_89959b522a8540d2acfaf0bc0a7c0e7a.setContent(html_0ed88ba73fca4509bd0dc26780ca5ccf);


              marker_c12ceeb5bb154cbbb1de874ba3cc9b07.bindPopup(popup_89959b522a8540d2acfaf0bc0a7c0e7a);





              var marker_024c07e8dc884dfab998e71d5bc42825 = L.marker(
                  [44.09577425,-76.19150762],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_41304cca76c84726a74eccdbe4607e2a = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_024c07e8dc884dfab998e71d5bc42825.setIcon(icon_41304cca76c84726a74eccdbe4607e2a);


              var popup_e3633dd2a6b5454cbc8f98c95abf8fc3 = L.popup({maxWidth: '300'});


                  var html_4aa48e1161af4c1c81d2f98ad940c9a2 = $('<div id="html_4aa48e1161af4c1c81d2f98ad940c9a2" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>55</th></tr><tr><td>Trip # </td><td align="right">7370</td></tr><tr><td>Distance </td><td align="right">66 miles</td><tr><td>Date</td><td align="right">2018-01-02 14:54:10.767965</td></tr></table></div>')[0];
                  popup_e3633dd2a6b5454cbc8f98c95abf8fc3.setContent(html_4aa48e1161af4c1c81d2f98ad940c9a2);


              marker_024c07e8dc884dfab998e71d5bc42825.bindPopup(popup_e3633dd2a6b5454cbc8f98c95abf8fc3);





              var marker_fd157a5d46714d409f5e845c5156dfb4 = L.marker(
                  [44.73743229,-75.14637427],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_6f4ceec330f34d81b3208051e9cef83e = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_fd157a5d46714d409f5e845c5156dfb4.setIcon(icon_6f4ceec330f34d81b3208051e9cef83e);


              var popup_e73523bcb15f434f95ba43f0258fdac2 = L.popup({maxWidth: '300'});


                  var html_ce29981d5c644f2ebd71b4a5438944fd = $('<div id="html_ce29981d5c644f2ebd71b4a5438944fd" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>55</th></tr><tr><td>Trip # </td><td align="right">7370</td></tr><tr><td>Distance </td><td align="right">66 miles</td><tr><td>Date</td><td align="right">2018-01-02 14:54:10.767965</td></tr></table></div>')[0];
                  popup_e73523bcb15f434f95ba43f0258fdac2.setContent(html_ce29981d5c644f2ebd71b4a5438944fd);


              marker_fd157a5d46714d409f5e845c5156dfb4.bindPopup(popup_e73523bcb15f434f95ba43f0258fdac2);





              var marker_093a75519860449691be795bebbca6ad = L.marker(
                  [44.76756034,-75.29758019],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_32d5d45592a44a0eb55202aff0dd48d0 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_093a75519860449691be795bebbca6ad.setIcon(icon_32d5d45592a44a0eb55202aff0dd48d0);


              var popup_b33f4f1dd5bf4e12b60e4b468d52a437 = L.popup({maxWidth: '300'});


                  var html_32446b4a0b4549dea600324235fc42e0 = $('<div id="html_32446b4a0b4549dea600324235fc42e0" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>10</th></tr><tr><td>Trip # </td><td align="right">7416</td></tr><tr><td>Distance </td><td align="right">52 miles</td><tr><td>Date</td><td align="right">2018-01-02 13:19:26.753037</td></tr></table></div>')[0];
                  popup_b33f4f1dd5bf4e12b60e4b468d52a437.setContent(html_32446b4a0b4549dea600324235fc42e0);


              marker_093a75519860449691be795bebbca6ad.bindPopup(popup_b33f4f1dd5bf4e12b60e4b468d52a437);





              var marker_38bea2b91b2544e9a7f0bd33078fd162 = L.marker(
                  [44.23643776,-76.0814562],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_615db9993bc24410b2ae76398e1304c1 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_38bea2b91b2544e9a7f0bd33078fd162.setIcon(icon_615db9993bc24410b2ae76398e1304c1);


              var popup_3568b09370a9449a98b16d72a92b4395 = L.popup({maxWidth: '300'});


                  var html_1b8250ed038f4164b29cd4aece61ca42 = $('<div id="html_1b8250ed038f4164b29cd4aece61ca42" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>10</th></tr><tr><td>Trip # </td><td align="right">7416</td></tr><tr><td>Distance </td><td align="right">52 miles</td><tr><td>Date</td><td align="right">2018-01-02 13:19:26.753037</td></tr></table></div>')[0];
                  popup_3568b09370a9449a98b16d72a92b4395.setContent(html_1b8250ed038f4164b29cd4aece61ca42);


              marker_38bea2b91b2544e9a7f0bd33078fd162.bindPopup(popup_3568b09370a9449a98b16d72a92b4395);





              var marker_d1d862d09699427d939937b781ea556b = L.marker(
                  [44.23643776,-76.0814562],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_d1406175613f42499f7f063cc28ec9c7 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_d1d862d09699427d939937b781ea556b.setIcon(icon_d1406175613f42499f7f063cc28ec9c7);


              var popup_a8ea51af114740fa8b0ba52cb3fa1097 = L.popup({maxWidth: '300'});


                  var html_e0d3c730891d4d2ea1ab7350316d1935 = $('<div id="html_e0d3c730891d4d2ea1ab7350316d1935" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>13</th></tr><tr><td>Trip # </td><td align="right">7419</td></tr><tr><td>Distance </td><td align="right">55 miles</td><tr><td>Date</td><td align="right">2018-01-02 12:46:19.235901</td></tr></table></div>')[0];
                  popup_a8ea51af114740fa8b0ba52cb3fa1097.setContent(html_e0d3c730891d4d2ea1ab7350316d1935);


              marker_d1d862d09699427d939937b781ea556b.bindPopup(popup_a8ea51af114740fa8b0ba52cb3fa1097);





              var marker_36b329850ce1434a808c15fd6fc90319 = L.marker(
                  [43.552028899999996,-75.43818398],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_fcd2755b18254ad39a50e7bd2d6f013a = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_36b329850ce1434a808c15fd6fc90319.setIcon(icon_fcd2755b18254ad39a50e7bd2d6f013a);


              var popup_6cb9a06d3c664db3947e8018778ecb34 = L.popup({maxWidth: '300'});


                  var html_cb12b78dfbb24aa2b7893e59033d3cbc = $('<div id="html_cb12b78dfbb24aa2b7893e59033d3cbc" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>13</th></tr><tr><td>Trip # </td><td align="right">7419</td></tr><tr><td>Distance </td><td align="right">55 miles</td><tr><td>Date</td><td align="right">2018-01-02 12:46:19.235901</td></tr></table></div>')[0];
                  popup_6cb9a06d3c664db3947e8018778ecb34.setContent(html_cb12b78dfbb24aa2b7893e59033d3cbc);


              marker_36b329850ce1434a808c15fd6fc90319.bindPopup(popup_6cb9a06d3c664db3947e8018778ecb34);





              var marker_da754bb6833147538d1a6480c6c1d268 = L.marker(
                  [43.0657897,-76.10085759],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_9bf74fb3b40440d3a2748c616551736e = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_da754bb6833147538d1a6480c6c1d268.setIcon(icon_9bf74fb3b40440d3a2748c616551736e);


              var popup_6aa040cc9eb94137830e3dc6e5fff52d = L.popup({maxWidth: '300'});


                  var html_0340ff63b50e487d985ea3221f48b469 = $('<div id="html_0340ff63b50e487d985ea3221f48b469" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>22</th></tr><tr><td>Trip # </td><td align="right">7599</td></tr><tr><td>Distance </td><td align="right">63 miles</td><tr><td>Date</td><td align="right">2018-01-04 01:40:59.752756</td></tr></table></div>')[0];
                  popup_6aa040cc9eb94137830e3dc6e5fff52d.setContent(html_0340ff63b50e487d985ea3221f48b469);


              marker_da754bb6833147538d1a6480c6c1d268.bindPopup(popup_6aa040cc9eb94137830e3dc6e5fff52d);





              var marker_ea8aa207eb6a4c69bd0ab8b293177465 = L.marker(
                  [44.00646172,-75.98406507],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_614e43b4cd47402c834e7f04fa36e2df = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_ea8aa207eb6a4c69bd0ab8b293177465.setIcon(icon_614e43b4cd47402c834e7f04fa36e2df);


              var popup_0d495b44b9e84d94aa91046952c77dbe = L.popup({maxWidth: '300'});


                  var html_f21ddf8adacc4b36b7abe3356db623e4 = $('<div id="html_f21ddf8adacc4b36b7abe3356db623e4" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>22</th></tr><tr><td>Trip # </td><td align="right">7599</td></tr><tr><td>Distance </td><td align="right">63 miles</td><tr><td>Date</td><td align="right">2018-01-04 01:40:59.752756</td></tr></table></div>')[0];
                  popup_0d495b44b9e84d94aa91046952c77dbe.setContent(html_f21ddf8adacc4b36b7abe3356db623e4);


              marker_ea8aa207eb6a4c69bd0ab8b293177465.bindPopup(popup_0d495b44b9e84d94aa91046952c77dbe);





              var marker_7d7094a8f5d7490a8ec51085a4085ea5 = L.marker(
                  [43.98707853,-75.59248283],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_b705768d12f34dd3a640a36a9ab65a4e = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_7d7094a8f5d7490a8ec51085a4085ea5.setIcon(icon_b705768d12f34dd3a640a36a9ab65a4e);


              var popup_76298bf85f78497bb77c66ec26197f4e = L.popup({maxWidth: '300'});


                  var html_f6294e1e604e43c79a3c6630510eef45 = $('<div id="html_f6294e1e604e43c79a3c6630510eef45" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">5791</td></tr><tr><td>Distance </td><td align="right">74 miles</td><tr><td>Date</td><td align="right">2018-01-11 18:31:48.952896</td></tr></table></div>')[0];
                  popup_76298bf85f78497bb77c66ec26197f4e.setContent(html_f6294e1e604e43c79a3c6630510eef45);


              marker_7d7094a8f5d7490a8ec51085a4085ea5.bindPopup(popup_76298bf85f78497bb77c66ec26197f4e);





              var marker_146ad97a2db749ce8e92e42eb95424d0 = L.marker(
                  [44.9526581,-74.84376237],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_6388d63327f24c529fb30d4f28e4f8f1 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_146ad97a2db749ce8e92e42eb95424d0.setIcon(icon_6388d63327f24c529fb30d4f28e4f8f1);


              var popup_df46b475399743ab9fb2aa4a52a23eb7 = L.popup({maxWidth: '300'});


                  var html_72b9bd2332244d51ab5b0d617db443b3 = $('<div id="html_72b9bd2332244d51ab5b0d617db443b3" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">5791</td></tr><tr><td>Distance </td><td align="right">74 miles</td><tr><td>Date</td><td align="right">2018-01-11 18:31:48.952896</td></tr></table></div>')[0];
                  popup_df46b475399743ab9fb2aa4a52a23eb7.setContent(html_72b9bd2332244d51ab5b0d617db443b3);


              marker_146ad97a2db749ce8e92e42eb95424d0.bindPopup(popup_df46b475399743ab9fb2aa4a52a23eb7);





              var marker_f423890719e244728be0f84ccd312f2d = L.marker(
                  [44.84123661,-74.68520144],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_39a75b82e5d14d31b1f305c0262b67b7 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_f423890719e244728be0f84ccd312f2d.setIcon(icon_39a75b82e5d14d31b1f305c0262b67b7);


              var popup_8ca73acf69b048c587c4766927f93f98 = L.popup({maxWidth: '300'});


                  var html_6a2d855497704b478786d6d4382dad31 = $('<div id="html_6a2d855497704b478786d6d4382dad31" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>15</th></tr><tr><td>Trip # </td><td align="right">6887</td></tr><tr><td>Distance </td><td align="right">73 miles</td><tr><td>Date</td><td align="right">2018-01-13 20:19:54.587067</td></tr></table></div>')[0];
                  popup_8ca73acf69b048c587c4766927f93f98.setContent(html_6a2d855497704b478786d6d4382dad31);


              marker_f423890719e244728be0f84ccd312f2d.bindPopup(popup_8ca73acf69b048c587c4766927f93f98);





              var marker_24a32e6c620141ad8de6a3ae187b8158 = L.marker(
                  [43.97921051,-75.63158607],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_52c9085eaad84e66816390021de743d2 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_24a32e6c620141ad8de6a3ae187b8158.setIcon(icon_52c9085eaad84e66816390021de743d2);


              var popup_00a5aed990a44f8eb58d94e92254549c = L.popup({maxWidth: '300'});


                  var html_5f61c12a8f5042c896da94219481e199 = $('<div id="html_5f61c12a8f5042c896da94219481e199" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>15</th></tr><tr><td>Trip # </td><td align="right">6887</td></tr><tr><td>Distance </td><td align="right">73 miles</td><tr><td>Date</td><td align="right">2018-01-13 20:19:54.587067</td></tr></table></div>')[0];
                  popup_00a5aed990a44f8eb58d94e92254549c.setContent(html_5f61c12a8f5042c896da94219481e199);


              marker_24a32e6c620141ad8de6a3ae187b8158.bindPopup(popup_00a5aed990a44f8eb58d94e92254549c);





              var marker_6bc143905077459590dedbf046562e98 = L.marker(
                  [43.90918273,-75.50244345],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_f2b20b211b624fdbbbf239286bb8cc28 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_6bc143905077459590dedbf046562e98.setIcon(icon_f2b20b211b624fdbbbf239286bb8cc28);


              var popup_19f4b6aefe4f42a3a3aed4e3bc816262 = L.popup({maxWidth: '300'});


                  var html_f5d8137f88bf47e6935899fbad1b853b = $('<div id="html_f5d8137f88bf47e6935899fbad1b853b" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>55</th></tr><tr><td>Trip # </td><td align="right">7569</td></tr><tr><td>Distance </td><td align="right">58 miles</td><tr><td>Date</td><td align="right">2018-01-08 08:36:01.16848</td></tr></table></div>')[0];
                  popup_19f4b6aefe4f42a3a3aed4e3bc816262.setContent(html_f5d8137f88bf47e6935899fbad1b853b);


              marker_6bc143905077459590dedbf046562e98.bindPopup(popup_19f4b6aefe4f42a3a3aed4e3bc816262);





              var marker_54ad1b816e714b65ab3a86818ffaa4ef = L.marker(
                  [44.73743484,-75.14628783],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_c474acb6f40c411e8656cc8ae3b5abe2 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_54ad1b816e714b65ab3a86818ffaa4ef.setIcon(icon_c474acb6f40c411e8656cc8ae3b5abe2);


              var popup_817717d79f4f4949971b012e198219e1 = L.popup({maxWidth: '300'});


                  var html_1fad9c818f0645cbbff6401c67a5d5e4 = $('<div id="html_1fad9c818f0645cbbff6401c67a5d5e4" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>55</th></tr><tr><td>Trip # </td><td align="right">7569</td></tr><tr><td>Distance </td><td align="right">58 miles</td><tr><td>Date</td><td align="right">2018-01-08 08:36:01.16848</td></tr></table></div>')[0];
                  popup_817717d79f4f4949971b012e198219e1.setContent(html_1fad9c818f0645cbbff6401c67a5d5e4);


              marker_54ad1b816e714b65ab3a86818ffaa4ef.bindPopup(popup_817717d79f4f4949971b012e198219e1);





              var marker_dce8452ffeff4ac4b2d8f69e11f3064e = L.marker(
                  [44.92495252,-74.87373005],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_0cb7edd9940447a8b26a8ef37cae7661 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_dce8452ffeff4ac4b2d8f69e11f3064e.setIcon(icon_0cb7edd9940447a8b26a8ef37cae7661);


              var popup_2a01f70187464aee867e93282ebb2da9 = L.popup({maxWidth: '300'});


                  var html_a15d595dfa904e84b72dbe261b3957a4 = $('<div id="html_a15d595dfa904e84b72dbe261b3957a4" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>87</th></tr><tr><td>Trip # </td><td align="right">7711</td></tr><tr><td>Distance </td><td align="right">76 miles</td><tr><td>Date</td><td align="right">2018-01-08 11:44:59.295658</td></tr></table></div>')[0];
                  popup_2a01f70187464aee867e93282ebb2da9.setContent(html_a15d595dfa904e84b72dbe261b3957a4);


              marker_dce8452ffeff4ac4b2d8f69e11f3064e.bindPopup(popup_2a01f70187464aee867e93282ebb2da9);





              var marker_aadce9ecb91b412cb0af661980366762 = L.marker(
                  [43.887950472076206,-75.5130044869492],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_96e5a0611f2643348dd45439115a86e8 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_aadce9ecb91b412cb0af661980366762.setIcon(icon_96e5a0611f2643348dd45439115a86e8);


              var popup_bc3a7aca029947af82e9f90be624917b = L.popup({maxWidth: '300'});


                  var html_6e7d566385b644c1b0ea848aa43ee31d = $('<div id="html_6e7d566385b644c1b0ea848aa43ee31d" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>87</th></tr><tr><td>Trip # </td><td align="right">7711</td></tr><tr><td>Distance </td><td align="right">76 miles</td><tr><td>Date</td><td align="right">2018-01-08 11:44:59.295658</td></tr></table></div>')[0];
                  popup_bc3a7aca029947af82e9f90be624917b.setContent(html_6e7d566385b644c1b0ea848aa43ee31d);


              marker_aadce9ecb91b412cb0af661980366762.bindPopup(popup_bc3a7aca029947af82e9f90be624917b);





              var marker_fdd2583c02074f4c8481eca73509a8a4 = L.marker(
                  [44.12508498,-76.34027887],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_01407879fba64c3b8a0ad471a6713ada = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_fdd2583c02074f4c8481eca73509a8a4.setIcon(icon_01407879fba64c3b8a0ad471a6713ada);


              var popup_6030f4546e2a4e289d81eccc10a5f525 = L.popup({maxWidth: '300'});


                  var html_c6068a779d534716b16eddec4fe3f50e = $('<div id="html_c6068a779d534716b16eddec4fe3f50e" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>7</th></tr><tr><td>Trip # </td><td align="right">7730</td></tr><tr><td>Distance </td><td align="right">52 miles</td><tr><td>Date</td><td align="right">2018-01-08 09:19:53.670549</td></tr></table></div>')[0];
                  popup_6030f4546e2a4e289d81eccc10a5f525.setContent(html_c6068a779d534716b16eddec4fe3f50e);


              marker_fdd2583c02074f4c8481eca73509a8a4.bindPopup(popup_6030f4546e2a4e289d81eccc10a5f525);





              var marker_166304224f51489e993b920b73aa787d = L.marker(
                  [43.71528429,-75.41538373],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_1b77d9d014844762a45ea50766322161 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_166304224f51489e993b920b73aa787d.setIcon(icon_1b77d9d014844762a45ea50766322161);


              var popup_1ffa0ca33ac14d70ba12c291c18499ee = L.popup({maxWidth: '300'});


                  var html_0effd27d94944dd5ad7066c7bf744437 = $('<div id="html_0effd27d94944dd5ad7066c7bf744437" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>7</th></tr><tr><td>Trip # </td><td align="right">7730</td></tr><tr><td>Distance </td><td align="right">52 miles</td><tr><td>Date</td><td align="right">2018-01-08 09:19:53.670549</td></tr></table></div>')[0];
                  popup_1ffa0ca33ac14d70ba12c291c18499ee.setContent(html_0effd27d94944dd5ad7066c7bf744437);


              marker_166304224f51489e993b920b73aa787d.bindPopup(popup_1ffa0ca33ac14d70ba12c291c18499ee);





              var marker_e4de16847594424eaa85624a6bdd9a14 = L.marker(
                  [43.71528429,-75.41538373],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_4487062e8a344f739e3cafc42d34d05e = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_e4de16847594424eaa85624a6bdd9a14.setIcon(icon_4487062e8a344f739e3cafc42d34d05e);


              var popup_c415f01b5c4e40fea2fa19e95cd6ad51 = L.popup({maxWidth: '300'});


                  var html_a8048cac64834fdd8a0fbeec6ad8d2b4 = $('<div id="html_a8048cac64834fdd8a0fbeec6ad8d2b4" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>12</th></tr><tr><td>Trip # </td><td align="right">7733</td></tr><tr><td>Distance </td><td align="right">71 miles</td><tr><td>Date</td><td align="right">2018-01-08 16:03:05.540733</td></tr></table></div>')[0];
                  popup_c415f01b5c4e40fea2fa19e95cd6ad51.setContent(html_a8048cac64834fdd8a0fbeec6ad8d2b4);


              marker_e4de16847594424eaa85624a6bdd9a14.bindPopup(popup_c415f01b5c4e40fea2fa19e95cd6ad51);





              var marker_1b95b22648594fb790a955e4eb63d7ab = L.marker(
                  [44.76761511,-75.29767656],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_d07a6227c7254b5fa1b522feae654d44 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_1b95b22648594fb790a955e4eb63d7ab.setIcon(icon_d07a6227c7254b5fa1b522feae654d44);


              var popup_ad7bd55bd2e54a5e9dceccf1cf5f1128 = L.popup({maxWidth: '300'});


                  var html_bf3187b31cb84b2ba392666f35f0520e = $('<div id="html_bf3187b31cb84b2ba392666f35f0520e" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>12</th></tr><tr><td>Trip # </td><td align="right">7733</td></tr><tr><td>Distance </td><td align="right">71 miles</td><tr><td>Date</td><td align="right">2018-01-08 16:03:05.540733</td></tr></table></div>')[0];
                  popup_ad7bd55bd2e54a5e9dceccf1cf5f1128.setContent(html_bf3187b31cb84b2ba392666f35f0520e);


              marker_1b95b22648594fb790a955e4eb63d7ab.bindPopup(popup_ad7bd55bd2e54a5e9dceccf1cf5f1128);





              var marker_2ca20585f54d476d9739b185c4a46a5e = L.marker(
                  [44.09577075,-76.19146802],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_1a8606efdc2e4ddeb87eb849f891251a = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_2ca20585f54d476d9739b185c4a46a5e.setIcon(icon_1a8606efdc2e4ddeb87eb849f891251a);


              var popup_8d38c30484ab49b1bfc22e8b59da6638 = L.popup({maxWidth: '300'});


                  var html_b6720d28b1734ed098d647211a08cf45 = $('<div id="html_b6720d28b1734ed098d647211a08cf45" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>13</th></tr><tr><td>Trip # </td><td align="right">7785</td></tr><tr><td>Distance </td><td align="right">52 miles</td><tr><td>Date</td><td align="right">2018-01-08 13:00:42.284944</td></tr></table></div>')[0];
                  popup_8d38c30484ab49b1bfc22e8b59da6638.setContent(html_b6720d28b1734ed098d647211a08cf45);


              marker_2ca20585f54d476d9739b185c4a46a5e.bindPopup(popup_8d38c30484ab49b1bfc22e8b59da6638);





              var marker_9db3568f88d449afa2449bddf69c60c6 = L.marker(
                  [43.55203014,-75.43866392],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_0ddceaf3db3a4fb7946b660077e6b8e0 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_9db3568f88d449afa2449bddf69c60c6.setIcon(icon_0ddceaf3db3a4fb7946b660077e6b8e0);


              var popup_34dfe4f836d541b0a5771a750bf73050 = L.popup({maxWidth: '300'});


                  var html_c426788e04e049ed9346fb8403db10e6 = $('<div id="html_c426788e04e049ed9346fb8403db10e6" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>13</th></tr><tr><td>Trip # </td><td align="right">7785</td></tr><tr><td>Distance </td><td align="right">52 miles</td><tr><td>Date</td><td align="right">2018-01-08 13:00:42.284944</td></tr></table></div>')[0];
                  popup_34dfe4f836d541b0a5771a750bf73050.setContent(html_c426788e04e049ed9346fb8403db10e6);


              marker_9db3568f88d449afa2449bddf69c60c6.bindPopup(popup_34dfe4f836d541b0a5771a750bf73050);





              var marker_4d7cb0467b6a4abcb7643ff73dae095d = L.marker(
                  [43.96697595,-75.87922097],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_d310ab46215f4ca4a8e24ad748212e81 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_4d7cb0467b6a4abcb7643ff73dae095d.setIcon(icon_d310ab46215f4ca4a8e24ad748212e81);


              var popup_71d925aa601749eaabff76a784efbff3 = L.popup({maxWidth: '300'});


                  var html_ac1cfa2ef7014473ae23f1bc6e447580 = $('<div id="html_ac1cfa2ef7014473ae23f1bc6e447580" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>23</th></tr><tr><td>Trip # </td><td align="right">7854</td></tr><tr><td>Distance </td><td align="right">52 miles</td><tr><td>Date</td><td align="right">2018-01-09 00:47:00.041694</td></tr></table></div>')[0];
                  popup_71d925aa601749eaabff76a784efbff3.setContent(html_ac1cfa2ef7014473ae23f1bc6e447580);


              marker_4d7cb0467b6a4abcb7643ff73dae095d.bindPopup(popup_71d925aa601749eaabff76a784efbff3);





              var marker_4128da85ff49407f89485f1e9b9f7ffc = L.marker(
                  [43.34414389,-76.50968849],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_fc208b70b74b481481feca1a89426a64 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_4128da85ff49407f89485f1e9b9f7ffc.setIcon(icon_fc208b70b74b481481feca1a89426a64);


              var popup_e0ce112e4aca46678303a630644eae3d = L.popup({maxWidth: '300'});


                  var html_53a0a40fe04543b1965011a0cd9de7ab = $('<div id="html_53a0a40fe04543b1965011a0cd9de7ab" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>23</th></tr><tr><td>Trip # </td><td align="right">7854</td></tr><tr><td>Distance </td><td align="right">52 miles</td><tr><td>Date</td><td align="right">2018-01-09 00:47:00.041694</td></tr></table></div>')[0];
                  popup_e0ce112e4aca46678303a630644eae3d.setContent(html_53a0a40fe04543b1965011a0cd9de7ab);


              marker_4128da85ff49407f89485f1e9b9f7ffc.bindPopup(popup_e0ce112e4aca46678303a630644eae3d);





              var marker_c1a1ccafce554f5a8c2d2eadaf70fb15 = L.marker(
                  [43.04589497,-76.13666829],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_7a605060ba234dd9b209b6b30bf4393d = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_c1a1ccafce554f5a8c2d2eadaf70fb15.setIcon(icon_7a605060ba234dd9b209b6b30bf4393d);


              var popup_0432dc08f4bb49f99489118e1bd2989b = L.popup({maxWidth: '300'});


                  var html_3e3186f76a36476080e70fce8afcdd2a = $('<div id="html_3e3186f76a36476080e70fce8afcdd2a" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>85</th></tr><tr><td>Trip # </td><td align="right">7880</td></tr><tr><td>Distance </td><td align="right">63 miles</td><tr><td>Date</td><td align="right">2018-01-09 14:12:19.80187</td></tr></table></div>')[0];
                  popup_0432dc08f4bb49f99489118e1bd2989b.setContent(html_3e3186f76a36476080e70fce8afcdd2a);


              marker_c1a1ccafce554f5a8c2d2eadaf70fb15.bindPopup(popup_0432dc08f4bb49f99489118e1bd2989b);





              var marker_1595cf66a5be4e05a7235fc3ca315d9f = L.marker(
                  [43.97589879,-75.91927807],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_390d60c522124e3987332f8178ead00a = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_1595cf66a5be4e05a7235fc3ca315d9f.setIcon(icon_390d60c522124e3987332f8178ead00a);


              var popup_763933b27af541b8b49c8b2a8c2add22 = L.popup({maxWidth: '300'});


                  var html_338d90e6fb024519beb8cb430a501b9a = $('<div id="html_338d90e6fb024519beb8cb430a501b9a" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>85</th></tr><tr><td>Trip # </td><td align="right">7880</td></tr><tr><td>Distance </td><td align="right">63 miles</td><tr><td>Date</td><td align="right">2018-01-09 14:12:19.80187</td></tr></table></div>')[0];
                  popup_763933b27af541b8b49c8b2a8c2add22.setContent(html_338d90e6fb024519beb8cb430a501b9a);


              marker_1595cf66a5be4e05a7235fc3ca315d9f.bindPopup(popup_763933b27af541b8b49c8b2a8c2add22);





              var marker_47795fac47f54966863d633446a5ce10 = L.marker(
                  [43.03829552,-76.13859658],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_1b1de3a4823b4e049f510e1f08266be7 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_47795fac47f54966863d633446a5ce10.setIcon(icon_1b1de3a4823b4e049f510e1f08266be7);


              var popup_d8dfb94c45b2464696af0a8bb96bac00 = L.popup({maxWidth: '300'});


                  var html_1282387007ea465a9a792df2918ee4b6 = $('<div id="html_1282387007ea465a9a792df2918ee4b6" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>135</th></tr><tr><td>Trip # </td><td align="right">8078</td></tr><tr><td>Distance </td><td align="right">71 miles</td><tr><td>Date</td><td align="right">2018-01-12 13:18:06.736117</td></tr></table></div>')[0];
                  popup_d8dfb94c45b2464696af0a8bb96bac00.setContent(html_1282387007ea465a9a792df2918ee4b6);


              marker_47795fac47f54966863d633446a5ce10.bindPopup(popup_d8dfb94c45b2464696af0a8bb96bac00);





              var marker_af063edd24a84e2f86b0bdefe8336a14 = L.marker(
                  [44.09574117,-76.19155224],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_dde834f9aa1b489d9aea9b12f1e5dc29 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_af063edd24a84e2f86b0bdefe8336a14.setIcon(icon_dde834f9aa1b489d9aea9b12f1e5dc29);


              var popup_4b9c2a6279984236a8e014b1fc1f1cbc = L.popup({maxWidth: '300'});


                  var html_f3d651fa5aac4f1c9b5c73ce0207202c = $('<div id="html_f3d651fa5aac4f1c9b5c73ce0207202c" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>135</th></tr><tr><td>Trip # </td><td align="right">8078</td></tr><tr><td>Distance </td><td align="right">71 miles</td><tr><td>Date</td><td align="right">2018-01-12 13:18:06.736117</td></tr></table></div>')[0];
                  popup_4b9c2a6279984236a8e014b1fc1f1cbc.setContent(html_f3d651fa5aac4f1c9b5c73ce0207202c);


              marker_af063edd24a84e2f86b0bdefe8336a14.bindPopup(popup_4b9c2a6279984236a8e014b1fc1f1cbc);





              var marker_0aa9095fbdae42208541cfe37a9c3808 = L.marker(
                  [43.1622586,-76.31718031],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_255b2a46a48b41089a2d56270c76dc40 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_0aa9095fbdae42208541cfe37a9c3808.setIcon(icon_255b2a46a48b41089a2d56270c76dc40);


              var popup_3b3ecf2c76ab44ab9311f26960d101a2 = L.popup({maxWidth: '300'});


                  var html_781ffaaeba49472983432574e3a81e17 = $('<div id="html_781ffaaeba49472983432574e3a81e17" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>85</th></tr><tr><td>Trip # </td><td align="right">8161</td></tr><tr><td>Distance </td><td align="right">57 miles</td><tr><td>Date</td><td align="right">2018-01-12 17:41:15.380793</td></tr></table></div>')[0];
                  popup_3b3ecf2c76ab44ab9311f26960d101a2.setContent(html_781ffaaeba49472983432574e3a81e17);


              marker_0aa9095fbdae42208541cfe37a9c3808.bindPopup(popup_3b3ecf2c76ab44ab9311f26960d101a2);





              var marker_0ef83a13e75f463ab12238b3d5d08d88 = L.marker(
                  [43.96867871,-75.91031788],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_5bbdf80d77c8425099f8f1bebf29eaa4 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_0ef83a13e75f463ab12238b3d5d08d88.setIcon(icon_5bbdf80d77c8425099f8f1bebf29eaa4);


              var popup_7698c976515446bc95102f865318fa92 = L.popup({maxWidth: '300'});


                  var html_6599466e6e6f41c1857a640d66737768 = $('<div id="html_6599466e6e6f41c1857a640d66737768" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>85</th></tr><tr><td>Trip # </td><td align="right">8161</td></tr><tr><td>Distance </td><td align="right">57 miles</td><tr><td>Date</td><td align="right">2018-01-12 17:41:15.380793</td></tr></table></div>')[0];
                  popup_7698c976515446bc95102f865318fa92.setContent(html_6599466e6e6f41c1857a640d66737768);


              marker_0ef83a13e75f463ab12238b3d5d08d88.bindPopup(popup_7698c976515446bc95102f865318fa92);





              var marker_1d8b2cefce8b4eccaec7ed73b17b3837 = L.marker(
                  [43.0899701686576,-76.1890343762934],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_5534ec2bdc5548cab206ff5247cc93d2 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_1d8b2cefce8b4eccaec7ed73b17b3837.setIcon(icon_5534ec2bdc5548cab206ff5247cc93d2);


              var popup_9753522c5a584b4aaa9918dd0e1facf2 = L.popup({maxWidth: '300'});


                  var html_ec6253313bf947ffa13e6ef15ecec741 = $('<div id="html_ec6253313bf947ffa13e6ef15ecec741" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>93</th></tr><tr><td>Trip # </td><td align="right">8170</td></tr><tr><td>Distance </td><td align="right">64 miles</td><tr><td>Date</td><td align="right">2018-01-12 19:50:23.512722</td></tr></table></div>')[0];
                  popup_9753522c5a584b4aaa9918dd0e1facf2.setContent(html_ec6253313bf947ffa13e6ef15ecec741);


              marker_1d8b2cefce8b4eccaec7ed73b17b3837.bindPopup(popup_9753522c5a584b4aaa9918dd0e1facf2);





              var marker_e729378bd86e45b5b723af340fdbd061 = L.marker(
                  [43.9975255122408,-75.7454051356763],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_cd3325837776447792ff90dd649b2328 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_e729378bd86e45b5b723af340fdbd061.setIcon(icon_cd3325837776447792ff90dd649b2328);


              var popup_3ec4ebcfd4374bf4a191302261dcbabf = L.popup({maxWidth: '300'});


                  var html_1c616c79673544c69bb7889ed8f07a3a = $('<div id="html_1c616c79673544c69bb7889ed8f07a3a" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>93</th></tr><tr><td>Trip # </td><td align="right">8170</td></tr><tr><td>Distance </td><td align="right">64 miles</td><tr><td>Date</td><td align="right">2018-01-12 19:50:23.512722</td></tr></table></div>')[0];
                  popup_3ec4ebcfd4374bf4a191302261dcbabf.setContent(html_1c616c79673544c69bb7889ed8f07a3a);


              marker_e729378bd86e45b5b723af340fdbd061.bindPopup(popup_3ec4ebcfd4374bf4a191302261dcbabf);





              var marker_e59c1ea6890e46a098ea6ab92c2a82a0 = L.marker(
                  [43.97668777,-75.61999181],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_5d26456daf1f4a649c86795cc4e829b5 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_e59c1ea6890e46a098ea6ab92c2a82a0.setIcon(icon_5d26456daf1f4a649c86795cc4e829b5);


              var popup_355f940182384d9dba417c8054c52e8e = L.popup({maxWidth: '300'});


                  var html_5142f6c1abec40f7bcf0c922a976e0c0 = $('<div id="html_5142f6c1abec40f7bcf0c922a976e0c0" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>89</th></tr><tr><td>Trip # </td><td align="right">8019</td></tr><tr><td>Distance </td><td align="right">73 miles</td><tr><td>Date</td><td align="right">2018-01-15 15:26:21.484728</td></tr></table></div>')[0];
                  popup_355f940182384d9dba417c8054c52e8e.setContent(html_5142f6c1abec40f7bcf0c922a976e0c0);


              marker_e59c1ea6890e46a098ea6ab92c2a82a0.bindPopup(popup_355f940182384d9dba417c8054c52e8e);





              var marker_e92de82f6c8e4046be8bd91f9588cf2f = L.marker(
                  [44.8412521,-74.6851298],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_bb37d0fd1be149b58447bcc89d51ccf1 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_e92de82f6c8e4046be8bd91f9588cf2f.setIcon(icon_bb37d0fd1be149b58447bcc89d51ccf1);


              var popup_d30fe44331254c9ca3556baff6437060 = L.popup({maxWidth: '300'});


                  var html_da0a2cc6a4fd41fd9f1942863d252e7d = $('<div id="html_da0a2cc6a4fd41fd9f1942863d252e7d" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>89</th></tr><tr><td>Trip # </td><td align="right">8019</td></tr><tr><td>Distance </td><td align="right">73 miles</td><tr><td>Date</td><td align="right">2018-01-15 15:26:21.484728</td></tr></table></div>')[0];
                  popup_d30fe44331254c9ca3556baff6437060.setContent(html_da0a2cc6a4fd41fd9f1942863d252e7d);


              marker_e92de82f6c8e4046be8bd91f9588cf2f.bindPopup(popup_d30fe44331254c9ca3556baff6437060);





              var marker_bcdf3c8da6414645aec902303e19401b = L.marker(
                  [44.62501132,-75.09524811],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_c18c50ea7ec249bbbd220c6845aae26d = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_bcdf3c8da6414645aec902303e19401b.setIcon(icon_c18c50ea7ec249bbbd220c6845aae26d);


              var popup_c0b70e48ff3e45bc8fae9b130b084da7 = L.popup({maxWidth: '300'});


                  var html_9cc6c01bfade4e3394ec55180799aa73 = $('<div id="html_9cc6c01bfade4e3394ec55180799aa73" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>87</th></tr><tr><td>Trip # </td><td align="right">8096</td></tr><tr><td>Distance </td><td align="right">53 miles</td><tr><td>Date</td><td align="right">2018-01-15 15:04:58.121717</td></tr></table></div>')[0];
                  popup_c0b70e48ff3e45bc8fae9b130b084da7.setContent(html_9cc6c01bfade4e3394ec55180799aa73);


              marker_bcdf3c8da6414645aec902303e19401b.bindPopup(popup_c0b70e48ff3e45bc8fae9b130b084da7);





              var marker_b7a8c603822b41528fa27bd60d0eb250 = L.marker(
                  [43.887921429319896,-75.5130230125736],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_dcce9387ee3c4d4db03833699af180c8 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_b7a8c603822b41528fa27bd60d0eb250.setIcon(icon_dcce9387ee3c4d4db03833699af180c8);


              var popup_793faf1be53145bcb15fba091dd15bbb = L.popup({maxWidth: '300'});


                  var html_d62aa91799e044ae8c697b3d7f67f89c = $('<div id="html_d62aa91799e044ae8c697b3d7f67f89c" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>87</th></tr><tr><td>Trip # </td><td align="right">8096</td></tr><tr><td>Distance </td><td align="right">53 miles</td><tr><td>Date</td><td align="right">2018-01-15 15:04:58.121717</td></tr></table></div>')[0];
                  popup_793faf1be53145bcb15fba091dd15bbb.setContent(html_d62aa91799e044ae8c697b3d7f67f89c);


              marker_b7a8c603822b41528fa27bd60d0eb250.bindPopup(popup_793faf1be53145bcb15fba091dd15bbb);





              var marker_920ea398b01646649f82ad52d1e650e7 = L.marker(
                  [43.7153155,-75.41553612],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_f06c29a3fbab4eddb4e391f542e5c707 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_920ea398b01646649f82ad52d1e650e7.setIcon(icon_f06c29a3fbab4eddb4e391f542e5c707);


              var popup_fa2e33a633704c0486eae0f9d7a9d1eb = L.popup({maxWidth: '300'});


                  var html_c6248c95c19848fbae2eae34c369cfb8 = $('<div id="html_c6248c95c19848fbae2eae34c369cfb8" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>130</th></tr><tr><td>Trip # </td><td align="right">8134</td></tr><tr><td>Distance </td><td align="right">66 miles</td><tr><td>Date</td><td align="right">2018-01-15 16:31:11.197432</td></tr></table></div>')[0];
                  popup_fa2e33a633704c0486eae0f9d7a9d1eb.setContent(html_c6248c95c19848fbae2eae34c369cfb8);


              marker_920ea398b01646649f82ad52d1e650e7.bindPopup(popup_fa2e33a633704c0486eae0f9d7a9d1eb);





              var marker_d47129aaf7c443ce9792e0697533e33c = L.marker(
                  [44.69908034,-75.46242503],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_5e1bfea531234a4ba8af0b7249551dc6 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_d47129aaf7c443ce9792e0697533e33c.setIcon(icon_5e1bfea531234a4ba8af0b7249551dc6);


              var popup_0866be29c9474472b513613790e492e5 = L.popup({maxWidth: '300'});


                  var html_381a62627ca944dba873effdb4d5e4c0 = $('<div id="html_381a62627ca944dba873effdb4d5e4c0" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>130</th></tr><tr><td>Trip # </td><td align="right">8134</td></tr><tr><td>Distance </td><td align="right">66 miles</td><tr><td>Date</td><td align="right">2018-01-15 16:31:11.197432</td></tr></table></div>')[0];
                  popup_0866be29c9474472b513613790e492e5.setContent(html_381a62627ca944dba873effdb4d5e4c0);


              marker_d47129aaf7c443ce9792e0697533e33c.bindPopup(popup_0866be29c9474472b513613790e492e5);





              var marker_b0a7f2af5b5d4037bf19a59f7ace2572 = L.marker(
                  [44.17652065,-75.79194659],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_f7d3f772c5654b468b134fd460404444 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_b0a7f2af5b5d4037bf19a59f7ace2572.setIcon(icon_f7d3f772c5654b468b134fd460404444);


              var popup_540ab3051ff04707a69fc485e6ea7663 = L.popup({maxWidth: '300'});


                  var html_a79a84c8754549a1bfdaede78b35a6f5 = $('<div id="html_a79a84c8754549a1bfdaede78b35a6f5" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>129</th></tr><tr><td>Trip # </td><td align="right">8207</td></tr><tr><td>Distance </td><td align="right">66 miles</td><tr><td>Date</td><td align="right">2018-01-15 12:17:37.795038</td></tr></table></div>')[0];
                  popup_540ab3051ff04707a69fc485e6ea7663.setContent(html_a79a84c8754549a1bfdaede78b35a6f5);


              marker_b0a7f2af5b5d4037bf19a59f7ace2572.bindPopup(popup_540ab3051ff04707a69fc485e6ea7663);





              var marker_e5b4e4fc773f47f4be2e13d60c0d0b45 = L.marker(
                  [44.92487814,-74.87398244],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_3bed4fbd7e544c469befadc6e8739f78 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_e5b4e4fc773f47f4be2e13d60c0d0b45.setIcon(icon_3bed4fbd7e544c469befadc6e8739f78);


              var popup_cc17a554482a4db6a86abee7908ee38b = L.popup({maxWidth: '300'});


                  var html_ae187bfb4d64453c86623109194c4fa7 = $('<div id="html_ae187bfb4d64453c86623109194c4fa7" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>129</th></tr><tr><td>Trip # </td><td align="right">8207</td></tr><tr><td>Distance </td><td align="right">66 miles</td><tr><td>Date</td><td align="right">2018-01-15 12:17:37.795038</td></tr></table></div>')[0];
                  popup_cc17a554482a4db6a86abee7908ee38b.setContent(html_ae187bfb4d64453c86623109194c4fa7);


              marker_e5b4e4fc773f47f4be2e13d60c0d0b45.bindPopup(popup_cc17a554482a4db6a86abee7908ee38b);





              var marker_4e93765e04e54c22ae4fc508a62879af = L.marker(
                  [44.12500838,-76.34036482],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_4038aed354da416c946d6451168f814e = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_4e93765e04e54c22ae4fc508a62879af.setIcon(icon_4038aed354da416c946d6451168f814e);


              var popup_d74bec32e90a4877872b322359b90b87 = L.popup({maxWidth: '300'});


                  var html_bb516a85f7f9465cbbd032e3be006420 = $('<div id="html_bb516a85f7f9465cbbd032e3be006420" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>13</th></tr><tr><td>Trip # </td><td align="right">8243</td></tr><tr><td>Distance </td><td align="right">58 miles</td><tr><td>Date</td><td align="right">2018-01-15 13:50:57.781322</td></tr></table></div>')[0];
                  popup_d74bec32e90a4877872b322359b90b87.setContent(html_bb516a85f7f9465cbbd032e3be006420);


              marker_4e93765e04e54c22ae4fc508a62879af.bindPopup(popup_d74bec32e90a4877872b322359b90b87);





              var marker_4e3aea26805d437bbcb375cc2c242b87 = L.marker(
                  [43.55223982,-75.43857759],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_3d2f9aeca144453e924eefc8244793a8 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_4e3aea26805d437bbcb375cc2c242b87.setIcon(icon_3d2f9aeca144453e924eefc8244793a8);


              var popup_9a70460a4fb241ae83a3e2a9c40b0824 = L.popup({maxWidth: '300'});


                  var html_558844d9f4fb4ab3b5db7dd09409e94f = $('<div id="html_558844d9f4fb4ab3b5db7dd09409e94f" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>13</th></tr><tr><td>Trip # </td><td align="right">8243</td></tr><tr><td>Distance </td><td align="right">58 miles</td><tr><td>Date</td><td align="right">2018-01-15 13:50:57.781322</td></tr></table></div>')[0];
                  popup_9a70460a4fb241ae83a3e2a9c40b0824.setContent(html_558844d9f4fb4ab3b5db7dd09409e94f);


              marker_4e3aea26805d437bbcb375cc2c242b87.bindPopup(popup_9a70460a4fb241ae83a3e2a9c40b0824);





              var marker_ccd3a0fd5ec34e9a99c64c9f8198d9a0 = L.marker(
                  [43.61462219,-75.36081703],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_56665d7692ec4c1ab2ecd9cd092938c3 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_ccd3a0fd5ec34e9a99c64c9f8198d9a0.setIcon(icon_56665d7692ec4c1ab2ecd9cd092938c3);


              var popup_0882a89bf92f4e9e979e8f7b006cd87f = L.popup({maxWidth: '300'});


                  var html_130984f57d6c496e83af02afc200dab1 = $('<div id="html_130984f57d6c496e83af02afc200dab1" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>61</th></tr><tr><td>Trip # </td><td align="right">8317</td></tr><tr><td>Distance </td><td align="right">54 miles</td><tr><td>Date</td><td align="right">2018-01-16 12:18:06.197626</td></tr></table></div>')[0];
                  popup_0882a89bf92f4e9e979e8f7b006cd87f.setContent(html_130984f57d6c496e83af02afc200dab1);


              marker_ccd3a0fd5ec34e9a99c64c9f8198d9a0.bindPopup(popup_0882a89bf92f4e9e979e8f7b006cd87f);





              var marker_d3934d8cf73240249a0315ba3bb32d14 = L.marker(
                  [43.04627878,-76.13685349],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_e3bdc73d1e6d42f99008ffbe4d7e4c8e = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_d3934d8cf73240249a0315ba3bb32d14.setIcon(icon_e3bdc73d1e6d42f99008ffbe4d7e4c8e);


              var popup_d5b04d00ae4c4b81bb860a5d785faa90 = L.popup({maxWidth: '300'});


                  var html_f72162e0aa7044c08e8c2c2f2decbfa4 = $('<div id="html_f72162e0aa7044c08e8c2c2f2decbfa4" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>61</th></tr><tr><td>Trip # </td><td align="right">8317</td></tr><tr><td>Distance </td><td align="right">54 miles</td><tr><td>Date</td><td align="right">2018-01-16 12:18:06.197626</td></tr></table></div>')[0];
                  popup_d5b04d00ae4c4b81bb860a5d785faa90.setContent(html_f72162e0aa7044c08e8c2c2f2decbfa4);


              marker_d3934d8cf73240249a0315ba3bb32d14.bindPopup(popup_d5b04d00ae4c4b81bb860a5d785faa90);





              var marker_73caf7f545f346458ed9f510bca4ff85 = L.marker(
                  [44.69188257,-75.49995473],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_668440e22a9b4ff28719bf31649b9212 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_73caf7f545f346458ed9f510bca4ff85.setIcon(icon_668440e22a9b4ff28719bf31649b9212);


              var popup_45cf9ea63d19428b9f549534579e1b3d = L.popup({maxWidth: '300'});


                  var html_2afc211f6aad4531a0e7c36f17c40df8 = $('<div id="html_2afc211f6aad4531a0e7c36f17c40df8" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>69</th></tr><tr><td>Trip # </td><td align="right">8360</td></tr><tr><td>Distance </td><td align="right">52 miles</td><tr><td>Date</td><td align="right">2018-01-16 15:36:41.926825</td></tr></table></div>')[0];
                  popup_45cf9ea63d19428b9f549534579e1b3d.setContent(html_2afc211f6aad4531a0e7c36f17c40df8);


              marker_73caf7f545f346458ed9f510bca4ff85.bindPopup(popup_45cf9ea63d19428b9f549534579e1b3d);





              var marker_413f365326f74e0e99aaa85c20f49d91 = L.marker(
                  [43.9702078,-75.88673394],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_6e75b40faf034b8d95a96de09ca46b02 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_413f365326f74e0e99aaa85c20f49d91.setIcon(icon_6e75b40faf034b8d95a96de09ca46b02);


              var popup_e177abd95d564017944fab598ce28f7b = L.popup({maxWidth: '300'});


                  var html_5ec14aebd5bd44fbb25dd453090bfd3a = $('<div id="html_5ec14aebd5bd44fbb25dd453090bfd3a" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>69</th></tr><tr><td>Trip # </td><td align="right">8360</td></tr><tr><td>Distance </td><td align="right">52 miles</td><tr><td>Date</td><td align="right">2018-01-16 15:36:41.926825</td></tr></table></div>')[0];
                  popup_e177abd95d564017944fab598ce28f7b.setContent(html_5ec14aebd5bd44fbb25dd453090bfd3a);


              marker_413f365326f74e0e99aaa85c20f49d91.bindPopup(popup_e177abd95d564017944fab598ce28f7b);





              var marker_4eabc822148b4dd8b903db6197dfd00d = L.marker(
                  [44.70636251,-73.50500033],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_6e2f8549d22d419fb78bba1994a8c4f5 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_4eabc822148b4dd8b903db6197dfd00d.setIcon(icon_6e2f8549d22d419fb78bba1994a8c4f5);


              var popup_30b0ce2a61eb40f6bfcdd02890196180 = L.popup({maxWidth: '300'});


                  var html_6fdfb0a7c1c44e7d930fc5eda9b7ee98 = $('<div id="html_6fdfb0a7c1c44e7d930fc5eda9b7ee98" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">8369</td></tr><tr><td>Distance </td><td align="right">76 miles</td><tr><td>Date</td><td align="right">2018-01-18 14:39:05.643771</td></tr></table></div>')[0];
                  popup_30b0ce2a61eb40f6bfcdd02890196180.setContent(html_6fdfb0a7c1c44e7d930fc5eda9b7ee98);


              marker_4eabc822148b4dd8b903db6197dfd00d.bindPopup(popup_30b0ce2a61eb40f6bfcdd02890196180);





              var marker_efa825ca81c9473e964684b6c08f9892 = L.marker(
                  [44.62509823,-75.09543349],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_c314249aff634abfa954ac8b424bfd92 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_efa825ca81c9473e964684b6c08f9892.setIcon(icon_c314249aff634abfa954ac8b424bfd92);


              var popup_7ac2ac9c1a5c405a92b50ea4f1e46d99 = L.popup({maxWidth: '300'});


                  var html_79943861dde948fdaf8545618255dfba = $('<div id="html_79943861dde948fdaf8545618255dfba" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">8369</td></tr><tr><td>Distance </td><td align="right">76 miles</td><tr><td>Date</td><td align="right">2018-01-18 14:39:05.643771</td></tr></table></div>')[0];
                  popup_7ac2ac9c1a5c405a92b50ea4f1e46d99.setContent(html_79943861dde948fdaf8545618255dfba);


              marker_efa825ca81c9473e964684b6c08f9892.bindPopup(popup_7ac2ac9c1a5c405a92b50ea4f1e46d99);





              var marker_ea31972dffd74d23ad995f56c3b6b99f = L.marker(
                  [43.0531092407182,-76.06816842220721],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_d0fe7f779a2f40ad83acb17b3559eba7 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_ea31972dffd74d23ad995f56c3b6b99f.setIcon(icon_d0fe7f779a2f40ad83acb17b3559eba7);


              var popup_10c918b05f7f4baf89f8b702caf266a9 = L.popup({maxWidth: '300'});


                  var html_12aaa1f1c774418ab539f873717b779e = $('<div id="html_12aaa1f1c774418ab539f873717b779e" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">8459</td></tr><tr><td>Distance </td><td align="right">62 miles</td><tr><td>Date</td><td align="right">2018-01-17 17:10:50.803996</td></tr></table></div>')[0];
                  popup_10c918b05f7f4baf89f8b702caf266a9.setContent(html_12aaa1f1c774418ab539f873717b779e);


              marker_ea31972dffd74d23ad995f56c3b6b99f.bindPopup(popup_10c918b05f7f4baf89f8b702caf266a9);





              var marker_cacec2b59bd54fcb91f5ab6b575a5b0b = L.marker(
                  [43.9778725896031,-75.9048956539482],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_7a3bf10227574c6d88cb7d8af131511d = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_cacec2b59bd54fcb91f5ab6b575a5b0b.setIcon(icon_7a3bf10227574c6d88cb7d8af131511d);


              var popup_605d77333f544db19ca70277c6cd727f = L.popup({maxWidth: '300'});


                  var html_73803f641981491792dd0ef0271e5f56 = $('<div id="html_73803f641981491792dd0ef0271e5f56" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">8459</td></tr><tr><td>Distance </td><td align="right">62 miles</td><tr><td>Date</td><td align="right">2018-01-17 17:10:50.803996</td></tr></table></div>')[0];
                  popup_605d77333f544db19ca70277c6cd727f.setContent(html_73803f641981491792dd0ef0271e5f56);


              marker_cacec2b59bd54fcb91f5ab6b575a5b0b.bindPopup(popup_605d77333f544db19ca70277c6cd727f);





              var marker_a4d17ba94f584701be1f7340d4c642db = L.marker(
                  [43.1212614161374,-76.17771479496359],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_c27855f9e11f4f33b885ca6a0689afe9 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_a4d17ba94f584701be1f7340d4c642db.setIcon(icon_c27855f9e11f4f33b885ca6a0689afe9);


              var popup_8965379bcc8a474497b47419622637f8 = L.popup({maxWidth: '300'});


                  var html_1adaf63a29c24ced98217e6f062d635f = $('<div id="html_1adaf63a29c24ced98217e6f062d635f" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>25</th></tr><tr><td>Trip # </td><td align="right">8647</td></tr><tr><td>Distance </td><td align="right">58 miles</td><tr><td>Date</td><td align="right">2018-01-19 14:31:51.998941</td></tr></table></div>')[0];
                  popup_8965379bcc8a474497b47419622637f8.setContent(html_1adaf63a29c24ced98217e6f062d635f);


              marker_a4d17ba94f584701be1f7340d4c642db.bindPopup(popup_8965379bcc8a474497b47419622637f8);





              var marker_913f0c263f0448969fcc511325f83634 = L.marker(
                  [43.966006202169105,-75.9160347845229],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_cb2b8098d4c546d390900dc1ae83e1c9 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_913f0c263f0448969fcc511325f83634.setIcon(icon_cb2b8098d4c546d390900dc1ae83e1c9);


              var popup_3257f0478e374caebe6cdd2175cdda71 = L.popup({maxWidth: '300'});


                  var html_e0ef22ada09240b285eec65a07d926d7 = $('<div id="html_e0ef22ada09240b285eec65a07d926d7" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>25</th></tr><tr><td>Trip # </td><td align="right">8647</td></tr><tr><td>Distance </td><td align="right">58 miles</td><tr><td>Date</td><td align="right">2018-01-19 14:31:51.998941</td></tr></table></div>')[0];
                  popup_3257f0478e374caebe6cdd2175cdda71.setContent(html_e0ef22ada09240b285eec65a07d926d7);


              marker_913f0c263f0448969fcc511325f83634.bindPopup(popup_3257f0478e374caebe6cdd2175cdda71);





              var marker_48e5718145d042ac973471c71f52ae05 = L.marker(
                  [44.09579282,-76.19149667],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_738d6881ef204d73a1a8764ee896bd77 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_48e5718145d042ac973471c71f52ae05.setIcon(icon_738d6881ef204d73a1a8764ee896bd77);


              var popup_d8bfd1695d274f95a2555e115e610f1b = L.popup({maxWidth: '300'});


                  var html_7ba86a3d22e14ae8b4a02555394c4ce6 = $('<div id="html_7ba86a3d22e14ae8b4a02555394c4ce6" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>226</th></tr><tr><td>Trip # </td><td align="right">8665</td></tr><tr><td>Distance </td><td align="right">80 miles</td><tr><td>Date</td><td align="right">2018-01-22 12:58:50.417221</td></tr></table></div>')[0];
                  popup_d8bfd1695d274f95a2555e115e610f1b.setContent(html_7ba86a3d22e14ae8b4a02555394c4ce6);


              marker_48e5718145d042ac973471c71f52ae05.bindPopup(popup_d8bfd1695d274f95a2555e115e610f1b);





              var marker_c6b1c91457ad42a29a061f3d85146377 = L.marker(
                  [44.75178268,-74.79482459],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_1bfc4ba04d1546e2bb4d0107f59418f0 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_c6b1c91457ad42a29a061f3d85146377.setIcon(icon_1bfc4ba04d1546e2bb4d0107f59418f0);


              var popup_97a6ff24a1e643b9b6ef85dee2387818 = L.popup({maxWidth: '300'});


                  var html_7564b0e8b84a4a36b5bef825220b8a2b = $('<div id="html_7564b0e8b84a4a36b5bef825220b8a2b" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>226</th></tr><tr><td>Trip # </td><td align="right">8665</td></tr><tr><td>Distance </td><td align="right">80 miles</td><tr><td>Date</td><td align="right">2018-01-22 12:58:50.417221</td></tr></table></div>')[0];
                  popup_97a6ff24a1e643b9b6ef85dee2387818.setContent(html_7564b0e8b84a4a36b5bef825220b8a2b);


              marker_c6b1c91457ad42a29a061f3d85146377.bindPopup(popup_97a6ff24a1e643b9b6ef85dee2387818);





              var marker_e709519a45d44306bcf1e24715cfcfc4 = L.marker(
                  [44.87442164,-74.87346508],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_88b169c612c8416aa11dbab5a7d66dc5 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_e709519a45d44306bcf1e24715cfcfc4.setIcon(icon_88b169c612c8416aa11dbab5a7d66dc5);


              var popup_8e6b8e27d69d4f8897b89e5b4dfa3049 = L.popup({maxWidth: '300'});


                  var html_f8bb0d2b4ae64202b90ccee8bd457c26 = $('<div id="html_f8bb0d2b4ae64202b90ccee8bd457c26" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>220</th></tr><tr><td>Trip # </td><td align="right">8719</td></tr><tr><td>Distance </td><td align="right">69 miles</td><tr><td>Date</td><td align="right">2018-01-22 14:01:37.910867</td></tr></table></div>')[0];
                  popup_8e6b8e27d69d4f8897b89e5b4dfa3049.setContent(html_f8bb0d2b4ae64202b90ccee8bd457c26);


              marker_e709519a45d44306bcf1e24715cfcfc4.bindPopup(popup_8e6b8e27d69d4f8897b89e5b4dfa3049);





              var marker_353b235589874e3dbbf1cae683fa4620 = L.marker(
                  [44.013115852139904,-75.67778823897241],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_45201a1b70534a0f881582c760a8a98a = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_353b235589874e3dbbf1cae683fa4620.setIcon(icon_45201a1b70534a0f881582c760a8a98a);


              var popup_74d578f431af4e11a9df1c9b399b6823 = L.popup({maxWidth: '300'});


                  var html_e9ca8cf9fff34e52b8ae2dbe1b195297 = $('<div id="html_e9ca8cf9fff34e52b8ae2dbe1b195297" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>220</th></tr><tr><td>Trip # </td><td align="right">8719</td></tr><tr><td>Distance </td><td align="right">69 miles</td><tr><td>Date</td><td align="right">2018-01-22 14:01:37.910867</td></tr></table></div>')[0];
                  popup_74d578f431af4e11a9df1c9b399b6823.setContent(html_e9ca8cf9fff34e52b8ae2dbe1b195297);


              marker_353b235589874e3dbbf1cae683fa4620.bindPopup(popup_74d578f431af4e11a9df1c9b399b6823);





              var marker_d4db658d57b14e27a6169934890ae4e5 = L.marker(
                  [43.71573855,-75.41566694],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_64ee1015a35c4e34b0e182623914d005 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_d4db658d57b14e27a6169934890ae4e5.setIcon(icon_64ee1015a35c4e34b0e182623914d005);


              var popup_836831dbccc7437fb8a56bd01539f92a = L.popup({maxWidth: '300'});


                  var html_45cd18fab9464a969ece8d5f785a1145 = $('<div id="html_45cd18fab9464a969ece8d5f785a1145" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>130</th></tr><tr><td>Trip # </td><td align="right">8765</td></tr><tr><td>Distance </td><td align="right">61 miles</td><tr><td>Date</td><td align="right">2018-01-22 12:36:14.860946</td></tr></table></div>')[0];
                  popup_836831dbccc7437fb8a56bd01539f92a.setContent(html_45cd18fab9464a969ece8d5f785a1145);


              marker_d4db658d57b14e27a6169934890ae4e5.bindPopup(popup_836831dbccc7437fb8a56bd01539f92a);





              var marker_611fc3b464dd4a3b917ee1dc39aad3f9 = L.marker(
                  [44.62005959,-75.41006478],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_5cf77ce5be60488d9021ecc015a7ddb4 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_611fc3b464dd4a3b917ee1dc39aad3f9.setIcon(icon_5cf77ce5be60488d9021ecc015a7ddb4);


              var popup_e90bbde0ede3420ca83e043ea575fe86 = L.popup({maxWidth: '300'});


                  var html_f9207820d9cd4ecbb79bbf3d536946e5 = $('<div id="html_f9207820d9cd4ecbb79bbf3d536946e5" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>130</th></tr><tr><td>Trip # </td><td align="right">8765</td></tr><tr><td>Distance </td><td align="right">61 miles</td><tr><td>Date</td><td align="right">2018-01-22 12:36:14.860946</td></tr></table></div>')[0];
                  popup_e90bbde0ede3420ca83e043ea575fe86.setContent(html_f9207820d9cd4ecbb79bbf3d536946e5);


              marker_611fc3b464dd4a3b917ee1dc39aad3f9.bindPopup(popup_e90bbde0ede3420ca83e043ea575fe86);





              var marker_e5aeb29843424ade838d4f9bc739147d = L.marker(
                  [43.99151979,-75.95072289],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_99ac69ebbe2b44cfa501b66fb58369ed = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_e5aeb29843424ade838d4f9bc739147d.setIcon(icon_99ac69ebbe2b44cfa501b66fb58369ed);


              var popup_3c2e3854fe844ce0aac15b1080a60009 = L.popup({maxWidth: '300'});


                  var html_ee1dd4503cc04417ae5efd06dced5fc5 = $('<div id="html_ee1dd4503cc04417ae5efd06dced5fc5" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">1573</td></tr><tr><td>Distance </td><td align="right">52 miles</td><tr><td>Date</td><td align="right">2017-09-12 11:50:10.88048</td></tr></table></div>')[0];
                  popup_3c2e3854fe844ce0aac15b1080a60009.setContent(html_ee1dd4503cc04417ae5efd06dced5fc5);


              marker_e5aeb29843424ade838d4f9bc739147d.bindPopup(popup_3c2e3854fe844ce0aac15b1080a60009);





              var marker_510bcb6b37fe4ff2af75147d31db7ea2 = L.marker(
                  [44.69232211,-75.50033736],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_af26fe696104468fa1ff49e9f0204fc1 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_510bcb6b37fe4ff2af75147d31db7ea2.setIcon(icon_af26fe696104468fa1ff49e9f0204fc1);


              var popup_cf5f95a7d7c245f8854015bbfcabc856 = L.popup({maxWidth: '300'});


                  var html_9089e53450aa4a97ac5c7d6fc36c3fdf = $('<div id="html_9089e53450aa4a97ac5c7d6fc36c3fdf" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">1573</td></tr><tr><td>Distance </td><td align="right">52 miles</td><tr><td>Date</td><td align="right">2017-09-12 11:50:10.88048</td></tr></table></div>')[0];
                  popup_cf5f95a7d7c245f8854015bbfcabc856.setContent(html_9089e53450aa4a97ac5c7d6fc36c3fdf);


              marker_510bcb6b37fe4ff2af75147d31db7ea2.bindPopup(popup_cf5f95a7d7c245f8854015bbfcabc856);





              var marker_c8f2b9038fd44d7d85f08590092999f9 = L.marker(
                  [43.05640308,-76.15256928],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_3e28c7fa4ff54fa6b791cf4fd28fbe21 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_c8f2b9038fd44d7d85f08590092999f9.setIcon(icon_3e28c7fa4ff54fa6b791cf4fd28fbe21);


              var popup_f72e84a3dc9946c8a41e14cccdedf78d = L.popup({maxWidth: '300'});


                  var html_503e72bb5f424bee933af60bbaa6cf91 = $('<div id="html_503e72bb5f424bee933af60bbaa6cf91" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>53</th></tr><tr><td>Trip # </td><td align="right">1781</td></tr><tr><td>Distance </td><td align="right">72 miles</td><tr><td>Date</td><td align="right">2017-09-18 15:05:35.941002</td></tr></table></div>')[0];
                  popup_f72e84a3dc9946c8a41e14cccdedf78d.setContent(html_503e72bb5f424bee933af60bbaa6cf91);


              marker_c8f2b9038fd44d7d85f08590092999f9.bindPopup(popup_f72e84a3dc9946c8a41e14cccdedf78d);





              var marker_302f93726e9b471f82b26eb3043c1d5d = L.marker(
                  [44.13067257,-76.32077059],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_888b00ae75fb4b94a196a6f8f8cd1270 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_302f93726e9b471f82b26eb3043c1d5d.setIcon(icon_888b00ae75fb4b94a196a6f8f8cd1270);


              var popup_4538d650ef2542c98d9aa7ba18d41bb9 = L.popup({maxWidth: '300'});


                  var html_fec54535cf5647f4b58aac88430df5cb = $('<div id="html_fec54535cf5647f4b58aac88430df5cb" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>53</th></tr><tr><td>Trip # </td><td align="right">1781</td></tr><tr><td>Distance </td><td align="right">72 miles</td><tr><td>Date</td><td align="right">2017-09-18 15:05:35.941002</td></tr></table></div>')[0];
                  popup_4538d650ef2542c98d9aa7ba18d41bb9.setContent(html_fec54535cf5647f4b58aac88430df5cb);


              marker_302f93726e9b471f82b26eb3043c1d5d.bindPopup(popup_4538d650ef2542c98d9aa7ba18d41bb9);





              var marker_53b0592ad55142dc962f323a63c78f9e = L.marker(
                  [43.89994781,-75.27286294],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_1b1f44bb722d42ca855f5b5f23d30928 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_53b0592ad55142dc962f323a63c78f9e.setIcon(icon_1b1f44bb722d42ca855f5b5f23d30928);


              var popup_f1751a5bef0243efa0cb648342b5d1c8 = L.popup({maxWidth: '300'});


                  var html_969a790680564c2cb5f5368f7a2e7cb2 = $('<div id="html_969a790680564c2cb5f5368f7a2e7cb2" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">1964</td></tr><tr><td>Distance </td><td align="right">55 miles</td><tr><td>Date</td><td align="right">2017-09-22 15:57:43.978802</td></tr></table></div>')[0];
                  popup_f1751a5bef0243efa0cb648342b5d1c8.setContent(html_969a790680564c2cb5f5368f7a2e7cb2);


              marker_53b0592ad55142dc962f323a63c78f9e.bindPopup(popup_f1751a5bef0243efa0cb648342b5d1c8);





              var marker_61ee1cf8e40443ebb67c29a3e6165da5 = L.marker(
                  [43.08290188,-75.26738419],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_2609e8eb2da2484491a4358f6de87176 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_61ee1cf8e40443ebb67c29a3e6165da5.setIcon(icon_2609e8eb2da2484491a4358f6de87176);


              var popup_ef14859a29c547e0aa5d939a31b1c97f = L.popup({maxWidth: '300'});


                  var html_c98016d48bc34f368f9205a0140c4502 = $('<div id="html_c98016d48bc34f368f9205a0140c4502" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">1964</td></tr><tr><td>Distance </td><td align="right">55 miles</td><tr><td>Date</td><td align="right">2017-09-22 15:57:43.978802</td></tr></table></div>')[0];
                  popup_ef14859a29c547e0aa5d939a31b1c97f.setContent(html_c98016d48bc34f368f9205a0140c4502);


              marker_61ee1cf8e40443ebb67c29a3e6165da5.bindPopup(popup_ef14859a29c547e0aa5d939a31b1c97f);





              var marker_dac6473a2495469f87323e65bb8707d5 = L.marker(
                  [43.046552500000004,-76.13642218],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_91e9381d0f5644caa413c564a1b90b50 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_dac6473a2495469f87323e65bb8707d5.setIcon(icon_91e9381d0f5644caa413c564a1b90b50);


              var popup_1dcd9e253ea241f9adb187ae3145389a = L.popup({maxWidth: '300'});


                  var html_d53d9cd96cd74a12affd9992577e6bcf = $('<div id="html_d53d9cd96cd74a12affd9992577e6bcf" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>7</th></tr><tr><td>Trip # </td><td align="right">2190</td></tr><tr><td>Distance </td><td align="right">58 miles</td><tr><td>Date</td><td align="right">2017-09-28 13:32:52.229581</td></tr></table></div>')[0];
                  popup_1dcd9e253ea241f9adb187ae3145389a.setContent(html_d53d9cd96cd74a12affd9992577e6bcf);


              marker_dac6473a2495469f87323e65bb8707d5.bindPopup(popup_1dcd9e253ea241f9adb187ae3145389a);





              var marker_8081ef872c4e4f80a4c4b6fd187dd6e4 = L.marker(
                  [43.78500724,-75.49681149],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_0e017c6e9521429895bbde1e2c04a0e3 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_8081ef872c4e4f80a4c4b6fd187dd6e4.setIcon(icon_0e017c6e9521429895bbde1e2c04a0e3);


              var popup_a59c7aa69aae475a90565380c87dba38 = L.popup({maxWidth: '300'});


                  var html_d21f5b37b70e4bcf82b45a6c61174ba8 = $('<div id="html_d21f5b37b70e4bcf82b45a6c61174ba8" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>7</th></tr><tr><td>Trip # </td><td align="right">2190</td></tr><tr><td>Distance </td><td align="right">58 miles</td><tr><td>Date</td><td align="right">2017-09-28 13:32:52.229581</td></tr></table></div>')[0];
                  popup_a59c7aa69aae475a90565380c87dba38.setContent(html_d21f5b37b70e4bcf82b45a6c61174ba8);


              marker_8081ef872c4e4f80a4c4b6fd187dd6e4.bindPopup(popup_a59c7aa69aae475a90565380c87dba38);





              var marker_3f7fbc2d5faf41c3a30616fe50a2f1fb = L.marker(
                  [42.93359373,-76.55683974],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_403200f4b48a4d05bee284a0682674eb = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_3f7fbc2d5faf41c3a30616fe50a2f1fb.setIcon(icon_403200f4b48a4d05bee284a0682674eb);


              var popup_421fcde1c9994541a0d1cf687b02198f = L.popup({maxWidth: '300'});


                  var html_fe6e008ebff847dcb897894edd6fc603 = $('<div id="html_fe6e008ebff847dcb897894edd6fc603" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>73</th></tr><tr><td>Trip # </td><td align="right">2204</td></tr><tr><td>Distance </td><td align="right">60 miles</td><tr><td>Date</td><td align="right">2017-09-28 18:54:42.90069</td></tr></table></div>')[0];
                  popup_421fcde1c9994541a0d1cf687b02198f.setContent(html_fe6e008ebff847dcb897894edd6fc603);


              marker_3f7fbc2d5faf41c3a30616fe50a2f1fb.bindPopup(popup_421fcde1c9994541a0d1cf687b02198f);





              var marker_cf32a002e6044ae4b57aea211337a9de = L.marker(
                  [43.71648269,-75.94109871],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_2a2ac53620a5434188294b60a2fdcdc7 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_cf32a002e6044ae4b57aea211337a9de.setIcon(icon_2a2ac53620a5434188294b60a2fdcdc7);


              var popup_062ecc2aa89d467db984ff58ecaabd8c = L.popup({maxWidth: '300'});


                  var html_11e353c49c6f4c82ac1b4d996f6de036 = $('<div id="html_11e353c49c6f4c82ac1b4d996f6de036" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>73</th></tr><tr><td>Trip # </td><td align="right">2204</td></tr><tr><td>Distance </td><td align="right">60 miles</td><tr><td>Date</td><td align="right">2017-09-28 18:54:42.90069</td></tr></table></div>')[0];
                  popup_062ecc2aa89d467db984ff58ecaabd8c.setContent(html_11e353c49c6f4c82ac1b4d996f6de036);


              marker_cf32a002e6044ae4b57aea211337a9de.bindPopup(popup_062ecc2aa89d467db984ff58ecaabd8c);





              var marker_852754cedd0649a59adff6f7fdd6fe93 = L.marker(
                  [43.04655414,-76.13669954],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_7591d6b64e0f47ae8af3b924fa2dc8df = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_852754cedd0649a59adff6f7fdd6fe93.setIcon(icon_7591d6b64e0f47ae8af3b924fa2dc8df);


              var popup_58c12df437d94dc8a8e1e51bdeae18bc = L.popup({maxWidth: '300'});


                  var html_88bc7ce9753c41ad904993594713fa71 = $('<div id="html_88bc7ce9753c41ad904993594713fa71" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">2276</td></tr><tr><td>Distance </td><td align="right">63 miles</td><tr><td>Date</td><td align="right">2017-09-29 16:44:46.470221</td></tr></table></div>')[0];
                  popup_58c12df437d94dc8a8e1e51bdeae18bc.setContent(html_88bc7ce9753c41ad904993594713fa71);


              marker_852754cedd0649a59adff6f7fdd6fe93.bindPopup(popup_58c12df437d94dc8a8e1e51bdeae18bc);





              var marker_363b6d0a353a400ba2aae7a99f6d5df3 = L.marker(
                  [43.97295854,-75.89476264],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_9d314a414e0941e6af6e31eb4c64c02f = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_363b6d0a353a400ba2aae7a99f6d5df3.setIcon(icon_9d314a414e0941e6af6e31eb4c64c02f);


              var popup_758e105c1b9f481e9569ecdeaf261387 = L.popup({maxWidth: '300'});


                  var html_841d37a68c8d4b429ef9dc1e1e807b0e = $('<div id="html_841d37a68c8d4b429ef9dc1e1e807b0e" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">2276</td></tr><tr><td>Distance </td><td align="right">63 miles</td><tr><td>Date</td><td align="right">2017-09-29 16:44:46.470221</td></tr></table></div>')[0];
                  popup_758e105c1b9f481e9569ecdeaf261387.setContent(html_841d37a68c8d4b429ef9dc1e1e807b0e);


              marker_363b6d0a353a400ba2aae7a99f6d5df3.bindPopup(popup_758e105c1b9f481e9569ecdeaf261387);





              var marker_32e0135d7ac54082ba92cd3ca606a342 = L.marker(
                  [44.66249609,-74.74530676],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_8905faf5a4a94e8781e2bbd37b702462 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_32e0135d7ac54082ba92cd3ca606a342.setIcon(icon_8905faf5a4a94e8781e2bbd37b702462);


              var popup_b1be2bdf999d49dda3bbb746d524a719 = L.popup({maxWidth: '300'});


                  var html_e64f5627d111442b875e91dca13656ed = $('<div id="html_e64f5627d111442b875e91dca13656ed" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>10</th></tr><tr><td>Trip # </td><td align="right">2283</td></tr><tr><td>Distance </td><td align="right">70 miles</td><tr><td>Date</td><td align="right">2017-09-29 21:37:34.565088</td></tr></table></div>')[0];
                  popup_b1be2bdf999d49dda3bbb746d524a719.setContent(html_e64f5627d111442b875e91dca13656ed);


              marker_32e0135d7ac54082ba92cd3ca606a342.bindPopup(popup_b1be2bdf999d49dda3bbb746d524a719);





              var marker_850e48d87b6d4358af009ba2c335b0ee = L.marker(
                  [44.23422105,-76.08704865],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_f9fab5bf44e34001b89ee37716bfc499 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_850e48d87b6d4358af009ba2c335b0ee.setIcon(icon_f9fab5bf44e34001b89ee37716bfc499);


              var popup_ca87076f23e94e6fb1d4b0c55938cc12 = L.popup({maxWidth: '300'});


                  var html_19fc023186b44161b40761a6a9f31c4a = $('<div id="html_19fc023186b44161b40761a6a9f31c4a" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>10</th></tr><tr><td>Trip # </td><td align="right">2283</td></tr><tr><td>Distance </td><td align="right">70 miles</td><tr><td>Date</td><td align="right">2017-09-29 21:37:34.565088</td></tr></table></div>')[0];
                  popup_ca87076f23e94e6fb1d4b0c55938cc12.setContent(html_19fc023186b44161b40761a6a9f31c4a);


              marker_850e48d87b6d4358af009ba2c335b0ee.bindPopup(popup_ca87076f23e94e6fb1d4b0c55938cc12);





              var marker_dc37adf8300a460f85c60904475c99d7 = L.marker(
                  [43.10641963,-75.25472841],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_ab0e22bf47b247f7bcd6f645277960ba = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_dc37adf8300a460f85c60904475c99d7.setIcon(icon_ab0e22bf47b247f7bcd6f645277960ba);


              var popup_57f181a5884643bfac0c8f66731cdd6a = L.popup({maxWidth: '300'});


                  var html_c08cce43e0594428bd871f22ccd2b1cf = $('<div id="html_c08cce43e0594428bd871f22ccd2b1cf" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">2323</td></tr><tr><td>Distance </td><td align="right">64 miles</td><tr><td>Date</td><td align="right">2017-10-02 15:45:42.5103</td></tr></table></div>')[0];
                  popup_57f181a5884643bfac0c8f66731cdd6a.setContent(html_c08cce43e0594428bd871f22ccd2b1cf);


              marker_dc37adf8300a460f85c60904475c99d7.bindPopup(popup_57f181a5884643bfac0c8f66731cdd6a);





              var marker_bf029815f7694a1b98de41e5bec1aefe = L.marker(
                  [43.99742493,-75.74577024],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_2f2f7e1b8e9f4492a14180eefc2b46b4 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_bf029815f7694a1b98de41e5bec1aefe.setIcon(icon_2f2f7e1b8e9f4492a14180eefc2b46b4);


              var popup_ab03fb3f221844f2b5e6c882bd5fe1de = L.popup({maxWidth: '300'});


                  var html_ebac759cd8e24bfb8a39b4763b8c34f0 = $('<div id="html_ebac759cd8e24bfb8a39b4763b8c34f0" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">2323</td></tr><tr><td>Distance </td><td align="right">64 miles</td><tr><td>Date</td><td align="right">2017-10-02 15:45:42.5103</td></tr></table></div>')[0];
                  popup_ab03fb3f221844f2b5e6c882bd5fe1de.setContent(html_ebac759cd8e24bfb8a39b4763b8c34f0);


              marker_bf029815f7694a1b98de41e5bec1aefe.bindPopup(popup_ab03fb3f221844f2b5e6c882bd5fe1de);





              var marker_3c88f4dd679b44e6b823f1e68a9f3246 = L.marker(
                  [43.97405054,-75.90350217],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_d39eb23d222d445fb427698aa20b1b6d = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_3c88f4dd679b44e6b823f1e68a9f3246.setIcon(icon_d39eb23d222d445fb427698aa20b1b6d);


              var popup_801a992422f84a35872af87fe3e623d4 = L.popup({maxWidth: '300'});


                  var html_63cd6195241247318369be0510b54228 = $('<div id="html_63cd6195241247318369be0510b54228" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>12</th></tr><tr><td>Trip # </td><td align="right">2463</td></tr><tr><td>Distance </td><td align="right">61 miles</td><tr><td>Date</td><td align="right">2017-10-04 21:18:57.260768</td></tr></table></div>')[0];
                  popup_801a992422f84a35872af87fe3e623d4.setContent(html_63cd6195241247318369be0510b54228);


              marker_3c88f4dd679b44e6b823f1e68a9f3246.bindPopup(popup_801a992422f84a35872af87fe3e623d4);





              var marker_4b3a7e5ce9f04504886f359853755529 = L.marker(
                  [44.76776613,-75.29748329],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_94136b0c4f5542118b2be170bcba5200 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_4b3a7e5ce9f04504886f359853755529.setIcon(icon_94136b0c4f5542118b2be170bcba5200);


              var popup_6467847a95904d179d28ae0bbebaf11e = L.popup({maxWidth: '300'});


                  var html_18b4ed9df1b042928e3152926485ac15 = $('<div id="html_18b4ed9df1b042928e3152926485ac15" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>12</th></tr><tr><td>Trip # </td><td align="right">2463</td></tr><tr><td>Distance </td><td align="right">61 miles</td><tr><td>Date</td><td align="right">2017-10-04 21:18:57.260768</td></tr></table></div>')[0];
                  popup_6467847a95904d179d28ae0bbebaf11e.setContent(html_18b4ed9df1b042928e3152926485ac15);


              marker_4b3a7e5ce9f04504886f359853755529.bindPopup(popup_6467847a95904d179d28ae0bbebaf11e);





              var marker_a9243fcb75a44933aba5f09c972aeeb0 = L.marker(
                  [44.66248549,-74.74524735],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_54cafb68eec74cc4bed2ce22b477a215 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_a9243fcb75a44933aba5f09c972aeeb0.setIcon(icon_54cafb68eec74cc4bed2ce22b477a215);


              var popup_c7a51f45b676400799002fb66f427efd = L.popup({maxWidth: '300'});


                  var html_ebb2568e9a624317857d66250196d4b9 = $('<div id="html_ebb2568e9a624317857d66250196d4b9" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>14</th></tr><tr><td>Trip # </td><td align="right">2148</td></tr><tr><td>Distance </td><td align="right">62 miles</td><tr><td>Date</td><td align="right">2017-10-12 19:00:12.090692</td></tr></table></div>')[0];
                  popup_c7a51f45b676400799002fb66f427efd.setContent(html_ebb2568e9a624317857d66250196d4b9);


              marker_a9243fcb75a44933aba5f09c972aeeb0.bindPopup(popup_c7a51f45b676400799002fb66f427efd);





              var marker_9b588cca62c8495cacc1722d3c337133 = L.marker(
                  [43.977622100000005,-75.61787952],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_119ab7a858d54b39ae761d334aee1943 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_9b588cca62c8495cacc1722d3c337133.setIcon(icon_119ab7a858d54b39ae761d334aee1943);


              var popup_3f97a2580a7447a6b41c36cd00fbe3ae = L.popup({maxWidth: '300'});


                  var html_625e63ce756f4cb284cbfec6d1d14bf7 = $('<div id="html_625e63ce756f4cb284cbfec6d1d14bf7" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>14</th></tr><tr><td>Trip # </td><td align="right">2148</td></tr><tr><td>Distance </td><td align="right">62 miles</td><tr><td>Date</td><td align="right">2017-10-12 19:00:12.090692</td></tr></table></div>')[0];
                  popup_3f97a2580a7447a6b41c36cd00fbe3ae.setContent(html_625e63ce756f4cb284cbfec6d1d14bf7);


              marker_9b588cca62c8495cacc1722d3c337133.bindPopup(popup_3f97a2580a7447a6b41c36cd00fbe3ae);





              var marker_a435abe25fda4e5eaeb9bc7db1691a09 = L.marker(
                  [43.17559416,-76.24958665],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_596eaa14af3242b1ba64f05dcc224bb9 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_a435abe25fda4e5eaeb9bc7db1691a09.setIcon(icon_596eaa14af3242b1ba64f05dcc224bb9);


              var popup_340c0201031a406db30a35b8a97bd005 = L.popup({maxWidth: '300'});


                  var html_7da7a7235e764cd1bfc89f4077fae530 = $('<div id="html_7da7a7235e764cd1bfc89f4077fae530" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>68</th></tr><tr><td>Trip # </td><td align="right">2621</td></tr><tr><td>Distance </td><td align="right">56 miles</td><tr><td>Date</td><td align="right">2017-10-09 21:05:12.840197</td></tr></table></div>')[0];
                  popup_340c0201031a406db30a35b8a97bd005.setContent(html_7da7a7235e764cd1bfc89f4077fae530);


              marker_a435abe25fda4e5eaeb9bc7db1691a09.bindPopup(popup_340c0201031a406db30a35b8a97bd005);





              var marker_979ae7e80a5340d0bac19587828e1459 = L.marker(
                  [43.9803926,-75.90208908],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_f2f9904c6f7446bdbd9239d3a3561d0b = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_979ae7e80a5340d0bac19587828e1459.setIcon(icon_f2f9904c6f7446bdbd9239d3a3561d0b);


              var popup_88bf7a6fe575463b9d1b1d4dd58bf1eb = L.popup({maxWidth: '300'});


                  var html_d19bb2244b41414aa93bfa5c7b53edb3 = $('<div id="html_d19bb2244b41414aa93bfa5c7b53edb3" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>68</th></tr><tr><td>Trip # </td><td align="right">2621</td></tr><tr><td>Distance </td><td align="right">56 miles</td><tr><td>Date</td><td align="right">2017-10-09 21:05:12.840197</td></tr></table></div>')[0];
                  popup_88bf7a6fe575463b9d1b1d4dd58bf1eb.setContent(html_d19bb2244b41414aa93bfa5c7b53edb3);


              marker_979ae7e80a5340d0bac19587828e1459.bindPopup(popup_88bf7a6fe575463b9d1b1d4dd58bf1eb);





              var marker_a3ff47f844314e629298ff1f564d1e64 = L.marker(
                  [43.06585757,-76.10090226],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_231268aec162479a92bb0396368f9750 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_a3ff47f844314e629298ff1f564d1e64.setIcon(icon_231268aec162479a92bb0396368f9750);


              var popup_8864d6520e34435a9c87117a4d7b6100 = L.popup({maxWidth: '300'});


                  var html_d586b74495b64c83bdc267ae29aca9c5 = $('<div id="html_d586b74495b64c83bdc267ae29aca9c5" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>75</th></tr><tr><td>Trip # </td><td align="right">2788</td></tr><tr><td>Distance </td><td align="right">64 miles</td><tr><td>Date</td><td align="right">2017-10-13 01:17:10.648582</td></tr></table></div>')[0];
                  popup_8864d6520e34435a9c87117a4d7b6100.setContent(html_d586b74495b64c83bdc267ae29aca9c5);


              marker_a3ff47f844314e629298ff1f564d1e64.bindPopup(popup_8864d6520e34435a9c87117a4d7b6100);





              var marker_c72320f465274d4eb2f70f95547e8293 = L.marker(
                  [43.95211759,-75.6313588],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_ef774dfbc7d84e9a8c49fa50f4deb3ad = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_c72320f465274d4eb2f70f95547e8293.setIcon(icon_ef774dfbc7d84e9a8c49fa50f4deb3ad);


              var popup_bb260bf3737044e891b0d5f54fb052de = L.popup({maxWidth: '300'});


                  var html_df9f496e4cbc4af0acdb416f1a1c2c63 = $('<div id="html_df9f496e4cbc4af0acdb416f1a1c2c63" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>75</th></tr><tr><td>Trip # </td><td align="right">2788</td></tr><tr><td>Distance </td><td align="right">64 miles</td><tr><td>Date</td><td align="right">2017-10-13 01:17:10.648582</td></tr></table></div>')[0];
                  popup_bb260bf3737044e891b0d5f54fb052de.setContent(html_df9f496e4cbc4af0acdb416f1a1c2c63);


              marker_c72320f465274d4eb2f70f95547e8293.bindPopup(popup_bb260bf3737044e891b0d5f54fb052de);





              var marker_d0161215c33b46d09dc9b66056266a9a = L.marker(
                  [43.06573407,-76.10105683],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_d1447f6a8eb949a795cbb2d997591c1e = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_d0161215c33b46d09dc9b66056266a9a.setIcon(icon_d1447f6a8eb949a795cbb2d997591c1e);


              var popup_67b8c94778cd40b5af5bf9c019f3ca9e = L.popup({maxWidth: '300'});


                  var html_1d2d172080d64062aa04c354bd78b0f7 = $('<div id="html_1d2d172080d64062aa04c354bd78b0f7" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">3062</td></tr><tr><td>Distance </td><td align="right">64 miles</td><tr><td>Date</td><td align="right">2017-10-20 01:15:56.265892</td></tr></table></div>')[0];
                  popup_67b8c94778cd40b5af5bf9c019f3ca9e.setContent(html_1d2d172080d64062aa04c354bd78b0f7);


              marker_d0161215c33b46d09dc9b66056266a9a.bindPopup(popup_67b8c94778cd40b5af5bf9c019f3ca9e);





              var marker_ed272549b6764435922310003071df11 = L.marker(
                  [43.95210944,-75.63147526],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_151b98a14af4413f80744e359ea52cb0 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_ed272549b6764435922310003071df11.setIcon(icon_151b98a14af4413f80744e359ea52cb0);


              var popup_fc3f13896fdf400e8245c54d5eb2d481 = L.popup({maxWidth: '300'});


                  var html_cd2db7f84cba4b3bbd52d607f9d8b4a9 = $('<div id="html_cd2db7f84cba4b3bbd52d607f9d8b4a9" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">3062</td></tr><tr><td>Distance </td><td align="right">64 miles</td><tr><td>Date</td><td align="right">2017-10-20 01:15:56.265892</td></tr></table></div>')[0];
                  popup_fc3f13896fdf400e8245c54d5eb2d481.setContent(html_cd2db7f84cba4b3bbd52d607f9d8b4a9);


              marker_ed272549b6764435922310003071df11.bindPopup(popup_fc3f13896fdf400e8245c54d5eb2d481);





              var marker_0d5cccf3827a456d87360311672a95a8 = L.marker(
                  [44.14660388,-75.70970465],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_591c052592de4f3cadeb7025b693e6f0 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_0d5cccf3827a456d87360311672a95a8.setIcon(icon_591c052592de4f3cadeb7025b693e6f0);


              var popup_ab1b0bdf27bf4f9f8e050674e8020ffd = L.popup({maxWidth: '300'});


                  var html_6ad9a72365ce4f5b9ac06223e03029a1 = $('<div id="html_6ad9a72365ce4f5b9ac06223e03029a1" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">3089</td></tr><tr><td>Distance </td><td align="right">67 miles</td><tr><td>Date</td><td align="right">2017-10-20 10:52:46.80353</td></tr></table></div>')[0];
                  popup_ab1b0bdf27bf4f9f8e050674e8020ffd.setContent(html_6ad9a72365ce4f5b9ac06223e03029a1);


              marker_0d5cccf3827a456d87360311672a95a8.bindPopup(popup_ab1b0bdf27bf4f9f8e050674e8020ffd);





              var marker_c084efe002f74f088672b2729de493e5 = L.marker(
                  [44.84121241,-74.68516793],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_80da68b4f0e64bf98e0408a7cbadc110 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_c084efe002f74f088672b2729de493e5.setIcon(icon_80da68b4f0e64bf98e0408a7cbadc110);


              var popup_14e78a6984414fe7b07a14cb560c3309 = L.popup({maxWidth: '300'});


                  var html_984c148b7e564702876974b3e2c1d484 = $('<div id="html_984c148b7e564702876974b3e2c1d484" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">3089</td></tr><tr><td>Distance </td><td align="right">67 miles</td><tr><td>Date</td><td align="right">2017-10-20 10:52:46.80353</td></tr></table></div>')[0];
                  popup_14e78a6984414fe7b07a14cb560c3309.setContent(html_984c148b7e564702876974b3e2c1d484);


              marker_c084efe002f74f088672b2729de493e5.bindPopup(popup_14e78a6984414fe7b07a14cb560c3309);





              var marker_17663485e79a411fa4555b1a6aaad42b = L.marker(
                  [44.676847753308,-74.98258724255659],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_bce06e98e701439ea81a2bd6b53b45ce = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_17663485e79a411fa4555b1a6aaad42b.setIcon(icon_bce06e98e701439ea81a2bd6b53b45ce);


              var popup_0ec57df44e6b43c082144b7fde3bc64a = L.popup({maxWidth: '300'});


                  var html_afea9c91a31b47828a8ecfc8aec002ce = $('<div id="html_afea9c91a31b47828a8ecfc8aec002ce" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>21</th></tr><tr><td>Trip # </td><td align="right">3166</td></tr><tr><td>Distance </td><td align="right">61 miles</td><tr><td>Date</td><td align="right">2017-10-20 22:50:40.806111</td></tr></table></div>')[0];
                  popup_0ec57df44e6b43c082144b7fde3bc64a.setContent(html_afea9c91a31b47828a8ecfc8aec002ce);


              marker_17663485e79a411fa4555b1a6aaad42b.bindPopup(popup_0ec57df44e6b43c082144b7fde3bc64a);





              var marker_15e78d9e4a304b16bc80e130d42fc3fc = L.marker(
                  [44.0631063389913,-75.92237206678959],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_f8df9416233846eb9d2d3c85ca323f42 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_15e78d9e4a304b16bc80e130d42fc3fc.setIcon(icon_f8df9416233846eb9d2d3c85ca323f42);


              var popup_7238a2fee5c948dbae7c1c59b2ee3b3f = L.popup({maxWidth: '300'});


                  var html_cd17c072a12b42719a42545866fb7e88 = $('<div id="html_cd17c072a12b42719a42545866fb7e88" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>21</th></tr><tr><td>Trip # </td><td align="right">3166</td></tr><tr><td>Distance </td><td align="right">61 miles</td><tr><td>Date</td><td align="right">2017-10-20 22:50:40.806111</td></tr></table></div>')[0];
                  popup_7238a2fee5c948dbae7c1c59b2ee3b3f.setContent(html_cd17c072a12b42719a42545866fb7e88);


              marker_15e78d9e4a304b16bc80e130d42fc3fc.bindPopup(popup_7238a2fee5c948dbae7c1c59b2ee3b3f);





              var marker_63abe2929b8b481fab71ac588e867bcd = L.marker(
                  [44.6766395553744,-74.9829354440827],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_8c72f2ba6e7540558f32f4e00e816606 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_63abe2929b8b481fab71ac588e867bcd.setIcon(icon_8c72f2ba6e7540558f32f4e00e816606);


              var popup_80d10efb066f4c67b64762b3a1d95063 = L.popup({maxWidth: '300'});


                  var html_7396d393f4c14bf697850a68b052f18a = $('<div id="html_7396d393f4c14bf697850a68b052f18a" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>16</th></tr><tr><td>Trip # </td><td align="right">3224</td></tr><tr><td>Distance </td><td align="right">64 miles</td><tr><td>Date</td><td align="right">2017-10-23 23:13:19.363346</td></tr></table></div>')[0];
                  popup_80d10efb066f4c67b64762b3a1d95063.setContent(html_7396d393f4c14bf697850a68b052f18a);


              marker_63abe2929b8b481fab71ac588e867bcd.bindPopup(popup_80d10efb066f4c67b64762b3a1d95063);





              var marker_4dfc8a8b6c764ce29aead23dd41c8f11 = L.marker(
                  [43.9989190898038,-75.931250194107],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_0a8213ffcdde4c22a72ec51850401d60 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_4dfc8a8b6c764ce29aead23dd41c8f11.setIcon(icon_0a8213ffcdde4c22a72ec51850401d60);


              var popup_1f618b914b8d4156b06bcc7aafe5d14b = L.popup({maxWidth: '300'});


                  var html_4e2658b89c8741d9aea06a5863096d96 = $('<div id="html_4e2658b89c8741d9aea06a5863096d96" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>16</th></tr><tr><td>Trip # </td><td align="right">3224</td></tr><tr><td>Distance </td><td align="right">64 miles</td><tr><td>Date</td><td align="right">2017-10-23 23:13:19.363346</td></tr></table></div>')[0];
                  popup_1f618b914b8d4156b06bcc7aafe5d14b.setContent(html_4e2658b89c8741d9aea06a5863096d96);


              marker_4dfc8a8b6c764ce29aead23dd41c8f11.bindPopup(popup_1f618b914b8d4156b06bcc7aafe5d14b);





              var marker_70a0b4d063014669b2a9d31ba03e1df9 = L.marker(
                  [43.05631654,-76.14808851],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_4a008033d3244425b67d65c1f16ab157 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_70a0b4d063014669b2a9d31ba03e1df9.setIcon(icon_4a008033d3244425b67d65c1f16ab157);


              var popup_367809febab541c88d496e8d5cb5b127 = L.popup({maxWidth: '300'});


                  var html_ea7cf36fba0147c4a9334bb7c70bbb18 = $('<div id="html_ea7cf36fba0147c4a9334bb7c70bbb18" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>96</th></tr><tr><td>Trip # </td><td align="right">3277</td></tr><tr><td>Distance </td><td align="right">67 miles</td><tr><td>Date</td><td align="right">2017-10-25 00:16:05.496942</td></tr></table></div>')[0];
                  popup_367809febab541c88d496e8d5cb5b127.setContent(html_ea7cf36fba0147c4a9334bb7c70bbb18);


              marker_70a0b4d063014669b2a9d31ba03e1df9.bindPopup(popup_367809febab541c88d496e8d5cb5b127);





              var marker_9e2002aff9f3459db2f6af13d28c7611 = L.marker(
                  [43.89007113,-75.38663488],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_d67a1e9e46b04d5a824d0c8c2e56eeb6 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_9e2002aff9f3459db2f6af13d28c7611.setIcon(icon_d67a1e9e46b04d5a824d0c8c2e56eeb6);


              var popup_4fd27a163efb4f839779c94f73dc7a65 = L.popup({maxWidth: '300'});


                  var html_d6a0c66c294b4419a956d5db8719c827 = $('<div id="html_d6a0c66c294b4419a956d5db8719c827" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>96</th></tr><tr><td>Trip # </td><td align="right">3277</td></tr><tr><td>Distance </td><td align="right">67 miles</td><tr><td>Date</td><td align="right">2017-10-25 00:16:05.496942</td></tr></table></div>')[0];
                  popup_4fd27a163efb4f839779c94f73dc7a65.setContent(html_d6a0c66c294b4419a956d5db8719c827);


              marker_9e2002aff9f3459db2f6af13d28c7611.bindPopup(popup_4fd27a163efb4f839779c94f73dc7a65);





              var marker_09a96df0ff8c4dd6bc99df64f508217c = L.marker(
                  [43.1061405,-75.25455054],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_1f36743960a94157ac686f1f1c29bc2e = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_09a96df0ff8c4dd6bc99df64f508217c.setIcon(icon_1f36743960a94157ac686f1f1c29bc2e);


              var popup_1a937862b0b34b39a20f989ebebb8eaf = L.popup({maxWidth: '300'});


                  var html_6c86fa4e534e4fb197544306b92c562f = $('<div id="html_6c86fa4e534e4fb197544306b92c562f" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>120</th></tr><tr><td>Trip # </td><td align="right">3420</td></tr><tr><td>Distance </td><td align="right">66 miles</td><tr><td>Date</td><td align="right">2017-10-26 16:35:46.500196</td></tr></table></div>')[0];
                  popup_1a937862b0b34b39a20f989ebebb8eaf.setContent(html_6c86fa4e534e4fb197544306b92c562f);


              marker_09a96df0ff8c4dd6bc99df64f508217c.bindPopup(popup_1a937862b0b34b39a20f989ebebb8eaf);





              var marker_6be40d63345248eab6cceb88c3eb2be1 = L.marker(
                  [43.97957748,-75.90753459999999],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_c808e9ca549a4df89fc677914c63d62f = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_6be40d63345248eab6cceb88c3eb2be1.setIcon(icon_c808e9ca549a4df89fc677914c63d62f);


              var popup_5a63660a04ff4b02aa7e14415144c6b1 = L.popup({maxWidth: '300'});


                  var html_2117cc3264314f2c872f87b62fdb6b2d = $('<div id="html_2117cc3264314f2c872f87b62fdb6b2d" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>120</th></tr><tr><td>Trip # </td><td align="right">3420</td></tr><tr><td>Distance </td><td align="right">66 miles</td><tr><td>Date</td><td align="right">2017-10-26 16:35:46.500196</td></tr></table></div>')[0];
                  popup_5a63660a04ff4b02aa7e14415144c6b1.setContent(html_2117cc3264314f2c872f87b62fdb6b2d);


              marker_6be40d63345248eab6cceb88c3eb2be1.bindPopup(popup_5a63660a04ff4b02aa7e14415144c6b1);





              var marker_5943872d541242bcb6018f2e4586b894 = L.marker(
                  [44.68625356,-75.49316105],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_b3f90e1801914dd4ba5a1ceb7cfeb722 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_5943872d541242bcb6018f2e4586b894.setIcon(icon_b3f90e1801914dd4ba5a1ceb7cfeb722);


              var popup_0a090ebeece0490b9e1864616fae2265 = L.popup({maxWidth: '300'});


                  var html_2fd80283248344a3a96bf4ec47e7f0d8 = $('<div id="html_2fd80283248344a3a96bf4ec47e7f0d8" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>49</th></tr><tr><td>Trip # </td><td align="right">3812</td></tr><tr><td>Distance </td><td align="right">52 miles</td><tr><td>Date</td><td align="right">2017-11-02 13:22:22.5903</td></tr></table></div>')[0];
                  popup_0a090ebeece0490b9e1864616fae2265.setContent(html_2fd80283248344a3a96bf4ec47e7f0d8);


              marker_5943872d541242bcb6018f2e4586b894.bindPopup(popup_0a090ebeece0490b9e1864616fae2265);





              var marker_50b97b4b2f3c4ad49bf3a693bde6da1c = L.marker(
                  [43.96905944,-75.91134237],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_608101f949b3426a9b42fe904fb504ab = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_50b97b4b2f3c4ad49bf3a693bde6da1c.setIcon(icon_608101f949b3426a9b42fe904fb504ab);


              var popup_c32085faf2054fa78f626731bc85ca4a = L.popup({maxWidth: '300'});


                  var html_a9a7e7ed48a5471597ae7ed0d1a345a4 = $('<div id="html_a9a7e7ed48a5471597ae7ed0d1a345a4" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>49</th></tr><tr><td>Trip # </td><td align="right">3812</td></tr><tr><td>Distance </td><td align="right">52 miles</td><tr><td>Date</td><td align="right">2017-11-02 13:22:22.5903</td></tr></table></div>')[0];
                  popup_c32085faf2054fa78f626731bc85ca4a.setContent(html_a9a7e7ed48a5471597ae7ed0d1a345a4);


              marker_50b97b4b2f3c4ad49bf3a693bde6da1c.bindPopup(popup_c32085faf2054fa78f626731bc85ca4a);





              var marker_3f4b97f8b61d4fc4a2f8bd8e1e09a934 = L.marker(
                  [44.70047837,-75.4651201],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_60d8cc021a974fd3b368bc8807c1e154 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_3f4b97f8b61d4fc4a2f8bd8e1e09a934.setIcon(icon_60d8cc021a974fd3b368bc8807c1e154);


              var popup_56511d0b9dd3496cb3cd71247edea684 = L.popup({maxWidth: '300'});


                  var html_c54f21740fea4e8081c03fec0d84b7ff = $('<div id="html_c54f21740fea4e8081c03fec0d84b7ff" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>17</th></tr><tr><td>Trip # </td><td align="right">3888</td></tr><tr><td>Distance </td><td align="right">53 miles</td><tr><td>Date</td><td align="right">2017-11-03 16:57:02.304666</td></tr></table></div>')[0];
                  popup_56511d0b9dd3496cb3cd71247edea684.setContent(html_c54f21740fea4e8081c03fec0d84b7ff);


              marker_3f4b97f8b61d4fc4a2f8bd8e1e09a934.bindPopup(popup_56511d0b9dd3496cb3cd71247edea684);





              var marker_c85d2d4cccc44ef4aa12bed89488857c = L.marker(
                  [43.97340946,-75.89442017],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_4b81faf6877148298007bb1edb002dfa = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_c85d2d4cccc44ef4aa12bed89488857c.setIcon(icon_4b81faf6877148298007bb1edb002dfa);


              var popup_d67b8f48116544eba1bd9d98ac3c1785 = L.popup({maxWidth: '300'});


                  var html_0ee2222a54a54012b70d4de5efd2ef42 = $('<div id="html_0ee2222a54a54012b70d4de5efd2ef42" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>17</th></tr><tr><td>Trip # </td><td align="right">3888</td></tr><tr><td>Distance </td><td align="right">53 miles</td><tr><td>Date</td><td align="right">2017-11-03 16:57:02.304666</td></tr></table></div>')[0];
                  popup_d67b8f48116544eba1bd9d98ac3c1785.setContent(html_0ee2222a54a54012b70d4de5efd2ef42);


              marker_c85d2d4cccc44ef4aa12bed89488857c.bindPopup(popup_d67b8f48116544eba1bd9d98ac3c1785);





              var marker_7c234194ae8d4e9ca9bffe9b54951302 = L.marker(
                  [44.76772211,-75.29744375],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_c2fb047766c64965b4cd5067c42a8530 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_7c234194ae8d4e9ca9bffe9b54951302.setIcon(icon_c2fb047766c64965b4cd5067c42a8530);


              var popup_587139d799654cf2b057be00e9f34e4b = L.popup({maxWidth: '300'});


                  var html_716d3d510db442939e3f36bd9d08bc6f = $('<div id="html_716d3d510db442939e3f36bd9d08bc6f" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>68</th></tr><tr><td>Trip # </td><td align="right">3914</td></tr><tr><td>Distance </td><td align="right">60 miles</td><tr><td>Date</td><td align="right">2017-11-06 12:18:43.291053</td></tr></table></div>')[0];
                  popup_587139d799654cf2b057be00e9f34e4b.setContent(html_716d3d510db442939e3f36bd9d08bc6f);


              marker_7c234194ae8d4e9ca9bffe9b54951302.bindPopup(popup_587139d799654cf2b057be00e9f34e4b);





              var marker_61b1108bfb5143e984f1521267c249b6 = L.marker(
                  [43.97858986,-75.91076355],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_a20f1112d67947c9b4d6fb11046b1f39 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_61b1108bfb5143e984f1521267c249b6.setIcon(icon_a20f1112d67947c9b4d6fb11046b1f39);


              var popup_b258c0af599f47e68e778966e03bac71 = L.popup({maxWidth: '300'});


                  var html_09ec5193dbde438ba099299aa7803b20 = $('<div id="html_09ec5193dbde438ba099299aa7803b20" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>68</th></tr><tr><td>Trip # </td><td align="right">3914</td></tr><tr><td>Distance </td><td align="right">60 miles</td><tr><td>Date</td><td align="right">2017-11-06 12:18:43.291053</td></tr></table></div>')[0];
                  popup_b258c0af599f47e68e778966e03bac71.setContent(html_09ec5193dbde438ba099299aa7803b20);


              marker_61b1108bfb5143e984f1521267c249b6.bindPopup(popup_b258c0af599f47e68e778966e03bac71);





              var marker_401f3d6dacdd4848aa16eaa2d2f0ec75 = L.marker(
                  [43.97858986,-75.91076355],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_d6887b9a56944057b3e8cdbda527f4a1 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_401f3d6dacdd4848aa16eaa2d2f0ec75.setIcon(icon_d6887b9a56944057b3e8cdbda527f4a1);


              var popup_4d5e085d22b84caf9ad6740a74a68ea8 = L.popup({maxWidth: '300'});


                  var html_0d0a4d3cafbe402b8ac6cf708b5563a9 = $('<div id="html_0d0a4d3cafbe402b8ac6cf708b5563a9" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>49</th></tr><tr><td>Trip # </td><td align="right">3932</td></tr><tr><td>Distance </td><td align="right">51 miles</td><tr><td>Date</td><td align="right">2017-11-07 13:43:34.496763</td></tr></table></div>')[0];
                  popup_4d5e085d22b84caf9ad6740a74a68ea8.setContent(html_0d0a4d3cafbe402b8ac6cf708b5563a9);


              marker_401f3d6dacdd4848aa16eaa2d2f0ec75.bindPopup(popup_4d5e085d22b84caf9ad6740a74a68ea8);





              var marker_58f8b54811814a4380ef2d3357455be7 = L.marker(
                  [44.68631177,-75.49303867],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_15918e69ed5b45b78e68e0fa0b6e951e = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_58f8b54811814a4380ef2d3357455be7.setIcon(icon_15918e69ed5b45b78e68e0fa0b6e951e);


              var popup_ef9876ae71724ea592d782e50f7ec18f = L.popup({maxWidth: '300'});


                  var html_b4ae901c61c94bbc8d6a9c56b380f9bb = $('<div id="html_b4ae901c61c94bbc8d6a9c56b380f9bb" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>49</th></tr><tr><td>Trip # </td><td align="right">3932</td></tr><tr><td>Distance </td><td align="right">51 miles</td><tr><td>Date</td><td align="right">2017-11-07 13:43:34.496763</td></tr></table></div>')[0];
                  popup_ef9876ae71724ea592d782e50f7ec18f.setContent(html_b4ae901c61c94bbc8d6a9c56b380f9bb);


              marker_58f8b54811814a4380ef2d3357455be7.bindPopup(popup_ef9876ae71724ea592d782e50f7ec18f);





              var marker_eb4e10d89daf411c9c4049dc66e811a6 = L.marker(
                  [44.6078624177109,-75.1325577511325],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_cac4f36c46204e429f4ce3e267be3157 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_eb4e10d89daf411c9c4049dc66e811a6.setIcon(icon_cac4f36c46204e429f4ce3e267be3157);


              var popup_7e814fb8d11543b9973a6d0b531eee36 = L.popup({maxWidth: '300'});


                  var html_5f89dceda9234f63be822858af4ae5a6 = $('<div id="html_5f89dceda9234f63be822858af4ae5a6" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>25</th></tr><tr><td>Trip # </td><td align="right">4153</td></tr><tr><td>Distance </td><td align="right">56 miles</td><tr><td>Date</td><td align="right">2017-11-08 18:50:59.60754</td></tr></table></div>')[0];
                  popup_7e814fb8d11543b9973a6d0b531eee36.setContent(html_5f89dceda9234f63be822858af4ae5a6);


              marker_eb4e10d89daf411c9c4049dc66e811a6.bindPopup(popup_7e814fb8d11543b9973a6d0b531eee36);





              var marker_f77ba313e5304c76848358a2f6be74fd = L.marker(
                  [43.9744983517729,-75.9032180502217],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_748e460983c449d48bd311da477cd1f1 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_f77ba313e5304c76848358a2f6be74fd.setIcon(icon_748e460983c449d48bd311da477cd1f1);


              var popup_d0ad525e445c4a7f965b9673596471f0 = L.popup({maxWidth: '300'});


                  var html_0e90b5b3a148479a9be16e8d8b5b8b9a = $('<div id="html_0e90b5b3a148479a9be16e8d8b5b8b9a" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>25</th></tr><tr><td>Trip # </td><td align="right">4153</td></tr><tr><td>Distance </td><td align="right">56 miles</td><tr><td>Date</td><td align="right">2017-11-08 18:50:59.60754</td></tr></table></div>')[0];
                  popup_d0ad525e445c4a7f965b9673596471f0.setContent(html_0e90b5b3a148479a9be16e8d8b5b8b9a);


              marker_f77ba313e5304c76848358a2f6be74fd.bindPopup(popup_d0ad525e445c4a7f965b9673596471f0);





              var marker_60a311c5dd78416ab7edaf16db1aba63 = L.marker(
                  [43.97670689,-75.90212361],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_e1462c2a26634f8c84b68259d67d8099 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_60a311c5dd78416ab7edaf16db1aba63.setIcon(icon_e1462c2a26634f8c84b68259d67d8099);


              var popup_48c4bf34d52c4c0991630582dacabfd4 = L.popup({maxWidth: '300'});


                  var html_7feaca7db3dc4589a86478753b4564a7 = $('<div id="html_7feaca7db3dc4589a86478753b4564a7" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>129</th></tr><tr><td>Trip # </td><td align="right">4343</td></tr><tr><td>Distance </td><td align="right">80 miles</td><tr><td>Date</td><td align="right">2017-11-13 10:45:06.993601</td></tr></table></div>')[0];
                  popup_48c4bf34d52c4c0991630582dacabfd4.setContent(html_7feaca7db3dc4589a86478753b4564a7);


              marker_60a311c5dd78416ab7edaf16db1aba63.bindPopup(popup_48c4bf34d52c4c0991630582dacabfd4);





              var marker_60cb7f41c52449fda5b1d3ae72bb411c = L.marker(
                  [44.92487056,-74.87389259999999],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_6068849806a34e988a5d635f6dbf12af = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_60cb7f41c52449fda5b1d3ae72bb411c.setIcon(icon_6068849806a34e988a5d635f6dbf12af);


              var popup_40700f98beba4bbbb6aa675fd2fe57f0 = L.popup({maxWidth: '300'});


                  var html_c92bf4baf7e047e6b823d73a0f2385e5 = $('<div id="html_c92bf4baf7e047e6b823d73a0f2385e5" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>129</th></tr><tr><td>Trip # </td><td align="right">4343</td></tr><tr><td>Distance </td><td align="right">80 miles</td><tr><td>Date</td><td align="right">2017-11-13 10:45:06.993601</td></tr></table></div>')[0];
                  popup_40700f98beba4bbbb6aa675fd2fe57f0.setContent(html_c92bf4baf7e047e6b823d73a0f2385e5);


              marker_60cb7f41c52449fda5b1d3ae72bb411c.bindPopup(popup_40700f98beba4bbbb6aa675fd2fe57f0);





              var marker_0134717e6eff4ab0976bbc45a15ffe12 = L.marker(
                  [44.92487056,-74.87389259999999],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_cdfd725cb7f9451cb2d79601d7c1cf98 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_0134717e6eff4ab0976bbc45a15ffe12.setIcon(icon_cdfd725cb7f9451cb2d79601d7c1cf98);


              var popup_484c7f88252f47acb7471fa22b916071 = L.popup({maxWidth: '300'});


                  var html_17076f3f52544c9fbf8d670639aa2354 = $('<div id="html_17076f3f52544c9fbf8d670639aa2354" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">4365</td></tr><tr><td>Distance </td><td align="right">75 miles</td><tr><td>Date</td><td align="right">2017-11-13 14:01:23.125099</td></tr></table></div>')[0];
                  popup_484c7f88252f47acb7471fa22b916071.setContent(html_17076f3f52544c9fbf8d670639aa2354);


              marker_0134717e6eff4ab0976bbc45a15ffe12.bindPopup(popup_484c7f88252f47acb7471fa22b916071);





              var marker_ef7184df4c4e4b308a5b7b95940e7e4d = L.marker(
                  [44.01736852,-75.80297415],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_5ab08c65a2f44f20a572e6a1be270a26 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_ef7184df4c4e4b308a5b7b95940e7e4d.setIcon(icon_5ab08c65a2f44f20a572e6a1be270a26);


              var popup_3597c63912114947ab70fc3a4f5441f4 = L.popup({maxWidth: '300'});


                  var html_622869ee13bf4b498c56054857667693 = $('<div id="html_622869ee13bf4b498c56054857667693" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">4365</td></tr><tr><td>Distance </td><td align="right">75 miles</td><tr><td>Date</td><td align="right">2017-11-13 14:01:23.125099</td></tr></table></div>')[0];
                  popup_3597c63912114947ab70fc3a4f5441f4.setContent(html_622869ee13bf4b498c56054857667693);


              marker_ef7184df4c4e4b308a5b7b95940e7e4d.bindPopup(popup_3597c63912114947ab70fc3a4f5441f4);





              var marker_ff5a950d9d3e408b81da32567e02eb20 = L.marker(
                  [44.84120602,-74.68505293],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_66f13aef1fd5471786aa89aca2539778 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_ff5a950d9d3e408b81da32567e02eb20.setIcon(icon_66f13aef1fd5471786aa89aca2539778);


              var popup_e886a43ebdb046b7b85beecaf64983d1 = L.popup({maxWidth: '300'});


                  var html_6527630933354a7a84d912f2f105e856 = $('<div id="html_6527630933354a7a84d912f2f105e856" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>7</th></tr><tr><td>Trip # </td><td align="right">4771</td></tr><tr><td>Distance </td><td align="right">83 miles</td><tr><td>Date</td><td align="right">2017-11-20 09:22:19.748361</td></tr></table></div>')[0];
                  popup_e886a43ebdb046b7b85beecaf64983d1.setContent(html_6527630933354a7a84d912f2f105e856);


              marker_ff5a950d9d3e408b81da32567e02eb20.bindPopup(popup_e886a43ebdb046b7b85beecaf64983d1);





              var marker_8bf670a508664f4a859d0d91c80952c0 = L.marker(
                  [43.71511833,-75.41567282],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_af7effd0c86446fd932063cbc3730630 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_8bf670a508664f4a859d0d91c80952c0.setIcon(icon_af7effd0c86446fd932063cbc3730630);


              var popup_fcfbfb16b81a46f58d42fa16815c4739 = L.popup({maxWidth: '300'});


                  var html_24a71421c516408cb272e8035b85a610 = $('<div id="html_24a71421c516408cb272e8035b85a610" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>7</th></tr><tr><td>Trip # </td><td align="right">4771</td></tr><tr><td>Distance </td><td align="right">83 miles</td><tr><td>Date</td><td align="right">2017-11-20 09:22:19.748361</td></tr></table></div>')[0];
                  popup_fcfbfb16b81a46f58d42fa16815c4739.setContent(html_24a71421c516408cb272e8035b85a610);


              marker_8bf670a508664f4a859d0d91c80952c0.bindPopup(popup_fcfbfb16b81a46f58d42fa16815c4739);





              var marker_a857a9b7311e445387653997c9020ebd = L.marker(
                  [43.71511833,-75.41567282],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_63b26d5e587343eaa22f1fefb6ecf4d9 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_a857a9b7311e445387653997c9020ebd.setIcon(icon_63b26d5e587343eaa22f1fefb6ecf4d9);


              var popup_bb52f3357854463689b765e52132abd2 = L.popup({maxWidth: '300'});


                  var html_26c1bf74ded84d3cbe18ca39a949fd79 = $('<div id="html_26c1bf74ded84d3cbe18ca39a949fd79" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>111</th></tr><tr><td>Trip # </td><td align="right">4779</td></tr><tr><td>Distance </td><td align="right">83 miles</td><tr><td>Date</td><td align="right">2017-11-20 16:53:20.371222</td></tr></table></div>')[0];
                  popup_bb52f3357854463689b765e52132abd2.setContent(html_26c1bf74ded84d3cbe18ca39a949fd79);


              marker_a857a9b7311e445387653997c9020ebd.bindPopup(popup_bb52f3357854463689b765e52132abd2);





              var marker_a23ae45c786f44ff8dc6aa040cb7f14f = L.marker(
                  [44.84112879,-74.68519337],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_7b253cd9ac0d4a09a8d447f029da3ed4 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_a23ae45c786f44ff8dc6aa040cb7f14f.setIcon(icon_7b253cd9ac0d4a09a8d447f029da3ed4);


              var popup_173e2a2a97be4845bf5b70a9c2ef324f = L.popup({maxWidth: '300'});


                  var html_b214e069ba264faf856d5fcb8f919005 = $('<div id="html_b214e069ba264faf856d5fcb8f919005" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>111</th></tr><tr><td>Trip # </td><td align="right">4779</td></tr><tr><td>Distance </td><td align="right">83 miles</td><tr><td>Date</td><td align="right">2017-11-20 16:53:20.371222</td></tr></table></div>')[0];
                  popup_173e2a2a97be4845bf5b70a9c2ef324f.setContent(html_b214e069ba264faf856d5fcb8f919005);


              marker_a23ae45c786f44ff8dc6aa040cb7f14f.bindPopup(popup_173e2a2a97be4845bf5b70a9c2ef324f);





              var marker_e1db886e53644df7aac56e4e6f24b42e = L.marker(
                  [43.97107604,-75.9120413],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_b23840ffafc54491bb968f63ffec6ffc = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_e1db886e53644df7aac56e4e6f24b42e.setIcon(icon_b23840ffafc54491bb968f63ffec6ffc);


              var popup_9e5f90949b4a4c3490ca8ea3be7b5d04 = L.popup({maxWidth: '300'});


                  var html_07bec832b87f43879b3d260f865e6dce = $('<div id="html_07bec832b87f43879b3d260f865e6dce" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>100</th></tr><tr><td>Trip # </td><td align="right">4863</td></tr><tr><td>Distance </td><td align="right">59 miles</td><tr><td>Date</td><td align="right">2017-11-21 19:51:01.118728</td></tr></table></div>')[0];
                  popup_9e5f90949b4a4c3490ca8ea3be7b5d04.setContent(html_07bec832b87f43879b3d260f865e6dce);


              marker_e1db886e53644df7aac56e4e6f24b42e.bindPopup(popup_9e5f90949b4a4c3490ca8ea3be7b5d04);





              var marker_7281eb25330e45289ccf373d9ea055d2 = L.marker(
                  [44.62501848,-75.09539542],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_f3071926fc3345e7aaaf02de63205d5b = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_7281eb25330e45289ccf373d9ea055d2.setIcon(icon_f3071926fc3345e7aaaf02de63205d5b);


              var popup_90675833a13a4f0eab0cf6a8d34dbcee = L.popup({maxWidth: '300'});


                  var html_537c0c653e0a4a11a0479f2c43e49feb = $('<div id="html_537c0c653e0a4a11a0479f2c43e49feb" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>100</th></tr><tr><td>Trip # </td><td align="right">4863</td></tr><tr><td>Distance </td><td align="right">59 miles</td><tr><td>Date</td><td align="right">2017-11-21 19:51:01.118728</td></tr></table></div>')[0];
                  popup_90675833a13a4f0eab0cf6a8d34dbcee.setContent(html_537c0c653e0a4a11a0479f2c43e49feb);


              marker_7281eb25330e45289ccf373d9ea055d2.bindPopup(popup_90675833a13a4f0eab0cf6a8d34dbcee);





              var marker_a58e3d5135a34c1293441f8b730b6f9c = L.marker(
                  [43.06853275,-76.10094575],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_bc02fd319fd1427eb663b60dc64f5c93 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_a58e3d5135a34c1293441f8b730b6f9c.setIcon(icon_bc02fd319fd1427eb663b60dc64f5c93);


              var popup_6ffa7498e65a4692affeebaad446eee6 = L.popup({maxWidth: '300'});


                  var html_3974bf849c0849f29b1abbadb1c2967d = $('<div id="html_3974bf849c0849f29b1abbadb1c2967d" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>93</th></tr><tr><td>Trip # </td><td align="right">4875</td></tr><tr><td>Distance </td><td align="right">64 miles</td><tr><td>Date</td><td align="right">2017-11-20 17:44:08.704714</td></tr></table></div>')[0];
                  popup_6ffa7498e65a4692affeebaad446eee6.setContent(html_3974bf849c0849f29b1abbadb1c2967d);


              marker_a58e3d5135a34c1293441f8b730b6f9c.bindPopup(popup_6ffa7498e65a4692affeebaad446eee6);





              var marker_e4da35f233d042349101d1e576e75eee = L.marker(
                  [43.99740066,-75.74590494],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_44882b79129a415cad1079df159a0cfa = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_e4da35f233d042349101d1e576e75eee.setIcon(icon_44882b79129a415cad1079df159a0cfa);


              var popup_7966f0e798ea494dad5e66225b75f4c0 = L.popup({maxWidth: '300'});


                  var html_98b179381afd4b3198f5e577bf4e450b = $('<div id="html_98b179381afd4b3198f5e577bf4e450b" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>93</th></tr><tr><td>Trip # </td><td align="right">4875</td></tr><tr><td>Distance </td><td align="right">64 miles</td><tr><td>Date</td><td align="right">2017-11-20 17:44:08.704714</td></tr></table></div>')[0];
                  popup_7966f0e798ea494dad5e66225b75f4c0.setContent(html_98b179381afd4b3198f5e577bf4e450b);


              marker_e4da35f233d042349101d1e576e75eee.bindPopup(popup_7966f0e798ea494dad5e66225b75f4c0);





              var marker_4b8a2ef8a23b4ec3bb77b71a3d8564a3 = L.marker(
                  [43.98293966,-75.61220036],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_bb158f05268745778b10fa6d2974c6aa = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_4b8a2ef8a23b4ec3bb77b71a3d8564a3.setIcon(icon_bb158f05268745778b10fa6d2974c6aa);


              var popup_68c661d6447f4689b861457a0486c104 = L.popup({maxWidth: '300'});


                  var html_c2dc53dd1bac4c508b0ed920d555fa6e = $('<div id="html_c2dc53dd1bac4c508b0ed920d555fa6e" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>23</th></tr><tr><td>Trip # </td><td align="right">4962</td></tr><tr><td>Distance </td><td align="right">61 miles</td><tr><td>Date</td><td align="right">2017-11-21 23:14:20.232173</td></tr></table></div>')[0];
                  popup_68c661d6447f4689b861457a0486c104.setContent(html_c2dc53dd1bac4c508b0ed920d555fa6e);


              marker_4b8a2ef8a23b4ec3bb77b71a3d8564a3.bindPopup(popup_68c661d6447f4689b861457a0486c104);





              var marker_bf50c59ef8ea4aa2a322709536e21214 = L.marker(
                  [43.35038152,-76.51365283],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_a824b28df1fb4d5881a313653c0f9a24 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_bf50c59ef8ea4aa2a322709536e21214.setIcon(icon_a824b28df1fb4d5881a313653c0f9a24);


              var popup_02ad6a9611b04ce6afa71addd00686de = L.popup({maxWidth: '300'});


                  var html_58ad254b4eb148a1af1863839284022c = $('<div id="html_58ad254b4eb148a1af1863839284022c" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>23</th></tr><tr><td>Trip # </td><td align="right">4962</td></tr><tr><td>Distance </td><td align="right">61 miles</td><tr><td>Date</td><td align="right">2017-11-21 23:14:20.232173</td></tr></table></div>')[0];
                  popup_02ad6a9611b04ce6afa71addd00686de.setContent(html_58ad254b4eb148a1af1863839284022c);


              marker_bf50c59ef8ea4aa2a322709536e21214.bindPopup(popup_02ad6a9611b04ce6afa71addd00686de);





              var marker_9a21447a80434b3388b1e9372eeb6d4a = L.marker(
                  [43.04230189,-76.14030491],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_69d39722fc0e4209b0e389a5ec1312f7 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_9a21447a80434b3388b1e9372eeb6d4a.setIcon(icon_69d39722fc0e4209b0e389a5ec1312f7);


              var popup_865afa59d44e4c22aebecf768c194126 = L.popup({maxWidth: '300'});


                  var html_4226ccf6d25e4ee1b9c3a7917256c4f1 = $('<div id="html_4226ccf6d25e4ee1b9c3a7917256c4f1" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>86</th></tr><tr><td>Trip # </td><td align="right">5032</td></tr><tr><td>Distance </td><td align="right">57 miles</td><tr><td>Date</td><td align="right">2017-11-22 21:53:00.737506</td></tr></table></div>')[0];
                  popup_865afa59d44e4c22aebecf768c194126.setContent(html_4226ccf6d25e4ee1b9c3a7917256c4f1);


              marker_9a21447a80434b3388b1e9372eeb6d4a.bindPopup(popup_865afa59d44e4c22aebecf768c194126);





              var marker_3cb17163280f40e7bcfe6681c672f694 = L.marker(
                  [43.854669,-75.80223234],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_ef8a051d1d0b4e9ba880a303a3a3e7cd = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_3cb17163280f40e7bcfe6681c672f694.setIcon(icon_ef8a051d1d0b4e9ba880a303a3a3e7cd);


              var popup_527dd01b61884310bd58e75e785246d8 = L.popup({maxWidth: '300'});


                  var html_0339c6b75d624ac69107e8781e1035f3 = $('<div id="html_0339c6b75d624ac69107e8781e1035f3" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>86</th></tr><tr><td>Trip # </td><td align="right">5032</td></tr><tr><td>Distance </td><td align="right">57 miles</td><tr><td>Date</td><td align="right">2017-11-22 21:53:00.737506</td></tr></table></div>')[0];
                  popup_527dd01b61884310bd58e75e785246d8.setContent(html_0339c6b75d624ac69107e8781e1035f3);


              marker_3cb17163280f40e7bcfe6681c672f694.bindPopup(popup_527dd01b61884310bd58e75e785246d8);





              var marker_b495bb8dd0f94ec79f7d40e9028cc147 = L.marker(
                  [44.33334912,-75.91382857],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_f4cd189a15524709a744fb72fb4067a0 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_b495bb8dd0f94ec79f7d40e9028cc147.setIcon(icon_f4cd189a15524709a744fb72fb4067a0);


              var popup_45c72a44fd864a319dcadfecae90135b = L.popup({maxWidth: '300'});


                  var html_54c551f3968241de9f9e7ee196934e86 = $('<div id="html_54c551f3968241de9f9e7ee196934e86" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>23</th></tr><tr><td>Trip # </td><td align="right">5211</td></tr><tr><td>Distance </td><td align="right">72 miles</td><tr><td>Date</td><td align="right">2017-11-27 22:05:54.962899</td></tr></table></div>')[0];
                  popup_45c72a44fd864a319dcadfecae90135b.setContent(html_54c551f3968241de9f9e7ee196934e86);


              marker_b495bb8dd0f94ec79f7d40e9028cc147.bindPopup(popup_45c72a44fd864a319dcadfecae90135b);





              var marker_5ada8139cbdc406b8f29d66d2ebf6c49 = L.marker(
                  [43.35018831,-76.51368471],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_0d877b77caa543fa8a14eb4863bb4a96 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_5ada8139cbdc406b8f29d66d2ebf6c49.setIcon(icon_0d877b77caa543fa8a14eb4863bb4a96);


              var popup_f837917ee5f74137801fd3288ab6a828 = L.popup({maxWidth: '300'});


                  var html_33b8297ec5ea44b0847b89e718af5247 = $('<div id="html_33b8297ec5ea44b0847b89e718af5247" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>23</th></tr><tr><td>Trip # </td><td align="right">5211</td></tr><tr><td>Distance </td><td align="right">72 miles</td><tr><td>Date</td><td align="right">2017-11-27 22:05:54.962899</td></tr></table></div>')[0];
                  popup_f837917ee5f74137801fd3288ab6a828.setContent(html_33b8297ec5ea44b0847b89e718af5247);


              marker_5ada8139cbdc406b8f29d66d2ebf6c49.bindPopup(popup_f837917ee5f74137801fd3288ab6a828);





              var marker_3d0d34fc0c534bbaacb8f80636a0a3c6 = L.marker(
                  [43.97294321,-75.89438254],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_ec6f174614584013ad520ab1e95658a2 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_3d0d34fc0c534bbaacb8f80636a0a3c6.setIcon(icon_ec6f174614584013ad520ab1e95658a2);


              var popup_e005ce82dbfc4167b360fc7a4c83692a = L.popup({maxWidth: '300'});


                  var html_b8ec894a17ec48e2b2725de44caa685c = $('<div id="html_b8ec894a17ec48e2b2725de44caa685c" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>23</th></tr><tr><td>Trip # </td><td align="right">5405</td></tr><tr><td>Distance </td><td align="right">51 miles</td><tr><td>Date</td><td align="right">2017-11-29 21:18:13.712176</td></tr></table></div>')[0];
                  popup_e005ce82dbfc4167b360fc7a4c83692a.setContent(html_b8ec894a17ec48e2b2725de44caa685c);


              marker_3d0d34fc0c534bbaacb8f80636a0a3c6.bindPopup(popup_e005ce82dbfc4167b360fc7a4c83692a);





              var marker_18b9ca02c0824067bcdcd767a3f71290 = L.marker(
                  [43.35033063,-76.51364465],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_5de122bed97b40859ab209300dd66d4c = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_18b9ca02c0824067bcdcd767a3f71290.setIcon(icon_5de122bed97b40859ab209300dd66d4c);


              var popup_489f1e37dcbd43aeb8109f135fa37290 = L.popup({maxWidth: '300'});


                  var html_b1fac8598ba44d4a8193eda9d9a347c6 = $('<div id="html_b1fac8598ba44d4a8193eda9d9a347c6" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>23</th></tr><tr><td>Trip # </td><td align="right">5405</td></tr><tr><td>Distance </td><td align="right">51 miles</td><tr><td>Date</td><td align="right">2017-11-29 21:18:13.712176</td></tr></table></div>')[0];
                  popup_489f1e37dcbd43aeb8109f135fa37290.setContent(html_b1fac8598ba44d4a8193eda9d9a347c6);


              marker_18b9ca02c0824067bcdcd767a3f71290.bindPopup(popup_489f1e37dcbd43aeb8109f135fa37290);





              var marker_fcfa40cb1d284cdc80bad6b8f68bcab4 = L.marker(
                  [44.93949746,-74.89778766],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_fc750e19003f42b2b0096468116e7d53 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_fcfa40cb1d284cdc80bad6b8f68bcab4.setIcon(icon_fc750e19003f42b2b0096468116e7d53);


              var popup_8dd27781340a4710a707861abbd69e35 = L.popup({maxWidth: '300'});


                  var html_7aa244a5d7cd4255bc2548ba63c56b29 = $('<div id="html_7aa244a5d7cd4255bc2548ba63c56b29" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>127</th></tr><tr><td>Trip # </td><td align="right">5513</td></tr><tr><td>Distance </td><td align="right">71 miles</td><tr><td>Date</td><td align="right">2017-12-01 03:56:43.194561</td></tr></table></div>')[0];
                  popup_8dd27781340a4710a707861abbd69e35.setContent(html_7aa244a5d7cd4255bc2548ba63c56b29);


              marker_fcfa40cb1d284cdc80bad6b8f68bcab4.bindPopup(popup_8dd27781340a4710a707861abbd69e35);





              var marker_50047caa4d974f8e89588f479752f454 = L.marker(
                  [44.09060424,-75.79949233],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_490e7fcfa3f245baa86b6cc630863b2a = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_50047caa4d974f8e89588f479752f454.setIcon(icon_490e7fcfa3f245baa86b6cc630863b2a);


              var popup_42af4c5400c941b5a477efd7fe6c216a = L.popup({maxWidth: '300'});


                  var html_22b0dec4ffe8442d9bbd287107cece14 = $('<div id="html_22b0dec4ffe8442d9bbd287107cece14" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>127</th></tr><tr><td>Trip # </td><td align="right">5513</td></tr><tr><td>Distance </td><td align="right">71 miles</td><tr><td>Date</td><td align="right">2017-12-01 03:56:43.194561</td></tr></table></div>')[0];
                  popup_42af4c5400c941b5a477efd7fe6c216a.setContent(html_22b0dec4ffe8442d9bbd287107cece14);


              marker_50047caa4d974f8e89588f479752f454.bindPopup(popup_42af4c5400c941b5a477efd7fe6c216a);





              var marker_cf8306567c5d4db0a1e6badb6de09f8b = L.marker(
                  [44.1460805,-75.7079203],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_7da1a75c00644e629963c100981792bf = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_cf8306567c5d4db0a1e6badb6de09f8b.setIcon(icon_7da1a75c00644e629963c100981792bf);


              var popup_51790685466f4699baf222f918169ec4 = L.popup({maxWidth: '300'});


                  var html_9d77dee8da77495c83b0d7ba22a6d1ae = $('<div id="html_9d77dee8da77495c83b0d7ba22a6d1ae" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>23</th></tr><tr><td>Trip # </td><td align="right">5542</td></tr><tr><td>Distance </td><td align="right">66 miles</td><tr><td>Date</td><td align="right">2017-12-01 03:08:55.336075</td></tr></table></div>')[0];
                  popup_51790685466f4699baf222f918169ec4.setContent(html_9d77dee8da77495c83b0d7ba22a6d1ae);


              marker_cf8306567c5d4db0a1e6badb6de09f8b.bindPopup(popup_51790685466f4699baf222f918169ec4);





              var marker_3e8398a6c15141d190e03394e3f35cb8 = L.marker(
                  [43.35033823,-76.51359398],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_3b16f95670044ca3ac4063dd139a2f94 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_3e8398a6c15141d190e03394e3f35cb8.setIcon(icon_3b16f95670044ca3ac4063dd139a2f94);


              var popup_31a6c437b3544f54b9fdaee897d1cf1a = L.popup({maxWidth: '300'});


                  var html_565e93e55f544ce4ae5f1db9246cf880 = $('<div id="html_565e93e55f544ce4ae5f1db9246cf880" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>23</th></tr><tr><td>Trip # </td><td align="right">5542</td></tr><tr><td>Distance </td><td align="right">66 miles</td><tr><td>Date</td><td align="right">2017-12-01 03:08:55.336075</td></tr></table></div>')[0];
                  popup_31a6c437b3544f54b9fdaee897d1cf1a.setContent(html_565e93e55f544ce4ae5f1db9246cf880);


              marker_3e8398a6c15141d190e03394e3f35cb8.bindPopup(popup_31a6c437b3544f54b9fdaee897d1cf1a);





              var marker_c9c14e55419e43439a69616618a5a8eb = L.marker(
                  [43.68562951,-75.35520699],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_6b93e24878f9410baa309319c3ebc169 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_c9c14e55419e43439a69616618a5a8eb.setIcon(icon_6b93e24878f9410baa309319c3ebc169);


              var popup_c3dc87eaf3234a82a018a8677bc7ac75 = L.popup({maxWidth: '300'});


                  var html_90f90f6c11c14f3eb8a829c41e00ea72 = $('<div id="html_90f90f6c11c14f3eb8a829c41e00ea72" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>63</th></tr><tr><td>Trip # </td><td align="right">5320</td></tr><tr><td>Distance </td><td align="right">56 miles</td><tr><td>Date</td><td align="right">2017-12-06 12:45:53.041184</td></tr></table></div>')[0];
                  popup_c3dc87eaf3234a82a018a8677bc7ac75.setContent(html_90f90f6c11c14f3eb8a829c41e00ea72);


              marker_c9c14e55419e43439a69616618a5a8eb.bindPopup(popup_c3dc87eaf3234a82a018a8677bc7ac75);





              var marker_92eb036aef5a4eafab1b77df29621a39 = L.marker(
                  [44.13061059,-76.32770722],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_aa26d3ef67b143e0886cc8d5e780a44f = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_92eb036aef5a4eafab1b77df29621a39.setIcon(icon_aa26d3ef67b143e0886cc8d5e780a44f);


              var popup_1808e14252364befa572b2ca9597d67e = L.popup({maxWidth: '300'});


                  var html_765a718fdea640038d89017a4eb306bf = $('<div id="html_765a718fdea640038d89017a4eb306bf" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>63</th></tr><tr><td>Trip # </td><td align="right">5320</td></tr><tr><td>Distance </td><td align="right">56 miles</td><tr><td>Date</td><td align="right">2017-12-06 12:45:53.041184</td></tr></table></div>')[0];
                  popup_1808e14252364befa572b2ca9597d67e.setContent(html_765a718fdea640038d89017a4eb306bf);


              marker_92eb036aef5a4eafab1b77df29621a39.bindPopup(popup_1808e14252364befa572b2ca9597d67e);





              var marker_7d99876c911948699cd5a838f5e3ccfc = L.marker(
                  [44.92469352,-74.87419513],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_d792f38d5c364cf7af214ef7fceb9cb9 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_7d99876c911948699cd5a838f5e3ccfc.setIcon(icon_d792f38d5c364cf7af214ef7fceb9cb9);


              var popup_ca7e2f80bd07465d831070d756ee958d = L.popup({maxWidth: '300'});


                  var html_7c33ce8153d940fda6221f90daca7346 = $('<div id="html_7c33ce8153d940fda6221f90daca7346" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>13</th></tr><tr><td>Trip # </td><td align="right">5618</td></tr><tr><td>Distance </td><td align="right">96 miles</td><tr><td>Date</td><td align="right">2017-12-04 14:06:12.879214</td></tr></table></div>')[0];
                  popup_ca7e2f80bd07465d831070d756ee958d.setContent(html_7c33ce8153d940fda6221f90daca7346);


              marker_7d99876c911948699cd5a838f5e3ccfc.bindPopup(popup_ca7e2f80bd07465d831070d756ee958d);





              var marker_8052b74369d54931b80dbd61285c7688 = L.marker(
                  [43.55195779,-75.43865687],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_6c106a3c697d47ac83cdf23ca77a4a0c = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_8052b74369d54931b80dbd61285c7688.setIcon(icon_6c106a3c697d47ac83cdf23ca77a4a0c);


              var popup_bcc5cafedd5f4c7fa7ea187ef05b9eae = L.popup({maxWidth: '300'});


                  var html_2852c43c106e4ae08e76e6171b438ea7 = $('<div id="html_2852c43c106e4ae08e76e6171b438ea7" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>13</th></tr><tr><td>Trip # </td><td align="right">5618</td></tr><tr><td>Distance </td><td align="right">96 miles</td><tr><td>Date</td><td align="right">2017-12-04 14:06:12.879214</td></tr></table></div>')[0];
                  popup_bcc5cafedd5f4c7fa7ea187ef05b9eae.setContent(html_2852c43c106e4ae08e76e6171b438ea7);


              marker_8052b74369d54931b80dbd61285c7688.bindPopup(popup_bcc5cafedd5f4c7fa7ea187ef05b9eae);





              var marker_991753734af24c93ae8b28e056e31f2a = L.marker(
                  [43.55195779,-75.43865687],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_6b9cb33277d245a39ee3a2035bb4f88c = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_991753734af24c93ae8b28e056e31f2a.setIcon(icon_6b9cb33277d245a39ee3a2035bb4f88c);


              var popup_4a0f73ed38fc434eb3f02b35dbb3aa16 = L.popup({maxWidth: '300'});


                  var html_f094ad4e0a494db393815295ef8c101a = $('<div id="html_f094ad4e0a494db393815295ef8c101a" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>135</th></tr><tr><td>Trip # </td><td align="right">5628</td></tr><tr><td>Distance </td><td align="right">52 miles</td><tr><td>Date</td><td align="right">2017-12-04 11:15:47.994572</td></tr></table></div>')[0];
                  popup_4a0f73ed38fc434eb3f02b35dbb3aa16.setContent(html_f094ad4e0a494db393815295ef8c101a);


              marker_991753734af24c93ae8b28e056e31f2a.bindPopup(popup_4a0f73ed38fc434eb3f02b35dbb3aa16);





              var marker_b9e36725a5da4f5fb34a41d5279c371c = L.marker(
                  [44.095786,-76.19146567],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_08b4bc9587ff419293e08d48a62b86df = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_b9e36725a5da4f5fb34a41d5279c371c.setIcon(icon_08b4bc9587ff419293e08d48a62b86df);


              var popup_8584567fd5d24679a41fcd1a5ba21ad2 = L.popup({maxWidth: '300'});


                  var html_a6f0ca670f9b45c7891bbeeac86726cd = $('<div id="html_a6f0ca670f9b45c7891bbeeac86726cd" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>135</th></tr><tr><td>Trip # </td><td align="right">5628</td></tr><tr><td>Distance </td><td align="right">52 miles</td><tr><td>Date</td><td align="right">2017-12-04 11:15:47.994572</td></tr></table></div>')[0];
                  popup_8584567fd5d24679a41fcd1a5ba21ad2.setContent(html_a6f0ca670f9b45c7891bbeeac86726cd);


              marker_b9e36725a5da4f5fb34a41d5279c371c.bindPopup(popup_8584567fd5d24679a41fcd1a5ba21ad2);





              var marker_a4a2cbcaec4847f6aa7534328ac3b490 = L.marker(
                  [43.97775701,-75.60219163],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_ecfa1d0993974fa0b8977b1413ca9b71 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_a4a2cbcaec4847f6aa7534328ac3b490.setIcon(icon_ecfa1d0993974fa0b8977b1413ca9b71);


              var popup_1df92987f23b49bcbfe072580b05e326 = L.popup({maxWidth: '300'});


                  var html_c6a1c80dfb334629a002ec7b0f9e4489 = $('<div id="html_c6a1c80dfb334629a002ec7b0f9e4489" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>23</th></tr><tr><td>Trip # </td><td align="right">5844</td></tr><tr><td>Distance </td><td align="right">61 miles</td><tr><td>Date</td><td align="right">2017-12-06 03:31:16.710496</td></tr></table></div>')[0];
                  popup_1df92987f23b49bcbfe072580b05e326.setContent(html_c6a1c80dfb334629a002ec7b0f9e4489);


              marker_a4a2cbcaec4847f6aa7534328ac3b490.bindPopup(popup_1df92987f23b49bcbfe072580b05e326);





              var marker_076b6880c8d7405aadec55b68187db23 = L.marker(
                  [43.35040894,-76.51361926],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_292bbc4324bd450b952fedb43267e243 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_076b6880c8d7405aadec55b68187db23.setIcon(icon_292bbc4324bd450b952fedb43267e243);


              var popup_c1e8800fd05546f5a94871687cb95e19 = L.popup({maxWidth: '300'});


                  var html_c39067c424644846bbff1c123a5ffb31 = $('<div id="html_c39067c424644846bbff1c123a5ffb31" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>23</th></tr><tr><td>Trip # </td><td align="right">5844</td></tr><tr><td>Distance </td><td align="right">61 miles</td><tr><td>Date</td><td align="right">2017-12-06 03:31:16.710496</td></tr></table></div>')[0];
                  popup_c1e8800fd05546f5a94871687cb95e19.setContent(html_c39067c424644846bbff1c123a5ffb31);


              marker_076b6880c8d7405aadec55b68187db23.bindPopup(popup_c1e8800fd05546f5a94871687cb95e19);





              var marker_793593fc56e34a549c6a0df736e08f4b = L.marker(
                  [44.01729044,-75.80327832],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_7e18dc9f95a24dfb97c743f6bf5028c1 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_793593fc56e34a549c6a0df736e08f4b.setIcon(icon_7e18dc9f95a24dfb97c743f6bf5028c1);


              var popup_e53f816c5f1c471689de815449abd5e3 = L.popup({maxWidth: '300'});


                  var html_f27b0c47ebfa4c77a120d5ad4c36b7e0 = $('<div id="html_f27b0c47ebfa4c77a120d5ad4c36b7e0" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">5499</td></tr><tr><td>Distance </td><td align="right">53 miles</td><tr><td>Date</td><td align="right">2017-12-13 17:40:45.393414</td></tr></table></div>')[0];
                  popup_e53f816c5f1c471689de815449abd5e3.setContent(html_f27b0c47ebfa4c77a120d5ad4c36b7e0);


              marker_793593fc56e34a549c6a0df736e08f4b.bindPopup(popup_e53f816c5f1c471689de815449abd5e3);





              var marker_5de74b7585f34746bfd1949f30f73093 = L.marker(
                  [44.62498994,-75.09529551],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_5a09c2833f7e44ed90b4343f8a0a67e2 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_5de74b7585f34746bfd1949f30f73093.setIcon(icon_5a09c2833f7e44ed90b4343f8a0a67e2);


              var popup_c2a5d6f1f54549adb5deeb50fab64d40 = L.popup({maxWidth: '300'});


                  var html_03a359d4b41a47a381f5ae1580577734 = $('<div id="html_03a359d4b41a47a381f5ae1580577734" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">5499</td></tr><tr><td>Distance </td><td align="right">53 miles</td><tr><td>Date</td><td align="right">2017-12-13 17:40:45.393414</td></tr></table></div>')[0];
                  popup_c2a5d6f1f54549adb5deeb50fab64d40.setContent(html_03a359d4b41a47a381f5ae1580577734);


              marker_5de74b7585f34746bfd1949f30f73093.bindPopup(popup_c2a5d6f1f54549adb5deeb50fab64d40);





              var marker_e79bd85b5d39426aa6f9c2b5ef8aa217 = L.marker(
                  [44.62498994,-75.09529551],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_c7e3bdd07ee1483785318ebb99122e38 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_e79bd85b5d39426aa6f9c2b5ef8aa217.setIcon(icon_c7e3bdd07ee1483785318ebb99122e38);


              var popup_b712e6610c434b498253a9b0f31b3a92 = L.popup({maxWidth: '300'});


                  var html_be32cc6503164822a6953a3cf6340856 = $('<div id="html_be32cc6503164822a6953a3cf6340856" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>85</th></tr><tr><td>Trip # </td><td align="right">5573</td></tr><tr><td>Distance </td><td align="right">59 miles</td><tr><td>Date</td><td align="right">2017-12-11 15:15:19.424729</td></tr></table></div>')[0];
                  popup_b712e6610c434b498253a9b0f31b3a92.setContent(html_be32cc6503164822a6953a3cf6340856);


              marker_e79bd85b5d39426aa6f9c2b5ef8aa217.bindPopup(popup_b712e6610c434b498253a9b0f31b3a92);





              var marker_b9235f4ac87b42f2aeac8c075ba1a8a3 = L.marker(
                  [43.97585231,-75.91935819],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_2e56504ee89940b3ac74c2ead5600002 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_b9235f4ac87b42f2aeac8c075ba1a8a3.setIcon(icon_2e56504ee89940b3ac74c2ead5600002);


              var popup_bfcf7052c7fe4e45ab1e1ef3c529f577 = L.popup({maxWidth: '300'});


                  var html_4ed21c8a63b348459653f76bfac56314 = $('<div id="html_4ed21c8a63b348459653f76bfac56314" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>85</th></tr><tr><td>Trip # </td><td align="right">5573</td></tr><tr><td>Distance </td><td align="right">59 miles</td><tr><td>Date</td><td align="right">2017-12-11 15:15:19.424729</td></tr></table></div>')[0];
                  popup_bfcf7052c7fe4e45ab1e1ef3c529f577.setContent(html_4ed21c8a63b348459653f76bfac56314);


              marker_b9235f4ac87b42f2aeac8c075ba1a8a3.bindPopup(popup_bfcf7052c7fe4e45ab1e1ef3c529f577);





              var marker_10f55c18990d44b081f84df4977eac07 = L.marker(
                  [44.12514532,-76.34015962],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_7a4572780f3247f3be890ccdd8723b34 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_10f55c18990d44b081f84df4977eac07.setIcon(icon_7a4572780f3247f3be890ccdd8723b34);


              var popup_fdf189f9d77f49b5aa8969b92731cea4 = L.popup({maxWidth: '300'});


                  var html_6951efd1959347348d8f31f18d0c3f68 = $('<div id="html_6951efd1959347348d8f31f18d0c3f68" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>180</th></tr><tr><td>Trip # </td><td align="right">6077</td></tr><tr><td>Distance </td><td align="right">65 miles</td><tr><td>Date</td><td align="right">2017-12-11 13:51:02.089014</td></tr></table></div>')[0];
                  popup_fdf189f9d77f49b5aa8969b92731cea4.setContent(html_6951efd1959347348d8f31f18d0c3f68);


              marker_10f55c18990d44b081f84df4977eac07.bindPopup(popup_fdf189f9d77f49b5aa8969b92731cea4);





              var marker_b5fa495f6e47474da2e25906e97d2d29 = L.marker(
                  [44.78350794,-75.35297412],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_c704b5ab20d44617b0f3661dc105fe25 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_b5fa495f6e47474da2e25906e97d2d29.setIcon(icon_c704b5ab20d44617b0f3661dc105fe25);


              var popup_9929f5a25d274c9595dd4ad377075fdd = L.popup({maxWidth: '300'});


                  var html_e34dc2030ae6433cbbdcc9772d4954e4 = $('<div id="html_e34dc2030ae6433cbbdcc9772d4954e4" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>180</th></tr><tr><td>Trip # </td><td align="right">6077</td></tr><tr><td>Distance </td><td align="right">65 miles</td><tr><td>Date</td><td align="right">2017-12-11 13:51:02.089014</td></tr></table></div>')[0];
                  popup_9929f5a25d274c9595dd4ad377075fdd.setContent(html_e34dc2030ae6433cbbdcc9772d4954e4);


              marker_b5fa495f6e47474da2e25906e97d2d29.bindPopup(popup_9929f5a25d274c9595dd4ad377075fdd);





              var marker_6ca4b4b75e1b497695de2e2a7f0d0de6 = L.marker(
                  [44.68092414,-74.96869334],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_c8e7c271ee3c41d487a4125f0caee7a3 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_6ca4b4b75e1b497695de2e2a7f0d0de6.setIcon(icon_c8e7c271ee3c41d487a4125f0caee7a3);


              var popup_3b63befa35f148f88f5a1f985ed1ce2a = L.popup({maxWidth: '300'});


                  var html_0b48c76255eb43f7a0b60abe0cc1a607 = $('<div id="html_0b48c76255eb43f7a0b60abe0cc1a607" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>135</th></tr><tr><td>Trip # </td><td align="right">6125</td></tr><tr><td>Distance </td><td align="right">70 miles</td><tr><td>Date</td><td align="right">2017-12-11 12:46:09.039855</td></tr></table></div>')[0];
                  popup_3b63befa35f148f88f5a1f985ed1ce2a.setContent(html_0b48c76255eb43f7a0b60abe0cc1a607);


              marker_6ca4b4b75e1b497695de2e2a7f0d0de6.bindPopup(popup_3b63befa35f148f88f5a1f985ed1ce2a);





              var marker_a40deefc55c6423eaf80a70bf65d9d60 = L.marker(
                  [44.09580331,-76.19155652],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_a3bc42d473ce4f95a9275b1328da4897 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_a40deefc55c6423eaf80a70bf65d9d60.setIcon(icon_a3bc42d473ce4f95a9275b1328da4897);


              var popup_ec11a1b569704ca0bc9d4566a24b3922 = L.popup({maxWidth: '300'});


                  var html_fa557932195140faa5adbaf7a6be1aef = $('<div id="html_fa557932195140faa5adbaf7a6be1aef" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>135</th></tr><tr><td>Trip # </td><td align="right">6125</td></tr><tr><td>Distance </td><td align="right">70 miles</td><tr><td>Date</td><td align="right">2017-12-11 12:46:09.039855</td></tr></table></div>')[0];
                  popup_ec11a1b569704ca0bc9d4566a24b3922.setContent(html_fa557932195140faa5adbaf7a6be1aef);


              marker_a40deefc55c6423eaf80a70bf65d9d60.bindPopup(popup_ec11a1b569704ca0bc9d4566a24b3922);





              var marker_93cc1668cc074d90a8e1f19e1d96406c = L.marker(
                  [44.09580331,-76.19155652],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_b1608adc9f6f4f29ad240e8f6912a0ac = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_93cc1668cc074d90a8e1f19e1d96406c.setIcon(icon_b1608adc9f6f4f29ad240e8f6912a0ac);


              var popup_b9ecf488cb894960a26d287905aaf1be = L.popup({maxWidth: '300'});


                  var html_0bf8396c633842ad90c0fb12e7126548 = $('<div id="html_0bf8396c633842ad90c0fb12e7126548" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>115</th></tr><tr><td>Trip # </td><td align="right">6128</td></tr><tr><td>Distance </td><td align="right">70 miles</td><tr><td>Date</td><td align="right">2017-12-11 12:37:04.78511</td></tr></table></div>')[0];
                  popup_b9ecf488cb894960a26d287905aaf1be.setContent(html_0bf8396c633842ad90c0fb12e7126548);


              marker_93cc1668cc074d90a8e1f19e1d96406c.bindPopup(popup_b9ecf488cb894960a26d287905aaf1be);





              var marker_6e5406922a7c4f2c95771a2508388a1b = L.marker(
                  [44.67964558,-74.98459165],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_6bb3df842d5a4ba28d7be14ecfb01001 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_6e5406922a7c4f2c95771a2508388a1b.setIcon(icon_6bb3df842d5a4ba28d7be14ecfb01001);


              var popup_5f6337b92e3942e396d9d6ad4a414955 = L.popup({maxWidth: '300'});


                  var html_d0c3f4e33d374466804496b20b0381c2 = $('<div id="html_d0c3f4e33d374466804496b20b0381c2" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>115</th></tr><tr><td>Trip # </td><td align="right">6128</td></tr><tr><td>Distance </td><td align="right">70 miles</td><tr><td>Date</td><td align="right">2017-12-11 12:37:04.78511</td></tr></table></div>')[0];
                  popup_5f6337b92e3942e396d9d6ad4a414955.setContent(html_d0c3f4e33d374466804496b20b0381c2);


              marker_6e5406922a7c4f2c95771a2508388a1b.bindPopup(popup_5f6337b92e3942e396d9d6ad4a414955);





              var marker_dff06d42ca43416dbc4e17026080c712 = L.marker(
                  [44.67964558,-74.98459165],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_28ce482bd8df4f3bbb304f9cbf966a5c = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_dff06d42ca43416dbc4e17026080c712.setIcon(icon_28ce482bd8df4f3bbb304f9cbf966a5c);


              var popup_b1b2ea0b10db4d8585c019602efef9f1 = L.popup({maxWidth: '300'});


                  var html_adac397371074894b4de873cd72214b0 = $('<div id="html_adac397371074894b4de873cd72214b0" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>7</th></tr><tr><td>Trip # </td><td align="right">6145</td></tr><tr><td>Distance </td><td align="right">68 miles</td><tr><td>Date</td><td align="right">2017-12-11 09:32:40.542181</td></tr></table></div>')[0];
                  popup_b1b2ea0b10db4d8585c019602efef9f1.setContent(html_adac397371074894b4de873cd72214b0);


              marker_dff06d42ca43416dbc4e17026080c712.bindPopup(popup_b1b2ea0b10db4d8585c019602efef9f1);





              var marker_19cf60af225e46b29e7438454174518a = L.marker(
                  [43.71521526,-75.41558621],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_8f7defcd2d1543e1953876568df18ba3 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_19cf60af225e46b29e7438454174518a.setIcon(icon_8f7defcd2d1543e1953876568df18ba3);


              var popup_ba1b9f3c127a421e8f0ac70f59177650 = L.popup({maxWidth: '300'});


                  var html_9c1ee91d2ce44f21b6409cbe71bd030a = $('<div id="html_9c1ee91d2ce44f21b6409cbe71bd030a" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>7</th></tr><tr><td>Trip # </td><td align="right">6145</td></tr><tr><td>Distance </td><td align="right">68 miles</td><tr><td>Date</td><td align="right">2017-12-11 09:32:40.542181</td></tr></table></div>')[0];
                  popup_ba1b9f3c127a421e8f0ac70f59177650.setContent(html_9c1ee91d2ce44f21b6409cbe71bd030a);


              marker_19cf60af225e46b29e7438454174518a.bindPopup(popup_ba1b9f3c127a421e8f0ac70f59177650);





              var marker_727442e87dca4e71954193f40ecf6b52 = L.marker(
                  [44.23421609,-76.08724119],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_19980883fd9a41a7895dfbe545aa5b3c = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_727442e87dca4e71954193f40ecf6b52.setIcon(icon_19980883fd9a41a7895dfbe545aa5b3c);


              var popup_02c42dda7e964d949fb85a7d366f682b = L.popup({maxWidth: '300'});


                  var html_8162f926d11948259624f43188067b44 = $('<div id="html_8162f926d11948259624f43188067b44" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>13</th></tr><tr><td>Trip # </td><td align="right">6152</td></tr><tr><td>Distance </td><td align="right">55 miles</td><tr><td>Date</td><td align="right">2017-12-11 14:05:48.233075</td></tr></table></div>')[0];
                  popup_02c42dda7e964d949fb85a7d366f682b.setContent(html_8162f926d11948259624f43188067b44);


              marker_727442e87dca4e71954193f40ecf6b52.bindPopup(popup_02c42dda7e964d949fb85a7d366f682b);





              var marker_177dfda704e7487bbb1145d03cf3b105 = L.marker(
                  [43.55200591,-75.43863621],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_4068d4a0ea774258b7abaea0172f39b4 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_177dfda704e7487bbb1145d03cf3b105.setIcon(icon_4068d4a0ea774258b7abaea0172f39b4);


              var popup_2ead6a6e313f4a438b6c2dbd3dd81353 = L.popup({maxWidth: '300'});


                  var html_fae0d286875245ccb5814c752bb140aa = $('<div id="html_fae0d286875245ccb5814c752bb140aa" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>13</th></tr><tr><td>Trip # </td><td align="right">6152</td></tr><tr><td>Distance </td><td align="right">55 miles</td><tr><td>Date</td><td align="right">2017-12-11 14:05:48.233075</td></tr></table></div>')[0];
                  popup_2ead6a6e313f4a438b6c2dbd3dd81353.setContent(html_fae0d286875245ccb5814c752bb140aa);


              marker_177dfda704e7487bbb1145d03cf3b105.bindPopup(popup_2ead6a6e313f4a438b6c2dbd3dd81353);





              var marker_8ddf6841c6374761833bc7fab191bca7 = L.marker(
                  [43.92858213,-76.05465642],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_7a17e218e2694da09d71167cafa2d004 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_8ddf6841c6374761833bc7fab191bca7.setIcon(icon_7a17e218e2694da09d71167cafa2d004);


              var popup_01c73a09039849109b19617c6fc9170e = L.popup({maxWidth: '300'});


                  var html_ffcd2a98800b4fc2a97db08b2a94523f = $('<div id="html_ffcd2a98800b4fc2a97db08b2a94523f" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">6455</td></tr><tr><td>Distance </td><td align="right">85 miles</td><tr><td>Date</td><td align="right">2017-12-15 12:44:44.570004</td></tr></table></div>')[0];
                  popup_01c73a09039849109b19617c6fc9170e.setContent(html_ffcd2a98800b4fc2a97db08b2a94523f);


              marker_8ddf6841c6374761833bc7fab191bca7.bindPopup(popup_01c73a09039849109b19617c6fc9170e);





              var marker_d3de8f0d79c74e01be71259e410313e0 = L.marker(
                  [44.87317418,-74.87133788],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_dac1bdbf327a4ea2a31deacae0212721 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_d3de8f0d79c74e01be71259e410313e0.setIcon(icon_dac1bdbf327a4ea2a31deacae0212721);


              var popup_0fbdb01f8e7948168ab9bc6188744d7c = L.popup({maxWidth: '300'});


                  var html_181904b1fc554a8f9032552dfbb0f4aa = $('<div id="html_181904b1fc554a8f9032552dfbb0f4aa" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>nan</th></tr><tr><td>Trip # </td><td align="right">6455</td></tr><tr><td>Distance </td><td align="right">85 miles</td><tr><td>Date</td><td align="right">2017-12-15 12:44:44.570004</td></tr></table></div>')[0];
                  popup_0fbdb01f8e7948168ab9bc6188744d7c.setContent(html_181904b1fc554a8f9032552dfbb0f4aa);


              marker_d3de8f0d79c74e01be71259e410313e0.bindPopup(popup_0fbdb01f8e7948168ab9bc6188744d7c);





              var marker_96b07132f09149689cadffb55fcb8d74 = L.marker(
                  [43.11867168,-76.14327883],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_7350bb932eef4ada937cfbd6af707c88 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_96b07132f09149689cadffb55fcb8d74.setIcon(icon_7350bb932eef4ada937cfbd6af707c88);


              var popup_1f4e092161f54023b35a315e2479316a = L.popup({maxWidth: '300'});


                  var html_250cd0fbd3b9442e9317062f264df1d6 = $('<div id="html_250cd0fbd3b9442e9317062f264df1d6" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>85</th></tr><tr><td>Trip # </td><td align="right">6490</td></tr><tr><td>Distance </td><td align="right">58 miles</td><tr><td>Date</td><td align="right">2017-12-14 17:55:47.450271</td></tr></table></div>')[0];
                  popup_1f4e092161f54023b35a315e2479316a.setContent(html_250cd0fbd3b9442e9317062f264df1d6);


              marker_96b07132f09149689cadffb55fcb8d74.bindPopup(popup_1f4e092161f54023b35a315e2479316a);





              var marker_9ee46e656eef476eb3ed0b36799990de = L.marker(
                  [43.97593354,-75.91918034],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_b950f668ac454316b61a2f520c8efce8 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_9ee46e656eef476eb3ed0b36799990de.setIcon(icon_b950f668ac454316b61a2f520c8efce8);


              var popup_ab97c1009abc4ff0969cc88ab890f12c = L.popup({maxWidth: '300'});


                  var html_d61a8a0928e74cad823b930e9e926312 = $('<div id="html_d61a8a0928e74cad823b930e9e926312" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>85</th></tr><tr><td>Trip # </td><td align="right">6490</td></tr><tr><td>Distance </td><td align="right">58 miles</td><tr><td>Date</td><td align="right">2017-12-14 17:55:47.450271</td></tr></table></div>')[0];
                  popup_ab97c1009abc4ff0969cc88ab890f12c.setContent(html_d61a8a0928e74cad823b930e9e926312);


              marker_9ee46e656eef476eb3ed0b36799990de.bindPopup(popup_ab97c1009abc4ff0969cc88ab890f12c);





              var marker_477e6f52e1cf4cafadecd65d7020ca9c = L.marker(
                  [43.81351159,-76.02030273],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_eb00da32a5994965a677d72e4bc43c47 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_477e6f52e1cf4cafadecd65d7020ca9c.setIcon(icon_eb00da32a5994965a677d72e4bc43c47);


              var popup_2adc1d2693d241e4b0735ba8aec1a012 = L.popup({maxWidth: '300'});


                  var html_2f62485e28d1409fa10a1ba83b246f37 = $('<div id="html_2f62485e28d1409fa10a1ba83b246f37" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>129</th></tr><tr><td>Trip # </td><td align="right">6489</td></tr><tr><td>Distance </td><td align="right">92 miles</td><tr><td>Date</td><td align="right">2017-12-18 14:09:48.339775</td></tr></table></div>')[0];
                  popup_2adc1d2693d241e4b0735ba8aec1a012.setContent(html_2f62485e28d1409fa10a1ba83b246f37);


              marker_477e6f52e1cf4cafadecd65d7020ca9c.bindPopup(popup_2adc1d2693d241e4b0735ba8aec1a012);





              var marker_f4640713098e470aa491bcc2fa6d78ac = L.marker(
                  [44.92491167,-74.87393928],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_18bfc436f8ea486789f723a993ffaf5e = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_f4640713098e470aa491bcc2fa6d78ac.setIcon(icon_18bfc436f8ea486789f723a993ffaf5e);


              var popup_9ad7fdae1ffd41ca8344456881b9a0f9 = L.popup({maxWidth: '300'});


                  var html_8421b33e137643748028f4a55645d86c = $('<div id="html_8421b33e137643748028f4a55645d86c" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>129</th></tr><tr><td>Trip # </td><td align="right">6489</td></tr><tr><td>Distance </td><td align="right">92 miles</td><tr><td>Date</td><td align="right">2017-12-18 14:09:48.339775</td></tr></table></div>')[0];
                  popup_9ad7fdae1ffd41ca8344456881b9a0f9.setContent(html_8421b33e137643748028f4a55645d86c);


              marker_f4640713098e470aa491bcc2fa6d78ac.bindPopup(popup_9ad7fdae1ffd41ca8344456881b9a0f9);





              var marker_7a4d098c231f4d36940e6e5ece54d620 = L.marker(
                  [44.92491167,-74.87393928],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_dff5bd414db5485e9d3afad3527fe156 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_7a4d098c231f4d36940e6e5ece54d620.setIcon(icon_dff5bd414db5485e9d3afad3527fe156);


              var popup_fa2ab68df56a432885637b0779d09149 = L.popup({maxWidth: '300'});


                  var html_4c2fa599a3b24831bdc6d7f1f1eadd28 = $('<div id="html_4c2fa599a3b24831bdc6d7f1f1eadd28" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>87</th></tr><tr><td>Trip # </td><td align="right">6503</td></tr><tr><td>Distance </td><td align="right">76 miles</td><tr><td>Date</td><td align="right">2017-12-18 16:04:21.722864</td></tr></table></div>')[0];
                  popup_fa2ab68df56a432885637b0779d09149.setContent(html_4c2fa599a3b24831bdc6d7f1f1eadd28);


              marker_7a4d098c231f4d36940e6e5ece54d620.bindPopup(popup_fa2ab68df56a432885637b0779d09149);





              var marker_da126cedad9144a4878a251247449567 = L.marker(
                  [43.8878888958775,-75.5130367071502],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_37370c3f0acf4fcda46d94ca36cdf248 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_da126cedad9144a4878a251247449567.setIcon(icon_37370c3f0acf4fcda46d94ca36cdf248);


              var popup_1102787d44414989afa9e7460731cbc7 = L.popup({maxWidth: '300'});


                  var html_f3295df4ca32439583293da95ad14b0b = $('<div id="html_f3295df4ca32439583293da95ad14b0b" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>87</th></tr><tr><td>Trip # </td><td align="right">6503</td></tr><tr><td>Distance </td><td align="right">76 miles</td><tr><td>Date</td><td align="right">2017-12-18 16:04:21.722864</td></tr></table></div>')[0];
                  popup_1102787d44414989afa9e7460731cbc7.setContent(html_f3295df4ca32439583293da95ad14b0b);


              marker_da126cedad9144a4878a251247449567.bindPopup(popup_1102787d44414989afa9e7460731cbc7);





              var marker_227a13d6ce5e4cc08fc29b74be1bdee1 = L.marker(
                  [43.71538319,-75.41547595],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_1f6a2530b6af40f49846179cb2b1da31 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_227a13d6ce5e4cc08fc29b74be1bdee1.setIcon(icon_1f6a2530b6af40f49846179cb2b1da31);


              var popup_d987b966f46b4cf39409e81ffd293695 = L.popup({maxWidth: '300'});


                  var html_08ac3d73641446d5b18a21fed8b6118b = $('<div id="html_08ac3d73641446d5b18a21fed8b6118b" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>100</th></tr><tr><td>Trip # </td><td align="right">6592</td></tr><tr><td>Distance </td><td align="right">68 miles</td><tr><td>Date</td><td align="right">2017-12-18 17:06:17.775152</td></tr></table></div>')[0];
                  popup_d987b966f46b4cf39409e81ffd293695.setContent(html_08ac3d73641446d5b18a21fed8b6118b);


              marker_227a13d6ce5e4cc08fc29b74be1bdee1.bindPopup(popup_d987b966f46b4cf39409e81ffd293695);





              var marker_6f6770cc9fb548b394d8b4131fc68611 = L.marker(
                  [44.68093154,-74.96869092],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_2030218445a54b97935e1d883d9de9a5 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_6f6770cc9fb548b394d8b4131fc68611.setIcon(icon_2030218445a54b97935e1d883d9de9a5);


              var popup_7f95483132ec405584349e2bbcda5897 = L.popup({maxWidth: '300'});


                  var html_28b15149d93d4ecbb39ce9aa2c4590cf = $('<div id="html_28b15149d93d4ecbb39ce9aa2c4590cf" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>100</th></tr><tr><td>Trip # </td><td align="right">6592</td></tr><tr><td>Distance </td><td align="right">68 miles</td><tr><td>Date</td><td align="right">2017-12-18 17:06:17.775152</td></tr></table></div>')[0];
                  popup_7f95483132ec405584349e2bbcda5897.setContent(html_28b15149d93d4ecbb39ce9aa2c4590cf);


              marker_6f6770cc9fb548b394d8b4131fc68611.bindPopup(popup_7f95483132ec405584349e2bbcda5897);





              var marker_eadd2f9c138641e095b0867c4889b216 = L.marker(
                  [44.68093154,-74.96869092],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_cd392d7c998a48249d877c48ac299127 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_eadd2f9c138641e095b0867c4889b216.setIcon(icon_cd392d7c998a48249d877c48ac299127);


              var popup_5a0b54516dba4b2b90cbba32c41bb92c = L.popup({maxWidth: '300'});


                  var html_c3d4abf92abe4af8ba7cfcf1e2bad31d = $('<div id="html_c3d4abf92abe4af8ba7cfcf1e2bad31d" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>135</th></tr><tr><td>Trip # </td><td align="right">6633</td></tr><tr><td>Distance </td><td align="right">70 miles</td><tr><td>Date</td><td align="right">2017-12-18 13:36:30.991028</td></tr></table></div>')[0];
                  popup_5a0b54516dba4b2b90cbba32c41bb92c.setContent(html_c3d4abf92abe4af8ba7cfcf1e2bad31d);


              marker_eadd2f9c138641e095b0867c4889b216.bindPopup(popup_5a0b54516dba4b2b90cbba32c41bb92c);





              var marker_412eaef9313549a4920fabc05aa891ba = L.marker(
                  [44.09570258,-76.19135403],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_a05d288b030c4e7683559d59bbe309bc = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_412eaef9313549a4920fabc05aa891ba.setIcon(icon_a05d288b030c4e7683559d59bbe309bc);


              var popup_1dd1132ca7954e7b819c683cffe725d7 = L.popup({maxWidth: '300'});


                  var html_af3c2080042545fd8c1c7ec7ab56ebf3 = $('<div id="html_af3c2080042545fd8c1c7ec7ab56ebf3" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>135</th></tr><tr><td>Trip # </td><td align="right">6633</td></tr><tr><td>Distance </td><td align="right">70 miles</td><tr><td>Date</td><td align="right">2017-12-18 13:36:30.991028</td></tr></table></div>')[0];
                  popup_1dd1132ca7954e7b819c683cffe725d7.setContent(html_af3c2080042545fd8c1c7ec7ab56ebf3);


              marker_412eaef9313549a4920fabc05aa891ba.bindPopup(popup_1dd1132ca7954e7b819c683cffe725d7);





              var marker_2f2a7ab3c1af4a81bf2beaa4b212b3ea = L.marker(
                  [43.97579943,-75.91917264],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_08ac2937fb7142ddac297808f0609594 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_2f2a7ab3c1af4a81bf2beaa4b212b3ea.setIcon(icon_08ac2937fb7142ddac297808f0609594);


              var popup_71070c36e553429598f56274bd4669e5 = L.popup({maxWidth: '300'});


                  var html_7ced8493d2cd4d079ea686b1685b2bb1 = $('<div id="html_7ced8493d2cd4d079ea686b1685b2bb1" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>130</th></tr><tr><td>Trip # </td><td align="right">7050</td></tr><tr><td>Distance </td><td align="right">54 miles</td><tr><td>Date</td><td align="right">2017-12-26 15:08:53.281368</td></tr></table></div>')[0];
                  popup_71070c36e553429598f56274bd4669e5.setContent(html_7ced8493d2cd4d079ea686b1685b2bb1);


              marker_2f2a7ab3c1af4a81bf2beaa4b212b3ea.bindPopup(popup_71070c36e553429598f56274bd4669e5);





              var marker_766527a950414e03b4ae540cb9bc5d73 = L.marker(
                  [44.70769558,-75.45698693],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_d8c9f7e1f60a4536b56fc216b8669744 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_766527a950414e03b4ae540cb9bc5d73.setIcon(icon_d8c9f7e1f60a4536b56fc216b8669744);


              var popup_05d9510f5c3a4c34ae3504ac5ee5741a = L.popup({maxWidth: '300'});


                  var html_3872d826f0e2441cb6a9b738672d420d = $('<div id="html_3872d826f0e2441cb6a9b738672d420d" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>130</th></tr><tr><td>Trip # </td><td align="right">7050</td></tr><tr><td>Distance </td><td align="right">54 miles</td><tr><td>Date</td><td align="right">2017-12-26 15:08:53.281368</td></tr></table></div>')[0];
                  popup_05d9510f5c3a4c34ae3504ac5ee5741a.setContent(html_3872d826f0e2441cb6a9b738672d420d);


              marker_766527a950414e03b4ae540cb9bc5d73.bindPopup(popup_05d9510f5c3a4c34ae3504ac5ee5741a);





              var marker_ea299095f5594fdbba53a53c1f782926 = L.marker(
                  [44.70769558,-75.45698693],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_b4b32cc57020475c91c51bd72fad346a = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_ea299095f5594fdbba53a53c1f782926.setIcon(icon_b4b32cc57020475c91c51bd72fad346a);


              var popup_95b9c242bb4548819434a79f8237fbb1 = L.popup({maxWidth: '300'});


                  var html_02070da8fcc5433ba1dfcd6839bed5e8 = $('<div id="html_02070da8fcc5433ba1dfcd6839bed5e8" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>7</th></tr><tr><td>Trip # </td><td align="right">7057</td></tr><tr><td>Distance </td><td align="right">66 miles</td><tr><td>Date</td><td align="right">2017-12-26 17:15:39.13018</td></tr></table></div>')[0];
                  popup_95b9c242bb4548819434a79f8237fbb1.setContent(html_02070da8fcc5433ba1dfcd6839bed5e8);


              marker_ea299095f5594fdbba53a53c1f782926.bindPopup(popup_95b9c242bb4548819434a79f8237fbb1);





              var marker_955d49fcf32046e9ac93efa511011fd7 = L.marker(
                  [43.71553276,-75.41568574],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_da835683a9b249448b5eaef34ec12a49 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_955d49fcf32046e9ac93efa511011fd7.setIcon(icon_da835683a9b249448b5eaef34ec12a49);


              var popup_b71a46c144644c9cadc8227cfcd5a544 = L.popup({maxWidth: '300'});


                  var html_a9b7ef4a76f74b3691cd7e0c2be178d5 = $('<div id="html_a9b7ef4a76f74b3691cd7e0c2be178d5" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>7</th></tr><tr><td>Trip # </td><td align="right">7057</td></tr><tr><td>Distance </td><td align="right">66 miles</td><tr><td>Date</td><td align="right">2017-12-26 17:15:39.13018</td></tr></table></div>')[0];
                  popup_b71a46c144644c9cadc8227cfcd5a544.setContent(html_a9b7ef4a76f74b3691cd7e0c2be178d5);


              marker_955d49fcf32046e9ac93efa511011fd7.bindPopup(popup_b71a46c144644c9cadc8227cfcd5a544);





              var marker_aaa8e1f485d44d53a1eac1ad376152a4 = L.marker(
                  [44.1700892600457,-75.838541848663],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_01bf6d0893384af68dbe5f5b37fcc08f = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_aaa8e1f485d44d53a1eac1ad376152a4.setIcon(icon_01bf6d0893384af68dbe5f5b37fcc08f);


              var popup_4409910d3b8042bca04956b7c9ebaf25 = L.popup({maxWidth: '300'});


                  var html_7e7d60e44b184cf89eceb7b68f0e3976 = $('<div id="html_7e7d60e44b184cf89eceb7b68f0e3976" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>40</th></tr><tr><td>Trip # </td><td align="right">7099</td></tr><tr><td>Distance </td><td align="right">66 miles</td><tr><td>Date</td><td align="right">2017-12-27 21:07:23.625828</td></tr></table></div>')[0];
                  popup_4409910d3b8042bca04956b7c9ebaf25.setContent(html_7e7d60e44b184cf89eceb7b68f0e3976);


              marker_aaa8e1f485d44d53a1eac1ad376152a4.bindPopup(popup_4409910d3b8042bca04956b7c9ebaf25);





              var marker_4d85a829e68540948a178e72e0e36221 = L.marker(
                  [44.8725253,-74.87279745],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_9f59285f7b5c4e8da723f83e91fb37a7 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_4d85a829e68540948a178e72e0e36221.setIcon(icon_9f59285f7b5c4e8da723f83e91fb37a7);


              var popup_a956092012814eaf9262fa84434c56c7 = L.popup({maxWidth: '300'});


                  var html_f4b41f8d4c3744068b51d246a642bf50 = $('<div id="html_f4b41f8d4c3744068b51d246a642bf50" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>40</th></tr><tr><td>Trip # </td><td align="right">7099</td></tr><tr><td>Distance </td><td align="right">66 miles</td><tr><td>Date</td><td align="right">2017-12-27 21:07:23.625828</td></tr></table></div>')[0];
                  popup_a956092012814eaf9262fa84434c56c7.setContent(html_f4b41f8d4c3744068b51d246a642bf50);


              marker_4d85a829e68540948a178e72e0e36221.bindPopup(popup_a956092012814eaf9262fa84434c56c7);





              var marker_9a7aca758ef546ad8c9ab495030a766b = L.marker(
                  [44.8107660344283,-74.7519992190566],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_3f33d577f2b243229db0c6829f1611d2 = L.AwesomeMarkers.icon({
                      icon: 'star',
                      iconColor: 'white',
                      markerColor: 'green',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_9a7aca758ef546ad8c9ab495030a766b.setIcon(icon_3f33d577f2b243229db0c6829f1611d2);


              var popup_4524d0a959ed48fd8b1b9cc02eec84df = L.popup({maxWidth: '300'});


                  var html_468dd8a782254a998fc9d48c2f059765 = $('<div id="html_468dd8a782254a998fc9d48c2f059765" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>75</th></tr><tr><td>Trip # </td><td align="right">7367</td></tr><tr><td>Distance </td><td align="right">71 miles</td><tr><td>Date</td><td align="right">2017-12-29 20:58:00.807997</td></tr></table></div>')[0];
                  popup_4524d0a959ed48fd8b1b9cc02eec84df.setContent(html_468dd8a782254a998fc9d48c2f059765);


              marker_9a7aca758ef546ad8c9ab495030a766b.bindPopup(popup_4524d0a959ed48fd8b1b9cc02eec84df);





              var marker_34b099bd51704089a79c757fcdf68fa4 = L.marker(
                  [43.952119316209405,-75.631431272801],
                  {
                      icon: new L.Icon.Default()
                      }
                  )
                  .addTo(feature_group_a17bad20cf4c41dbb0779dec3a88d621);



                  var icon_fa31f8c0944a4c40806ceab9ed102430 = L.AwesomeMarkers.icon({
                      icon: 'stop',
                      iconColor: 'white',
                      markerColor: 'red',
                      prefix: 'glyphicon',
                      extraClasses: 'fa-rotate-0'
                      });
                  marker_34b099bd51704089a79c757fcdf68fa4.setIcon(icon_fa31f8c0944a4c40806ceab9ed102430);


              var popup_e04e2051b8294b66b78217b5c643e6cb = L.popup({maxWidth: '300'});


                  var html_80c8ce0c3cd04c25b8af940dc0415052 = $('<div id="html_80c8ce0c3cd04c25b8af940dc0415052" style="width: 100.0%; height: 100.0%;"><table><tr><th align="right">Driver #</th><td>75</th></tr><tr><td>Trip # </td><td align="right">7367</td></tr><tr><td>Distance </td><td align="right">71 miles</td><tr><td>Date</td><td align="right">2017-12-29 20:58:00.807997</td></tr></table></div>')[0];
                  popup_e04e2051b8294b66b78217b5c643e6cb.setContent(html_80c8ce0c3cd04c25b8af940dc0415052);


              marker_34b099bd51704089a79c757fcdf68fa4.bindPopup(popup_e04e2051b8294b66b78217b5c643e6cb);




              var layer_control_dff725695d104c8c950828eb626b4f42 = {
                  base_layers : { "stamentoner" : tile_layer_88d29062cf0447e9b628d949b21e8d6b, },
                  overlays : { "> 100 miles" : feature_group_9b0088be39ea42b3b366996b61f25468,"50-100 miles" : feature_group_a17bad20cf4c41dbb0779dec3a88d621, }
                  };
              L.control.layers(
                  layer_control_dff725695d104c8c950828eb626b4f42.base_layers,
                  layer_control_dff725695d104c8c950828eb626b4f42.overlays,
                  {position: 'topright',
                   collapsed: false,
                   autoZIndex: true
                  }).addTo(map_c719de9ea5a34ac2b96363b99c172fbb);
}

document.getElementById("deadhead").onclick = testVisual();
