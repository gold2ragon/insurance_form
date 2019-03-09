<template>
  <v-card>
    <v-layout>
      <v-flex>
        <v-btn
          v-for="(item, index) in selectedModels"
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
  name: 'ModelStep',
  data () {
    return {
      models: []
    }
  },
  computed: {
    selectedModels () {
      const { year, make } = this.appState
      let modelList = []
      // Acura Models//
      if (year === '2019' && make === 'ACURA') {
        modelList = ['ILX', 'MDX', 'NSX', 'RDX', 'RLX', 'TLX']
      } else if (year === '2019' && make === 'ACURA') {
        modelList = ['ILX', 'MDX', 'NSX', 'RDX', 'RLX', 'TLX']
      } else if (year === '2017' && make === 'ACURA') {
        modelList = ['ILX', 'MDX', 'NSX', 'RDX', 'RLX', 'TLX']
      } else if (year === '2016' && make === 'ACURA') {
        modelList = ['ILX', 'MDX', 'RDX', 'RLX', 'TLX']
      } else if (year === '2015' && make === 'ACURA') {
        modelList = ['ILX', 'MDX', 'RDX', 'RLX', 'TLX']
      }

      // BMW Models//
      if (year === '2019' && make === 'BMW') {
        modelList = ['230I', '230XI', '330IX', '340IX', '430I']
      }
      if (year === '2018' && make === 'BMW') {
        modelList = ['230I', '230XI', '320', '328', '330']
      }
      if (year === '2017' && make === 'BMW') {
        modelList = ['230I', '230XI', '320', '328', '330']
      }
      if (year === '2016' && make === 'BMW') {
        modelList = ['228', '320', '328', '330E', '335']
      }
      return modelList
    }
  },
  methods: {
    onItemClick (item) {
      this.$store.dispatch('appStore/setStep', 4)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
