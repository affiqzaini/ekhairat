<template>
  <div class="components__formNewMember">
    <v-row>
      <v-col>
        <v-text-field filled label="Full Name" hide-details="auto" dense />
      </v-col>
      <v-col>
        <v-text-field filled label="IC Number" hide-details="auto" dense />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field filled label="Phone Number" hide-details="auto" dense />
      </v-col>
      <v-col>
        <v-text-field
          filled
          label="Email"
          hide-details="auto"
          dense
        ></v-text-field>
      </v-col>
    </v-row>

    <p class="text-body-1 mt-10">Address</p>
    <v-text-field
      filled
      label="Address Line 1"
      hide-details="auto"
      dense
      class="mb-4"
    />

    <v-text-field
      filled
      label="Address Line 2"
      hide-details="auto"
      dense
      class="mb-4"
    />

    <v-row class="mb-4">
      <v-col>
        <v-text-field filled label="City" hide-details="auto" dense />
      </v-col>
      <v-col>
        <v-text-field filled label="Zipcode" hide-details="auto" dense />
      </v-col>
      <v-col>
        <v-text-field filled label="State" hide-details="auto" dense />
      </v-col>
    </v-row>

    <div class="form-dependant">
      <p class="text-body-1">Dependants</p>
      <v-row v-for="n in dependantCount" :key="n">
        <v-col cols="6">
          <v-text-field filled label="Name" hide-details="auto" dense />
        </v-col>
        <v-col cols="5">
          <v-text-field filled label="IC Number" hide-details="auto" dense />
        </v-col>
        <v-col cols="1" class="center-all">
          <v-btn
            fab
            x-small
            outlined
            color="error lighten-1"
            @click="dependantCount--"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-btn
        block
        large
        rounded
        class="d-flex mx-auto mt-5"
        outlined
        color="primary lighten-1"
        @click="dependantCount++"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>

    <v-btn large width="200" rounded color="accent" class="d-flex ml-auto mb-12"
      >Submit</v-btn
    >
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class FormNewMember extends Vue {
  dependantCount: number = 1;
  formModel: Object = {
    fullname: null,
    icNumber: null,
    phoneNo: null,
    email: null,
    address: {
      addressLine1: null,
      addressLine2: null,
      city: null,
      zipcode: null,
      state: null,
    },
    dependants: null,
  };
}
</script>

<style lang="scss" scoped>
.components__formNewMember {
  .form-dependant {
    border: 3px solid gainsboro;
    border-radius: 20px;
    padding: 16px;
    margin-bottom: 16px;

    &:hover {
      border: 3px solid #1a659e;
    }
  }
}
</style>