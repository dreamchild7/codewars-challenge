// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

function sumBinary(a, b){
    let sum = a + b;
    return (sum >>> 0).toString(2)
}console.log(sumBinary(1, 2))


// better code

function addBinary(a,b){
    return(a + b).toString(2)
}console.log(addBinary(1, 2))