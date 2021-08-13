<template>
  <div class="components__formLogin">
    <v-text-field
      v-model="formModel.email"
      filled
      label="Email"
      rounded
      hide-details="auto"
      class="mb-2"
      clearable
    />
    <v-text-field
      v-model="formModel.password"
      type="password"
      filled
      clearable
      label="Password"
      rounded
      hide-details="auto"
      class="mb-1"
    />

    <p class="btn-link">Forgot Password?</p>

    <v-btn
      color="primary lighten-1"
      rounded
      block
      class="my-6"
      :loading="loading"
      @click="onLogin"
    >
      Login
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { debounce } from "lodash";

@Component({})
export default class FormLogin extends Vue {
  loading: boolean = false;
  formModel: Object = {
    email: null,
    password: null,
  };

  onLogin() {
    this.loading = true;
    setTimeout(() => {
      this.$router.push(this.localePath({ name: "dashboard" }));
    }, 1000);
  }
}
</script>

<style lang="scss" scoped>
.components__formLogin {
  .btn-link {
    text-align: right;
    font-size: small;

    &:hover {
      cursor: pointer;
      color: #ff6b35;
      text-decoration: underline;
    }
  }
}
</style>