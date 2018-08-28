<template>
  <section>
    <input type="text" v-model="person.age">
    {{type}}
  </section>
</template>

<script>
  export default {
    name: "Watcher",
    data() {
      return {
        person: {age: 18},
        type: ""
      }
    },
    watch: {
      person: {
        handler(newV, oldV) {
          if (newV.age > 0 && newV.age <= 18) {
            this.type = 'child'
          }
          if (newV.age > 18) {
            this.type = 'young'
          }
        },
        immediate: true,
        deep: true
      }
    }
  }
</script>

<style scoped>

</style>
