<template>

  <v-card>
    <span>Address</span>
    <v-layout ref="form">
      <v-flex>
        <v-text-field
          ref="address"
          :rules="[rules.addressRequired]"
          placeholder="Street Address"
          single-line
          outline
          v-model="streetAddress"
        >
        </v-text-field>
        <v-text-field
          ref="city"
          :rules="[rules.cityRequired]"
          label="City"
          single-line
          outline
          v-model="city"
        >
        </v-text-field>
        <v-text-field
          ref="zip"
          :rules="[rules.zipcodeRequired]"
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
  data () {
    return {
      rules: {
        addressRequired: value => !!value || 'Enter your home address.',
        cityRequired: value => !!value || 'Enter your home address.',
        zipcodeRequired: value => !!value || 'Enter your home address.'
      }
    }
  },
  computed: {
    form () {
      return {
        address: this.streetAddress,
        city: this.city,
        zip: this.zipcode,
      }
    },
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
      Object.keys(this.form).forEach(k => {
        if (!this.form[k]) this.formHasErrors = true
        this.$refs[k].validate(true)
      })
      this.$store.dispatch('appStore/checkValidation', 11)
      this.$store.dispatch('appStore/setStep', 12)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
