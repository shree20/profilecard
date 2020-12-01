import * as d3 from "d3";
import { barData } from "../data/data";

export const barchart = () => {

    // set the dimensions and margins of the graph
    var margin = { top: 0, right: 20, bottom: 10, left: 30 },
        width = 330,
        height = 180;

    // append the svg object to the body of the page
    var svg = d3.select("#barchart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);



    var series = d3.stack()
        .keys(["values", "maxpos", "maxneg"])
        .offset(d3.stackOffsetDiverging)
        (barData);

    //   <!-- var svg = d3.select("svg"), -->
    //       <!-- margin = {top: 30, right: 20, bottom: 60, left: 30}, -->
    //       <!-- width = +svg.attr("width"), -->
    //       <!-- height = +svg.attr("height"); -->

    var y = d3.scaleBand()
        .domain(barData.map(function (d) { return d.categories; }))
        .rangeRound([margin.top, height - margin.bottom])
        .padding(0.5);

    var x = d3.scaleLinear()
        .domain([d3.min(series, stackMin), d3.max(series, stackMax)])
        .rangeRound([margin.left, width - margin.right]);

    var z = d3.scaleOrdinal(["#007AFF", "#DADEE2", "#DADEE2"]);

    svg.append("g")
        .selectAll("g")
        .data(series)
        .enter().append("g")
        .attr("fill", function (d) { return z(d.key); })
        .selectAll("rect")
        .data(function (d) { return d; })
        .enter().append("rect")
        .attr("height", y.bandwidth)
        .attr("y", function (d) { return y(d.data.categories); })
        .attr("x", function (d) { return x(d[0]); })
        .attr("width", function (d) { return x(d[1]) - x(d[0]); })

    svg.append("g")
        .attr("transform", "translate(" + 30 + ", 0)")
        .call(d3.axisLeft(y));

    //   <!-- svg.append("g") -->
    //       <!-- .attr("transform", "translate(0," + margin.top + ")") -->
    //       <!-- .call(d3.axisTop(x)); -->

    function stackMin(serie) {
        return d3.min(serie, function (d) { return d[0]; });
    }

    function stackMax(serie) {
        return d3.max(serie, function (d) { return d[1]; });
    }


}