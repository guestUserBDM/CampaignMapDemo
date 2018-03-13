$( document ).ready(function() {

  // -- define your functions

/*******************************************************
  This function recieve an array dataset of 54 integers, 
  delete the existing child nodes of the target #ID 
  and draws the new graphic. It contains all D3JS logic
*******************************************************/
$.drawLineChart = function(arrayData) {

  if (arrayData != undefined) {
    //Clean children divs
    $("#linechart").empty();
    // Define the div for the tooltip
    var div = d3.select("body").append("div") 
        .attr("class", "tooltip")       
        .style("opacity", 0);

        /* implementation heavily influenced by http://bl.ocks.org/1166403 */
        var clientWidth = document.getElementById('linechart').clientWidth
        // define dimensions of graph
        var m = [25, 50, 35, 0]; // margins
        var w = clientWidth - m[0] - m[2]; // width
        var h = 150 - m[0] - m[2]; // height
        // create a simple data array that we'll plot with a line (this array represents only the Y values, X will just be the index location)
        //var data = [6797580.31,9385745.71,12474134.2,11604372.27,9524675.83,11510681.82,17448712.23,12291860.05,17258005.5,14074585.07,10773836.43,9790242.76,8302301.47,6805755.48,2796408.83,5389803.27,7874928.68,9027273.3,13438836.18,12862035.21,14001664.25,10267089.92,10537409.43,15095536.75,19953532.95,11571210.77,12624911.71,8611103.84,6476242.01,10003579.45,7133941.57,7992528.7,6290937.14,7498056.09,12152122.17,9606325.5,10535749.36,13067549.61,15798996.85,18471142.16,16457513.02,13282888.06,12029552.46,11324425.23,8285594.6,7145376.96,16660421.68,32943982.62,12001507.24,19947660.94,20672806.02,14202458.56];
        var data = arrayData;
        // X scale will fit all values from data[] within pixels 0-w
        //(data == undefined) ? 54 : 
        var x = d3.scale.linear().domain([0, data.length]).range([7, clientWidth + 7 - m[0]]);
        // Y scale will fit values from 0-10 within pixels h-0 (Note the inverted domain for the y-scale: bigger is up!) 
        // We use Math.max.apply(null, data); to dinamically gets the top
        var y = d3.scale.linear().domain([0, Math.max.apply(null, data)]).range([h, 0]);
          // automatically determining max range can work something like this
          // var y = d3.scale.linear().domain([0, d3.max(data)]).range([h, 0]);

        // create a line function that can convert data[] into x and y points
        var line = d3.svg.line()
          // assig n the X function to plot our line as we wish
          .x(function(d,i) { 
            // verbose logging to show what's actually being done
            //console.log('Plotting X value for data point: ' + d + ' using index: ' + i + ' to be at: ' + x(i) + ' using our xScale.');
            // return the X coordinate where we want to plot this datapoint
            return x(i); 
          })
          .y(function(d) { 
            // verbose logging to show what's actually being done
            //console.log('Plotting Y value for data point: ' + d + ' to be at: ' + y(d) + " using our yScale.");
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
          // Add the scatterplot
          graph.selectAll("dot")  
              .data(data)     
          .enter().append("circle")               
              .attr("r", 5)
              .attr("cx", function(d,i) { return x(i); })     
              .attr("cy", function(d,i) { return y(d); })
              .style("fill","rgba(240, 240, 240, 0)") 
              .on("mouseover", function(d,i) {    
                  div.transition()    
                      .duration(200)    
                      .style("opacity", .9);    
                  div .html("<b>Semana " + (i+1) + ": </b>" + d.toLocaleString('es-ES') + "€")  
                      .style("left", (d3.event.pageX) + "px")   
                      .style("top", (d3.event.pageY - 28) + "px");  
                  })          
              .on("mouseout", function(d) {   
                  div.transition()    
                      .duration(500)    
                      .style("opacity", 0); 
              });
    
   }//IF undefined para la primera carga
  }
// END FUNCTION: $.drawLineChart()

/*******************************************************
  This function recieve de data JSON, sum all total data
  by week and return its like and array of integers
*******************************************************/

$.prepareDataForLinearChart = function(data) {
  weeks_array = Array.apply(null, { length: 52 })
  $.each(weeks_array, function(index) {
    if (data[index] != null) {
       total_week = 0
       $.each(data[index],function(key, value) {
         total_week += data[index][key]["total"]
       });
       weeks_array[index] = total_week
    } else {
      weeks_array[index] = 0
    }
  
  });
  //data = [6797580.31,9385745.71,12474134.2,11604372.27,9524675.83,11510681.82,17448712.23,12291860.05,17258005.5,14074585.07,10773836.43,9790242.76,8302301.47,6805755.48,2796408.83,5389803.27,7874928.68,9027273.3,13438836.18,12862035.21,14001664.25,10267089.92,10537409.43,15095536.75,19953532.95,11571210.77,12624911.71,8611103.84,6476242.01,10003579.45,7133941.57,7992528.7,6290937.14,7498056.09,12152122.17,9606325.5,10535749.36,13067549.61,15798996.85,18471142.16,16457513.02,13282888.06,12029552.46,11324425.23,8285594.6,7145376.96,16660421.68,32943982.62,12001507.24,19947660.94,20672806.02,14202458.56];
  return weeks_array
};
// END FUNCTION: $.prepareDataForLinearChart()
// END define your functions
// Ajax calls
    $.ajax({
      method: "GET",
      crossDomain: true,
      dataType: "JSON",
      url: "http://localhost:3000/comparative/get_campaign_map_json",
      beforeSend: function(xhr){
        xhr.setRequestHeader('x-bit-subscription', 20);
      },
      headers: {
        'Authorization': 'Token token=44d7817dc75942288e8b36425cfbdea12'},
      })
      .done(function( data ) {
        arrayData = $.prepareDataForLinearChart(data);
        $.drawLineChart(arrayData);
    })
      .fail(function(data) {
        alert( "Fallo en la carga de datos" );
    });
 //END Ajax Calls

 //BEGUIN render of graph in page
 $.drawLineChart(undefined);
 //END render of graph in page
 //END doc READY
});