// CommitChart.js
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['data', 'options'],
  mounted () {

    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient3 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient4 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

    this.gradient.addColorStop(0, 'rgba(113, 113, 117, 1)')
    this.gradient.addColorStop(0.5, 'rgba(113, 113, 117, 1)');
    this.gradient.addColorStop(1, 'rgba(113, 113, 117, 1)');

    this.gradient2.addColorStop(0, 'rgba(151, 198, 238, 1)')
    this.gradient2.addColorStop(0.5, 'rgba(151, 198, 238, 1)');
    this.gradient2.addColorStop(1, 'rgba(151, 198, 238, 1)');

    this.gradient3.addColorStop(0, 'rgba(163, 240, 161, 1)')
    this.gradient3.addColorStop(0.5, 'rgba(163, 240, 161, 1)');
    this.gradient3.addColorStop(1, 'rgba(163, 240, 161, 1)');

    this.gradient4.addColorStop(0, 'rgba(254, 185, 137, 1)')
    this.gradient4.addColorStop(0.5, 'rgba(254, 185, 137, 1)');
    this.gradient4.addColorStop(1, 'rgba(254, 185, 137, 1)');

    this.renderChart({
      labels: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
      datasets: [
        {
          label: 'America',
          borderColor: 'white',
          pointBackgroundColor: 'white',
          pointBorderColor: '#fda060',
          pointBackgroundColor: '#fda060',
          borderWidth: 2,
          pointStyle: 'triangle',
          backgroundColor: this.gradient4,
          data: [3, 4, 5, 11, 16, 16, 16],
        },
        {
          label: 'Europe',
          borderColor: 'white',
          pointBackgroundColor: 'white',
          pointBorderColor: '#83ec83',
          pointBackgroundColor: '#83ec83',
          borderWidth: 2,
          pointStyle: 'rect',
          backgroundColor: this.gradient3,
          data: [24, 25, 26, 34, 35, 26, 23],
        },
        {
          label: 'Africa',
          borderColor: 'white',
          pointBackgroundColor: 'blue',
          borderWidth: 1,
          pointBorderColor: 'white',
          pointBackgroundColor: '#444448',
          backgroundColor: this.gradient,
          data: [37, 36, 36, 42, 45, 40, 41]
        },
        {
          label: 'Asia',
          borderColor: 'white',
          pointBackgroundColor: 'white',
          pointBorderColor: 'white',
          pointBackgroundColor: '#73b4e9',
          borderWidth: 1,
          backgroundColor: this.gradient2,
          data: [100, 100, 100, 100, 100, 100, 100],
        }
      ]
    }, {
         legend: { //hides the legend
            display: false,
         },
         scales: {
           xAxes: [{
             gridLines: {
                 display:false
             },
             ticks: {
             }
           }],
           yAxes: [{
             ticks: {
                beginAtZero: true,
                stepSize: 25,
                max: 100,
             }
           }],
         }
      })
  }
}
