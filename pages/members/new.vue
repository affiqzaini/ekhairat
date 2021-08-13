<template>
  <div class="pages__newMember">
    <page-title title="Add New Member" />
    <form-new-member />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import FormNewMember from "~/components/Pages/Members/FormNewMember.vue";
import PageTitle from "~/components/Widgets/PageTitle.vue";

@Component({
  head: {
    title: "Add New Member",
  },
  components: {
    PageTitle,
    FormNewMember,
  },
})
export default class PageNewMember extends Vue {}
</script>

<style lang="scss" scoped>
</style>