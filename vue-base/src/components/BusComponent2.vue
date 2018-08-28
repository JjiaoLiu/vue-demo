<template>
  <section>component2{{msg}}</section>
</template>

<script>
  import {Bus} from './../bus'

  export default {
    name: "BusComponent2",
    data() {
      return {
        msg: ""
      }
    },
    created() {
      Bus.$on('sendMsg', content => {
        this.msg = content
      })
    }
  }
</script>

<style scoped>

</style>
