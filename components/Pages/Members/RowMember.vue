<template>
  <tr class="components__rowMember">
    <td class="text-center">{{ item.id }}</td>
    <td>{{ item.name }}</td>
    <td class="text-center">{{ item.icNo }}</td>
    <td class="text-center">
      <v-btn icon color="secondary lighten-1">
        <v-icon>mdi-information</v-icon>
      </v-btn>
      <v-btn icon color="error lighten-1">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </td>
  </tr>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component({})
export default class RowMember extends Vue {
  @Prop({ required: true, type: Object }) item!: Object;
}
</script>

<style lang="scss" scoped>
.components__rowMember {
  &:hover {
    cursor: pointer;
    background-color: rgba($color: #004e89, $alpha: 0.3) !important;
  }
}
</style>