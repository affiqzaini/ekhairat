<template>
  <v-app-bar class="components__mobileAppBar" dense flat fixed app>
    <div class="center-between full-width">
      <v-avatar size="30">
        <v-img :src="userProfile.avatar" contain />
      </v-avatar>

      <span>LOGO</span>

      <div>
        <v-btn icon color="accent" small>
          <v-icon color="accent">mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon color="accent" small>
          <v-icon color="accent">mdi-cog</v-icon>
        </v-btn>
      </div>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class MobileAppBar extends Vue {
  get userProfile() {
    return this.$store.state.user;
  }
}
</script>

<style lang="scss" scoped>
.components__mobileAppBar {
  background-color: white;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: #b82601;
}
</style>