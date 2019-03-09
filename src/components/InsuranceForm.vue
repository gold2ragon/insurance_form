<template>
  <v-container>
    <h1>{{ msg }}</h1>
    <v-stepper v-model="step">
      <v-stepper-header>
        <v-stepper-step :complete="step > 1" step="1">Select Year</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="step > 2" step="2">Select Make</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="step > 3" step="3">Select Model</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="step > 4" step="4">Select Name</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="step > 5" step="5"></v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="6"></v-stepper-step>
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
          <name-step></name-step>
        </v-stepper-content>
        <v-stepper-content step="5">
          <address-step></address-step>
        </v-stepper-content>
        <v-stepper-content step="6">
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

export default {
  name: 'InsuranceForm',
  components: {
    AddressStep,
    ContactStep,
    MakeStep,
    ModelStep,
    NameStep,
    YearStep
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
