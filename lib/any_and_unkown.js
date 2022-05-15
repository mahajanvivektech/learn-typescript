"use strict";
/** Both are universal super types means all types of variables can be assigned to
 * something that is any/unknown
 */
let exampleAny;
let exampleUnknown;
// any
// Gives you complete freedom to do anything you want to do
// with the variable without having to worry about ts adding
// its checks in the mix
exampleAny = 123;
exampleAny = 'Hello';
// unknown
exampleUnknown = 123;
exampleUnknown = 'World';
// any
exampleAny.allows.anything.you.can.imagine();
// can be assigned to well defined type
let anySetBoolean = exampleAny;
// unknown
// can still accept anything into an unknown
// but can't be used in an unsafe manner
// can't willy nilly access any properties
// exampleUnknown.trim();
// can't assign it to a well defined type without further checks
// let unknownSetBoolean: boolean = exampleUnknown;
// unknown can be taught of as more type safe version of any
if (typeof exampleUnknown === 'string') {
    exampleUnknown.trim();
}
if (typeof exampleUnknown === 'boolean') {
    let unknownSetBoolean = exampleUnknown;
}
