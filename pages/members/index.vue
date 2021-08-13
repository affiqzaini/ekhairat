<template>
  <div class="pages__members">
    <page-title title="Khairat Members" />
    <search-members />
    <table-members />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import SearchMembers from "~/components/Pages/Members/SearchMembers.vue";
import TableMembers from "~/components/Pages/Members/TableMembers.vue";
import PageTitle from "~/components/Widgets/PageTitle.vue";

@Component({
  head: {
    title: "Khairat Members",
  },
  components: {
    PageTitle,
    SearchMembers,
    TableMembers,
  },
})
export default class PageMembers extends Vue {}
</script>

<style lang="scss" scoped>
</style>