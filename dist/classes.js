"use strict";
class Department {
    // public is the default the property can be accessed from outside the class
    // private only methods can access the class property
    // protected means that this property wont be accessible from outside the class but can be from the classes that extends this class
    // public name:string ;
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // name: string;
        // private employees: string[] = [];
        this.employees = [];
        // this.name = n;
        // this will refer to the instance created from this class
        // class acts as a blueprint for objects/instances real world entity
    }
    printInfo() {
        console.log("Department name is : " + this.name);
    }
    addEmployee(employee) {
        // validation
        this.employees.push(employee);
    }
    printEmployee() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    printInfo2() {
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
    constructor(id, reports) {
        super(id, "reports");
        this.reports = reports;
    }
    addEmployee(employee) {
        // this overwrite the base method with the same name
        if (employee === "Mario") {
            return;
        }
        this.employees.push(employee);
    }
    addReport(report) {
        this.reports.push(report);
    }
    printReport() {
        console.log(this.reports);
    }
}
class ITDepartmanent extends Department {
    constructor(name, admins) {
        super("itDep", name);
        this.name = name;
        this.admins = admins;
        this.lastAdmin = admins[admins.length - 1];
        // call the base class constructor and pass the need arguments
        // you cant call this keyword unless you exec super() method
    }
    // setter set and getters get called to modify a property can be the same method name
    // you call set like this
    set mostRecentAdmin(value) {
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
    addAdmin(admin) {
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
//# sourceMappingURL=classes.js.map