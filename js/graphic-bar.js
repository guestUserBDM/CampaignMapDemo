var data = [
        {month: 'Enero', ING:31.68,Bankia:27.41,BBVA:4.62,CaixaBank:15.20,Santander:13.25,Resto:7.84},
        {month: 'Febrero', ING:26.63,Bankia:7.84,BBVA:3.37,CaixaBank:14.90,Santander:10.18,Resto:37.09},
        {month: 'Marzo', ING:18.30,Bankia:6.81,BBVA:22.61,CaixaBank:11.10,Santander:15.76,Resto:25.42},
        {month: 'Abril', ING:12.33,Bankia:2.49,BBVA:18.84,CaixaBank:17.21,Santander:32.01,Resto:17.12},
        {month: 'Mayo', ING:14.07,Bankia:3.48,BBVA:23.41,CaixaBank:15.69,Santander:12.95,Resto:30.41},
        {month: 'Junio', ING:14.90,Bankia:10.10,BBVA:28.90,CaixaBank:11.56,Santander:6.38,Resto:28.16},
        {month: 'Julio', ING:18.25,Bankia:7.17,BBVA:27.40,CaixaBank:9.98,Santander:15.93,Resto:21.27},
        {month: 'Agosto', ING:45.21,Bankia:0.89,BBVA:34.56,CaixaBank:5.82,Santander:6.37,Resto:7.15},
        {month: 'Septiembre', ING:24.11,Bankia:11.19,BBVA:17.55,CaixaBank:19.66,Santander:8.79,Resto:18.71},
        {month: 'Octubre', ING:16.66,Bankia:2.90,BBVA:17.34,CaixaBank:11.22,Santander:24.02,Resto:27.85},
        {month: 'Noviembre', ING:25.97,Bankia:5.82,BBVA:24.29,CaixaBank:14.24,Santander:13.74,Resto:15.95},
        {month: 'Diciembre', ING:35.56,Bankia:4.03,BBVA:16.81,CaixaBank:21.56,Santander:13.49,Resto:8.55}
    ];

    var stackColumnWidth = 60
    var xData = ["Bankia", "BBVA", "CaixaBank","ING","Santander","Resto"];
    var clientWidth = document.getElementById('chart').clientWidth
    var margin = {top: 25, right: 50, bottom: 35, left: 0},
            width = clientWidth - margin.top - margin.bottom,
            height = 300 - margin.top - margin.bottom;
    var x = d3.scale.ordinal()
        .rangeRoundBands([0,width], 0);

    var y = d3.scale.linear()
            .rangeRound([height, 0]);
    var color = d3.scale.category20();

    var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

    var svg = d3.select("#chart").append("svg")
            .attr("width","100%")
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


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
              debugger
                return color(i)
            });

    layer.selectAll("rect")
            .data(function (d) {
                return d;
            })
            .enter().append("rect")
            .attr("x", function (d) {
              console.log(d)
              console.log(x(d.x))
                return x(d.x);
            })
            .attr("y", function (d) {
                return y(d.y + d.y0);
            })
            .attr("height", function (d) {
                return y(d.y0) - y(d.y + d.y0);
            })
            .attr("width", stackColumnWidth);

    svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);
