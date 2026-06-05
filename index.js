function fibs(n) {

    if (n == 1) {
        return [0];
    } else if (n == 2) {
        return [0, 1]
    }

    else {
        let result = [0, 1];
        let current;
        for (let i = 2; n > i; i++) {
            current = result[result.length - 1] + result[result.length - 2];
            result.push(current);
        }
     return result;
    }

   
};



function fibsRec(n) {
    if (n < 0) return [];
    if (n == 1) return [0];
    if (n == 2) return [0, 1];
    
    let prevFib = fibsRec(n - 1);
    return [...prevFib, prevFib[prevFib.length - 2] + prevFib[prevFib.length - 1]];
    
}

console.log(fibsRec(8));

