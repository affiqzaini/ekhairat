<template>
  <div class="components__pageTitle">
    <p class="text-h5 text-md-h4 info--text">{{ title }}</p>
    <!-- <h1 class="info--text">{{ title }}</h1> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component({})
export default class PageTitle extends Vue {
  @Prop({ required: true, type: String }) title!: String;
}
</script>

<style lang="scss" scoped>
</style>