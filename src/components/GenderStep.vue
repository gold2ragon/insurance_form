<template>
  <v-card>

<span v-bind:style="{color: valid ? '':'red'}">Gender</span>

    <v-layout>
      <v-flex>
        </v-text-field>
        <v-layout justify-center>
          <v-btn
            :style="{'background-color': gender == 'Male' ? 'darkgrey' : ''}"
            @click="onItemClick('Male')"
          >
            Male
          </v-btn>
          <v-btn
            :style="{'background-color': gender == 'Female' ? 'darkgrey' : ''}"
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
  computed: {
    gender: {
      get() {
        return this.appState.gender
      }
    },
    valid: {
      get() {
        return this.appState.valid[5]
      }
    }
  },
  methods: {
    onItemClick (item) {
      this.$store.dispatch('appStore/setGender', item)
      this.$store.dispatch('appStore/setStep', 6)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
