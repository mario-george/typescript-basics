function WithTemplate(template: string, hookElementId: string) {
  // directive factory
  //   this now only runs if instintiated the class
  // we replaced the original class that this directive is placed on
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(...args: any[]) {
        super();
        const name = this.name;
        const el = document.getElementById(hookElementId);

        if (el) {
          el.innerHTML = template;
          el.querySelector("h1")!.textContent = name;
        }
      }
    };
  };
}
function LoggingText2(constructor: Function) {
  console.log("Logging first but directives is from bottom up");
  return console.log(constructor);
}

function PerserveThis(target: any, name: string, desc: PropertyDescriptor) {
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

@LoggingText
@WithTemplate("<h1>This is working</h1>", "app-hook-id2")
class PersonTest2 {
  name = "Mario";
  @PerserveThis
  getName() {
    console.log(this.name);
    console.log("asdasd");
    // return this.name;
  }
}
// only work when instanitated
const p2 = new PersonTest2();
const print2 = document.getElementById("print")!;

// print2.addEventListener("click", p2.getName.bind(p2));
print2.addEventListener("click", p2.getName);
// event listener when calling the method of the instance this will refer to the event not the obj/instance
// to solve this either bind the instance
// adjusting the directive and adding the get method this in it will always refer to the obj
