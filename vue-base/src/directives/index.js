import Vue from 'vue'

export default (Vue) => {
  Vue.directive('focus', {
    inserted(el) {
      el.focus()
    }
  })
  Vue.directive('color-swatch', function (el, binding) {
    el.style.backgroundColor = binding.value
  })
  Vue.directive('demo', function (el, binding) {
    console.log(binding.value.color) // => "white"
    console.log(binding.value.text)  // => "hello!"
  })
}

