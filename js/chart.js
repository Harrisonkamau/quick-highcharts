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
              }
          });

        // first chart
      var chartOne = new Highcharts.Chart({
        chart: {
          renderTo: 'container',
          type: 'bar'
        },
        title: {
          text: 'Fruit Consumption'
        },
        subtitle: {
          text: "Bar graph"
        },

        yAxis: {
          type: 'linear',
          title: {
            text: 'Fruit eaten'
          }
        },
        series: [{
          name: 'Jane',
          data: [1, 0, 4]
        },
        {
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
