// BarChart.js
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['data', 'options'],
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['1AM','2AM','3AM','4AM','5AM','6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM','9PM','10PM','11PM','12AM'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#4a71ee',
          data: [40, 20, 12, 39, 10, 40, 39, 32, 40, 20, 12, 11, 40, 20, 12, 39, 10, 40, 39, 32, 40, 20, 12, 11]
        }
      ]
    }, {
         legend: { //hides the legend
            display: false,
         }
      })
  }
}
