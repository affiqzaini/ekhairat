<template>
  <div class="components__tableMembers">
    <v-data-table
      mobile-breakpoint="0"
      :items="membersData"
      :headers="headers"
      hide-default-footer
    >
      <template #body>
        <tbody>
          <row-member
            v-for="(item, index) in membersData"
            :key="index"
            :item="item"
          />
        </tbody>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import members from "static/sampleData/members.json";
import RowMember from "./RowMember.vue";

@Component({
  components: {
    RowMember,
  },
})
export default class TableMembers extends Vue {
  headers: Array<Object> = [
    { text: "No", sortable: false, align: "center" },
    { text: "Name", value: "name", align: "center", sortable: false },
    { text: "IC Number", value: "icNo", align: "center", sortable: false },
    { text: "Actions", align: "center", sortable: false },
  ];
  get membersData() {
    return members.members;
  }
}
</script>

<style lang="scss" scoped>
</style>