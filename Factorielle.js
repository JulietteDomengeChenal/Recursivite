function Factorielle(x) {
    let number = 1;
    for (let i = 1; i <= x; i++)
        number = number * i;
    return number;
}

console.log(Factorielle(7))