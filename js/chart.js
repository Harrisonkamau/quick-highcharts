$(document).ready(function(){
  Highcharts.chart('container', {
    chart: {
      renderTo: 'container',
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },

    yAxis: {
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
})
