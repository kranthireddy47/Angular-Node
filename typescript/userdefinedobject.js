var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*class employee{
  id:number=100;
  name:string="kranthi reddy";
  salary:number=3456;
  empinfo():void{
    console.log("id is "+this.id);
    console.log("name is "+this.name);
    console.log("salary is "+this.salary);
  }
}
let emp1= new employee();
emp1.empinfo();
let emp2 = new employee();
emp2.empinfo(); */
/*class employee{
  constructor(){
    console.log("  object created");
  }
  disinfo(): void{
    console.log("employee function");

  }
}
let emp3=new employee();
emp3.disinfo();*/
//parameter constructor
/*class employee{
  id:number;
  name:string;
  salary:number;
  constructor(id:number,name:string,salary?:number){
    this.id=id;
    this.name=name;
    this.salary=salary;
    console.log("  object created");
  }
  disinfo(): void{
    console.log("employee function");
    console.log("id is "+this.id);
    console.log("name is "+this.name);
    console.log("salary is"+this.salary);
  }
}
let emp3=new employee(100,"ravi",1234);
emp3.disinfo();
let emp4=new employee(200,"raju",7856);
emp4.disinfo();
let emp5=new employee(500,"ramu");
emp5.disinfo();
let emp6=new employee(12,"raju",7856);
emp6.disinfo();*/
/*class employee{

  constructor(public id:number,public name:string,public salary?:number){

    console.log("  object created");
  }
  disinfo(): void{
    console.log("employee function");
    console.log("id is "+this.id);
    console.log("name is "+this.name);
    console.log("salary is"+this.salary);
  }
}
let emp3=new employee(100,"ravi",1234);
emp3.disinfo();*/
/*class employee{
  id:number;
  name:string;
  salary:number;
  disinfo(id:number,name:string,salary:number): void{
    console.log("employee function");
    console.log("id is "+this.id);
    console.log("name is "+this.name);
    console.log("salary is"+this.salary);
  }
}
let emp3=new employee();
emp3.disinfo(100,"ravi",1234);*/
//inheritence
var employee = /** @class */ (function () {
    function employee() {
    }
    employee.prototype.display = function () {
        console.log("employee class function");
    };
    return employee;
}());
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    manager.prototype.display1 = function () {
        console.log("manager function");
    };
    return manager;
}(employee));
var emp1 = new employee();
emp1.display();
var emp2 = new manager();
emp2.display1();
emp2.display();
