$(document).ready(function(){

    // create chart options object
    var options = {
        chart: {
            renderTo: 'container',
            type: "spline"
        },
        title: {
            text: "Students Mock Data"
        },
        xAxis: {
            categories: []
        },
        yAxis: {
            text: "Students Names"
        },
        series : []
    }

    // use jQuery.get method to get the contents of MOCK_DATA.csv file
    $.get('./data/MOCK_DATA.csv', function(data){
        // split the lines
        let lines = data.split('\n');

        // iterate over the lines and add categories or series
        $.each(lines, function(lineNumber, line){
            let items = line.split(',');

            // header lines contains categories
            if(lineNumber === 0){
                $.each(items, function(itemNumber, item){
                    if(itemNumber > 0) options.xAxis.categories.push(item);
                })
            }
            /*  the rest of the line contains data with their 
            ** first_name in the first position
            */
            else {
                let series = {
                    data: []
                };
                $.each(items, function(itemNumber, item){
                    if(itemNumber === 0){
                        series.name = item;
                    } else{
                        series.data.push(parseFloat(item));
                    }
                });
                options.series.push(series);
            }
        });

        // create chart from Highcharts.Chart constructor
        let myChart = new Highcharts.Chart(options);
    });
    
})