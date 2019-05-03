<template>
  <v-card>

<span>Add Vehicle?</span>

    <v-layout>
      <v-flex>
        </v-text-field>
        <v-layout justify-center>
          <v-btn
            @click="onItemClick('Yes')"
          >
            Yes
          </v-btn>
          <v-btn
            @click="onItemClick('No')"
          >
            No
          </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'Add Vehicle',
  methods: {
    onItemClick (item) {
      if (item === 'No') {
        this.$store.dispatch('appStore/setStep', 5)
      } else {
        this.$store.dispatch('appStore/setStep', 1)
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
