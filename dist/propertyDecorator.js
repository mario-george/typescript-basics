"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// property decorators take 2 arg target which is constructor and propName
// runs when the class is defined
function Log(target, propName) {
    console.log("property Descriptor");
    console.log(target, propName);
}
function Log2(target, name, desc) {
    console.log("Accesor Descriptor");
    console.log(target, name);
    console.log(desc);
}
function Log3(target, name, desc) {
    console.log("Method Descriptor");
    console.log(target, name);
    console.log(desc);
}
function Log4(target, name, positon) {
    console.log("parameter Descriptor");
    console.log(target);
    console.log(name);
    console.log(positon);
}
class Product {
    constructor(title, _price) {
        this._price = _price;
        this.title = title;
    }
    getProductWithtax(val) {
        return this._price + val;
    }
    set priceValue(val) {
        this._price = val;
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getProductWithtax", null);
__decorate([
    Log2
], Product.prototype, "priceValue", null);
let var1;
var1 = [12];
console.log(var1);
//# sourceMappingURL=propertyDecorator.js.map