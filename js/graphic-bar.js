var data = [
        {week: 'Semana 1',month:"enero",Resto:7.84,Bankia:27.41,CaixaBank:15.20,Santander:13.25,BBVA:4.62,ING:31.68},
        {week: 'Semana 2',month:"enero",Resto:37.09,Bankia:7.84,CaixaBank:14.90,Santander:10.18,BBVA:3.37,ING:26.63},
        {week: 'Semana 3',month:"enero",Resto:25.42,Bankia:6.81,CaixaBank:11.10,Santander:15.76,BBVA:22.61,ING:18.30},
        {week: 'Semana 4',month:"enero",Resto:17.12,Bankia:2.49,CaixaBank:17.21,Santander:32.01,BBVA:18.84,ING:12.33},
        {week: 'Semana 5',month:"enero",Resto:30.41,Bankia:3.48,CaixaBank:15.69,Santander:12.95,BBVA:23.41,ING:14.07},
        {week: 'Semana 6',month:"febrero" ,Resto:28.16,Bankia:10.10,CaixaBank:11.56,Santander:6.38,BBVA:28.90,ING:14.90},
        {week: 'Semana 7',month:"febrero",Resto:21.27,Bankia:7.17,CaixaBank:9.98,Santander:15.93,BBVA:27.40,ING:18.25},
        {week: 'Semana 8',month:"febrero",Resto:7.15,Bankia:0.89,CaixaBank:5.82,Santander:6.37,BBVA:34.56,ING:45.21},
        {week: 'Semana 9',month:"febrero",Resto:18.71,Bankia:11.19,CaixaBank:19.66,Santander:8.79,BBVA:17.55,ING:24.11},
        {week: 'Semana 10',month:"marzo",Resto:27.85,Bankia:2.90,CaixaBank:11.22,Santander:24.02,BBVA:17.34,ING:16.66},
        {week: 'Semana 11',month:"marzo",Resto:15.95,Bankia:5.82,CaixaBank:14.24,Santander:13.74,BBVA:24.29,ING:25.97},
        {week: 'Semana 12',month:"marzo",Resto:8.55,Bankia:4.03,CaixaBank:21.56,Santander:13.49,BBVA:16.81,ING:35.56},
        {week: 'Semana 13',month:"marzo",Resto:7.84,Bankia:27.41,CaixaBank:15.20,Santander:13.25,BBVA:4.62,ING:31.68},
        {week: 'Semana 14',month:"marzo",Resto:37.09,Bankia:7.84,CaixaBank:14.90,Santander:10.18,BBVA:3.37,ING:26.63},
        {week: 'Semana 15',month:"abril",Resto:25.42,Bankia:6.81,CaixaBank:11.10,Santander:15.76,BBVA:22.61,ING:18.30},
        {week: 'Semana 16',month:"abril",Resto:17.12,Bankia:2.49,CaixaBank:17.21,Santander:32.01,BBVA:18.84,ING:12.33},
        {week: 'Semana 17',month:"abril",Resto:30.41,Bankia:3.48,CaixaBank:15.69,Santander:12.95,BBVA:23.41,ING:14.07},
        {week: 'Semana 18',month:"abril",Resto:28.16,Bankia:10.10,CaixaBank:11.56,Santander:6.38,BBVA:28.90,ING:14.90},
        {week: 'Semana 19',month:"abril",Resto:21.27,Bankia:7.17,CaixaBank:9.98,Santander:15.93,BBVA:27.40,ING:18.25},
        {week: 'Semana 20',month:"mayo",Resto:7.15,Bankia:0.89,CaixaBank:5.82,Santander:6.37,BBVA:34.56,ING:45.21},
        {week: 'Semana 21',month:"mayo",Resto:18.71,Bankia:11.19,CaixaBank:19.66,Santander:8.79,BBVA:17.55,ING:24.11},
        {week: 'Semana 22',month:"mayo",Resto:27.85,Bankia:2.90,CaixaBank:11.22,Santander:24.02,BBVA:17.34,ING:16.66},
        {week: 'Semana 23',month:"mayo",Resto:15.95,Bankia:5.82,CaixaBank:14.24,Santander:13.74,BBVA:24.29,ING:25.97},
        {week: 'Semana 24',month:"mayo",Resto:8.55,Bankia:4.03,CaixaBank:21.56,Santander:13.49,BBVA:16.81,ING:35.56},
        {week: 'Semana 25',month:"junio",Resto:7.84,Bankia:27.41,CaixaBank:15.20,Santander:13.25,BBVA:4.62,ING:31.68},
        {week: 'Semana 26',month:"junio",Resto:37.09,Bankia:7.84,CaixaBank:14.90,Santander:10.18,BBVA:3.37,ING:26.63},
        {week: 'Semana 27',month:"junio",Resto:25.42,Bankia:6.81,CaixaBank:11.10,Santander:15.76,BBVA:22.61,ING:18.30},
        {week: 'Semana 28',month:"junio",Resto:17.12,Bankia:2.49,CaixaBank:17.21,Santander:32.01,BBVA:18.84,ING:12.33},
        {week: 'Semana 29',month:"julio",Resto:30.41,Bankia:3.48,CaixaBank:15.69,Santander:12.95,BBVA:23.41,ING:14.07},
        {week: 'Semana 30',month:"julio",Resto:28.16,Bankia:10.10,CaixaBank:11.56,Santander:6.38,BBVA:28.90,ING:14.90},
        {week: 'Semana 31',month:"julio",Resto:21.27,Bankia:7.17,CaixaBank:9.98,Santander:15.93,BBVA:27.40,ING:18.25},
        {week: 'Semana 32',month:"julio",Resto:7.15,Bankia:0.89,CaixaBank:5.82,Santander:6.37,BBVA:34.56,ING:45.21},
        {week: 'Semana 33',month:"agosto",Resto:18.71,Bankia:11.19,CaixaBank:19.66,Santander:8.79,BBVA:17.55,ING:24.11},
        {week: 'Semana 34',month:"agosto",Resto:27.85,Bankia:2.90,CaixaBank:11.22,Santander:24.02,BBVA:17.34,ING:16.66},
        {week: 'Semana 35',month:"agosto",Resto:15.95,Bankia:5.82,CaixaBank:14.24,Santander:13.74,BBVA:24.29,ING:25.97},
        {week: 'Semana 36',month:"agosto",Resto:8.55,Bankia:4.03,CaixaBank:21.56,Santander:13.49,BBVA:16.81,ING:35.56},
        {week: 'Semana 37',month:"septiembre",Resto:7.84,Bankia:27.41,CaixaBank:15.20,Santander:13.25,BBVA:4.62,ING:31.68},
        {week: 'Semana 38',month:"septiembre",Resto:37.09,Bankia:7.84,CaixaBank:14.90,Santander:10.18,BBVA:3.37,ING:26.63},
        {week: 'Semana 39',month:"septiembre",Resto:25.42,Bankia:6.81,CaixaBank:11.10,Santander:15.76,BBVA:22.61,ING:18.30},
        {week: 'Semana 40',month:"septiembre",Resto:17.12,Bankia:2.49,CaixaBank:17.21,Santander:32.01,BBVA:18.84,ING:12.33},
        {week: 'Semana 41',month:"octubre",Resto:30.41,Bankia:3.48,CaixaBank:15.69,Santander:12.95,BBVA:23.41,ING:14.07},
        {week: 'Semana 42',month:"octubre",Resto:28.16,Bankia:10.10,CaixaBank:11.56,Santander:6.38,BBVA:28.90,ING:14.90},
        {week: 'Semana 43',month:"octubre",Resto:21.27,Bankia:7.17,CaixaBank:9.98,Santander:15.93,BBVA:27.40,ING:18.25},
        {week: 'Semana 44',month:"octubre",Resto:7.15,Bankia:0.89,CaixaBank:5.82,Santander:6.37,BBVA:34.56,ING:45.21},
        {week: 'Semana 45',month:"noviembre",Resto:18.71,Bankia:11.19,CaixaBank:19.66,Santander:8.79,BBVA:17.55,ING:24.11},
        {week: 'Semana 46',month:"noviembre",Resto:27.85,Bankia:2.90,CaixaBank:11.22,Santander:24.02,BBVA:17.34,ING:16.66},
        {week: 'Semana 47',month:"noviembre",Resto:15.95,Bankia:5.82,CaixaBank:14.24,Santander:13.74,BBVA:24.29,ING:25.97},
        {week: 'Semana 48',month:"noviembre",Resto:8.55,Bankia:4.03,CaixaBank:21.56,Santander:13.49,BBVA:16.81,ING:35.56},
        {week: 'Semana 49',month:"diciembre",Resto:7.84,Bankia:27.41,CaixaBank:15.20,Santander:13.25,BBVA:4.62,ING:31.68},
        {week: 'Semana 50',month:"diciembre",Resto:37.09,Bankia:7.84,CaixaBank:14.90,Santander:10.18,BBVA:3.37,ING:26.63},
        {week: 'Semana 51',month:"diciembre",Resto:25.42,Bankia:6.81,CaixaBank:11.10,Santander:15.76,BBVA:22.61,ING:18.30},
        {week: 'Semana 52',month:"diciembre",Resto:17.12,Bankia:2.49,CaixaBank:17.21,Santander:32.01,BBVA:18.84,ING:12.45},
    ];

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

    var svgLegend = d3.select("#legend-div").append("svg")

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
               div.html(tooltipString(d.company,d.x))
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
        var vert = i * height + 20;                       
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