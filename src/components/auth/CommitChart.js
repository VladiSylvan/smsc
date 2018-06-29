// CommitChart.js
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
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
          data: [0, 100, 2000, 12000, 30000, 35000, 21000, 13000],
          options: {
                  legend: {
                      display: false,
                      labels: {
                          fontSize: 6
                      }
                  }
          }
        },
        {
          label: 'GitHub Commits',
          borderColor: '#05CBE1',
          pointBackgroundColor: 'white',
          pointBorderColor: 'white',
          borderWidth: 1,
          backgroundColor: this.gradient2,
          data: [0,100,20000,37000,25000,20000,11000,5000]
        }
      ]
    })
  }
}
