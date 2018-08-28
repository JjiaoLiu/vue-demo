<template>
  <section style="height: 300px;overflow: scroll" @scroll.passive="scroll">
    <div style="height: 3000px;background: saddlebrown"></div>
  </section>
</template>

<script>
  export default {
    name: "ScrollEvent",
    methods: {
      scroll() {
        console.log("1")
      }
    }
  }
</script>

<style scoped>

</style>
