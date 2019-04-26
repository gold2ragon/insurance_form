<template>
  <v-card>

<span>Are You Married? {{ msg }}</span>

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
  name: 'Married Step',
  methods: {
    onItemClick (item) {
      this.$store.dispatch('appStore/setMarried', item)
      this.$store.dispatch('appStore/setStep', 7)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
