<template>
  <v-navigation-drawer
    class="components__navDrawer"
    mobile-breakpoint="0"
    floating
    app
    fixed
    :mini-variant="miniVariant"
    mini-variant-width="70"
    color="primary"
  >
    <div class="center-all flex-column mt-5" v-if="!miniVariant">
      <v-img
        src="/sampleImages/sample-logo.png"
        width="100"
        height="100"
        contain
        class="mb-3"
      />

      <p class="text-h5 mb-0 white--text">E-Khairat</p>
      <p class="text-caption white--text">Masjid Al-Azim, Pandan Indah</p>
    </div>
    <v-list nav class="pr-0">
      <v-list-item
        v-for="(item, index) in topMenu"
        :key="index"
        link
        class="white--text"
        :class="miniVariant ? null : 'pl-5'"
        :to="item.to"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon" />
        </v-list-item-icon>
        <v-list-item-content>{{ item.title }}</v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class NavDrawer extends Vue {
  topMenu: Array<Object> = [
    {
      title: "Dashboard",
      to: this.localePath({ name: "dashboard" }),
      icon: "mdi-view-dashboard",
    },
    {
      title: "Khairat Members",
      to: this.localePath({ name: "members" }),
      icon: "mdi-account-group",
    },
    { title: "Announcements", to: null, icon: "mdi-bullhorn" },
    { title: "Reports", to: null, icon: "mdi-poll" },
    { title: "Settings", to: null, icon: "mdi-cog" },
    { title: "Help Center", to: null, icon: "mdi-help" },
  ];

  get miniVariant() {
    return this.$store.state.navMiniVariant;
  }
}
</script>

<style lang="scss" scoped>
.components__navDrawer {
  .v-list--nav .v-list-item,
  .v-list--nav .v-list-item:before {
    border-radius: 30px 0 0 30px;
  }
}
</style>