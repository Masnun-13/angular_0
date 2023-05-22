function sub(num1: number, num2: number): number {
  return num1 - num2;
}

console.log(sub(2, 3));

function mul(num1: number, num2: number): number {
  return num1 * num2;
}

function add(num1: number, num2: number, ...num3: number[]): number {
  return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}

let numbers = [1, 2, 3, 4, 5];

console.log(add(2, 3, 4, 5, 6, 7, 8, 9, 10))

function getItems<Types>(items: Types[]) : Types[] {
    return new Array<Types>().concat(items);

let concatResult = getItems<number>([1, 2, 3, 4, 5]);
let concatString = getItems<string>(["a", "b", "c", "d,", "e"]);
}
