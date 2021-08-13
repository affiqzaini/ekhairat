<template>
  <v-app class="layout__login">
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class LayoutLogin extends Vue {}
</script>

<style lang="scss" scoped>
.layout__login {
  background: #062f4f;
  background: -webkit-linear-gradient(to bottom, #004e89, #062f4f);
  background: linear-gradient(to bottom, #004e89, #062f4f);
}
</style>