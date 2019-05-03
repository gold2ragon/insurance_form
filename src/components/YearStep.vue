<template>
  <v-card>

    <span v-bind:style="{color: valid ? '':'red'}">Select Your Vehicle Year</span>
    <v-layout>
      <v-flex>
        <v-btn
          v-for="(item, index) in years"
          :key="index"
          :style="{'background-color': item == year ? 'darkgrey' : ''}"
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
  name: 'YearStep',
  data () {
    return {
      years: [
        '2019',
        '2018',
        '2017', '2016', '2015', '2014', '2013', '2012',
        '2011', '2010', '2009', '2008', '2007', '2006', '2005',
        '2004', '2003', '2002', '2001', '2000', '1999', '1998', '1997'
      ]
    }
  },
  computed: {
    year: {
      get() {
        return this.appState.year
      }
    },
    valid: {
      get() {
        return this.appState.valid[1]
      }
    }
  },
  methods: {
    onItemClick (year) {
      this.$store.dispatch('appStore/setYear', year)
      this.$store.dispatch('appStore/setStep', 2)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
