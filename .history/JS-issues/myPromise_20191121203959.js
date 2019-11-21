
class MyPromise {
    constructor(executor) {
        this.value = null
        this.error = null

        const resolve = (value) => {
            this.value = value; 
        }

        const reject = (error) => {
            this.error = error;
        }

        try {
            
        } catch(error) {
            reject(error)
        }
    }
    
}