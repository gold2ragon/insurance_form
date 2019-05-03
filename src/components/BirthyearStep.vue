<template>
  <div class="xxxxxx">
    <v-card>
      <span>Year You Were Born</span>
      <v-layout>
        <v-flex ref="form"> 
          <v-text-field
            ref="birthYear"
            :error-messages="valid ? [] : ['Please enter your birthYear (1900-2050)']"
            label="Birth Year"
            single-line
            outline
            @focus="show" data-layout="numeric"
            v-model="birthYear"
          >
          </v-text-field>
          <v-layout justify-center>
            <v-btn
              color="primary"
              @click="onItemClick('Next')"
            >
              Next
            </v-btn>
          </v-layout>
        </v-flex>        
      </v-layout>    
    </v-card>
    <vue-touch-keyboard id="keyboard" v-if="visible" :layout="layout" :cancel="hide" :accept="accept" :input="input" :next="next" />
  </div>
</template>

<script>
export default {
  name: 'BirthyearStep',
  data () {
    return {
      visible: false,
      layout: "normal",
      input: null,
      options: {
        useKbEvents: false
      },
    }
  },
  computed: {
    form () {
      return {
        birthYear: this.birthYear,
      }
    },
    valid: {
      get() {
        return this.appState.valid[10]
      }
    },
    birthYear: {
      get () {
        return this.appState.birth_year
      },
      set (value) {
        this.$store.dispatch('appStore/setBirthYear', value)
      }
    }
  },
  methods: {
    accept(text) {
      console.log("Input text: " + text);
      this.hide();
    },

    show(e) {
      this.input = e.target;
      this.layout = e.target.dataset.layout;

      if (!this.visible)
        this.visible = true
    },

    hide() {
      this.visible = false;
    },
    
    next() {
      let inputs = document.querySelectorAll("input");
      let found = false;
      [].forEach.call(inputs, (item, i) => {
        if (!found && item == this.input && i < inputs.length - 1) {
          found = true;
          this.$nextTick(() => {
            inputs[i+1].focus();
          });
        }
      });
      if (!found) {
        this.input.blur();
        this.hide();
      }
    },
    onItemClick (item) {
      Object.keys(this.form).forEach(k => {
        if (!this.form[k]) this.formHasErrors = true
        this.$refs[k].validate(true)
      })
      this.$store.dispatch('appStore/checkValidation', 10)
      this.$store.dispatch('appStore/setStep', 11)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
