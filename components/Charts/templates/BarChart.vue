<script lang="ts">
import { Vue, Component, mixins, Prop } from "nuxt-property-decorator";
import { Bar } from "vue-chartjs";

@Component({
  extends: Bar,
})
export default class BarChart extends mixins(Bar) {
  @Prop({ required: true, type: Object }) chartData!: Object;
  @Prop({ required: true, type: Object }) options!: Object;

  mounted() {
    this.renderChart(this.chartData, this.options);
  }
}
</script>

<style lang="scss" scoped>
</style>