function add(a: number, b: number): number {
  return a + b;
}

function log(message: string): void {
  console.log('LOG:', message)
}

// rest parameter example
function sum(...values: number[]) {
  return values.reduce((previous, current) => {
    return previous + current;
  })
}

// first class functions
// store functions in a js variable
// type alias
type Add = (a: number, b: number) => number;
let addFunction: Add;

addFunction = function (a: number, b: number): number {
  return a + b;
}