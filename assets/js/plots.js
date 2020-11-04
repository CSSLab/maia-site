function draw_main_bar_plot() {
    var ctx = document.getElementById('maia_bars').getContext('2d');
    main_chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Stockfish', 'Leela', 'Maia'],
            datasets: [{
                label: 'Accuracy',
                data: [38.718, 44.512, 51.802],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Model',
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Accuracy',
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
function draw_main_line_plot(x) {
    ctx = document.getElementById('maia_lines').getContext('2d');
    var data= [{
        x: 10,
        y: 20
    }, {
        x: 15,
        y: 10
    }]
    TestLineChart = new Chart(ctx, {
        type: 'line',
        data: data,
        width: x,
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Model',
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Accuracy',
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    TestLineChart.width = 500;
}

