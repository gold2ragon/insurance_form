<template>
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
          v-model="email"
        >
        </v-text-field>
        <v-text-field
          ref="phone_number"
          :error-messages="validPhone ? [] : ['Please enter your phone number']"
          label="Phone Number"
          single-line
          outline
          v-model="phone_number"
        >

        </v-text-field>
        <v-text-field
          ref="firstname"
          :error-messages="validFirstname ? [] : ['Please enter your first name']"
          label="First Name"
          single-line
          outline
          v-model="firstname"
        >
      </v-text-field>
      <v-text-field
        ref="lastname"
        :error-messages="validLastname ? [] : ['Please enter your last name']"
        label="Last Name"
        single-line
        outline
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
</template>

<script>
export default {
  name: 'ContactStep',
  data () {
    return {
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
