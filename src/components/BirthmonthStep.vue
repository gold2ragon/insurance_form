<template>
  <v-card>
    <span v-bind:style="{color: valid ? '':'red'}">Select Your Birth Month</span>
    <v-layout>
      <v-flex>
        <v-btn
          v-for="(item, index) in months"
          :key="index"
          :style="{'background-color': item == month ? 'darkgrey' : ''}"
          @click="onItemClick(item)"
        >
          {{ item }}
        </v-btn>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'BirthdayStep',
  data () {
    return {
      months: [
        'January', 'Febuary', 'March', 'April', 'May',
        'June', 'July', 'August', 'September', 'October',
        'November', 'December'
      ]
    }
  },
  computed: {
    month: {
      get() {
        return this.appState.birth_month
      }
    },
    valid: {
      get() {
        return this.appState.valid[8]
      }
    }
  },
  methods: {
    onItemClick (month) {
      this.$store.dispatch('appStore/setBirthMonth', month)
      this.$store.dispatch('appStore/setStep', 9)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
