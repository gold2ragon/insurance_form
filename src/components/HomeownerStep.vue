<template>
  <v-card>

<span>Do You Own A Home? {{ msg }}</span>

    <v-layout>
      <v-flex>
        </v-text-field>
        <v-layout justify-center>
          <v-btn
            @click="onItemClick('Own Home')"
          >
            Own Home
          </v-btn>
          <v-btn
            @click="onItemClick('Rent')"
          >
            Rent
          </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'Homeowner Step',
  methods: {
    onItemClick (item) {
      this.$store.dispatch('appStore/setHomeStatus', item)
      this.$store.dispatch('appStore/setStep', 8)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
