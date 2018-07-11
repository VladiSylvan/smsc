// CommitChart.js
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['data', 'options'],
  mounted () {

    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

    this.gradient.addColorStop(0, 'rgba(0, 0,0, 0.7)')
    this.gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.4)');
    this.gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

    this.gradient2.addColorStop(0, 'rgba(50, 146, 227, 1)')
    this.gradient2.addColorStop(0.5, 'rgba(50, 146, 227, 0.4)');
    this.gradient2.addColorStop(1, 'rgba(50, 146, 227, 0.1)');

    this.renderChart({
      labels: ['1940', '1950', '1960', '1970', '1980', '1990', '2000', '2010'],
      datasets: [
        {
          label: 'GitHub Commits',
          borderColor: '#000000',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: 'white',
          backgroundColor: this.gradient,
          data: [0, 100, 2000, 12000, 30000, 35000, 21000, 13000]
        },
        {
          label: 'GitHub Commits',
          borderColor: '#05CBE1',
          pointBackgroundColor: 'white',
          pointBorderColor: 'white',
          borderWidth: 1,
          backgroundColor: this.gradient2,
          data: [0,100,20000,37000,25000,20000,11000,5000],
        }
      ]
    }, {
         legend: { //hides the legend
            display: false,
         },
         elements: {
            point: {
                radius: 0
            }
         },
         scales: {
           xAxes: [{
             gridLines: {
                 display:false
             },
             ticks: {
                stepSize:10,
                min: 1940,
                max: 2010,
             }
           }],
           yAxes: [{
             ticks: {
                beginAtZero: true,
                steps:6,
                stepSize: 10000,
                max: 50000,
                callback: function(value, index, values) {
                  return value / 1000 + 'k';
                }
             }
           }],
         }
      })
  }
}
