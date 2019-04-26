<template>
  <v-card>
    <span>Select Your Birth Month {{ msg }}</span>
    <v-layout>
      <v-flex>
        <v-btn
          v-for="(item, index) in months"
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
      months: [
        'January', 'Febuary', 'March', 'April', 'May',
        'June', 'July', 'August', 'September', 'October',
        'November', 'December'
      ]
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
