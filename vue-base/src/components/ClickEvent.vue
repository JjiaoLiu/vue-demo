<template>
  <section>
    <div @click.capture="outClick" class="out">
      out
      <div @click="inClick" class="in">in</div>
    </div>
    <div @click.self="outClick" class="out">
      out
      <div @click="inClick" class="in">in</div>
    </div>
    <button v-on="{ mousedown: mousedown, mouseup: mouseup }">点击事件对象写法</button>
  </section>
</template>

<script>
  export default {
    name: "ClickEvent",
    methods: {
      outClick() {
        console.log("out")
      },
      inClick() {
        console.log("in")
      },
      mousedown() {
        console.log('mousedown')
      },
      mouseup(){
        console.log('mouseup')
      }
    }
  }
</script>

<style scoped>
  .out {
    height: 100px;
    background: #ffffff;
  }

  .in {
    height: 50px;
    background: aliceblue;
  }
</style>
