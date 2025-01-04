let double = function (a) {
    return 2 * a
}

double = (a) => {
    return 2 * a
}

double = a => 2 * a // return implicit
console.log(double(Math.PI))

let hello = function () {
    return 'Hello!'
}

hello = () => 'Hello!' // there is no parameter
hello = _ => 'Hello!' // there is a parameter
console.log(hello()) 