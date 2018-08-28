<template>
  <myComponentParent>
    <myComponentChildren v-for="(step,index) in steps" :step="step" :key="index" :active="active == index"/>
  </myComponentParent>
</template>

<script>
  import myComponentChildren from './myComponentChildren'
  import myComponentParent from './myComponentParent'

  export default {
    name: "myComponentWarp",
    components: {
      myComponentParent, myComponentChildren
    },
    data() {
      return {
        steps: [{'step1': 'yi'}, {'step2': 'er'}, {'step3': 'san'}, {'step4': 'si'}],
        active: 3
      }
    }
  }
</script>

<style scoped>

</style>
