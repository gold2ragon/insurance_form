<template>
  <v-card>

<span v-bind:style="{color: valid ? '':'red'}">Are You Married?</span>
    <v-layout>
      <v-flex>
        </v-text-field>
        <v-layout justify-center>
          <v-btn
            :style="{'background-color': married == 'Yes' ? 'darkgrey' : ''}"
            @click="onItemClick('Yes')"
          >
            Yes
          </v-btn>
          <v-btn
            :style="{'background-color': married == 'No' ? 'darkgrey' : ''}"
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
  computed: {
    married: {
      get() {
        return this.appState.married
      }
    },
    valid: {
      get() {
        return this.appState.valid[6]
      }
    }
  },
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
