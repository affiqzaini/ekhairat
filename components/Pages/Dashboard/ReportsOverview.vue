<template>
  <div class="components__reportsOverview minimal-scroller mb-3">
    <div class="d-inline-flex">
      <v-card
        v-for="(item, index) in mainOverview"
        :key="index"
        outlined
        width="250"
        height="120"
        class="card-overview mr-3 mb-2"
        @click="$router.push(item.to)"
      >
        <v-card-title class="text-body-1">
          {{ item.title }}
        </v-card-title>

        <v-card-text class="text-h4 font-weight-bold text-right">
          {{ item.body }}
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class ReportsOverview extends Vue {
  mainOverview: Array<Object> = [
    {
      title: "Total Active Members",
      body: "10,274",
      to: this.localePath({ name: "members" }),
    },
    {
      title: "New Registrations (2021)",
      body: "1,526",
      to: this.localePath({ name: "members" }),
    },
    {
      title: "Annual Collection",
      body: "RM 56,523",
      to: null,
    },
    {
      title: "Amount Balance",
      body: "RM 143,211",
      to: null,
    },
  ];
}
</script>

<style lang="scss" scoped>
.components__reportsOverview {
  overflow-x: auto;
  width: 100%;
  white-space: nowrap;

  .card-overview {
    background-color: transparent;
    border-radius: 25px;
    border: 3px solid #1a659e;

    &:hover {
      transition: 0.5s;
      border: 3px solid #ff6b35;
      background-color: whitesmoke;
      cursor: pointer;
    }
  }
}
</style>