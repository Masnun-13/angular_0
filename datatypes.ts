let fname : string;
let lname : string;

fname = "John";
lname = "Doe";

let fname2 : string;
fname2 = fname.toUpperCase();

console.log(fname2, lname);

let age : number;

age = 26.5

let boo : boolean;

boo = (age>20)

console.log(boo)

let arr : Array<number>;

arr = [1,2,3,4,5]

let newarr : number[];

newarr = arr.filter((num)=>num>2)

console.log(newarr)

const enum Color {
    Red,
    Green,
    Blue
}

let c : Color = Color.Blue