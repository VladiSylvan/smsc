// CommitChart.js
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    // Overwriting base render method with actual data.


    this.renderChart({
      labels: ['1940', '1950', '1960', '1970', '1980', '1990', '2000', '2010'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#f87979',
          data: [0, 10512, 12121, 39151, 10151, 40451, 39154, 80457],
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
          backgroundColor: '#1e90ff',
          data: [0,5464,32415,12564,15485,18748,15655,48645]
        }
      ]
    })
  }
}
