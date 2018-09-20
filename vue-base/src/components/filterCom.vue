<template>
  <div>{{a|num}}</div>
</template>

<script>
  export default {
    name: "filterCom",
    data() {
      return {
        a: 3
      }
    },
    filters: {
      num(v) {
        console.log(this);
        return v
      }
    }
  }
</script>

<style scoped>

</style>
