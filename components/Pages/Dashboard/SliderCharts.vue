<template>
  <div class="components__sliderCharts">
    <component :is="currentChart" />

    <div class="center-all">
      <v-btn
        v-for="(item, index) in chartArray"
        :key="index"
        icon
        :color="index == slide ? 'primary' : null"
        @click="slide = index"
      >
        <v-icon x-large>mdi-circle-small</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import MonthlyCollection from "~/components/Charts/MontlyCollection.vue";

@Component({
  components: {
    MonthlyCollection,
  },
})
export default class SliderCharts extends Vue {
  slide: number = 0;

  chartArray: Array<any> = [
    {
      value: 0,
      component: "monthly-collection",
    },
    {
      value: 1,
      component: "monthly-collection",
    },
    {
      value: 2,
      component: "monthly-collection",
    },
  ];

  get currentChart() {
    return this.chartArray[this.slide].component;
  }
}
</script>

<style lang="scss" scoped>
.components__sliderCharts {
  border: 3px solid gainsboro;
  border-radius: 30px;
  padding: 12px 12px 0 12px;
}
</style>