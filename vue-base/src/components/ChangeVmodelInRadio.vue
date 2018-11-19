<template>
  <div>
    <label :for="option.value" v-for="option in options" :key="option.value">
      <input
        :id="option.value"
        type="radio"
        name="radio"
        :checked="option.value === defaultValue"
        :value="option.value"
        @change="$emit('change', $event.target.value)"
      >
    </label>
  </div>

</template>

<script>
  export default {
    name: "ChangeVmodelInRadio",
    props: {'options': {default: []}, defaultValue: [String, Number]},
    model: {
      prop: 'value',
      event: 'change'
    },
  }
</script>

<style scoped>

</style>
