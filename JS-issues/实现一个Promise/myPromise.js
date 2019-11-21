const PENDING = "pending";
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';


class MyPromise {
    constructor(executor) {
        this.value = null;
        this.error = null;
        this.state = PENDING;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = (value) => {
            if (this.state == PENDING) {
                this.state = FULFILLED;
                this.value = value;
                this.onFulfilledCallbacks.forEach((onFulfillCallback) => {
                    onFulfillCallback(this.value);
                })
            }
        }

        const reject = (error) => {
            if (this.state == PENDING) {
                this.state = REJECTED;
                this.error = error;
                this.onRejectedCallbacks.forEach((onRejectedCallback) => {
                    onRejectedCallback(this.error);
                })
            }
        }
        // 外层控制测试捕获
        try {
            executor(resolve, reject);
        } catch(error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        
        if (this.state == FULFILLED) {
            onFulfilled(this.value);
        } else if (this.state == REJECTED){
            onRejected(this.error);
        } else {
            this.onFulfilledCallbacks.push(onFulfilled)
            this.onRejectedCallbacks.push(onRejected)
        }
    }
    
}

module.exports = MyPromise;