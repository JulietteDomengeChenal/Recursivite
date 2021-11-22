function pgcd(a, b) {
    if (b === 0){
        return a
    }
    if (b !== 0){
        let r = a%b
        return pgcd(b, r)
    }
}

console.log(pgcd(30, 45))
