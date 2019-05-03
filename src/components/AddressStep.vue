<template>
  <div>
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
            @focus="show" data-layout="normal"
            v-model="streetAddress"
          >
          </v-text-field>
          <v-text-field
            ref="city"
            :error-messages="validCity ? [] : ['Please enter your city']"          
            label="City"
            single-line
            outline
            @focus="show" data-layout="normal"
            v-model="city"
          >
          </v-text-field>
          <v-text-field
            ref="zip"
            :error-messages="validZipcode ? [] : ['Please enter your zipcode']"          
            label="Zip Code"
            single-line
            outline
            @focus="show" data-layout="numeric"
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
    <vue-touch-keyboard id="keyboard" v-if="visible" :layout="layout" :cancel="hide" :accept="accept" :input="input" :next="next" />
  </div>
</template>

<script>
export default {
  name: 'AddressStep',
  data () {
    return {
      layout: "normal",
      input: null,
      options: {
        useKbEvents: false
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
    visible: {
      get() {
        return this.appState.keyboard_visible
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
    accept(text) {
      console.log("Input text: " + text);
      this.hide();
    },

    show(e) {
      this.input = e.target;
      this.layout = e.target.dataset.layout;

      if (!this.visible)
        this.$store.dispatch('appStore/setKeyboardVisible', true)
    },

    hide() {
      this.$store.dispatch('appStore/setKeyboardVisible', false)
    },
    
    next() {
      let inputs = document.querySelectorAll("input");
      let found = false;
      [].forEach.call(inputs, (item, i) => {
        if (!found && item == this.input && i < inputs.length - 1) {
          found = true;
          this.$nextTick(() => {
            inputs[i+1].focus();
          });
        }
      });
      if (!found) {
        this.input.blur();
        this.hide();
      }
    },
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
