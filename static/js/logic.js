d3.json("/api/v1.0/data").then((data)=>{
  // console.log(data)
});

  // Define sections of data
  // var avo_prices = data.avocado_prices
  // var gas_prices = data.gas_prices
  // var tot_transport = data.tot_transport
  // var avo_transport = data.avo_transport
  // var weather = data.weather
  // var weather2 = data.weather2
  // var bananas = data.bananas
  // console.log(avo_prices)
  // console.log(gas_prices)
  // console.log(tot_transport)
  // console.log(avo_transport)
  // console.log(weather)
  // console.log(bananas)

// -- FUNCTION TO HIDE TITLE BLOCK --
$(document).ready(function(){

  $('#hide').click(function(){
  $('#titleblock').toggle(1000);
    
  });
    
});
// -- FUNCTION TO HIDE TITLE BLOCK --

  // initialize charts for rewriting with input data
function init() {
    
    // Set up chart
    var trace = {
      x: [],
      y: [],
      mode: 'markers',
      marker: {
        size: []
      }
    };
    
    var data = [trace];
    
    var layout = {
      title: 'Charts',
      showlegend: false,
    };
    
    var chart = d3.select("#chart").node();
    
    Plotly.newPlot(chart, data, layout);
}

// -- TRANSPORT DATA FUNCTIONS AND INFO --
d3.select(".avocado__skin").on("click", transport);

  function transport() {
    // console.log("it worked");

    // replotting transport visualizations
    
    var avoTransportTrace1 = {
      x: [], // tot_transport[0].date,
      y: [], // tot_transport[0].average_weekly_rate,
      mode: 'markers',
      marker: {
        size: []
      }
    };

    var avoTransportTrace2 = {
      x: [], // tot_transport[0].date,
      y: [], // avo_transport[0].average_weekly_rate,
      mode: 'markers',
      marker: {
        size: []
      }
    };

    var avoTransportTrace3 = {
      x: [], // tot_transport[0].date,
      y: [], // avo_prices[0].average_price,
      mode: 'markers',
      marker: {
        size: []
      }
    };
    
    var transportData = [avoTransportTrace1, avoTransportTrace2, avoTransportTrace3];
    
    var transportlayout = {
      title: 'Transport Data Analysis',
      showlegend: false,
    };
    
    var transportChart = d3.select("#chart").node();
    
    Plotly.react(transportChart, transportData, transportlayout);
    
    // grab nodes for updating info card
    var dashboard_title = d3.select("#dashboard_title");
    var dashboard_subTitle = d3.select("#dashboard_subtitle");
    var dashboard_text = d3.select("#dashboard_text");
    
    // Update info card with new text
    dashboard_title.text("USDA Transport Data");
    dashboard_subTitle.text("Trucking Availability and Rates");
    dashboard_text.text("This data comes from the USDA Ag Transport site https://agtransport.usda.gov/, specifically the trucking category. This data shows the availability and rates for refrigerated trucks transporting ag commodities and we utilized this and were able to drill down to see costs associated specifically with avocados.");

};
// -- TRANSPORT DATA FUNCTIONS AND INFO --

// -- WEATHER DATA FUNCTIONS AND INFO --
d3.select(".avocado__inner").on("click", weather);

  function weather() {
    // console.log("it worked");

    // replotting weather visualizations
    
    var weatherTrace = {
      x: [],
      y: [],
      mode: 'markers',
      marker: {
        size: []
      }
    };
    
    var weatherData = [weatherTrace];
    
    var weatherLayout = {
      title: 'Weather Data Analysis',
      showlegend: false,
    };
    
    var chart = d3.selectAll("#chart").node();
    
    Plotly.react(chart, weatherData, weatherLayout);
    
    // grab nodes for updating info card
    var dashboard_titleW = d3.select("#dashboard_title");
    var dashboard_subTitleW = d3.select("#dashboard_subtitle");
    var dashboard_textW = d3.select("#dashboard_text");
    
    // Update info card with new text
    dashboard_titleW.text("Open Weather API");
    dashboard_subTitleW.text("San Diego Historical Weather");
    dashboard_textW.text("Info on this data, limitations, etc.");

};
// -- WEATHER DATA FUNCTIONS AND INFO --

init();
