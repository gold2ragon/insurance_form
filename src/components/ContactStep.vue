<template>
  <v-card>
    <span>Contact Info {{ msg }}</span>
    <v-layout>
      <v-flex>

        <v-text-field
          label="Email Address"
          single-line
          outline
          v-model="email"
        >
      </v-text-field>
      <v-text-field
        label="Phone Number"
        single-line
        outline
        v-model="phone_number"
      >

        </v-text-field>
        <v-text-field
          label="First Name"
          single-line
          outline
          v-model="firstname"
        >
      </v-text-field>
      <v-text-field
        label="Last Name"
        single-line
        outline
        v-model="lastname"
      >

        </v-text-field>
        <v-btn
          color="primary"
          @click="onSubmitData()"
        >
          GET QUOTES
        </v-btn>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'ContactStep',
  computed: {
    email: {
      get () {
        return this.$store.state.email
      },
      set (value) {
        this.$store.dispatch('appStore/setEmail', value)
        this.$store.dispatch('appStore/setStep', 12)
      }
    },
    phone_number: {
      get () {
        return this.$store.state.phone_number
      },
      set (value) {
        this.$store.dispatch('appStore/setPhoneNumber', value)
      }
    },
    firstname: {
      get () {
        return this.$store.state.firstname
      },
      set (value) {
        this.$store.dispatch('appStore/setFirstName', value)
      }
    },
    lastname: {
      get () {
        return this.$store.state.lastname
      },
      set (value) {
        this.$store.dispatch('appStore/setLastName', value)
      }
    }
  },
  methods: {
    onSubmitData () {
      this.$store.dispatch('appStore/submitData')
    }
  }
}
</script>

<style scoped lang="scss">
</style>
