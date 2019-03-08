<template>
  <v-card>
    <v-layout wrap>
      <v-flex xs12>
        <v-text-field
          label="name"
          single-line
          outline
        >
        </v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-text-field
          label="Date of Birth"
          single-line
          outline
        >
        </v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-select
          :items="genders"
          label="Gender"
          outline
        >
        </v-select>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'NameStep',
  data () {
    return {
      genders: ['Male', 'Female']
    }
  }
}
</script>

<style scoped lang="scss">
</style>
