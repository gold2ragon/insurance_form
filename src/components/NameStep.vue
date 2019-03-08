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
        <v-dialog
          ref="dobPicker"
          v-model="dobModal"
          :return-value.sync="dob"
          persistent
          lazy
          full-width
          width="300"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="dob"
              label="Date of Birth"
              readonly
              v-on="on"
            >
            </v-text-field>
            <v-date-picker
              v-model="dob"
              scrollable
            >
              <v-spacer></v-spacer>
              <v-btn
                flat
                color="primary"
                @click="dobModal = false"
              >
                Cancel
              </v-btn>
              <v-btn
                flat
                color="primary"
                @click="$refs.dobPicker.save(dob)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </template>
        </v-dialog>
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
      dobModal: false,
      genders: ['Male', 'Female']
    }
  }
}
</script>

<style scoped lang="scss">
</style>
