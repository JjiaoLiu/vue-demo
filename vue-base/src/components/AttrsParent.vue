<template>
  <div>
    out
    <AttrsChild :prop1="prop1" :prop2="prop2" />
  </div>
</template>

<script>
  import AttrsChild from './AttrsChild'

  export default {
    name: "AttrsParent",
    components: {
      AttrsChild
    },
    data() {
      return {
        prop1: 1,
        prop2: 2
      }
    }
  }
</script>

<style scoped>

</style>
