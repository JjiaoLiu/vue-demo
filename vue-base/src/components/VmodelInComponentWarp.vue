<template>
  <section>
    <VmodelInComponent v-model="inputVal"/>
    {{inputVal}}
    <ChangeVmodelInCheckbox v-model="checkedVal"/>
    {{checkedVal}}
  </section>
</template>

<script>
  import VmodelInComponent from './VmodelInComponent'
  import ChangeVmodelInCheckbox from './ChangeVmodelInCheckbox'

  export default {
    name: "VmodelInComponentWarp",
    components: {
      VmodelInComponent,
      ChangeVmodelInCheckbox
    },
    data() {
      return {
        inputVal: "大庆",
        checkedVal: false
      }
    }
  }
</script>

<style scoped>

</style>
