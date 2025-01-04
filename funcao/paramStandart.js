function sum(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
    
}

console.log(sum())
console.log(sum(3))
console.log(sum(1, 2, 3))
console.log(sum(0, 0, 0)) // This is a problem because 0 is false in JS, so it will return 3 instead of 0

// Another strategy to solve the problem above is:
function sum2(a, b, c) {
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c; // This is the best way to do it after last way with ES2015
    return a + b + c;
    
}

console.log(sum2())
console.log(sum2(3))
console.log(sum2(1, 2, 3))
console.log(sum2(0, 0, 0))

// This is the best way to do the same thing with ES2015:
function sum3(a = 1, b = 1, c = 1) {
    return a + b + c;
    
}

console.log(sum3())
console.log(sum3(3))
console.log(sum3(1, 2, 3))
console.log(sum3(0, 0, 0))