<template>
  <SyncInComponent :show.sync="show"/>
</template>

<script>
  import SyncInComponent from './SyncInComponent'

  export default {
    name: "SyncInComponentWarp",
    data() {
      return {
        show: true
      }
    },
    components: {
      SyncInComponent
    }
  }
</script>

<style scoped>

</style>
