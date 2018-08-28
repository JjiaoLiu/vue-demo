<template>
  <div @click="troggle">
    sync {{show}}
  </div>
</template>

<script>
  export default {
    name: "SyncInComponent",
    props: ['show'],
    methods: {
      troggle() {
        this.$emit('update:show', !this.show)
      }
    }
  }
</script>

<style scoped>

</style>
