<template>
  <div class="pages__dashboard">
    <page-title title="Dashboard" />
    <v-row>
      <v-col cols="12" md="6">
        <quick-actions />
        <reports-overview />
        <table-death />
      </v-col>
      <v-col cols="12" md="6">
        <slider-charts />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import QuickActions from "~/components/Pages/Dashboard/QuickActions.vue";
import ReportsOverview from "~/components/Pages/Dashboard/ReportsOverview.vue";
import SliderCharts from "~/components/Pages/Dashboard/SliderCharts.vue";
import TableDeath from "~/components/Pages/Dashboard/TableDeath.vue";
import PageTitle from "~/components/Widgets/PageTitle.vue";

@Component({
  components: {
    PageTitle,
    QuickActions,
    TableDeath,
    ReportsOverview,
    SliderCharts,
  },
  head: {
    title: "Dashboard",
  },
})
export default class PageDashboard extends Vue {}
</script>

<style lang="scss" scoped>
</style>