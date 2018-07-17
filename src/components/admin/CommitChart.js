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
      labels: ['1940','1942','1944','1946','1948','1950','1952','1954','1956','1958',
               '1960','1962','1964','1966','1968','1970','1972','1974','1976','1978',
               '1980','1982','1984','1986','1988','1990','1992','1994','1996','1998',
               '2000','2002','2004','2006','2008','2010'],
      datasets: [
        {
          label: 'GitHub Commits',
          borderColor: '#000000',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          lineTension: 0,
          pointBorderColor: 'white',
          backgroundColor: this.gradient,
          data: [0,0,0,0,0,0,200,200,300,900,
                 2000,3800,5400,7400,9400,11500,14000,18000,22000,25000,
                   30000,33000,36200,39000,45000,38000,33000,30000,25000,22500,
                   21000,19500,18500,18500,16000,13000]
        },
        {
          label: 'GitHub Commits',
          borderColor: '#05CBE1',
          pointBackgroundColor: 'white',
          pointBorderColor: 'white',
          borderWidth: 1,
          backgroundColor: this.gradient2,
          data: [0,0,0,100,100,300,1000,2000,4000,8000,
                   20500,29000,32000,33000,29500,27000,28000,28500,26000,22500,
                   24000,24000,24500,24500,25000,22000,14000,12500,12000,11000,
                   10850,10700,10500,10200,9900,5000],
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
                autoSkip: false,
                minRotation: 0,
                maxRotation: 0,
                callback: function(tickValue, index, ticks) {
                if(!(index % parseInt(ticks.length / 7))) {
                  return tickValue
                }
                }
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
