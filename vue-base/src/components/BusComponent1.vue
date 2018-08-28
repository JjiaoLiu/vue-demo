<template>
  <button @click="sendMsg">toComponent1</button>
</template>

<script>
  import {Bus} from './../bus'

  export default {
    name: "BusComponent1",
    methods: {
      sendMsg() {
        Bus.$emit("sendMsg", 'lalala')
      }
    }
  }
</script>

<style scoped>

</style>
