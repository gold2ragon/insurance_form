<template>
  <v-card>
    <span>Year You Were Born {{ msg }}</span>
    <v-layout>
      <v-flex>
        <v-text-field
          label="Birth Year"
          single-line
          outline
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
  name: 'BirthyearStep',
  methods: {
    onItemClick (item) {
      this.$store.dispatch('appStore/setOwnership', item)
      this.$store.dispatch('appStore/setStep', 11)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
