"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function WithTemplate(template, hookElementId) {
    // directive factory
    return function (constructor) {
        const p = new constructor();
        const name = p.name;
        const el = document.getElementById(hookElementId);
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
//# sourceMappingURL=replaceClassDecorator.js.map