<template>
  <section>
    {{miniOption}}
    <input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
    <input type="text" v-model="fullName">
    <button @click="changeOption">修改option</button>
    <button @click="changeMini">修改mini</button>
  </section>
</template>

<script>
  export default {
    name: "Computed",
    data() {
      return {
        firstName: "liu",
        lastName: "jiaojiao",
        option: [{value: 1}, {value: 2}, {value: 3}, {value: 4}],
        optionMini: [1, 2, 3, 4, 5]
      }
    },
    methods: {
      changeOption() {
        this.option.push({value: 5})
      },
      changeMini() {
        this.optionMini.splice(2, 1)
      }
    },
    computed: {
      fullName: {
        get() {
          return this.firstName + "-" + this.lastName
        },
        set(newValue) {
          let names = newValue.split("-");
          this.firstName = names[0];
          this.lastName = names[1]
        }
      },
      miniOption() {
        return this.option.filter(f => {
          return this.optionMini.includes(f.value)
        })
      }
    }
  }
</script>

<style scoped>

</style>
