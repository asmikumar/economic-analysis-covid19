// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("unemployment_years");
var unemployment_years = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["01/2010", "", "", "", "", "", "", "", "", "", "", "",
            "01/2011", "", "", "", "", "", "", "", "", "", "", "",
            "01/2012", "", "", "", "", "", "", "", "", "", "", "",
            "01/2013", "", "", "", "", "", "", "", "", "", "", "",
            "01/2014", "", "", "", "", "", "", "", "", "", "", "",
            "01/2015", "", "", "", "", "", "", "", "", "", "", "",
            "01/2016", "", "", "", "", "", "", "", "", "", "", "",
            "01/2017", "", "", "", "", "", "", "", "", "", "", "",
            "01/2018", "", "", "", "", "", "", "", "", "", "", "",
            "01/2019", "", "", "", "", "", "", "", "", "", "", "",
            "01/2020", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
    {
      label: "Construction",
      lineTension: false,
      fill: false,
      backgroundColor: "rgba(57,106,177,0.2)",
      borderColor: "rgba(57,106,177,1)",
      pointRadius: 0,
      pointBackgroundColor: "rgba(57,106,177,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(57,106,177,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [24.7,27.1,24.9,21.8,20.1,20.1,17.3,17.0,17.2,17.3,18.8,20.7,
            22.5,21.8,20.0,17.8,16.3,15.6,13.6,13.5,13.3,13.7,13.1,16.0,
            17.7,17.1,17.2,14.5,14.2,12.8,12.3,11.3,11.9,11.4,12.2,13.5,
            16.1,15.7,14.7,13.2,10.8,9.8,9.1,9.1,8.5,9.0,8.6,11.4,
            12.3,12.8,11.3,9.4,8.6,8.2,7.5,7.7,7.0,6.4,7.5,8.3,
            9.8,10.6,9.5,7.5,6.7,6.3,5.5,6.1,5.5,6.2,6.2,7.5,
            8.5,8.7,8.7,6.0,5.2,4.6,4.5,5.1,5.2,5.7,5.7,7.4,
            9.4,8.8,8.4,6.3,5.3,4.5,4.9,4.7,4.7,4.5,5.0,5.9,
            7.3,7.8,7.4,6.5,4.4,4.7,3.4,3.4,4.1,3.6,3.9,5.1,
            6.4,6.2,5.2,4.7,3.2,4.0,3.8,3.6,3.2,4.0,4.4,5.0,
            5.4,5.5,6.9,16.6,12.7,10.1],
    },
    {
      label: "Education and Health Services",
      lineTension: false,
      fill: false,
      backgroundColor: "rgba(218,124,48,0.2)",
      borderColor: "rgba(218,124,48,1)",
      pointRadius: 0,
      pointBackgroundColor: "rgba(218,124,48,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(218,124,48,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [5.5,5.6,5.2,5.0,5.4,6.2,6.6,6.7,6.3,5.8,5.9,5.2,
            5.8,5.6,5.3,5.0,5.7,5.8,5.9,6.3,5.7,5.6,5.2,5.5,
            5.5,5.4,5.3,4.8,5.3,6.2,6.5,6.2,5.5,5.5,5.2,5.2,
            5.4,5.3,5.0,4.4,4.8,5.6,5.7,5.4,5.2,4.2,3.9,4.0,
            4.1,4.0,4.0,3.7,3.9,4.5,4.8,4.8,3.9,4.4,4.0,3.8,
            4.0,3.5,3.3,3.1,3.5,4.2,4.3,4.1,3.5,3.4,3.2,3.1,
            3.2,3.0,3.4,2.7,2.9,3.6,3.7,4.1,3.7,3.4,3.1,2.9,
            2.7,3.2,2.8,2.6,2.8,3.1,3.5,3.8,3.4,2.9,2.5,3.0,
            2.7,2.5,2.6,2.3,2.3,3.2,3.2,3.1,2.8,2.7,2.3,2.1,
            2.6,2.5,2.3,2.1,2.4,3.0,3.1,2.7,2.2,2.2,2.3,2.4,
            2.4,2.4,3.2,10.9,10.1,8.6],
    },
    {
      label: "Financial Activities",
      lineTension: false,
      fill: false,
      backgroundColor: "rgba(62,150,81,0.2)",
      borderColor: "rgba(62,150,81,1)",
      pointRadius: 0,
      pointBackgroundColor: "rgba(62,150,81,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(62,150,81,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [6.6,7.5,7.7,7.6,6.8,6.9,6.4,6.7,6.3,6.7,6.7,6.4,
            7.2,6.9,7.1,6.7,6.8,6.8,6.0,6.2,5.5,5.8,6.1,5.6,
            4.9,5.3,5.7,5.5,5.1,5.6,5.1,5.3,4.8,4.9,4.7,4.1,
            5.5,4.5,4.3,5.4,4.4,4.7,4.5,3.8,3.9,4.6,4.3,4.2,
            3.8,4.2,4.2,5.0,4.8,4.4,3.6,3.5,3.5,3.6,3.5,3.4,
            3.0,3.1,2.6,2.7,2.3,2.5,2.3,2.5,2.6,2.4,2.6,2.6,
            3.1,3.6,3.0,2.7,1.8,2.2,2.4,2.8,3.0,2.7,2.8,2.6,
            3.3,3.4,2.3,2.3,2.3,2.5,2.3,2.5,2.5,2.2,2.1,1.5,
            2.2,2.2,1.8,1.6,1.7,2.1,2.3,2.7,2.7,2.0,2.1,2.4,
            2.4,2.6,2.8,2.1,1.7,2.0,1.7,2.1,1.9,2.0,2.1,2.3,
            2.5,1.6,2.2,5.4,5.7,5.1],
    },
    {
      label: "Information",
      lineTension: false,
      fill: false,
      backgroundColor: "rgba(107,76,154,0.2)",
      borderColor: "rgba(107,76,154,1)",
      pointRadius: 0,
      pointBackgroundColor: "rgba(107,76,154,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(107,76,154,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [10.0,10.0,10.4,9.4,9.8,8.8,10.6,9.7,10.8,9.8,8.8,8.1,
            7.3,6.7,7.6,7.1,7.3,7.9,7.6,6.9,7.4,6.6,7.4,7.7,
            7.9,8.4,8.0,8.3,7.8,7.1,6.7,7.3,7.3,7.7,6.8,8.0,
            8.2,5.2,5.2,5.4,6.4,5.6,5.8,6.6,6.6,7.9,6.4,4.8,
            6.6,4.8,5.1,5.7,5.5,5.2,4.5,4.5,4.4,4.7,5.6,5.7,
            4.4,4.5,3.0,3.2,3.3,3.9,4.1,5.2,4.7,3.0,4.3,2.9,
            4.6,3.7,4.4,4.8,5.2,4.7,5.7,5.0,5.2,4.1,4.2,3.1,
            4.9,3.9,4.0,4.1,4.7,4.8,4.3,5.1,5.1,3.9,5.2,3.8,
            5.3,3.2,4.1,2.3,3.5,4.6,4.2,3.5,2.3,3.2,3.8,3.9,
            4.7,4.1,4.0,3.5,3.0,2.7,3.9,4.7,4.4,3.3,1.6,1.9,
            2.3,2.6,1.8,11.0,10.9,12.0],
    },
    {
      label: "Leisure and Hospitality",
      lineTension: false,
      fill: false,
      backgroundColor: "rgba(204,37,41,0.2)",
      borderColor: "rgba(204,37,41,1)",
      pointRadius: 0,
      pointBackgroundColor: "rgba(204,37,41,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(204,37,41,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [14.2,12.7,12.5,12.8,12.4,12.3,11.4,10.8,11.4,11.1,12.4,12.0,
            13.8,13.8,13.2,11.7,10.6,10.9,10.9,10.5,11.3,10.8,11.1,10.8,
            12.6,11.6,10.9,9.8,9.7,9.8,9.7,10.1,9.7,9.9,10.3,10.8,
            12.0,11.2,10.8,9.6,10.4,10.7,10.0,9.3,9.0,8.8,9.0,9.0,
            9.5,10.3,10.2,8.0,8.1,8.6,8.1,8.1,8.3,8.5,8.2,7.5,
            9.4,8.8,8.6,7.8,7.9,7.5,7.7,7.2,7.5,8.0,7.4,7.4,
            7.7,7.1,7.2,6.5,6.6,6.6,6.0,6.6,6.5,6.7,7.1,6.4,
            7.9,7.0,6.3,5.9,6.3,6.1,4.9,5.2,5.0,5.8,6.6,6.2,
            6.8,6.8,5.8,5.2,4.9,5.7,5.2,5.8,5.4,5.4,5.3,6.0,
            6.4,5.8,5.8,4.5,5.0,4.9,5.3,5.0,4.8,5.3,4.9,5.0,
            5.9,5.7,8.1,39.3,35.9,28.9],
    },
    {
      label: "Manufacturing",
      lineTension: false,
      fill: false,
      backgroundColor: "rgba(204,194,16,0.2)",
      borderColor: "rgba(204,194,16,1)",
      pointRadius: 0,
      pointBackgroundColor: "rgba(204,194,16,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(204,194,16,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [13.0,12.1,12.6,11.1,10.3,9.9,10.0,9.5,9.6,9.5,9.9,10.0,
            9.9,9.9,9.7,9.4,9.6,9.2,9.2,8.9,8.4,7.7,7.7,7.9,
            8.4,8.4,7.6,6.9,7.1,6.9,7.2,7.3,6.7,7.0,6.4,7.5,
            7.9,7.2,6.4,6.4,6.8,6.4,6.9,6.2,6.9,6.2,6.2,5.5,
            5.6,5.5,5.4,5.2,5.3,4.4,5.2,5.0,4.5,4.3,4.2,3.9,
            5.2,5.2,4.8,4.0,4.6,3.9,4.3,4.0,4.1,4.0,4.0,4.0,
            4.3,4.7,4.3,4.5,4.7,3.7,4.3,4.2,4.2,4.3,3.9,4.0,
            4.2,4.0,3.9,3.9,3.2,3.4,4.0,3.9,3.8,3.2,2.6,3.3,
            3.4,3.6,3.3,3.3,3.4,3.1,3.8,3.2,3.5,3.2,2.9,2.8,
            3.3,2.9,2.9,3.0,2.3,2.8,3.0,3.2,3.4,3.1,2.7,2.7,
            3.4,3.9,4.2,13.2,11.6,9.1],
    },
    {
      label: "Professional and Business Services",
      lineTension: false,
      fill: false,
      backgroundColor: "rgba(211,94,96,0.2)",
      borderColor: "rgba(211,94,96,1)",
      pointRadius: 0,
      pointBackgroundColor: "rgba(211,94,96,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(211,94,96,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [11.1,12.0,12.4,11.1,11.5,10.3,10.0,10.5,9.9,10.6,10.6,10.2,
            10.2,10.1,10.0,9.1,9.8,9.1,9.4,9.5,10.1,10.1,9.0,9.3,
            9.5,10.3,9.7,8.5,8.5,8.9,9.1,8.9,8.2,8.1,7.9,8.7,
            10.4,9.6,8.9,8.1,8.0,8.2,8.1,8.0,7.5,7.5,7.5,7.3,
            8.4,8.6,8.1,6.8,6.5,6.6,6.7,6.5,6.4,6.5,6.1,5.8,
            6.8,5.8,6.5,5.3,6.1,5.2,5.4,5.4,5.3,5.4,5.2,5.2,
            5.6,5.8,5.5,5.2,4.3,4.7,4.7,4.4,5.3,5.5,4.5,5.3,
            5.7,5.5,5.5,4.9,4.1,4.1,4.0,4.5,4.1,4.1,4.0,4.2,
            5.0,4.8,4.2,3.5,4.0,3.3,3.6,3.5,3.2,4.0,3.6,4.3,
            4.9,4.3,3.9,3.5,3.4,3.6,3.4,3.2,3.2,3.5,3.6,3.1,
            4.1,4.4,4.8,9.8,9.0,8.6],
    },
    {
      label: "Retail Trade",
      lineTension: false,
      fill: false,
      backgroundColor: "rgba(132,186,91,0.2)",
      borderColor: "rgba(132,186,91,1)",
      pointRadius: 0,
      pointBackgroundColor: "rgba(132,186,91,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(132,186,91,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [10.9,10.6,10.6,9.9,10.4,9.9,10.6,10.0,10.2,9.7,9.3,8.5,
            9.6,9.4,9.0,9.2,9.8,10.4,10.0,9.5,9.8,9.1,8.7,8.6,
            9.7,9.3,9.0,8.3,8.7,8.8,9.3,8.9,8.6,7.5,7.5,7.4,
            8.6,8.8,8.0,7.6,7.4,7.3,7.2,7.7,7.7,7.4,7.5,6.7,
            8.5,8.3,7.3,6.1,6.8,5.9,6.6,6.1,6.5,5.2,5.3,5.5,
            6.7,6.1,6.4,6.1,6.6,6.1,6.2,5.4,5.6,5.4,5.4,5.2,
            6.2,5.7,5.4,5.6,5.4,5.0,5.5,5.2,5.4,4.6,4.7,4.8,
            5.8,5.6,5.2,4.5,4.9,5.3,5.1,5.0,4.4,4.5,4.6,4.2,
            5.7,5.6,5.0,4.5,4.7,4.5,4.4,4.4,4.4,4.1,4.2,4.0,
            5.3,5.6,5.1,4.7,4.4,4.1,4.3,4.2,3.6,3.7,3.5,3.9,
            4.1,3.5,5.3,18.6,16.6,12.0],
    }
    ],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40,
          maxTicksLimit: 11
        },
        gridLines: {
          color: "rgba(0, 0, 0, 0.1)",
        }
      }],
    },
    legend: {
      display: true
    }
  }
});
