<template>
  <p>
    <span @click="show=!show">{{ folder.name }}</span>
    <TreeFolderContent :childrens="folder.children" v-show="show"/>
  </p>
</template>

<script>
  export default {
    name: "TreeFolder",
    props: ['folder'],
    components: {
      TreeFolderContent: () => import('./TreeFolderContent.vue')
    },
    data() {
      return {
        show: false
      }
    }
  }
</script>

<style scoped>
</style>
