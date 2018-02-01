var data = [
            {week: 'Semana 1',month:"enero",Resto:8.16,Bankia:10.42,CaixaBank:17.80,Santander:18.61,BBVA:0.19,ING:44.82},
            {week: 'Semana 2',month:"enero",Resto:9.57,Bankia:19.18,CaixaBank:20.09,Santander:13.43,BBVA:1.67,ING:36.06},
            {week: 'Semana 3',month:"enero",Resto:6.32,Bankia:44.87,CaixaBank:9.07,Santander:8.05,BBVA:5.98,ING:25.71},
            {week: 'Semana 4',month:"enero",Resto:8.58,Bankia:29.20,CaixaBank:10.16,Santander:16.12,BBVA:7.63,ING:28.31},
            {week: 'Semana 5',month:"febrero",Resto:21.70,Bankia:10.37,CaixaBank:19.07,Santander:18.04,BBVA:9.80,ING:21.02},
            {week: 'Semana 6',month:"febrero",Resto:27.82,Bankia:4.08,CaixaBank:14.93,Santander:11.86,BBVA:0.51,ING:40.81},
            {week: 'Semana 7',month:"febrero",Resto:36.31,Bankia:8.09,CaixaBank:24.23,Santander:6.06,BBVA:0.43,ING:24.88},
            {week: 'Semana 8',month:"febrero",Resto:45.84,Bankia:11.19,CaixaBank:7.43,Santander:10.61,BBVA:1.59,ING:23.33},
            {week: 'Semana 9',month:"marzo",Resto:34.89,Bankia:7.81,CaixaBank:3.90,Santander:11.13,BBVA:25.04,ING:17.23},
            {week: 'Semana 10',month:"marzo",Resto:33.64,Bankia:3.39,CaixaBank:8.32,Santander:9.64,BBVA:27.03,ING:17.97},
            {week: 'Semana 11',month:"marzo",Resto:21.19,Bankia:9.40,CaixaBank:13.48,Santander:20.31,BBVA:16.59,ING:19.04},
            {week: 'Semana 12',month:"marzo",Resto:19.83,Bankia:10.47,CaixaBank:17.11,Santander:17.58,BBVA:19.16,ING:15.86},
            {week: 'Semana 13',month:"abril",Resto:12.11,Bankia:1.77,CaixaBank:17.64,Santander:34.03,BBVA:11.98,ING:22.47},
            {week: 'Semana 14',month:"abril",Resto:15.83,Bankia:0.99,CaixaBank:13.71,Santander:36.38,BBVA:5.04,ING:28.06},
            {week: 'Semana 15',month:"abril",Resto:14.13,Bankia:11.16,CaixaBank:26.75,Santander:38.43,BBVA:7.30,ING:2.23},
            {week: 'Semana 16',month:"abril",Resto:21.48,Bankia:2.39,CaixaBank:23.55,Santander:28.35,BBVA:12.66,ING:11.56},
            {week: 'Semana 17',month:"abril",Resto:16.83,Bankia:1.43,CaixaBank:14.87,Santander:20.93,BBVA:44.48,ING:1.46},
            {week: 'Semana 18',month:"mayo",Resto:36.16,Bankia:1.77,CaixaBank:12.95,Santander:19.06,BBVA:27.36,ING:2.69},
            {week: 'Semana 19',month:"mayo",Resto:29.85,Bankia:1.27,CaixaBank:18.68,Santander:14.51,BBVA:16.57,ING:19.11},
            {week: 'Semana 20',month:"mayo",Resto:29.84,Bankia:1.91,CaixaBank:12.88,Santander:11.48,BBVA:23.18,ING:20.70},
            {week: 'Semana 21',month:"mayo",Resto:27.92,Bankia:2.77,CaixaBank:18.10,Santander:10.45,BBVA:26.25,ING:14.52},
            {week: 'Semana 22',month:"junio",Resto:24.42,Bankia:20.29,CaixaBank:12.94,Santander:8.71,BBVA:29.74,ING:3.89},
            {week: 'Semana 23',month:"junio",Resto:17.65,Bankia:21.02,CaixaBank:11.12,Santander:6.34,BBVA:21.87,ING:22.00},
            {week: 'Semana 24',month:"junio",Resto:27.29,Bankia:8.21,CaixaBank:11.36,Santander:4.02,BBVA:33.11,ING:16.01},
            {week: 'Semana 25',month:"junio",Resto:41.42,Bankia:5.08,CaixaBank:7.27,Santander:4.84,BBVA:30.26,ING:11.13},
            {week: 'Semana 26',month:"julio",Resto:22.60,Bankia:3.87,CaixaBank:18.78,Santander:11.91,BBVA:27.67,ING:15.17},
            {week: 'Semana 27',month:"julio",Resto:25.21,Bankia:9.17,CaixaBank:11.91,Santander:24.89,BBVA:19.36,ING:9.46},
            {week: 'Semana 28',month:"julio",Resto:23.93,Bankia:13.45,CaixaBank:11.36,Santander:10.03,BBVA:30.03,ING:11.19},
            {week: 'Semana 29',month:"julio",Resto:17.42,Bankia:4.76,CaixaBank:7.74,Santander:14.94,BBVA:50.82,ING:4.33},
            {week: 'Semana 30',month:"julio",Resto:14.10,Bankia:3.22,CaixaBank:5.93,Santander:13.68,BBVA:19.07,ING:43.99},
            {week: 'Semana 31',month:"agosto",Resto:12.16,Bankia:0.21,CaixaBank:5.81,Santander:2.81,BBVA:24.24,ING:54.77},
            {week: 'Semana 32',month:"agosto",Resto:4.46,Bankia:0.13,CaixaBank:5.53,Santander:1.54,BBVA:37.87,ING:50.47},
            {week: 'Semana 33',month:"agosto",Resto:8.11,Bankia:0.34,CaixaBank:6.70,Santander:8.67,BBVA:43.32,ING:32.85},
            {week: 'Semana 34',month:"agosto",Resto:6.77,Bankia:0.24,CaixaBank:5.75,Santander:8.63,BBVA:35.53,ING:43.08},
            {week: 'Semana 35',month:"septiembre",Resto:8.91,Bankia:3.10,CaixaBank:5.88,Santander:8.41,BBVA:35.97,ING:37.73},
            {week: 'Semana 36',month:"septiembre",Resto:10.46,Bankia:5.19,CaixaBank:15.32,Santander:17.21,BBVA:19.87,ING:31.95},
            {week: 'Semana 37',month:"septiembre",Resto:16.91,Bankia:19.13,CaixaBank:27.50,Santander:11.12,BBVA:0.55,ING:24.80},
            {week: 'Semana 38',month:"septiembre",Resto:27.34,Bankia:13.53,CaixaBank:26.11,Santander:8.66,BBVA:4.28,ING:20.07},
            {week: 'Semana 39',month:"octubre",Resto:23.77,Bankia:10.40,CaixaBank:15.09,Santander:4.83,BBVA:26.65,ING:19.26},
            {week: 'Semana 40',month:"octubre",Resto:24.26,Bankia:1.97,CaixaBank:7.18,Santander:26.06,BBVA:24.16,ING:16.37},
            {week: 'Semana 41',month:"octubre",Resto:33.84,Bankia:2.28,CaixaBank:8.04,Santander:29.48,BBVA:14.76,ING:11.60},
            {week: 'Semana 42',month:"octubre",Resto:29.43,Bankia:3.32,CaixaBank:11.15,Santander:27.88,BBVA:12.68,ING:15.54},
            {week: 'Semana 43',month:"octubre",Resto:26.18,Bankia:3.97,CaixaBank:20.55,Santander:17.82,BBVA:10.89,ING:20.59},
            {week: 'Semana 44',month:"noviembre",Resto:14.94,Bankia:2.71,CaixaBank:15.23,Santander:15.82,BBVA:29.02,ING:22.28},
            {week: 'Semana 45',month:"noviembre",Resto:16.63,Bankia:5.48,CaixaBank:18.16,Santander:17.48,BBVA:14.22,ING:28.04},
            {week: 'Semana 46',month:"noviembre",Resto:18.65,Bankia:6.66,CaixaBank:19.40,Santander:12.97,BBVA:19.53,ING:22.79},
            {week: 'Semana 47',month:"noviembre",Resto:19.30,Bankia:5.43,CaixaBank:11.36,Santander:11.89,BBVA:28.91,ING:23.12},
            {week: 'Semana 48',month:"diciembre",Resto:6.47,Bankia:8.33,CaixaBank:14.96,Santander:20.72,BBVA:21.49,ING:28.02},
            {week: 'Semana 49',month:"diciembre",Resto:11.53,Bankia:4.38,CaixaBank:26.55,Santander:29.39,BBVA:16.45,ING:11.71},
            {week: 'Semana 50',month:"diciembre",Resto:10.99,Bankia:3.42,CaixaBank:20.61,Santander:8.50,BBVA:24.63,ING:31.84},
            {week: 'Semana 51',month:"diciembre",Resto:7.13,Bankia:3.12,CaixaBank:20.42,Santander:7.27,BBVA:19.23,ING:42.83},
            {week: 'Semana 52',month:"diciembre",Resto:7.61,Bankia:2.69,CaixaBank:20.03,Santander:4.27,BBVA:2.77,ING:62.63},
];

