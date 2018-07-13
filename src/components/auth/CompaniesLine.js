// CommitChart.js
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['data', 'options'],
  mounted () {

    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

    this.gradient.addColorStop(0, 'rgba(55, 242, 198, 0.8)')
    this.gradient.addColorStop(0.5, 'rgba(55, 242, 198, 0.5)');
    this.gradient.addColorStop(1, 'rgba(55, 242, 198, 0.2)');

    this.renderChart({
      labels: ['', '', '', '', '', ''],
      datasets: [
        {
          label: 'Companies',
          borderColor: '#00db9f',
          pointBackgroundColor: 'white',
          borderWidth: 1.5,
          pointRadius: 5,
          pointBorderColor: '#00e1ab',
          lineTension: 0,
          backgroundColor: this.gradient,
          data: [0,235,172,562,515,1094]
        }
      ]
    }, {
         legend: { //hides the legend
            display: false,
         },
         tooltips: {
           backgroundColor: '#FFFFFF',
           bodyFontSize: 14,
           xPadding: 20,
           yPadding: 20,
            callbacks: {
                labelColor: function(tooltipItem, chart) {
                    return {
                        borderColor: '#00db9f',
                        backgroundColor: '#00db9f',
                    }
                },
                labelTextColor:function(tooltipItem, chart){
                    return '#55616E';
                }
            }
        },
         scales: {
           xAxes: [{
             ticks: {
               display: false
             }
           }],
           yAxes: [{
             gridLines: {
                 display:false
             },
             ticks: {
               display:false
             }
           }],
         }
      })
  }
}
