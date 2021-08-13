<template>
  <div class="components__listFeaturedVenue">
    <div class="full-width d-flex">
      <h3 class="mb-4">Featured Venues</h3>
      <v-spacer></v-spacer>
      <p class="text-caption secondary--text cursor-pointer">View All</p>
    </div>
    <v-data-iterator
      :items="sampleFeaturedVenue"
      item-key="name"
      hide-default-footer
      :items-per-page="5"
    >
      <template v-slot:default="{ items }">
        <div class="list-venue">
          <card-featured-venue
            :item="item"
            v-for="(item, index) in items"
            :key="index"
          />
        </div>
      </template>
    </v-data-iterator>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import CardFeaturedVenue from "./CardFeaturedVenue.vue";

interface Venue {
  id: number;
  name: string;
  slug: string;
  mainImage: string;
  rating: number;
  court_types: Array<string>;
  location: { city: string; state: string; country: string };
}

@Component({
  components: {
    CardFeaturedVenue,
  },
})
export default class ListFeaturedVenue extends Vue {
  sampleFeaturedVenue: Array<Venue> = [
    {
      id: 1,
      name: "Sportsplanet Ampang",
      slug: "sportsplanet ampang",
      mainImage: "https://source.unsplash.com/VvQSzMJ_h0U/250x250",
      rating: 4,
      court_types: ["Futsal", "Badminton", "Dance"],
      location: {
        city: "Ampang",
        state: "Selangor",
        country: "Malaysia",
      },
    },
    {
      id: 2,
      name: "Galacticos de Futsal",
      slug: "galacticos de futsal",
      mainImage: "https://source.unsplash.com/lQpFRPrepQ8/250x250",
      rating: 3,
      court_types: ["Futsal"],
      location: {
        city: "Ampang",
        state: "Selangor",
        country: "Malaysia",
      },
    },
    {
      id: 3,
      name: "JKR Wilayah Persekutuan KL",
      slug: "jkrwpkl",
      mainImage: "https://source.unsplash.com/Z4Sxy1_3wdY/250x250",
      rating: 4,
      court_types: ["Futsal", "Volleyball"],
      location: {
        city: "Ampang",
        state: "Kuala Lumpur",
        country: "Malaysia",
      },
    },
    {
      id: 4,
      name: "Stadium Bukit Jalil Futsal Court wfad",
      slug: "stadium bukit jalil",
      mainImage: "https://source.unsplash.com/8-s5QuUBtyM/250x250",
      rating: 4,
      court_types: ["Futsal"],
      location: {
        city: "Bukit Jalil",
        state: "Selangor",
        country: "Malaysia",
      },
    },
    {
      id: 5,
      name: "KSL Sports Center",
      slug: "KSL Sports Center",
      mainImage: "https://source.unsplash.com/random/250x250",
      rating: 4,
      court_types: ["Futsal", "Badminton"],
      location: {
        city: "Setapak",
        state: "Selangor",
        country: "Malaysia",
      },
    },
  ];
}
</script>

<style lang="scss" scoped>
.components__listFeaturedVenue {
  margin: 24px 0 24px 0;
  overflow: auto;

  .list-venue {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
}
</style>