let compareWithThis = function (param) {
    console.log(this === param)
}

compareWithThis(global) // true

const obj = {}
compareWithThis = compareWithThis.bind(obj)
compareWithThis(global) // false
compareWithThis(obj) // true

let compareWithThisArrow = param => console.log(this === param)
compareWithThisArrow(global) // false
compareWithThisArrow(module.exports) // true

compareWithThisArrow = compareWithThisArrow.bind(obj)
compareWithThisArrow(obj) // false

// Arrow functions are more powerful than bind, because they bind the context 
// in which they were written, and not the context in which
