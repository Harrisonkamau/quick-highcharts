$(document).ready(function(){
  /* Initialize the chart using its constructor Highcharts.Chart
  ** and set the options object
  */

        // global options
        Highcharts.setOptions({
              chart: {
                  backgroundColor: {
                      linearGradient: [0, 0, 500, 500],
                      stops: [
                          [0, 'rgb(255, 255, 255)'],
                          [1, 'rgb(240, 240, 255)']
                          ]
                  },
                  borderWidth: 2,
                  plotBackgroundColor: 'rgba(255, 255, 255, .9)',
                  plotShadow: true,
                  plotBorderWidth: 1
              },
              tooltip: {
                  backgroundColor: '#FCFFC5',
                  borderColor: 'black',
                  borderRadius: 10,
                  borderWidth: 3
              }
          });

        // first chart
      var chartOne = new Highcharts.Chart({
        chart: {
          renderTo: 'container',
          type: 'line'
        },
        legend: {
          align: "left",
          backgroundColor: undefined,
          borderColor: "#999999",
          borderRadius: 0,
          borderWidth: 0,
          enabled: true,
          floating: false,
          itemDistance: 20,
          itemHoverStyle: {"color": "#00000"},
          labelFormat: "{name}",

        },
        title: {
          text: 'Fruit Consumption'
        },
        subtitle: {
          text: "Bar graph"
        },

        yAxis: {
          title: {
            text: 'Fruit eaten'
          }
        },
        series: [{
          type: "spline",
          name: 'Jane',
          data: [1, 0, 4, 3, 7]
        },
        {
          type: "line",
          name: 'John',
          data: [5,7,3]
      }]
    });

    // second chart
    var chartTwo = new Highcharts.Chart({
      chart: {
        renderTo: 'container2',
        type: 'line'
      },
      title: {
        text: "Fruit Consumption - Line graph"
      },
      xAxis: {
        categories: ['Mango', 'Orange', 'Apple']
      },
      yAxis: {
        type: 'linear',
        title: {
          text: 'Fruit eaten'
        }
      },
      series: [{
        name: 'Joan',
        data: [2,3,5]
      },
      {
      name: 'Martin',
      data: [1,3,5]
    }
    ]
  });

})
