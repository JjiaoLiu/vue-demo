<template>
  <div class="input">
    <input type="text" :value="value" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
  export default {
    name: "VmodelInComponent",
    props:['value'],
  }
</script>

<style scoped>

</style>
