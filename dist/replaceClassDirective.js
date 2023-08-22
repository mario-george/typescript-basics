"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function WithTemplate(template, hookElementId) {
    // directive factory
    //   this now only runs if instintiated the class
    // we replaced the original class that this directive is placed on
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(...args) {
                super();
                const name = this.name;
                const el = document.getElementById(hookElementId);
                if (el) {
                    el.innerHTML = template;
                    el.querySelector("h1").textContent = name;
                }
            }
        };
    };
}
function LoggingText2(constructor) {
    console.log("Logging first but directives is from bottom up");
    return console.log(constructor);
}
function PerserveThis(target, name, desc) {
    let origninalMethod = desc.value;
    let adjDesc = {
        enumrable: false,
        configurable: true,
        // get method is new here to the desc
        get() {
            let binded = origninalMethod.bind(this);
            return binded;
        },
    };
    return adjDesc;
}
let PersonTest2 = class PersonTest2 {
    constructor() {
        this.name = "Mario";
    }
    getName() {
        console.log(this.name);
        console.log("asdasd");
        // return this.name;
    }
};
__decorate([
    PerserveThis
], PersonTest2.prototype, "getName", null);
PersonTest2 = __decorate([
    LoggingText,
    WithTemplate("<h1>This is working</h1>", "app-hook-id2")
], PersonTest2);
// only work when instanitated
const p2 = new PersonTest2();
const print2 = document.getElementById("print");
// print2.addEventListener("click", p2.getName.bind(p2));
print2.addEventListener("click", p2.getName);
// event listener when calling the method of the instance this will refer to the event not the obj/instance
// to solve this either bind the instance
// adjusting the directive and adding the get method this in it will always refer to the obj
//# sourceMappingURL=replaceClassDirective.js.map