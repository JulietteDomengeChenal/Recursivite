function fibonacci(x) {
    if (x === 0) return 0;
    else if (x === 1) return 1;
    else return fibonacci(x - 2) + fibonacci(x - 1);
}

console.log(fibonacci(7))