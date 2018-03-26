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
        $.renderFullPage(data);
        $('button.handCursor').removeClass('hidden_campaign')
    })
      .fail(function(data) {
        alert( "Fallo en la carga de datos" );
    });
//END Ajax Calls

// -- define your functions
//This function receive the data response and render all graphics
$.renderFullPage = function(data){
	arrayDataLinearChart = $.prepareDataForLinearChart(data);
    dataBarChart = $.prepareDataForBarChart(arrayDataLinearChart,data);
    dataTotalInvestment = $.getFullYearInvestment(arrayDataLinearChart);
    dataHeatMap = $.prepareDataForHeatMap(dataTotalInvestment,data);
    $.drawLineChart(arrayDataLinearChart);
    $.drawBarChart(dataBarChart);
    $.drawHeatMap(dataHeatMap);
    $.drawLegend();
}//END FUNCTION: $.renderFullPage()

// This funtions returns the full year investment
$.getFullYearInvestment = function(totalArray) {
	sum = 0
	$.each(totalArray,function(){sum+= this || 0;});
	return sum
};//END FUNCTION: $.getFullYearInvestment()

//DOM ELEMENTS EVENTS
	$('input[name="daterange"]').daterangepicker({
        "showWeekNumbers": true,
        "autoApply": true,
        //"parentEl": ".customDatepickerWidth",
        "linkedCalendars": false,
        "showCustomRangeLabel": false,
        "startDate": "01/01/2017",
        "endDate": "31/12/2017",
        "opens": "center",
        "locale": { 
          "weekLabel": "S"
         }
    }, function(start, end, label) {
      console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
	$('body').on('click','.list-group-item', function() {
          $('.oi', this)
            .toggleClass('oi-caret-right')
            .toggleClass('oi-caret-bottom');
        });
//END doc READY
});