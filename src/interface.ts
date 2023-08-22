interface Person {
  readonly name: string;

  //   readonly means that it can be only set once

  age: number;
  greet(letter: string): void;
}

// interface is only in ts
// you cant initialize the interface
let p1: Person;

p1 = {
  name: "mario",
  age: 12,
  greet(letter: string): void {
    console.log(letter);
  },
};
p1.greet("hello world");

// we can make a class implements the interface

interface Greeting {
  name: string;
  greet(letter: string): void;
}
class GreetingClass implements Greeting {
  // implementing forces you to implement the methods and properties of the interface
  constructor(public name: string) {}
  greet(l: string) {
    console.log("Greeting", this.name);
  }
}
let g1: Greeting;
g1 = new GreetingClass("lol");
g1.greet("hello");

interface Named {
  name: string;
}
interface Greeting_Named extends Named {
  // you either use extends in the interface or in class name implements interface1,interface2
  //   you can extend more than one interface seperated by comma unlike class only extend 1 class
  greet(l: string): void;
}

// structureing the fn based on interface and type =
type addFn = (a: number, b: number) => void;
interface addFn2 {
  (a: number, b: number): void;
}

let a1: addFn;
let a2: addFn;
a1 = (n1: number, n2: number) => {
  return n1 + n2;
};

a2 = (n1: number, n2: number) => {
  return n1 + n2;
};
console.log(a1(1, 2));
console.log(a2(1, 2));
type Greeting2 = {
  name: string;
  greet(letter: string): void;
};
interface Greeting3 {
  name?: string;
  greet?(letter: string): void;
  //   adding a ? after method or variable will make it optional / it doesnt have to be included
}
class GreetingClass2 implements Greeting2 {
  constructor(public name: string) {}
  greet(l: string) {
    console.log("Greeting", this.name + l);
  }
}
class GreetingClass3 implements Greeting3 {
  constructor(public name?: string) {}
  method() {
    console.log("GreetingClass3");
  }
}
let g2: Greeting2;
g2 = new GreetingClass2("lol2323");
g2.greet("hello22222");
// type can be used like interface but interface is recommended
let g3: Greeting3;
let g3Class = new GreetingClass3();
g3Class.method();
