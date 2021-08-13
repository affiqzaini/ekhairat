<template>
  <div class="components__searchMembers">
    <v-text-field
      dense
      append-icon="mdi-magnify"
      label="Search by name..."
      rounded
      filled
    ></v-text-field>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class SearchMembers extends Vue {}
</script>

<style lang="scss" scoped>
</style>