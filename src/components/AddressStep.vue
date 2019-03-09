<template>
  <v-card>
    <v-layout>
      <v-flex>
        <v-text-field
          label="Street Address"
          single-line
          outline
        >
        </v-text-field>
        <v-text-field
          label="City"
          single-line
          outline
        >
        </v-text-field>
        <v-text-field
          label="Zip Code"
          single-line
          outline
        >
        </v-text-field>
        <v-layout justify-center>
          <v-btn
            @click="onItemClick('Rent')"
          >
            Rent
          </v-btn>
          <v-btn
            @click="onItemClick('Own')"
          >
            Own
          </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'AddressStep',
  methods: {
    onItemClick (item) {
      this.$store.dispatch('appStore/setOwnership', item)
      this.$store.dispatch('appStore/setStep', 6)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
