<template>
  <v-expansion-panels flat>
    <v-expansion-panel class="components__quickActions">
      <v-expansion-panel-header class="text-h6 pa-0">
        Quick Access
      </v-expansion-panel-header>

      <v-expansion-panel-content>
        <v-list class="full-width transparent">
          <v-list-item-group color="accent">
            <v-list-item
              class="px-0"
              v-for="(item, index) in quickActions"
              :key="index"
              link
              :to="item.to"
            >
              <v-list-item-icon>
                <v-icon color="accent" v-text="item.icon" />
              </v-list-item-icon>
              <v-list-item-content>{{ item.title }}</v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class QuickActions extends Vue {
  showMenu: boolean = false;
  quickActions: Array<Object> = [
    {
      title: "Add New Member",
      to: this.localePath({ name: "members-new" }),
      icon: "mdi-plus",
    },
    {
      title: "File New Claim",
      to: null,
      icon: "mdi-text-box-plus",
    },
    {
      title: "Add New Payment",
      to: null,
      icon: "mdi-credit-card-outline",
    },
    {
      title: "Update Profile",
      to: null,
      icon: "mdi-account",
    },
  ];
}
</script>

<style lang="scss" scoped>
.components__quickActions {
  border: 3px solid gainsboro;
  background-color: transparent !important;
  border-radius: 35px !important;
  width: 100%;
  padding: 0 16px;
  margin-bottom: 12px;

  &:hover {
    transition: 0.5s;
    background-color: whitesmoke;
    border: 3px solid #ff6b35;
  }
}
</style>