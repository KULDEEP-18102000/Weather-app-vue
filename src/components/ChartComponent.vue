<template>
  <div>
    <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  

  computed: {
    ...mapGetters(['chartData'])
  },
  methods: {
    ...mapActions(['fetchChartData'])
  },
  async mounted() {
    await this.fetchChartData()
  },
  data() {
    return {
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chart-container {
  position: relative;
  width: 80%;
  margin: auto;
}
</style>
