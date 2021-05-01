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
/*class employee{
  display(){
    console.log("employee class function");
  }
}
class manager  extends employee{
  display1(){
    console.log("manager function");
  }
}
let emp1=new employee();
emp1.display();
let emp2=new manager();
emp2.display1();
emp2.display();*/
//interface
/*interface emp{
  id:number;
  display():void;
}
class implements emp{
  id:number=100;
  display():void{
    console.log("this method is from the interface which we rae declaring it in the class");

  }
}*/
interface emp{
  id:number;
  name:string;
  age?:number;
}
let emp1:emp={is=123,name="kra"};
