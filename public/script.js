google.charts.load('45', { packages: ['corechart', 'table', 'geochart'] });

google.charts.setOnLoadCallback(drawTable);
google.charts.setOnLoadCallback(drawPieChart);
google.charts.setOnLoadCallback(drawColumnChart);


function drawColumnChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2004', 100, 0],
        ['2005', 117, 0],
        ['2006', 66, 0],
        ['2007', 103, 0],
        ['2007', 103, 0]
    ]);

    var options = {
        title: 'Top 5 Restaurants',
        hAxis: { title: 'Name', titleTextStyle: { color: 'red' } }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div1'));
    chart.draw(data, options);
}

function drawPieChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Element');
    data.addColumn('number', 'Percentage');
    data.addRows([
        ['Nitrogen', 0.78],
        ['Oxygen', 0.21],
        ['Other', 0.01]
    ]);

    var options = {
        legend: 'left',
        title: 'Air Composition',
        is3D: false,
        width: '100%',
        height: '100%'
    };
    //console.log(data.toJSON());
    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div0'));
    chart.draw(data, options);
}

function drawTable() {
    $.ajax({
        url: "/restaurant",
        dataType: "json",
        success: function (jsonData) {
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'name');
            data.addColumn('string', 'tag');
            data.addColumn('string', 'rating');

            for (var i = 0; i < jsonData.length; i++) {
                data.addRow([
                    jsonData[i].name,
                    jsonData[i].tag,
                    jsonData[i].rating,
                ]);
            }

            var options = {
                allowHtml: true,
                showRowNumber: true,
                width: '100%',
                height: '100%'
            };

            var table = new google.visualization.Table(document.getElementById('barformat_div'));
            /*var formatter = new google.visualization.BarFormat({ width: 100 });
            formatter.format(data, 3); // Apply formatter to 3rd column*/
            table.draw(data, options);
        }
    });
}

$(window).resize(function () {
    drawPieChart();
    drawColumnChart();
    /*drawAreaChart();
    drawRegionsMap();*/
    drawTable();
});
