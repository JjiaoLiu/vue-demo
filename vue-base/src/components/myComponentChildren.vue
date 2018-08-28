<template>
  <div :class="{'active':active}">
    <span v-for="(val,key,index) in step" :key="index">
      {{val}}-{{key}}
    </span>
  </div>
</template>

<script>
  export default {
    name: "myComponentChildren",
    props: ['step', 'active']
  }
</script>

<style scoped>
  .active {
    color: red;
  }
</style>
