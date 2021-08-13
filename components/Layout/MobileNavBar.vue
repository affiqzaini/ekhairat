<template>
  <v-bottom-navigation app fixed class="rounded-t-xl" color="primary">
    <v-btn x-small :to="localePath({ name: 'dashboard' })">
      <v-icon>mdi-view-dashboard</v-icon>
    </v-btn>
    <v-btn x-small :to="localePath({ name: 'members' })">
      <v-icon>mdi-account-group</v-icon>
    </v-btn>
    <v-btn>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-btn>
      <v-icon>mdi-poll</v-icon>
    </v-btn>
    <v-btn>
      <v-icon>mdi-dots-horizontal</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class MobileNavBar extends Vue {
  // value: number = 1;
  // active: boolean = true;
}
</script>

<style lang="scss" scoped>
</style>