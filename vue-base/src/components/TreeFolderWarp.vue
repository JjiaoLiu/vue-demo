<template>
  <TreeFolderContent :childrens="childrens" class="left-nav"></TreeFolderContent>
</template>

<script>
  import TreeFolderContent from './TreeFolderContent'

  export default {
    name: "TreeFolderWarp",
    components: {TreeFolderContent},
    data() {
      return {
        childrens: [{
          name: '1',
          children: [{
            name: '1.1',
            children: []
          }]
        }, {
          name: '2',
          children: [{
            name: '2.1',
            children: []
          }]
        }, {
          name: '3'
        }]
      }
    }
  }
</script>

<style scoped>

</style>
