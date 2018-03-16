/*****************************************
	This file must be loaded ALWAYS after 
	al graphic types javascripts, because 
	needs all of their functions
*******************************************/
// SET GLOBALS
var color = ["#a8a8a8", "#B9D12E", "#B7D7E9","#FE0000", "#3473BA", "#FE7A22"]
$( document ).ready(function() {
// Ajax calls
    $.ajax({
      method: "GET",
      crossDomain: true,
      dataType: "JSON",
      url: "http:localhost:3000/comparative/get_campaign_map_json",
      beforeSend: function(xhr){
        xhr.setRequestHeader('x-bit-subscription', 20);
      },
      headers: {
        'Authorization': 'Token token=44d7817dc75942288e8b36425cfbdea12'},
      })
      .done(function( data ) {
        arrayDataLinearChart = $.prepareDataForLinearChart(data);
        dataBarChart = $.prepareDataForBarChart(arrayDataLinearChart,data)
        $.drawLineChart(arrayDataLinearChart);
        $.drawBarChart(dataBarChart);
        $.drawLegend();
    })
      .fail(function(data) {
        alert( "Fallo en la carga de datos" );
    });
 //END Ajax Calls

//BEGUIN render of graph in page
// $.drawLineChart(undefined);
//END render of graph in page
//END doc READY
});