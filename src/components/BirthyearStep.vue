<template>
  <v-card>
    <span>Year You Were Born</span>
    <v-layout>
      <v-flex ref="form"> 
        <v-text-field
          ref="birthYear"
          :error-messages="valid ? [] : ['Please enter your birthYear (1950-2050)']"
          :rules="[rules.birthYearRequired]"
          label="Birth Year"
          single-line
          outline
          v-model="birthYear"
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
  data () {
    return {
      rules: {
        birthYearRequired: value => !!value || 'Plase enter your birthYear. (1950-2050)',
      }
    }
  },
  computed: {
    form () {
      return {
        birthYear: this.birthYear,
      }
    },
    valid: {
      get() {
        return this.appState.valid[10]
      }
    },
    birthYear: {
      get () {
        return this.appState.birth_year
      },
      set (value) {
        this.$store.dispatch('appStore/setBirthYear', value)
      }
    }
  },
  methods: {
    onItemClick (item) {
      Object.keys(this.form).forEach(k => {
        if (!this.form[k]) this.formHasErrors = true
        this.$refs[k].validate(true)
      })
      this.$store.dispatch('appStore/checkValidation', 10)
      this.$store.dispatch('appStore/setStep', 11)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
