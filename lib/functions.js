"use strict";
function add(a, b) {
    return a + b;
}
function log(message) {
    console.log('LOG:', message);
}
// rest parameter example
function sum(...values) {
    return values.reduce((previous, current) => {
        return previous + current;
    });
}
let addFunction;
addFunction = function (a, b) {
    return a + b;
};
