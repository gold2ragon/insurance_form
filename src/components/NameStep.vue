<template>
  <v-card>
    <v-layout wrap>
      <v-flex row xs12>
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
      </v-flex>
      <v-flex xs12>
        <v-menu
          v-model="dobMenu"
          :close-on-content-click="false"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="dob"
              label="Date of Birth"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="dob" @input="dobMenu = false"></v-date-picker>
        </v-menu>
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
      dob: new Date().toISOString().substr(0, 10),
      dobMenu: false,
      genders: ['Male', 'Female']
    }
  }
}
</script>

<style scoped lang="scss">
</style>
