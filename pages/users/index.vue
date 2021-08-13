<template>
  <div class="pages__users">
    <page-title title="Manage Users" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import PageTitle from "~/components/Widgets/PageTitle.vue";

@Component({
  components: {
    PageTitle,
  },
})
export default class PageUsers extends Vue {}
</script>

<style lang="scss" scoped>
</style>