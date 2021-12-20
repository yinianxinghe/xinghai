function Xbonacci(signature, n) {
    signature.forEach(item => { if (n == 0) signature.length = 0 }) || signature.forEach(item => { for (var i = 0; i < n - signature.length + i; i++)signature.push(signature.slice((i - signature.length)).reduce((prev, curr) => prev + curr)) });
    return signature;
}



Xbonacci([0,1],10);
console.log(Xbonacci([0,1],10));
console.log(Xbonacci([1,1],10));
console.log(Xbonacci([0,0,0,0,1],10));
console.log(Xbonacci([1,0,0,0,0,0,1],10));
console.log(Xbonacci([1,0,0,0,0,0,0,0,0,0], 20));
