
class MyPromise {
    constructor(executor) {
        this.value = null
        this.error = null

        const resolve = (value) => {
            this.value = value; 
        }

        const reject = (value) => {
            this.error
        }
    }
}