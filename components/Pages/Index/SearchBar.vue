<template>
  <div class="components__searchBar">
    <p class="mt-10">Choose Your Game</p>
    <div class="game-options minimal-scroller">
      <template v-for="(item, index) in sampleGame">
        <v-btn
          :key="index"
          class="search-btn mb-3"
          tile
          @click="formModel.game = item"
          :color="formModel.game == item ? 'primary' : 'white'"
        >
          {{ item }}
        </v-btn>
      </template>
    </div>

    <p class="mt-10">Choose Your Time</p>
    <div class="game-options minimal-scroller">
      <template v-for="(item, index) in sampleTime">
        <v-btn
          :key="index"
          class="search-btn mb-3"
          tile
          @click="formModel.time = item"
          :color="formModel.time == item ? 'primary' : 'white'"
        >
          {{ item }}
        </v-btn>
      </template>
    </div>

    <p class="mt-10">Location</p>
    <v-autocomplete
      v-model="formModel.location"
      :items="sampleLocation"
      hide-details
      filled
      label="Choose your batte ground"
      dark
      class="full-width"
    ></v-autocomplete>

    <p class="mt-10">Date</p>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :return-value.sync="date"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          filled
          class="full-width"
          v-model="date"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker v-model="date" no-title scrollable>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
        <v-btn text color="primary" @click="$refs.menu.save(date)"> OK </v-btn>
      </v-date-picker>
    </v-menu>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class SearchBar extends Vue {
  menu: Boolean = false;
  date: String = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .substr(0, 10);

  formModel: any = {
    location: null,
    date: null,
    time: null,
    game: "Futsal",
  };

  sampleLocation: Array<String> = [
    "Ampang",
    "Bangi",
    "Bangsar",
    "Bukit Bintang",
    "Petaling Jaya",
    "Putrajaya",
    "Rawang",
    "Subang",
    "Shah Alam",
  ];

  sampleGame: Array<String> = [
    "Archery",
    "Futsal",
    "Football",
    "Badminton",
    "Squash",
    "Tennis",
  ];

  sampleTime: Array<String> = [
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ];
}
</script>

<style lang="scss" scoped>
.components__searchBar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70vw;

  .overflow-no-bar {
    white-space: nowrap;
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .game-options {
    width: 70vw;
    scroll-behavior: smooth;
    white-space: nowrap;
    overflow: auto;
    scrollbar-width: 8px;
  }

  .search-btn {
    height: 50px;
    width: 200px;
    margin-right: 8px;
    color: black;
  }
}
</style>
