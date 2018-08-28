<template>
  <div class="parentComponent">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "myComponentParent",
    props: ['active']
  }
</script>

<style scoped>

</style>
