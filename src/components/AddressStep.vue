<template>

  <v-card>
    <span>Address {{ msg }}</span>
    <v-layout>
      <v-flex>
        <v-text-field
          label="Street Address"
          single-line
          outline
          v-model="streetAddress"
        >
        </v-text-field>
        <v-text-field
          label="City"
          single-line
          outline
          v-model="city"
        >
        </v-text-field>
        <v-text-field
          label="Zip Code"
          single-line
          outline
          v-model="zipcode"
        >
        </v-text-field>
        <v-layout justify-center>
          <v-btn
            color="primary"
            @v-show="show"
            @click="onItemClick('Next')"
          >
            Next
          </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'AddressStep',
  computed: {
    streetAddress: {
      get () {
        return this.$store.state.street_address
      },
      set (value) {
        this.$store.dispatch('appStore/setStreetAddress', value)
      }
    },
    city: {
      get () {
        return this.$store.state.city
      },
      set (value) {
        this.$store.dispatch('appStore/setCity', value)
      }
    },
    zipcode: {
      get () {
        return this.$store.state.zipcode
      },
      set (value) {
        this.$store.dispatch('appStore/setZipcode', value)
      }
    }
  },
  methods: {
    onItemClick (item) {
      this.$store.dispatch('appStore/setStep', 12)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
