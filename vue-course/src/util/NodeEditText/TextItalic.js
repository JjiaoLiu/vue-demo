import _Quill from 'quill'

let Parchment = _Quill.import('parchment')

class ItalicStyleAttributor extends Parchment.Attributor.Style {
	value(domNode) {
		let value = super.value(domNode);
		return value;
	}

	add(node, value) {
		console.log(node)
		return true;
	}

	remove(node) {
		$(node).css('font-style', 'normal');
	}
}

let ItalicStyle = new ItalicStyleAttributor('italic', 'font-style', {
	scope: Parchment.Scope.INLINE,
	whitelist: [true, false]
});

export default ItalicStyle;
