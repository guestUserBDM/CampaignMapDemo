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
    /* implementation heavily influenced by http://bl.ocks.org/1166403 */
    var clientWidth = document.getElementById('linechart').clientWidth
    // define dimensions of graph
    var m = [25, 50, 35, 0]; // margins
    var w = clientWidth - m[0] - m[2]; // width
    var h = 150 - m[0] - m[2]; // height
    
    // create a simple data array that we'll plot with a line (this array represents only the Y values, X will just be the index location)
    var data = [6797580.31,9385745.71,12474134.2,11604372.27,9524675.83,11510681.82,17448712.23,12291860.05,17258005.5,14074585.07,10773836.43,9790242.76,8302301.47,6805755.48,2796408.83,5389803.27,7874928.68,9027273.3,13438836.18,12862035.21,14001664.25,10267089.92,10537409.43,15095536.75,19953532.95,11571210.77,12624911.71,8611103.84,6476242.01,10003579.45,7133941.57,7992528.7,6290937.14,7498056.09,12152122.17,9606325.5,10535749.36,13067549.61,15798996.85,18471142.16,16457513.02,13282888.06,12029552.46,11324425.23,8285594.6,7145376.96,16660421.68,32943982.62,12001507.24,19947660.94,20672806.02,14202458.56];

    // X scale will fit all values from data[] within pixels 0-w
    var x = d3.scale.linear().domain([0, data.length]).range([7, clientWidth + 7 - m[0]]);
    // Y scale will fit values from 0-10 within pixels h-0 (Note the inverted domain for the y-scale: bigger is up!)
    var y = d3.scale.linear().domain([0, 32943982]).range([h, 0]);
      // automatically determining max range can work something like this
      // var y = d3.scale.linear().domain([0, d3.max(data)]).range([h, 0]);

    // create a line function that can convert data[] into x and y points
    var line = d3.svg.line()
      // assign the X function to plot our line as we wish
      .x(function(d,i) { 
        // verbose logging to show what's actually being done
        console.log('Plotting X value for data point: ' + d + ' using index: ' + i + ' to be at: ' + x(i) + ' using our xScale.');
        // return the X coordinate where we want to plot this datapoint
        return x(i); 
      })
      .y(function(d) { 
        // verbose logging to show what's actually being done
        console.log('Plotting Y value for data point: ' + d + ' to be at: ' + y(d) + " using our yScale.");
        // return the Y coordinate where we want to plot this datapoint
        return y(d); 
      })

      // Add an SVG element with the desired dimensions and margin.
      var graph = d3.select("#linechart").append("svg:svg")
            .attr("width", w + m[1] + m[3])
            .attr("height", h + m[0] + m[2])
          .append("svg:g")
            .attr("transform", "translate(" + m[3] + "," + m[1] + ")");

      // create yAxis
      var xAxis = d3.svg.axis().scale(x).tickSize(-h).tickSubdivide(true);
      // // Add the x-axis.
      // graph.append("svg:g")
      //       .attr("class", "x axis")
      //       .attr("transform", "translate(0," + h + ")")
      //       .call(xAxis);


      // // create left yAxis
      // var yAxisLeft = d3.svg.axis().scale(y).ticks(4).orient("left");
      // // Add the y-axis to the left
      // graph.append("svg:g")
      //       .attr("class", "y axis")
      //       .attr("transform", "translate(0,0)")
      //       .call(yAxisLeft);
      
        // Add the line by appending an svg:path element with the data line we created above
      // do this AFTER the axes above so that the line is above the tick-lines
        graph.append("svg:path").attr("d", line(data));