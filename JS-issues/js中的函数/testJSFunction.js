// 首先，定义一个函数，将会作为构造函数
function Foo() {}

// 实例化出来一个对象
const obj = new Foo();

// 在 Object 的原型上定义一个属性：objProp
Object.prototype.objProp = '我是 Object 原型上的属性';

// 在 Function 的原型上定义一个属性：funcProp
Function.prototype.funcProp = '我是 Function 原型上的属性';

// 你预想一下，以下这些分别会输出什么？
console.log(obj.objProp) // ? '我是 Object 原型上的属性';
console.log(obj.funcProp) // ? undefined

console.log('*************')
console.log(obj.prototype)
console.log(obj.__proto__)
console.log(Foo.prototype)
console.log(Foo.prototype.__proto__)
console.log(Object.prototype)
console.log(Object.__proto__)
console.log(Function.prototype)
console.log('*************')
console.log(Foo.objProp) // ? undefined error => 我是 Object 原型上的属性
console.log(Foo.funcProp) // ? '我是 Function 原型上的属性';

console.log(Object.objProp) // ? '我是 Object 原型上的属性';
console.log(Object.funcProp) // ? undefined => 我是 Function 原型上的属性

console.log(Function.objProp) // ? undefined error => 我是 Object 原型上的属性
console.log(Function.funcProp) // ? '我是 Function 原型上的属性';

console.log(Array.objProp) // ? '我是 Object 原型上的属性';
console.log(Array.funcProp) // ? undefined error => 我是 Function 原型上的属性

