const Promise = require('./myPromise');

const promise = new Promise((resolve, reject) => {
    // resolve(1)
    // setTimeout(() => {
        console.log('gogogo')
        resolve(2);
    // }, 1000)
});
/**
测试同步、异步调用
promise.then((value) => {
    console.log(value);
}, (error) => {
    console.log(error);
});
 */


// 链式调用测试用例
promise.then((value) => {
    console.log('value', value);
    const a = 1
    a = 2;
    return 2;
}).then((value) => {
    console.log('value resolved', value)
}, (error) => {
    console.log('error ', error);
});


