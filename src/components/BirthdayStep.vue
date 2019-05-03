<template>
  <v-card>

    <span v-bind:style="{color: valid ? '':'red'}">Select Your Birth Day</span>
    <v-layout>
      <v-flex>
        <v-btn
          v-for="(item, index) in days"
          :key="index"
          :style="{'background-color': item == day ? 'darkgrey' : ''}"
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
      days: [
        '1',
        '2',
        '3', '4', '5', '6', '7', '8',
        '9', '10', '11', '12', '13', '14', '15',
        '16', '17', '18', '19', '20', '21', '22',
        '23', '24', '25', '26',
        '27', '28', '29', '30', '31'
      ]
    }
  },
  computed: {
    day: {
      get() {
        return this.appState.birth_day
      }
    },
    valid: {
      get() {
        return this.appState.valid[8]
      }
    }
  },
  methods: {
    onItemClick (day) {
      this.$store.dispatch('appStore/setBirthDay', day)
      this.$store.dispatch('appStore/setStep', 10)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
