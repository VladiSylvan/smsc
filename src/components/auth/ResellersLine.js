// CommitChart.js
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['data', 'options'],
  mounted () {

    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

    this.gradient.addColorStop(0, 'rgba(227, 77, 154, 0.8)')
    this.gradient.addColorStop(0.5, 'rgba(227, 77, 154, 0.5)');
    this.gradient.addColorStop(1, 'rgba(227, 77, 154, 0.2)');

    this.renderChart({
      labels: ['', '', '', '', '', ''],
      datasets: [
        {
          label: 'Resellers',
          borderColor: '#aa35cb',
          pointBackgroundColor: 'white',
          borderWidth: 1.5,
          pointRadius: 5,
          pointBorderColor: 'white',
          lineTension: 0,
          backgroundColor: this.gradient,
          data: [0,15000,11000,36000,33000,70000]
        }
      ]
    }, {
         legend: { //hides the legend
            display: false,
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
