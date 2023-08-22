"use strict";
// you need to set expermintal decorators to true in typescript config
// most decorators start with a capital character we can used decorator on classes and it get the constructor as argument so of type Function
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @NameOfFunction before the class
// it run when the class in defined
function Logger(constructor) {
    console.log('logging');
    console.log(constructor);
}
let Person22 = class Person22 {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return console.log(this.name);
    }
};
Person22 = __decorate([
    Logger
], Person22);
let person22 = new Person22("Mario");
person22.getName();
// Decorator factories
function LoggerDecorator(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
// we execute function that returns a decorator function
let Person222 = class Person222 {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return console.log(this.name);
    }
};
Person222 = __decorate([
    LoggerDecorator("my logging text")
], Person222);
let person222 = new Person222("Mario");
person222.getName();
function WithTemplate(template, hookElementId) {
    // directive factory
    return function (constructor) {
        const p = new constructor();
        const name = p.name;
        const el = document.getElementById(hookElementId);
        /*     if(el){
                el.innerHTML=template
            } */
        if (el) {
            el.innerHTML = template;
            el.querySelector('h1').textContent = name;
        }
    };
}
function LoggingText(constructor) {
    console.log("Logging first but directives is from bottom up");
    return console.log(constructor);
}
let PersonTest = class PersonTest {
    constructor() {
        this.name = 'Mario';
    }
    getName() {
        return this.name;
    }
};
PersonTest = __decorate([
    LoggingText,
    WithTemplate("<h1>This is working</h1>", "app-hook-id")
], PersonTest);
//# sourceMappingURL=experimentalDecorators.js.map