<template>
  <section>
    <button @click.once="addToArray">addToArray</button>
    {{array}}
    <button @click.once="addToObject">addToObject</button>
    {{object}}
  </section>
</template>

<script>
  export default {
    name: "ChangeArrayOrObject",
    data() {
      return {
        array: ['a', 'b', 'c'],
        object: {
          lastName: 'jiaojiao'
        }

      }
    },
    methods: {
      addToArray() {
        this.$set(this.array, this.array.length, 'd');
        this.array.splice(this.array.length, 1, 'e');
      },
      addToObject() {
        this.$set(this.object, 'firstName', 'liu');
        Object.assign(this.object, {age: 18})
      }
    }
  }
</script>

<style scoped>

</style>
