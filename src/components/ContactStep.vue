<template>
  <div>
    <v-card>
      <span>Contact Info</span>
      <v-layout>
        <v-flex ref="form"> 

          <v-text-field
            ref="email"
            :error-messages="validEmail ? [] : ['Please enter your email']"
            label="Email Address"
            single-line
            outline
            @focus="show" data-layout="normal"
            v-model="email"
          >
          </v-text-field>
          <v-text-field
            ref="phone_number"
            :error-messages="validPhone ? [] : ['Please enter your phone number']"
            label="Phone Number"
            single-line
            outline
            @focus="show" data-layout="numeric"
            v-model="phone_number"
          >

          </v-text-field>
          <v-text-field
            ref="firstname"
            :error-messages="validFirstname ? [] : ['Please enter your first name']"
            label="First Name"
            single-line
            outline
            @focus="show" data-layout="normal"
            v-model="firstname"
          >
        </v-text-field>
        <v-text-field
          ref="lastname"
          :error-messages="validLastname ? [] : ['Please enter your last name']"
          label="Last Name"
          single-line
          outline
          @focus="show" data-layout="normal"
          v-model="lastname"
        >

          </v-text-field>
          <v-layout justify-center>
            <v-btn
              color="primary"
              @click="onSubmitData()"
            >
              GET QUOTES
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
  name: 'ContactStep',
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
        email: this.email,
        phone_number: this.phone_number,
        firstname: this.firstname,
        lastname: this.lastname
      }
    },
    visible: {
      get() {
        return this.appState.keyboard_visible
      }
    },
    validEmail: {
      get() {
        let remail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/      
        return this.appState.valid[12] || remail.test(this.email)
      }
    },
    email: {
      get () {
        return this.appState.email
      },
      set (value) {
        this.$store.dispatch('appStore/setEmail', value)
        this.$store.dispatch('appStore/setStep', 12)
      }
    },
    validPhone: {
      get() {
        let rphone = /^\+(?:[0-9] ?){6,14}[0-9]$/
        return this.appState.valid[12] || rphone.test(this.phone_number)
      }
    },
    phone_number: {
      get () {
        return this.appState.phone_number
      },
      set (value) {
        this.$store.dispatch('appStore/setPhoneNumber', value)
      }
    },
    validFirstname: {
      get() {
        return this.appState.valid[12] || this.firstname !== ''
      }
    },
    firstname: {
      get () {
        return this.appState.firstname
      },
      set (value) {
        this.$store.dispatch('appStore/setFirstName', value)
      }
    },
    validLastname: {
      get() {
        return this.appState.valid[12] || this.lastname !== ''
      }
    },
    lastname: {
      get () {
        return this.appState.lastname
      },
      set (value) {
        this.$store.dispatch('appStore/setLastName', value)
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
    onSubmitData () {
      Object.keys(this.form).forEach(k => {
        if (!this.form[k]) this.formHasErrors = true
        this.$refs[k].validate(true)
      })
      this.$store.dispatch('appStore/checkValidation', 12)
      this.$store.dispatch('appStore/submitData')
    }
  }
}
</script>

<style scoped lang="scss">
</style>
