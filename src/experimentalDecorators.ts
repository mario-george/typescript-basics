// you need to set expermintal decorators to true in typescript config
// most decorators start with a capital character we can used decorator on classes and it get the constructor as argument so of type Function

// @NameOfFunction before the class
// it run when the class in defined
function Logger(constructor :Function) {
    console.log('logging')
console.log(constructor)
}
@Logger
class Person22 {
  constructor(public name: string) {}
  getName() {
    return console.log(this.name);
  }
}
let person22= new Person22("Mario");
person22.getName();



// Decorator factories
function LoggerDecorator(logString: string) {
return function(constructor:Function){
    console.log(logString);
console.log(constructor)
}
}
// we execute function that returns a decorator function
@LoggerDecorator("my logging text")
class Person222 {
  constructor(public name: string) {}
  getName() {
    return console.log(this.name);
  }
}
let person222= new Person222("Mario");
person222.getName();



function WithTemplate(template:string,hookElementId:string){
// directive factory
    return function(constructor:any){
    const p=new constructor()
    const name = p.name
    const el=document.getElementById(hookElementId)
/*     if(el){
        el.innerHTML=template
    } */
    if(el){
        el.innerHTML=template
        el.querySelector('h1')!.textContent=name

    }
}
}
function LoggingText(constructor:Function){
console.log("Logging first but directives is from bottom up")
return console.log(constructor)
}

@LoggingText
@WithTemplate("<h1>This is working</h1>","app-hook-id")
class PersonTest{
    name='Mario'
    getName(){
        return this.name
    }
}