

// Update Data Summary Numbers based on provided array
function updateDataSummary(someDataObjArray) {
  var numTrips = document.getElementById('num-trips');
  var numEvents = document.getElementById('num-events');
  var numDrivers = document.getElementById('num-drivers');

  numTrips.innerHTML = someDataObjArray[0];
  numEvents.innerHTML = someDataObjArray[1];
  numDrivers.innerHTML = someDataObjArray[2];
}
updateDataSummary();

// Update the map visual displayed in the div
function updateMapVisual() {
  var map = document.getElementById('mapid');
  map.innerHTML = 'TEST---TEST';
}
updateMapVisual();







//
d3.json("../data/" + , function(data) {
  console.log(data[0]);
});


// function btnTest() {
//     alert("I am an alert box! Your Button Worked!");
// }
//
// function TagName() {
//   var el = document.getElementsByTagName('etagname')[0];
//   alert(getSelectValues(el));
// }
//
//
//
// var heatmap_data = "heat_data.json"
// var crow_flies = "crow_data.json"
//
//
//





// function arrayList() {
//   var el = document.getElementById('event_start_trip').value;
//   alert(getSelectValues(el));
//   debugger;
// }
// var yes = document.getElementById('event_start_trip').checked;
// function arrayList() {
//   if (yes) {
//     var al = document.getElementById('event_start_trip').value;
//     console.log(al);
//     alert(al);
//   }
//   else {
//     var al = 'no'
//     console.log(al);
//     alert(al);
//   }
//   // alert(al);
// }

// event_start_trip
//
//   var dataTable;
//
//   function initializeFilters() {
//     $('.filter input:checked').each(function() {
//       var chkbox = $(this)[0];
//       var label = chkbox.parentElement.textContent;
//       var filterType = $(this).attr('data-filter-type');
//       updateFilter(label, filterType, chkbox, true);
//     });
//
//     $('.tkt-filter #filter-clear').click(clearFilters);
//     $('.tkt-filter input[type=checkbox').each(function() {
//       // if i want to have an all button, can use a data-param to force continue
//
//       var elem = $(this)[0];
//       var label = elem.parentElement.textContent;
//       var filterType = $(this).attr('data-filter-type');
//
//       $(this).click(function() {
//         updateFilter(label, filterType, this);
//       });
//     });
//   }
//
//   function updateFilter(text, filterType, chk, bNoRefresh) {
//     if (!dataTable) return;
//
//     if (!chk.checked) {
//       $(".tkt-filter #filterDisplay span.filter-" + filterType).filter(function() {
//         // so much whitespace, fml
//         return $.trim($(this)[0].childNodes[0].textContent) === $.trim(text);
//       }).remove();
//     }
//     else {
//       var badge = '<span class="badge badge-pale-ale filter-' + filterType + '">' + text + '<a href="#" onclick="dismissFilter(\'' + chk.id + '\');"><i class="fa fa-times-circle remove-filter" aria-hidden="true"></i></a></span>';
//       $('.tkt-filter #filterDisplay').append(badge);
//     }
//
//     if (!bNoRefresh) {
//       dataTable.draw();
//     }
//   }
//
//   function dismissFilter(objId) {
//     document.getElementById(objId).click();
//   }
//
//   function getSelectedFiltersFromMenu(ddlIdPrefix) {
//     var ddlId = '#' + ddlIdPrefix + '-filter'
//     var selectedFilters = [];
//     $('.tkt-filter ' + ddlId + ' input:checked').each(function() {
//       selectedFilters.push($(this).val());
//     });
//     return selectedFilters;
//   }
//
//   function clearFilters() {
//     if (!dataTable) return;
//
//     $('.tkt-filter input:checked').prop('checked', false);
//     $('.tkt-filter #filterDisplay').html('');
//     dataTable.draw();
//   }
