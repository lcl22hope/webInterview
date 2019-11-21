const PENDING = "pending";
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';


class MyPromise {
    constructor(executor) {
        this.value = null;
        this.error = null;
        this.state = PENDING;

        const resolve = (value) => {
            this.state = FULFILLED;
            this.value = value; 
        }

        const reject = (error) => {
            this.state = REJECTED;
            this.error = error;
        }
        // 外层控制测试捕获
        try {
            executor(resolve, reject);
        } catch(error) {
            reject(error);
        }
    }
    
}

export default MyPromise;