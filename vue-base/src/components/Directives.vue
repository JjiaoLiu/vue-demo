<template>
  <div>
    <input type="text" v-focus>
    <p v-color-swatch="red">lalalal</p>
    <div v-demo="{ color: 'white', text: 'hello!' }"></div>
  </div>
</template>

<script>
  export default {
    name: "Directives",
    data() {
      return {
        red: "#f60"
      }
    }
  }
</script>

<style scoped>

</style>
