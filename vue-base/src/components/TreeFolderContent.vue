<template>
  <ul>
    <li v-for="child in childrens">
      <TreeFolder v-if="child.children" :folder="child"/>
      <span v-else>{{ child.name }}</span>
    </li>
  </ul>
</template>

<script>
  import TreeFolder from './TreeFolder'

  export default {
    name: "TreeFolderContent",
    props: ['childrens'],
    components: {
      TreeFolder
    },
  }
</script>

<style scoped>

</style>
