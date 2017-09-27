google.charts.load('45', { packages: ['corechart', 'table', 'geochart'] });

google.charts.setOnLoadCallback(drawTable);


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
    /*drawPieChart();
    drawColumnChart();
    drawAreaChart();
    drawRegionsMap();*/
    drawTable();
});
