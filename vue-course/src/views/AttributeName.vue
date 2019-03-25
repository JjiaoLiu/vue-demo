<template>
  <div>
    <a v-bind:[foo+bar]="value"> .................. </a>
  </div>
</template>

<script>
	export default {
		name: "attributeName",
		data() {
			return {
				bar: "aaaaa",
				foo: "asasd",
				value: "vavava"
			}
		}
	}
</script>

<style scoped>

</style>
