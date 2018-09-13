<template>
  <div id="app">
    <div>
      <router-link to="/scrollEvent">scrollEvent</router-link>
      <router-link to="/directives">directives</router-link>
      <router-link to="/routerWithTarget_blank">routerWithTarget_blank</router-link>
    </div>
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
