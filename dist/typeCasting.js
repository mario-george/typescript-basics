"use strict";
// const userInput = <HTMLInputElement>document.getElementById("userInput")!;
// const userInput = document.getElementById("userInput")! as HTMLInputElement;
const userInput = document.getElementById("userInput");
// adding exclaimationn mark meanns it wont yield null
const paragraph = document.querySelector("p");
// gets the first paragraph element in the html file
// editing on parargraph or userInput will give an error 2 solution first add ! after document.getElementById()! second if(var){}
if (paragraph) {
    paragraph.innerText = "edited paragraph Text!";
}
// userInput.value = "edited input value";
// third way of type casting
// (userInput as HTMLInputElement).value = "edited input value";
userInput.value = "edited input value";
let errorBag;
errorBag = {
    username: "Username must start with a capital character",
    email: "email shouldnt be empty",
    //   1:'asdsa' valid
    // 1:2 notvalid
};
function add(a, b) {
    if (typeof a == "string" || typeof b == "string") {
        return a.toString() + b.toString();
    }
    else {
        return +a + +b;
    }
}
const result = add("Mario", " George");
const splitedResult = result.split(" ");
console.log(splitedResult);
// Generic Types
let a11;
let a22;
// the same
function merge(objectA, objectB) {
    let target = {};
    // shallow copy Object.assign
    return Object.assign(target, objectA, objectB);
}
const target = merge({ name: "mario" }, { age: 23 });
// the combined types has combined types
/*
With Types (Type Intersection):
The & operator is used to create a new type by combining multiple types. The resulting type will have all the properties and methods of the constituent types.

typescript
Copy code
type TypeA = { propA: number };
type TypeB = { propB: string };

type CombinedType = TypeA & TypeB;
With Interfaces (Interface Intersection):
The & operator is used to define an interface that represents the common properties and methods of the intersected interfaces. Instances that implement the intersection interface must satisfy the properties and methods of both interfaces.

typescript
Copy code
interface InterfaceA {
  propA: number;
}

interface InterfaceB {
  propB: string;
}

interface CombinedInterface extends InterfaceA, InterfaceB {}
In both cases, the & operator allows you to create a new construct that combines the attributes and methods from multiple sources, whether they are types or interfaces. */
let assign = {};
let assignTest = Object.assign(assign, { name: "12345" }, 30);
console.log(assignTest);
// this fails silently so we need to tell the function to extends object
function merge2(objectA, objectB) {
    let target = {};
    // shallow copy Object.assign
    return Object.assign(target, objectA, objectB);
}
const target2 = merge2({ name: "mario" }, { age: 23 });
function countAndDescripe(el) {
    // if we would call el.length it would guarentee that it has that property
    // thats why we made interface and extends it basoed on it
    let description = 'Got no Value';
    if (el.length !== 0) {
        description = "Got " + el.length + " Values";
    }
    return [el, description];
}
console.log(countAndDescripe('Hello'));
console.log(countAndDescripe([]));
// console.log(countAndDescripe(12)) number gives error
// keyof constraint
function extractKeyFromObject(obj, key) {
    return obj[key];
}
console.log(extractKeyFromObject({ name: "Mario" }, "name"));
// error
// console.log(extractKeyFromObject({name:"Mario"},"age"))
//# sourceMappingURL=typeCasting.js.map