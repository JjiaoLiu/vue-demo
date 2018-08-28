<template>
  <div>
    <slot :named="scopedValue.name"></slot>
  </div>
</template>

<script>
  export default {
    name: "ScopedSlot",
    props: ['scopedValue'],
  }
</script>

<style scoped>

</style>
