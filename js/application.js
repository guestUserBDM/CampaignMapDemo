/*****************************************
  This file must be loaded ALWAYS after 
  al graphic types javascripts, because 
  needs all of their functions
*******************************************/
// SET GLOBALS
var color = ["#a8a8a8", "#B9D12E", "#B7D7E9","#FE0000", "#3473BA", "#FE7A22"]
$( document ).ready(function() {

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

 $.parse_query_string = function(query) {
  var vars = query.split("&");
  var query_string = {};
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
      // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
      query_string[pair[0]] = arr;
      // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
} //END FUNCTION: $.parse_query_string

$.getUserSubscriptions = function(mail){
  $.ajax({
    method: "GET",
    crossDomain: true,
    dataType: "JSON",
    url: "http://localhost:3000/subscriptions/from_user",
    data: {bit_mail: mail}
  })
  .done(function(data){
    $.each(data, function(index, val) {
       /* iterate through array or object */
       $('#subscription_list').append('<li><a href="/sessions/change_subscription?id=' + val.id + '" class="subscription radius-3 " data-method="put" rel="nofollow">' + val.name + '</a></li>')
    });

  })
    .fail(function(data) {
        alert( "Fallo en la carga de las subscripciones" );
    });
} //END FUNCTION: $.getUserSubscriptions

//Render path BEGUIN
//Sets user from params
var query = window.location.search.substring(1);
params = $.parse_query_string(query);
$('#user-mail').append(params.user)
$.getUserSubscriptions(params.user)
// Ajax calls after render user
    $.ajax({
      method: "GET",
      crossDomain: true,
      dataType: "JSON",
      url: "http://localhost:3000/comparative/get_campaign_map_json",
      beforeSend: function(xhr){
        xhr.setRequestHeader('x-bit-subscription', 20);
        xhr.setRequestHeader('x-bit-user', params.user);
      },
      headers: {
        'Authorization': 'Token token=44d7817dc75942288e8b36425cfbdea12'}
      })
      .done(function( data ) {
        $.renderFullPage(data);
        $('button.handCursor').removeClass('hidden_campaign')
    })
      .fail(function(data) {
        alert( "Fallo en la carga de datos" );
    });
//END Ajax Calls
//Render path END

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
  $('#user-mail').on('click',function(){
    $('.user-menu').toggleClass('d-none');
  })
//END doc READY
});