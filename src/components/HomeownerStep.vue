<template>
  <v-card>

<span v-bind:style="{color: valid ? '':'red'}">Do You Own A Home?</span>

    <v-layout>
      <v-flex>
        </v-text-field>
        <v-layout justify-center>
          <v-btn
            :style="{'background-color': home_status == 'Own Home' ? 'darkgrey' : ''}"
            @click="onItemClick('Own Home')"
          >
            Own Home
          </v-btn>
          <v-btn
            :style="{'background-color': home_status == 'Rent' ? 'darkgrey' : ''}"
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
  computed: {
    home_status: {
      get() {
        return this.appState.home_status
      }
    },
    valid: {
      get() {
        return this.appState.valid[7]
      }
    }
  },
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
