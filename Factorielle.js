// function factorielle(x) {
//     let number = 1;
//     for (let i = 1; i <= x; i++)
//         number = number * i;
//     return number;
// }

function factorial(x) {
    if (x === 0) return 1;
    else return x * factorial(x - 1);
}


console.log(factorial(5))