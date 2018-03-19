//FUNCTIONS

//Function that returns styled tooltip string, it recieves company name and value

function tooltipString(company,value) {
  return "<b>" + company + ":</b> " + value + "%"
};
function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

$( document ).ready(function() {

  // -- define your functions

$.drawBarChart = function(data) {



$("#stackedchart").empty();
var stackColumnWidth = 12
var xData = ["Resto","Bankia","CaixaBank","Santander","BBVA","ING"];
var clientWidth = document.getElementById('stackedchart').clientWidth
var margin = {top: 25, right: 50, bottom: 35, left: 0},
width = clientWidth - margin.top - margin.bottom;
height = 300 - margin.top - margin.bottom;
var x = d3.scale.ordinal().rangeRoundBands([0,clientWidth],-1.4);
var y = d3.scale.linear().rangeRound([height, 0]);
    //obligo a la leyenda a aparecer en la 3 de cada mes
var months_week_thicks = [1,6,10,15,20,25,29,33,37,41,45,49];
    var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .outerTickSize(0)
    .innerTickSize(0)
    .tickFormat(function(d,i) {
      string="";
      if (isInArray(i,months_week_thicks)) {
        string = data[i].month
      }
      return string;
    });

    var svg = d3.select("#stackedchart").append("svg")
    .attr("width",clientWidth)
    .attr("height", 168)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    var div = d3.select("body").append("div")
    .attr("class", "tooltip graph-tooltip")
    .style("opacity", 0);

    var dataIntermediate = xData.map(function (c) {
      return data.map(function (d) {
        return {x: d.week, y: d[c], company: c , value: d[c] };
      });
    });

    var dataStackLayout = d3.layout.stack()(dataIntermediate);

    x.domain(dataStackLayout[0].map(function (d) {
      return d.x;
    }));

    y.domain([0,
      d3.max(dataStackLayout[dataStackLayout.length - 1],
        function (d) { return d.y0 + d.y;})
      ])
    .nice();
    var layer = svg.selectAll(".stack")
    .data(dataStackLayout)
    .enter().append("g")
    .attr("class", "stack")
    .style("fill", function (d, i) {
      return color[i];
    });

    layer.selectAll("rect")
    .data(function (d) {
      return d;
    })
    .enter().append("rect")
    .attr("class", "company-rect")
    .attr("x", function (d) {
      return x(d.x);
    })
    .attr("y", function (d) {
      return (y(d.y + d.y0)/1.85);
    })
    .attr("height", function (d) {
      stackHeight = (y(d.y0) - y(d.y + d.y0))/1.85
      return stackHeight;
    })
    .attr("width", stackColumnWidth)
    .on("mouseover", function(d,i) {
     div.transition()
     .duration(200)
     .style("opacity", .9);
     div.html(tooltipString(d.company,d.value))
     .style("left", (d3.event.pageX) + "px")
     .style("top", (d3.event.pageY - 28) + "px");
   })
    .on("mouseout", function(d) {
     div.transition()
     .duration(500)
     .style("opacity", 0);
   });

    svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + (height/1.85) + ")")
    .call(xAxis);

}; // END FUNCTION: $.drawBarChart()


/*****************************************************
  This functions draw the legend for the graphic Bar
*****************************************************/

$.drawLegend = function() {
  var svgLegend = d3.select("#legend-div").append("svg").attr('height', 380).attr("class", "map-legend");
  var xDataInverted =  ["ING", "BBVA", "Santander", "CaixaBank", "Bankia", "Resto"]
  var legendRectSize = 18;
  var legendSpacing = 4;
  var legend = svgLegend.selectAll('.legend')
  .data(xDataInverted)
  .enter()
  .append('g')
  .attr('class', 'legend')
  .attr('transform', function(d, i) {
    var height = legendRectSize + legendSpacing;
    var offset =  height * xDataInverted.length / 2;
    var horz = legendRectSize + 10;
    var vert = i * height + 75;
    return 'translate(' + horz + ',' + vert + ')';
  });
  legend.append('rect')
  .attr('width', legendRectSize)
  .attr('height', legendRectSize)
  .style("fill", function(d, i) {return color.slice().reverse()[i];});
  legend.append('text')
  .attr('x', legendRectSize + legendSpacing)
  .attr('y', legendRectSize - legendSpacing)
  .text(function(d) { return d; });
};
// END FUNCTION: $.drawLegend()

/*****************************************************
  This functions draw the legend for the graphic Bar
  [
{week: '1',month:"enero",Resto:8.16,Bankia:10.42,CaixaBank:17.80,Santander:18.61,BBVA:0.19,ING:44.82},
{week: '2',month:"enero",Resto:9.57,Bankia:19.18,CaixaBank:20.09,Santander:13.43,BBVA:1.67,ING:36.06}
]
*****************************************************/
$.prepareDataForBarChart = function(totalArray,data) {
  weeks_array = Array.apply(null, { length: 52 })
  $.each(totalArray, function(index,total) {
    week_hash = {};
    week_hash["week"]  = index + 1;
    week_hash["month"] = null;
    if (data[index] != null) {
      week_hash["month"] = data[index]["month"];
      week_companies = $.prepareCompanyPercentages(data[index]["campaigns"],total);
    } else {
      week_companies = {Resto:0,Bankia:0,CaixaBank:0,Santander:0,BBVA:0,ING:0};
    }
    //Merge the two week objects
    for (var attrname in week_companies) { week_hash[attrname] = week_companies[attrname]; }
    weeks_array[index] = week_hash
  });
  return weeks_array
};
// END FUNCTION: $.prepareDataForBarChart()

$.prepareCompanyPercentages = function(campaigns,total) {
  week_object = {Resto:0,Bankia:0,CaixaBank:0,Santander:0,BBVA:0,ING:0};
  $.each(campaigns,function(key, value) {
    switch(this.company) {
      case "Bankia":
      case "CaixaBank":
      case "Santander":
      case "BBVA":
         week_object[this.company] += this.total
          break;
      case "ING Direct":
          ing = "ING";
          week_object[ing] += this.total
          break;
      default:
          week_object["Resto"] += this.total
    };
  });
  $.each(week_object,function(key,value){ 
    week_object[key] = +(value/total*100).toFixed(2)

  });
  return week_object;
};

//END doc READY
});
