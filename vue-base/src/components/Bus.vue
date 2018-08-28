<template>
  <section>
    <BusComponent1/>
    <BusComponent2/>
  </section>
</template>

<script>
  import BusComponent1 from './BusComponent1'
  import BusComponent2 from './BusComponent2'

  export default {
    name: "Bus",
    components: {
      BusComponent1, BusComponent2
    }
  }
</script>

<style scoped>

</style>
