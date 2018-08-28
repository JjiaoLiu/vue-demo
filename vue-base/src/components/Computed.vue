<template>
  <section>
    <input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
    <input type="text" v-model="fullName">
  </section>
</template>

<script>
  export default {
    name: "Computed",
    data() {
      return {
        firstName: "liu",
        lastName: "jiaojiao",
      }
    },
    computed: {
      fullName: {
        get() {
          return this.firstName + "-" + this.lastName
        },
        set(newValue) {
          var names = newValue.split("-")
          this.firstName = names[0]
          this.lastName = names[1]
        }
      }
    }
  }
</script>

<style scoped>

</style>
