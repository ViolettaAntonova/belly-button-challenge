// Get the data endpoint
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

//bar chart    
function bar_chart(value) {
    d3.json(url).then(function(data) {
        let results = data.samples.filter(x => x.id == value);
    // Trace for data
        let trace_bar = [{
            x: results[0].sample_values.slice(0, 10).reverse(),
            y: results[0].otu_ids.slice(0, 10).map(z => "OTU " + z.toString()).reverse(),
            type: "bar",
            orientation: "h",
            text: results[0].otu_labels.slice(0, 10).reverse(),
        }];
    //plotbar chart
        Plotly.newPlot("bar", trace_bar);
    }
)};

//bubble chart    
function bubble_chart(value) {
    d3.json(url).then(function(data) {
        let results = data.samples.filter(x => x.id == value);
    let trace_bubble = [{
        x: results[0].otu_ids,
        y: results[0].sample_values,
        mode: "markers",
        text: results[0].otu_labels,
        marker:{
            color: results[0].otu_ids,
            size: results[0].sample_values,
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
)};
//demographic info 
function demographic(values) {
    d3.json(url).then(function(data) {
        let metadata = data.metadata;

        // Filter data
        let result = metadata.filter(x => x.id == values)[0];
        let demographicInfo = d3.select('#sample-metadata');

        // Clear existing data in demographicInfo
        demographicInfo.html('');

        // Add key and value pair to the demographicInfo panel
        Object.entries(result).forEach(([key, value]) => {
            demographicInfo.append('h6').text(`${key}: ${value}`);
        });
    });
}
//change charts function
function optionChanged(value) {

    bar_chart(value);
    bubble_chart(value);
    demographic(value);
    gaugechart(value)
}
//initialize charts
function Init() {

    // dropdown
    let selector = d3.select('#selDataset');

    d3.json(url).then(data => {
        let sampleNames = data.names;

        // add values to drop down
        for (let i = 0; i < sampleNames.length; i++) {
            let sampleId = sampleNames[i];
            selector.append('option').text(sampleId);
        };

        //first value to charts
        let initialId = 940;

        // Draw the charts
        bar_chart(initialId);
        bubble_chart(initialId);
        demographic(initialId);
        gaugechart(initialId);

    });
}
//initialize function
Init();
