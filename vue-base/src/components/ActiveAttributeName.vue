<template>
  <a :[href]="string">链接</a>
</template>

<script>
  export default {
    name: 'ActiveAttributeName',
    data () {
      return {
        href: 'href',
        string: 'http://www.baidu.com'
      }
    }
  }
</script>

<style scoped>

</style>
