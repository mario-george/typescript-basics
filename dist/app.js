"use strict";
/* enum Role {
  ADMIN,
  STAFF,
}
const person123: {
  name: string;
  age: number;
  hoppies: [number, string];
  male: boolean;
  role: Role.ADMIN;
} = {
  name: "Mario",
  age: 12,
  male: true,
  hoppies: [2, "football"],
  role: Role.ADMIN,
};

console.log(person123);

let anyType: any;
anyType = "string123123123";
console.log(anyType);

let items: string[];
items = ["array", "of", "string"];
console.log(items);

let items222: (string | number)[];
items222 = ["array", "of", "string", 12, "or", "number"];
console.log(items222);

// Type inferece if you init a variable it will auto detect types typing the types will be redundant

type combinedType = string | number;
type combinedDescription = "asNumber" | "asString";
function add(n1: combinedType, n2: combinedType, method: combinedDescription) {
  if (method === "asNumber") {
    console.log(+n1 + +n2);
  } else {
    console.log(n1.toString() + n2.toString());
  }
  return;
}
add(1, 2, "asNumber");
add(1, "22", "asNumber");
add(1, 2, "asString");
add(1, "anything", "asString");
// method is a literal type

// functions
function printRes(n: number) {
  console.log(n);
}

function addNum(n1: number, n2: number) {
  printRes(n1 + n2);
}

let fnPointer :Function = printRes;
// but does not specify the parameters
let fnPointer2 :(a:number,b:number)=> void= addNum;
// the parameters doesnt have to be the same as the function


console.log(fnPointer(23));
 */
/* // unknown type
let var1: unknown;
var1 = "lol";
let var2: string;
var2 = var1;
// this will cause error but any won't
// any
let var11: any;
var11 = "lol";
let var22: string;
var22 = var11;
 */
/*
function addNum(
  n1: number,
  n2: number,
  callbackFunction: (a: number) => void
): void {
  const result = callbackFunction(n1 + n2);
  console.log(result);
  // return n1 + n2;
}

addNum(1, 2, (r) => {
  console.log(r);
});
 */
// never happens when you throw or while(true)
const genError = (m, c) => {
    throw { message: m, errorCode: c };
    // return type never
};
genError("error", 404);
console.log(genError("error", 404));
let x = true;
let y;
if (typeof x === "string") {
    // typescript automatically checks for this condition otherwise it wont allow it
    y = x;
}
// how to watch the ts file instead of tsc app.ts and generating app.js
// tsc app.ts -w  OR tsc app.ts --watch
// for the entire project you can run tsc --init then tsc -w
//# sourceMappingURL=app.js.map