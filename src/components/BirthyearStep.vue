<template>
  <v-card>
    <span>Year You Were Born {{ msg }}</span>
    <v-layout>
      <v-flex>
        <v-text-field
          label="Birth Year"
          single-line
          outline
          v-model="birthYear"
        >

        </v-text-field>
        <v-layout justify-center>
          <v-btn
          color="primary"
            @click="onItemClick()"
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
  computed: {
    birthYear: {
      get () {
        return this.$store.state.birth_year
      },
      set (value) {
        this.$store.dispatch('appStore/setBirthYear', value)
      }
    }
  },
  methods: {
    onItemClick () {
      this.$store.dispatch('appStore/setStep', 11)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
