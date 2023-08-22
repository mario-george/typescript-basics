// property decorators take 2 arg target which is constructor and propName
// runs when the class is defined
function Log(target: any, propName: string) {
  console.log("property Descriptor");
  console.log(target, propName);
}
function Log2(target: any, name: string, desc: PropertyDescriptor) {
  console.log("Accesor Descriptor");

  console.log(target, name);
  console.log(desc);
}
function Log3(target: any, name: string, desc: PropertyDescriptor) {
  console.log("Method Descriptor");

  console.log(target, name);
  console.log(desc);
}
function Log4(target: any, name: string, positon: number) {
    console.log("parameter Descriptor");
  
    console.log(target);
    console.log(name);
    console.log(positon);
  }
class Product {
  @Log
  public title: string;
  constructor(title: string, private _price: number) {
    this.title = title;
  }
  @Log3
  getProductWithtax( @Log4 val: number) {
    return this._price + val;
  }
  @Log2
  set priceValue(val: number) {
    this._price = val;
  }
}

let var1 :any[]
var1 = [12]
console.log(var1)
