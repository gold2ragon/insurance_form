<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <InsuranceForm msg="Save on Auto Insurance"/>
  </div>
</template>

<script>
// @ is an alias to /src
import InsuranceForm from '@/components/InsuranceForm.vue'

export default {
  name: 'home',
  components: {
    InsuranceForm
  }
}
</script>
