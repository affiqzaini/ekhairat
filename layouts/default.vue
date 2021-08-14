<template>
  <v-app>
    <nav-drawer v-if="$vuetify.breakpoint.smAndUp" />
    <app-bar />
    <v-main>
      <v-container class="layout__default">
        <Nuxt />
      </v-container>
    </v-main>
    <mobile-nav-bar v-if="$vuetify.breakpoint.xsOnly" />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import MobileAppBar from "~/components/Layout/MobileAppBar.vue";
import MobileNavBar from "~/components/Layout/MobileNavBar.vue";
import NavDrawer from "~/components/Layout/NavDrawer.vue";
import AppBar from "../components/Layout/AppBar.vue";

@Component({
  components: {
    AppBar,
    MobileAppBar,
    NavDrawer,
    MobileNavBar,
  },
})
export default class LayoutDefault extends Vue {}
</script>

<style lang="scss" scoped>
.layout__default {
  @media (max-width: 600px) {
    max-width: 100%;
    margin: 0 auto;
  }
  //small
  @media (max-width: 960px) {
    max-width: 100%;
    margin: 0 auto;
  }
  //medium
  @media (max-width: 1264px) {
    max-width: 1000px;
    margin: 0 auto;
  }
  //large and x-large
  @media (min-width: 1265px) {
    max-width: 1200px;
    margin: 0 auto;
  }
}
</style>
