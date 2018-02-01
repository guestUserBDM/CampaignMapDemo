 var legend_ranges =  [2, 4, 6, 8,10]
      var legend_ranges_detail = []
      var strong_color = "rgb(80,80,80)"
      var light_color = "rgb(200,200,200)"
      var empty_color = "rgb(240,240,240)"

      var json_total = {
        "1485734400":0.67808981670842,
"1486339200":5.88792238838733,
"1486944000":4.24504874703506,
"1487548800":3.1372894019066,
"1488153600":2.70620979034787,
"1488758400":2.73453792135683,
"1489363200":2.3003255453965,
"1489968000":2.04957527206337,
"1490572800":2.29714701728068,
"1491177600":2.45666280423934,
"1493596800":0.0103647728042109,
"1494201600":0.00757032223712614,
"1494806400":0.00412061848937417,
"1495411200":0.00382429994726338,
"1496016000":0.276887051998117,
"1496620800":0.00178044363210696,
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
"1505692800":2.25210564923755,
"1506297600":7.92002193602544,
"1506902400":8.04180909801197,
"1507507200":3.74764025422101,
"1508112000":2.90116021319883,
"1508716800":1.37450634285049,
"1509321600":5.75255464825244,
"1509926400":3.34161184452568,
"1510531200":1.10709599737779,
"1511136000":3.46266108923118,
"1511740800":2.37127036650113,
"1512345600":0.339705135851639,
"1512950400":1.39155758,
"1513555200":1.45217942480666,
"1514160000":0.03288023,
      }


