function syracuse(n, i) {
    if (i === 0) return n;
    // -------------------------------------Si pair
    if( (syracuse(n,i-1)) %2 === 0){
        return (syracuse(n,i-1))/2;
    }  // ----------------------------------Si impair
    else if ((syracuse(n,i-1))%2 !== 0){
        return (3*syracuse(n,i-1))+1;
    }
}

console.log(syracuse(15, 7))