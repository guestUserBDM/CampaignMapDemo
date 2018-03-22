 $( document ).ready(function() {

  // -- Constants for graphics
    var legend_ranges =  [2, 4, 6, 8,10]
    var legend_ranges_detail = []
    var strong_color = "rgb(80,80,80)"
    var light_color = "rgb(200,200,200)"
    var empty_color = "rgb(240,240,240)"
    var startDate = new Date(2017, 0, 1)
    var hash_media_name= {"On line": "online", "Prensa": "prensa", "Radio" : "radio", "Televisión" : "tv" ,"total" : "total"}
  // -- define your functions
  //this function is the graph skeleton script
  $.drawHeatMapGraphic = function(campaign_id,trackitem_id,json_data) {
        var heatmap = new CalHeatMap();
        //Render graphic BEGUINS
        heatmap.init({
        itemSelector: `#campaign_${campaign_id}`,
        itemName: ["inversión", "inversión"],
        start: startDate,
        data: json_data,
        domain: "year",
        subDomain: "week",
        weekStartOnMonday: false,
        domainMargin:0,
        domainGutter: 0,
        cellSize: 14,
        cellRadius: 1,
        cellPadding: 1,
        domainLabelFormat: "",
        // domainLabelFormat: function(date) {
        //            return moment(date).locale('es').format("YYYY"); // Use the moment library to format the Date
        //          },
        subDomainDateFormat: function(date,value) {
          weekOfYear = d3.time.format("%W")
          string = "Semana " + (parseInt(weekOfYear(date)) +1)
          return string; // Use the moment library to format the Date
        },
        //subDomainTextFormat: "%W",
        subDomainTitleFormat: {
          empty: "NO hay inversión para la fecha: {date}",
          filled: "Hay {count} % de {name} para la {date}"
        },
        range: 1,
        label: {
          position: "top",
          height: 15
        },
        highlight: $.getMaxInvestmentWeek(json_data),
        displayLegend: false,
        legend: legend_ranges,
        legendColors: {
            min: light_color,
            max: strong_color,
            empty: empty_color
            // Will use the CSS for the missing keys
        },
        legendTitleFormat: {
        lower: "Menos de {min} € de {name}",
        inner: "Entre {down} € y {up} € de {name}",
        upper: "Más de {max} € de {name}"
        },
        onComplete: function() {
          var rect = $(this)[0].root[0][0].getElementsByClassName("highlight")[0];
          var parent= rect.parentNode;
          str = '<a xlink:href="http://bit.bufetedemarketing.com/trackitems/'+ trackitem_id +'" target="_blank" width="14" height"14"><text x="' + (rect.x.baseVal.value + 7 ) + '" y="50%" style="text-anchor: middle">&nbsp;&nbsp;</text></a>'
          parent.insertAdjacentHTML( 'beforeend', str );
        }
      });
  };
  // END FUNCTION: $.drawHeatMapGraphic()
  //This function returns campaigns hash unix timestamps and percentage value per media
  $.prepareDataForHeatMap = function(dataTotalInvestment,data) {
    hash_response = {};
    $.each(data,function(key,campaignsObject){
      $.each(campaignsObject["campaigns"],function(key,campaign){
        if (!(key in hash_response)) {
          hash_response[key] = {};
        } 
        hash_response[key][this.unixtime] = $.getHeatMapWeek(dataTotalInvestment,this);
      })
    });
    return hash_response;
  };
  // END FUNCTION: $.prepareDataForHeatMap()
  //This function return adapted values per week for the heat map
  $.getHeatMapWeek = function (dataTotalInvestment,week_object) {
    for (var key in week_object) {
      if (key != "company" && key != "campaign_name" && key != "company_id" && key != "unixtime" && key != "trackitem_id") {
        week_object[key] =  (week_object[key] / dataTotalInvestment) * 100;
      };
    };
    return week_object
  };
  // END FUNCTION: $.getHeatMapWeek()
  // This funcions trim campaign name to 17 characters plus three dots if its lenght size is > 20
  $.prepareCampaignName = function(campaign_name) {
    var campaign_string = campaign_name;
    if (campaign_string.length > 20) {
      campaign_string = campaign_string.slice(0,17) + "...";
    };
    return campaign_string 
  }
  // END FUNCTION: $.prepareCampaignName()
  //This function returns the date of max investmen in the selected data
  $.getMaxInvestmentWeek = function(json_data){
    var array_weeks = [];
    var array_investment = [];
    Object.keys( json_data ).map(function ( key,index ) { 
      array_investment[index] = json_data[key]; 
      array_weeks[index] = key
    });
    var max = Math.max.apply( null, array_investment);
    max_week = array_weeks[$.inArray(max,array_investment)];
    var date = new Date(0);
    date.setUTCSeconds(max_week);
    return date
  };
  // END FUNCTION: $.getMaxInvestmentWeek()

  /* FUNCTIONS FOR APPEND HTML IN HEATMAP GRAPH */
  $.render_total_html = function(campaign_name,campaign_id,campaigns_counter,company_id) {
    string = '<div class="row level-step no-gutters">' +
                '<div class="col-2 campaign_name pl-1">' +
                   '<a href="#item-1-'+ campaigns_counter +'" class="list-group-item list-group-item-action whiteBack pl-1 pr-1" data-toggle="collapse">' +
                    '<img class="d-inline-block align-top mr-1" src="assets/images/logos/'+ company_id +'.jpg" width="20" height="20" alt="Bufete de Márketing">'+
                    '<span title="'+ campaign_name + '">' + $.prepareCampaignName(campaign_name) + '</span>' + 
                    '<span class="oi oi-caret-right pl-1 rigthCaret"  aria-hidden="true"></span>' +
                  '</a>' +
                '</div>' +
                '<div class="col-9 full_investment list-group-item">' +
                  '<div id="campaign_'+ campaign_id +'" class="graph-container"></div>' +
                '</div>' +
              '</div>' +
              '<div class="list-group collapse " id="item-1-'+ campaigns_counter +'"></div>';
    return string
  };

  $.render_media_html = function(campaign_id, media){
    string = '<div class="row level-step no-gutters">' +
                              '<div class="col-2 media_name">' +
                                '<a href="#" class="list-group-item">' +
                                  media +
                                '</a>' +
                              '</div>' +
                              '<div class="col-9 full_investment list-group-item">' +
                                '<div id="campaign_'+ campaign_id +'_'+ hash_media_name[media] +'" class="graph-container"></div>' +
                              '</div>' +
                            '</div>';
    return string
  }
  /* END FUNCTIONS FOR APPEND HTML IN HEATMAP GRAPH */
  // This is the core funtions wich draws the graphic and prepare html for it
  $.drawHeatMap = function(dataHeatMap) {
    campaigns_counter = 1
    $.each(dataHeatMap,function(key,values){ 
      campaign_id = key
      json_response = {};
      json_response[key] = {};
      company_id = "";
      campaign_name = "";
      trackitem_id = ""
      $.map(values,function(values_by_week,unixtime){
        $.each(values_by_week, function(key_media,value){
          if (key_media === "company_id") {
            company_id = values_by_week[key_media];
          }
          if (key_media === "campaign_name") {
            campaign_name = values_by_week[key_media];
          };
          if (key_media === "trackitem_id") {
            trackitem_id = String(values_by_week[key_media]);
          }
          if(!isInArray(key,["company","company_id","campaign_name","unixtime","trackitem_id"])) {
            if (!(key_media in json_response[key] )){
              json_response[key][key_media] = {}
            }
            json_response[key][key_media][unixtime] = value
          }
        });
      });
      $("#item-1").append($.render_total_html(campaign_name,key,campaigns_counter,company_id));
      $.drawHeatMapGraphic(key, trackitem_id, json_response[key]["total"]);
        media_counter = 1
      $.each(json_response[key],function(key_media,json_value){
        if(!isInArray(key_media,["company","company_id","campaign_name","unixtime","total","trackitem_id"])) {
          $("#item-1-"+ campaigns_counter).append($.render_media_html(campaign_id, key_media))
          $.drawHeatMapGraphic(campaign_id +'_'+ hash_media_name[key_media], trackitem_id, json_value);
          media_counter += 1
        };
      });

      campaigns_counter += 1;
    });
  };
  // END FUNCTION: $.drawHeatMap()

//END doc READY
});
