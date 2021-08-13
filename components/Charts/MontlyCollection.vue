<template>
  <div class="components__monthlyCollection">
    <bar-chart :chartData="chartData" :options="options" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import BarChart from "./templates/BarChart.vue";

@Component({
  components: {
    BarChart,
  },
})
export default class MonthlyCollection extends Vue {
  chartData: Object = {
    labels: ["Jan", "Feb", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Montly Collections (RM)",
        data: [12345, 10987, 11365, 14323, 10843, 13456],
        backgroundColor: [
          "rgba(0, 78, 137, 0.2)",
          "rgba(0, 78, 137, 0.2)",
          "rgba(0, 78, 137, 0.2)",
          "rgba(0, 78, 137, 0.2)",
          "rgba(0, 78, 137, 0.2)",
          "rgba(0, 78, 137, 0.2)",
        ],
        borderColor: [
          "rgba(0, 78, 137, 1)",
          "rgba(0, 78, 137, 1)",
          "rgba(0, 78, 137, 1)",
          "rgba(0, 78, 137, 1)",
          "rgba(0, 78, 137, 1)",
          "rgba(0, 78, 137, 1)",
        ],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };
  options: Object = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
    },
    aspectRatio: 1,
  };
}
</script>

<style lang="scss" scoped>
</style>