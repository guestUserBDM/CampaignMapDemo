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
        dataBarChart = $.prepareDataForBarChart(arrayDataLinearChart,data);
        dataTotalInvestment = $.getFullYearInvestment(arrayDataLinearChart);
        dataHeatMap = $.prepareDataForHeatMap(dataTotalInvestment,data);
        $.drawLineChart(arrayDataLinearChart);
        $.drawBarChart(dataBarChart);
        $.drawHeatMap(dataHeatMap);
        $.drawLegend();
        $('button.handCursor').removeClass('hidden_campaign')
    })
      .fail(function(data) {
        alert( "Fallo en la carga de datos" );
    });
//END Ajax Calls

$.getFullYearInvestment = function(totalArray) {
	sum = 0
	$.each(totalArray,function(){sum+= this || 0;});
	return sum
};
//END doc READY
});