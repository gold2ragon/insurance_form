<template>
  <v-card>
    <span>Contact Info {{ msg }}</span>
    <v-layout>
      <v-flex>

        <v-text-field
          label="Email Address"
          single-line
          outline
        >
      </v-text-field>
      <v-text-field
        label="Phone Number"
        single-line
        outline
      >

        </v-text-field>
        <v-text-field
          label="First Name"
          single-line
          outline
        >
      </v-text-field>
      <v-text-field
        label="Last Name"
        single-line
        outline
      >

        </v-text-field>
        <v-btn
          color="primary"
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
  methods: {
  }
}
</script>

<style scoped lang="scss">
</style>
