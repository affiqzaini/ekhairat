<template>
  <v-card class="components__cardGamesItem cursor-pointer">
    <div class="bg-image" :style="`background-image: url(${item.image})`"></div>
    <v-icon x-large color="white">{{ item.mdi_icon }}</v-icon>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component({})
export default class CardGamesItem extends Vue {
  @Prop({ required: true }) item: any;
}
</script>

<style lang="scss" scoped>
.components__cardGamesItem {
  width: 150px;
  height: 150px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .bg-image {
    filter: brightness(60%);
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    border-radius: 25px;

    &:hover {
      filter: brightness(100%);
      transition-duration: 0.5s;
    }
  }
}
</style>