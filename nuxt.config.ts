import {
  auth,
  axios,
  build,
  buildModules,
  css,
  head,
  i18n,
  loading,
  modules,
  plugins,
  privateRuntimeConfig,
  proxy,
  publicRuntimeConfig,
  router,
  server,
  toast,
  vuetify
} from "./configs";

import { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  target: "static",
  ssr: false,
  auth,
  axios,
  build,
  buildModules,
  components: true,
  css,
  head,
  i18n,
  loading,
  modules,
  plugins,
  vuetify,
  privateRuntimeConfig,
  proxy,
  publicRuntimeConfig,
  router,
  server,
  toast
};

export default config;
