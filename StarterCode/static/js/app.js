d3.json("data/samples.json").then((data) => {
  //  Create the Traces
  var trace1 = {
    x: data.otu_ids,
    y: data.sample_values,
    type: "bar",
    texts = data.otu_labels
  };

  // Create the data array for the plot
  var data = [trace1];

  // Define the plot layout
  var layout = {
    title: "",
    xaxis: { title: "Ids" },
    yaxis: { title: "sample_values" }
  };

  // Plot the chart to a div tag with id "plot"
  Plotly.newPlot("bar", data, layout);
});
