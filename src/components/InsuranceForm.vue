<template>
  <v-container>
    <h1>{{ msg }}</h1>
    <v-stepper v-model="step">
      <v-stepper-header>
        <v-stepper-step :complete="step > 1" step="1">Your Car </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="step > 2" step="2">Drivers</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="step > 3" step="3">Contact</v-stepper-step>
        <v-divider></v-divider>

      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <year-step></year-step>
        </v-stepper-content>

        <v-stepper-content step="2">
          <make-step></make-step>
        </v-stepper-content>

        <v-stepper-content step="3">
          <model-step></model-step>
        </v-stepper-content>

        <v-stepper-content step="4">
          <add-step></add-step>
          </v-stepper-content>

          <v-stepper-content step="5">
            <gender-step></gender-step>
        </v-stepper-content>

        <v-stepper-content step="6">
          <married-step></married-step>
        </v-stepper-content>

        <v-stepper-content step="7">
          <homeowner-step></homeowner-step>
        </v-stepper-content>

        <v-stepper-content step="8">
          <birthmonth-step></birthmonth-step>
        </v-stepper-content>

        <v-stepper-content step="9">
          <birthday-step></birthday-step>
        </v-stepper-content>

        <v-stepper-content step="10">
          <birthyear-step></birthyear-step>
        </v-stepper-content>

        <v-stepper-content step="11">
          <address-step></address-step>
        </v-stepper-content>

        <v-stepper-content step="12">
          <contact-step></contact-step>
        </v-stepper-content>

      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
import AddressStep from './AddressStep.vue'
import ContactStep from './ContactStep.vue'
import MakeStep from './MakeStep.vue'
import ModelStep from './ModelStep.vue'
import NameStep from './NameStep.vue'
import YearStep from './YearStep.vue'
import AddStep from './AddStep.vue'
import GenderStep from './GenderStep.vue'
import MarriedStep from './MarriedStep.vue'
import HomeownerStep from './HomeownerStep.vue'
import BirthmonthStep from './BirthmonthStep.vue'
import BirthdayStep from './BirthdayStep.vue'
import BirthyearStep from './BirthyearStep.vue'

export default {
  name: 'InsuranceForm',
  components: {
    AddressStep,
    ContactStep,
    MakeStep,
    ModelStep,
    NameStep,
    YearStep,
    AddStep,
    GenderStep,
    MarriedStep,
    HomeownerStep,
    BirthmonthStep,
    BirthdayStep,
    BirthyearStep
  },
  props: {
    msg: String
  },
  data () {
    return {
    }
  },
  created () {
    this.step = 1
  },
  computed: {
    step: {
      get () {
        return this.appState.step
      },
      set (val) {
        this.$store.dispatch('appStore/setStep', val)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only --> <style scoped lang="scss"> </style>
