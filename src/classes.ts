class Department {
  // name: string;
  // private employees: string[] = [];
  protected employees: string[] = [];
  // public is the default the property can be accessed from outside the class
  // private only methods can access the class property
  // protected means that this property wont be accessible from outside the class but can be from the classes that extends this class
  // public name:string ;

  constructor(private id: string, public name: string) {
    // this.name = n;
    // this will refer to the instance created from this class
    // class acts as a blueprint for objects/instances real world entity
  }
  printInfo() {
    console.log("Department name is : " + this.name);
  }

  addEmployee(employee: string) {
    // validation
    this.employees.push(employee);
  }
  printEmployee() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
  printInfo2(this: Department) {
    // this will refert to the calling instance
    // it needs to be of type Department object which has a propery name and the same methods
    console.log("Department name is : " + this.name);
  }
}

const inst = new Department("id1", "Dep1");
inst.printInfo();
// const inst2 = {
//   name: "Dep2",
//   printInfo2: inst.printInfo2,
//   printInfo: inst.printInfo,
// };
// inst2.printInfo2();

class AccountingDepartment extends Department {
  constructor(id: string, public reports: string[]) {
    super(id, "reports");
  }
  addEmployee(employee: string): void {
    // this overwrite the base method with the same name
    if (employee === "Mario") {
      return;
    }
    this.employees.push(employee);
  }
  addReport(report: string): void {
    this.reports.push(report);
  }
  printReport() {
    console.log(this.reports);
  }
}
class ITDepartmanent extends Department {
  // class inherited from Department it gets all the methods and properties of the base class

  private lastAdmin: string;
  constructor(public name: string, public admins: string[]) {
    super("itDep", name);
    this.lastAdmin = admins[admins.length - 1];
    // call the base class constructor and pass the need arguments
    // you cant call this keyword unless you exec super() method
  }
  // setter set and getters get called to modify a property can be the same method name
  // you call set like this
  set mostRecentAdmin(value: string) {
    // setter must get a value
    // setter is called instance.setter= 'value
    this.lastAdmin = value;
  }
  get mostRecentAdmin() {
    // getter must return something
    // getter is called by instance.getter you dont execute it
    if (this.lastAdmin) {
      return this.lastAdmin;
    }
    throw new Error("most recent admin is not found");
  }
  addAdmin(admin: string): void {
    this.admins.push(admin);
    this.lastAdmin = admin;
  }
}
const itDepInstance = new ITDepartmanent("it", ["admin1", "admin2"]);

console.log(itDepInstance.mostRecentAdmin);
itDepInstance.mostRecentAdmin = "last";
console.log(itDepInstance.mostRecentAdmin);

itDepInstance.addEmployee("employee1");
itDepInstance.addEmployee("employee2");
itDepInstance.printEmployee();
const accDepInst = new AccountingDepartment("acc", []);
accDepInst.addEmployee("Mario");
accDepInst.addEmployee("George");
accDepInst.printEmployee();
