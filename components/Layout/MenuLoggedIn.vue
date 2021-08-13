<template>
  <div class="components__menuLoggedIn">
    <v-menu
      rounded="xl"
      left
      min-width="200"
      :nudge-bottom="10"
      offset-y
      class="list-menu"
    >
      <template v-slot:activator="{ on }">
        <div class="menu-button" v-on="on">
          <v-icon class="mr-1">mdi-menu</v-icon>
          <v-avatar size="30">
            <v-img :src="userProfile.avatar" />
          </v-avatar>
        </div>
      </template>

      <v-list>
        <div class="d-flex align-center mx-3">
          <v-avatar size="50" class="mb-2 mr-2">
            <v-img :src="userProfile.avatar" />
          </v-avatar>
          <div>
            <p class="text-subtitle-2 mb-0">{{ userProfile.fullname }}</p>
            <p class="text-caption mb-1">{{ userProfile.position }}</p>
          </div>
        </div>
        <v-divider class="mx-3"></v-divider>
        <v-list-item link> Edit Profile </v-list-item>
        <v-list-item link :to="localePath({ name: 'login' })">
          Log Out
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class MenuLoggedIn extends Vue {
  get userProfile() {
    return this.$store.state.user;
  }
}
</script>

<style lang="scss" scoped>
.components__menuLoggedIn {
  .menu-button {
    background-color: gainsboro;
    border-radius: 30px;
    width: 70px;
    height: 40px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      transition: 0.5s;
      border: 1px solid #ff6b35;
      background-color: white;
    }
  }
}
</style>