<template>
  <div>
    <component v-bind:is="currentView"></component>
    <button @click="changeComponent">切换动态组件</button>
  </div>
</template>

<script>

  export default {
    name: "ActiveComponent",
    components:{
      'views1': {
        template:'<div>views1</div>'
      },
      'views2': {
        template:'<div>views2</div>'
      },
    },
    data(){
      return{
        currentView:'views1'
      }
    },
    methods:{
      changeComponent(){
        this.currentView = 'views2'
      }
    }
  }
</script>

<style scoped>

</style>
