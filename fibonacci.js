/*export function fibonacci (tall) {
if (tall===1)
    return 1
if (tall===2)
    return 1
return fibonacci(tall-2)+fibonacci(tall-1)
} */




export function fibonacci (tall) {
    let i = 1
    let j = 1
    let k = 1
    for(let a = 3; a <= tall; a++) {
        i = j 
        j = k 
        k = i+j
    }
    return k
}