<template>
  <div>
    <textarea name="a" id="a" cols="30" rows="10" v-model="content"/>
    <div v-html="content"></div>
  </div>
</template>

<script>
	export default {
		name: "quill",
		data() {
			return {
				content: "<p><pre>      一段文字</pre><p>"
			}
		}
	}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font: 14px/1.414 -apple-system, "PingFang SC", "Microsoft Sans Serif";
    color: #ffffff;
    text-align: left;
  }

  h1, h2 {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    font-weight: normal;
  }

  h1 {
    font-size: 18px;
    text-align: center;
  }

  h2 {
    font-size: 16px;
  }

  p {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    white-space: pre;
  }

</style>
