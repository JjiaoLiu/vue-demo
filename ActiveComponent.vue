<template>
  <div>
    <h1>hello</h1>
    <views2/>
  </div>
</template>
<script>

	export default {
		name: 'ActiveComponent',
		components: {
			'views1': {
				render: function (createElement) {
					return createElement('div','view1')
				}
			},
			'views2': {
				template: '<div>views2</div>'
			},
		},
		data() {
			return {
				currentView: 'views1'
			}
		},
		methods: {
			changeComponent() {
				this.currentView = 'views2'
			}
		},
		// render:function (createElement) {
		//  return createElement()
		// }
	}
</script>

<style scoped>

</style>
