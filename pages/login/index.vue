<template>
  <div class="pages__login">
    <v-card class="header rounded-xl" width="400" max-width="90vw">
      <v-img
        src="/sampleImages/sample-logo.png"
        width="100"
        height="100"
        contain
      />
      <p class="text-h5 mb-0">E-Khairat</p>
      <p class="text-subtitle-1 mb-10">Masjid Al-Azim, Pandan Indah</p>

      <form-login />
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import FormLogin from "~/components/Pages/Login/FormLogin.vue";

@Component({
  head: {
    title: "Dashboard",
  },
  layout: "Login",
  components: {
    FormLogin,
  },
})
export default class PageLogin extends Vue {}
</script>

<style lang="scss" scoped>
.pages__login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .header {
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    background-color: rgba($color: #eeeeee, $alpha: 0.9);
  }
}
</style>