<template>
  <v-card>

<span>Gender {{ msg }}</span>

    <v-layout>
      <v-flex>
        </v-text-field>
        <v-layout justify-center>
          <v-btn
            @click="onItemClick('Male')"
          >
            Male
          </v-btn>
          <v-btn
            @click="onItemClick('Female')"
          >
            Female
          </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'Gender Step',
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