// var total = new CalHeatMap();
//         total.init({
//         itemSelector: "#total_total",
//         itemName: ["inversión", "inversión"],
//         start: new Date(2017, 0, 1),
//         data: json_total,
//         domain: "month",
//         subDomain: "week",
//         domainMargin:0,
//         domainGutter: 0,
//         cellSize: 14,
//         cellRadius: 1,
//         cellPadding: 1,
//         domainLabelFormat: function(date) {
//           return moment(date).locale('es').format("MMMM"); // Use the moment library to format the Date
//         },
//         subDomainDateFormat: function(date,value) {
//           weekOfYear = d3.time.format("%W")
//           string =  "Semana " + weekOfYear(date)
//           return string; // Use the moment library to format the Date
//         },
//         //subDomainTextFormat: "%W",
//         subDomainTitleFormat: {
//           empty: "No hay inversión para la fecha: {date}",
//           filled: "Hay {count} % de {name} para la  {date}"
//         },
//         range: 12,
//         label: {
//           position: "top",
//           height: 15
//         },
//         displayLegend: false,
//         legend: legend_ranges,
//         legendColors: {
//             min: light_color,
//             max: strong_color,
//             empty: empty_color
//             // Will use the CSS for the missing keys
//         },
//         legendTitleFormat: {
//         lower: "Menos de {min} € de {name}",
//         inner: "Entre {down} € y {up} € de {name}",
//         upper: "Más de {max} € de {name}"
//       },
//       });

      var data_json_ing = {
        "1485734400":0.67808981670842,
"1486339200":5.88792238838733,
"1486944000":4.24504874703506,
"1487548800":3.1372894019066,
"1488153600":2.70620979034787,
"1488758400":2.73453792135683,
"1489363200":2.3003255453965,
"1489968000":2.04957527206337,
"1490572800":2.29714701728068,
"1491177600":2.45666280423934,
"1493596800":0.0103647728042109,
"1494201600":0.00757032223712614,
"1494806400":0.00412061848937417,
"1495411200":0.00382429994726338,
"1496016000":0.276887051998117,
"1496620800":0.00178044363210696,
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

      }//end data_json

      // var cal = new CalHeatMap();
      //   cal.init({
      //   itemSelector: "#total_ing",
      //   itemName: ["inversión", "inversión"],
      //   start: new Date(2017, 0, 1),
      //   data: data_json_ing,
      //   domain: "month",
      //   subDomain: "week",
      //   domainMargin:0,
      //   domainGutter: 0,
      //   cellSize: 14,
      //   cellRadius: 1,
      //   cellPadding: 1,
      //   domainLabelFormat: "",
      //   subDomainDateFormat: function(date,value) {
      //     weekOfYear = d3.time.format("%W")
      //     string = "Semana " + weekOfYear(date)

      //
      //     return string; // Use the moment library to format the Date
      //   },
      //   //subDomainTextFormat: "%W",
      //   subDomainTitleFormat: {
      //     empty: "NO hay inversión para la fecha: {date}",
      //     filled: "Hay {count} % de {name} para la  {date}"
      //   },
      //   range: 12,
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

      /*CAMPAÑA VOLAR */

      var data_json_volar = {
        "1485734400":0.67808981670842,
"1486339200":5.88792238838733,
"1486944000":4.24504874703506,
"1487548800":3.1372894019066,
"1488153600":2.70620979034787,
"1488758400":2.73453792135683,
"1489363200":2.3003255453965,
"1489968000":2.04957527206337,
"1490572800":2.29714701728068,
"1491177600":2.45666280423933,
"1493596800":1.0103647728042109,
"1494201600":0.00757032223712614,
"1494806400":0.00412061848937417,
"1495411200":0.00382429994726338,
"1496016000":0.00719215357375878,
"1496620800":0.00178044363210696,

      }
      var cal_volar = new CalHeatMap();
        cal_volar.init({
        itemSelector: "#campaign_volar",
        itemName: ["inversión", "inversión"],
        start: new Date(2017, 0, 1),
        data: data_json_volar,
        domain: "year",
        subDomain: "week",
        domainMargin:0,
        domainGutter: 0,
        cellSize: 14,
        cellRadius: 1,
        cellPadding: 1,
        subDomainLabelFormat: function(date) {
                   return moment(date).locale('es').format("MMMM"); // Use the moment library to format the Date
                 },
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
        range: 5,
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
        }
      });

       var data_json_volar_tv = {
        "1485734400":0.67808981670842,
        "1486339200":5.0936551426622,
        "1486944000":3.75313707020035,
        "1487548800":2.65149171809813,
        "1488153600":2.21617870672273,
        "1488758400":2.22296186594289,
        "1489363200":2.28208086696835,
        "1489968000":1.33628236637104,
        "1490572800":1.37426805800393,
        "1491177600":1.4399139655679,
      }

      var cal_volar_tv = new CalHeatMap();
        cal_volar_tv.init({
        itemSelector: "#campaign_volar_tv",
        itemName: ["inversión", "inversión"],
        start: new Date(2017, 0, 1),
        data: data_json_volar_tv,
        domain: "year",
        subDomain: "week",
        //subDomainTextFormat: "%W",
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
        range: 12,
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


       var data_json_volar_radio = {
"1489968000":0.713292905692322,
"1490572800":0.922878959276751,
"1491177600":1.01674883867144,


      }

      var cal_volar_radio = new CalHeatMap();
        cal_volar_radio.init({
        itemSelector: "#campaign_volar_radio",
        itemName: ["inversión", "inversión"],
        start: new Date(2017, 0, 1),
        data: data_json_volar_radio,
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
          filled: "Hay {count} % de {name} para la {date}"
        },
        range: 12,
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


       var data_json_volar_prensa = {
"1486339200":0.794267245725132,
"1486944000":0.49191167683471,
"1487548800":0.485797683808464,
"1488153600":0.455003452359731,
"1488758400":0.44517239359665,

      }

      var cal_volar_prensa = new CalHeatMap();
        cal_volar_prensa.init({
        itemSelector: "#campaign_volar_prensa",
        itemName: ["inversión", "inversión"],
        start: new Date(2017, 0, 1),
        data: data_json_volar_prensa,
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
        range: 12,
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

       var data_json_volar_online = {
"1488153600":0.0350276312654075,
"1488758400":0.0664036618172969,
"1489363200":0.018244678428145,
"1493596800":0.0103647728042109,
"1494201600":0.00757032223712614,
"1494806400":0.00412061848937417,
"1495411200":0.00382429994726338,
"1496016000":0.00719215357375878,
"1496620800":0.00178044363210696,

      }

      var cal_volar_online = new CalHeatMap();
        cal_volar_online.init({
        itemSelector: "#campaign_volar_online",
        itemName: ["inversión", "inversión"],
        start: new Date(2017, 0, 1),
        data: data_json_volar_online,
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
        range: 12,
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
      /*/CAMPAÑA VOLAR */
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
        subDomainTitleFormat: {
          empty: "NO hay inversión para la fecha: {date}",
          filled: "Hay {count} % de {name} para la  {date}"
        },
        range: 12,
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
        range: 12,
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
        range: 12,
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
        range: 12,
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
      //   range: 12,
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
        range: 12,
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
        range: 12,
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
        range: 12,
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
        range: 12,
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
        document.getElementsByClassName('graph-subdomain-group')[0].setAttribute('x',"-14")
      }
      });

      /*/CAMPAÑA BCONOMY */
