<template>
  <v-card>
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
        <v-btn
          color="primary"
        >
          Finish
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
