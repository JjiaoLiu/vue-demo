<template>
  <section>
    <div v-for="(item,index) in arrObject" :key="index">
      <div v-for="(value,key,index) in item" :key="index">
        {{value}} - {{index}} - {{key}}
      </div>
    </div>

  </section>
</template>

<script>
  export default {
    name: "ForIn",
    data() {
      return {
        arrObject: [
          {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
          }, {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
