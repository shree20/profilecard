import * as d3 from "d3";
import { lineData } from "../data/data";

export const linechart = ()=>{


// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 30, left: 40},
width = 330 - margin.left - margin.right,
height = 220 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#linechart")
.append("svg")
.attr("width", width )
.attr("height", height);



// var bisectDate = d3.bisector(function(d) { return d.module; }).left;



var x = d3.scaleLinear().range([0, width - (margin.left + margin.right)]);
var y = d3.scaleLinear().range([height - (margin.top * 2), 0]);

var line = d3.line()
.x(function(d) { return x(d.module); })
.y(function(d) { return y(d.value); });

var g = svg.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var clinicalcutoffvalue = 0;




lineData.forEach(function(d) {
  d.value = +d.value;
  d.module = +d.module;
});



    x.domain(d3.extent(lineData, function(d) { return d.module; }));
y.domain([
  (Math.floor(d3.min(lineData, function(d) { return d.value; }))),
  (Math.ceil(d3.max(lineData, function(d) { return d.value; })))
]);

// add the Y gridlines
g.append("g")			
    .attr("class", "grid")
    .call(d3.axisLeft(y)
        .tickSize(-width)
      .tickFormat("")
      .ticks(6)
    );


      

g.append("g")
    .attr("class", "axis axis--y")
    .call(d3.axisLeft(y).ticks(6))
    .append("text")
    .attr("class", "axis-title ")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em");
   

// clinicial cut off line and text group
  var clinicalcutofflineandtext = g.append("g")
    .attr("class", "clinical-cut-off-line-and-text")

// clinicial cut off line
clinicalcutofflineandtext.append("line")
    .attr("class", "clinical-cut-off-line")
    .attr("x1", 0)
    .attr("y1", y(clinicalcutoffvalue))
    .attr("x2", width)
    .attr("y2", y(clinicalcutoffvalue)); 



// lineData line and dots group
var lineAndDots = g.append("g")
        .attr("class", "line-and-dots")
    .attr("transform", "translate(" + ((margin.left + margin.right) / 2) + "," + 0 + ")")

// lineData line
lineAndDots.append("path")
    .datum(lineData)
    .attr("class", "data-line")
    .attr("d", line);

// Data dots
lineAndDots.selectAll("line-circle")
        .data(lineData)
    .enter().append("circle")
    .attr("class", "data-circle")
    .attr("r", 4.5)
    .attr("cx", function(d) { return x(d.module); })
    .attr("cy", function(d) { return y(d.value); });


}