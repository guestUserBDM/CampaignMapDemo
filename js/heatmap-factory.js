 $( document ).ready(function() {

  // - Constants for graphics
    var legend_ranges =  [2, 4, 6, 8,10]
    var legend_ranges_detail = []
    var strong_color = "rgb(80,80,80)"
    var light_color = "rgb(200,200,200)"
    var empty_color = "rgb(240,240,240)"
    var startDate = new Date(2017, 0, 1)
  // -- define your functions
  //this function is the graph skeleton script
  $.drawHeatMapGraphic = function(campaign_id,json_data) {
        var heatmap = new CalHeatMap();
        heatmap.init({
        itemSelector: `#campaign_${campaign_id}`,
        itemName: ["inversión", "inversión"],
        start: startDate,
        data: json_data,
        domain: "year",
        subDomain: "week",
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
          string = "Semana " + weekOfYear(date)
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
        highlight: new Date("Mon Feb 06 2017 00:00:00 GMT+0100 (CET)"),
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
        }
      });
  };
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

  $.getHeatMapWeek = function (dataTotalInvestment,week_object) {
    for (var key in week_object) {
      if ((key != "company") && key != "unixtime") {
        week_object[key] =  (week_object[key] / dataTotalInvestment) * 100;
      };
    };
    return week_object
  };

  /* FUNCTIONS FOR APPEND HTML IN HEATMAP GRAPH */
  $.render_total_html = function(campaign_id,campaigns_counter) {
    string = '<div class="row level-step no-gutters">' +
                '<div class="col-2 campaign_name pl-1">' +
                   '<a href="#item-'+ campaigns_counter +'-1" class="list-group-item list-group-item-action whiteBack pl-1 pr-1" data-toggle="collapse">' +
                    '<img class="d-inline-block align-top mr-1" src="assets/images/ing.png" width="20" height="20" alt="Bufete de Márketing">'+
                    campaign_id +
                    '<span class="oi oi-caret-right pl-1 rigthCaret"  aria-hidden="true"></span>' +
                  '</a>' +
                '</div>' +
                '<div class="col-9 full_investment list-group-item">' +
                  '<div id="campaign_'+ campaign_id +'" class="graph-container"></div>' +
                '</div>' +
              '</div>' +
              '<div class="list-group collapse " id="item-'+ campaigns_counter +'-1"></div>';
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
                                '<div id="campaign_'+ campaign_id +'_'+ media +'" class="graph-container"></div>' +
                              '</div>' +
                            '</div>';
    return string
  }

  /* /FUNCTIONS FOR APPEND HTML IN HEATMAP GRAPH */

  $.drawHeatMap = function(dataHeatMap) {
    $.each(dataHeatMap,function(key,values){ 
      campaign_id = key
      campaigns_counter = 1
      json_response = {};
      json_response[key] = {};
      $.map(values,function(values_by_week,unixtime){
        $.each(values_by_week, function(key_media,value){
          if(!isInArray(key,["company","unixtime"])) {
            if (!(key_media in json_response[key] )){
              json_response[key][key_media] = {}
            }
            json_response[key][key_media][unixtime] = value
          }
        });
      });
      debugger
      $("#item-1").append($.render_total_html(key,campaigns_counter));
      $.drawHeatMapGraphic(key,json_response[key]["total"]);
      $.each(json_response[key],function(key_media,json_value){
        if(!isInArray(key_media,["company","unixtime","total"])) {
          debugger
          media_counter = 1
          $("#item-"+ campaigns_counter).append($.render_media_html(campaign_id, key_media))
          $.drawHeatMapGraphic(campaign_id +'_'+ key_media, json_value);
          media_counter += 1
        };
      });

      campaigns_counter += 1;
    });
  };
      /*CAMPAÑA LIMÓN */

      var data_json_limon = {
       "1496016000":0.269694898424358,
    "1496620800":3.49248229910031,
    "1497225600":3.64287716377149,
    "1497830400":3.34831568600402,
    "1498435200":0.536097251363252,
    "1499040000":1.67017849510866,
    "1499644800":1.30908037545581,
    "1502668800":0.0129332235797671,
    "1503273600":2.97595673821398,
    "1503878400":4.05320324748553,
    "1504483200":2.27304963311945,
    "1505088000":2.3997098619108,
    "1505692800":1.47406696120977,
    "1506297600":1.5968183417426,
    "1506902400":1.32797075034697,
    "1507507200":0.130914972949041,
    "1508112000":0.608223276740797,
    "1508716800":0.520012059504436,
    "1509321600":1.6764050433569,
    "1509926400":1.64221792088731,
    "1510531200":0.818667023124397,
    "1511136000":0.419244460867207,
    "1511740800":0.297705321329139,
    "1512345600":0.015827371513701,
    "1513555200":0.182120288217653,


      }
      var cal_limon = new CalHeatMap();
        cal_limon.init({
        itemSelector: "#campaign_limon",
        itemName: ["inversión", "inversión"],
        start: new Date(2017, 0, 1),
        data: data_json_limon,
        domain: "year",
        subDomain: "week",
        domainMargin:0,
        domainGutter: 0,
        cellSize: 14,
        cellRadius: 1,
        cellPadding: 1,
        domainLabelFormat: "",
        subDomainDateFormat: function(date,value) {
          weekOfYear = d3.time.format("%W")
          string = "Semana " + weekOfYear(date)
          return string; // Use the moment library to format the Date
        },
        //subDomainTextFormat: "%W",
        highlight: new Date("Mon Aug 28 2017 00:00:00 GMT+0200"),
        subDomainTitleFormat: {
          empty: "NO hay inversión para la fecha: {date}",
          filled: "Hay {count} % de {name} para la  {date}"
        },
        range: 1,
        label: {
          position: "top",
          height: 15
        },
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
      });

       var data_json_limon_tv = {
        "1496016000":0.156555314801237,
"1496620800":1.45097805194033,
"1497225600":1.84107000184802,
"1497830400":1.81918300809764,
"1498435200":0.520509491180581,
"1502668800":0.0129332235797671,
"1503273600":1.38653803934883,
"1503878400":2.21146064264293,
"1504483200":1.42321232019915,
"1505088000":1.21557227962655,
"1505692800":1.01307236637411,
"1506297600":1.12131651384067,
"1506902400":0.966630336246768,
"1507507200":0.130914972949041,
"1508112000":0.608223276740797,
"1508716800":0.520012059504436,
"1509321600":1.6764050433569,
"1509926400":1.64221792088731,
"1510531200":0.818667023124397,
"1511136000":0.419244460867207,
"1511740800":0.297705321329139,
"1512345600":0.015827371513701,
"1513555200":0.182120288217653,

      }

      var cal_limon_tv = new CalHeatMap();
        cal_limon_tv.init({
        itemSelector: "#campaign_limon_tv",
        itemName: ["inversión", "inversión"],
        start: new Date(2017, 0, 1),
        data: data_json_limon_tv,
        domain: "year",
        subDomain: "week",
        domainMargin:0,
        domainGutter: 0,
        cellSize: 14,
        cellRadius: 1,
        cellPadding: 1,
        domainLabelFormat: "",
        subDomainDateFormat: function(date,value) {
          weekOfYear = d3.time.format("%W")
          string = "Semana " + weekOfYear(date)


          return string; // Use the moment library to format the Date
        },
        //subDomainTextFormat: "%W",
        subDomainTitleFormat: {
          empty: "NO hay inversión para la fecha: {date}",
          filled: "Hay {count} % de {name} para la  {date}"
        },
        range: 1,
        label: {
          position: "top",
          height: 15
        },
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
      });


       var data_json_limon_radio = {
"1496620800":0.892151248009437,
"1497225600":0.943835906529607,
"1497830400":1.12345848478553,
"1499040000":1.11863189015821,
"1499644800":1.14871595498396,
"1503273600":1.04081398021584,
"1503878400":1.03783843437127,
"1504483200":0.602210382934306,
"1505088000":0.750567119291446,

      }

      var cal_limon_radio = new CalHeatMap();
        cal_limon_radio.init({
        itemSelector: "#campaign_limon_radio",
        itemName: ["inversión", "inversión"],
        start: new Date(2017, 0, 1),
        data: data_json_limon_radio,
        domain: "year",
        subDomain: "week",
        domainMargin:0,
        domainGutter: 0,
        cellSize: 14,
        cellRadius: 1,
        cellPadding: 1,
        domainLabelFormat: "",
        subDomainDateFormat: function(date,value) {
          weekOfYear = d3.time.format("%W")
          string = "Semana " + weekOfYear(date)


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
      });


       var data_json_limon_prensa = {
"1496620800":0.923075821631008,
"1497225600":0.587003293647071,
"1497830400":0.205430238035546,
"1499040000":0.43357319133018,
"1499644800":0.160364420471847,
"1503273600":0.548581972455382,
"1503878400":0.55183035203748,
"1504483200":0.217881103626324,
"1505088000":0.431899002118835,
"1505692800":0.392143358140106,
"1506297600":0.420953997874932,
"1506902400":0.361138291029124,

      }

      var cal_limon_prensa = new CalHeatMap();
        cal_limon_prensa.init({
        itemSelector: "#campaign_limon_prensa",
        itemName: ["inversión", "inversión"],
        start: new Date(2017, 0, 1),
        data: data_json_limon_prensa,
        domain: "year",
        subDomain: "week",
        domainMargin:0,
        domainGutter: 0,
        cellSize: 14,
        cellRadius: 1,
        cellPadding: 1,
        domainLabelFormat: "",
        subDomainDateFormat: function(date,value) {
          weekOfYear = d3.time.format("%W")
          string = "Semana " + weekOfYear(date)


          return string; // Use the moment library to format the Date
        },
        //subDomainTextFormat: "%W",
        subDomainTitleFormat: {
          empty: "NO hay inversión para la fecha: {date}",
          filled: "Hay {count} % de {name} para la  {date}"
        },
        range: 1,
        label: {
          position: "top",
          height: 15
        },
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
      });

       var data_json_limon_online = {
        "1496016000":0.113139583623121,
        "1496620800":0.226277177519538,
        "1497225600":0.270967961746797,
        "1497830400":0.200243955085311,
        "1498435200":0.0155877601826708,
        "1499040000":0.117973413620277,
        "1503273600":0.000027462,
        "1503878400":0.252073818433853,
        "1504483200":0.0297458263596653,
        "1505088000":0.00167146087396976,
        "1505692800":0.0688512366955499,
        "1506297600":0.0545478300269981,
        "1506902400":0.00020212307107354,
      }

      var cal_limon_online = new CalHeatMap();
        cal_limon_online.init({
        itemSelector: "#campaign_limon_online",
        itemName: ["inversión", "inversión"],
        start: new Date(2017, 0, 1),
        data: data_json_limon_online,
        domain: "year",
        subDomain: "week",
        domainMargin:0,
        domainGutter: 0,
        cellSize: 14,
        cellRadius: 1,
        cellPadding: 1,
        domainLabelFormat:"",
        subDomainDateFormat: function(date,value) {
          weekOfYear = d3.time.format("%W")
          string = "Semana " + weekOfYear(date)
          return string; // Use the moment library to format the Date
        },
        //subDomainTextFormat: "%W",
        subDomainTitleFormat: {
          empty: "NO hay inversión para la fecha: {date}",
          filled: "Hay {count} % de {name} para la  {date}"
        },
        range: 1,
        label: {
          position: "top",
          height: 15
        },
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
      });

      /*/CAMPAÑA LIMÖN */

      /*BBVA */
      var data_json_bbva = {
        "1505692800":0.778038688027777,
"1506297600":6.32320359428284,
"1506902400":6.71383834766501,
"1507507200":3.61672528127197,
"1508112000":2.29293693645803,
"1508716800":0.854494283346051,
"1509321600":4.07614960489554,
"1509926400":1.69939392363837,
"1510531200":0.288428974253394,
"1511136000":3.04341662836398,
"1511740800":2.07356504517199,
"1512345600":0.323877764337938,
"1512950400":1.39155757717175,
"1513555200":1.270059136589,
"1514160000":0.0328802337931772,

      }
      // var cal2 = new CalHeatMap();
      //   cal2.init({
      //   itemSelector: "#total_bbva",
      //   itemName: ["inversión", "inversión"],
      //   start: new Date(2017, 0, 1),
      //   data: data_json_bbva,
      //   domain: "month",
      //   subDomain: "week",
      //   domainMargin:0,
      //   domainGutter: 0,
      //   cellSize: 10,
      //   cellRadius: 1,
      //   cellPadding: 1,
      //   domainLabelFormat:"",
      //   subDomainDateFormat: function(date,value) {
      //     weekOfYear = d3.time.format("%W")
      //     string = "Semana " + weekOfYear(date)
      //
      //
      //     return string; // Use the moment library to format the Date
      //   },
      //   //subDomainTextFormat: "%W",
      //   subDomainTitleFormat: {
      //     empty: "NO hay inversión para la fecha: {date}",
      //     filled: "Hay {count} % de {name} para la  {date}"
      //   },
      //   range: 1,
      //   label: {
      //     position: "top",
      //     height: 15
      //   },
      //   displayLegend: false,
      //   legend: legend_ranges,
      //   legendColors: {
      //       min: light_color,
      //       max: strong_color,
      //       empty: empty_color
      //       // Will use the CSS for the missing keys
      //   },
      //   legendTitleFormat: {
      //   lower: "Menos de {min} € de {name}",
      //   inner: "Entre {down} € y {up} € de {name}",
      //   upper: "Más de {max} € de {name}"
      // },
      // });

      /*BBVA*/

            /*CAMPAÑA BCONOMY */

      var data_json_bco = {
   "1505692800":0.778038688027777,
"1506297600":6.32320359428284,
"1506902400":6.71383834766501,
"1507507200":3.61672528127197,
"1508112000":2.29293693645803,
"1508716800":0.854494283346051,
"1509321600":4.07614960489554,
"1509926400":1.69939392363837,
"1510531200":0.288428974253394,
"1511136000":3.04341662836398,
"1511740800":2.07356504517199,
"1512345600":0.323877764337938,
"1512950400":1.39155757717175,
"1513555200":1.270059136589,
      }
      var cal_bco = new CalHeatMap();
        cal_bco.init({
        itemSelector: "#campaign_bco",
        itemName: ["inversión", "inversión"],
        start: new Date(2017, 0, 01),
        data: data_json_bco,
        domain: "year",
        subDomain: "week",
        domainMargin:0,
        domainGutter: 0,
        cellSize: 14,
        cellRadius: 1,
        cellPadding: 1,
        domainLabelFormat: "",
        subDomainDateFormat: function(date,value) {
          weekOfYear = d3.time.format("%W")
          string = "Semana " + weekOfYear(date)
          return string; // Use the moment library to format the Date
        },
        highlight: new Date("Mon Oct 02 2017 00:00:00 GMT+0200 "),
        //subDomainTextFormat: "%W",
        subDomainTitleFormat: {
          empty: "NO hay inversión para la fecha: {date}",
          filled: "Hay {count} % de {name} para la  {date}"
        },
        range: 1,
        label: {
          position: "top",
          height: 15
        },
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
      });

       var data_json_bco_tv = {
        "1505692800":0.727727468512818,
"1506297600":4.66396461659595,
"1506902400":5.05468966136419,
"1507507200":3.30927727820755,
"1508112000":2.01551778330331,
"1508716800":0.665669098491954,
"1509321600":3.83605742324499,
"1509926400":1.55638834622158,
"1510531200":0.159841378601225,
"1511136000":2.93805758461906,
"1511740800":2.06613522477284,
"1512345600":0.311949955691469,
"1512950400":1.38929652409837,
"1513555200":1.25283443427595,

      }

      var cal_bco_tv = new CalHeatMap();
        cal_bco_tv.init({
        itemSelector: "#campaign_bco_tv",
        itemName: ["inversión", "inversión"],
        start: new Date(2017, 0, 01),
        data: data_json_bco_tv,
        domain: "year",
        subDomain: "week",
        domainMargin:0,
        domainGutter: 0,
        cellSize: 14,
        cellRadius: 1,
        cellPadding: 1,
        domainLabelFormat: "",
        subDomainDateFormat: function(date,value) {
          weekOfYear = d3.time.format("%W")
          string = "Semana " + weekOfYear(date)


          return string; // Use the moment library to format the Date
        },
        //subDomainTextFormat: "%W",
        subDomainTitleFormat: {
          empty: "NO hay inversión para la fecha: {date}",
          filled: "Hay {count} % de {name} para la  {date}"
        },
        range: 1,
        label: {
          position: "top",
          height: 15
        },
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
      });


       var data_json_bco_radio = {
"1506297600":1.50888965062461,
"1506902400":1.3151520717159,
"1507507200":0.00651183285135128,
"1508112000":0.00651183285135128,
"1508716800":0.00651183285135128,
"1509321600":0.00651183285135128,
"1509926400":0.00651183285135128,

      }

      var cal_bco_radio = new CalHeatMap();
        cal_bco_radio.init({
        itemSelector: "#campaign_bco_radio",
        itemName: ["inversión", "inversión"],
        start: new Date(2017, 0, 1),
        data: data_json_bco_radio,
        domain: "year",
        subDomain: "week",
        domainMargin:0,
        domainGutter: 0,
        cellSize: 14,
        cellRadius: 1,
        cellPadding: 1,
        domainLabelFormat: "",
        subDomainDateFormat: function(date,value) {
          weekOfYear = d3.time.format("%W")
          string = "Semana " + weekOfYear(date)


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
      });


       var data_json_bco_prensa = {
        "1505692800":0.0503112195149593,
"1506297600":0.0689072505170213,
"1506902400":0.343996614584925,
"1507507200":0.299179527932986,
"1508112000":0.270907320303369,
"1508716800":0.182313231413249,
"1509321600":0.2335803487992,
"1509926400":0.136493744565442,
"1510531200":0.12858759565217,
"1511136000":0.105359043744919,
"1511740800":0.00742982039914594,
"1512345600":0.0119278086464682,
"1512950400":0.00226105307338586,
"1513555200":0.0172247023130535,

      }

      var cal_bco_prensa = new CalHeatMap();
        cal_bco_prensa.init({
        itemSelector: "#campaign_bco_prensa",
        itemName: ["inversión", "inversión"],
        start: new Date(2017, 0, 1),
        data: data_json_bco_prensa,
        domain: "year",
        subDomain: "week",
        domainMargin:0,
        domainGutter: 0,
        cellSize: 14,
        cellRadius: 1,
        cellPadding: 1,
        domainLabelFormat: "",
        subDomainDateFormat: function(date,value) {
          weekOfYear = d3.time.format("%W")
          string = "Semana " + weekOfYear(date)


          return string; // Use the moment library to format the Date
        },
        //subDomainTextFormat: "%W",
        subDomainTitleFormat: {
          empty: "NO hay inversión para la fecha: {date}",
          filled: "Hay {count} % de {name} para la  {date}"
        },
        range: 1,
        label: {
          position: "top",
          height: 15
        },
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
      });

       var data_json_bco_online = {
"1506297600":0.0814420765452578,
"1507507200":0.00175664228008779,
"1508716800":1.20589497247246E-07,

      }
      var cal_bco_online = new CalHeatMap();
        cal_bco_online.init({
        itemSelector: "#campaign_bco_online",
        itemName: ["inversión", "inversión"],
        start: new Date(2017, 0, 1),
        data: data_json_bco_online,
        domain: "year",
        subDomain: "week",
        domainMargin:0,
        domainGutter: 0,
        cellSize: 14,
        cellRadius: 1,
        cellPadding: 1,
        domainLabelFormat:"",

        subDomainDateFormat: function(date,value) {
          weekOfYear = d3.time.format("%W")
          string = "Semana " + weekOfYear(date)



          return string; // Use the moment library to format the Date
        },
        //subDomainTextFormat: "%W",
        subDomainTitleFormat: {
          empty: "NO hay inversión para la fecha: {date}",
          filled: "Hay {count} % de {name} para la  {date}"
        },
        range: 1,
        label: {
          position: "top",
          height: 15
        },
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
        contador = 0
        var subDomain = document.getElementsByClassName('graph-subdomain-group')
        for (var i = 0; i < subDomain.length; i++) {
          subDomain[i].setAttribute('x',"-14")
          highlightSquare = subDomain[i].getElementsByClassName("highlight")
          //SAMUEL: Contador y array para saber qué camapaña es según su índice 0= Volar, 1= Limon, 2= Bconomy
          arrayLinks = [
          "http://bit.bufetedemarketing.com/trackitems/4571283",
          "http://bit.bufetedemarketing.com/trackitems/5264376",
          "http://bit.bufetedemarketing.com/trackitems/5352432"
          ]
          if (highlightSquare.length > 0) {
            str = '<a xlink:href="'+ arrayLinks[contador] +'" target="_blank" width="14" height"14"><text x="' + (highlightSquare[0].x.baseVal.value + 7 ) + '" y="50%" style="text-anchor: middle">&nbsp;&nbsp;</text></a>'
            var parent= highlightSquare[0].parentNode;
            parent.insertAdjacentHTML( 'beforeend', str );
            contador += 1 
          };
        };
      }
      });

      /*/CAMPAÑA BCONOMY */

//END doc READY
});
