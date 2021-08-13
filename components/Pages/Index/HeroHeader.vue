<template>
  <v-carousel
    class="components__heroHeader rounded-xl"
    show-arrows-on-hover
    hide-delimiters
  >
    <!-- <template v-slot:default>
      <search-bar />
    </template> -->
    <v-carousel-item
      v-for="(item, index) in featuredVenue"
      :key="index"
      :src="item.imgSrc"
      :to="localePath({ name: 'venue-id', params: { id: index } })"
    >
      <div class="center-all flex-column full-size white--text">
        <h1>{{ item.name }}</h1>
        <h4>{{ item.city }}</h4>
        <div class="center-all">
          <span class="grey--text text--lighten-2 text-caption mr-2">
            ({{ item.star }})
          </span>
          <v-rating
            readonly
            :value="item.star"
            background-color="white"
            color="yellow accent-4"
            dense
            half-increments
            hover
            size="18"
          ></v-rating>
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import SearchBar from "./SearchBar.vue";

@Component({
  components: {
    SearchBar,
  },
})
export default class HeroHeader extends Vue {
  get featuredVenue() {
    return [
      {
        imgSrc: "/sampleImages/sample-header.jpg",
        name: "Rod Laver Arena",
        city: "Melbourne",
        star: 5,
      },
      {
        imgSrc: "/sampleImages/sample-header.jpg",
        name: "Axiata Arena",
        city: "Bukit Jalil",
        star: 4.2,
      },
    ];
  }
}
</script>

<style lang="scss" scoped>
.components__heroHeader {
  v-carousel-item {
    width: 100vw !important;
  }
}
</style>