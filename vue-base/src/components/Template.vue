<template>
  <section>
    <template v-if="text">
      text1
      <input type="text" key="input1">
    </template>
    <template v-if="!text">
      text2
      <input type="text" key="input2">
    </template>
    <button @click="text = !text">切换</button>
    <template v-for="n in 3">
      {{n}}
    </template>
  </section>
</template>

<script>
  export default {
    name: "Template",
    data() {
      return {
        text: false
      }
    }
  }
</script>

<style scoped>

</style>
