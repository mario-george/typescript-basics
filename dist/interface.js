"use strict";
// interface is only in ts
// you cant initialize the interface
let p1;
p1 = {
    name: "mario",
    age: 12,
    greet(letter) {
        console.log(letter);
    },
};
p1.greet("hello world");
class GreetingClass {
    // implementing forces you to implement the methods and properties of the interface
    constructor(name) {
        this.name = name;
    }
    greet(l) {
        console.log("Greeting", this.name);
    }
}
let g1;
g1 = new GreetingClass("lol");
g1.greet("hello");
let a1;
let a2;
a1 = (n1, n2) => {
    return n1 + n2;
};
a2 = (n1, n2) => {
    return n1 + n2;
};
console.log(a1(1, 2));
console.log(a2(1, 2));
class GreetingClass2 {
    constructor(name) {
        this.name = name;
    }
    greet(l) {
        console.log("Greeting", this.name + l);
    }
}
class GreetingClass3 {
    constructor(name) {
        this.name = name;
    }
    method() {
        console.log("GreetingClass3");
    }
}
let g2;
g2 = new GreetingClass2("lol2323");
g2.greet("hello22222");
// type can be used like interface but interface is recommended
let g3;
let g3Class = new GreetingClass3();
g3Class.method();
//# sourceMappingURL=interface.js.map