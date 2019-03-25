<template>
  <div>
    <quillEditor :options="options"/>
  </div>
</template>

<script>
	import 'quill/dist/quill.core.css'
	import 'quill/dist/quill.snow.css'
	import 'quill/dist/quill.bubble.css'
	import './../assets/quill.scss'

	import {quillEditor} from 'vue-quill-editor'

	// 将样式改为内联
	import _Quill from 'quill'

	var SizeStyle = _Quill.import('attributors/style/size');
	SizeStyle.whitelist = ['10px', '14px', '20px'];
	var AlignStyle = _Quill.import('attributors/style/align');
	AlignStyle.whitelist = ['right', 'center', 'justify'];
	var FontStyle = _Quill.import('attributors/style/font');
	FontStyle.whitelist = ['sans-serif', 'monospace', 'serif', 'Georgia', 'palatino-linotype', 'times-new-roman', 'Arial', 'Helvetica', 'arial-black',
		'comic-sans-ms', 'Charcoal', 'Impact', 'lucida-sans-unicode', 'lucida-grande', 'Tahoma', 'Geneva', 'trebuchet-ms', 'Verdana',
		'courier-new', 'lucida-console', 'Mirza', 'Roboto'];
	_Quill.register(SizeStyle, true);
	_Quill.register(AlignStyle, true);
	_Quill.register(FontStyle, true);

	var toolbarOptions = [
		['bold', 'italic', 'underline', 'strike'],        // toggled buttons
		['blockquote', 'code-block'],

		[{'header': 1}, {'header': 2}],               // custom button values
		[{'list': 'ordered'}, {'list': 'bullet'}],
		[{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
		[{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
		[{'direction': 'rtl'}],                         // text direction

		[{'size': ['10px', '14px', '20px']}],  // custom dropdown
		[{'header': [1, 2, 3, 4, 5, 6, false]}],

		[{'color': []}, {'background': []}],          // dropdown with defaults from theme
		[{'font': []}],
		[{'align': []}],
		['clean']                                         // remove formatting button
	];

	export default {
		name: "quill",
		components: {
			quillEditor
		},
		data() {
			return {
				content: "<p><pre>      一段文字</pre><p>",
				content2: "<p>quill例子</p>",
				options: {
					modules: {
						toolbar: toolbarOptions
					}
				}
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
    color: #666666;
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
