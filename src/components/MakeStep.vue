<template>
  <v-card>
    <span>Select Your Vehicle Make {{ msg }}</span>
    
    <v-btn flat @click.native="step = 2">Previous</v-btn>
    <v-btn color="primary" @click.native="step = 4">Continue</v-btn>

    <v-layout>
      <v-flex>
        <v-btn
          v-for="(item, index) in makes"
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
  name: 'MakeStep',
  data () {
    return {
      makes: [
        'ACURA',
        'AUDI',
        'BMW',
        'BUICK',
        'CADILLAC',
        'CHEVROLET',
        'CHRYSLER',
        'DODGE',
        'FORD',
        'GMC',
        'HYUNDAI',
        'JEEP',
        'HONDA',
        'KIA',
        'LEXUS',
        'MAZDA',
        'MERCEDES',
        'MITSUBISHI',
        'NISSAN',
        'PORSCHE',
        'RAM',
        'SUBARU',
        'TESLA',
        'TOYOTA',
        'VOLKSWAGEN',
        'VOLVO'
      ]
    }
  },

  methods: {
    onItemClick (make) {
      this.$store.dispatch('appStore/setMake', make)
      this.$store.dispatch('appStore/setStep', 3)
    }
  }
}


</script>


<style scoped lang="scss">
</style>
