import { NuxtConfig } from "@nuxt/types";

export const publicRuntimeConfig: NuxtConfig["publicRuntimeConfig"] = {
  appUrl: process.env.APP_URL,
  trtc: {
    appId: process.env.TRTC_APP_ID
  },
  pusher: {
    key: process.env.PUSHER_APP_KEY,
    cluster: process.env.PUSHER_APP_CLUSTER,
    authEndpoint: process.env.PUSHER_APP_AUTH
  },
  cos: {
    appId: process.env.COS_APP_ID
  }
};
