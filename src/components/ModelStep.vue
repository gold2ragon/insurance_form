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
      }
      if (year === '2018' && make === 'ACURA') {
        modelList = ['ILX', 'MDX', 'NSX', 'RDX', 'RLX', 'TLX']
      }
      if (year === '2017' && make === 'ACURA') {
        modelList = ['ILX', 'MDX', 'NSX', 'RDX', 'RLX', 'TLX']
      }
      if (year === '2016' && make === 'ACURA') {
        modelList = ['ILX', 'MDX', 'RDX', 'RLX', 'TLX']
      }
      if (year === '2015' && make === 'ACURA') {
        modelList = ['ILX', 'MDX', 'RDX', 'RLX', 'TLX']
      }
      if (year === '2014' && make === 'ACURA') {
        modelList = ['ILX', 'MDX', 'RDX', 'RLX', 'TL', 'TSX']
      }
      if (year === '2013' && make === 'ACURA') {
        modelList = ['ILX', 'MDX', 'RDX', 'TL', 'TSX', 'ZDX']
      }
      if (year === '2012' && make === 'ACURA') {
        modelList = ['MDX', 'RDX', 'RL', 'TSX', 'ZDX']
      }
      if (year === '2011' && make === 'ACURA') {
        modelList = ['MDX', 'RDX', 'RL', 'TL', 'TSX', 'ZDX']
      }
      if (year === '2010' && make === 'ACURA') {
        modelList = ['MDX', 'RDX', 'RL', 'TL', 'TSX', 'ZDX']
      }
      if (year === '2009' && make === 'ACURA') {
        modelList = ['MDX', 'RDX', 'RL', 'TL', 'TSX']
      }
      if (year === '2008' && make === 'ACURA') {
        modelList = ['MDX', 'RDX', 'RL', 'TL', 'TSX']
      }
      if (year === '2007' && make === 'ACURA') {
        modelList = ['MDX', 'RDX', 'RL', 'TL', 'TSX']
      }
      if (year === '2006' && make === 'ACURA') {
        modelList = ['3.2TL', 'MDX', 'RL', 'TL', 'TSX']
      }
      if (year === '2005' && make === 'ACURA') {
        modelList = ['MDX', 'NSX', 'RL', 'RSX', 'TL', 'TSX']
      }
      if (year === '2004' && make === 'ACURA') {
        modelList = ['3.5RL', 'MDX', 'NSX', 'RSX', 'TL', 'TSX']
      }
      if (year === '2003' && make === 'ACURA') {
        modelList = ['3.2CL', '3.2TL', '3.5RL', 'MDX', 'NSX', 'RSX']
      }
      if (year === '2002' && make === 'ACURA') {
        modelList = ['3.2CL', '3.2TL', '3.5RL', 'MDX', 'NSX', 'RSX']
      }
      if (year === '2001' && make === 'ACURA') {
        modelList = ['3.2CL', '3.2TL', '3.5RL', 'INTEGRA', 'MDX', 'NSX']
      }
      if (year === '2000' && make === 'ACURA') {
        modelList = ['3.2TL', '3.5RL', 'INTEGRA',  'NSX']
      }
      if (year === '1999' && make === 'ACURA') {
        modelList = ['2.3CL', '3.0CL', '3.2TL',  '3.5RL', 'INTEGRA', 'NSX', 'SLX']
      }
      if (year === '1998' && make === 'ACURA') {
        modelList = ['2.3CL', '2.5TL', '3.0CL',  '3.2TL', '3.5RL', 'INTEGRA', 'NSX', 'SLX']
      }
      if (year === '1997' && make === 'ACURA') {
        modelList = ['2.5TL',  '3.2TL', '3.5RL', 'INTEGRA', 'NSX', 'SLX']
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
