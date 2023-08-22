class staticClass {
  // static methods like Math it is a class you call .PI on it and dont need to create an instance just add static infront of the method
  static nameOfClass = "staticClass";

  static createEmployee(employeeName: string) {
    return { employeeName };
  }
  constructor(public name: string) {
    // this.nameOfClass = name // this wont work
    staticClass.nameOfClass = name; // this works
  }
  //   you cannot access static parts of the class in the non static parts of the same class
  //   you cannot use the this keyword but if you want you can call the class name  ,staticMethod/property
}
const e1 = staticClass.createEmployee("mario");

console.log(e1);
console.log(staticClass.nameOfClass);
abstract class AbstractClass {
  // you cannot instantiate the abstract class only classes that extends it
  abstract describe(this: { name: string }): void;
}
class childOfAbstractClass extends AbstractClass {
  // we need to implement the abstract method here
  describe(this: { name: string }): void {
    console.log("works");
  }
}
// private constructor

class PrivateConstructer {
  private static instance: PrivateConstructer;
  private constructor(private readonly id: string, array: string[]) {
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
