<template>
  <BaseLayout/>
</template>

<script>
  import LoadingComponent from './LoadingComponent'
  import ErrorComponent from './ErrorComponent'

  export default {
    name: "AsyncComponent",
    components: {
      'BaseLayout': () => import('./BaseLayout.vue')
    },
    loading: LoadingComponent,
    error: ErrorComponent,
    delay: 200,
    timeout: 3000
  }
</script>

<style scoped>

</style>
