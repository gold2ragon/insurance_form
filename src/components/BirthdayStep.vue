<template>
  <v-card>

    <span>Select Your Birth Day {{ msg }}</span>
    <v-layout>
      <v-flex>
        <v-btn
          v-for="(item, index) in years"
          :key="index"
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
      years: [
        '1',
        '2',
        '3', '4', '5', '6', '7', '8',
        '9', '10', '11', '12', '13', '14', '15',
        '16', '17', '18', '19', '20', '21', '22',
        '23','24','25','26',
        '27','28','29','30','31'
      ]
    }
  },
  methods: {
    onItemClick (year) {
      this.$store.dispatch('appStore/setYear', year)
      this.$store.dispatch('appStore/setStep', 10)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
