<template>
  <section>
    <form action="#" @submit.prevent="submit">
      <input v-model="input" placeholder="edit me"> <br>
      <textarea v-model="textarea" placeholder="add multiple lines"></textarea><br>
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">{{ checked }}</label><br>
      <input type="checkbox" id="jack" value="沈巍" v-model="checkedNames">
      <label for="jack">沈巍</label>
      <input type="checkbox" id="john" value="朱一龙" v-model="checkedNames">
      <label for="john">朱一龙</label>
      <input type="checkbox" id="mike" value="罗浮生" v-model="checkedNames">
      <label for="mike">罗浮生</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span><br>
      <input type="radio" id="one" value="朱一龙" v-model="picked">
      <label for="one">朱一龙</label>
      <input type="radio" id="two" value="沈巍" v-model="picked">
      <label for="two">沈巍</label>
      <br>
      <span>Picked: {{ picked }}</span><br>
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </form>
  </section>
</template>

<script>
  export default {
    name: "Form",
    data(){
      return{
        input:'inputValue',
        textarea:'textareaValue',
        checked:true,
        checkedNames:[],
        picked:"",
        selected:""
      }
    },
    methods: {
      submit() {
      }
    }
  }
</script>

<style scoped>

</style>
