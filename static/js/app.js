// Get the data endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data
d3.json(url).then(function(data) {
//bar chart    
  function bar_chart() {
// Trace for data
        let trace_bar = [{
            x: data.samples[0].sample_values.slice(0, 10).reverse(),
            y: data.samples[0].otu_ids.slice(0, 10).map(z => "OTU " + z.toString()).reverse(),
            type: "bar",
            orientation: "h",
            text: data.samples[0].otu_labels.slice(0, 10).reverse(),
        }];
//plotbar chart
    Plotly.newPlot("bar", trace_bar);
    }
//bubble chart    
    function bubble_chart() {
        let trace_bubble = [{
            x: data.samples[0].otu_ids,
            y: data.samples[0].sample_values,
            mode: "markers",
            text: data.samples[0].otu_labels,
            marker:{
                color: data.samples[0].otu_ids,
                size: data.samples[0].sample_values,
                colorscale: 'Earth',
            },
        },];
        // add x axis legend
        let layout = {
            xaxis: {title: "OTU ID"}
        };
//plot bubble chart
    Plotly.newPlot("bubble", trace_bubble, layout);
    }

//display charts
    bar_chart();
    bubble_chart();
});



