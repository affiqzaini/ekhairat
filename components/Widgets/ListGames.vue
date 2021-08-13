<template>
  <div class="components__listGames">
    <div class="full-width d-flex">
      <h3 class="mb-4">Most Played Sports</h3>
      <v-spacer></v-spacer>
      <p class="text-caption secondary--text cursor-pointer">View All</p>
    </div>

    <v-data-iterator
      :items="sampleGames"
      item-key="name"
      hide-default-footer
      :items-per-page="6"
    >
      <template v-slot:default="{ items }">
        <div class="center-between">
          <card-games-item
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
import CardGamesItem from "./CardGamesItem.vue";

interface game {
  id: number;
  name: string;
  image: string;
  slug: string;
  mdi_icon: string;
}

@Component({
  components: {
    CardGamesItem,
  },
})
export default class ListGames extends Vue {
  sampleGames: Array<game> = [
    {
      id: 1,
      name: "Futsal",
      image: "https://source.unsplash.com/otuM-nw-_NY/150x150",
      slug: "futsal",
      mdi_icon: "mdi-soccer",
    },
    {
      id: 2,
      name: "Badminton",
      image: "https://source.unsplash.com/SdQyRsSwx4Y/150x150",
      slug: "badminton",
      mdi_icon: "mdi-badminton",
    },
    {
      id: 3,
      name: "Tennis",
      image: "https://source.unsplash.com/WqI-PbYugn4/150x150",
      slug: "tennis",
      mdi_icon: "mdi-tennis",
    },
    {
      id: 4,
      name: "Football",
      image: "https://source.unsplash.com/mY2ZHBU6GRk/150x150",
      slug: "football",
      mdi_icon: "mdi-soccer-field",
    },
    {
      id: 5,
      name: "Volleyball",
      image: "https://source.unsplash.com/KbgCIJ0watM/150x150",
      slug: "volleyball",
      mdi_icon: "mdi-volleyball",
    },
    {
      id: 6,
      name: "Ping-Pong",
      image: "https://source.unsplash.com/XpLWpyrAbA0/150x150",
      slug: "pingpong",
      mdi_icon: "mdi-table-tennis",
    },
  ];
}
</script>

<style lang="scss" scoped>
.components__listGames {
  margin: 24px 0 24px 0;
}
</style>