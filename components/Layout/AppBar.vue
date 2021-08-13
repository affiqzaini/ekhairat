<template>
  <v-app-bar class="components__appBar" color="#eeeeee" flat fixed app>
    <div class="appbar-content">
      <v-btn
        icon
        large
        color="primary"
        @click="toggleMiniVariant"
        v-show="$vuetify.breakpoint.smAndUp"
      >
        <v-icon
          v-text="miniVariant ? 'mdi-chevron-right' : 'mdi-chevron-left'"
        />
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon color="accent" class="mr-1">
        <v-icon>mdi-web</v-icon>
      </v-btn>

      <menu-logged-in />
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import MenuLoggedIn from "./MenuLoggedIn.vue";

@Component({
  components: {
    MenuLoggedIn,
  },
})
export default class AppBar extends Vue {
  get miniVariant() {
    return this.$store.state.navMiniVariant;
  }

  toggleMiniVariant() {
    this.$store.commit("setNavMiniVariant", !this.miniVariant);
  }
}
</script>

<style lang="scss" scoped>
.components__appBar {
  .appbar-content {
    display: flex;
    align-items: center;
    width: 100%;

    // @media screen and (max-width: 768px) {
    //   width: 100vw !important;
    // }
    // @media screen and (min-width: 769px) {
    //   width: 1200px;
    // }

    // @media screen and (min-width: 1264px) {
    //   width: 1600px;
    // }

    // @media screen and (min-width: 1904px) {
    //   width: 1800px;
    // }
  }
}
</style>
