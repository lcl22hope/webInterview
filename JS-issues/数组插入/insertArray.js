
const left = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8']
const right = ['B1', 'B2', 'B3']

const arr = left.map((item, index) => {
    if(index%2 == 1) {
        let tmp = []
        tmp.push(left[index])
        tmp.push(right.shift())
        return [...tmp]
    } else {
        return left[index]
    }
})

console.log(arr.flat());