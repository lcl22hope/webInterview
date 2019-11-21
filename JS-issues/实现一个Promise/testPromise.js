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




