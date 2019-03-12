<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    created() {
    },
    watch: {
      $route: {
        handler(newV, oldV) {
        },
        deep: true,
        immediate: true
      }
    }
  }
</script>

<style>

</style>
