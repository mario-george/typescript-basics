"use strict";
class staticClass {
    static createEmployee(employeeName) {
        return { employeeName };
    }
    constructor(name) {
        this.name = name;
        // this.nameOfClass = name // this wont work
        staticClass.nameOfClass = name; // this works
    }
}
// static methods like Math it is a class you call .PI on it and dont need to create an instance just add static infront of the method
staticClass.nameOfClass = "staticClass";
const e1 = staticClass.createEmployee("mario");
console.log(e1);
console.log(staticClass.nameOfClass);
class AbstractClass {
}
class childOfAbstractClass extends AbstractClass {
    // we need to implement the abstract method here
    describe() {
        console.log("works");
    }
}
// private constructor
class PrivateConstructer {
    constructor(id, array) {
        this.id = id;
        // private constructor will make this class cannt  be instantiated using the  new keyword but you can use the static to help with this
    }
    static getInstance() {
        // we can now use the this to refer to a static method since they are both static
        if (this.instance) {
            // or PrivateConstructor.instance
            return this.instance;
        }
        const instance = new PrivateConstructer("id1", []);
        this.instance = instance;
        return this.instance;
        // this will only be one instance
    }
}
const i1 = PrivateConstructer.getInstance();
const i2 = PrivateConstructer.getInstance();
// we cant call the constructor since it is private
// const i3 = new PrivateConstructer("i1", []); //error
console.log(i1);
console.log(i2);
console.log(i1 === i2);
//# sourceMappingURL=staticMethodsAndProperties.js.map