var data = [
        {month: 'Enero',Resto:7.84,Bankia:27.41,CaixaBank:15.20,Santander:13.25,BBVA:4.62,ING:31.68},
        {month: 'Febrero',Resto:37.09,Bankia:7.84,CaixaBank:14.90,Santander:10.18,BBVA:3.37,ING:26.63},
        {month: 'Marzo',Resto:25.42,Bankia:6.81,CaixaBank:11.10,Santander:15.76,BBVA:22.61,ING:18.30},
        {month: 'Abril',Resto:17.12,Bankia:2.49,CaixaBank:17.21,Santander:32.01,BBVA:18.84,ING:12.33},
        {month: 'Mayo',Resto:30.41,Bankia:3.48,CaixaBank:15.69,Santander:12.95,BBVA:23.41,ING:14.07},
        {month: 'Junio',Resto:28.16,Bankia:10.10,CaixaBank:11.56,Santander:6.38,BBVA:28.90,ING:14.90},
        {month: 'Julio',Resto:21.27,Bankia:7.17,CaixaBank:9.98,Santander:15.93,BBVA:27.40,ING:18.25},
        {month: 'Agosto',Resto:7.15,Bankia:0.89,CaixaBank:5.82,Santander:6.37,BBVA:34.56,ING:45.21},
        {month: 'Septiembre',Resto:18.71,Bankia:11.19,CaixaBank:19.66,Santander:8.79,BBVA:17.55,ING:24.11},
        {month: 'Octubre',Resto:27.85,Bankia:2.90,CaixaBank:11.22,Santander:24.02,BBVA:17.34,ING:16.66},
        {month: 'Noviembre',Resto:15.95,Bankia:5.82,CaixaBank:14.24,Santander:13.74,BBVA:24.29,ING:25.97},
        {month: 'Diciembre',Resto:8.55,Bankia:4.03,CaixaBank:21.56,Santander:13.49,BBVA:16.81,ING:35.56}
    ];

    var stackColumnWidth = 30
    var xData = ["Resto","Bankia","CaixaBank","Santander","BBVA","ING"];
    var clientWidth = document.getElementById('chart').clientWidth
    var margin = {top: 25, right: 50, bottom: 35, left: 0},
            width = clientWidth - margin.top - margin.bottom,
            height = 300 - margin.top - margin.bottom;
    var x = d3.scale.ordinal()
        .rangeRoundBands([0,width], .3);

    var y = d3.scale.linear()
            .rangeRound([height, 0]);
    var color = ["#a8a8a8", "#B9D12E", "#B7D7E9","#FE0000", "#3473BA", "#FE7A22"] 

    var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");


    var svg = d3.select("#chart").append("svg")
            .attr("width","100%")
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

    var dataIntermediate = xData.map(function (c) {
        return data.map(function (d) {
            return {x: d.month, y: d[c]};
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
                return color[i]
            })
            .on("mouseover", function(d) {
               div.transition()
                 .duration(200)
                 .style("opacity", .9);
               div.html("<br/>loool")
                 .style("left", (d3.event.pageX) + "px")
                 .style("top", (d3.event.pageY - 28) + "px");
             })
           .on("mouseout", function(d) {
             div.transition()
               .duration(500)
               .style("opacity", 0);
             });

    layer.selectAll("rect")
            .data(function (d) {
                return d;
            })
            .enter().append("rect")
            .attr("x", function (d) {
                return x(d.x);
            })
            .attr("y", function (d) {
                return (y(d.y + d.y0))/1.85;
            })
            .attr("height", function (d) {
              stackHeight = (y(d.y0) - y(d.y + d.y0))/2
                return stackHeight;
            })
            .attr("width", stackColumnWidth);

    svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0," + (height/1.85) + ")")
            .call(xAxis);
