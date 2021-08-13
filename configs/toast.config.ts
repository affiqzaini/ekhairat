import { ToastOptions } from "vue-toasted";

export const toast: ToastOptions = {
  containerClass: "components__toasted",
  position: "bottom-center",
  duration: 3000,
  iconPack: "mdi",
  singleton: true
};
