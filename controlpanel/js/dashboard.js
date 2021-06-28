/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

/* global Chart:false */

$(function () {
  'use strict'

  /* Chart.js Charts */
  // 訪問量
  var visitorChartCanvas = document.getElementById('visitor-chart-canvas').getContext('2d')
  // $('#visitor-chart').get(0).getContext('2d');

  var visitorChartData = {
    labels: ['四月 24', '四月 25', '四月 26', '四月 27', '四月 28', '四月 29', '四月 30', '五月 1', '五月 2', '五月 3', '五月 4', '五月 5', '五月 6', '五月 7'],
    datasets: [{
        label: '訪問量',
        backgroundColor: 'rgba(60,141,188,0.9)',
        borderColor: 'rgba(60,141,188,0.8)',
        pointRadius: 3,
        pointColor: '#3b8bba',
        pointStrokeColor: 'rgba(60,141,188,1)',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(60,141,188,1)',
        data: [9583, 8583, 7583, 8583, 7583, 9583, 6583, 9583, 8583, 7583, 8583, 7583, 9583, 6583]
      },
      {
        label: '瀏覽量',
        backgroundColor: 'rgba(210, 214, 222, 1)',
        borderColor: 'rgba(210, 214, 222, 1)',
        pointRadius: 3,
        pointColor: 'rgba(210, 214, 222, 1)',
        pointStrokeColor: '#c1c7d1',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [69083, 59083, 39083, 59083, 49083, 69083, 49083, 69083, 59083, 39083, 59083, 49083, 69083, 49083]
      }
    ]
  }

  var visitorChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  }

  // This will get the first returned node in the jQuery collection.
  // eslint-disable-next-line no-unused-vars
  var visitorChart = new Chart(visitorChartCanvas, { // lgtm[js/unused-local-variable]
    type: 'line',
    data: visitorChartData,
    options: visitorChartOptions
  })


  // 相片上傳
  var uploadPhotoChartCanvas = document.getElementById('upload-photo-chart-canvas').getContext('2d')
  // $('#visitor-chart').get(0).getContext('2d');

  var uploadPhotoChartData = {
    labels: ['五月 1', '五月 2', '五月 3', '五月 4', '五月 5', '五月 6', '五月 7', '五月 8', '五月 9', '五月 10', '五月 11', '五月 12', '五月 13', '五月 14'],
    datasets: [{
      label: '新增相片',
      backgroundColor: 'rgba(60,141,188,0.9)',
      borderColor: 'rgba(60,141,188,0.8)',
      pointRadius: 3,
      pointColor: '#3b8bba',
      pointStrokeColor: 'rgba(60,141,188,1)',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(60,141,188,1)',
      data: [3313, 6548, 48870, 21273, 7638, 13821, 5757, 6313, 2548, 38870, 21273, 3638, 13821, 5757]
    }]
  }

  var uploadPhotoChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  }

  // This will get the first returned node in the jQuery collection.
  // eslint-disable-next-line no-unused-vars
  var uploadPhotoChart = new Chart(uploadPhotoChartCanvas, { // lgtm[js/unused-local-variable]
    type: 'line',
    data: uploadPhotoChartData,
    options: uploadPhotoChartOptions
  })


  // 目前在線人數
  // Get context with jQuery - using jQuery's .get() method.
  var pieChartCanvas = $('#pieChart').get(0).getContext('2d')
  var pieData = {
    labels: [
      '會員',
      '非會員'
    ],
    datasets: [
      {
        data: [3, 78],
        backgroundColor: ['#3b8bba', '#c1c7d1']
      }
    ]
  }
  var pieOptions = {
    legend: {
      display: false
    }
  }
  // Create pie or douhnut chart
  // You can switch between pie and douhnut using the method below.
  // eslint-disable-next-line no-unused-vars
  var pieChart = new Chart(pieChartCanvas, {
    type: 'doughnut',
    data: pieData,
    options: pieOptions
  })

  
  // 裝置訪問量
  var ticksStyle = {
    fontColor: '#495057',
    fontStyle: 'bold'
  }

  var mode = 'index'
  var intersect = true

  var $deviceChart = $('#device-chart')
  // eslint-disable-next-line no-unused-vars
  var salesChart = new Chart($deviceChart, {
    type: 'bar',
    data: {
      labels: ['五月 1', '五月 2', '五月 3', '五月 4', '五月 5', '五月 6', '五月 7'],
      datasets: [
        {
          backgroundColor: '#3b8bba',
          borderColor: '#3b8bba',
          data: [2088, 3775, 4016, 2670, 2406, 2236, 2286]
        },
        {
          backgroundColor: '#c1c7d1',
          borderColor: '#c1c7d1',
          data: [7147, 15015, 15448, 9580, 7763, 7347, 8036]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        mode: mode,
        intersect: intersect
      },
      hover: {
        mode: mode,
        intersect: intersect
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          // display: false,
          gridLines: {
            display: true,
            lineWidth: '4px',
            color: 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks: $.extend({
            beginAtZero: true,

            // Include a dollar sign in the ticks
            callback: function (value) {
              if (value >= 1000) {
                value /= 1000
                value += 'k'
              }

              return '$' + value
            }
          }, ticksStyle)
        }],
        xAxes: [{
          display: true,
          gridLines: {
            display: false
          },
          ticks: ticksStyle
        }]
      }
    }
  })


})
