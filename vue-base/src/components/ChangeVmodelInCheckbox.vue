<template>
  <div>
    <label :for="option" v-for="(option,index) in options" :key="option">
      <input
        :id="option"
        type="checkbox"
        name="checkbox"
        :checked="defaultValue.indexOf(option) > -1"
        :value="option"
        @change="changeCheckboxValue($event,index)"
      >
      {{index}}
    </label>
  </div>
</template>

<script>
  export default {
    name: "ChangeVmodelInCheckbox",
    props: {'defaultValue': Array, options: {default: []}},
    model: {
      prop: 'checked',
      event: 'change'
    },
    methods: {
      changeCheckboxValue(e, index) {
        let indexV = this.defaultValue.indexOf(e.target.value);
        if (indexV > -1) {
          let arr = Object.assign([], [...this.defaultValue]);
          arr.splice(indexV, 1);
          this.$emit('change', arr)
        } else {
          let arr = Object.assign([], [...this.defaultValue]);
          arr.splice(index, 0, e.target.value);
          this.$emit('change', arr)
        }
      }
    }

  }
</script>

<style scoped>

</style>
