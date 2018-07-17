// CommitChart.js
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['data', 'options'],
  mounted () {

    this.renderChart({
        labels: ["Apples", "Oranges", "Pears", "Bananas", "Plums"],
        datasets: [{
            label: "Average",
            type: "line",
            borderColor: "#feb380",
            backgroundColor: "#FFFFFF",
            data: [2.9,2.6,2.7,6.3,3.4],
            fill: false
          }, {
            label: "Jane",
            type: "bar",
            backgroundColor: "#73b4e9",
            data: [3,1.8,1,2.7,4],
          }, {
            label: "John",
            type: "bar",
            backgroundColor: "#454549",
            backgroundColorHover: "#3e95cd",
            data: [1.8,3,5,7.2,6]
          }, {
            label: "Joe",
            type: "bar",
            backgroundColor: "#83ec83",
            backgroundColorHover: "#3e95cd",
            data: [3.9,3,2.7,9,0]
          }
        ]
      },
      {
        scales: {
          yAxes: [{
            ticks: {
               min: 0,
               max: 10,
               step: 2.5,
            }
          }]
        }



      })
  }
}
