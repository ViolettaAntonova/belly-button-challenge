// Get the data endpoint
//const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

function gaugechart(value) {
    d3.json(url).then(function(data) {
        let results = data.metadata.filter(x => x.id == value);
    // Trace for data
        let trace_bar = [{
            domain: { x: [0, 1], y: [0, 1] },
		    value: results[0].wfreq,
		    title: {text: '<b>Belly Button Washing Frequency</b> <br> Scrubs per week'},
		    type: "indicator",
		    mode: "gauge+number",
            gauge: {
                axis: { range: [null, 9] },
                steps: [
                { range: [0, 1], color: 'rgb(248, 243, 236)' },
                { range: [1, 2], color: 'rgb(244, 241, 229)' },
                { range: [2, 3], color: 'rgb(233, 230, 202)' },
                { range: [3, 4], color: 'rgb(229, 231, 179)' },
                { range: [4, 5], color: 'rgb(213, 228, 157)' },
                { range: [5, 6], color: 'rgb(183, 204, 146)' },
                { range: [6, 7], color: 'rgb(140, 191, 136)' },
                { range: [7, 8], color: 'rgb(138, 187, 143)' },
                { range: [8, 9], color: 'rgb(133, 180, 138)' },
                ]
            }
        }];
    //plotbar chart
        Plotly.newPlot("gauge", trace_bar);    
    }
)};
