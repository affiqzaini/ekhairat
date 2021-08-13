<template>
  <div class="components__deathCountChart">
    <v-card-text>
      <v-sparkline
        :value="[23, 20, 26, 19, 30, 22]"
        height="200"
        smooth
        padding="25"
      >
        <template v-slot:label="item">
          {{ item.value }}
        </template></v-sparkline
      >
    </v-card-text>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class DeathCountChart extends Vue {}
</script>

<style lang="scss" scoped>
.components__deathCountChart {
  max-width: 350px;
}
</style>