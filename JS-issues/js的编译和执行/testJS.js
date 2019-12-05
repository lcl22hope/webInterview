
// showName()
// var showName = function() {
//     console.log(2)
// }
// // function showName() {
// //     console.log(1)
// // }


//变量提升和词法环境
// var的创建和初始化被提升，赋值不会被提升。
// let的创建被提升，初始化和赋值不会被提升。
// function的创建、初始化和赋值均会被提升。
// let myname= '极客时间'
// {
//   console.log(myname) 
//   let myname= '极客邦'
// }



// function bar() {
//     console.log(myName)
// }
// function foo() {
//     var myName = "极客邦"
//     bar()
// }
// var myName = "极客时间"
// foo()




function bar() {
    var myName = "极客世界"
    let test1 = 100
    if (1) {
        let myName = "Chrome浏览器"
        console.log(test)
    }
}
function foo() {
    var myName = "极客邦"
    let test = 2
    {
        let test = 3
        bar()
    }
}
var myName = "极客时间"
let myAge = 10
let test = 1
foo()