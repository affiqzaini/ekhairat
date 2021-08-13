<template>
  <div
    class="components__cardFeaturedVenue cursor-pointer"
    @click="
      $router.push(localePath({ name: 'venue-id', params: { id: item.id } }))
    "
  >
    <v-img
      :src="item.mainImage"
      width="100%"
      height="auto"
      :aspect-ratio="1"
      cover
      class="main-img rounded-xl mb-2"
    />
    <p class="item-name mb-0">{{ item.name }}</p>
    <v-rating
      readonly
      :value="item.rating"
      background-color="grey lighten-1"
      color="yellow accent-4"
      dense
      half-increments
      hover
      size="18"
    ></v-rating>
    <p class="item-name mb-0 text-subtitle-2">
      {{ `${item.location.city}, ${item.location.state}` }}
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component({})
export default class CardFeaturedVenue extends Vue {
  @Prop({ required: true, type: Object }) item: any;
}
</script>

<style lang="scss" scoped>
.components__cardFeaturedVenue {
  @media screen and (max-width: 480px) {
    width: 100px;
    margin-right: 12px;
  }
  @media screen and (min-width: 481px) {
    width: 200px;
  }
  .item-name {
    width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .main-img:hover {
    opacity: 1;
    -webkit-animation: flash 1.5s;
    animation: flash 1.5s;
  }
}
@-webkit-keyframes flash {
  0% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
@keyframes flash {
  0% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
</style>