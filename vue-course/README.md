Quill.vue
文本编辑器

属性值拼接  <div v-bind:id="'list-' + id"></div>

模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如 Math 和 Date 。
你不应该在模板表达式中试图访问用户定义的全局变量。
可以将用户定义的全局变量放入data中，这样就能在模版表达式中使用。

AttributeName.vue
2.6.0开始，可以动态的设定属性名和事件名。
动态参数预期会求出一个字符串，异常情况下值为 null。
这个特殊的 null 值可以被显性地用于移除绑定。任何其它非字符串类型的值都将会触发一个警告。
动态参数表达式有一些语法约束，因为某些字符，例如空格和引号，放在 HTML 特性名里是无效的。
变通的办法是使用没有空格或引号的表达式，或用计算属性替代这种复杂表达式。

Computed.vue
计算属性默认只有getter
computed(){
  message(){
    return "string";
  }
}·
也可以设置setter
·fullName: {
   // getter
   get: function () {
      return this.firstName + ' ' + this.lastName
   },
   // setter
   set: function (newValue) {
     var names = newValue.split(' ')
     this.firstName = names[0]
        this.lastName = names[names.length - 1]
   }
 }·
现在再运行 vm.fullName = 'John Doe' 时，setter 会被调用，vm.firstName 和 vm.lastName 也会相应地被更新。


侦听器
当需要在数据变化时执行 *异步*或开销较大的操作 时，这个方式是最有用的。
`a: {
  handler: function (val, oldVal) { /* ... */ },
  deep: true, // 深度监控
  immediate:true  // 侦听器初始化之后立即调用
},
// 监控对象属性
'b.c':{
  ......
}`

v-if渲染
在template元素上使用v-if条件渲染；
添加唯一的key属性避免重复使用元素；
在切换过程中条件块中的事件监听器和子组件适当地被销毁和重建；
如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块；
当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级，
·
<li v-for="todo in todos" v-if="!todo.isComplete">
   {{ todo }}
</li>
·
或是可以这样代替v-if：
·
<li v-for="n in even(numbers)">{{ n }}</li>
data: {
  numbers: [ 1, 2, 3, 4, 5 ]
},
methods: {
  even: function (numbers) {
    return numbers.filter(function (number) {
      return number % 2 === 0
    })
  }
}
·
或使用computed新建属性过滤出v-if为真值的数据

v-show渲染
不支持template和v-else；
不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

v-for
支持template