var dataLine= [
  {week: 'Semana 1',month:"enero",total:6797580.31},
  {week: 'Semana 2',month:"enero",total:9385745.71},
  {week: 'Semana 3',month:"enero",total:12474134.20},
  {week: 'Semana 4',month:"enero",total:11604372.27},
  {week: 'Semana 5',month:"febrero",total:9524675.83},
  {week: 'Semana 6',month:"febrero",total:11510681.82},
  {week: 'Semana 7',month:"febrero",total:17448712.23},
  {week: 'Semana 8',month:"febrero",total:12291860.05},
  {week: 'Semana 9',month:"marzo",total:17258005.50},
  {week: 'Semana 10',month:"marzo",total:14074585.07},
  {week: 'Semana 11',month:"marzo",total:10773836.43},
  {week: 'Semana 12',month:"marzo",total:9790242.76},
  {week: 'Semana 13',month:"abril",total:8302301.47},
  {week: 'Semana 14',month:"abril",total:6805755.48},
  {week: 'Semana 15',month:"abril",total:2796408.83},
  {week: 'Semana 16',month:"abril",total:5389803.27},
  {week: 'Semana 17',month:"abril",total:7874928.68},
  {week: 'Semana 18',month:"mayo",total:9027273.30},
  {week: 'Semana 19',month:"mayo",total:13438836.18},
  {week: 'Semana 20',month:"mayo",total:12862035.21},
  {week: 'Semana 21',month:"mayo",total:14001664.25},
  {week: 'Semana 22',month:"junio",total:10267089.92},
  {week: 'Semana 23',month:"junio",total:10537409.43},
  {week: 'Semana 24',month:"junio",total:15095536.75},
  {week: 'Semana 25',month:"junio",total:19953532.95},
  {week: 'Semana 26',month:"julio",total:11571210.77},
  {week: 'Semana 27',month:"julio",total:12624911.71},
  {week: 'Semana 28',month:"julio",total:8611103.84},
  {week: 'Semana 29',month:"julio",total:6476242.01},
  {week: 'Semana 30',month:"julio",total:10003579.45},
  {week: 'Semana 31',month:"agosto",total:7133941.57},
  {week: 'Semana 32',month:"agosto",total:7992528.70},
  {week: 'Semana 33',month:"agosto",total:6290937.14},
  {week: 'Semana 34',month:"agosto",total:7498056.09},
  {week: 'Semana 35',month:"septiembre",total:12152122.17},
  {week: 'Semana 36',month:"septiembre",total:9606325.50},
  {week: 'Semana 37',month:"septiembre",total:10535749.36},
  {week: 'Semana 38',month:"septiembre",total:13067549.61},
  {week: 'Semana 39',month:"octubre",total:15798996.85},
  {week: 'Semana 40',month:"octubre",total:18471142.16},
  {week: 'Semana 41',month:"octubre",total:16457513.02},
  {week: 'Semana 42',month:"octubre",total:13282888.06},
  {week: 'Semana 43',month:"octubre",total:12029552.46},
  {week: 'Semana 44',month:"noviembre",total:11324425.23},
  {week: 'Semana 45',month:"noviembre",total:8285594.60},
  {week: 'Semana 46',month:"noviembre",total:7145376.96},
  {week: 'Semana 47',month:"noviembre",total:16660421.68},
  {week: 'Semana 48',month:"diciembre",total:32943982.62},
  {week: 'Semana 49',month:"diciembre",total:12001507.24},
  {week: 'Semana 50',month:"diciembre",total:19947660.94},
  {week: 'Semana 51',month:"diciembre",total:20672806.02},
  {week: 'Semana 52',month:"diciembre",total:14202458.56},
]
    var stackColumnWidth = 12
    var xData = ["Resto","Bankia","CaixaBank","Santander","BBVA","ING"];
    var clientWidth = document.getElementById('chart').clientWidth
    var margin = {top: 25, right: 50, bottom: 35, left: 0},
            width = clientWidth - margin.top - margin.bottom,
            height = 300 - margin.top - margin.bottom;
    var x = d3.scale.ordinal()
        .rangeRoundBands([0,clientWidth],-1.4);

    var y = d3.scale.linear()
            .rangeRound([height, 0]);
    var color = ["#a8a8a8", "#B9D12E", "#B7D7E9","#FE0000", "#3473BA", "#FE7A22"]
    //obligo a la leyenda a aparecer en la 3 semana de cada mes
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

    var svg = d3.select("#chart").append("svg")
            .attr("width",clientWidth)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var div = d3.select("body").append("div")
    .attr("class", "tooltip graph-tooltip")
    .style("opacity", 0);

    var svgLegend = d3.select("#legend-div").append("svg").attr("height", height)

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
              stackHeight = (y(d.y0) - y(d.y + d.y0) - 1)/1.85
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


//FUNCTIONS

//Function that returns styled tooltip string, it recieves company name and value

function tooltipString(company,value) {
  return "<b>" + company + ":</b> " + value + "%"
};
function isInArray(value, array) {
      return array.indexOf(value) > -1;
}
