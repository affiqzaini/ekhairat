<template>
  <div class="components__tableDeath">
    <div class="center-all mx-3">
      <p class="text-h6 mb-0">Latest Death</p>
      <v-spacer />
      <v-btn color="primary" text x-small>View All</v-btn>
    </div>
    <div class="overflow-scroll-no-bar full-width">
      <v-data-table
        :headers="headers"
        :items="tableData"
        :items-per-page="4"
        hide-default-footer
        mobile-breakpoint="0"
        class="transparent"
      >
      </v-data-table>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class TableDeath extends Vue {
  headers: Array<Object> = [
    {
      text: "Date",
      align: "center",
      sortable: false,
      value: "date",
    },
    {
      text: "Name of Deceased Person",
      align: "left",
      sortable: false,
      value: "nameOfDeceased",
    },
    {
      text: "Name of Member",
      align: "left",
      sortable: false,
      value: "nameOfMember",
    },
  ];

  tableData: Array<Object> = [
    {
      nameOfDeceased: "Abu Bakar bin Ali",
      nameOfMember: "Abu Bakar bin Ali",
      date: "11/12/2021",
    },
    {
      nameOfDeceased: "Abu Bakar bin Ali",
      nameOfMember: "Abu Bakar bin Ali",
      date: "11/12/2021",
    },
    {
      nameOfDeceased: "Abu Bakar bin Ali",
      nameOfMember: "Abu Bakar bin Ali",
      date: "11/12/2021",
    },
    {
      nameOfDeceased: "Abu Bakar bin Ali",
      nameOfMember: "Abu Bakar bin Ali",
      date: "11/12/2021",
    },
  ];
}
</script>

<style lang="scss" scoped>
.components__tableDeath {
  border: 3px solid gainsboro;
  border-radius: 25px;
  padding: 12px;

  cursor: pointer;

  &:hover {
    transition: 0.5s;
    border: 3px solid #ff6b35;
  }
}
</style>