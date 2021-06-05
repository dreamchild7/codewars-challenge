// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareConcat(number){
    let square = number.toString().split("")
    square = square.map(x => x * x);
    console.log(square);
    let conCat = square.join("");
    console.log(conCat)
}squareConcat(12963)


// Shorter Version
function squareDigits(num){
    return Number(num.toString().split("").map(val => (val * val)).join(""))
}console.log(squareDigits(12963))