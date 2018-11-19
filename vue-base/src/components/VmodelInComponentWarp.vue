<template>
  <section>
    <VmodelInComponent v-model="inputVal"/>
    {{inputVal}}
    <br>
    <ChangeVmodelInCheckbox :defaultValue="checkboxValue" :options="optionsCheckbox" v-model="checkboxValue"/>
    {{checkboxValue}}
    <br>
    <ChangeVmodelInRadio :defaultValue="radioValue" :options="optionsRadio" v-model="radioValue"/>
    {{radioValue}}
  </section>
</template>

<script>
  import VmodelInComponent from './VmodelInComponent'
  import ChangeVmodelInCheckbox from './ChangeVmodelInCheckbox'
  import ChangeVmodelInRadio from './ChangeVmodelInRadio'

  export default {
    name: "VmodelInComponentWarp",
    components: {
      VmodelInComponent,
      ChangeVmodelInCheckbox, ChangeVmodelInRadio
    },
    data() {
      return {
        inputVal: "大庆",
        checkboxVal: false,
        radioValue: '1',
        checkboxValue: ['d'],
        optionsRadio: [{value: '1'}, {value: "2"}],
        optionsCheckbox: ['a', 's', 'd']
      }
    }
  }
</script>

<style scoped>

</style>
