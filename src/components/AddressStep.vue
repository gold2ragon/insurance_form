<template>

  <v-card>
    <span>Address</span>
    <v-layout ref="form">
      <v-flex>
        <v-text-field
          ref="address"
          :error-messages="validAddress ? [] : ['Please enter your street address']"
          label="Street Address"
          single-line
          outline
          v-model="streetAddress"
        >
        </v-text-field>
        <v-text-field
          ref="city"
          :error-messages="validCity ? [] : ['Please enter your city']"          
          label="City"
          single-line
          outline
          v-model="city"
        >
        </v-text-field>
        <v-text-field
          ref="zip"
          :error-messages="validZipcode ? [] : ['Please enter your zipcode']"          
          label="Zip Code"
          single-line
          outline
          v-model="zipcode"
        >
        </v-text-field>
        <v-layout justify-center>
          <v-btn
            color="primary"
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
    validAddress: {
      get() {
        if (this.appState.valid[11] || this.streetAddress !== '') return true
        else return false
      }
    },
    streetAddress: {
      get () {
        return this.appState.street_address
      },
      set (value) {
        this.$store.dispatch('appStore/setStreetAddress', value)
      }
    },
    validCity: {
      get() {
        if (this.appState.valid[11] || this.city !== '') return true
        else return false
      }
    },
    city: {
      get () {
        return this.appState.city
      },
      set (value) {
        this.$store.dispatch('appStore/setCity', value)
      }
    },
    validZipcode: {
      get() {
        let re = /(^\d{5}$)|(^\d{5}-\d{4}$)/
        return this.appState.valid[11] || re.test(this.zipcode)
      }
    },
    zipcode: {
      get () {
        return this.appState.zipcode
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
