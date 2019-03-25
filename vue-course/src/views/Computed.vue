<template>
  <div>
    <button @click="num =num + 1">++++++++++++++++</button>
    {{num}}
    {{message}}
  </div>
</template>

<script>
	export default {
		name: "computed",
		data() {
			return {num: 1}
		},
		computed: {
			message() {
				return Date.now()
			}
		}
	}
</script>

<style scoped>

</style>
